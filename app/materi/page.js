import Link from "next/link";
import { subjects } from "../../data/subjects.js";
import { topics } from "../../data/topics.js";
import { breadcrumbJsonLd, safeJsonLd } from "../../lib/seo.js";
import { subjectPath, topicPath } from "../../lib/site.js";

export const metadata = {
  title: "Indeks 60 Materi TKA & SERKOM RPL",
  description: "Indeks lengkap materi PelajarinAja untuk TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan SERKOM RPL Laravel 12.",
  alternates: { canonical: "/materi" }
};

export default function MaterialsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Beranda", path: "/" },
    { name: "Materi", path: "/materi" }
  ]);
  return (
    <main className="seo-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }} />
      <header className="seo-header"><Link className="seo-brand" href="/">PelajarinAja</Link><nav><Link href="/mapel">Mata Pelajaran</Link><Link href="/tentang">Tentang</Link></nav></header>
      <div className="seo-container">
        <nav className="seo-breadcrumb" aria-label="Breadcrumb"><Link href="/">Beranda</Link><span>/</span><span>Materi</span></nav>
        <section className="seo-hero"><span className="seo-eyebrow">Indeks lengkap</span><h1>60 Materi TKA dan SERKOM RPL</h1><p>Seluruh materi disusun dalam URL yang jelas agar mudah dinavigasi, dibagikan, dan ditemukan melalui mesin pencari.</p></section>
        {subjects.map((subject) => {
          const list = topics.filter((topic) => topic.subjectId === subject.id);
          return (
            <section className="seo-section" key={subject.id}>
              <div className="seo-section-head"><h2><Link href={subjectPath(subject.id)}>{subject.name}</Link></h2><span>{list.length} materi</span></div>
              <div className="seo-index-grid">
                {list.map((topic) => <Link key={topic.id} href={topicPath(subject.id, topic.id)}><strong>{topic.title}</strong><span>{topic.group} · {topic.level}</span></Link>)}
              </div>
            </section>
          );
        })}
      </div>
      <footer className="seo-footer"><Link href="/mapel">Mata Pelajaran</Link><Link href="/kebijakan-privasi">Kebijakan Privasi</Link></footer>
    </main>
  );
}
