export const siteName = "PelajarinAja";
export const siteDescription = "Platform belajar TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan persiapan SERKOM RPL Laravel 12 dengan materi terstruktur, 25 soal bervariasi, pembahasan, simulasi, progres, dan penilaian kemampuan.";

const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
export const siteUrl = (explicitUrl || (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")).replace(/\/$/, "");
export const siteLocale = "id_ID";
export const siteLanguage = "id-ID";

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

export function subjectPath(subjectId) {
  return `/mapel/${subjectId}`;
}

export function topicPath(subjectId, topicId) {
  return `/materi/${subjectId}/${topicId}`;
}

export function appTopicPath(subjectId, topicId, view = "materi") {
  return `/?subject=${encodeURIComponent(subjectId)}&topic=${encodeURIComponent(topicId)}&view=${encodeURIComponent(view)}`;
}

export function normalizeText(value = "") {
  return String(value).replace(/\s+/g, " ").trim();
}
