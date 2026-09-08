# PelajarinAja Universal SEO v10

PelajarinAja adalah platform belajar multi-mapel berbasis Next.js untuk TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan persiapan SERKOM RPL Laravel 12.

Versi v10 mempertahankan seluruh fitur pembelajaran sebelumnya dan menambahkan fondasi SEO teknis, SEO konten, structured data, URL materi yang dapat diindeks, sitemap, robots, Open Graph, Twitter Card, canonical URL, metadata dinamis, dan internal linking.

## Fitur pembelajaran

- 4 mata pelajaran.
- 60 materi.
- Matematika.
- Bahasa Indonesia.
- Bahasa Inggris.
- SERKOM RPL.
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
- Materi selesai.
- Dark mode.
- Print.
- Progres lokal.
- Nilai per materi.
- Riwayat simulasi.

## Sistem penilaian

Setiap materi memiliki 25 soal unik dalam satu paket:

| Nomor | Tingkat | Jumlah | Fokus |
| --- | --- | ---: | --- |
| 1–8 | Mudah | 8 | Konsep dasar dan penerapan langsung |
| 9–17 | Sedang | 9 | Penerapan dan analisis beberapa informasi |
| 18–25 | Sulit | 8 | Analisis terpadu dan evaluasi |

Setiap soal bernilai 4 poin. Nilai maksimum adalah 100.

Sistem menggunakan signature pertanyaan dan opsi untuk menolak duplikasi dalam satu paket. Riwayat signature terbaru juga disimpan di localStorage agar pengacakan berikutnya menghindari soal yang baru saja digunakan.

## SEO v10

### URL yang dapat diindeks

- `/`
- `/mapel`
- `/mapel/[subjectId]`
- `/materi`
- `/materi/[subjectId]/[topicId]`
- `/tentang`
- `/kebijakan-privasi`

Terdapat 69 URL indeks utama dari halaman statis, halaman mata pelajaran, dan 60 halaman materi.

### Metadata

- metadataBase otomatis dari environment.
- Title template.
- Meta description.
- Keywords kontekstual.
- Canonical URL.
- Open Graph.
- Twitter Card.
- Robots meta.
- Googlebot preview directives.
- Application metadata.
- Icon dan Apple icon.
- Web app manifest.
- Google Site Verification opsional.

### Structured data

- WebSite.
- Organization.
- BreadcrumbList.
- LearningResource untuk halaman materi.

### Crawling dan discovery

- `app/robots.js` menghasilkan `robots.txt`.
- `app/sitemap.js` menghasilkan `sitemap.xml`.
- Sitemap mencakup halaman utama, indeks, mata pelajaran, dan seluruh halaman materi.
- Internal link tersedia dari indeks mapel ke materi dan antar materi.
- URL menggunakan slug semantik berdasarkan mata pelajaran dan topik.

### Social preview

- `app/opengraph-image.js` menghasilkan gambar Open Graph 1200×630.
- `app/twitter-image.js` menggunakan visual social preview yang sama.

### Halaman trust

- `/tentang` menjelaskan cakupan dan sistem platform.
- `/kebijakan-privasi` menjelaskan penggunaan localStorage dan batasan versi tanpa akun.

## Environment

Buat `.env.local` dari `.env.example`.

```bash
NEXT_PUBLIC_SITE_URL=https://domain-anda.com
GOOGLE_SITE_VERIFICATION=
```

Pada Vercel, `NEXT_PUBLIC_SITE_URL` dapat diisi dengan domain production. Jika variabel tidak tersedia, project juga mencoba membaca `VERCEL_PROJECT_PRODUCTION_URL` yang disediakan lingkungan Vercel.

`GOOGLE_SITE_VERIFICATION` bersifat opsional dan dapat diisi setelah properti Google Search Console dibuat.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Validator

```bash
npm run check
```

Validator memeriksa:

- minimal 4 mata pelajaran;
- minimal 60 materi;
- struktur materi lengkap;
- 25 soal unik per materi;
- 8 soal mudah, 9 sedang, 8 sulit;
- total nilai 100;
- opsi dan indeks jawaban valid;
- pembahasan langkah demi langkah;
- proteksi riwayat soal;
- tutorial SERKOM;
- jumlah baris kode SERKOM dan penjelasan yang seimbang;
- simulasi per mapel;
- simulasi universal;
- URL mapel unik;
- URL materi unik;
- keberadaan route SEO utama.

## Production build

```bash
npm run build
```

`prebuild` menjalankan `npm run check` sebelum Next.js build.

## Deploy ke Vercel

1. Push project ke GitHub.
2. Import repository di Vercel.
3. Tambahkan `NEXT_PUBLIC_SITE_URL` pada Project Settings → Environment Variables.
4. Tambahkan `GOOGLE_SITE_VERIFICATION` jika diperlukan.
5. Deploy.
6. Buka `/robots.txt` dan `/sitemap.xml` pada domain production untuk memastikan keduanya dapat diakses.
7. Tambahkan domain ke Google Search Console.
8. Kirim URL `/sitemap.xml` melalui menu Sitemaps.
9. Gunakan URL Inspection pada beberapa halaman materi utama setelah deployment.

## GitHub Actions

Workflow `.github/workflows/ci.yml` menjalankan:

```text
npm install
npm run check
npm run build
```

Workflow berjalan pada push ke branch `main` atau `master` dan pada pull request.

## Penyimpanan data belajar

Versi ini tidak membutuhkan database untuk progres pengguna. Data berikut disimpan pada localStorage browser:

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

## Catatan SERKOM

Materi SERKOM pada platform ini berfungsi sebagai bahan pembelajaran dan simulasi. Keputusan kompeten atau belum kompeten resmi tetap mengikuti asesor, LSP, skema, dan MUK yang berlaku.

## Catatan production

Setelah domain final terpasang, gunakan domain tersebut pada `NEXT_PUBLIC_SITE_URL`. Canonical, sitemap, robots, Open Graph, dan structured data kemudian menggunakan domain production yang sama.
