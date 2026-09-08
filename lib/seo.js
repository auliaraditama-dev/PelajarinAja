import { subjects } from "../data/subjects.js";
import { topics } from "../data/topics.js";
import { absoluteUrl, normalizeText, siteName, siteUrl, subjectPath, topicPath } from "./site.js";

export function getSubject(subjectId) {
  return subjects.find((item) => item.id === subjectId) ?? null;
}

export function getTopic(subjectId, topicId) {
  return topics.find((item) => item.subjectId === subjectId && item.id === topicId) ?? null;
}

export function subjectTopics(subjectId) {
  return topics.filter((item) => item.subjectId === subjectId);
}

export function seoKeywords(subject, topic = null) {
  const values = [
    siteName,
    "belajar TKA",
    "latihan TKA",
    "soal TKA",
    "pembahasan soal",
    subject?.name,
    subject?.short,
    topic?.title,
    topic?.group,
    topic?.sourceLabel
  ];
  if (subject?.id === "serkom") values.push("SERKOM RPL", "Laravel 12", "Pemrogram Junior", "CRUD Laravel", "testing Laravel", "debugging Laravel");
  if (subject?.id === "matematika") values.push("TKA Matematika", "Matematika Wajib", "latihan matematika SMA");
  if (subject?.id === "bahasa-indonesia") values.push("TKA Bahasa Indonesia", "literasi Bahasa Indonesia", "pemahaman teks");
  if (subject?.id === "bahasa-inggris") values.push("TKA Bahasa Inggris", "reading comprehension", "A2 B1", "CEFR");
  return [...new Set(values.filter(Boolean).map((item) => normalizeText(item)))];
}

export function subjectMetadata(subject) {
  const title = `${subject.name} | Materi, Latihan 25 Soal, dan Simulasi`;
  const description = normalizeText(`${subject.description} Pelajari materi terstruktur, kerjakan 25 soal bertingkat mudah, sedang, dan sulit, lalu pantau nilai kemampuan di PelajarinAja.`);
  const path = subjectPath(subject.id);
  return {
    title,
    description,
    keywords: seoKeywords(subject),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName,
      locale: "id_ID",
      type: "website",
      images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: `${siteName} ${subject.name}` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/twitter-image")]
    }
  };
}

export function topicMetadata(subject, topic) {
  const title = `${topic.title} | ${subject.name}`;
  const description = normalizeText(`${topic.summary} Materi mencakup konsep dasar, pembahasan mendalam, langkah penyelesaian, contoh bertahap, jebakan, glosarium, dan penilaian 25 soal.`).slice(0, 260);
  const path = topicPath(subject.id, topic.id);
  return {
    title,
    description,
    keywords: seoKeywords(subject, topic),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName,
      locale: "id_ID",
      type: "article",
      images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: `${topic.title} - ${subject.name}` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/twitter-image")]
    }
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: "Platform belajar universal untuk TKA dan persiapan SERKOM RPL.",
    inLanguage: "id-ID"
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl("/logo-icon.png")
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function learningResourceJsonLd(subject, topic) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: topic.title,
    description: normalizeText(topic.summary),
    url: absoluteUrl(topicPath(subject.id, topic.id)),
    inLanguage: "id-ID",
    learningResourceType: ["Lesson", "Practice"],
    educationalLevel: topic.level,
    about: [subject.name, topic.group],
    provider: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl
    }
  };
}

export function safeJsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
