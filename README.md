# PelajarinAja Universal v7

PelajarinAja adalah platform belajar multi-mapel berbasis Next.js untuk Matematika, Bahasa Indonesia, Bahasa Inggris, dan SERKOM RPL.

## Fokus v7

Versi ini mempertahankan seluruh fitur lama dan menambahkan pengalaman belajar yang lebih manusiawi seperti guru yang menjelaskan di kelas.

- Penjelasan pembuka dengan bahasa sehari-hari.
- Analogi sederhana untuk membantu membayangkan konsep.
- Bagian khusus tentang alasan materi penting.
- Langkah pengerjaan soal yang lebih terstruktur.
- Pembahasan setelah menjawab berisi langkah memahami soal, bukan hanya jawaban akhir.
- SERKOM memakai pola tutorial bertahap: syntax, contoh kode, nomor baris, penjelasan setiap baris, dan latihan "coba sendiri".
- Kontrol ukuran huruf A−, A, A+ untuk bacaan materi.
- Preferensi ukuran huruf disimpan di localStorage.
- 25 soal dinamis per materi.
- 4 poin per soal dan nilai maksimum 100.
- Simulasi 25 soal selama 40 menit.
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

Setiap topik SERKOM memiliki tutorial seperti referensi langkah demi langkah:

1. Pola atau syntax inti
2. Contoh kode atau perintah
3. Nomor baris
4. Penjelasan tiap baris
5. Latihan "coba sendiri"

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
- total 100 poin
- jawaban valid
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
