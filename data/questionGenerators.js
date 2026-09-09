import { generateMathQuestion } from "./mathQuestionGenerators.js";
import { generateLanguageQuestion } from "./languageQuestionGenerators.js";
import { generateSerkomQuestion } from "./serkomQuestionGenerators.js";
import { topics } from "./topics.js";
import { questionSolutionSteps } from "./pedagogy.js";

const EASY_LEADS = [
  "Cermati informasi berikut:",
  "Gunakan konsep yang sesuai:",
  "Perhatikan data berikut:",
  "Tentukan jawaban yang tepat:",
  "Berdasarkan informasi yang diberikan:",
  "Pilih hasil yang benar:",
  "Analisis informasi berikut:",
  "Perhatikan hubungan berikut:"
];

const MEDIUM_LEADS = [
  "Tinjau situasi berikut:",
  "Hubungkan informasi berikut dengan konsep materi:",
  "Tentukan jawaban berdasarkan proses yang tepat:",
  "Cermati hubungan antarinformasi berikut:",
  "Pilih jawaban yang paling tepat berdasarkan materi:",
  "Gunakan seluruh informasi yang relevan:",
  "Analisis kondisi berikut secara runtut:",
  "Periksa hubungan data sebelum menentukan jawaban:"
];

const EASY_TAILS = [
  "Gunakan informasi yang dinyatakan secara langsung.",
  "Periksa syarat utama sebelum memilih jawaban.",
  "Gunakan konsep inti tanpa menambah asumsi.",
  "Pastikan hasil sesuai dengan data yang tersedia."
];

const MEDIUM_TAILS = [
  "Perhatikan hubungan antarbagian sebelum memilih jawaban.",
  "Gunakan lebih dari satu informasi yang relevan.",
  "Pastikan alasan dan hasil akhir konsisten.",
  "Eliminasi pilihan yang tidak sesuai dengan konsep."
];

const HARD_LEADS = [
  "Analisis terpadu:",
  "Evaluasi dua kondisi berikut:",
  "Cermati dua persoalan berikut:",
  "Gunakan konsep materi secara menyeluruh:",
  "Tentukan pasangan jawaban yang konsisten:",
  "Periksa dua penerapan konsep berikut:",
  "Analisis kedua bagian secara mandiri:",
  "Evaluasi hasil untuk dua kondisi berikut:"
];

const COMPLEX_MULTI_POSITIONS = new Set([4, 10, 16, 22]);
const COMPLEX_MATRIX_POSITIONS = new Set([7, 13, 19, 25]);
const TKA_SUBJECTS = new Set(["matematika", "bahasa-indonesia", "bahasa-inggris"]);

