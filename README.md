# PelajarinAja Universal Full-Features v6

PelajarinAja adalah platform belajar Next.js untuk TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan persiapan SERKOM RPL Laravel 12.

## Fitur pembelajaran

Setiap materi memiliki struktur Full-Features:

1. Konseptual Dasar
   - judul materi
   - analogi untuk awam
   - cara kerja atau alur utama
2. Analisis Kritis & Teoritis
   - alasan konsep penting
   - latar belakang
   - pembahasan mendalam
   - batasan dan kelemahan
3. Implementasi & Contoh
   - Matematika: rumus dan penerapan terstruktur
   - Bahasa Indonesia/Bahasa Inggris: studi kasus membaca
   - SERKOM: code snippet nyata dan penjelasan baris demi baris
4. Pembahasan Soal Latihan
   - contoh soal
   - jawaban
   - bedah langkah demi langkah
5. Kesimpulan & Highlight
   - tiga poin inti yang wajib diingat
6. Penutup Interaktif
   - pertanyaan pemantik yang dapat dijawab melalui catatan pribadi

Seluruh fitur lama tetap tersedia:

- 4 mata pelajaran
- 60 materi
- 25 soal dinamis per materi
- 4 poin per soal dan total nilai 100
- pengacakan paket saat refresh dan melalui tombol paket baru
- pilihan ganda biasa dan pilihan ganda kompleks
- pembahasan setelah jawaban dikunci
- nilai terakhir, nilai terbaik, percobaan, dan klasifikasi kemampuan
- simulasi 25 soal dengan timer 40 menit
- simulasi per mapel dan campuran universal
- riwayat simulasi
- progress per materi, per mapel, dan keseluruhan
- bookmark
- catatan pribadi
- dark mode
- print mode
- pencarian dan filter materi
- responsive desktop, tablet, dan mobile
- penyimpanan localStorage tanpa akun dan database
- custom loading, error, 404, manifest, security headers
- GitHub Actions CI
- validator production sebelum build

## SERKOM RPL

Materi SERKOM mengikuti jobsheet persiapan Pemrogram Junior Laravel 12 yang dilampirkan pengguna. Cakupan utamanya meliputi:

- posisi SKKNI, MUK, unit, dan bukti
- MVC dan request-response
- IPO dan spesifikasi proyek
- PHP, Composer, Artisan, MySQL, dan .env
- migration dan data dictionary
- Eloquent, fillable, casts, dan Route Model Binding
- seeder
- controller CRUD dan validation
- resource routing
- Blade dan landing page dinamis
- form CRUD, CSRF, method spoofing, old(), dan error
- CSS responsif
- workflow CRUD
- debugging dan troubleshooting
- pengujian manual dan Feature Test
- README, portofolio, presentasi, dan bukti
- pertanyaan lisan asesor
- cheat sheet latihan

Pada seluruh materi SERKOM, bagian Implementasi menampilkan kode dengan nomor baris dan panel penjelasan setiap baris. Source code aplikasi platform tetap tanpa komentar kode.

Materi SERKOM merupakan bahan pembelajaran dan simulasi. Keputusan kompeten/belum kompeten resmi mengikuti asesor, LSP, skema, dan MUK yang disahkan.

## Menjalankan lokal

Persyaratan:

- Node.js 20.9 atau lebih baru
- npm

Jalankan:

```bash
npm install
npm run check
npm run dev
```

Buka `http://localhost:3000`.

## Production build

```bash
npm install
npm run build
npm start
```

`npm run build` otomatis menjalankan `npm run check` melalui `prebuild`.

Validator memeriksa:

- minimal 4 mapel
- minimal 60 materi
- seluruh struktur Full-Features tersedia
- setiap materi SERKOM memiliki jumlah baris kode dan penjelasan yang sama
- 25 soal unik per paket materi
- opsi dan indeks jawaban valid
- total nilai 100
- simulasi per mapel dan universal valid

## Deploy Vercel

1. Push project ke GitHub.
2. Import repository di Vercel.
3. Vercel mendeteksi Next.js dari `package.json`.
4. Build command: `npm run build`.
5. Deploy.

Tidak ada environment variable yang wajib karena progress belajar menggunakan localStorage.

## GitHub Actions

Workflow `.github/workflows/ci.yml` menjalankan:

```text
npm install
npm run check
npm run build
```

pada push ke `main`/`master` dan pull request.

## Struktur utama

```text
app/
  error.js
  globals.css
  layout.js
  loading.js
  manifest.js
  not-found.js
  page.js
data/
  languageQuestionGenerators.js
  languageTopics.js
  masterContent.js
  mathQuestionGenerators.js
  mathTopics.js
  questionGenerators.js
  serkomQuestionGenerators.js
  serkomTopics.js
  subjects.js
  topics.js
scripts/
  validate.mjs
.github/workflows/
  ci.yml
package.json
next.config.mjs
vercel.json
```
