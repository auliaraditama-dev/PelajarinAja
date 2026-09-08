# PelajarinAja Universal Formal v9

PelajarinAja adalah platform belajar multi-mapel berbasis Next.js untuk Matematika, Bahasa Indonesia, Bahasa Inggris, dan SERKOM RPL.

## Fokus v9

Versi ini mempertahankan seluruh fitur sebelumnya dan memperkuat sistem bank soal agar setiap paket benar-benar unik, bertingkat, dan terstruktur.

- Ringkasan konseptual dengan bahasa formal dan jelas.
- Ilustrasi konsep untuk membantu memahami hubungan antar gagasan.
- Bagian khusus mengenai signifikansi materi.
- Langkah pengerjaan soal yang terstruktur.
- Pembahasan setelah menjawab memuat langkah analisis dan verifikasi jawaban.
- SERKOM memakai pola tutorial bertahap: sintaks, contoh kode, nomor baris, analisis setiap baris, dan latihan mandiri.
- Kontrol ukuran huruf A−, A, A+ untuk bacaan materi.
- Preferensi ukuran huruf disimpan di localStorage.
- 25 soal unik per materi.
- Urutan tingkat kesulitan tetap: 8 mudah, 9 sedang, 8 sulit.
- Soal 1–8 berfokus pada konsep dasar dan penerapan langsung.
- Soal 9–17 berfokus pada penerapan dan analisis beberapa informasi.
- Soal 18–25 berfokus pada analisis terpadu dua bagian.
- Setiap soal bernilai 4 poin dan nilai maksimum 100.
- Tidak ada soal duplikat di dalam satu paket.
- Riwayat soal terbaru disimpan secara lokal dan digunakan untuk menghindari pengulangan pada pengacakan berikutnya.
- Sistem tetap menyediakan mekanisme aman bila variasi suatu topik telah mendekati batas riwayat tersimpan.
- Simulasi 25 soal selama 40 menit memakai pola kesulitan yang sama.
- Penilaian hasil memuat ringkasan kemampuan per tingkat kesulitan.
- Penilaian kemampuan dan riwayat lokal.
- Bookmark, catatan, dark mode, print, progress, dan navigasi materi.
- Responsive desktop, tablet, dan mobile.
- Source code aplikasi tanpa komentar source.

## Mata pelajaran

- Matematika
- Bahasa Indonesia
- Bahasa Inggris
- SERKOM RPL

Total: 60 materi.

## Komposisi penilaian 25 soal

| Nomor | Tingkat | Jumlah | Fokus |
| --- | --- | ---: | --- |
| 1–8 | Mudah | 8 | Konsep dasar dan penerapan langsung |
| 9–17 | Sedang | 9 | Penerapan konsep dan analisis beberapa informasi |
| 18–25 | Sulit | 8 | Analisis terpadu dan evaluasi dua bagian |

Setiap paket memiliki total 100 poin. Sistem menggunakan signature soal yang mempertimbangkan teks pertanyaan dan opsi jawaban untuk mencegah duplikasi dalam paket. Riwayat signature terbaru juga digunakan ketika membuat paket berikutnya.

## SERKOM RPL

Materi SERKOM difokuskan pada pembelajaran Pemrogram Junior Laravel 12:

- SKKNI, MUK, dan bukti kompetensi
- MVC dan request-response
- IPO dan analisis kebutuhan
- PHP, Laravel, Blade, HTML, CSS, dan HTTP
- Composer, Artisan, MySQL, dan .env
- Migration
- Eloquent model, fillable, casts, Route Model Binding
- Seeder
- Controller CRUD
- Validation
- Routing
- Blade
- Form CRUD
- CSS responsive
- Workflow CRUD
- Debugging
- Manual testing dan Feature Test
- README, portofolio, presentasi
- Pertanyaan lisan asesor
- Cheat sheet kesiapan

Setiap topik SERKOM memiliki tutorial teknis langkah demi langkah:

1. Pola atau sintaks inti
2. Contoh kode atau perintah
3. Nomor baris
4. Analisis tiap baris
5. Latihan mandiri

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Pemeriksaan data dan bank soal

```bash
npm run check
```

Validator memeriksa:

- minimal 4 mapel
- minimal 60 materi
- struktur materi lengkap
- 25 soal unik per materi
- tidak ada pengulangan pada beberapa paket berurutan selama riwayat tersedia
- komposisi 8 mudah, 9 sedang, 8 sulit
- urutan tingkat kesulitan soal 1 sampai 25
- total 100 poin
- jawaban valid
- opsi jawaban tidak ganda
- langkah pembahasan soal
- tutorial SERKOM tersedia
- jumlah baris kode SERKOM sama dengan jumlah penjelasan baris
- simulasi per mapel
- simulasi universal

## Production build

```bash
npm run build
```

`prebuild` menjalankan validator terlebih dahulu.

## Deploy ke Vercel

1. Push project ke GitHub.
2. Import repository ke Vercel.
3. Pastikan framework terdeteksi sebagai Next.js.
4. Deploy.

Vercel akan menginstal dependency dan menjalankan production build secara otomatis.

## Penyimpanan

Aplikasi tidak memerlukan database untuk progress pengguna. Data belajar disimpan di browser menggunakan localStorage:

- mapel aktif
- materi aktif
- bookmark
- materi selesai
- catatan pribadi
- nilai per materi
- riwayat simulasi
- riwayat soal terbaru per materi
- riwayat soal simulasi terbaru
- tema
- ukuran huruf bacaan

## Struktur utama

```text
app/
  page.js
  globals.css
  layout.js
  error.js
  loading.js
  not-found.js
  manifest.js

data/
  subjects.js
  topics.js
  mathTopics.js
  languageTopics.js
  serkomTopics.js
  pedagogy.js
  serkomLessons.js
  questionGenerators.js
  mathQuestionGenerators.js
  languageQuestionGenerators.js
  serkomQuestionGenerators.js

scripts/
  validate.mjs
```

## Catatan SERKOM

Materi SERKOM pada platform ini adalah bahan pembelajaran dan simulasi. Keputusan kompeten atau belum kompeten resmi tetap mengikuti asesor, LSP, skema, dan MUK yang berlaku.
