import { generateMathQuestion } from "./mathQuestionGenerators.js";
import { generateLanguageQuestion } from "./languageQuestionGenerators.js";
import { generateSerkomQuestion } from "./serkomQuestionGenerators.js";

export function shuffle(items) {
  const values = [...items];
  for (let i = values.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}

export function generateQuestion(topicId) {
  if (topicId.startsWith("serkom-")) return generateSerkomQuestion(topicId);
  if (topicId.startsWith("bi-") || topicId.startsWith("en-")) return generateLanguageQuestion(topicId);
  const result = generateMathQuestion(topicId);
  const prefixes = ["", "Latihan konsep: ", "Uji cepat: ", "Cermati soal berikut. ", "Paket variasi: "];
  return { ...result, q: `${prefixes[Math.floor(Math.random() * prefixes.length)]}${result.q}` };
}

export function generateQuestionsForTopic(topicId, count = 25) {
  const output = [];
  const seen = new Set();
  let guard = 0;
  const points = 100 / count;
  while (output.length < count && guard < 8000) {
    guard += 1;
    const item = generateQuestion(topicId);
    if (!seen.has(item.q)) {
      seen.add(item.q);
      output.push({ ...item, points, key: `${topicId}-${Date.now()}-${guard}-${Math.random()}` });
    }
  }
  while (output.length < count) {
    const item = generateQuestion(topicId);
    output.push({ ...item, points, key: `${topicId}-${Date.now()}-fallback-${output.length}-${Math.random()}` });
  }
  return output;
}

export function generateMixedQuestions(topicList, count = 25) {
  const output = [];
  const seen = new Set();
  const points = 100 / count;
  let guard = 0;
  while (output.length < count && guard < 10000) {
    guard += 1;
    const topic = topicList[Math.floor(Math.random() * topicList.length)];
    const item = generateQuestion(topic.id);
    const signature = `${topic.id}:${item.q}`;
    if (!seen.has(signature)) {
      seen.add(signature);
      output.push({ ...item, points, topicId: topic.id, topicTitle: topic.title, subjectId: topic.subjectId, key: `sim-${topic.id}-${Date.now()}-${guard}-${Math.random()}` });
    }
  }
  while (output.length < count) {
    const topic = topicList[Math.floor(Math.random() * topicList.length)];
    const item = generateQuestion(topic.id);
    output.push({ ...item, points, topicId: topic.id, topicTitle: topic.title, subjectId: topic.subjectId, key: `sim-${topic.id}-${Date.now()}-fallback-${output.length}-${Math.random()}` });
  }
  return shuffle(output);
}
