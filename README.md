# PelajarinAja Universal Production v14.1

PelajarinAja adalah platform pembelajaran Next.js untuk TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan persiapan SERKOM RPL.

## Cakupan

- 4 mata pelajaran.
- 60 materi.
- Materi formal dan terstruktur.
- Kompetensi dan ruang lingkup materi.
- Tujuan belajar dan prasyarat.
- Konsep dasar dan pembahasan mendalam.
- Rumus, strategi, atau pola penting.
- Langkah penyelesaian.
- Contoh bertahap.
- Kesalahan yang perlu dihindari.
- Glosarium.
- Tutorial teknis SERKOM dengan kode, nomor baris, dan analisis setiap baris.

## Penilaian

Setiap materi menghasilkan 25 soal berbeda dengan nilai total 100.

- 5 opsi A sampai E untuk pilihan ganda biasa.
- Pilihan ganda kompleks banyak jawaban.
- Tabel pernyataan Benar atau Salah.
- Stimulus kontekstual untuk melatih literasi, numerasi, dan logika pemrograman.
- Tingkat kemampuan diatur secara internal tanpa label tingkat pada antarmuka.
- Setiap jawaban dipilih terlebih dahulu kemudian dikunci agar klik tidak langsung menjadi keputusan final.
- Pembahasan dan langkah analisis muncul setelah jawaban dikunci.
- Riwayat soal lokal digunakan untuk mengurangi pengulangan paket berikutnya.

## Fitur

- Search dan filter materi.
- Bookmark.
- Catatan pribadi.
- Penanda materi selesai.
- Kontrol ukuran bacaan.
- Dark mode.
- Print.
- Progres per mata pelajaran.
- Nilai terakhir dan nilai terbaik.
- Riwayat percobaan.
- Simulasi 25 soal selama 40 menit.
- Simulasi satu mata pelajaran atau campuran.
- Penyimpanan lokal menggunakan localStorage.
- Responsive desktop, tablet, dan mobile.
- Halaman error, loading, dan 404.
- Metadata dinamis.
- Canonical URL.
- Open Graph dan Twitter Card.
- Sitemap dan robots.
- Structured data.
- Web App Manifest.
- Security headers.
- GitHub Actions CI.
- Konfigurasi Vercel.

## Menjalankan project

```bash
npm install
npm run check
npm run build
npm start
```

Untuk pengembangan:

```bash
npm run dev
```

## Environment

```env
NEXT_PUBLIC_SITE_URL=https://domain-anda.com
GOOGLE_SITE_VERIFICATION=
```

## Deployment Vercel

1. Push project ke GitHub.
2. Import repository ke Vercel.
3. Tambahkan environment variable production apabila menggunakan domain sendiri.
4. Deploy.
5. Pastikan `npm run check` dan `next build` selesai tanpa error.

Project menggunakan Next.js 16.3.4, React 19.2.8, dan Node.js 20.x.

## Hotfix v14.1

Perbaikan struktur route App Router memastikan halaman root, indeks mata pelajaran, indeks materi, dan route dinamis tidak saling tertukar. Validator juga memeriksa peran setiap file route sebelum production build dijalankan.
