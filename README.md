# PelajarinAja Universal Production v15

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
- Stimulus kehidupan sehari-hari untuk melatih literasi, numerasi, analisis, dan logika pemrograman.
- Tingkat kemampuan diatur secara internal tanpa label tingkat pada antarmuka.
- Setiap jawaban dipilih terlebih dahulu kemudian dikunci.
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
- Halaman error, global error, loading, dan 404.
- Metadata dinamis.
- Canonical URL.
- Open Graph dan Twitter Card.
- Sitemap dan robots.
- Structured data.
- Web App Manifest.
- Security headers.
- GitHub Actions CI.
- Konfigurasi Vercel.

## Runtime Production

- Node.js 24.x.
- Next.js 16.3.4.
- React 19.2.8.
- React DOM 19.2.8.

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

`NEXT_PUBLIC_SITE_URL` direkomendasikan untuk canonical URL, sitemap, Open Graph, dan structured data pada domain production.

## Deployment Vercel

1. Ekstrak project sehingga `package.json` berada di root repository.
2. Push seluruh isi project ke branch deployment GitHub.
3. Import repository ke Vercel dengan Framework Preset Next.js.
4. Gunakan Node.js 24.x pada Vercel Project Settings.
5. Tambahkan `NEXT_PUBLIC_SITE_URL` dan `GOOGLE_SITE_VERIFICATION` bila diperlukan.
6. Deploy dengan Build Command `npm run build`.

Validator dijalankan otomatis melalui `prebuild` sebelum `next build`.

## Perbaikan Production v15

- Root `app/page.js` dipulihkan sebagai aplikasi interaktif utama.
- `app/mapel/page.js` dipulihkan sebagai indeks mata pelajaran.
- `app/mapel/[subjectId]/page.js` tetap menjadi route mata pelajaran dinamis.
- `app/materi/page.js` dipulihkan sebagai indeks materi.
- `app/materi/[subjectId]/[topicId]/page.js` tetap menjadi route materi dinamis.
- Seluruh relative import divalidasi sebelum build.
- Node.js diseragamkan ke 24.x pada `package.json`, `.nvmrc`, dan GitHub Actions.
- Informasi internal asal materi tidak ditampilkan pada antarmuka production.
