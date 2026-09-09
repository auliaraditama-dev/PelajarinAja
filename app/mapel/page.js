import Link from "next/link";
import { notFound } from "next/navigation";
import { subjects } from "../../../data/subjects.js";
import { breadcrumbJsonLd, getSubject, safeJsonLd, subjectMetadata, subjectTopics } from "../../../lib/seo.js";
import { appTopicPath, subjectPath, topicPath } from "../../../lib/site.js";

export function generateStaticParams() {
  return subjects.map((subject) => ({ subjectId: subject.id }));
}

export async function generateMetadata({ params }) {
  const { subjectId } = await params;
  const subject = getSubject(subjectId);
  if (!subject) return { title: "Mata Pelajaran Tidak Ditemukan", robots: { index: false, follow: false } };
  return subjectMetadata(subject);
}

export default async function SubjectPage({ params }) {
  const { subjectId } = await params;
  const subject = getSubject(subjectId);
  if (!subject) notFound();
  const list = subjectTopics(subject.id);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Beranda", path: "/" },
    { name: "Mata Pelajaran", path: "/mapel" },
    { name: subject.name, path: subjectPath(subject.id) }
  ]);
  const grouped = subject.groups.filter((group) => group !== "Semua").map((group) => ({ group, topics: list.filter((topic) => topic.group === group) })).filter((entry) => entry.topics.length > 0);
  return (
    <main className="seo-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }} />
      <header className="seo-header">
        <Link className="seo-brand" href="/">PelajarinAja</Link>
        <nav><Link href="/mapel">Mata Pelajaran</Link><Link href="/materi">Semua Materi</Link></nav>
      </header>
      <div className="seo-container">
        <nav className="seo-breadcrumb" aria-label="Breadcrumb"><Link href="/">Beranda</Link><span>/</span><Link href="/mapel">Mata Pelajaran</Link><span>/</span><span>{subject.name}</span></nav>
        <section className="seo-hero">
          <span className="seo-eyebrow">{subject.short} · {list.length} materi</span>
          <h1>{subject.name}</h1>
          <p>{subject.description}</p>
          <div className="seo-actions"><Link className="seo-button" href={appTopicPath(subject.id, list[0]?.id ?? "", "materi")}>Mulai belajar</Link><Link className="seo-button secondary" href="/">Buka aplikasi belajar</Link></div>
        </section>
        {grouped.map((entry) => (
          <section className="seo-section" key={entry.group}>
            <div className="seo-section-head"><h2>{entry.group}</h2><span>{entry.topics.length} materi</span></div>
            <div className="seo-topic-list">
              {entry.topics.map((topic, index) => (
                <article key={topic.id}>
                  <div className="seo-topic-index">{String(index + 1).padStart(2, "0")}</div>
                  <div><h3><Link href={topicPath(subject.id, topic.id)}>{topic.title}</Link></h3><p>{topic.summary}</p><div className="seo-card-meta"><span>{topic.level}</span><span>{topic.group}</span></div></div>
                  <Link className="seo-text-link" href={topicPath(subject.id, topic.id)}>Baca materi</Link>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
      <footer className="seo-footer"><Link href="/tentang">Tentang</Link><Link href="/kebijakan-privasi">Kebijakan Privasi</Link></footer>
    </main>
  );
}