export function shuffle(items) {
  const values = [...items];
  for (let i = values.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}

function normalize(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}

function topicFor(topicId) {
  return topics.find((item) => item.id === topicId);
}

function subjectForTopic(topicId) {
  return topicFor(topicId)?.subjectId ?? "matematika";
}

function answerTexts(question) {
  const indexes = Array.isArray(question.answer) ? question.answer : [question.answer];
  return indexes.map((index) => question.options?.[index]).filter((value) => value !== undefined).map(String);
}

function statementSignature(question) {
  return (question.statements ?? []).map((item) => normalize(item.text)).join("|");
}

export function questionSignature(question) {
  const topicPart = normalize(question.topicId ?? "");
  const stimulusPart = normalize(question.stimulus ?? "");
  if (question.type === "matrix") return `${topicPart}::matrix::${stimulusPart}::${normalize(question.q)}::${statementSignature(question)}`;
  const optionsPart = [...(question.options ?? [])].map(normalize).sort().join("|");
  return `${topicPart}::${normalize(question.type ?? "single")}::${stimulusPart}::${normalize(question.q)}::${optionsPart}`;
}

export function difficultyPlan(count = 25) {
  if (count === 25) return [...Array(8).fill("Mudah"), ...Array(9).fill("Sedang"), ...Array(8).fill("Sulit")];
  const easy = Math.floor(count * 0.32);
  const hard = Math.floor(count * 0.32);
  const medium = count - easy - hard;
  return [...Array(easy).fill("Mudah"), ...Array(medium).fill("Sedang"), ...Array(hard).fill("Sulit")];
}

function generateBaseQuestion(topicId) {
  if (topicId.startsWith("serkom-")) return generateSerkomQuestion(topicId);
  if (topicId.startsWith("bi-") || topicId.startsWith("en-")) return generateLanguageQuestion(topicId);
  return generateMathQuestion(topicId);
}

function generateBaseSingle(topicId) {
  for (let attempt = 0; attempt < 120; attempt += 1) {
    const item = generateBaseQuestion(topicId);
    if (!Array.isArray(item.answer) && Array.isArray(item.options) && item.options.length >= 2) return item;
  }
  const item = generateBaseQuestion(topicId);
  if (Array.isArray(item.answer)) {
    const answer = item.answer[0] ?? 0;
    return { ...item, answer, type: "single" };
  }
  return item;
}

function donorOptions(topicId, existing, limit = 20) {
  const output = [];
  const seen = new Set(existing.map(normalize));
  for (let attempt = 0; attempt < limit && output.length < 8; attempt += 1) {
    const donor = generateBaseQuestion(topicId);
    for (const option of donor.options ?? []) {
      const text = String(option);
      const key = normalize(text);
      if (key && !seen.has(key)) {
        seen.add(key);
        output.push(text);
      }
    }
  }
  return output;
}

function normalizeFiveOptions(base, topicId) {
  if (base.type === "matrix") return base;
  const sourceOptions = [...new Set((base.options ?? []).map(String))];
  const correctTexts = answerTexts(base);
  const donors = donorOptions(topicId, sourceOptions);
  const fallback = subjectForTopic(topicId) === "matematika"
    ? ["Tidak dapat ditentukan", "0", "1", "−1", "Tidak ada pilihan yang sesuai"]
    : ["Tidak dapat disimpulkan dari informasi yang tersedia.", "Pernyataan tersebut tidak didukung konteks.", "Semua pilihan lain benar.", "Tidak ada informasi yang relevan.", "Kesimpulan tersebut terlalu umum."];
  const pool = [...sourceOptions, ...donors, ...fallback].filter((value, index, array) => array.findIndex((item) => normalize(item) === normalize(value)) === index);
  if (Array.isArray(base.answer)) {
    const correctSet = new Set(correctTexts.map(normalize));
    const wrong = pool.filter((item) => !correctSet.has(normalize(item)));
    const selected = [...correctTexts, ...wrong.slice(0, Math.max(0, 5 - correctTexts.length))].slice(0, 5);
    const options = shuffle(selected);
    const answer = correctTexts.map((text) => options.findIndex((option) => normalize(option) === normalize(text))).filter((index) => index >= 0).sort((a, b) => a - b);
    return { ...base, options, answer, type: "multiple" };
  }
  const correct = String(base.options?.[base.answer] ?? "");
  const wrong = pool.filter((item) => normalize(item) !== normalize(correct));
  const options = shuffle([correct, ...wrong.slice(0, 4)]);
  return { ...base, options, answer: options.findIndex((option) => normalize(option) === normalize(correct)), type: "single" };
}

function answerText(question) {
  return answerTexts(question).join(" + ");
}

function wrongText(question, offset = 0) {
  const answers = new Set(Array.isArray(question.answer) ? question.answer : [question.answer]);
  const wrong = question.options.filter((_, index) => !answers.has(index));
  return wrong[offset % Math.max(1, wrong.length)] ?? question.options[0];
}

function frameQuestion(base, difficulty, variantIndex) {
  const points = 4;
  if (difficulty === "Mudah") {
    const lead = EASY_LEADS[variantIndex % EASY_LEADS.length];
    const tail = EASY_TAILS[Math.floor(variantIndex / EASY_LEADS.length) % EASY_TAILS.length];
    return { ...base, q: `${lead} ${base.q} ${tail}`, difficulty, points };
  }
  const lead = MEDIUM_LEADS[variantIndex % MEDIUM_LEADS.length];
  const tail = MEDIUM_TAILS[Math.floor(variantIndex / MEDIUM_LEADS.length) % MEDIUM_TAILS.length];
  return { ...base, q: `${lead} ${base.q} ${tail}`, difficulty, points };
}

function hardQuestion(topicId, variantIndex) {
  const first = normalizeFiveOptions(generateBaseSingle(topicId), topicId);
  let second = normalizeFiveOptions(generateBaseSingle(topicId), topicId);
  let guard = 0;
  while (normalize(first.q) === normalize(second.q) && guard < 40) {
    second = normalizeFiveOptions(generateBaseSingle(topicId), topicId);
    guard += 1;
  }
  const correctFirst = answerText(first);
  const correctSecond = answerText(second);
  const wrongFirstA = wrongText(first, variantIndex);
  const wrongFirstB = wrongText(first, variantIndex + 2);
  const wrongSecondA = wrongText(second, variantIndex + 1);
  const wrongSecondB = wrongText(second, variantIndex + 3);
  const correct = `(1) ${correctFirst} | (2) ${correctSecond}`;
  const candidates = [
    correct,
    `(1) ${wrongFirstA} | (2) ${correctSecond}`,
    `(1) ${correctFirst} | (2) ${wrongSecondA}`,
    `(1) ${wrongFirstA} | (2) ${wrongSecondB}`,
    `(1) ${wrongFirstB} | (2) ${wrongSecondA}`
  ];
  const options = shuffle([...new Set(candidates)]);
  if (options.length < 5) return hardQuestion(topicId, variantIndex + 11);
  const lead = HARD_LEADS[variantIndex % HARD_LEADS.length];
  const q = `${lead}\n(1) ${first.q}\n(2) ${second.q}\nPilih pasangan jawaban yang benar untuk bagian (1) dan (2).`;
  const explain = `Bagian (1): ${first.explain} Bagian (2): ${second.explain}`;
  return {
    q,
    options,
    answer: options.indexOf(correct),
    explain,
    difficulty: "Sulit",
    points: 4,
    type: "single",
    solutionSteps: [
      "Pisahkan persoalan menjadi bagian (1) dan bagian (2).",
      `Selesaikan bagian (1) secara mandiri. Hasil yang benar adalah ${correctFirst}.`,
      `Selesaikan bagian (2) secara mandiri. Hasil yang benar adalah ${correctSecond}.`,
      "Gabungkan kedua hasil tanpa mengubah urutan bagian.",
      "Pilih opsi yang memuat kedua jawaban tersebut secara bersamaan."
    ]
  };
}

function propositionFromBase(topicId, shouldBeTrue, variantIndex) {
  const base = normalizeFiveOptions(generateBaseSingle(topicId), topicId);
  const correct = String(base.options[base.answer]);
  const candidate = shouldBeTrue ? correct : wrongText(base, variantIndex);
  return {
    text: `Pada persoalan “${base.q}”, jawaban “${candidate}” dinyatakan tepat.`,
    correct: shouldBeTrue,
    explain: base.explain
  };
}

function uniquePropositions(topicId, truthPattern, variantIndex) {
  const propositions = [];
  const used = new Set();
  for (let index = 0; index < truthPattern.length; index += 1) {
    let accepted = null;
    for (let attempt = 0; attempt < 240 && !accepted; attempt += 1) {
      const item = propositionFromBase(topicId, truthPattern[index], variantIndex + index * 31 + attempt * 13);
      const key = normalize(item.text);
      if (!used.has(key)) accepted = item;
    }
    if (!accepted) throw new Error(`Tidak dapat membuat pernyataan unik untuk ${topicId}.`);
    used.add(normalize(accepted.text));
    propositions.push(accepted);
  }
  return propositions;
}

function complexMultiQuestion(topicId, difficulty, variantIndex) {
  const truthPattern = variantIndex % 2 === 0 ? [true, false, true, false, true] : [false, true, true, false, true];
  const propositions = uniquePropositions(topicId, truthPattern, variantIndex);
  const options = propositions.map((item) => item.text);
  const answer = propositions.map((item, index) => item.correct ? index : -1).filter((index) => index >= 0);
  return {
    stimulus: "Nilai setiap opsi secara mandiri menggunakan konsep pada materi aktif. Beberapa opsi dapat benar secara bersamaan.",
    q: "Pilih semua pernyataan yang benar berdasarkan informasi dan konsep yang diberikan.",
    options,
    answer,
    explain: propositions.map((item, index) => `Opsi ${String.fromCharCode(65 + index)}: ${item.explain}`).join(" "),
    difficulty,
    points: 4,
    type: "multiple",
    solutionSteps: [
      "Baca setiap opsi sebagai pernyataan yang berdiri sendiri.",
      "Selesaikan persoalan pada setiap opsi tanpa mengandalkan hasil opsi lain.",
      "Tandai hanya opsi yang sesuai dengan hasil atau konsep yang benar.",
      "Periksa kembali seluruh opsi sebelum mengunci kombinasi jawaban."
    ]
  };
}

function matrixQuestion(topicId, difficulty, variantIndex) {
  const truthPattern = variantIndex % 2 === 0 ? [true, false, true, false] : [false, true, false, true];
  const statements = uniquePropositions(topicId, truthPattern, variantIndex + 5000);
  return {
    stimulus: "Cermati empat penerapan konsep berikut. Setiap baris harus dinilai secara terpisah.",
    q: "Tentukan status Benar atau Salah untuk setiap pernyataan.",
    statements: statements.map((item) => ({ text: item.text, answer: item.correct })),
    explain: statements.map((item, index) => `Pernyataan ${index + 1}: ${item.explain}`).join(" "),
    difficulty,
    points: 4,
    type: "matrix",
    solutionSteps: [
      "Baca satu pernyataan pada satu waktu.",
      "Selesaikan persoalan atau verifikasi konsep yang disebutkan pada baris tersebut.",
      "Pilih Benar jika seluruh klaim sesuai, atau Salah jika terdapat ketidaksesuaian.",
      "Pastikan semua baris telah dinilai sebelum mengunci jawaban."
    ]
  };
}

function requestedFormat(topicId, position) {
  const subjectId = subjectForTopic(topicId);
  if (!TKA_SUBJECTS.has(subjectId)) return "standard";
  const oneBased = position + 1;
  if (COMPLEX_MATRIX_POSITIONS.has(oneBased)) return "matrix";
  if (COMPLEX_MULTI_POSITIONS.has(oneBased)) return "multiple";
  return "standard";
}


function applyTkaPresentation(topicId, result) {
  const subjectId = subjectForTopic(topicId);
  if (!TKA_SUBJECTS.has(subjectId) || result.stimulus || result.type === "matrix") return result;
  if (result.type === "multiple") {
    return { ...result, stimulus: result.q, q: subjectId === "bahasa-inggris" ? "Select all statements that are supported by the stimulus." : "Pilih semua pernyataan yang benar berdasarkan stimulus." };
  }
  return { ...result, stimulus: result.q, q: subjectId === "bahasa-inggris" ? "Choose the most accurate answer based on the stimulus." : "Pilih jawaban yang paling tepat berdasarkan stimulus." };
}

export function generateQuestion(topicId, difficulty = "Sedang", variantIndex = 0, format = "standard") {
  let result;
  if (format === "matrix") result = matrixQuestion(topicId, difficulty, variantIndex);
  else if (format === "multiple") result = complexMultiQuestion(topicId, difficulty, variantIndex);
  else if (difficulty === "Sulit") result = normalizeFiveOptions(hardQuestion(topicId, variantIndex), topicId);
  else result = normalizeFiveOptions(frameQuestion(generateBaseQuestion(topicId), difficulty, variantIndex), topicId);
  result = applyTkaPresentation(topicId, result);
  const topic = topicFor(topicId);
  const solutionSteps = Array.isArray(result.solutionSteps) && result.solutionSteps.length >= 3
    ? result.solutionSteps
    : topic
      ? questionSolutionSteps(result, topic)
      : [result.explain, "Tentukan konsep yang digunakan.", "Periksa kembali jawaban akhir."];
  return { ...result, solutionSteps };
}

function generateUniqueQuestion(topicId, difficulty, format, used, excluded, startIndex) {
  for (let attempt = 0; attempt < 12000; attempt += 1) {
    const item = generateQuestion(topicId, difficulty, startIndex + attempt, format);
    const signature = questionSignature(item);
    if (!used.has(signature) && !excluded.has(signature)) return { item, signature, attempts: attempt + 1 };
  }
  return null;
}

export function generateQuestionsForTopic(topicId, count = 25, excludeSignatures = []) {
  const output = [];
  const used = new Set();
  const excluded = new Set(excludeSignatures);
  const plan = difficultyPlan(count);
  let variantIndex = Math.floor(Math.random() * 100000);
  for (const difficulty of plan) {
    const format = requestedFormat(topicId, output.length);
    const generated = generateUniqueQuestion(topicId, difficulty, format, used, excluded, variantIndex);
    if (!generated) throw new Error(`Tidak dapat membuat soal unik untuk ${topicId}.`);
    variantIndex += generated.attempts + 7;
    used.add(generated.signature);
    output.push({ ...generated.item, points: 100 / count, key: `${topicId}-${Date.now()}-${output.length}-${Math.random()}` });
  }
  return output;
}

export function generateMixedQuestions(topicList, count = 25, excludeSignatures = []) {
  const output = [];
  const used = new Set();
  const excluded = new Set(excludeSignatures);
  const plan = difficultyPlan(count);
  let variantIndex = Math.floor(Math.random() * 100000);
  for (const difficulty of plan) {
    let accepted = null;
    for (let attempt = 0; attempt < 16000 && !accepted; attempt += 1) {
      const topic = topicList[Math.floor(Math.random() * topicList.length)];
      const format = requestedFormat(topic.id, output.length);
      const item = generateQuestion(topic.id, difficulty, variantIndex + attempt, format);
      const enriched = { ...item, topicId: topic.id, topicTitle: topic.title, subjectId: topic.subjectId };
      const signature = questionSignature(enriched);
      if (!used.has(signature) && !excluded.has(signature)) accepted = { enriched, signature, attempts: attempt + 1 };
    }
    if (!accepted) throw new Error("Tidak dapat membuat simulasi unik.");
    variantIndex += accepted.attempts + 11;
    used.add(accepted.signature);
    output.push({ ...accepted.enriched, points: 100 / count, key: `sim-${accepted.enriched.topicId}-${Date.now()}-${output.length}-${Math.random()}` });
  }
  return output;
}
