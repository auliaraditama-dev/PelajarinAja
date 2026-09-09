import { subjects } from "../data/subjects.js";
import { topics } from "../data/topics.js";
import { absoluteUrl, subjectPath, topicPath } from "../lib/site.js";

export default function sitemap() {
  const lastModified = new Date("2026-09-09T00:00:00.000Z");
  const staticPages = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/mapel"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/materi"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/tentang"), lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/kebijakan-privasi"), lastModified, changeFrequency: "yearly", priority: 0.3 }
  ];
  const subjectPages = subjects.map((subject) => ({
    url: absoluteUrl(subjectPath(subject.id)),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85
  }));
  const topicPages = topics.map((topic) => ({
    url: absoluteUrl(topicPath(topic.subjectId, topic.id)),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8
  }));
  return [...staticPages, ...subjectPages, ...topicPages];
}
