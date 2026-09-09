# PelajarinAja Universal Production v17

PelajarinAja adalah platform pembelajaran Next.js untuk TKA Matematika, Bahasa Indonesia, Bahasa Inggris, dan persiapan SERKOM RPL Laravel 12.

## Fitur pembelajaran

- 4 mata pelajaran dan 60 materi.
- Materi terstruktur dengan tujuan, prasyarat, konsep, pembahasan, prosedur, contoh, kesalahan umum, glosarium, latihan, dan pembahasan.
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

## Format soal TKA

Setiap soal ditampilkan dalam urutan bacaan lalu pertanyaan.

- Bahasa Indonesia dan Matematika menggunakan label `Bacalah teks berikut:` lalu `Pertanyaan:`.
- Bahasa Inggris menggunakan `Read the following text:` lalu `Question:`.
- SERKOM menggunakan `Bacalah kasus berikut:` lalu `Pertanyaan:`.
- Teks, data, kode, atau situasi pada bacaan berhubungan langsung dengan hal yang ditanyakan.
- Informasi pendukung tetap berada dalam peristiwa atau masalah yang sama sehingga latihan tetap melatih literasi, numerasi, dan penalaran tanpa cerita pengalih yang tidak relevan.
- Soal pemahaman tekstual meminta informasi eksplisit dari bacaan.
- Soal inferensial meminta kesimpulan yang didukung petunjuk pada bacaan.
- Soal evaluasi meminta penilaian terhadap bukti, gagasan, atau keputusan berdasarkan bacaan.
- Matematika memakai konteks yang langsung membawa data, syarat, model, dan besaran yang dihitung.
- SERKOM memakai kasus teknis dan potongan kode atau sintaks yang berkaitan dengan komponen yang ditanyakan.

## Sistem soal

- 25 soal per materi.
- Nilai total 100 dengan 4 poin per soal.
- 25 soal dalam setiap paket memiliki kombinasi bacaan dan pertanyaan yang berbeda.
- Generator menolak signature yang sudah digunakan di dalam paket.
- Riwayat signature lokal dipakai untuk menghindari pengulangan pada paket berikutnya.
- Validator menguji delapan paket berturut-turut untuk seluruh 60 materi.
- 5 opsi A–E untuk pilihan ganda biasa.
- Pilihan ganda kompleks banyak jawaban.
- Tabel pernyataan Benar atau Salah.
- Bagian-bagian dalam soal kompleks juga diperiksa agar tidak memakai bagian inti yang sama dalam satu soal.
- Exact-match scoring untuk soal kompleks.
- Tingkat soal diatur internal tanpa label tingkat pada antarmuka.
- Pembahasan dan langkah analisis tersedia setelah jawaban dikunci.
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
- Validator import relatif, route, SEO, struktur materi, format bacaan-pertanyaan, kualitas keterhubungan soal, dan duplikasi.

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
