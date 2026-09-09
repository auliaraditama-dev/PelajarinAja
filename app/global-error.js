"use client";

export default function GlobalError({ reset }) {
  return (
    <html lang="id">
      <body>
        <main className="system-page">
          <div className="system-card">
            <span>PelajarinAja</span>
            <h1>Aplikasi tidak dapat ditampilkan.</h1>
            <p>Muat ulang aplikasi untuk mencoba kembali. Data belajar yang tersimpan secara lokal tetap dipertahankan.</p>
            <button onClick={() => reset()}>Muat ulang aplikasi</button>
          </div>
        </main>
      </body>
    </html>
  );
}
