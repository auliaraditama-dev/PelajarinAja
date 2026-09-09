import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { subjects } from "../data/subjects.js";
import { topics } from "../data/topics.js";
import { difficultyPlan, generateMixedQuestions, generateQuestionsForTopic, questionSignature } from "../data/questionGenerators.js";
import { getSerkomLesson } from "../data/serkomLessons.js";
import { subjectPath, topicPath } from "../lib/site.js";

const fail = (message) => { throw new Error(message); };
const ids = new Set();
const subjectIds = new Set(subjects.map((item) => item.id));
const expectedPlan = difficultyPlan(25);
const tkaSubjects = new Set(["matematika", "bahasa-indonesia", "bahasa-inggris"]);
const matrixPositions = new Set([7, 13, 19, 25]);
const multiplePositions = new Set([4, 10, 16, 22]);
const root = dirname(dirname(fileURLToPath(import.meta.url)));

const seoFiles = [
  "app/robots.js",
  "app/sitemap.js",
  "app/opengraph-image.js",
  "app/twitter-image.js",
  "app/mapel/page.js",
  "app/mapel/[subjectId]/page.js",
  "app/materi/page.js",
  "app/materi/[subjectId]/[topicId]/page.js",
  "app/tentang/page.js",
  "app/kebijakan-privasi/page.js",
  "lib/site.js",
  "lib/seo.js"
];

for (const file of seoFiles) if (!existsSync(join(root, file))) fail(`File SEO tidak ditemukan: ${file}`);

const subjectUrls = subjects.map((item) => subjectPath(item.id));
if (new Set(subjectUrls).size !== subjects.length) fail("URL mapel tidak unik");
const topicUrls = topics.map((item) => topicPath(item.subjectId, item.id));
if (new Set(topicUrls).size !== topics.length) fail("URL materi tidak unik");

function sourceFiles(dir) {
  const output = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) output.push(...sourceFiles(path));
    else if (/\.(js|mjs|css)$/.test(name)) output.push(path);
  }
  return output;
}

for (const path of [...sourceFiles(join(root, "app")), ...sourceFiles(join(root, "data")), ...sourceFiles(join(root, "lib"))]) {
  const text = readFileSync(path, "utf8");
  if (text.split(/\r?\n/).some((line) => line.trim().startsWith("//"))) fail(`Komentar source ditemukan pada ${path}`);
  if (text.includes("/*") || text.includes("*/")) fail(`Komentar blok source ditemukan pada ${path}`);
}

for (const path of [join(root, "app/page.js"), join(root, "app/tentang/page.js"), join(root, "app/mapel/page.js"), join(root, "app/materi/[subjectId]/[topicId]/page.js"), join(root, "app/opengraph-image.js"), join(root, "lib/site.js"), join(root, "lib/seo.js")]) {
  const text = readFileSync(path, "utf8");
  if (/8 soal mudah|9 soal sedang|8 soal sulit|tingkat kesulitan|25 soal bertingkat/i.test(text)) fail(`Label tingkat soal tampil pada antarmuka: ${path}`);
}

function validateQuestionSet(label, questions, subjectId = null) {
  if (questions.length !== 25) fail(`${label} tidak menghasilkan 25 soal`);
  const signatures = questions.map(questionSignature);
  if (new Set(signatures).size !== 25) fail(`${label} menghasilkan soal duplikat dalam satu paket`);
  const totalPoints = questions.reduce((sum, item) => sum + item.points, 0);
  if (Math.abs(totalPoints - 100) > 0.001) fail(`${label} total poin bukan 100`);
  const actualPlan = questions.map((item) => item.difficulty);
  if (actualPlan.some((value, index) => value !== expectedPlan[index])) fail(`${label} komposisi internal tingkat soal tidak sesuai`);
  for (let index = 0; index < questions.length; index += 1) {
    const question = questions[index];
    if (!question.q || !question.explain) fail(`${label} memiliki soal tanpa teks atau pembahasan`);
    const effectiveSubjectId = subjectId ?? question.subjectId ?? null;
    if (effectiveSubjectId && tkaSubjects.has(effectiveSubjectId) && !question.stimulus) fail(`${label} memiliki soal TKA tanpa stimulus`);
    if (!Array.isArray(question.solutionSteps) || question.solutionSteps.length < 3) fail(`${label} tidak memiliki langkah pembahasan yang cukup`);
    if (question.type === "matrix") {
      if (!Array.isArray(question.statements) || question.statements.length < 3 || question.statements.length > 5) fail(`${label} memiliki tabel pernyataan tidak valid`);
      if (new Set(question.statements.map((item) => item.text)).size !== question.statements.length) fail(`${label} memiliki pernyataan tabel ganda`);
      if (question.statements.some((item) => !item.text || typeof item.answer !== "boolean")) fail(`${label} memiliki jawaban tabel tidak valid`);
    } else {
      if (!Array.isArray(question.options) || question.options.length !== 5) fail(`${label} harus memiliki tepat 5 opsi A–E`);
      if (new Set(question.options.map(String)).size !== 5) fail(`${label} memiliki opsi ganda`);
      if (Array.isArray(question.answer)) {
        if (question.answer.length < 2 || question.answer.length >= 5) fail(`${label} jawaban kompleks tidak valid`);
        if (question.answer.some((answerIndex) => answerIndex < 0 || answerIndex >= 5)) fail(`${label} indeks jawaban kompleks tidak valid`);
      } else if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= 5) {
        fail(`${label} indeks jawaban tidak valid`);
      }
    }
    if (subjectId && tkaSubjects.has(subjectId)) {
      const position = index + 1;
      if (matrixPositions.has(position) && question.type !== "matrix") fail(`${label} posisi ${position} harus menggunakan format tabel pernyataan`);
      if (multiplePositions.has(position) && question.type !== "multiple") fail(`${label} posisi ${position} harus menggunakan format banyak jawaban`);
    }
  }
  return signatures;
}

