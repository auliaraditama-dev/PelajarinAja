import { generateMathQuestion } from "./mathQuestionGenerators.js";
import { generateLanguageQuestion } from "./languageQuestionGenerators.js";
import { generateSerkomQuestion } from "./serkomQuestionGenerators.js";
import { topics } from "./topics.js";
import { questionSolutionSteps } from "./pedagogy.js";

const EASY_LEADS = [
  "Konsep dasar:",
  "Pemahaman awal:",
  "Identifikasi konsep:",
  "Penerapan langsung:",
  "Dasar materi:",
  "Tentukan jawaban yang tepat:",
  "Cermati informasi berikut:",
  "Pilih hasil yang benar:"
];

const MEDIUM_LEADS = [
  "Penerapan konsep:",
  "Analisis penerapan:",
  "Gunakan konsep yang sesuai:",
  "Tinjau situasi berikut:",
  "Hubungkan informasi berikut dengan konsep materi:",
  "Tentukan jawaban berdasarkan proses yang tepat:",
  "Cermati hubungan antarinformasi berikut:",
  "Pilih jawaban yang paling tepat berdasarkan materi:"
];

const EASY_TAILS = [
  "Fokus pada definisi atau aturan utama.",
  "Gunakan langkah paling langsung.",
  "Periksa informasi yang dinyatakan secara eksplisit.",
  "Gunakan konsep inti tanpa menambah asumsi."
];

const MEDIUM_TAILS = [
  "Perhatikan hubungan antarbagian sebelum memilih jawaban.",
  "Gunakan lebih dari satu informasi yang relevan.",
  "Pastikan alasan dan hasil akhir konsisten.",
  "Eliminasi pilihan yang tidak sesuai dengan konsep."
];

const HARD_LEADS = [
  "Analisis terpadu:",
  "Evaluasi dua bagian berikut:",
  "Soal integratif:",
  "Analisis tingkat lanjut:",
  "Cermati dua persoalan yang saling berkaitan:",
  "Tentukan pasangan jawaban yang konsisten:",
  "Gunakan konsep materi secara menyeluruh:",
  "Evaluasi hasil untuk dua kondisi berikut:"
];

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

export function questionSignature(question) {
  const topicPart = normalize(question.topicId ?? "");
  const optionsPart = [...(question.options ?? [])].map(normalize).sort().join("|");
  return `${topicPart}::${normalize(question.q)}::${optionsPart}`;
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

function answerText(question) {
  const indexes = Array.isArray(question.answer) ? question.answer : [question.answer];
  return indexes.map((index) => question.options[index]).join(" + ");
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
  let first = generateBaseQuestion(topicId);
  let second = generateBaseQuestion(topicId);
  let guard = 0;
  while (normalize(first.q) === normalize(second.q) && guard < 30) {
    second = generateBaseQuestion(topicId);
    guard += 1;
  }
  const correctFirst = answerText(first);
  const correctSecond = answerText(second);
  const wrongFirst = wrongText(first, variantIndex);
  const wrongSecond = wrongText(second, variantIndex + 1);
  const correct = `(1) ${correctFirst} | (2) ${correctSecond}`;
  const candidates = [
    correct,
    `(1) ${wrongFirst} | (2) ${correctSecond}`,
    `(1) ${correctFirst} | (2) ${wrongSecond}`,
    `(1) ${wrongFirst} | (2) ${wrongSecond}`
  ];
  const options = shuffle([...new Set(candidates)]);
  if (options.length < 4) return hardQuestion(topicId, variantIndex + 1);
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

export function generateQuestion(topicId, difficulty = "Sedang", variantIndex = 0) {
  const result = difficulty === "Sulit" ? hardQuestion(topicId, variantIndex) : frameQuestion(generateBaseQuestion(topicId), difficulty, variantIndex);
  const topic = topics.find((item) => item.id === topicId);
  const solutionSteps = Array.isArray(result.solutionSteps) && result.solutionSteps.length >= 3
    ? result.solutionSteps
    : topic
      ? questionSolutionSteps(result, topic)
      : [result.explain, "Tentukan konsep yang digunakan.", "Periksa kembali jawaban akhir."];
  return { ...result, solutionSteps };
}

function generateUniqueQuestion(topicId, difficulty, used, excluded, startIndex) {
  for (let attempt = 0; attempt < 12000; attempt += 1) {
    const item = generateQuestion(topicId, difficulty, startIndex + attempt);
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
    let generated = generateUniqueQuestion(topicId, difficulty, used, excluded, variantIndex);
    if (!generated) generated = generateUniqueQuestion(topicId, difficulty, used, new Set(), variantIndex + 50000);
    if (!generated) throw new Error(`Tidak dapat membuat soal unik untuk ${topicId} pada tingkat ${difficulty}.`);
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
      const item = generateQuestion(topic.id, difficulty, variantIndex + attempt);
      const enriched = { ...item, topicId: topic.id, topicTitle: topic.title, subjectId: topic.subjectId };
      const signature = questionSignature(enriched);
      if (!used.has(signature) && !excluded.has(signature)) accepted = { enriched, signature, attempts: attempt + 1 };
    }
    if (!accepted) {
      for (let attempt = 0; attempt < 16000 && !accepted; attempt += 1) {
        const topic = topicList[Math.floor(Math.random() * topicList.length)];
        const item = generateQuestion(topic.id, difficulty, variantIndex + 20000 + attempt);
        const enriched = { ...item, topicId: topic.id, topicTitle: topic.title, subjectId: topic.subjectId };
        const signature = questionSignature(enriched);
        if (!used.has(signature)) accepted = { enriched, signature, attempts: attempt + 1 };
      }
    }
    if (!accepted) throw new Error(`Tidak dapat membuat simulasi unik pada tingkat ${difficulty}.`);
    variantIndex += accepted.attempts + 11;
    used.add(accepted.signature);
    output.push({ ...accepted.enriched, points: 100 / count, key: `sim-${accepted.enriched.topicId}-${Date.now()}-${output.length}-${Math.random()}` });
  }
  return output;
}
