import { generateMathQuestion } from "./mathQuestionGenerators.js";
import { generateLanguageQuestion } from "./languageQuestionGenerators.js";
import { generateSerkomQuestion } from "./serkomQuestionGenerators.js";
import { topics } from "./topics.js";
import { questionSolutionSteps } from "./pedagogy.js";
import { getSerkomLesson } from "./serkomLessons.js";
import { buildSerkomStimulus, buildTkaStimulus } from "./stimulusBuilders.js";

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


const EN_EASY_LEADS = [
  "Read the information carefully:",
  "Use the details in the text:",
  "Consider the following information:",
  "Identify the most relevant detail:",
  "Based on the information provided:",
  "Read the short passage carefully:",
  "Focus on the stated information:",
  "Choose the answer supported by the text:"
];

const EN_MEDIUM_LEADS = [
  "Analyze the following situation:",
  "Connect the details in the text:",
  "Consider the relationship between the ideas:",
  "Use all relevant information:",
  "Read the passage and evaluate the evidence:",
  "Interpret the information carefully:",
  "Compare the details before answering:",
  "Determine the conclusion best supported by the text:"
];

const EN_EASY_TAILS = [
  "Use only information supported by the text.",
  "Check the key detail before choosing your answer.",
  "Do not add assumptions that are not stated.",
  "Make sure the answer matches the information given."
];

