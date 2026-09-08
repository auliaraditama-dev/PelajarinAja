import Link from "next/link";

export default function NotFound() {
  return <main className="system-page"><div className="system-card"><span>404</span><h1>Halaman tidak ditemukan.</h1><p>Kembali ke halaman utama PelajarinAja.</p><Link href="/">Kembali ke beranda</Link></div></main>;
}
