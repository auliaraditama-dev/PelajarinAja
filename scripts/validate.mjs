import { subjects } from "../data/subjects.js";
import { topics } from "../data/topics.js";
import { difficultyPlan, generateMixedQuestions, generateQuestionsForTopic, questionSignature } from "../data/questionGenerators.js";
import { getSerkomLesson } from "../data/serkomLessons.js";

const fail = (message) => { throw new Error(message); };
const ids = new Set();
const subjectIds = new Set(subjects.map((item) => item.id));
const expectedPlan = difficultyPlan(25);

function validateQuestionSet(label, questions) {
  if (questions.length !== 25) fail(`${label} tidak menghasilkan 25 soal`);
  const signatures = questions.map(questionSignature);
  if (new Set(signatures).size !== 25) fail(`${label} menghasilkan soal duplikat dalam satu paket`);
  const totalPoints = questions.reduce((sum, item) => sum + item.points, 0);
  if (Math.abs(totalPoints - 100) > 0.001) fail(`${label} total poin bukan 100`);
  const actualPlan = questions.map((item) => item.difficulty);
  if (actualPlan.some((value, index) => value !== expectedPlan[index])) fail(`${label} urutan kesulitan tidak sesuai 8 mudah, 9 sedang, 8 sulit`);
  for (const question of questions) {
    if (!question.q || !question.explain) fail(`${label} memiliki soal tanpa teks atau pembahasan`);
    if (!Array.isArray(question.solutionSteps) || question.solutionSteps.length < 3) fail(`${label} tidak memiliki langkah pembahasan yang cukup`);
    if (!Array.isArray(question.options) || question.options.length < 4) fail(`${label} memiliki opsi kurang dari 4`);
    if (new Set(question.options).size !== question.options.length) fail(`${label} memiliki opsi ganda`);
    if (Array.isArray(question.answer)) {
      if (question.answer.length < 2) fail(`${label} jawaban kompleks kurang dari dua opsi`);
      if (question.answer.some((index) => index < 0 || index >= question.options.length)) fail(`${label} indeks jawaban kompleks tidak valid`);
    } else if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.options.length) {
      fail(`${label} indeks jawaban tidak valid`);
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
    const signatures = validateQuestionSet(`${topic.id} paket ${cycle + 1}`, questions);
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
    const signatures = validateQuestionSet(`Simulasi ${subject.id} paket ${cycle + 1}`, mixed);
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

console.log(`Validation passed: ${subjects.length} subjects, ${topics.length} topics, 25 unique questions, 8 easy, 9 medium, 8 hard, recent-history repeat protection, 100 points, formal solution steps, SERKOM line-by-line tutorials.`);
