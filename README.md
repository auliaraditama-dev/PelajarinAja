# PelajarinAja Universal Production v16

PelajarinAja adalah platform pembelajaran Next.js untuk TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan persiapan SERKOM RPL Laravel 12.

## Fitur pembelajaran

- 4 mata pelajaran dan 60 materi.
- Materi terstruktur dengan tujuan, konsep, pembahasan, langkah, contoh, kesalahan umum, glosarium, latihan, dan pembahasan.
- Tutorial SERKOM dengan syntax, potongan kode atau urutan teknis, analisis per baris, debugging, testing, dan latihan mandiri.
- Pencarian dan filter materi.
- Bookmark dan status selesai.
- Catatan pribadi tersimpan di localStorage.
- Ukuran bacaan A−, A, dan A+.
- Mode terang dan gelap.
- Print materi.
- Dashboard progres dan riwayat nilai.
- Navigasi materi sebelumnya dan berikutnya.
- Responsive desktop, tablet, dan mobile.

## Sistem soal

Setiap materi menghasilkan 25 soal dengan nilai total 100.

- Setiap paket memiliki 25 soal unik.
- Setiap paket memiliki 25 inti soal unik.
- Signature soal tidak bergantung pada cerita pengantar sehingga perubahan konteks tidak dapat menyamarkan soal inti yang sama.
- Stimulus kehidupan sehari-hari dihubungkan langsung dengan data, bacaan, atau masalah teknis yang ditanyakan.
- Tidak menggunakan cerita tambahan yang tidak diperlukan untuk menjawab pertanyaan.
- Matematika menghubungkan konteks dengan besaran, syarat, model, dan perhitungan yang benar-benar digunakan.
- Bahasa Indonesia dan Bahasa Inggris menghubungkan konteks dengan bacaan yang sama yang menjadi bukti jawaban.
- SERKOM menghubungkan skenario dengan komponen, kode atau urutan teknis, alur data, gejala, dan langkah verifikasi yang relevan.
- 5 opsi A–E untuk pilihan ganda biasa.
- Pilihan ganda kompleks banyak jawaban.
- Tabel pernyataan Benar atau Salah.
- Exact-match scoring untuk soal kompleks.
- Tingkat soal diatur internal tanpa label tingkat pada antarmuka.
- Pembahasan dan langkah analisis tersedia setelah jawaban dikunci.
- Riwayat signature lokal mengurangi pengulangan pada paket berikutnya.
- Simulasi 25 soal dengan waktu 40 menit.

## SEO dan production

- Next.js App Router.
- Metadata dinamis.
- Canonical URL.
- Open Graph dan Twitter Card.
- Dynamic social image.
- Sitemap dan robots.
- Manifest.
- Structured data.
- Route indeks mapel dan materi.
- Dynamic route mapel dan materi.
- Error, global error, loading, dan not-found UI.
- Security headers.
- Vercel configuration.
- GitHub Actions CI.
- Validator import relatif, route, SEO, data materi, kualitas stimulus, keterhubungan inti soal, dan duplikasi soal.

## Runtime

- Node.js 24.x
- Next.js 16.3.4
- React 19.2.8
- React DOM 19.2.8

## Menjalankan project

```bash
npm install
npm run check
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

Environment production:

```env
NEXT_PUBLIC_SITE_URL=https://domain-anda.com
GOOGLE_SITE_VERIFICATION=
```

`npm run build` menjalankan validator terlebih dahulu melalui `prebuild`.