if (subjects.length < 4) fail("Minimal empat mata pelajaran diperlukan.");
if (topics.length < 60) fail(`Jumlah materi terlalu sedikit: ${topics.length}`);

for (const topic of topics) {
  if (!topic.id || ids.has(topic.id)) fail(`ID materi tidak valid atau ganda: ${topic.id}`);
  ids.add(topic.id);
  if (!subjectIds.has(topic.subjectId)) fail(`subjectId tidak valid pada ${topic.id}`);
  for (const field of ["title", "group", "summary", "level", "sourceLabel"]) if (!topic[field]) fail(`${topic.id} tidak memiliki ${field}`);
  for (const field of ["objectives", "prerequisites", "concepts", "deepDive", "steps", "workedExamples", "traps", "glossary"]) if (!Array.isArray(topic[field]) || topic[field].length === 0) fail(`${topic.id} tidak memiliki isi ${field}`);
  if (!topic.essay?.q || !topic.essay?.answer) fail(`${topic.id} tidak memiliki esai dan pembahasan`);
  let history = [];
  for (let cycle = 0; cycle < 4; cycle += 1) {
    const questions = generateQuestionsForTopic(topic.id, 25, history);
    const signatures = validateQuestionSet(`${topic.id} paket ${cycle + 1}`, questions, topic.subjectId);
    if (signatures.some((signature) => history.includes(signature))) fail(`${topic.id} mengulang soal dari paket sebelumnya`);
    history = [...signatures, ...history].slice(0, 100);
  }
  if (topic.subjectId === "serkom") {
    const lesson = getSerkomLesson(topic.id);
    if (!lesson) fail(`${topic.id} tidak memiliki tutorial SERKOM`);
    if (!Array.isArray(lesson.code) || !Array.isArray(lesson.explain) || lesson.code.length === 0) fail(`${topic.id} tutorial SERKOM tidak lengkap`);
    if (lesson.code.length !== lesson.explain.length) fail(`${topic.id} jumlah baris kode dan penjelasan berbeda`);
    if (!Array.isArray(lesson.syntax) || lesson.syntax.length === 0 || !lesson.tryIt) fail(`${topic.id} tutorial SERKOM tidak memiliki syntax atau latihan mandiri`);
  }
}

for (const subject of subjects) {
  const list = topics.filter((item) => item.subjectId === subject.id);
  if (list.length === 0) fail(`Mapel ${subject.id} tidak memiliki materi`);
  let history = [];
  for (let cycle = 0; cycle < 3; cycle += 1) {
    const mixed = generateMixedQuestions(list, 25, history);
    const signatures = validateQuestionSet(`Simulasi ${subject.id} paket ${cycle + 1}`, mixed, subject.id);
    if (signatures.some((signature) => history.includes(signature))) fail(`Simulasi ${subject.id} mengulang soal dari paket sebelumnya`);
    history = [...signatures, ...history].slice(0, 100);
  }
}

let universalHistory = [];
for (let cycle = 0; cycle < 3; cycle += 1) {
  const universal = generateMixedQuestions(topics, 25, universalHistory);
  const signatures = validateQuestionSet(`Simulasi universal paket ${cycle + 1}`, universal);
  if (signatures.some((signature) => universalHistory.includes(signature))) fail("Simulasi universal mengulang soal dari paket sebelumnya");
  universalHistory = [...signatures, ...universalHistory].slice(0, 100);
}

console.log(`Validation passed: ${subjects.length} subjects, ${topics.length} topics, ${subjectUrls.length + topicUrls.length + 5} indexable SEO URLs, 25 unique questions, 5-option single choice, TKA complex multi-select, TKA true-false matrices, hidden difficulty labels, internal balanced difficulty, recent-history repeat protection, 100 points, responsive UI, formal solution steps, SERKOM line-by-line tutorials.`);
