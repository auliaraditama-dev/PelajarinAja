export const serkomTopics = [
  {
    "id": "serkom-skkni-muk",
    "subjectId": "serkom",
    "group": "Dasar SERKOM",
    "title": "Posisi SKKNI, MUK, Unit, dan Bukti Kompetensi",
        "level": "Dasar",
    "summary": "Memahami posisi latihan persiapan kompetensi, hubungan dengan SKKNI/MUK, unit pembelajaran, serta bukti yang perlu disiapkan.",
    "objectives": [
      "Membedakan bahan latihan dengan keputusan asesmen resmi.",
      "Mengenali unit penguatan dan unit yang langsung muncul pada MUK sekolah.",
      "Menjelaskan hubungan aktivitas proyek dengan bukti kompetensi."
    ],
    "prerequisites": [
      "Mengenal tujuan sertifikasi kompetensi.",
      "Mengenal istilah asesor dan LSP."
    ],
    "concepts": [
      "Materi latihan digunakan untuk pembelajaran dan simulasi; keputusan kompeten atau belum kompeten tetap mengikuti asesor, LSP, skema, dan MUK resmi.",
      "Dokumen memetakan beberapa unit SKKNI sebagai penguatan, sedangkan J.620100.033.02 tentang pengujian unit program disebut langsung pada MUK sekolah yang dipelajari.",
      "Keterlacakan berarti setiap aktivitas memiliki bukti yang dapat ditunjukkan, seperti migration/model untuk struktur data, log terminal untuk eksekusi, atau tabel test untuk pengujian.",
      "Perbedaan penulisan kode/judul unit pada dokumen latihan tidak boleh dianggap mengganti dokumen skema resmi."
    ],
    "deepDive": [
      "Fokus pada kompetensi yang dibuktikan, bukan sekadar hafalan kode unit.",
      "Saat latihan berubah menjadi asesmen resmi, gunakan nama/kode yang telah divalidasi LSP.",
      "Bukti harus valid, autentik, terkini, dan memadai."
    ],
    "steps": [
      "Baca posisi dokumen dan skema.",
      "Petakan unit ke aktivitas proyek.",
      "Catat bukti yang dihasilkan tiap aktivitas.",
      "Bedakan penguatan pembelajaran dengan unit yang dinilai langsung."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Bukti U7",
        "problem": "Peserta mereproduksi error, mencatat pesan, memperbaiki bagian relevan, lalu menguji ulang.",
        "steps": [
          "Aktivitas tersebut menunjukkan proses debugging."
        ],
        "result": "Bukti yang kuat berupa catatan sebelum/sesudah dan hasil uji ulang."
      },
      {
        "title": "Contoh 2 · Unit pengujian",
        "problem": "Peserta menyiapkan skenario uji manual dan menjalankan feature test.",
        "steps": [
          "Aktivitas langsung berkaitan dengan pengujian unit program."
        ],
        "result": "Bukti: tabel hasil uji dan output pengujian."
      }
    ],
    "traps": [
      "Menganggap lulus latihan otomatis berarti kompeten resmi.",
      "Menuliskan kode unit tanpa memeriksa skema LSP yang berlaku.",
      "Mengumpulkan hasil akhir tanpa bukti proses."
    ],
    "glossary": [
      {
        "term": "SKKNI",
        "meaning": "Standar Kompetensi Kerja Nasional Indonesia."
      },
      {
        "term": "MUK",
        "meaning": "Materi Uji Kompetensi yang digunakan dalam asesmen."
      },
      {
        "term": "LSP",
        "meaning": "Lembaga Sertifikasi Profesi yang menjalankan sertifikasi sesuai kewenangannya."
      }
    ],
    "essay": {
      "q": "Mengapa hasil latihan tidak boleh dianggap sebagai keputusan kompeten resmi?",
      "answer": "Karena latihan hanya digunakan untuk pembelajaran dan simulasi; keputusan resmi berada pada asesor dan LSP berdasarkan skema serta MUK yang disahkan."
    },
    "formulas": [
      "Aktivitas → bukti → unit kompetensi."
    ],
    "analogy": "Fokus pada kompetensi yang dibuktikan, bukan sekadar hafalan kode unit.",
    "example": "Bukti yang kuat berupa catatan sebelum/sesudah dan hasil uji ulang.",
    "quiz": [],
  },
  {
    "id": "serkom-inti-mvc",
    "subjectId": "serkom",
    "group": "Dasar SERKOM",
    "title": "Inti Proyek dan Arsitektur MVC",
        "level": "Dasar",
    "summary": "Menguasai gambaran besar proyek: data produk mengalir dari request sampai database dan kembali menjadi tampilan.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "Route adalah pintu masuk request.",
      "Controller mengatur proses, validasi, model, view, atau redirect.",
      "Model Product mewakili data products melalui Eloquent.",
      "Migration membentuk skema database; Blade menampilkan respons dinamis."
    ],
    "deepDive": [
      "Browser → Route → Controller → Model/Eloquent → MySQL → Controller → Blade → Browser.",
      "MVC memisahkan tanggung jawab agar kode lebih mudah ditelusuri, diuji, dan dirawat.",
      "Kompetensi tidak cukup hanya membuat halaman tampil; peserta harus mampu menjelaskan peran file dalam alur tersebut."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas inti proyek dan arsitektur mvc, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Inti Proyek dan Arsitektur MVC” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Browser → Route → Controller → Model/Eloquent → MySQL → Controller → Blade → Browser.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-skenario-ipo",
    "subjectId": "serkom",
    "group": "Analisis & Perancangan",
    "title": "Skenario Proyek, Batasan, IPO, dan Alur Request–Response",
        "level": "Dasar",
    "summary": "Menganalisis kebutuhan proyek landing page Kopi Ulee Kareng dan CRUD satu entitas products sebelum menulis kode.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "Input utama: nama produk, deskripsi, harga, dan nama file gambar opsional.",
      "Proses utama: validasi, simpan, baca, ubah, hapus, dan tampilkan.",
      "Output: landing page, tabel produk, form, error validasi, dan notifikasi berhasil.",
      "Batasan latihan: satu tabel inti products tanpa auth, role, pembayaran, API, relasi banyak tabel, atau deployment."
    ],
    "deepDive": [
      "Analisis IPO membantu menerjemahkan kebutuhan menjadi komponen teknis.",
      "Batasan proyek mencegah peserta menambah fitur yang tidak dibutuhkan dan menghabiskan waktu simulasi.",
      "Alur request–response harus dapat dijelaskan dari browser sampai Blade."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas skenario proyek, batasan, ipo, dan alur request–response, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Skenario Proyek, Batasan, IPO, dan Alur Request–Response” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Analisis IPO membantu menerjemahkan kebutuhan menjadi komponen teknis.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-syntax",
    "subjectId": "serkom",
    "group": "Dasar Pemrograman",
    "title": "Kamus Syntax PHP, Laravel, Blade, HTML, CSS, dan HTTP",
        "level": "Dasar",
    "summary": "Memahami simbol dan sintaks yang sering muncul agar peserta dapat membaca kode, bukan sekadar menyalinnya.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "$ menandai variabel PHP, -> mengakses method/properti objek, dan :: mengakses class/static member.",
      "Array PHP memakai [ ], pasangan key-value menggunakan =>.",
      "Blade memakai {{ }} untuk output ter-escape dan @directive untuk kontrol template.",
      "HTTP GET membaca, POST membuat, PUT/PATCH memperbarui, DELETE menghapus."
    ],
    "deepDive": [
      "Memahami simbol membuat proses debugging lebih cepat karena peserta tahu jenis operasi yang sedang dilakukan.",
      "Return type seperti : View, : array, dan : void menyatakan kontrak nilai balik method.",
      "HTML, CSS, PHP, dan Blade bekerja pada lapisan berbeda tetapi bertemu di view."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas kamus syntax php, laravel, blade, html, css, dan http, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Kamus Syntax PHP, Laravel, Blade, HTML, CSS, dan HTTP” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Memahami simbol membuat proses debugging lebih cepat karena peserta tahu jenis operasi yang sedang dilakukan.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-environment",
    "subjectId": "serkom",
    "group": "Persiapan Laravel",
    "title": "PHP, Composer, Artisan, Database, dan .env",
        "level": "Menengah",
    "summary": "Menyiapkan lingkungan Laravel 12 berbasis PHP 8.2 dan MySQL serta memahami fungsi perintah setup utama.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "Periksa PHP dan Composer sebelum bekerja pada proyek.",
      "Starter project memakai composer install; proyek baru dapat dibuat dengan Composer sesuai versi Laravel yang ditargetkan.",
      ".env menyimpan konfigurasi aplikasi dan koneksi database lokal.",
      "Setelah perubahan konfigurasi, cache konfigurasi perlu disegarkan sebelum diagnosis lanjutan."
    ],
    "deepDive": [
      "Lingkungan yang salah dapat membuat kode benar terlihat rusak.",
      "APP_DEBUG=true hanya sesuai latihan lokal dan file .env tidak boleh dipublikasikan.",
      "MySQL, nama database, port, username, dan password harus konsisten dengan .env."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas php, composer, artisan, database, dan .env, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “PHP, Composer, Artisan, Database, dan .env” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Lingkungan yang salah dapat membuat kode benar terlihat rusak.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-migration",
    "subjectId": "serkom",
    "group": "Backend Laravel",
    "title": "Database, Data Dictionary, dan Migration",
        "level": "Menengah",
    "summary": "Merancang tabel products dan menerapkannya melalui migration Laravel.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "Data dictionary menentukan nama kolom, tipe, aturan, dan kegunaannya sebelum migration ditulis.",
      "products berisi id, nama_produk, deskripsi, harga, gambar, created_at, updated_at.",
      "up() menerapkan perubahan skema; down() membatalkan perubahan ketika rollback.",
      "harga menggunakan integer nonnegatif pada latihan; gambar boleh nullable."
    ],
    "deepDive": [
      "Migration adalah riwayat perubahan skema, bukan tempat data contoh.",
      "Keselarasan antara data dictionary, migration, validation, dan model mencegah error kolom tidak cocok.",
      "migrate:status membantu membuktikan migration sudah dijalankan."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas database, data dictionary, dan migration, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Database, Data Dictionary, dan Migration” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Migration adalah riwayat perubahan skema, bukan tempat data contoh.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-model",
    "subjectId": "serkom",
    "group": "Backend Laravel",
    "title": "Model Eloquent, $fillable, casts(), dan Route Model Binding",
        "level": "Menengah",
    "summary": "Memahami Product sebagai model Eloquent dan membedakan mass assignment, casting, validasi, dan route model binding.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "$fillable menentukan atribut yang boleh diisi massal oleh create/update.",
      "casts() mengubah cara atribut dibaca/digunakan pada model, bukan membuat kolom database.",
      "Validation memeriksa sah/tidaknya input, berbeda dari $fillable.",
      "Product $produk pada controller memungkinkan Laravel mengambil record dari parameter route."
    ],
    "deepDive": [
      "Model adalah jembatan objek ke tabel database melalui Eloquent.",
      "$fillable dan validation menyelesaikan masalah berbeda dan keduanya tetap diperlukan.",
      "Route Model Binding mengurangi query manual untuk mencari record berdasarkan parameter URL."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas model eloquent, $fillable, casts(), dan route model binding, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Model Eloquent, $fillable, casts(), dan Route Model Binding” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Model adalah jembatan objek ke tabel database melalui Eloquent.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-seeder",
    "subjectId": "serkom",
    "group": "Backend Laravel",
    "title": "Seeder, Array, foreach, dan Data Awal",
        "level": "Menengah",
    "summary": "Membuat data latihan agar landing page dan CRUD dapat diuji sejak awal.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "Seeder menyimpan data awal/latihan, bukan definisi struktur tabel.",
      "Array dapat menyimpan beberapa record produk sebagai pasangan key-value.",
      "foreach membaca produk satu per satu sebelum create() menyimpan record.",
      "DatabaseSeeder dapat memanggil ProductSeeder agar seeding terorganisasi."
    ],
    "deepDive": [
      "Seeder mempercepat pengujian tampilan dinamis karena database tidak kosong.",
      "create() membutuhkan atribut yang sesuai dengan $fillable.",
      "Data seeder harus tetap konsisten dengan migration dan aturan model."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas seeder, array, foreach, dan data awal, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Seeder, Array, foreach, dan Data Awal” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Seeder mempercepat pengujian tampilan dinamis karena database tidak kosong.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-controller",
    "subjectId": "serkom",
    "group": "Backend Laravel",
    "title": "Controller CRUD, Validation, Redirect, dan Pesan Sesi",
        "level": "Lanjut",
    "summary": "Memahami method controller untuk landing, index, create, store, edit, update, destroy, validasi, dan response.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "create() menampilkan form, sedangkan store() memvalidasi lalu membuat record.",
      "edit() menampilkan data lama; update() menyimpan perubahan.",
      "destroy() menghapus record yang telah di-bind.",
      "Redirect dengan flash session dipakai setelah operasi berhasil agar halaman index dapat memberi umpan balik."
    ],
    "deepDive": [
      "Controller menghubungkan request dengan logika aplikasi dan Eloquent.",
      "Rules validation menjadi penjaga input sebelum data disimpan.",
      "Return type membantu memperjelas response yang dihasilkan tiap method."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas controller crud, validation, redirect, dan pesan sesi, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Controller CRUD, Validation, Redirect, dan Pesan Sesi” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Controller menghubungkan request dengan logika aplikasi dan Eloquent.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-routing",
    "subjectId": "serkom",
    "group": "Backend Laravel",
    "title": "Routing, Resource Route, Parameter, dan HTTP Method",
        "level": "Menengah",
    "summary": "Menghubungkan URL dan HTTP method ke controller serta memahami route resource proyek.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "Route GET / mengarah ke landing().",
      "Resource route produk menyediakan index, create, store, edit, update, destroy ketika show dikecualikan.",
      "Nama route seperti produk.store dan produk.update dipakai agar URL tidak di-hard-code.",
      "route:list digunakan untuk memeriksa method, URI, nama, dan action."
    ],
    "deepDive": [
      "Routing adalah kontrak antara request browser dan method controller.",
      "Kesalahan nama route sering menimbulkan Route not defined.",
      "HTTP method harus sesuai dengan tindakan CRUD."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas routing, resource route, parameter, dan http method, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Routing, Resource Route, Parameter, dan HTTP Method” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Routing adalah kontrak antara request browser dan method controller.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-blade-landing",
    "subjectId": "serkom",
    "group": "Frontend Laravel",
    "title": "Blade Layout dan Landing Page Dinamis",
        "level": "Menengah",
    "summary": "Membangun layout reusable dan landing page yang menampilkan collection produk dari database.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "Layout menyediakan struktur HTML umum dan @yield untuk konten halaman.",
      "Controller mengirim $products ke Blade melalui view data.",
      "@forelse menampilkan produk sekaligus menangani kondisi data kosong.",
      "asset() membentuk URL aset publik dan number_format membantu format harga."
    ],
    "deepDive": [
      "Blade menggabungkan HTML dengan data dari server tanpa mencampur logika database ke view.",
      "Partial/layout mengurangi duplikasi struktur.",
      "Alur data dapat ditelusuri dari query controller sampai loop Blade."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas blade layout dan landing page dinamis, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Blade Layout dan Landing Page Dinamis” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Blade menggabungkan HTML dengan data dari server tanpa mencampur logika database ke view.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-form-crud",
    "subjectId": "serkom",
    "group": "Frontend Laravel",
    "title": "Form CRUD, Partial, CSRF, Method Spoofing, old(), dan Error",
        "level": "Lanjut",
    "summary": "Membuat form tambah/edit yang aman, reusable, mempertahankan input lama, dan menampilkan pesan validasi.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "Partial _form menghindari duplikasi field create dan edit.",
      "@csrf menyertakan token proteksi form web.",
      "@method digunakan agar form HTML dapat mewakili PUT atau DELETE.",
      "old() mempertahankan input setelah validasi gagal; @error menampilkan pesan field."
    ],
    "deepDive": [
      "DRY membuat perubahan field cukup dilakukan di satu partial.",
      "Validasi sisi browser tidak menggantikan validasi server.",
      "Konfirmasi hapus mengurangi risiko penghapusan tidak sengaja."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas form crud, partial, csrf, method spoofing, old(), dan error, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Form CRUD, Partial, CSRF, Method Spoofing, old(), dan Error” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "DRY membuat perubahan field cukup dilakukan di satu partial.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-css",
    "subjectId": "serkom",
    "group": "Frontend Laravel",
    "title": "CSS Responsif dan Keterbacaan Antarmuka",
        "level": "Menengah",
    "summary": "Menerapkan CSS lokal yang responsif, konsisten, dan dapat berjalan pada laboratorium tanpa ketergantungan internet.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "Gunakan variabel warna dan class reusable untuk konsistensi.",
      "Grid dapat berubah menjadi satu kolom pada layar kecil melalui media query.",
      "Tabel administratif perlu tetap dapat dibaca pada layar kecil, misalnya dengan overflow horizontal.",
      "Fokus penilaian adalah keterbacaan, konsistensi, dan fungsi, bukan kompleksitas visual."
    ],
    "deepDive": [
      "CSS lokal membantu latihan offline.",
      "Responsive design adalah bagian dari kualitas antarmuka, bukan hanya estetika.",
      "Struktur class yang konsisten mempermudah maintenance."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas css responsif dan keterbacaan antarmuka, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “CSS Responsif dan Keterbacaan Antarmuka” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "CSS lokal membantu latihan offline.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-workflow",
    "subjectId": "serkom",
    "group": "Workflow",
    "title": "Workflow CRUD Lengkap dari Browser sampai Database",
        "level": "Lanjut",
    "summary": "Menjelaskan CREATE, READ, UPDATE, dan DELETE sebagai alur lengkap lintas route, controller, model, database, dan view.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "CREATE: form → POST → store → validate → create → redirect.",
      "READ: GET → query → data view → Blade loop.",
      "UPDATE: edit → binding → form lama → PUT/PATCH → validate → update.",
      "DELETE: DELETE → binding → destroy → delete → redirect."
    ],
    "deepDive": [
      "Mengetahui alur end-to-end membantu peserta mencari titik error dengan cepat.",
      "Setiap operasi dapat diuji dari sisi request, data, response, dan database.",
      "Route Model Binding berperan penting pada edit/update/delete."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas workflow crud lengkap dari browser sampai database, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Workflow CRUD Lengkap dari Browser sampai Database” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Mengetahui alur end-to-end membantu peserta mencari titik error dengan cepat.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-debugging",
    "subjectId": "serkom",
    "group": "Debugging & Testing",
    "title": "Debugging Terstruktur dan Troubleshooting",
        "level": "Lanjut",
    "summary": "Menjalankan debugging sebagai proses terstruktur: reproduksi, baca error, hipotesis, perubahan kecil, uji ulang, dan bukti.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "Reproduksi error dengan langkah yang sama sebelum mengubah kode.",
      "Catat pesan, file, baris, route, dan data uji.",
      "Buat dugaan penyebab lalu ubah bagian terkecil yang relevan.",
      "Setelah perbaikan, uji fitur yang gagal dan fitur terkait lalu simpan bukti."
    ],
    "deepDive": [
      "Debugging bukan menebak-nebak atau mengganti banyak file sekaligus.",
      "Gejala seperti Route not defined, Undefined variable, MassAssignmentException, dan 419 memiliki arah diagnosis berbeda.",
      "Log sebelum/sesudah memperlihatkan proses kompetensi, bukan hanya hasil akhir."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas debugging terstruktur dan troubleshooting, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Debugging Terstruktur dan Troubleshooting” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Debugging bukan menebak-nebak atau mengganti banyak file sekaligus.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-testing",
    "subjectId": "serkom",
    "group": "Debugging & Testing",
    "title": "Pengujian Manual dan Feature Test Laravel",
        "level": "Lanjut",
    "summary": "Merancang data uji, expected result, actual result, status, dan feature test untuk membuktikan fungsi aplikasi.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "Skenario manual harus mencakup jalur normal, batas, dan data tidak valid.",
      "Expected result ditentukan sebelum eksekusi; actual result dicatat setelah uji.",
      "Feature test dapat memeriksa status response, isi halaman, redirect, error session, dan database.",
      "RefreshDatabase menjaga lingkungan test agar bersih dan terisolasi."
    ],
    "deepDive": [
      "Testing bukan sekadar menekan tombol; perlu skenario, data, hasil yang diharapkan, dan evaluasi.",
      "Uji invalid input membuktikan validation bekerja.",
      "Jika test gagal, baca nama test, expected/actual, dan stack trace sebelum memperbaiki."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas pengujian manual dan feature test laravel, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Pengujian Manual dan Feature Test Laravel” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Testing bukan sekadar menekan tombol; perlu skenario, data, hasil yang diharapkan, dan evaluasi.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-portfolio",
    "subjectId": "serkom",
    "group": "Bukti & Presentasi",
    "title": "README, Portofolio, Presentasi, dan Bukti Serkom",
        "level": "Menengah",
    "summary": "Menyiapkan dokumentasi dan bukti kerja agar proses pembangunan, debugging, testing, dan hasil aplikasi dapat diverifikasi.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "README menjelaskan teknologi, cara menjalankan, fitur, dan struktur utama.",
      "Portofolio memuat source code, spesifikasi, screenshot, debugging, testing, dan README.",
      "Presentasi singkat harus menunjukkan kebutuhan, arsitektur, CRUD, validation, debugging, testing, dan bukti.",
      "File .env tidak boleh dibagikan ke repositori publik."
    ],
    "deepDive": [
      "Bukti yang rapi mempercepat verifikasi asesor/guru.",
      "Screenshot saja tidak menggantikan source code dan catatan pengujian.",
      "Presentasi terbaik mengikuti alur aplikasi dan bukti, bukan menghafal istilah terpisah."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas readme, portofolio, presentasi, dan bukti serkom, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “README, Portofolio, Presentasi, dan Bukti Serkom” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Bukti yang rapi mempercepat verifikasi asesor/guru.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-asesor",
    "subjectId": "serkom",
    "group": "Bukti & Presentasi",
    "title": "Pertanyaan Lisan Asesor: Jawaban Ringkas dan Tepat",
        "level": "Lanjut",
    "summary": "Melatih kemampuan menjelaskan alasan teknis di balik kode: migration, model, controller, route, Blade, validation, testing, dan debugging.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "Jawaban kuat menyebut fungsi utama lalu mengaitkan ke proyek.",
      "Bedakan konsep yang sering tertukar: $fillable vs validation, create vs store, edit vs update, running vs debugging.",
      "Jelaskan route model binding sebagai pengambilan model otomatis dari parameter route.",
      "Jelaskan kesiapan penyerahan dari fungsi, testing, debugging, dan bukti."
    ],
    "deepDive": [
      "Asesor dapat menilai pemahaman melalui alasan, bukan hanya keberhasilan demo.",
      "Jawaban singkat lebih kuat jika menggunakan istilah tepat dan contoh proyek.",
      "Jika tidak yakin pada detail administratif unit, rujuk skema/MUK resmi daripada menebak."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas pertanyaan lisan asesor: jawaban ringkas dan tepat, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Pertanyaan Lisan Asesor: Jawaban Ringkas dan Tepat” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Asesor dapat menilai pemahaman melalui alasan, bukan hanya keberhasilan demo.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  },
  {
    "id": "serkom-cheatsheet",
    "subjectId": "serkom",
    "group": "Kesiapan SERKOM",
    "title": "Cheat Sheet, Urutan Proyek, dan Latihan Mandiri",
        "level": "Menengah",
    "summary": "Mengintegrasikan urutan kerja proyek dari setup sampai dokumentasi dan menguji kesiapan tanpa melihat catatan.",
    "objectives": [
      "Menjelaskan konsep dengan kata sendiri.",
      "Menerapkan konsep pada proyek Laravel 12 satu tabel products.",
      "Menunjukkan bukti atau langkah verifikasi yang sesuai."
    ],
    "prerequisites": [
      "HTML, CSS, PHP, database, dan Laravel dasar sesuai target latihan."
    ],
    "concepts": [
      "Urutan inti: cek environment → project/.env → database → model/migration → model → seeder → controller → route → views → CSS → run → test → debug → dokumentasi.",
      "Perintah Artisan/Composer harus dipahami fungsi dan konteks penggunaannya.",
      "Latihan mandiri menuntut peserta menjelaskan route, fillable, validation, alur create, directive Blade, assert test, dan debugging.",
      "Tujuan cheat sheet adalah mengingat alur, bukan menggantikan pemahaman."
    ],
    "deepDive": [
      "Kesiapan meningkat ketika peserta dapat menjelaskan dan mempraktikkan urutan tanpa bergantung pada salinan solusi.",
      "Cheat sheet efektif jika berupa kata kunci dan alur, bukan blok kode panjang.",
      "Simulasi waktu membantu mengidentifikasi bagian yang masih lambat atau sering salah."
    ],
    "steps": [
      "Tentukan tujuan teknis yang ingin dicapai.",
      "Identifikasi file/perintah yang terlibat.",
      "Jalankan atau telusuri alur secara berurutan.",
      "Verifikasi hasil dan simpan bukti yang relevan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Identifikasi peran",
        "problem": "Saat membahas cheat sheet, urutan proyek, dan latihan mandiri, peserta diminta menunjukkan komponen yang terlibat.",
        "steps": [
          "Mulai dari tujuan fitur.",
          "Tunjukkan file/perintah yang berperan.",
          "Jelaskan data atau response yang dihasilkan."
        ],
        "result": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan."
      },
      {
        "title": "Contoh 2 · Verifikasi",
        "problem": "Setelah perubahan dilakukan, peserta harus memastikan hasil sesuai spesifikasi.",
        "steps": [
          "Gunakan pemeriksaan yang relevan: route:list, migrate:status, browser, database, atau test.",
          "Bandingkan hasil aktual dengan yang diharapkan."
        ],
        "result": "Simpan bukti verifikasi agar proses dapat ditelusuri."
      }
    ],
    "traps": [
      "Menghafal perintah tanpa memahami dampaknya.",
      "Mengubah banyak komponen sekaligus ketika terjadi error.",
      "Tidak menyimpan bukti hasil verifikasi."
    ],
    "glossary": [
      {
        "term": "Verifikasi",
        "meaning": "Pemeriksaan bahwa hasil sesuai kebutuhan atau spesifikasi."
      },
      {
        "term": "Bukti",
        "meaning": "Artefak yang menunjukkan proses atau hasil kerja."
      },
      {
        "term": "Workflow",
        "meaning": "Urutan aktivitas dari awal sampai hasil akhir."
      }
    ],
    "essay": {
      "q": "Jelaskan inti materi “Cheat Sheet, Urutan Proyek, dan Latihan Mandiri” dan satu bukti yang dapat menunjukkan bahwa Anda memahaminya.",
      "answer": "Jawaban harus menjelaskan fungsi konsep secara tepat, mengaitkannya dengan proyek, dan menyebut bukti yang relevan seperti source code, output terminal, hasil browser, database, atau tabel pengujian."
    },
    "formulas": [
      "Pahami fungsi → praktikkan → verifikasi → dokumentasikan."
    ],
    "analogy": "Kesiapan meningkat ketika peserta dapat menjelaskan dan mempraktikkan urutan tanpa bergantung pada salinan solusi.",
    "example": "Peserta tidak hanya menyebut nama komponen, tetapi dapat menjelaskan mengapa komponen tersebut diperlukan.",
    "quiz": [],
  }
];
