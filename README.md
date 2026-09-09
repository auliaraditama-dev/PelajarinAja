# PelajarinAja Universal Production v18

PelajarinAja adalah platform pembelajaran Next.js untuk TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan persiapan SERKOM RPL. Versi ini mempertahankan seluruh fitur aplikasi sebelumnya dan memperluas variasi soal agar panjang bacaan, bentuk pertanyaan, dan kebutuhan penalaran lebih beragam tanpa memutus hubungan antara stimulus dan inti pertanyaan.

## Cakupan

- 4 mata pelajaran.
- 60 materi.
- 25 soal per paket.
- Nilai maksimum 100.
- Pilihan ganda A–E.
- Pilihan ganda kompleks banyak jawaban.
- Tabel pernyataan Benar atau Salah.
- Soal berbasis bacaan atau kasus yang terhubung langsung dengan pertanyaan.
- Variasi internal bacaan pendek, sedang, dan panjang.
- Variasi internal kemampuan dasar, menengah, dan lanjut tanpa menampilkan label tingkat pada antarmuka.
- Pembahasan dan langkah analisis setelah jawaban dikunci.
- Riwayat soal lokal untuk menolak signature yang sama pada paket berikutnya.

## Pola Soal

Soal TKA menggunakan pola bacaan terlebih dahulu kemudian pertanyaan. Panjang bacaan dan pertanyaan tidak dibuat seragam. Soal ringkas berfokus pada informasi eksplisit atau satu operasi utama. Soal menengah menghubungkan lebih dari satu informasi yang relevan. Soal lanjut dapat menggabungkan dua bagian, pilihan ganda kompleks, atau tabel pernyataan.

Konteks pada Matematika selalu membawa data yang diperlukan oleh operasi matematika yang ditanyakan. Bahasa Indonesia dan Bahasa Inggris menggunakan bukti pada bacaan yang sama sebagai dasar jawaban. SERKOM menggunakan kasus, potongan kode, perintah, output, atau alur teknis yang berhubungan langsung dengan komponen yang ditanyakan.

## Anti-Duplikasi

Setiap paket menolak signature soal yang sudah digunakan pada paket yang sedang dibuat. Inti bacaan dan pertanyaan juga harus berbeda dalam satu paket. Riwayat lokal menyimpan signature soal terbaru sehingga paket berikutnya tidak menggunakan signature yang masih berada dalam riwayat. Generator gagal daripada sengaja mengabaikan daftar pengecualian ketika kombinasi unik tidak dapat dibuat.

## Fitur Aplikasi

- Beranda pembelajaran.
- Sidebar materi.
- Pemilih mata pelajaran.
- Search dan filter kelompok.
- Bookmark.
- Tandai materi selesai.
- Progress mata pelajaran dan keseluruhan.
- Catatan pribadi lokal.
- Ukuran bacaan A−, A, A+.
- Dark mode.
- Print materi.
- Penilaian 25 soal.
- Nilai terakhir dan nilai terbaik.
- Riwayat percobaan.
- Simulasi satu mata pelajaran.
- Simulasi campuran.
- Timer 40 menit.
- Penyimpanan localStorage.
- Halaman loading, error, global error, dan 404.
- Responsive desktop, tablet, dan mobile.
- Route indeks dan route dinamis.
- Canonical URL.
- Metadata dinamis.
- Sitemap.
- Robots.
- Open Graph.
- Twitter Card.
- Structured data.
- Manifest.
- Security headers.
- GitHub Actions.
- Konfigurasi Vercel.

## SERKOM RPL

Materi SERKOM tetap memuat tutorial teknis terstruktur dengan syntax, potongan kode, analisis setiap baris, latihan mandiri, MVC, migration, model, Eloquent, seeder, controller, validation, routing, Blade, CRUD, CSS, workflow, debugging, testing, dokumentasi, portofolio, dan persiapan verifikasi kompetensi.

## Runtime

- Node.js 24.x.
- Next.js 16.3.4.
- React 19.2.8.
- React DOM 19.2.8.

## Menjalankan Project

```bash
npm install
npm run check
npm run dev
```

Production build:

```bash
npm run build
npm start
```

## Environment

```env
NEXT_PUBLIC_SITE_URL=https://domain-anda.com
GOOGLE_SITE_VERIFICATION=
```

## Validasi

`npm run check` memeriksa struktur route, relative import, larangan komentar source, cakupan materi, 25 soal per paket, total 100 poin, variasi panjang internal, komposisi tingkat internal, format TKA, opsi A–E, pilihan ganda kompleks, matriks Benar/Salah, keterhubungan bacaan dan pertanyaan, anti-duplikasi, simulasi, dan tutorial SERKOM.
