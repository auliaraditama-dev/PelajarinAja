import Link from "next/link";
import { subjects } from "../../data/subjects.js";
import { topics } from "../../data/topics.js";
import { breadcrumbJsonLd, safeJsonLd } from "../../lib/seo.js";

export const metadata = {
  title: "Tentang PelajarinAja",
  description: "Tentang PelajarinAja, platform belajar TKA dan persiapan SERKOM RPL dengan materi terstruktur, latihan bertingkat, simulasi, dan progres lokal.",
  alternates: { canonical: "/tentang" }
};

export default function AboutPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Beranda", path: "/" }, { name: "Tentang", path: "/tentang" }]);
  return (
    <main className="seo-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }} />
      <header className="seo-header"><Link className="seo-brand" href="/">PelajarinAja</Link><nav><Link href="/mapel">Mata Pelajaran</Link><Link href="/materi">Materi</Link></nav></header>
      <div className="seo-container seo-reading">
        <nav className="seo-breadcrumb" aria-label="Breadcrumb"><Link href="/">Beranda</Link><span>/</span><span>Tentang</span></nav>
        <section className="seo-hero"><span className="seo-eyebrow">Informasi platform</span><h1>Tentang PelajarinAja</h1><p>PelajarinAja adalah platform pembelajaran yang menggabungkan materi TKA dan persiapan SERKOM RPL dalam satu antarmuka responsif.</p></section>
        <section className="seo-content-section"><h2>Cakupan Pembelajaran</h2><p>Platform memuat {subjects.length} mata pelajaran dan {topics.length} materi. Setiap materi memiliki tujuan belajar, konsep dasar, pembahasan mendalam, langkah penyelesaian, contoh bertahap, kesalahan yang perlu dihindari, glosarium, serta penilaian 25 soal bertingkat.</p></section>
        <section className="seo-content-section"><h2>Sistem Penilaian</h2><p>Paket penilaian terdiri dari 8 soal mudah, 9 soal sedang, dan 8 soal sulit. Setiap soal bernilai 4 poin sehingga nilai maksimum adalah 100. Riwayat soal terbaru disimpan pada browser untuk mengurangi pengulangan ketika paket baru dibuat.</p></section>
        <section className="seo-content-section"><h2>Penyimpanan Data</h2><p>Progres, bookmark, catatan, nilai, dan riwayat simulasi disimpan secara lokal pada browser melalui localStorage. Platform versi ini tidak memerlukan akun pengguna atau database untuk data belajar pribadi.</p></section>
      </div>
      <footer className="seo-footer"><Link href="/kebijakan-privasi">Kebijakan Privasi</Link><Link href="/">Buka Aplikasi</Link></footer>
    </main>
  );
}
