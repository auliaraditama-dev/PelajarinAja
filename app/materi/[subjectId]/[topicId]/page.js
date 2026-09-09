import Link from "next/link";
import { notFound } from "next/navigation";
import { topics } from "../../../../data/topics.js";
import { getSerkomLesson } from "../../../../data/serkomLessons.js";
import { breadcrumbJsonLd, getSubject, getTopic, learningResourceJsonLd, safeJsonLd, subjectTopics, topicMetadata } from "../../../../lib/seo.js";
import { appTopicPath, subjectPath, topicPath } from "../../../../lib/site.js";

export function generateStaticParams() {
  return topics.map((topic) => ({ subjectId: topic.subjectId, topicId: topic.id }));
}

export async function generateMetadata({ params }) {
  const { subjectId, topicId } = await params;
  const subject = getSubject(subjectId);
  const topic = getTopic(subjectId, topicId);
  if (!subject || !topic) return { title: "Materi Tidak Ditemukan", robots: { index: false, follow: false } };
  return topicMetadata(subject, topic);
}

export default async function TopicPage({ params }) {
  const { subjectId, topicId } = await params;
  const subject = getSubject(subjectId);
  const topic = getTopic(subjectId, topicId);
  if (!subject || !topic) notFound();
  const list = subjectTopics(subject.id);
  const index = list.findIndex((item) => item.id === topic.id);
  const previous = index > 0 ? list[index - 1] : null;
  const next = index >= 0 && index < list.length - 1 ? list[index + 1] : null;
  const serkomLesson = subject.id === "serkom" ? getSerkomLesson(topic.id) : null;
  const breadcrumb = breadcrumbJsonLd([
    { name: "Beranda", path: "/" },
    { name: "Mata Pelajaran", path: "/mapel" },
    { name: subject.name, path: subjectPath(subject.id) },
    { name: topic.title, path: topicPath(subject.id, topic.id) }
  ]);
  const learningResource = learningResourceJsonLd(subject, topic);
  return (
    <main className="seo-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(learningResource) }} />
      <header className="seo-header">
        <Link className="seo-brand" href="/">PelajarinAja</Link>
        <nav><Link href={subjectPath(subject.id)}>{subject.name}</Link><Link href="/materi">Semua Materi</Link></nav>
      </header>
      <div className="seo-container seo-reading">
        <nav className="seo-breadcrumb" aria-label="Breadcrumb"><Link href="/">Beranda</Link><span>/</span><Link href="/mapel">Mata Pelajaran</Link><span>/</span><Link href={subjectPath(subject.id)}>{subject.name}</Link><span>/</span><span>{topic.title}</span></nav>
        <article>
          <header className="seo-hero article-hero">
            <span className="seo-eyebrow">{subject.name} · {topic.group}</span>
            <h1>{topic.title}</h1>
            <p>{topic.summary}</p>
            <div className="seo-card-meta"><span>{topic.level}</span><span>{topic.pages}</span><span>{topic.sourceLabel}</span></div>
            <div className="seo-actions"><Link className="seo-button" href={appTopicPath(subject.id, topic.id, "materi")}>Buka mode belajar interaktif</Link><Link className="seo-button secondary" href={appTopicPath(subject.id, topic.id, "latihan")}>Kerjakan 25 soal</Link></div>
          </header>

          <section className="seo-content-section">
            <h2>Tujuan Pembelajaran</h2>
            <ul>{topic.objectives.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section className="seo-content-grid">
            <div className="seo-content-section"><h2>Prasyarat</h2><ul>{topic.prerequisites.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="seo-content-section"><h2>Konsep Dasar</h2><ol>{topic.concepts.map((item) => <li key={item}>{item}</li>)}</ol></div>
          </section>

          <section className="seo-content-section">
            <h2>Pembahasan Mendalam</h2>
            <div className="seo-prose-stack">{topic.deepDive.map((item) => <p key={item}>{item}</p>)}</div>
          </section>

          <section className="seo-content-section">
            <h2>Rumus, Strategi, atau Pola Penting</h2>
            <div className="seo-formula-list">{(topic.formulas?.length ? topic.formulas : ["Fokus pada alur konsep, bukti, dan langkah penyelesaian."]).map((item) => <code key={item}>{item}</code>)}</div>
          </section>

          <section className="seo-content-section">
            <h2>Langkah Penyelesaian</h2>
            <ol className="seo-step-list">{topic.steps.map((item) => <li key={item}>{item}</li>)}</ol>
          </section>

          {serkomLesson && <section className="seo-content-section technical-section">
            <h2>Tutorial Teknis SERKOM</h2>
            <p>Bagian ini menampilkan pola inti, contoh kode atau perintah, lalu analisis setiap baris agar hubungan antara sintaks dan fungsi dapat ditelusuri.</p>
            <h3>Sintaks atau pola inti</h3>
            <div className="seo-formula-list">{serkomLesson.syntax.map((line) => <code key={line}>{line}</code>)}</div>
            <h3>Contoh kode atau perintah</h3>
            <pre className="seo-code"><code>{serkomLesson.code.map((line, lineIndex) => `${String(lineIndex + 1).padStart(2, "0")}  ${line}`).join("\n")}</code></pre>
            <h3>Analisis setiap baris</h3>
            <div className="seo-line-analysis">{serkomLesson.explain.map((line, lineIndex) => <div key={`${lineIndex}-${line}`}><strong>Baris {lineIndex + 1}</strong><p>{line}</p></div>)}</div>
            <h3>Latihan Mandiri</h3>
            <p>{serkomLesson.tryIt}</p>
          </section>}

          <section className="seo-content-section">
            <h2>Contoh Bertahap</h2>
            <div className="seo-example-grid">{topic.workedExamples.map((example) => <article key={example.title}><span className="seo-chip">{example.title}</span><h3>{example.problem}</h3><ol>{example.steps.map((step) => <li key={step}>{step}</li>)}</ol><p><strong>Hasil:</strong> {example.result}</p></article>)}</div>
          </section>

          <section className="seo-content-grid">
            <div className="seo-content-section"><h2>Kesalahan yang Perlu Dihindari</h2><ul>{topic.traps.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="seo-content-section"><h2>Glosarium</h2><dl className="seo-glossary">{topic.glossary.map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.meaning}</dd></div>)}</dl></div>
          </section>

          <section className="seo-content-section assessment-promo">
            <h2>Penilaian 25 Soal</h2>
            <p>Setiap paket berisi 25 soal unik dengan variasi pilihan ganda dan pilihan ganda kompleks serta nilai total 100.</p>
            <Link className="seo-button" href={appTopicPath(subject.id, topic.id, "latihan")}>Mulai penilaian</Link>
          </section>

          <nav className="seo-pagination" aria-label="Navigasi materi">
            {previous ? <Link href={topicPath(subject.id, previous.id)}><span>Materi sebelumnya</span><strong>{previous.title}</strong></Link> : <span />}
            {next ? <Link href={topicPath(subject.id, next.id)}><span>Materi berikutnya</span><strong>{next.title}</strong></Link> : <span />}
          </nav>
        </article>
      </div>
      <footer className="seo-footer"><Link href={subjectPath(subject.id)}>Indeks {subject.name}</Link><Link href="/kebijakan-privasi">Kebijakan Privasi</Link></footer>
    </main>
  );
}
