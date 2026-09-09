# PelajarinAja Universal Everyday TKA v13

PelajarinAja adalah platform pembelajaran Next.js untuk TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan persiapan SERKOM RPL. Versi v12 mengintegrasikan cakupan materi dari lima dokumen sumber yang dilampirkan ke dalam 60 materi, menambahkan peta sumber per materi, dan memperpanjang stimulus latihan untuk melatih literasi, numerasi, serta logika pemrograman.

## Integrasi sumber

- Soal TKA Matematika Wajib SMA/MA/SMK Tahun 2025, 29 halaman.
- Soal TKA Bahasa Indonesia, 5 halaman.
- TKA Bahasa Inggris, 17 halaman.
- Jobsheet Pembelajaran Persiapan SERKOM RPL Laravel 12, 42 halaman.
- Rangkuman & Analisis Laravel 12 Persiapan SERKOM RPL, 58 halaman.

Setiap materi memiliki referensi halaman, kompetensi sumber, dan cakupan konsep yang tampil langsung pada halaman materi. Materi SERKOM memuat tutorial teknis, potongan kode/perintah, analisis baris, workflow CRUD, debugging, testing, portofolio, dan kesiapan asesmen sesuai dokumen latihan.

## Sistem latihan v12

Setiap materi menghasilkan 25 soal unik dengan total 100 poin. Komposisi tingkat kemampuan tetap diatur internal tanpa label tingkat pada antarmuka. Soal TKA menggunakan stimulus panjang, 5 opsi A–E, pilihan ganda kompleks banyak jawaban, dan tabel Benar/Salah. Soal Matematika memakai narasi numerasi sebelum data inti. Soal Bahasa Indonesia dan Bahasa Inggris memakai stimulus membaca yang lebih panjang. Soal SERKOM memakai skenario teknis dan potongan kode atau perintah untuk melatih logika pemrograman dan penelusuran alur Laravel.

# PelajarinAja Universal TKA v12

## Hotfix v12

Versi ini memperbaiki kegagalan build Vercel ketika `app/page.js` tertimpa oleh isi halaman `app/tentang/page.js`. Halaman root kembali menggunakan aplikasi interaktif utama dengan import relatif yang benar dari `../data` dan `../lib`. Validator sekarang juga memeriksa seluruh import relatif sebelum `next build`, memastikan `app/page.js` tetap menjadi halaman aplikasi utama, dan Node.js dipin ke lini 20.x untuk deployment yang lebih stabil.


PelajarinAja adalah platform pembelajaran multi-mapel berbasis Next.js untuk TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan persiapan SERKOM RPL Laravel 12.

Versi v11 mempertahankan fitur pembelajaran, progres, simulasi, tutorial SERKOM, dan SEO versi sebelumnya. Sistem soal diperbarui agar lebih sesuai dengan pola asesmen TKA: pilihan ganda lima opsi, pilihan ganda kompleks banyak jawaban, tabel pernyataan Benar/Salah, stimulus, pembahasan bertahap, paket unik, dan pengacakan dengan perlindungan riwayat.

## Mata pelajaran

- Matematika
- Bahasa Indonesia
- Bahasa Inggris
- SERKOM RPL

Total materi: 60.

## Fitur pembelajaran

- Materi formal dan terstruktur.
- Tujuan belajar.
- Prasyarat.
- Konsep dasar.
- Pembahasan mendalam.
- Rumus, strategi, atau pola penting.
- Langkah penyelesaian.
- Contoh bertahap.
- Kesalahan yang perlu dihindari.
- Glosarium.
- Tutorial SERKOM dengan sintaks, kode, nomor baris, dan analisis setiap baris.
- Kontrol ukuran bacaan A−, A, A+.
- Bookmark.
- Catatan pribadi.
- Penanda materi selesai.
- Dark mode.
- Print.
- Progres lokal.
- Nilai per materi.
- Riwayat simulasi.

## Sistem soal TKA

Setiap materi memiliki 25 soal dengan nilai total 100. Setiap soal bernilai 4 poin.

Tingkat soal tetap disusun secara internal dengan tiga lapisan kemampuan agar paket tidak hanya berisi pertanyaan langsung. Label tingkat tersebut tidak ditampilkan pada halaman latihan maupun simulasi.

Format soal TKA yang didukung:

- Pilihan ganda biasa dengan tepat 5 opsi A, B, C, D, dan E serta satu jawaban benar.
- Pilihan ganda kompleks dengan 5 opsi dan lebih dari satu jawaban benar.
- Pilihan ganda kompleks berbentuk tabel pernyataan Benar/Salah.
- Stimulus terpisah pada soal kompleks.
- Penilaian pilihan ganda kompleks bersifat kombinasi tepat: poin diberikan jika seluruh jawaban benar dipilih tanpa tambahan jawaban salah.
- Penilaian tabel diberikan jika seluruh baris Benar/Salah tepat.
- Pembahasan dan langkah analisis tersedia setelah jawaban dikunci atau simulasi selesai.

Pada mata pelajaran TKA, satu paket 25 soal secara terjadwal memuat variasi pilihan ganda biasa, pilihan ganda kompleks banyak jawaban, dan tabel pernyataan. SERKOM tetap menggunakan sistem soal yang sesuai dengan pembelajaran teknisnya dan seluruh pilihan ganda memiliki 5 opsi.

## Sistem anti-duplikasi

