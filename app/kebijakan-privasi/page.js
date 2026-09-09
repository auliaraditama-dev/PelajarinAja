import Link from "next/link";
import { breadcrumbJsonLd, safeJsonLd } from "../../lib/seo.js";

export const metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi PelajarinAja mengenai penyimpanan progres belajar, bookmark, catatan, nilai, dan riwayat simulasi pada browser pengguna.",
  alternates: { canonical: "/kebijakan-privasi" }
};

export default function PrivacyPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Beranda", path: "/" }, { name: "Kebijakan Privasi", path: "/kebijakan-privasi" }]);
  return (
    <main className="seo-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }} />
      <header className="seo-header"><Link className="seo-brand" href="/">PelajarinAja</Link><nav><Link href="/tentang">Tentang</Link><Link href="/materi">Materi</Link></nav></header>
      <div className="seo-container seo-reading">
        <nav className="seo-breadcrumb" aria-label="Breadcrumb"><Link href="/">Beranda</Link><span>/</span><span>Kebijakan Privasi</span></nav>
        <section className="seo-hero"><span className="seo-eyebrow">Privasi</span><h1>Kebijakan Privasi</h1><p>Ringkasan cara PelajarinAja menyimpan data belajar pada versi aplikasi tanpa akun dan tanpa database pengguna.</p></section>
        <section className="seo-content-section"><h2>Data yang Disimpan</h2><p>Progres materi, bookmark, catatan pribadi, nilai penilaian, riwayat simulasi, tema, ukuran bacaan, mata pelajaran aktif, dan riwayat signature soal disimpan pada localStorage browser.</p></section>
        <section className="seo-content-section"><h2>Lokasi Penyimpanan</h2><p>Data tersebut berada pada browser perangkat yang digunakan. Data tidak otomatis berpindah ke perangkat lain dan dapat hilang apabila penyimpanan situs pada browser dihapus.</p></section>
        <section className="seo-content-section"><h2>Data Akun</h2><p>Versi aplikasi ini tidak meminta pembuatan akun, nama lengkap, alamat, nomor telepon, atau kredensial pengguna untuk menjalankan fitur belajar inti.</p></section>
        <section className="seo-content-section"><h2>Layanan Deployment</h2><p>Apabila situs diterapkan melalui penyedia hosting seperti Vercel, penyedia tersebut dapat menjalankan pencatatan teknis sesuai kebijakan layanannya. Pengelola deployment perlu menyesuaikan halaman ini apabila menambahkan analytics, formulir, akun, database, atau layanan pihak ketiga.</p></section>
      </div>
      <footer className="seo-footer"><Link href="/tentang">Tentang</Link><Link href="/">Buka Aplikasi</Link></footer>
    </main>
  );
}