const EN_MEDIUM_TAILS = [
  "Consider how the details work together before choosing an answer.",
  "Use more than one relevant clue when necessary.",
  "Make sure the conclusion is consistent with the evidence.",
  "Eliminate choices that are too broad or unsupported."
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

const EN_HARD_LEADS = [
  "Integrated analysis:",
  "Evaluate the following two situations:",
  "Consider both tasks carefully:",
  "Use the reading concept across both parts:",
  "Determine the pair of answers supported by the evidence:",
  "Evaluate both applications of the concept:",
  "Analyze each part independently:",
  "Compare the conclusions from the two situations:"
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
  const semanticPart = normalize(question.semanticCore ?? question.sourceCore ?? question.coreQuestion ?? question.q ?? "");
  const displayPart = normalize(question.coreQuestion ?? question.q ?? "");
  const codePart = normalize(question.codeExcerpt ?? "");
  if (question.type === "matrix") return `${topicPart}::matrix::${semanticPart}::${displayPart}::${statementSignature(question)}`;
  const optionsPart = [...(question.options ?? [])].map(normalize).sort().join("|");
  return `${topicPart}::${normalize(question.type ?? "single")}::${semanticPart}::${displayPart}::${codePart}::${optionsPart}`;
}

function coreQuestionKey(question) {
  return normalize(question.coreQuestion ?? question.q ?? "");
}

export function difficultyPlan(count = 25) {
  if (count === 25) return [...Array(8).fill("Mudah"), ...Array(9).fill("Sedang"), ...Array(8).fill("Sulit")];
  const easy = Math.floor(count * 0.32);
  const hard = Math.floor(count * 0.32);
  const medium = count - easy - hard;
  return [...Array(easy).fill("Mudah"), ...Array(medium).fill("Sedang"), ...Array(hard).fill("Sulit")];
}

export function questionLengthPlan(count = 25) {
  if (count === 25) return ["Pendek", "Sedang", "Pendek", "Sedang", "Panjang", "Pendek", "Panjang", "Sedang", "Pendek", "Panjang", "Sedang", "Pendek", "Panjang", "Sedang", "Pendek", "Panjang", "Sedang", "Pendek", "Panjang", "Sedang", "Pendek", "Panjang", "Sedang", "Panjang", "Sedang"];
  const values = ["Pendek", "Sedang", "Panjang"];
  return Array.from({ length: count }, (_, index) => values[index % values.length]);
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
  const subjectId = subjectForTopic(topicId);
  const fallback = subjectId === "matematika"
    ? ["Tidak dapat ditentukan dari data yang diberikan.", "Tidak ada hasil yang memenuhi seluruh syarat.", "0", "1", "−1"]
    : subjectId === "bahasa-inggris"
      ? ["The information is not sufficiently supported by the text.", "The statement is too broad for the evidence given.", "The passage does not provide enough evidence for that conclusion.", "The option adds an assumption that is not stated in the text."]
      : subjectId === "serkom"
        ? ["Penjelasan tersebut mencampurkan tanggung jawab komponen yang berbeda.", "Langkah tersebut tidak sesuai dengan alur request-response pada proyek.", "Pernyataan tersebut tidak dapat diverifikasi dari fungsi komponen yang dibahas.", "Komponen tersebut hanya berkaitan dengan tampilan dan tidak menjalankan fungsi yang disebutkan."]
        : ["Informasi tersebut tidak cukup untuk mendukung kesimpulan itu.", "Pernyataan tersebut terlalu luas dibanding bukti pada stimulus.", "Pilihan tersebut menambahkan asumsi yang tidak dinyatakan dalam bacaan.", "Hubungan gagasan pada pilihan tersebut tidak sesuai dengan konteks."];
  const pool = [...sourceOptions, ...fallback, ...donors].filter((value, index, array) => array.findIndex((item) => normalize(item) === normalize(value)) === index);
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

function frameQuestion(topicId, base, difficulty, variantIndex) {
  const points = 4;
  const isEnglish = subjectForTopic(topicId) === "bahasa-inggris";
  if (difficulty === "Mudah") {
    const leads = isEnglish ? EN_EASY_LEADS : EASY_LEADS;
    const tails = isEnglish ? EN_EASY_TAILS : EASY_TAILS;
    const lead = leads[variantIndex % leads.length];
    const tail = tails[Math.floor(variantIndex / leads.length) % tails.length];
    return { ...base, q: `${lead} ${base.q} ${tail}`, difficulty, points };
  }
  const leads = isEnglish ? EN_MEDIUM_LEADS : MEDIUM_LEADS;
  const tails = isEnglish ? EN_MEDIUM_TAILS : MEDIUM_TAILS;
  const lead = leads[variantIndex % leads.length];
  const tail = tails[Math.floor(variantIndex / leads.length) % tails.length];
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
  const isEnglish = subjectForTopic(topicId) === "bahasa-inggris";
  const leads = isEnglish ? EN_HARD_LEADS : HARD_LEADS;
  const lead = leads[variantIndex % leads.length];
  const q = isEnglish
    ? `${lead}\n(1) ${first.q}\n(2) ${second.q}\nChoose the option that gives the correct answers for both part (1) and part (2).`
    : `${lead}\n(1) ${first.q}\n(2) ${second.q}\nPilih pasangan jawaban yang benar untuk bagian (1) dan (2).`;
  const explain = isEnglish
    ? `Part (1): ${first.explain} Part (2): ${second.explain}`
    : `Bagian (1): ${first.explain} Bagian (2): ${second.explain}`;
  return {
    q,
    options,
    answer: options.indexOf(correct),
    explain,
    difficulty: "Sulit",
    points: 4,
    type: "single",
    semanticCore: `${first.q} || ${second.q}`,
    solutionSteps: isEnglish
      ? [
        "Treat part (1) and part (2) as separate reading tasks.",
        `Solve part (1) first. The supported answer is ${correctFirst}.`,
        `Solve part (2) independently. The supported answer is ${correctSecond}.`,
        "Combine the two results without changing their order.",
        "Choose the option that contains both supported answers."
      ]
      : [
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
    explain: base.explain,
    sourceCore: base.q,
    semanticCore: `${base.q} => ${candidate}`
  };
}

function uniquePropositions(topicId, truthPattern, variantIndex) {
  const propositions = [];
  const used = new Set();
  const usedSources = new Set();
  for (let index = 0; index < truthPattern.length; index += 1) {
    let accepted = null;
    for (let attempt = 0; attempt < 240 && !accepted; attempt += 1) {
      const item = propositionFromBase(topicId, truthPattern[index], variantIndex + index * 31 + attempt * 13);
      const key = normalize(item.text);
      const sourceKey = normalize(item.sourceCore);
      if (!used.has(key) && !usedSources.has(sourceKey)) accepted = item;
    }
    if (!accepted) throw new Error(`Tidak dapat membuat pernyataan unik untuk ${topicId}.`);
    used.add(normalize(accepted.text));
    usedSources.add(normalize(accepted.sourceCore));
    propositions.push(accepted);
  }
  return propositions;
}

function complexMultiQuestion(topicId, difficulty, variantIndex) {
  const truthPattern = variantIndex % 2 === 0 ? [true, false, true, false, true] : [false, true, true, false, true];
  const propositions = uniquePropositions(topicId, truthPattern, variantIndex);
  const options = propositions.map((item) => item.text);
  const answer = propositions.map((item, index) => item.correct ? index : -1).filter((index) => index >= 0);
  const isEnglish = subjectForTopic(topicId) === "bahasa-inggris";
  return {
    stimulus: isEnglish ? "Evaluate each option independently using the active reading concept. More than one option may be correct." : "Nilai setiap opsi secara mandiri menggunakan konsep pada materi aktif. Beberapa opsi dapat benar secara bersamaan.",
    q: isEnglish ? "Select all statements that are correct based on the information and concept provided." : "Pilih semua pernyataan yang benar berdasarkan informasi dan konsep yang diberikan.",
    options,
    answer,
    explain: propositions.map((item, index) => `${isEnglish ? "Option" : "Opsi"} ${String.fromCharCode(65 + index)}: ${item.explain}`).join(" "),
    difficulty,
    points: 4,
    type: "multiple",
    semanticCore: propositions.map((item) => item.semanticCore).join(" || "),
    solutionSteps: isEnglish
      ? [
        "Read each option as an independent statement.",
        "Evaluate the evidence for each option without depending on another option.",
        "Select only statements that are fully supported by the text or concept.",
        "Review the complete combination before locking the answer."
      ]
      : [
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
  const isEnglish = subjectForTopic(topicId) === "bahasa-inggris";
  return {
    stimulus: isEnglish ? "Consider the four applications of the concept below. Evaluate each row independently." : "Cermati empat penerapan konsep berikut. Setiap baris harus dinilai secara terpisah.",
    q: isEnglish ? "Decide whether each statement is True or False." : "Tentukan status Benar atau Salah untuk setiap pernyataan.",
    statements: statements.map((item) => ({ text: item.text, answer: item.correct })),
    explain: statements.map((item, index) => `${isEnglish ? "Statement" : "Pernyataan"} ${index + 1}: ${item.explain}`).join(" "),
    difficulty,
    points: 4,
    type: "matrix",
    semanticCore: statements.map((item) => item.semanticCore).join(" || "),
    solutionSteps: isEnglish
      ? [
        "Read one statement at a time.",
        "Check the evidence or concept used in that statement.",
        "Choose True only when the complete claim is supported; otherwise choose False.",
        "Make sure every row has been evaluated before locking the answer."
      ]
      : [
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


function applyPresentation(topicId, result, variantIndex, lengthClass) {
  const topic = topicFor(topicId);
  if (!topic) return result;
  const subjectId = topic.subjectId;
  if (TKA_SUBJECTS.has(subjectId)) {
    const built = buildTkaStimulus(topic, result, variantIndex, lengthClass);
    if (result.type === "matrix") {
      return {
        ...result,
        stimulus: built.text,
        contextKey: built.key,
        coreQuestion: built.coreQuestion,
        q: built.question,
        readingLabel: built.readingLabel,
        questionLabel: built.questionLabel
      };
    }
    if (result.type === "multiple") {
      return {
        ...result,
        stimulus: built.text,
        contextKey: built.key,
        coreQuestion: built.coreQuestion,
        q: built.question,
        readingLabel: built.readingLabel,
        questionLabel: built.questionLabel
      };
    }
    return {
      ...result,
      stimulus: built.text,
      contextKey: built.key,
      coreQuestion: built.coreQuestion,
      q: built.question,
      readingLabel: built.readingLabel,
      questionLabel: built.questionLabel
    };
  }
  if (subjectId === "serkom") {
    const lesson = getSerkomLesson(topicId);
    const built = buildSerkomStimulus(topic, lesson, result, variantIndex, lengthClass);
    return {
      ...result,
      stimulus: built.stimulus,
      codeExcerpt: built.codeExcerpt,
      contextKey: built.key,
      coreQuestion: built.coreQuestion,
      q: built.question,
      readingLabel: built.readingLabel,
      questionLabel: built.questionLabel
    };
  }
  return result;
}

export function generateQuestion(topicId, difficulty = "Sedang", variantIndex = 0, format = "standard", lengthClass = "Sedang") {
  let result;
  if (format === "matrix") result = matrixQuestion(topicId, difficulty, variantIndex);
  else if (format === "multiple") result = complexMultiQuestion(topicId, difficulty, variantIndex);
  else if (difficulty === "Sulit") result = normalizeFiveOptions(hardQuestion(topicId, variantIndex), topicId);
  else {
    const base = generateBaseQuestion(topicId);
    result = normalizeFiveOptions(frameQuestion(topicId, { ...base, semanticCore: base.q }, difficulty, variantIndex), topicId);
  }
  result = applyPresentation(topicId, result, variantIndex, lengthClass);
  const topic = topicFor(topicId);
  const solutionSteps = Array.isArray(result.solutionSteps) && result.solutionSteps.length >= 3
    ? result.solutionSteps
    : topic
      ? questionSolutionSteps(result, topic)
      : [result.explain, "Tentukan konsep yang digunakan.", "Periksa kembali jawaban akhir."];
  return { ...result, topicId, subjectId: subjectForTopic(topicId), lengthClass, solutionSteps };
}

function generateUniqueQuestion(topicId, difficulty, format, lengthClass, used, usedCore, excluded, startIndex) {
  for (let attempt = 0; attempt < 12000; attempt += 1) {
    const item = generateQuestion(topicId, difficulty, startIndex + attempt, format, lengthClass);
    const signature = questionSignature(item);
    const core = coreQuestionKey(item);
    if (!used.has(signature) && !usedCore.has(core) && !excluded.has(signature)) return { item, signature, core, attempts: attempt + 1 };
  }
  return null;
}

export function generateQuestionsForTopic(topicId, count = 25, excludeSignatures = []) {
  const output = [];
  const used = new Set();
  const usedCore = new Set();
  const excluded = new Set(excludeSignatures);
  const plan = difficultyPlan(count);
  const lengthPlan = questionLengthPlan(count);
  let variantIndex = Date.now() * 1000 + Math.floor(Math.random() * 1000);
  for (const difficulty of plan) {
    const format = requestedFormat(topicId, output.length);
    const lengthClass = lengthPlan[output.length] ?? "Sedang";
    const generated = generateUniqueQuestion(topicId, difficulty, format, lengthClass, used, usedCore, excluded, variantIndex);
    if (!generated) throw new Error(`Tidak dapat membuat soal unik untuk ${topicId}.`);
    variantIndex += generated.attempts + 7;
    used.add(generated.signature);
    usedCore.add(generated.core);
    output.push({ ...generated.item, points: 100 / count, key: `${topicId}-${Date.now()}-${output.length}-${Math.random()}` });
  }
  return output;
}

export function generateMixedQuestions(topicList, count = 25, excludeSignatures = []) {
  const output = [];
  const used = new Set();
  const usedCore = new Set();
  const excluded = new Set(excludeSignatures);
  const plan = difficultyPlan(count);
  const lengthPlan = questionLengthPlan(count);
  let variantIndex = Date.now() * 1000 + Math.floor(Math.random() * 1000);
  for (const difficulty of plan) {
    let accepted = null;
    for (let attempt = 0; attempt < 16000 && !accepted; attempt += 1) {
      const topic = topicList[Math.floor(Math.random() * topicList.length)];
      const format = requestedFormat(topic.id, output.length);
      const lengthClass = lengthPlan[output.length] ?? "Sedang";
      const item = generateQuestion(topic.id, difficulty, variantIndex + attempt, format, lengthClass);
      const enriched = { ...item, topicId: topic.id, topicTitle: topic.title, subjectId: topic.subjectId };
      const signature = questionSignature(enriched);
      const core = coreQuestionKey(enriched);
      if (!used.has(signature) && !usedCore.has(core) && !excluded.has(signature)) accepted = { enriched, signature, core, attempts: attempt + 1 };
    }
    if (!accepted) throw new Error("Tidak dapat membuat simulasi unik.");
    variantIndex += accepted.attempts + 11;
    used.add(accepted.signature);
    usedCore.add(accepted.core);
    output.push({ ...accepted.enriched, points: 100 / count, key: `sim-${accepted.enriched.topicId}-${Date.now()}-${output.length}-${Math.random()}` });
  }
  return output;
}
