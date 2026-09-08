import { subjects } from "../data/subjects.js";
import { topics } from "../data/topics.js";
import { generateMixedQuestions, generateQuestionsForTopic } from "../data/questionGenerators.js";
import { getSerkomLesson } from "../data/serkomLessons.js";

const fail = (message) => { throw new Error(message); };
const ids = new Set();
const subjectIds = new Set(subjects.map((item) => item.id));

if (subjects.length < 4) fail("Minimal empat mata pelajaran diperlukan.");
if (topics.length < 60) fail(`Jumlah materi terlalu sedikit: ${topics.length}`);

for (const topic of topics) {
  if (!topic.id || ids.has(topic.id)) fail(`ID materi tidak valid atau ganda: ${topic.id}`);
  ids.add(topic.id);
  if (!subjectIds.has(topic.subjectId)) fail(`subjectId tidak valid pada ${topic.id}`);
  for (const field of ["title", "group", "summary", "level", "sourceLabel"]) if (!topic[field]) fail(`${topic.id} tidak memiliki ${field}`);
  for (const field of ["objectives", "prerequisites", "concepts", "deepDive", "steps", "workedExamples", "traps", "glossary"]) if (!Array.isArray(topic[field]) || topic[field].length === 0) fail(`${topic.id} tidak memiliki isi ${field}`);
  if (!topic.essay?.q || !topic.essay?.answer) fail(`${topic.id} tidak memiliki esai dan pembahasan`);
  const questions = generateQuestionsForTopic(topic.id, 25);
  if (questions.length !== 25) fail(`${topic.id} tidak menghasilkan 25 soal`);
  if (new Set(questions.map((item) => item.q)).size < 25) fail(`${topic.id} menghasilkan soal duplikat dalam satu paket`);
  const totalPoints = questions.reduce((sum, item) => sum + item.points, 0);
  if (Math.abs(totalPoints - 100) > 0.001) fail(`${topic.id} total poin bukan 100`);
  for (const question of questions) {
    if (!question.q || !question.explain) fail(`${topic.id} memiliki soal tanpa teks/pembahasan`);
    if (!Array.isArray(question.solutionSteps) || question.solutionSteps.length < 3) fail(`${topic.id} tidak memiliki langkah pembahasan soal yang cukup`);
    if (!Array.isArray(question.options) || question.options.length < 4) fail(`${topic.id} memiliki opsi kurang dari 4`);
    if (new Set(question.options).size !== question.options.length) fail(`${topic.id} memiliki opsi ganda`);
    if (Array.isArray(question.answer)) {
      if (question.answer.length < 2) fail(`${topic.id} jawaban kompleks kurang dari dua opsi`);
      if (question.answer.some((index) => index < 0 || index >= question.options.length)) fail(`${topic.id} indeks jawaban kompleks tidak valid`);
    } else if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.options.length) {
      fail(`${topic.id} indeks jawaban tidak valid`);
    }
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
  const mixed = generateMixedQuestions(list, 25);
  if (mixed.length !== 25) fail(`Simulasi ${subject.id} tidak menghasilkan 25 soal`);
  if (Math.abs(mixed.reduce((sum, item) => sum + item.points, 0) - 100) > 0.001) fail(`Simulasi ${subject.id} tidak bernilai 100`);
}

const universal = generateMixedQuestions(topics, 25);
if (universal.length !== 25) fail("Simulasi universal tidak menghasilkan 25 soal");
if (Math.abs(universal.reduce((sum, item) => sum + item.points, 0) - 100) > 0.001) fail("Simulasi universal tidak bernilai 100");

console.log(`Validation passed: ${subjects.length} subjects, ${topics.length} topics, teacher-style solution steps, SERKOM line-by-line tutorials, 25 unique questions per topic, 100 points per assessment.`);