- Tidak ada dua signature soal yang sama dalam satu paket 25 soal.
- Signature mempertimbangkan tipe soal, stimulus, pertanyaan, opsi, atau pernyataan tabel.
- Riwayat soal disimpan di localStorage.
- Aplikasi menyimpan hingga 250 signature terbaru untuk setiap materi dan simulasi.
- Generator menolak signature yang masih berada dalam riwayat pengacakan.
- Validator menguji paket berturut-turut agar paket baru tidak mengulang paket sebelumnya.

## Penilaian

- 25 soal per materi.
- 4 poin per soal.
- Nilai maksimum 100.
- Nilai terakhir.
- Nilai terbaik.
- Jumlah percobaan.
- Riwayat nilai.
- Klasifikasi kemampuan.
- Simulasi 25 soal.
- Timer simulasi 40 menit.
- Simulasi satu mata pelajaran.
- Simulasi campuran seluruh mata pelajaran.

## SEO

### URL yang dapat diindeks

- `/`
- `/mapel`
- `/mapel/[subjectId]`
- `/materi`
- `/materi/[subjectId]/[topicId]`
- `/tentang`
- `/kebijakan-privasi`

Terdapat 69 URL indeks utama dari halaman statis, halaman mata pelajaran, dan seluruh halaman materi.

### Metadata dan discovery

- Metadata dinamis.
- Canonical URL.
- Meta description.
- Keywords kontekstual.
- Open Graph.
- Twitter Card.
- Robots metadata.
- Googlebot preview directives.
- Web App Manifest.
- Icon dan Apple icon.
- Google Site Verification opsional.
- `robots.txt` melalui `app/robots.js`.
- `sitemap.xml` melalui `app/sitemap.js`.
- Internal linking antar mata pelajaran dan materi.

### Structured data

- WebSite.
- Organization.
- BreadcrumbList.
- LearningResource.

## Responsive design

Antarmuka disusun untuk desktop, tablet, dan mobile. Soal tabel Benar/Salah berubah dari susunan dua kolom menjadi satu kolom pada layar kecil agar tetap terbaca dan mudah disentuh.

## Penyimpanan lokal

Versi ini tidak membutuhkan database untuk data belajar pengguna. Data disimpan pada localStorage browser:

- mata pelajaran aktif;
- materi aktif;
- view aktif;
- bookmark;
- materi selesai;
- catatan pribadi;
- nilai per materi;
- riwayat simulasi;
- riwayat signature soal;
- tema;
- ukuran huruf bacaan.

## Environment

Buat `.env.local` dari `.env.example`.

```bash
NEXT_PUBLIC_SITE_URL=https://domain-anda.com
GOOGLE_SITE_VERIFICATION=
```

## Menjalankan lokal

```bash
npm install
npm run dev
```

## Validator

```bash
npm run check
```

Validator memeriksa:

- minimal 4 mata pelajaran;
- minimal 60 materi;
- struktur materi lengkap;
- 25 soal unik per paket;
- total nilai 100;
- komposisi internal tingkat soal;
- tepat 5 opsi untuk soal non-tabel;
- indeks jawaban valid;
- pilihan ganda kompleks banyak jawaban;
- tabel pernyataan 3 sampai 5 baris;
- jawaban boolean tabel valid;
- format kompleks pada paket TKA;
- pembahasan langkah demi langkah;
- anti-duplikasi antar paket terbaru;
- tutorial SERKOM;
- keseimbangan jumlah baris kode dan penjelasan SERKOM;
- simulasi per mapel;
- simulasi universal;
- URL SEO unik;
- keberadaan route SEO utama;
- tidak adanya label tingkat soal pada antarmuka;
- tidak adanya komentar source pada file aplikasi, data, dan library.

## Production build

```bash
npm run build
```

`prebuild` menjalankan `npm run check` sebelum Next.js build.

## Deploy ke Vercel

1. Push project ke GitHub.
2. Import repository di Vercel.
3. Tambahkan `NEXT_PUBLIC_SITE_URL` pada Environment Variables.
4. Tambahkan `GOOGLE_SITE_VERIFICATION` jika digunakan.
5. Deploy.
6. Verifikasi `/robots.txt` dan `/sitemap.xml` pada domain production.
7. Tambahkan domain ke Google Search Console bila diperlukan.

## GitHub Actions

Workflow `.github/workflows/ci.yml` menjalankan:

```text
npm install
npm run check
npm run build
```

## Struktur utama

```text
app/
  page.js
  layout.js
  globals.css
  robots.js
  sitemap.js
  manifest.js
  opengraph-image.js
  twitter-image.js
  mapel/
    page.js
    [subjectId]/page.js
  materi/
    page.js
    [subjectId]/[topicId]/page.js
  tentang/page.js
  kebijakan-privasi/page.js

lib/
  site.js
  seo.js

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


## Everyday Context Question Engine

Setiap paket penilaian tetap berisi 25 soal unik dengan nilai maksimum 100. Stimulus sekarang menggunakan konteks kehidupan sehari-hari yang berbeda untuk setiap soal, termasuk belanja, transportasi, rumah, kegiatan sekolah, lingkungan, pekerjaan, layanan publik, dan praktik pemrograman.

Matematika menggunakan narasi numerasi yang meminta pengguna memilah konteks dan data inti. Bahasa Indonesia dan Bahasa Inggris menggunakan bacaan yang dekat dengan aktivitas harian. SERKOM menggunakan skenario pekerjaan Pemrogram Junior, potongan kode, alur request-response, debugging, testing, dan verifikasi.

Riwayat 1000 signature soal terbaru per materi digunakan untuk mengurangi pengulangan saat paket baru dibuat. Dalam satu paket, 25 signature dan 25 konteks harus berbeda. Tingkat internal tetap seimbang, tetapi label tingkat kesulitan tidak ditampilkan di antarmuka.
