import Link from "next/link";
import { subjects } from "../../data/subjects.js";
import { topics } from "../../data/topics.js";
import { breadcrumbJsonLd, safeJsonLd } from "../../lib/seo.js";
import { subjectPath } from "../../lib/site.js";

export const metadata = {
  title: "Daftar Mata Pelajaran",
  description: "Pilih mata pelajaran PelajarinAja: TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan persiapan SERKOM RPL Laravel 12.",
  alternates: { canonical: "/mapel" }
};

export default function SubjectsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Beranda", path: "/" },
    { name: "Mata Pelajaran", path: "/mapel" }
  ]);
  return (
    <main className="seo-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }} />
      <header className="seo-header">
        <Link className="seo-brand" href="/">PelajarinAja</Link>
        <nav><Link href="/materi">Semua Materi</Link><Link href="/tentang">Tentang</Link></nav>
      </header>
      <div className="seo-container">
        <nav className="seo-breadcrumb" aria-label="Breadcrumb"><Link href="/">Beranda</Link><span>/</span><span>Mata Pelajaran</span></nav>
        <section className="seo-hero">
          <span className="seo-eyebrow">Indeks pembelajaran</span>
          <h1>Mata Pelajaran PelajarinAja</h1>
          <p>Pilih mata pelajaran untuk membuka indeks materi, penjelasan terstruktur, latihan 25 soal bervariasi, dan simulasi penilaian kemampuan.</p>
        </section>
        <section className="seo-card-grid">
          {subjects.map((subject) => {
            const count = topics.filter((topic) => topic.subjectId === subject.id).length;
            return (
              <article className="seo-card" key={subject.id}>
                <span className="seo-chip">{subject.short}</span>
                <h2><Link href={subjectPath(subject.id)}>{subject.name}</Link></h2>
                <p>{subject.description}</p>
                <div className="seo-card-meta"><span>{count} materi</span><span>{subject.groups.length - 1} kelompok</span></div>
                <Link className="seo-button" href={subjectPath(subject.id)}>Buka indeks materi</Link>
              </article>
            );
          })}
        </section>
      </div>
      <footer className="seo-footer"><Link href="/kebijakan-privasi">Kebijakan Privasi</Link><Link href="/materi">Indeks Materi</Link></footer>
    </main>
  );
}
