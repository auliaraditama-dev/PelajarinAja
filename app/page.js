"use client";

import { useEffect, useMemo, useState } from "react";
import { subjects } from "../data/subjects.js";
import { topics } from "../data/topics.js";
import { generateMixedQuestions, generateQuestionsForTopic, questionSignature } from "../data/questionGenerators.js";
import { conceptIllustration, masteryChecklist, materialImportance, materialOverview, problemSolvingGuide } from "../data/pedagogy.js";
import { getSerkomLesson } from "../data/serkomLessons.js";

const QUESTIONS_PER_TOPIC = 25;
const SIMULATION_QUESTIONS = 25;
const SIMULATION_SECONDS = 40 * 60;
const QUESTION_HISTORY_LIMIT = 1000;

function Icon({ name, size = 18 }) {
  const paths = {
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    book: <><path d="M4 4h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4z" /><path d="M20 4h-6a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h6z" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20l1.1-6.2L3 9.6l6.2-.9z" />,
    moon: <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8 8 0 1 0 20 15.5z" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></>,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    timer: <><circle cx="12" cy="13" r="8" /><path d="M12 9v4l3 2M9 2h6" /></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
    print: <><path d="M6 9V3h12v6" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="7" /></>,
    shuffle: <><path d="M16 3h5v5" /><path d="M4 20 21 3" /><path d="M21 16v5h-5" /><path d="m15 15 6 6M4 4l5 5" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    back: <path d="m15 18-6-6 6-6" />,
    note: <><path d="M4 4h16v16H4z" /><path d="M8 9h8M8 13h8M8 17h5" /></>,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>,
    spark: <><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4z" /><path d="m18.5 14 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7z" /></>,
    award: <><circle cx="12" cy="8" r="5" /><path d="m8.5 12-2 9 5.5-3 5.5 3-2-9" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>,
    code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
    language: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function SectionTitle({ number, title, subtitle, danger = false }) {
  return <div className={`section-title ${danger ? "danger" : ""}`}><span>{number}</span><div><h2>{title}</h2><p>{subtitle}</p></div></div>;
}

function abilityFromScore(score) {
  if (score >= 90) return { label: "Sangat Kuat", description: "Pemahaman dan penerapan sangat konsisten. Pertahankan dengan variasi soal dan simulasi lintas materi." };
  if (score >= 80) return { label: "Kuat", description: "Konsep utama sudah dikuasai. Tinjau kembali kesalahan agar performa lebih stabil." };
  if (score >= 70) return { label: "Cukup", description: "Fondasi sudah baik, tetapi masih ada bagian yang perlu latihan terarah." };
  if (score >= 60) return { label: "Dasar", description: "Pemahaman dasar sudah terbentuk. Ulangi materi, contoh, dan bagian yang salah sebelum paket baru." };
  return { label: "Perlu Penguatan", description: "Pelajari ulang konsep inti secara bertahap lalu kerjakan paket baru setelah memahami pembahasannya." };
}

function formatDate(timestamp) {
  try {
    return new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short" }).format(new Date(timestamp));
  } catch {
    return "-";
  }
}

function readJSON(keys, fallback) {
  for (const key of keys) {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch {
      return fallback;
    }
  }
  return fallback;
}

function readText(keys, fallback = "") {
  for (const key of keys) {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) return raw;
    } catch {
      return fallback;
    }
  }
  return fallback;
}

function saveLocal(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    return false;
  }
  return true;
}

function answerSelected(state) {
  return state?.selected ?? [];
}

function isCorrect(question, state) {
  if (!state?.locked) return false;
  if (question.type === "matrix") {
    const selected = state?.matrix ?? [];
    const expected = (question.statements ?? []).map((item) => item.answer);
    return selected.length === expected.length && selected.every((value, index) => value === expected[index]);
  }
  const selected = [...answerSelected(state)].sort((a, b) => a - b);
  const expected = Array.isArray(question.answer) ? [...question.answer].sort((a, b) => a - b) : [question.answer];
  return selected.length === expected.length && selected.every((value, index) => value === expected[index]);
}

function matrixComplete(question, state) {
  if (question.type !== "matrix") return false;
  const selected = state?.matrix ?? [];
  return selected.length === (question.statements ?? []).length && selected.every((value) => typeof value === "boolean");
}

function subjectIcon(subjectId) {
  if (subjectId === "serkom") return "code";
  if (subjectId === "bahasa-indonesia" || subjectId === "bahasa-inggris") return "language";
  return "grid";
}

function questionHistoryKey(topicId) {
  return `pelajarinaja-question-history-${topicId}`;
}

function readQuestionHistory(topicId) {
  return readJSON([questionHistoryKey(topicId)], []);
}

function saveQuestionHistory(topicId, questions) {
  const previous = readQuestionHistory(topicId);
  const current = questions.map(questionSignature);
  const merged = [...current, ...previous.filter((value) => !current.includes(value))].slice(0, QUESTION_HISTORY_LIMIT);
  saveLocal(questionHistoryKey(topicId), JSON.stringify(merged));
}

function readSimulationQuestionHistory() {
  return readJSON(["pelajarinaja-simulation-question-history"], []);
}

function saveSimulationQuestionHistory(questions) {
  const previous = readSimulationQuestionHistory();
  const current = questions.map(questionSignature);
  const merged = [...current, ...previous.filter((value) => !current.includes(value))].slice(0, QUESTION_HISTORY_LIMIT);
  saveLocal("pelajarinaja-simulation-question-history", JSON.stringify(merged));
}

