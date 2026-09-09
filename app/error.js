"use client";

export default function Error({ reset }) {
  return <main className="system-page"><div className="system-card"><span>PelajarinAja</span><h1>Terjadi kesalahan tampilan.</h1><p>Muat ulang bagian aplikasi ini. Data progres yang sudah tersimpan di browser tidak dihapus.</p><button onClick={() => reset()}>Coba lagi</button></div></main>;
}