export default function Home() {
  const [subjectId, setSubjectId] = useState("matematika");
  const [selected, setSelected] = useState(topics[0].id);
  const [group, setGroup] = useState("Semua");
  const [query, setQuery] = useState("");
  const [view, setView] = useState("beranda");
  const [sidebar, setSidebar] = useState(false);
  const [dark, setDark] = useState(false);
  const [storageReady, setStorageReady] = useState(false);
  const [completed, setCompleted] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [notes, setNotes] = useState({});
  const [topicScores, setTopicScores] = useState({});
  const [simulationHistory, setSimulationHistory] = useState([]);
  const [topicQuestions, setTopicQuestions] = useState([]);
  const [quizVersion, setQuizVersion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizFinalized, setQuizFinalized] = useState(false);
  const [essayVisible, setEssayVisible] = useState({});
  const [simQuestions, setSimQuestions] = useState([]);
  const [simAnswers, setSimAnswers] = useState({});
  const [simFinished, setSimFinished] = useState(false);
  const [simSaved, setSimSaved] = useState(false);
  const [simulationScope, setSimulationScope] = useState("subject");
  const [seconds, setSeconds] = useState(SIMULATION_SECONDS);
  const [readingSize, setReadingSize] = useState("normal");

  const subject = subjects.find((item) => item.id === subjectId) ?? subjects[0];
  const subjectTopics = useMemo(() => topics.filter((item) => item.subjectId === subjectId), [subjectId]);
  const topic = topics.find((item) => item.id === selected) ?? subjectTopics[0] ?? topics[0];
  const topicIndexInSubject = subjectTopics.findIndex((item) => item.id === topic.id);
  const serkomLesson = subjectId === "serkom" ? getSerkomLesson(topic.id) : null;

  useEffect(() => {
    setCompleted(readJSON(["pelajarinaja-completed", "tka-completed"], []));
    setBookmarks(readJSON(["pelajarinaja-bookmarks", "tka-bookmarks"], []));
    setNotes(readJSON(["pelajarinaja-notes", "tka-notes"], {}));
    setTopicScores(readJSON(["pelajarinaja-topic-scores", "tka-topic-scores"], {}));
    setSimulationHistory(readJSON(["pelajarinaja-simulation-history", "tka-simulation-history"], []));
    const params = new URLSearchParams(window.location.search);
    const requestedSubject = params.get("subject");
    const requestedTopic = params.get("topic");
    const requestedView = params.get("view");
    const savedSubject = readText(["pelajarinaja-subject"], "matematika");
    const initialSubject = subjects.some((item) => item.id === requestedSubject) ? requestedSubject : savedSubject;
    const validSubject = subjects.some((item) => item.id === initialSubject) ? initialSubject : "matematika";
    setSubjectId(validSubject);
    const savedTopic = readText(["pelajarinaja-selected-topic", "tka-selected-topic"], "");
    const initialTopic = requestedTopic && topics.some((item) => item.id === requestedTopic) ? requestedTopic : savedTopic;
    if (initialTopic && topics.some((item) => item.id === initialTopic)) {
      setSelected(initialTopic);
      const storedTopic = topics.find((item) => item.id === initialTopic);
      if (storedTopic) setSubjectId(storedTopic.subjectId);
    }
    const savedView = readText(["pelajarinaja-view", "tka-view"], "beranda");
    const initialView = ["beranda", "materi", "latihan", "simulasi", "progress"].includes(requestedView) ? requestedView : savedView;
    if (["beranda", "materi", "latihan", "simulasi", "progress"].includes(initialView)) setView(initialView);
    if (readText(["pelajarinaja-theme", "tka-theme"], "") === "dark") setDark(true);
    const savedReadingSize = readText(["pelajarinaja-reading-size"], "normal");
    if (["small", "normal", "large"].includes(savedReadingSize)) setReadingSize(savedReadingSize);
    setStorageReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    if (storageReady) saveLocal("pelajarinaja-theme", dark ? "dark" : "light");
  }, [dark, storageReady]);

  useEffect(() => { if (storageReady) saveLocal("pelajarinaja-completed", JSON.stringify(completed)); }, [completed, storageReady]);
  useEffect(() => { if (storageReady) saveLocal("pelajarinaja-bookmarks", JSON.stringify(bookmarks)); }, [bookmarks, storageReady]);
  useEffect(() => { if (storageReady) saveLocal("pelajarinaja-notes", JSON.stringify(notes)); }, [notes, storageReady]);
  useEffect(() => { if (storageReady) saveLocal("pelajarinaja-topic-scores", JSON.stringify(topicScores)); }, [topicScores, storageReady]);
  useEffect(() => { if (storageReady) saveLocal("pelajarinaja-simulation-history", JSON.stringify(simulationHistory)); }, [simulationHistory, storageReady]);
  useEffect(() => { if (storageReady) saveLocal("pelajarinaja-subject", subjectId); }, [subjectId, storageReady]);
  useEffect(() => { if (storageReady) saveLocal("pelajarinaja-selected-topic", selected); }, [selected, storageReady]);
  useEffect(() => { if (storageReady) saveLocal("pelajarinaja-view", view); }, [view, storageReady]);
  useEffect(() => { if (storageReady) saveLocal("pelajarinaja-reading-size", readingSize); }, [readingSize, storageReady]);

  useEffect(() => {
    if (!subjectTopics.some((item) => item.id === selected)) {
      setSelected(subjectTopics[0]?.id ?? topics[0].id);
    }
    if (!subject.groups.includes(group)) setGroup("Semua");
  }, [subjectId, subjectTopics, selected, subject.groups, group]);

  useEffect(() => {
    if (!storageReady) return;
    const history = readQuestionHistory(selected);
    const questions = generateQuestionsForTopic(selected, QUESTIONS_PER_TOPIC, history);
    setTopicQuestions(questions);
    saveQuestionHistory(selected, questions);
    setAnswers({});
    setQuizFinalized(false);
    setEssayVisible((state) => ({ ...state, [selected]: false }));
  }, [selected, quizVersion, storageReady]);

  useEffect(() => {
    if (view !== "simulasi" || simFinished || simQuestions.length === 0 || seconds <= 0) return;
    const id = setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => clearInterval(id);
  }, [view, simFinished, simQuestions.length, seconds]);

  useEffect(() => {
    if (seconds === 0 && simQuestions.length > 0 && !simFinished) setSimFinished(true);
  }, [seconds, simQuestions.length, simFinished]);

  const filtered = useMemo(() => subjectTopics.filter((item) => {
    const sameGroup = group === "Semua" || item.group === group;
    const text = `${item.title} ${item.group} ${item.summary} ${item.learningCompetency ?? ""} ${(item.learningCoverage ?? []).join(" ")}`.toLowerCase();
    return sameGroup && text.includes(query.trim().toLowerCase());
  }), [subjectTopics, group, query]);

  const answeredCount = topicQuestions.filter((item) => answers[item.key]?.locked).length;
  const quizCorrect = topicQuestions.reduce((sum, item) => sum + (isCorrect(item, answers[item.key]) ? 1 : 0), 0);
  const quizPoints = Math.round(topicQuestions.reduce((sum, item) => sum + (isCorrect(item, answers[item.key]) ? item.points : 0), 0));
  const topicAbility = abilityFromScore(quizPoints);
  const simAnsweredCount = simQuestions.filter((item) => simAnswers[item.key]?.locked).length;
  const simCorrect = simQuestions.reduce((sum, item) => sum + (isCorrect(item, simAnswers[item.key]) ? 1 : 0), 0);
  const simPoints = Math.round(simQuestions.reduce((sum, item) => sum + (isCorrect(item, simAnswers[item.key]) ? item.points : 0), 0));
  const simAbility = abilityFromScore(simPoints);
  const overallProgress = Math.round((completed.length / topics.length) * 100);
  const subjectCompleted = subjectTopics.filter((item) => completed.includes(item.id)).length;
  const subjectProgress = subjectTopics.length ? Math.round((subjectCompleted / subjectTopics.length) * 100) : 0;
  const allScoreRecords = Object.entries(topicScores).filter(([, entry]) => entry && typeof entry.best === "number");
  const subjectScoreRecords = allScoreRecords.filter(([id]) => subjectTopics.some((item) => item.id === id));
  const averageBest = subjectScoreRecords.length ? Math.round(subjectScoreRecords.reduce((sum, [, entry]) => sum + entry.best, 0) / subjectScoreRecords.length) : 0;
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  useEffect(() => {
    if (!simFinished || simSaved || simQuestions.length === 0) return;
    const result = {
      score: simPoints,
      correct: simCorrect,
      total: simQuestions.length,
      timestamp: Date.now(),
      ability: simAbility.label,
      scope: simulationScope,
      subjectId: simulationScope === "subject" ? subjectId : "semua"
    };
    setSimulationHistory((history) => [result, ...history].slice(0, 20));
    setSimSaved(true);
  }, [simFinished, simSaved, simQuestions.length, simPoints, simCorrect, simAbility.label, simulationScope, subjectId]);

  function chooseSubject(nextSubjectId, destination = "materi") {
    const nextTopics = topics.filter((item) => item.subjectId === nextSubjectId);
    setSubjectId(nextSubjectId);
    setSelected(nextTopics[0]?.id ?? topics[0].id);
    setGroup("Semua");
    setQuery("");
    setView(destination);
    setSidebar(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function chooseTopic(id, destination = "materi") {
    const next = topics.find((item) => item.id === id);
    if (!next) return;
    setSubjectId(next.subjectId);
    setSelected(id);
    setView(destination);
    setSidebar(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleComplete(id) {
    setCompleted((old) => old.includes(id) ? old.filter((value) => value !== id) : [...old, id]);
  }

  function toggleBookmark(id) {
    setBookmarks((old) => old.includes(id) ? old.filter((value) => value !== id) : [...old, id]);
  }

  function goTopic(offset) {
    const nextIndex = topicIndexInSubject + offset;
    if (nextIndex < 0 || nextIndex >= subjectTopics.length) return;
    chooseTopic(subjectTopics[nextIndex].id, "materi");
  }

  function newQuiz() {
    setQuizVersion((value) => value + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectQuizOption(question, optionIndex) {
    if (quizFinalized || question.type === "matrix") return;
    const current = answers[question.key];
    if (current?.locked) return;
    if (!Array.isArray(question.answer)) {
      setAnswers((state) => ({ ...state, [question.key]: { selected: [optionIndex], locked: false } }));
      return;
    }
    const selectedOptions = new Set(current?.selected ?? []);
    if (selectedOptions.has(optionIndex)) selectedOptions.delete(optionIndex);
    else selectedOptions.add(optionIndex);
    setAnswers((state) => ({ ...state, [question.key]: { selected: [...selectedOptions].sort((a, b) => a - b), locked: false } }));
  }

  function selectQuizMatrix(question, rowIndex, value) {
    if (quizFinalized) return;
    const current = answers[question.key];
    if (current?.locked) return;
    const matrix = [...(current?.matrix ?? Array((question.statements ?? []).length).fill(null))];
    matrix[rowIndex] = value;
    setAnswers((state) => ({ ...state, [question.key]: { matrix, locked: false } }));
  }

  function lockQuizQuestion(question) {
    const current = answers[question.key];
    if (current?.locked) return;
    if (question.type === "matrix") {
      if (!matrixComplete(question, current)) return;
      setAnswers((state) => ({ ...state, [question.key]: { ...current, locked: true } }));
      return;
    }
    if (!current?.selected?.length) return;
    setAnswers((state) => ({ ...state, [question.key]: { ...current, locked: true } }));
  }

  function finalizeTopicQuiz() {
    if (quizFinalized || answeredCount !== QUESTIONS_PER_TOPIC) return;
    const now = Date.now();
    setTopicScores((current) => {
      const previous = current[topic.id] ?? { best: 0, last: 0, attempts: 0, history: [] };
      const attempt = { score: quizPoints, correct: quizCorrect, total: QUESTIONS_PER_TOPIC, timestamp: now };
      return {
        ...current,
        [topic.id]: {
          best: Math.max(previous.best ?? 0, quizPoints),
          last: quizPoints,
          attempts: (previous.attempts ?? 0) + 1,
          correct: quizCorrect,
          timestamp: now,
          ability: topicAbility.label,
          history: [attempt, ...(previous.history ?? [])].slice(0, 10)
        }
      };
    });
    setQuizFinalized(true);
  }

  function startSimulation() {
    const pool = simulationScope === "subject" ? subjectTopics : topics;
    const history = readSimulationQuestionHistory();
    const questions = generateMixedQuestions(pool, SIMULATION_QUESTIONS, history);
    setSimQuestions(questions);
    saveSimulationQuestionHistory(questions);
    setSimAnswers({});
    setSimFinished(false);
    setSimSaved(false);
    setSeconds(SIMULATION_SECONDS);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectSimulationOption(question, optionIndex) {
    if (simFinished || question.type === "matrix") return;
    const current = simAnswers[question.key];
    if (current?.locked) return;
    if (!Array.isArray(question.answer)) {
      setSimAnswers((state) => ({ ...state, [question.key]: { selected: [optionIndex], locked: false } }));
      return;
    }
    const selectedOptions = new Set(current?.selected ?? []);
    if (selectedOptions.has(optionIndex)) selectedOptions.delete(optionIndex);
    else selectedOptions.add(optionIndex);
    setSimAnswers((state) => ({ ...state, [question.key]: { selected: [...selectedOptions].sort((a, b) => a - b), locked: false } }));
  }

  function selectSimulationMatrix(question, rowIndex, value) {
    if (simFinished) return;
    const current = simAnswers[question.key];
    if (current?.locked) return;
    const matrix = [...(current?.matrix ?? Array((question.statements ?? []).length).fill(null))];
    matrix[rowIndex] = value;
    setSimAnswers((state) => ({ ...state, [question.key]: { matrix, locked: false } }));
  }

  function lockSimulationQuestion(question) {
    const current = simAnswers[question.key];
    if (current?.locked) return;
    if (question.type === "matrix") {
      if (!matrixComplete(question, current)) return;
      setSimAnswers((state) => ({ ...state, [question.key]: { ...current, locked: true } }));
      return;
    }
    if (!current?.selected?.length) return;
    setSimAnswers((state) => ({ ...state, [question.key]: { ...current, locked: true } }));
  }

  function resetSimulation() {
    setSimQuestions([]);
    setSimAnswers({});
    setSimFinished(false);
    setSimSaved(false);
    setSeconds(SIMULATION_SECONDS);
  }

  return <main className="app-shell">
    <header className="topbar">
      <div className="brand">
        <button className="icon-btn mobile-only" onClick={() => setSidebar(true)} aria-label="Buka menu"><Icon name="menu" /></button>
        <button
          className="brand-mark"
          onClick={() => setView("beranda")}
          aria-label="Beranda PelajarinAja"
        >
          <img src="/logo-icon.png" alt="PelajarinAja" width="40" height="40" />
        </button>
        <div><strong>PelajarinAja</strong><span>Platform belajar universal · TKA & SERKOM</span></div>
      </div>
      <div className="subject-tabs desktop-subject-tabs">
        {subjects.map((item) => <button key={item.id} className={subjectId === item.id ? "active" : ""} onClick={() => chooseSubject(item.id, view === "beranda" ? "beranda" : "materi")}><span>{item.short}</span>{item.name}</button>)}
      </div>
      <div className="top-actions">
        <div className="progress-mini"><span>{overallProgress}%</span><div><i style={{ width: `${overallProgress}%` }} /></div></div>
        <button className="icon-btn" onClick={() => setDark((value) => !value)} aria-label="Ubah tema"><Icon name={dark ? "sun" : "moon"} /></button>
      </div>
    </header>

    <aside className={`sidebar ${sidebar ? "open" : ""}`}>
      <div className="sidebar-head"><span>Navigasi</span><button className="icon-btn mobile-only" onClick={() => setSidebar(false)} aria-label="Tutup menu"><Icon name="close" /></button></div>
      <div className="mobile-subjects">
        {subjects.map((item) => <button key={item.id} className={subjectId === item.id ? "active" : ""} onClick={() => chooseSubject(item.id, "materi")}><b>{item.short}</b><span>{item.name}</span></button>)}
      </div>
      <nav className="main-nav">
        <button className={view === "beranda" ? "active" : ""} onClick={() => { setView("beranda"); setSidebar(false); }}><Icon name="home" /> Beranda</button>
        <button className={view === "materi" ? "active" : ""} onClick={() => { setView("materi"); setSidebar(false); }}><Icon name="book" /> Materi</button>
        <button className={view === "latihan" ? "active" : ""} onClick={() => { setView("latihan"); setSidebar(false); }}><Icon name="check" /> Penilaian 25 Soal</button>
        <button className={view === "simulasi" ? "active" : ""} onClick={() => { setView("simulasi"); setSidebar(false); }}><Icon name="timer" /> Simulasi</button>
        <button className={view === "progress" ? "active" : ""} onClick={() => { setView("progress"); setSidebar(false); }}><Icon name="chart" /> Progres & Nilai</button>
      </nav>

      <div className="sidebar-subject"><div><Icon name={subjectIcon(subjectId)} /><span><b>{subject.name}</b><small>{subjectTopics.length} materi</small></span></div><p>{subject.description}</p></div>

      <div className="search-box"><Icon name="search" size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari materi..." aria-label="Cari materi" /></div>
      <div className="group-list">
        {subject.groups.map((item) => <button key={item} className={group === item ? "active" : ""} onClick={() => setGroup(item)}>{item}<span>{item === "Semua" ? subjectTopics.length : subjectTopics.filter((topicItem) => topicItem.group === item).length}</span></button>)}
      </div>
      <div className="topic-list">
        {filtered.map((item) => <button key={item.id} className={selected === item.id ? "active" : ""} onClick={() => chooseTopic(item.id, "materi")}><span className={`dot ${completed.includes(item.id) ? "done" : ""}`}>{completed.includes(item.id) ? "✓" : ""}</span><span><b>{item.title}</b><small>{item.group}</small></span><Icon name="chevron" size={15} /></button>)}
      </div>
    </aside>

    {sidebar && <button className="overlay mobile-only" onClick={() => setSidebar(false)} aria-label="Tutup menu" />}

    <section className={`content reading-${readingSize}`}>
      {view === "beranda" && <section className="dashboard-page">
        <div className="dashboard-hero card">
          <div><div className="eyebrow">Platform belajar universal</div><h1>TKA dan persiapan SERKOM dalam satu tempat.</h1><p>Pilih mata pelajaran, pelajari materi secara bertahap, kerjakan 25 soal untuk nilai kemampuan 0–100, lalu gunakan simulasi untuk menguji kesiapan.</p></div>
          <div className="dashboard-metric"><span>Total materi</span><strong>{topics.length}</strong><small>{subjects.length} mata pelajaran</small></div>
        </div>
        <div className="subject-card-grid">
          {subjects.map((item) => {
            const list = topics.filter((topicItem) => topicItem.subjectId === item.id);
            const done = list.filter((topicItem) => completed.includes(topicItem.id)).length;
            const scored = list.filter((topicItem) => topicScores[topicItem.id]?.best !== undefined).length;
            const pct = list.length ? Math.round(done / list.length * 100) : 0;
            return <article className="subject-card card" key={item.id}><div className="subject-icon"><Icon name={subjectIcon(item.id)} size={24} /></div><div><div className="eyebrow">{item.short}</div><h2>{item.name}</h2><p>{item.description}</p></div><div className="subject-stats"><span>{list.length} materi</span><span>{done} selesai</span><span>{scored} dinilai</span></div><div className="bar"><i style={{ width: `${pct}%` }} /></div><button className="primary" onClick={() => chooseSubject(item.id, "materi")}>Buka materi <Icon name="chevron" /></button></article>;
          })}
        </div>
        <div className="dashboard-grid">
          <article className="card progress-card"><SectionTitle number="01" title="Progres keseluruhan" subtitle="Progres dari seluruh mata pelajaran pada perangkat ini." /><div className="big-progress"><i style={{ width: `${overallProgress}%` }} /></div><div className="dashboard-progress-lines">{subjects.map((item) => { const list = topics.filter((topicItem) => topicItem.subjectId === item.id); const done = list.filter((topicItem) => completed.includes(topicItem.id)).length; const pct = Math.round(done / list.length * 100); return <div key={item.id}><span><b>{item.name}</b><small>{done}/{list.length}</small></span><div className="bar"><i style={{ width: `${pct}%` }} /></div></div>; })}</div></article>
          <article className="card feature-card"><SectionTitle number="02" title="Sistem penilaian" subtitle="Setiap materi memiliki paket soal dinamis." /><div className="feature-points"><div><strong>25</strong><span>soal per materi</span></div><div><strong>4</strong><span>poin per soal</span></div><div><strong>100</strong><span>nilai maksimum</span></div></div><p>Paket dibuat ulang ketika refresh atau tombol paket baru digunakan. Pilihan ganda kompleks didukung untuk materi bahasa.</p></article>
        </div>
      </section>}

      {view === "materi" && <>
        <section className="hero">
          <div><div className="eyebrow">{subject.name} · {topic.group}</div><h1>{topic.title}</h1><p>{topic.summary}</p><div className="hero-meta"><Pill>{topic.level}</Pill><Pill>25 soal penilaian</Pill></div></div>
          <div className="hero-actions"><div className="reading-controls" aria-label="Ukuran huruf materi"><button className={readingSize === "small" ? "active" : ""} onClick={() => setReadingSize("small")} aria-label="Perkecil huruf">A−</button><button className={readingSize === "normal" ? "active" : ""} onClick={() => setReadingSize("normal")} aria-label="Ukuran huruf normal">A</button><button className={readingSize === "large" ? "active" : ""} onClick={() => setReadingSize("large")} aria-label="Perbesar huruf">A+</button></div><button className={`secondary ${bookmarks.includes(topic.id) ? "selected" : ""}`} onClick={() => toggleBookmark(topic.id)}><Icon name="star" /> {bookmarks.includes(topic.id) ? "Tersimpan" : "Simpan"}</button><button className="secondary" onClick={() => window.print()}><Icon name="print" /> Cetak</button><button className={`primary ${completed.includes(topic.id) ? "completed" : ""}`} onClick={() => toggleComplete(topic.id)}><Icon name="check" /> {completed.includes(topic.id) ? "Sudah dipelajari" : "Tandai selesai"}</button></div>
        </section>

        {subjectId === "serkom" && <div className="serkom-notice card"><Icon name="code" size={24} /><div><b>Persiapan SERKOM RPL</b><p>Materi berfokus pada pemahaman konsep, implementasi Laravel 12, analisis kode, debugging, pengujian, dokumentasi, dan kesiapan praktik. Penilaian kompetensi resmi tetap mengikuti ketentuan asesor dan lembaga sertifikasi yang berlaku.</p></div></div>}

        <div className="material-overview card">
          <div className="material-badge">Ringkasan materi</div>
          <h2>Pemahaman Konseptual</h2>
          <p>{materialOverview(topic)}</p>
          <div className="concept-illustration"><b>Ilustrasi konsep</b><span>{conceptIllustration(topic)}</span></div>
          <div className="material-importance"><b>Signifikansi materi</b><span>{materialImportance(topic)}</span></div>
        </div>

        <div className="learning-scope card">
          <div className="learning-scope-head"><div><div className="eyebrow">Cakupan pembelajaran</div><h2>Kompetensi dan ruang lingkup materi</h2><p>{topic.learningCompetency}</p></div></div>
          <div className="learning-scope-grid">{(topic.learningCoverage ?? []).map((item, index) => <div className="learning-scope-item" key={index}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div>
        </div>

        {serkomLesson && <div className="serkom-tutorial card">
          <div className="tutorial-head"><div><div className="eyebrow">Tutorial teknis terstruktur</div><h2>Konsep → contoh → analisis baris → latihan mandiri</h2><p>Materi disusun dari pola inti menuju implementasi, analisis setiap baris, dan latihan penerapan secara mandiri.</p></div><Pill>SERKOM RPL</Pill></div>
          <div className="tutorial-grid">
            <div className="tutorial-panel"><h3>Sintaks / pola inti</h3><div className="syntax-stack">{serkomLesson.syntax.map((line, index) => <code key={index}>{line}</code>)}</div></div>
            <div className="tutorial-panel"><h3>Contoh kode / perintah</h3><div className="code-table">{serkomLesson.code.map((line, index) => <div key={index}><span>{index + 1}</span><code>{line}</code></div>)}</div></div>
          </div>
          <div className="line-explain"><h3>Analisis setiap baris</h3>{serkomLesson.explain.map((line, index) => <div key={index}><b>Baris {index + 1}</b><p>{line}</p></div>)}</div>
          <div className="practice-box"><div><b>Latihan mandiri</b><p>{serkomLesson.tryIt}</p></div><Icon name="code" size={22} /></div>
        </div>}

        <div className="study-grid">
          <article className="card span-2"><SectionTitle number="01" title="Tujuan belajar" subtitle="Kemampuan yang diharapkan setelah menyelesaikan materi." /><div className="objective-grid">{(topic.objectives ?? []).map((item, index) => <div key={index}><Icon name="target" size={18} /><p>{item}</p></div>)}</div></article>
          <article className="card"><SectionTitle number="02" title="Prasyarat" subtitle="Fondasi yang membantu materi lebih mudah dipahami." /><ul className="simple-list">{(topic.prerequisites ?? []).map((item, index) => <li key={index}>{item}</li>)}</ul></article>
          <article className="card"><SectionTitle number="03" title="Konsep dasar" subtitle="Poin inti yang harus dikuasai." /><ul className="numbered-list">{(topic.concepts ?? []).map((item, index) => <li key={index}><span>{index + 1}</span><p>{item}</p></li>)}</ul></article>
          <article className="card span-2"><SectionTitle number="04" title="Pembahasan mendalam" subtitle="Hubungan antar konsep dan cara memahaminya secara utuh." /><div className="deep-list">{(topic.deepDive ?? []).map((item, index) => <div key={index}><b>0{index + 1}</b><p>{item}</p></div>)}</div></article>
          <article className="card span-2"><SectionTitle number="05" title="Rumus, strategi, atau pola penting" subtitle="Ringkasan yang dapat dipakai saat menyelesaikan soal atau praktik." /><div className="formula-list">{(topic.formulas?.length ? topic.formulas : ["Fokus pada alur konsep, bukti, dan langkah penyelesaian."]).map((item, index) => <code key={index}>{item}</code>)}</div></article>
          <article className="card span-2"><SectionTitle number="06" title="Langkah penyelesaian" subtitle="Urutan kerja yang dapat diikuti saat menghadapi soal atau praktik." /><div className="solution-guidance"><b>Prosedur penyelesaian umum</b><p>Gunakan urutan berikut agar analisis tetap sistematis dan dapat diverifikasi.</p></div><ol className="steps-list guided-steps">{problemSolvingGuide(topic).map((item, index) => <li key={`guide-${index}`}><span>{index + 1}</span><p>{item}</p></li>)}</ol><div className="original-steps"><b>Langkah khusus materi ini</b><ol className="steps-list">{(topic.steps ?? []).map((item, index) => <li key={index}><span>{index + 1}</span><p>{item}</p></li>)}</ol></div></article>
          <article className="card span-2"><SectionTitle number="07" title="Contoh bertahap" subtitle="Pelajari cara berpikir, bukan hanya hasil akhir." /><div className="examples-grid">{(topic.workedExamples ?? []).map((item, index) => <div className="worked-card" key={index}><div className="worked-label">{item.title}</div><h3>{item.problem}</h3><ol>{(item.steps ?? []).map((step, stepIndex) => <li key={stepIndex}>{step}</li>)}</ol><div className="worked-result"><b>Hasil:</b> {item.result}</div></div>)}</div></article>
          <article className="card span-2"><SectionTitle number="08" title="Jebakan yang sering muncul" subtitle="Kesalahan yang perlu dihindari." danger /><div className="trap-grid">{(topic.traps ?? []).map((item, index) => <div key={index}><b>0{index + 1}</b><p>{item}</p></div>)}</div></article>
          <article className="card"><SectionTitle number="09" title="Glosarium" subtitle="Istilah penting pada materi ini." /><div className="glossary-list">{(topic.glossary ?? []).map((item, index) => <div key={index}><b>{item.term}</b><p>{item.meaning}</p></div>)}</div><div className="exam-check"><h3>Checklist penguasaan</h3>{masteryChecklist(topic).map((item, index) => <label key={index}><input type="checkbox" /><span>{item}</span></label>)}</div></article>
          <article className="card"><SectionTitle number="10" title="Catatan pribadi" subtitle="Tersimpan otomatis di browser perangkat ini." /><textarea className="note-area" rows={10} value={notes[topic.id] ?? ""} onChange={(event) => setNotes((state) => ({ ...state, [topic.id]: event.target.value }))} placeholder="Tulis ringkasan, hal yang masih membingungkan, atau strategi yang ingin diingat..." /></article>
          <article className="card span-2 callout"><div><div className="eyebrow">Penilaian kemampuan</div><h2>Kerjakan 25 soal untuk {topic.title}</h2><p>Setiap paket memuat 25 soal unik dengan variasi pilihan ganda dan pilihan ganda kompleks, bernilai total 100, dan tetap sesuai materi.</p></div><button className="primary" onClick={() => setView("latihan")}>Mulai 25 soal <Icon name="chevron" /></button></article>
          <article className="card span-2 topic-nav"><button className="secondary" disabled={topicIndexInSubject <= 0} onClick={() => goTopic(-1)}><Icon name="back" /> Materi sebelumnya</button><span>{topicIndexInSubject + 1} / {subjectTopics.length}</span><button className="secondary" disabled={topicIndexInSubject >= subjectTopics.length - 1} onClick={() => goTopic(1)}>Materi berikutnya <Icon name="chevron" /></button></article>
        </div>
      </>}

      {view === "latihan" && <section className="practice-page">
        <div className="page-head">
          <div>
            <div className="eyebrow">Penilaian kemampuan · {subject.name}</div>
            <h1>{topic.title}</h1>
            <p>25 soal unik dengan variasi pilihan ganda dan pilihan ganda kompleks. Setiap soal bernilai 4 poin dan nilai maksimum 100.</p>
          </div>
          <div className="page-head-actions">
            <button className="secondary" onClick={() => setView("materi")}><Icon name="book" /> Kembali ke materi</button>
            <button className="primary" onClick={newQuiz}><Icon name="shuffle" /> Acak 25 soal baru</button>
          </div>
        </div>
        <div className="assessment-strip card">
          <div><span>Terjawab</span><strong>{answeredCount}/{QUESTIONS_PER_TOPIC}</strong></div>
          <div><span>Nilai sementara</span><strong>{quizPoints}/100</strong></div>
          <div><span>Nilai terbaik</span><strong>{topicScores[topic.id]?.best ?? "—"}</strong></div>
          <div><span>Percobaan</span><strong>{topicScores[topic.id]?.attempts ?? 0}</strong></div>
        </div>
        <div className="question-stack">
          {topicQuestions.map((question, questionIndex) => {
            const state = answers[question.key];
            const selectedOptions = answerSelected(state);
            const matrix = question.type === "matrix";
            const multiple = question.type === "multiple" || Array.isArray(question.answer);
            const questionLabel = matrix ? "Pilihan Ganda Kompleks" : multiple ? "Pilihan Ganda Kompleks" : "Pilihan Ganda";
            return <article className="card question-card" key={question.key}>
              <div className="question-meta">
                <div className="q-number">{questionLabel} {questionIndex + 1}</div>
                <div className="meta-pills"><Pill>{question.points} poin</Pill>{multiple && <Pill>Pilih semua yang benar</Pill>}{matrix && <Pill>Benar / Salah</Pill>}{!multiple && !matrix && <Pill>Pilih satu jawaban</Pill>}</div>
              </div>
              {question.stimulus && <div className="stimulus-box"><span>Stimulus</span><p>{question.stimulus}</p>{question.codeExcerpt && <pre className="stimulus-code"><code>{question.codeExcerpt}</code></pre>}</div>}
              <h2>{question.q}</h2>
              {matrix ? <div className="matrix-list">
                {(question.statements ?? []).map((statement, rowIndex) => {
                  const selectedValue = state?.matrix?.[rowIndex];
                  const locked = state?.locked;
                  const trueCorrect = locked && statement.answer === true;
                  const falseCorrect = locked && statement.answer === false;
                  const trueWrong = locked && selectedValue === true && statement.answer !== true;
                  const falseWrong = locked && selectedValue === false && statement.answer !== false;
                  return <div className="matrix-row" key={rowIndex}>
                    <div className="matrix-statement"><span>{rowIndex + 1}</span><p>{statement.text}</p></div>
                    <div className="matrix-actions">
                      <button disabled={locked || quizFinalized} className={trueCorrect ? "correct" : trueWrong ? "wrong" : selectedValue === true ? "chosen" : ""} onClick={() => selectQuizMatrix(question, rowIndex, true)}>Benar</button>
                      <button disabled={locked || quizFinalized} className={falseCorrect ? "correct" : falseWrong ? "wrong" : selectedValue === false ? "chosen" : ""} onClick={() => selectQuizMatrix(question, rowIndex, false)}>Salah</button>
                    </div>
                  </div>;
                })}
              </div> : <div className="option-list">{question.options.map((option, optionIndex) => {
                const chosen = selectedOptions.includes(optionIndex);
                const correctOption = Array.isArray(question.answer) ? question.answer.includes(optionIndex) : question.answer === optionIndex;
                const cls = state?.locked ? correctOption ? "correct" : chosen ? "wrong" : "" : chosen ? "chosen" : "";
                return <button disabled={state?.locked || quizFinalized} key={optionIndex} className={cls} onClick={() => selectQuizOption(question, optionIndex)}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</button>;
              })}</div>}
              {!matrix && !state?.locked && <button className="lock-answer" disabled={!selectedOptions.length} onClick={() => lockQuizQuestion(question)}><Icon name="check" size={16} /> Kunci jawaban soal ini</button>}
              {matrix && !state?.locked && <button className="lock-answer" disabled={!matrixComplete(question, state)} onClick={() => lockQuizQuestion(question)}><Icon name="check" size={16} /> Kunci jawaban soal ini</button>}
              {state?.locked && <div className={`feedback ${isCorrect(question, state) ? "ok" : "bad"}`}>
                <b>{isCorrect(question, state) ? `Benar. +${question.points} poin.` : "Belum tepat. +0 poin."}</b>
                <p>{question.explain}</p>
                <div className="solution-walkthrough"><strong>Langkah analisis:</strong><ol>{(question.solutionSteps ?? [question.explain]).map((step, index) => <li key={index}>{step}</li>)}</ol></div>
              </div>}
            </article>;
          })}
          <article className="card question-card">
            <div className="q-number">Esai Pendek · Tidak memengaruhi nilai</div>
            <h2>{topic.essay?.q}</h2>
            <textarea placeholder="Tulis jawaban sebelum membuka pembahasan..." rows={5} />
            <button className="secondary" onClick={() => setEssayVisible((state) => ({ ...state, [topic.id]: !state[topic.id] }))}>{essayVisible[topic.id] ? "Sembunyikan pembahasan" : "Lihat pembahasan"}</button>
            {essayVisible[topic.id] && <div className="feedback ok"><b>Pembahasan:</b> {topic.essay?.answer}</div>}
          </article>
          {!quizFinalized ? <div className="finish-card card">
            <div><Icon name="award" size={28} /><span><b>Selesaikan penilaian kemampuan</b><p>Semua 25 soal harus dikunci sebelum nilai akhir disimpan.</p></span></div>
            <button className="primary" disabled={answeredCount !== QUESTIONS_PER_TOPIC} onClick={finalizeTopicQuiz}><Icon name="check" /> Simpan nilai kemampuan</button>
          </div> : <div className="ability-card card">
            <div className="ability-score"><span>Nilai</span><strong>{quizPoints}</strong><small>/100</small></div>
            <div className="ability-copy"><div className="eyebrow">Kemampuan materi</div><h2>{topicAbility.label}</h2><p>{topicAbility.description}</p><div className="ability-meta"><Pill>{quizCorrect}/{QUESTIONS_PER_TOPIC} benar</Pill><Pill>Terbaik {topicScores[topic.id]?.best ?? quizPoints}/100</Pill><Pill>Percobaan {topicScores[topic.id]?.attempts ?? 1}</Pill></div></div>
            <button className="secondary" onClick={newQuiz}><Icon name="shuffle" /> Paket baru</button>
          </div>}
          <div className="regen-card card"><Icon name="spark" size={26} /><div><b>Bank soal dinamis</b><p>Setiap paket memuat 25 soal unik. Riwayat soal terbaru disimpan secara lokal untuk mengurangi pengulangan pada pengacakan berikutnya.</p></div><button className="primary" onClick={newQuiz}><Icon name="shuffle" /> Acak 25 soal baru</button></div>
        </div>
      </section>}

      {view === "simulasi" && <section className="simulation-page">
        <div className="page-head">
          <div><div className="eyebrow">Simulasi 25 soal · 100 poin</div><h1>Simulasi PelajarinAja</h1><p>Pilih simulasi {subject.name} atau campuran seluruh mata pelajaran. Paket memuat soal yang bervariasi dan riwayat pengacakan disimpan secara lokal.</p></div>
          {simQuestions.length > 0 && <div className="timer-box"><Icon name="timer" /><strong>{mm}:{ss}</strong></div>}
        </div>
        {simQuestions.length === 0 ? <div className="simulation-setup card">
          <div className="scope-toggle"><button className={simulationScope === "subject" ? "active" : ""} onClick={() => setSimulationScope("subject")}><Icon name={subjectIcon(subjectId)} /> {subject.name}</button><button className={simulationScope === "all" ? "active" : ""} onClick={() => setSimulationScope("all")}><Icon name="grid" /> Campuran semua mapel</button></div>
          <div className="empty-icon"><Icon name="shuffle" size={30} /></div>
          <h2>Bangun paket simulasi baru</h2>
          <p>{simulationScope === "subject" ? `25 soal akan diambil dari materi ${subject.name}.` : `25 soal akan dicampur dari ${subjects.length} mata pelajaran.`}</p>
          <button className="primary" onClick={startSimulation}>Mulai simulasi 40 menit</button>
        </div> : <>
          <div className="simulation-summary card"><span>Terjawab <b>{simAnsweredCount}/{SIMULATION_QUESTIONS}</b></span><span>Nilai {simFinished ? <b>{simPoints}/100</b> : <b>belum dinilai</b>}</span><span>Waktu <b>{mm}:{ss}</b></span><button className="secondary compact-btn" onClick={resetSimulation}>Ganti paket</button></div>
          <div className="question-stack">{simQuestions.map((question, index) => {
            const state = simAnswers[question.key];
            const selectedOptions = answerSelected(state);
            const matrix = question.type === "matrix";
            const multiple = question.type === "multiple" || Array.isArray(question.answer);
            const questionSubject = subjects.find((item) => item.id === question.subjectId)?.short ?? "";
            return <article className="card question-card compact" key={question.key}>
              <div className="question-meta"><div className="q-number">Soal {index + 1} · {questionSubject} · {question.topicTitle}</div><div className="meta-pills"><Pill>{question.points} poin</Pill>{multiple && <Pill>Pilih semua yang benar</Pill>}{matrix && <Pill>Benar / Salah</Pill>}{!multiple && !matrix && <Pill>Pilih satu jawaban</Pill>}</div></div>
              {question.stimulus && <div className="stimulus-box"><span>Stimulus</span><p>{question.stimulus}</p>{question.codeExcerpt && <pre className="stimulus-code"><code>{question.codeExcerpt}</code></pre>}</div>}
              <h2>{question.q}</h2>
              {matrix ? <div className="matrix-list">{(question.statements ?? []).map((statement, rowIndex) => {
                const selectedValue = state?.matrix?.[rowIndex];
                const trueCorrect = simFinished && statement.answer === true;
                const falseCorrect = simFinished && statement.answer === false;
                const trueWrong = simFinished && selectedValue === true && statement.answer !== true;
                const falseWrong = simFinished && selectedValue === false && statement.answer !== false;
                return <div className="matrix-row" key={rowIndex}>
                  <div className="matrix-statement"><span>{rowIndex + 1}</span><p>{statement.text}</p></div>
                  <div className="matrix-actions">
                    <button disabled={simFinished || state?.locked} className={trueCorrect ? "correct" : trueWrong ? "wrong" : selectedValue === true ? "chosen" : ""} onClick={() => selectSimulationMatrix(question, rowIndex, true)}>Benar</button>
                    <button disabled={simFinished || state?.locked} className={falseCorrect ? "correct" : falseWrong ? "wrong" : selectedValue === false ? "chosen" : ""} onClick={() => selectSimulationMatrix(question, rowIndex, false)}>Salah</button>
                  </div>
                </div>;
              })}</div> : <div className="option-list">{question.options.map((option, optionIndex) => {
                const chosen = selectedOptions.includes(optionIndex);
                const correctOption = Array.isArray(question.answer) ? question.answer.includes(optionIndex) : question.answer === optionIndex;
                const cls = !simFinished ? chosen ? "chosen" : "" : correctOption ? "correct" : chosen ? "wrong" : "";
                return <button disabled={simFinished || state?.locked} key={optionIndex} className={cls} onClick={() => selectSimulationOption(question, optionIndex)}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</button>;
              })}</div>}
              {!matrix && !state?.locked && !simFinished && <button className="lock-answer" disabled={!selectedOptions.length} onClick={() => lockSimulationQuestion(question)}><Icon name="check" size={16} /> Kunci jawaban soal ini</button>}
              {matrix && !state?.locked && !simFinished && <button className="lock-answer" disabled={!matrixComplete(question, state)} onClick={() => lockSimulationQuestion(question)}><Icon name="check" size={16} /> Kunci jawaban soal ini</button>}
              {simFinished && <div className={`feedback ${isCorrect(question, state) ? "ok" : "bad"}`}><b>{isCorrect(question, state) ? `Benar. +${question.points} poin.` : "Jawaban belum tepat."}</b><p>{question.explain}</p><div className="solution-walkthrough"><strong>Langkah analisis:</strong><ol>{(question.solutionSteps ?? [question.explain]).map((step, stepIndex) => <li key={stepIndex}>{step}</li>)}</ol></div></div>}
            </article>;
          })}</div>
          <div className="sim-footer">{!simFinished ? <button className="primary" onClick={() => setSimFinished(true)}>Selesai & nilai</button> : <div className="ability-card card"><div className="ability-score"><span>Nilai</span><strong>{simPoints}</strong><small>/100</small></div><div className="ability-copy"><div className="eyebrow">Kemampuan simulasi</div><h2>{simAbility.label}</h2><p>{simAbility.description}</p><div className="ability-meta"><Pill>{simCorrect}/{SIMULATION_QUESTIONS} benar</Pill><Pill>{simAnsweredCount}/{SIMULATION_QUESTIONS} dijawab</Pill></div></div><button className="secondary" onClick={startSimulation}><Icon name="shuffle" /> Simulasi baru</button></div>}</div>
        </>}
      </section>}

      {view === "progress" && <section className="progress-page">
        <div className="page-head"><div><div className="eyebrow">Progres dan nilai lokal</div><h1>Ringkasan Kemampuan</h1><p>Data belajar disimpan pada browser perangkat ini. Progres lama dari versi matematika sebelumnya akan dibaca jika tersedia.</p></div></div>
        <div className="stats four"><div className="stat card"><span>{subject.name} selesai</span><strong>{subjectCompleted}/{subjectTopics.length}</strong><p>{subjectProgress}% cakupan mapel</p></div><div className="stat card"><span>Materi dinilai</span><strong>{subjectScoreRecords.length}/{subjectTopics.length}</strong><p>25 soal per penilaian</p></div><div className="stat card"><span>Rata-rata terbaik</span><strong>{subjectScoreRecords.length ? averageBest : "—"}</strong><p>{subjectScoreRecords.length ? abilityFromScore(averageBest).label : "Belum ada nilai"}</p></div><div className="stat card"><span>Progres global</span><strong>{overallProgress}%</strong><p>{completed.length}/{topics.length} seluruh materi</p></div></div>
        <div className="card progress-card"><SectionTitle number="01" title="Progres per mata pelajaran" subtitle="Ringkasan seluruh mapel yang tersedia." /><div className="progress-list">{subjects.map((item) => { const list = topics.filter((topicItem) => topicItem.subjectId === item.id); const done = list.filter((topicItem) => completed.includes(topicItem.id)).length; const pct = Math.round(done / list.length * 100); return <div key={item.id}><div><b>{item.name}</b><span>{done}/{list.length}</span></div><div className="bar"><i style={{ width: `${pct}%` }} /></div></div>; })}</div></div>
        <div className="card progress-card"><SectionTitle number="02" title={`Nilai ${subject.name} per materi`} subtitle="Klik materi untuk membuka penilaian atau mempelajarinya kembali." /><div className="score-table">{subjectTopics.map((item) => { const record = topicScores[item.id]; return <button key={item.id} className="score-row" onClick={() => chooseTopic(item.id, record ? "latihan" : "materi")}><span><b>{item.title}</b><small>{item.group}</small></span><span>{record ? `${record.best}/100` : "Belum dinilai"}</span><span>{record ? abilityFromScore(record.best).label : "—"}</span><Icon name="chevron" size={15} /></button>; })}</div></div>
        {simulationHistory.length > 0 && <div className="card progress-card"><SectionTitle number="03" title="Riwayat simulasi" subtitle="20 hasil simulasi terbaru." /><div className="history-list">{simulationHistory.map((entry, index) => <div key={`${entry.timestamp}-${index}`}><span><b>{entry.score}/100</b><small>{entry.correct}/{entry.total} benar · {entry.ability} · {entry.scope === "all" ? "Semua mapel" : subjects.find((item) => item.id === entry.subjectId)?.name ?? "Mapel"}</small></span><time>{formatDate(entry.timestamp)}</time></div>)}</div></div>}
        {bookmarks.length > 0 && <div className="card progress-card"><SectionTitle number="04" title="Materi tersimpan" subtitle="Bookmark lintas mata pelajaran." /><div className="bookmark-grid">{topics.filter((item) => bookmarks.includes(item.id)).map((item) => <button key={item.id} onClick={() => chooseTopic(item.id, "materi")}><Icon name="star" /><span><b>{item.title}</b><small>{subjects.find((subjectItem) => subjectItem.id === item.subjectId)?.name}</small></span><Icon name="chevron" /></button>)}</div></div>}
      </section>}
    </section>

    <footer className="app-footer"><span>PelajarinAja · Matematika · Bahasa Indonesia · Bahasa Inggris · SERKOM RPL</span><nav><a href="/mapel">Mata Pelajaran</a><a href="/materi">Indeks Materi</a><a href="/tentang">Tentang</a><a href="/kebijakan-privasi">Privasi</a></nav><span>25 soal unik · pilihan ganda dan kompleks · nilai 0–100 · responsif</span></footer>
  </main>;
}
