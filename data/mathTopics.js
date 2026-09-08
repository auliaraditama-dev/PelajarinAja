export const mathTopics = [
  {
    "id": "himpunan-bilangan",
    "group": "Bilangan",
    "title": "Himpunan Bilangan",
    "pages": "1",
    "level": "Dasar",
    "summary": "Memahami himpunan, irisan, gabungan, serta mengenali bilangan asli, cacah, genap, prima, dan jenis bilangan lain.",
    "concepts": [
      "Himpunan adalah kumpulan objek yang kriterianya jelas. Contoh: A = {bilangan asli kurang dari 6}.",
      "Irisan A ∩ B berisi anggota yang ada di A dan B sekaligus.",
      "Gabungan A ∪ B berisi semua anggota yang ada di A atau B, tanpa menulis anggota yang sama dua kali.",
      "Bilangan asli biasanya 1, 2, 3, ...; bilangan cacah biasanya 0, 1, 2, 3, ...; bilangan prima lebih dari 1 dan memiliki tepat dua faktor positif."
    ],
    "analogy": "Bayangkan dua grup chat. Irisan adalah orang yang ada di kedua grup. Gabungan adalah semua orang dari dua grup jika daftar anggotanya digabung.",
    "formulas": [
      "A ∩ B = anggota yang sama pada A dan B",
      "A ∪ B = semua anggota A dan B"
    ],
    "example": "Jika A = {1,2,3,4,5} dan B = {0,2,4,6}, maka A ∩ B = {2,4}. Jika C = {2,3,5,7}, maka (A ∩ B) ∪ C = {2,3,4,5,7}.",
    "traps": [
      "Lupa bahwa 0 termasuk bilangan cacah tetapi bukan bilangan asli pada konvensi yang umum dipakai di sekolah.",
      "Mengulang anggota yang sama saat menulis gabungan.",
      "Mencampur arti ∩ dan ∪."
    ],
    "quiz": [
      {
        "q": "A={1,2,3,4}, B={2,4,6}. Nilai A ∩ B adalah ...",
        "options": [
          "{1,3}",
          "{2,4}",
          "{1,2,3,4,6}",
          "{6}"
        ],
        "answer": 1,
        "explain": "Irisan hanya mengambil anggota yang muncul pada kedua himpunan."
      },
      {
        "q": "Jika P={bilangan prima ≤ 10}, banyak anggota P adalah ...",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "answer": 1,
        "explain": "Bilangan prima ≤10 adalah 2,3,5,7."
      }
    ],
    "essay": {
      "q": "Buat dua himpunan sederhana dari kehidupan sehari-hari, lalu tentukan irisan dan gabungannya.",
      "answer": "Jawaban bervariasi. Yang dinilai adalah definisi himpunan jelas serta operasi irisan dan gabungan dilakukan konsisten."
    },
    "objectives": [
      "Membedakan bilangan asli, cacah, bulat, rasional, irasional, genap, ganjil, dan prima.",
      "Menuliskan himpunan dengan daftar anggota maupun notasi pembentuk himpunan.",
      "Menentukan irisan, gabungan, selisih, dan komplemen pada soal langsung maupun kontekstual."
    ],
    "prerequisites": [
      "Operasi hitung bilangan dasar.",
      "Membaca simbol =, <, >, ≤, ≥."
    ],
    "deepDive": [
      "Himpunan tidak sekadar daftar angka; yang paling penting adalah syarat keanggotaannya harus jelas. Contoh “bilangan yang bagus” bukan himpunan yang terdefinisi baik, sedangkan “bilangan prima kurang dari 10” jelas anggotanya.",
      "Irisan berarti memenuhi dua syarat sekaligus. Gabungan berarti cukup memenuhi sedikitnya salah satu syarat. Pada soal TKA, kata “dan” sering mengarah ke irisan, sedangkan “atau” sering mengarah ke gabungan, tetapi konteks tetap harus dibaca.",
      "Untuk operasi bertingkat seperti (A ∩ B) ∪ C, kerjakan bagian di dalam tanda kurung lebih dahulu. Tuliskan anggota secara rapi agar tidak ada anggota yang terlewat atau ditulis ganda."
    ],
    "steps": [
      "Tentukan semesta atau jenis bilangan yang sedang dibahas.",
      "Daftarkan anggota setiap himpunan jika jumlahnya masih sedikit.",
      "Kerjakan operasi dalam tanda kurung terlebih dahulu.",
      "Periksa ulang definisi bilangan khusus seperti prima, genap, dan cacah."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Irisan lalu gabungan",
        "problem": "A = {1, 2, 3, 4, 5}, B = {0, 2, 4, 6}, dan C = {2, 3, 5, 7}. Tentukan (A ∩ B) ∪ C.",
        "steps": [
          "A ∩ B mengambil anggota yang ada di A dan B: {2, 4}.",
          "Gabungkan {2, 4} dengan C = {2, 3, 5, 7}.",
          "Anggota yang sama hanya ditulis satu kali."
        ],
        "result": "(A ∩ B) ∪ C = {2, 3, 4, 5, 7}."
      },
      {
        "title": "Contoh 2 · Bilangan prima",
        "problem": "Tentukan himpunan bilangan prima yang lebih kecil dari 12.",
        "steps": [
          "Bilangan prima lebih besar dari 1.",
          "Setiap bilangan prima memiliki tepat dua faktor positif: 1 dan dirinya sendiri.",
          "Periksa 2 sampai 11."
        ],
        "result": "{2, 3, 5, 7, 11}."
      }
    ],
    "glossary": [
      {
        "term": "Irisan (∩)",
        "meaning": "Anggota yang terdapat pada kedua himpunan."
      },
      {
        "term": "Gabungan (∪)",
        "meaning": "Seluruh anggota dari dua himpunan tanpa pengulangan."
      },
      {
        "term": "Bilangan prima",
        "meaning": "Bilangan lebih dari 1 dengan tepat dua faktor positif."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "eksponen",
    "group": "Bilangan",
    "title": "Pangkat / Eksponen",
    "pages": "2",
    "level": "Dasar",
    "summary": "Menyederhanakan bentuk berpangkat dengan aturan perkalian, pembagian, pangkat nol, pangkat negatif, dan pangkat pecahan.",
    "concepts": [
      "Jika basis sama dikalikan, pangkat dijumlahkan.",
      "Jika basis sama dibagi, pangkat dikurangkan.",
      "Jika suatu pangkat dipangkatkan lagi, pangkatnya dikalikan.",
      "Pangkat negatif berarti kebalikan, sedangkan pangkat pecahan berkaitan dengan akar."
    ],
    "analogy": "Eksponen seperti menghitung berapa kali sebuah mesin pengganda bekerja. Saat dua proses dengan basis sama disambung, jumlah langkah penggandaannya bisa dijumlahkan.",
    "formulas": [
      "aᵐ · aⁿ = a⁽ᵐ⁺ⁿ⁾",
      "aᵐ / aⁿ = a⁽ᵐ⁻ⁿ⁾",
      "(aᵐ)ⁿ = a⁽ᵐⁿ⁾",
      "a⁽⁻ⁿ⁾=1/aⁿ",
      "Pangkat p/q: a berpangkat p/q = akar ke-q dari aᵖ"
    ],
    "example": "2³⁄² × 2¹⁄² = 2² = 4. Kuncinya: basis sama, maka pangkat dijumlahkan.",
    "traps": [
      "Menjumlahkan basis ketika seharusnya pangkat yang dijumlahkan.",
      "Menganggap a⁰ = 0. Untuk a ≠ 0, a⁰ = 1.",
      "Lupa mengubah pangkat negatif menjadi bentuk kebalikan."
    ],
    "quiz": [
      {
        "q": "3² × 3⁴ = ...",
        "options": [
          "3⁶",
          "9⁶",
          "3⁸",
          "6³"
        ],
        "answer": 0,
        "explain": "Basis sama dan dikalikan, jadi pangkat dijumlahkan: 2+4=6."
      },
      {
        "q": "16¹⁄² = ...",
        "options": [
          "2",
          "4",
          "8",
          "16"
        ],
        "answer": 1,
        "explain": "Pangkat 1/2 berarti akar kuadrat."
      }
    ],
    "essay": {
      "q": "Sederhanakan 5⁷ / 5³ dan jelaskan aturan yang digunakan.",
      "answer": "5⁽⁷⁻³⁾=5⁴, karena pembagian dengan basis sama membuat pangkat dikurangkan."
    },
    "objectives": [
      "Memahami arti pangkat sebagai perkalian berulang.",
      "Menggunakan sifat perkalian, pembagian, pangkat nol, negatif, dan pecahan.",
      "Menyederhanakan ekspresi berpangkat dengan basis yang sama atau dapat disamakan."
    ],
    "prerequisites": [
      "Perkalian dan pembagian bilangan.",
      "Faktorisasi sederhana dan akar kuadrat."
    ],
    "deepDive": [
      "Eksponen menyatakan berapa kali basis digunakan sebagai faktor. Contoh 5² = 5 × 5 = 25 dan 5³ = 5 × 5 × 5 = 125. Pangkat bukan berarti basis dikali pangkat.",
      "Sifat pangkat muncul dari pengelompokan faktor yang sama. Karena 2³ × 2⁴ berarti tiga faktor 2 dikali empat faktor 2, totalnya tujuh faktor 2 sehingga menjadi 2⁷.",
      "Pangkat negatif menyatakan kebalikan, bukan hasil negatif. Misalnya 3⁻² = 1/3² = 1/9. Pangkat pecahan berkaitan dengan akar, misalnya 16¹⁄² = √16 = 4."
    ],
    "steps": [
      "Samakan basis jika memungkinkan.",
      "Tentukan operasi utama: perkalian, pembagian, atau pangkat dari pangkat.",
      "Terapkan aturan pangkat pada eksponen, bukan pada basis secara sembarang.",
      "Ubah pangkat negatif atau pecahan ke bentuk yang paling mudah dihitung."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Perkalian pangkat",
        "problem": "Sederhanakan 5² × 5³.",
        "steps": [
          "Basis kedua faktor sama, yaitu 5.",
          "Pada perkalian dengan basis sama, eksponen dijumlahkan: 2 + 3 = 5."
        ],
        "result": "5² × 5³ = 5⁵ = 3.125."
      },
      {
        "title": "Contoh 2 · Pembagian pangkat",
        "problem": "Sederhanakan 2⁷ ÷ 2³.",
        "steps": [
          "Basis sama, sehingga eksponen dikurangkan.",
          "7 − 3 = 4.",
          "Hitung 2⁴ jika diperlukan."
        ],
        "result": "2⁷ ÷ 2³ = 2⁴ = 16."
      }
    ],
    "glossary": [
      {
        "term": "Basis",
        "meaning": "Bilangan atau bentuk yang dipangkatkan."
      },
      {
        "term": "Eksponen",
        "meaning": "Angka kecil di atas yang menunjukkan pangkat."
      },
      {
        "term": "Pangkat negatif",
        "meaning": "Menunjukkan kebalikan dari pangkat positif yang bersesuaian."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "operasi-khusus",
    "group": "Bilangan",
    "title": "Operasi Bilangan yang Didefinisikan Khusus",
    "pages": "3",
    "level": "Menengah",
    "summary": "Memahami simbol operasi baru yang memiliki definisi sendiri, lalu menerapkan definisi tersebut secara tepat.",
    "concepts": [
      "Simbol seperti ⊙, ★, atau ◇ tidak otomatis berarti operasi yang sudah dikenal.",
      "Langkah pertama selalu membaca definisi operasinya.",
      "Setelah itu substitusikan nilai yang diketahui ke rumus definisi.",
      "Jika diminta mencari variabel, hasil substitusi biasanya membentuk persamaan biasa."
    ],
    "analogy": "Simbol operasi baru dapat dianalogikan sebagai tombol khusus pada kalkulator. Fungsinya tidak boleh diasumsikan dan harus ditentukan dari definisi yang diberikan.",
    "formulas": [
      "Contoh: a ⊙ b = ((a-b)² + 2ab)/(a+b)"
    ],
    "example": "Jika operasi didefinisikan a ★ b = a + 2b, maka 3 ★ 4 = 3 + 2(4) = 11.",
    "traps": [
      "Menganggap simbol baru sama dengan perkalian.",
      "Tidak memakai tanda kurung saat substitusi bilangan negatif.",
      "Berhenti setelah substitusi padahal masih harus menyelesaikan persamaan."
    ],
    "quiz": [
      {
        "q": "Didefinisikan a ★ b = 2a-b. Nilai 5 ★ 3 adalah ...",
        "options": [
          "4",
          "7",
          "10",
          "13"
        ],
        "answer": 1,
        "explain": "2(5)-3 = 7."
      },
      {
        "q": "Didefinisikan x ◇ 2 = x+6. Jika x ◇ 2 = 11, maka x = ...",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "answer": 2,
        "explain": "x+6=11 sehingga x=5."
      }
    ],
    "essay": {
      "q": "Buat satu operasi baru dengan simbol pilihanmu, lalu hitung hasil operasi itu untuk dua bilangan.",
      "answer": "Jawaban bervariasi; definisi harus jelas dan perhitungan mengikuti definisi yang dibuat."
    },
    "objectives": [
      "Membaca definisi operasi baru dengan teliti.",
      "Melakukan substitusi nilai ke definisi operasi.",
      "Menyelesaikan persamaan yang muncul dari operasi khusus."
    ],
    "prerequisites": [
      "Substitusi aljabar.",
      "Urutan operasi dan penggunaan tanda kurung."
    ],
    "deepDive": [
      "Simbol baru seperti ★, ⊙, atau ◇ tidak memiliki arti tetap. Arti simbol ditentukan sepenuhnya oleh definisi pada soal. Karena itu jangan mengandalkan bentuk simbolnya.",
      "Jika definisi memuat a dan b, gantilah a dan b sesuai urutan operand. Pada 5 ★ 3, nilai pertama masuk ke posisi a dan nilai kedua ke posisi b.",
      "Saat soal memberikan hasil operasi dan meminta nilai variabel, substitusi definisi akan menghasilkan persamaan biasa. Setelah itu gunakan teknik aljabar yang sudah dikenal."
    ],
    "steps": [
      "Salin definisi operasi.",
      "Cocokkan operand pertama dan kedua dengan variabel pada definisi.",
      "Substitusikan nilai menggunakan tanda kurung.",
      "Sederhanakan dan selesaikan persamaan jika ada variabel yang belum diketahui."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Substitusi langsung",
        "problem": "Didefinisikan a ★ b = 2a + 3b. Hitung 4 ★ 5.",
        "steps": [
          "a = 4 dan b = 5.",
          "Substitusi: 2(4) + 3(5).",
          "Hitung 8 + 15."
        ],
        "result": "4 ★ 5 = 23."
      },
      {
        "title": "Contoh 2 · Mencari variabel",
        "problem": "Didefinisikan x ◇ 2 = 3x − 2. Jika x ◇ 2 = 13, tentukan x.",
        "steps": [
          "Gunakan definisi: 3x − 2 = 13.",
          "Tambahkan 2 pada kedua ruas: 3x = 15.",
          "Bagi 3."
        ],
        "result": "x = 5."
      }
    ],
    "glossary": [
      {
        "term": "Operand",
        "meaning": "Nilai yang dikenai operasi."
      },
      {
        "term": "Definisi operasi",
        "meaning": "Aturan khusus yang menjelaskan cara menghitung simbol baru."
      },
      {
        "term": "Substitusi",
        "meaning": "Mengganti variabel dengan nilai yang diketahui."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "fungsi-invers",
    "group": "Aljabar",
    "title": "Fungsi dan Invers Fungsi",
    "pages": "4",
    "level": "Menengah",
    "summary": "Memahami fungsi sebagai aturan input-output dan invers sebagai proses membalikkan fungsi.",
    "concepts": [
      "Fungsi memasangkan setiap input pada tepat satu output.",
      "Invers f⁻¹ membalik proses f, sehingga f⁻¹(f(x)) = x pada domain yang sesuai.",
      "Untuk mencari invers aljabar: tulis y=f(x), tukar x dan y, lalu selesaikan y.",
      "Pada soal kontekstual, invers sering dipakai untuk mencari input ketika output diketahui."
    ],
    "analogy": "Fungsi seperti mesin yang mengubah suhu dari satu skala ke skala lain. Invers adalah mesin yang mengembalikan hasil ke skala semula.",
    "formulas": [
      "f⁻¹(f(x)) = x",
      "Jika f(x)=ax+b, maka f⁻¹(x)=(x-b)/a, a≠0"
    ],
    "example": "f(x)=2x+3. Tulis y=2x+3, tukar menjadi x=2y+3, sehingga y=(x-3)/2. Jadi f⁻¹(x)=(x-3)/2.",
    "traps": [
      "Mengira f⁻¹(x) berarti 1/f(x).",
      "Tidak memperhatikan domain dan range.",
      "Salah saat menukar x dan y atau memindahkan konstanta."
    ],
    "quiz": [
      {
        "q": "Jika f(x)=3x-6, maka f⁻¹(x)=...",
        "options": [
          "(x+6)/3",
          "3x+6",
          "(x-6)/3",
          "1/(3x-6)"
        ],
        "answer": 0,
        "explain": "y=3x-6 → x=3y-6 → y=(x+6)/3."
      },
      {
        "q": "Jika f(x)=x+5, maka f⁻¹(12)=...",
        "options": [
          "5",
          "7",
          "12",
          "17"
        ],
        "answer": 1,
        "explain": "f⁻¹(x)=x-5, jadi 12-5=7."
      }
    ],
    "essay": {
      "q": "Cari invers dari f(x)=4x+1 dan periksa dengan komposisi sederhana.",
      "answer": "f⁻¹(x)=(x-1)/4. Pemeriksaan: f⁻¹(f(x))=((4x+1)-1)/4=x."
    },
    "objectives": [
      "Memahami fungsi sebagai pemetaan input ke output.",
      "Menentukan invers fungsi linear.",
      "Menggunakan invers untuk mencari nilai input dari output yang diketahui."
    ],
    "prerequisites": [
      "Persamaan linear satu variabel.",
      "Substitusi dan manipulasi aljabar."
    ],
    "deepDive": [
      "Fungsi dapat dianggap sebagai mesin: input x diproses menjadi output f(x). Agar mempunyai invers sebagai fungsi, pemetaan harus dapat dibalik secara tunggal pada domain yang dipakai.",
      "Notasi f⁻¹(x) berarti fungsi invers, bukan 1/f(x). Invers membatalkan kerja fungsi: f⁻¹(f(x)) = x dan f(f⁻¹(x)) = x pada domain yang sesuai.",
      "Pada fungsi linear f(x) = ax + b dengan a ≠ 0, proses dibalik dengan menghilangkan b lalu membagi a. Karena itu f⁻¹(x) = (x − b)/a."
    ],
    "steps": [
      "Tulis y = f(x).",
      "Tukar x dan y.",
      "Selesaikan persamaan baru terhadap y.",
      "Ganti y dengan f⁻¹(x) dan periksa dengan komposisi."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Menentukan invers",
        "problem": "Tentukan invers f(x) = 3x + 6.",
        "steps": [
          "Tulis y = 3x + 6.",
          "Tukar: x = 3y + 6.",
          "x − 6 = 3y.",
          "y = (x − 6)/3."
        ],
        "result": "f⁻¹(x) = (x − 6)/3."
      },
      {
        "title": "Contoh 2 · Menggunakan invers",
        "problem": "Jika f(x) = 4x − 1, berapa nilai input yang menghasilkan output 19?",
        "steps": [
          "Cari x dari 4x − 1 = 19.",
          "4x = 20.",
          "x = 5."
        ],
        "result": "Inputnya adalah 5."
      }
    ],
    "glossary": [
      {
        "term": "Domain",
        "meaning": "Himpunan nilai input yang diperbolehkan."
      },
      {
        "term": "Range",
        "meaning": "Himpunan nilai output yang dihasilkan."
      },
      {
        "term": "Invers",
        "meaning": "Fungsi yang membalik proses fungsi asal."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "komposisi-fungsi",
    "group": "Aljabar",
    "title": "Komposisi Fungsi",
    "pages": "5",
    "level": "Menengah",
    "summary": "Menggabungkan dua atau lebih fungsi secara berurutan dan memahami urutan prosesnya dalam konteks nyata.",
    "concepts": [
      "(g ∘ f)(x) berarti g(f(x)): kerjakan f terlebih dahulu, kemudian g.",
      "Urutan komposisi penting; pada umumnya g∘f tidak sama dengan f∘g.",
      "Dalam konteks diskon atau biaya, setiap fungsi mewakili satu tahap perubahan.",
      "Selalu identifikasi nilai awal, fungsi tahap pertama, lalu fungsi tahap berikutnya."
    ],
    "analogy": "Komposisi fungsi seperti mencuci pakaian: pakaian masuk mesin cuci lalu pengering. Menukar urutan proses bisa memberi hasil yang berbeda.",
    "formulas": [
      "(g ∘ f)(x)=g(f(x))",
      "(f ∘ g)(x)=f(g(x))"
    ],
    "example": "f(x)=0,9x dan g(y)=0,95y. Untuk harga awal Rp100.000, g(f(100000))=0,95×90.000=Rp85.500.",
    "traps": [
      "Mengerjakan fungsi dari kiri ke kanan tanpa melihat notasi komposisi.",
      "Menggabungkan dua diskon dengan menjumlahkan persentasenya begitu saja.",
      "Menggunakan nilai setelah diskon sebagai nilai awal secara keliru."
    ],
    "quiz": [
      {
        "q": "f(x)=x+2 dan g(x)=3x. Nilai (g∘f)(4) adalah ...",
        "options": [
          "14",
          "18",
          "20",
          "24"
        ],
        "answer": 1,
        "explain": "f(4)=6 lalu g(6)=18."
      },
      {
        "q": "Diskon 10% lalu 20% pada harga Rp100.000 menghasilkan ...",
        "options": [
          "Rp70.000",
          "Rp72.000",
          "Rp80.000",
          "Rp90.000"
        ],
        "answer": 1,
        "explain": "100.000×0,9×0,8=72.000."
      }
    ],
    "essay": {
      "q": "Jelaskan dengan contoh mengapa urutan komposisi fungsi dapat menghasilkan nilai berbeda.",
      "answer": "Contoh dapat memakai dua fungsi yang tidak komutatif, misalnya f(x)=x+2 dan g(x)=3x."
    },
    "objectives": [
      "Membaca notasi komposisi fungsi dengan benar.",
      "Menghitung komposisi dua fungsi secara aljabar maupun numerik.",
      "Menerapkan komposisi pada proses bertahap seperti diskon atau perubahan biaya."
    ],
    "prerequisites": [
      "Konsep fungsi dan substitusi.",
      "Operasi aljabar dasar."
    ],
    "deepDive": [
      "Komposisi (g ∘ f)(x) dibaca “g komposisi f” dan berarti g(f(x)). Fungsi f dikerjakan lebih dahulu karena hasil f menjadi input untuk g.",
      "Urutan sangat penting. Sebagai contoh, menambah 10 lalu mengalikan 2 tidak sama dengan mengalikan 2 lalu menambah 10. Oleh sebab itu f ∘ g biasanya tidak sama dengan g ∘ f.",
      "Pada soal diskon bertingkat, setiap diskon diterapkan terhadap harga setelah tahap sebelumnya. Diskon 10% lalu 20% berarti harga dikali 0,9 lalu dikali 0,8, bukan langsung dikurangi 30%."
    ],
    "steps": [
      "Identifikasi fungsi yang bekerja paling awal.",
      "Hitung hasil fungsi pertama.",
      "Masukkan hasil itu ke fungsi berikutnya.",
      "Interpretasikan hasil sesuai satuan dan konteks soal."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Komposisi numerik",
        "problem": "f(x) = x + 3 dan g(x) = 2x. Hitung (g ∘ f)(5).",
        "steps": [
          "f(5) = 5 + 3 = 8.",
          "g(f(5)) = g(8).",
          "g(8) = 2(8) = 16."
        ],
        "result": "(g ∘ f)(5) = 16."
      },
      {
        "title": "Contoh 2 · Diskon bertingkat",
        "problem": "Harga Rp200.000 mendapat diskon 10% lalu 20%.",
        "steps": [
          "Setelah diskon 10%: 200.000 × 0,9 = 180.000.",
          "Setelah diskon 20% berikutnya: 180.000 × 0,8 = 144.000."
        ],
        "result": "Harga akhir Rp144.000."
      }
    ],
    "glossary": [
      {
        "term": "Komposisi",
        "meaning": "Penerapan fungsi secara berurutan."
      },
      {
        "term": "g ∘ f",
        "meaning": "Kerjakan f lebih dulu, lalu g."
      },
      {
        "term": "Output antara",
        "meaning": "Hasil fungsi pertama yang menjadi input fungsi berikutnya."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "barisan-aritmetika",
    "group": "Aljabar",
    "title": "Barisan dan Deret Aritmetika",
    "pages": "6",
    "level": "Menengah",
    "summary": "Mengenali pola dengan beda tetap serta menghitung suku ke-n dan jumlah beberapa suku pertama.",
    "concepts": [
      "Barisan aritmetika memiliki selisih (beda) yang tetap antar-suku.",
      "Suku ke-n dapat dicari dari suku pertama dan beda.",
      "Deret aritmetika adalah penjumlahan suku-suku barisan aritmetika.",
      "Pada soal kursi atau susunan bertingkat, cari dahulu suku pertama dan pertambahan tiap tahap."
    ],
    "analogy": "Jumlah kursi tiap baris di aula yang selalu bertambah 4 adalah barisan aritmetika: 20, 24, 28, 32, ...",
    "formulas": [
      "U_n = a + (n-1)d",
      "S_n = n/2 × (2a+(n-1)d)",
      "S_n = n/2 × (a+U_n)"
    ],
    "example": "Baris pertama 400 kursi dan tiap baris bertambah 150. Baris ke-5: U5=400+4(150)=1.000.",
    "traps": [
      "Menggunakan n×d, bukan (n-1)×d.",
      "Tertukar antara U_n dan S_n.",
      "Salah mengidentifikasi beda saat pola menurun."
    ],
    "quiz": [
      {
        "q": "Barisan 5, 8, 11, ... memiliki beda ...",
        "options": [
          "2",
          "3",
          "5",
          "8"
        ],
        "answer": 1,
        "explain": "8-5=3 dan 11-8=3."
      },
      {
        "q": "Suku ke-10 dari 2,5,8,... adalah ...",
        "options": [
          "26",
          "27",
          "29",
          "32"
        ],
        "answer": 2,
        "explain": "a=2,d=3 → U10=2+9(3)=29."
      }
    ],
    "essay": {
      "q": "Sebuah tribun memiliki 30 kursi pada baris pertama dan bertambah 5 kursi setiap baris. Tentukan jumlah kursi 8 baris pertama.",
      "answer": "a=30,d=5,U8=65; S8=8/2(30+65)=380."
    },
    "objectives": [
      "Mengenali pola dengan beda tetap.",
      "Menentukan suku ke-n suatu barisan aritmetika.",
      "Menghitung jumlah n suku pertama deret aritmetika."
    ],
    "prerequisites": [
      "Operasi bilangan dan persamaan sederhana.",
      "Memahami urutan suku pertama, kedua, dan seterusnya."
    ],
    "deepDive": [
      "Barisan aritmetika mempunyai perubahan tetap, disebut beda d. Jika d positif, suku naik secara konstan; jika d negatif, suku turun secara konstan.",
      "Rumus Uₙ = a + (n − 1)d muncul karena dari suku pertama ke suku ke-n terdapat tepat n − 1 langkah perubahan.",
      "Deret adalah hasil penjumlahan suku-suku barisan. Rumus Sₙ dapat dipahami dengan memasangkan suku pertama dengan terakhir, suku kedua dengan suku kedua terakhir, dan seterusnya."
    ],
    "steps": [
      "Tentukan a dari suku pertama.",
      "Hitung d dari selisih dua suku berurutan.",
      "Gunakan Uₙ untuk suku tertentu atau Sₙ untuk jumlah.",
      "Periksa apakah konteks meminta “suku” atau “total”."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Suku ke-n",
        "problem": "Barisan 7, 11, 15, 19, ... Tentukan U₁₀.",
        "steps": [
          "a = 7 dan d = 4.",
          "U₁₀ = 7 + (10 − 1)4.",
          "U₁₀ = 7 + 36."
        ],
        "result": "U₁₀ = 43."
      },
      {
        "title": "Contoh 2 · Jumlah suku",
        "problem": "Jumlahkan 8 suku pertama barisan 5, 8, 11, ...",
        "steps": [
          "a = 5, d = 3.",
          "U₈ = 5 + 7(3) = 26.",
          "S₈ = 8/2 × (5 + 26)."
        ],
        "result": "S₈ = 124."
      }
    ],
    "glossary": [
      {
        "term": "Beda (d)",
        "meaning": "Selisih tetap antara dua suku berurutan."
      },
      {
        "term": "Uₙ",
        "meaning": "Suku ke-n."
      },
      {
        "term": "Sₙ",
        "meaning": "Jumlah n suku pertama."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "barisan-geometri",
    "group": "Aljabar",
    "title": "Barisan dan Deret Geometri",
    "pages": "7",
    "level": "Menengah",
    "summary": "Mengenali pola dengan rasio tetap, termasuk model pertumbuhan dan peluruhan.",
    "concepts": [
      "Barisan geometri memiliki rasio tetap antar-suku berurutan.",
      "Jika r>1 terjadi pertumbuhan; jika 0<r<1 terjadi peluruhan.",
      "Suku ke-n diperoleh dengan mengalikan suku awal oleh r sebanyak n-1 kali.",
      "Model kadar obat, populasi, atau nilai investasi sering berbentuk geometri."
    ],
    "analogy": "Jika sebuah video selalu mendapat dua kali lipat jumlah penonton setiap hari, pola penontonnya membentuk barisan geometri.",
    "formulas": [
      "U_n = a·r⁽ⁿ⁻¹⁾",
      "S_n = a(rⁿ-1)/(r-1), r≠1"
    ],
    "example": "Kadar awal 100 mg dan tersisa 80% setiap hari. Hari ke-4: 100×0,8³=51,2 mg.",
    "traps": [
      "Menggunakan selisih padahal yang tetap adalah perbandingan.",
      "Memakai rⁿ bukan r⁽ⁿ⁻¹⁾ untuk suku ke-n.",
      "Keliru mengartikan 'turun 20%' sebagai dikali 0,2; seharusnya tersisa 0,8."
    ],
    "quiz": [
      {
        "q": "Barisan 3,6,12,24,... memiliki rasio ...",
        "options": [
          "2",
          "3",
          "4",
          "6"
        ],
        "answer": 0,
        "explain": "Setiap suku dikali 2."
      },
      {
        "q": "Suku ke-5 dari 2,4,8,... adalah ...",
        "options": [
          "16",
          "24",
          "32",
          "64"
        ],
        "answer": 2,
        "explain": "2×2⁴=32."
      }
    ],
    "essay": {
      "q": "Suatu nilai berkurang 25% setiap tahap dari 200. Tentukan nilai pada tahap ke-4 jika tahap pertama bernilai 200.",
      "answer": "Rasio tersisa 0,75. U4=200×0,75³=84,375."
    },
    "objectives": [
      "Mengenali pola dengan rasio tetap.",
      "Menentukan suku ke-n barisan geometri.",
      "Memodelkan pertumbuhan dan peluruhan berulang."
    ],
    "prerequisites": [
      "Eksponen.",
      "Perkalian dan pembagian pecahan/desimal."
    ],
    "deepDive": [
      "Barisan geometri berubah dengan faktor pengali yang tetap, disebut rasio r. Rasio diperoleh dari pembagian suku berikutnya oleh suku sebelumnya.",
      "Rumus Uₙ = arⁿ⁻¹ memakai n − 1 karena dari suku pertama ke suku ke-n terjadi n − 1 kali perkalian oleh r.",
      "Pada peluruhan persentase, gunakan bagian yang tersisa. Turun 20% berarti tersisa 80% sehingga r = 0,8. Naik 20% berarti r = 1,2."
    ],
    "steps": [
      "Tentukan suku pertama a.",
      "Hitung rasio r dengan membagi dua suku berurutan.",
      "Tentukan banyak tahap perkalian, yaitu n − 1.",
      "Gunakan model pertumbuhan/peluruhan yang sesuai."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Suku ke-n",
        "problem": "Barisan 3, 6, 12, 24, ... Tentukan U₆.",
        "steps": [
          "a = 3 dan r = 2.",
          "U₆ = 3 × 2⁵.",
          "2⁵ = 32."
        ],
        "result": "U₆ = 96."
      },
      {
        "title": "Contoh 2 · Peluruhan",
        "problem": "Kadar awal 160 mg berkurang 25% setiap tahap. Berapa kadar pada tahap ke-3?",
        "steps": [
          "Bagian tersisa = 75% = 0,75.",
          "Tahap ke-3 berarti dua kali peluruhan dari nilai awal.",
          "160 × 0,75² = 160 × 0,5625."
        ],
        "result": "90 mg."
      }
    ],
    "glossary": [
      {
        "term": "Rasio (r)",
        "meaning": "Perbandingan tetap dua suku berurutan."
      },
      {
        "term": "Pertumbuhan",
        "meaning": "Nilai berulang meningkat, biasanya r > 1."
      },
      {
        "term": "Peluruhan",
        "meaning": "Nilai berulang menurun, biasanya 0 < r < 1."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "sistem-pertidaksamaan",
    "group": "Aljabar",
    "title": "Sistem Pertidaksamaan Linear",
    "pages": "8",
    "level": "Menengah",
    "summary": "Menentukan daerah penyelesaian dari beberapa pertidaksamaan linear sekaligus.",
    "concepts": [
      "Setiap pertidaksamaan linear dua variabel membentuk satu daerah setengah bidang.",
      "Garis batas diperoleh dengan mengganti tanda pertidaksamaan menjadi sama dengan.",
      "Gunakan titik uji untuk menentukan sisi garis yang memenuhi.",
      "Solusi sistem adalah irisan semua daerah yang memenuhi."
    ],
    "analogy": "Bayangkan beberapa aturan zona parkir di peta. Tempat yang legal adalah wilayah yang memenuhi semua aturan sekaligus.",
    "formulas": [
      "ax+by ≤ c",
      "ax+by ≥ c",
      "Daerah solusi sistem = irisan semua daerah"
    ],
    "example": "Untuk x≥0, y≥0, x+y≤4, daerah penyelesaian berada di kuadran I dan di bawah garis x+y=4.",
    "traps": [
      "Salah memilih sisi garis setelah uji titik.",
      "Lupa syarat x≥0 atau y≥0.",
      "Menganggap garis batas selalu putus-putus; garis penuh dipakai untuk ≤ atau ≥."
    ],
    "quiz": [
      {
        "q": "Titik (1,2) memenuhi x+y≤4?",
        "options": [
          "Ya",
          "Tidak",
          "Tidak dapat ditentukan",
          "Hanya jika x≥y"
        ],
        "answer": 0,
        "explain": "1+2=3≤4."
      },
      {
        "q": "Untuk pertidaksamaan y≥2x-1, daerah solusi berada ...",
        "options": [
          "di atas garis",
          "di bawah garis",
          "hanya pada garis",
          "di sumbu x"
        ],
        "answer": 0,
        "explain": "Nilai y harus sama dengan atau lebih besar dari nilai garis."
      }
    ],
    "essay": {
      "q": "Gambarkan secara konsep daerah penyelesaian x≥0, y≥0, x+y≤6 dan sebutkan tiga titik yang memenuhi.",
      "answer": "Daerah segitiga di kuadran I di bawah garis x+y=6. Contoh titik: (0,0),(2,2),(5,1)."
    },
    "objectives": [
      "Menggambar garis batas pertidaksamaan linear.",
      "Menentukan sisi daerah yang memenuhi pertidaksamaan.",
      "Mencari irisan daerah dari beberapa pertidaksamaan."
    ],
    "prerequisites": [
      "Persamaan garis lurus.",
      "Koordinat Cartesius dan substitusi titik."
    ],
    "deepDive": [
      "Pertidaksamaan linear dua variabel menghasilkan daerah, bukan hanya satu garis. Garis adalah batas yang memisahkan titik yang memenuhi dan tidak memenuhi.",
      "Untuk ≤ atau ≥, garis batas termasuk solusi sehingga digambar penuh. Untuk < atau >, garis batas tidak termasuk solusi dan biasanya digambar putus-putus.",
      "Pada sistem, solusi harus memenuhi semua pertidaksamaan sekaligus. Karena itu daerah akhir adalah irisan dari setiap arsiran."
    ],
    "steps": [
      "Ubah pertidaksamaan menjadi persamaan untuk mendapatkan garis batas.",
      "Gambar garis dari dua titik atau titik potong sumbu.",
      "Uji satu titik sederhana seperti (0,0) jika tidak berada di garis.",
      "Ambil irisan semua daerah yang memenuhi."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Uji titik",
        "problem": "Apakah (1, 2) memenuhi x + y ≤ 4?",
        "steps": [
          "Substitusi x = 1 dan y = 2.",
          "1 + 2 = 3.",
          "Bandingkan 3 dengan 4."
        ],
        "result": "Ya, karena 3 ≤ 4."
      },
      {
        "title": "Contoh 2 · Sistem sederhana",
        "problem": "Jelaskan daerah x ≥ 0, y ≥ 0, dan x + y ≤ 6.",
        "steps": [
          "x ≥ 0 dan y ≥ 0 membatasi solusi di kuadran I.",
          "x + y = 6 memotong sumbu di (6,0) dan (0,6).",
          "Karena ≤, ambil sisi di bawah garis."
        ],
        "result": "Daerah segitiga dengan titik sudut (0,0), (6,0), dan (0,6)."
      }
    ],
    "glossary": [
      {
        "term": "Garis batas",
        "meaning": "Garis yang diperoleh saat tanda pertidaksamaan diganti menjadi =."
      },
      {
        "term": "Titik uji",
        "meaning": "Titik untuk menentukan sisi garis yang memenuhi."
      },
      {
        "term": "Daerah solusi",
        "meaning": "Kumpulan semua titik yang memenuhi sistem."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "spl",
    "group": "Aljabar",
    "title": "Sistem Persamaan Linear",
    "pages": "9",
    "level": "Menengah",
    "summary": "Menyelesaikan beberapa persamaan linear untuk menentukan nilai variabel, termasuk soal kontekstual harga atau komposisi.",
    "concepts": [
      "SPL mencari nilai variabel yang memenuhi semua persamaan sekaligus.",
      "Metode umum: eliminasi, substitusi, atau matriks.",
      "Dalam soal cerita, tentukan arti tiap variabel sebelum membuat persamaan.",
      "Periksa kembali hasil dengan memasukkan nilai variabel ke semua persamaan."
    ],
    "analogy": "Jika dua paket memiliki kombinasi item berbeda tetapi total harga diketahui, SPL dapat digunakan untuk menentukan harga setiap item.",
    "formulas": [
      "a₁x+b₁y=c₁",
      "a₂x+b₂y=c₂"
    ],
    "example": "x+y=7 dan x-y=1. Jumlahkan kedua persamaan: 2x=8 → x=4, lalu y=3.",
    "traps": [
      "Salah tanda saat eliminasi.",
      "Membuat variabel tanpa definisi jelas.",
      "Tidak memeriksa apakah jawaban masuk akal dalam konteks."
    ],
    "quiz": [
      {
        "q": "x+y=10 dan x-y=2. Nilai x adalah ...",
        "options": [
          "4",
          "5",
          "6",
          "8"
        ],
        "answer": 2,
        "explain": "Jumlahkan: 2x=12 → x=6."
      },
      {
        "q": "Jika 2x+y=7 dan y=3, x=...",
        "options": [
          "1",
          "2",
          "3",
          "5"
        ],
        "answer": 1,
        "explain": "2x+3=7 → 2x=4 → x=2."
      }
    ],
    "essay": {
      "q": "Buat model SPL dari pembelian 2 buku dan 1 pensil seharga 13 ribu, serta 1 buku dan 2 pensil seharga 11 ribu. Tentukan harganya.",
      "answer": "2b+p=13 dan b+2p=11 (ribu). Diperoleh b=5, p=3."
    },
    "objectives": [
      "Membentuk persamaan linear dari informasi kontekstual.",
      "Menyelesaikan SPL dengan eliminasi atau substitusi.",
      "Memeriksa kembali solusi terhadap seluruh persamaan."
    ],
    "prerequisites": [
      "Persamaan linear satu variabel.",
      "Operasi aljabar dengan koefisien positif dan negatif."
    ],
    "deepDive": [
      "Sistem persamaan linear mencari nilai beberapa variabel yang harus memenuhi semua persamaan secara bersamaan. Secara geometris, SPL dua variabel mencari titik potong dua garis.",
      "Eliminasi menghilangkan satu variabel dengan menjumlahkan atau mengurangkan persamaan yang sudah disetarakan koefisiennya. Substitusi mengganti satu variabel dengan bentuk dari persamaan lain.",
      "Pada soal cerita, tahap paling penting sering justru pemodelan. Nyatakan arti x, y, atau variabel lain beserta satuannya sebelum menulis persamaan."
    ],
    "steps": [
      "Definisikan setiap variabel.",
      "Ubah setiap informasi menjadi persamaan.",
      "Pilih eliminasi atau substitusi yang paling sederhana.",
      "Substitusikan kembali untuk mendapatkan variabel lain dan cek hasil."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Eliminasi",
        "problem": "x + y = 9 dan x − y = 3. Tentukan x dan y.",
        "steps": [
          "Jumlahkan kedua persamaan: 2x = 12.",
          "x = 6.",
          "Substitusikan ke x + y = 9: 6 + y = 9."
        ],
        "result": "x = 6 dan y = 3."
      },
      {
        "title": "Contoh 2 · Soal harga",
        "problem": "2 buku + 1 pensil = Rp13.000 dan 1 buku + 2 pensil = Rp11.000.",
        "steps": [
          "Misalkan b = harga buku (ribu) dan p = harga pensil (ribu).",
          "2b + p = 13 dan b + 2p = 11.",
          "Eliminasi atau substitusi menghasilkan b = 5 dan p = 3."
        ],
        "result": "Buku Rp5.000 dan pensil Rp3.000."
      }
    ],
    "glossary": [
      {
        "term": "Eliminasi",
        "meaning": "Menghilangkan salah satu variabel."
      },
      {
        "term": "Substitusi",
        "meaning": "Mengganti variabel dengan bentuk yang setara."
      },
      {
        "term": "Solusi SPL",
        "meaning": "Nilai variabel yang memenuhi semua persamaan."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "sudut-garis-sejajar",
    "group": "Geometri dan Pengukuran",
    "title": "Hubungan Sudut dan Garis Sejajar",
    "pages": "10",
    "level": "Dasar",
    "summary": "Menganalisis sudut berpelurus, bertolak belakang, sehadap, dalam berseberangan, dan hubungan sudut pada garis sejajar.",
    "concepts": [
      "Sudut berpelurus jumlahnya 180°.",
      "Sudut bertolak belakang besarnya sama.",
      "Jika dua garis sejajar dipotong transversal, sudut sehadap sama besar.",
      "Sudut dalam sepihak pada dua garis sejajar berjumlah 180°."
    ],
    "analogy": "Dua rel kereta yang sejajar dipotong jalan miring. Sudut-sudut di tiap persimpangan memiliki pola yang konsisten.",
    "formulas": [
      "Sudut berpelurus: α+β=180°",
      "Sudut bertolak belakang: α=β"
    ],
    "example": "Jika sebuah sudut pada perpotongan dua garis adalah 65°, sudut bertolak belakang juga 65°, sedangkan dua sudut yang berpelurus adalah 115°.",
    "traps": [
      "Menyamakan semua sudut pada dua garis sejajar.",
      "Tidak membedakan sehadap dengan dalam sepihak.",
      "Lupa bahwa sudut berpelurus harus 180°."
    ],
    "quiz": [
      {
        "q": "Sudut yang berpelurus dengan 72° adalah ...",
        "options": [
          "18°",
          "72°",
          "108°",
          "288°"
        ],
        "answer": 2,
        "explain": "180°-72°=108°."
      },
      {
        "q": "Jika dua sudut bertolak belakang dan salah satunya 48°, sudut lainnya ...",
        "options": [
          "42°",
          "48°",
          "132°",
          "312°"
        ],
        "answer": 1,
        "explain": "Sudut bertolak belakang sama besar."
      }
    ],
    "essay": {
      "q": "Jelaskan perbedaan sudut sehadap dan sudut dalam sepihak pada dua garis sejajar.",
      "answer": "Sudut sehadap sama besar; sudut dalam sepihak berjumlah 180°."
    },
    "objectives": [
      "Mengenali pasangan sudut pada perpotongan garis.",
      "Menggunakan sifat garis sejajar yang dipotong transversal.",
      "Menentukan besar sudut dari hubungan 180° atau kesamaan sudut."
    ],
    "prerequisites": [
      "Pengertian sudut dan derajat.",
      "Operasi penjumlahan/pengurangan sampai 180."
    ],
    "deepDive": [
      "Pada dua garis yang berpotongan, sudut bertolak belakang sama besar, sedangkan sudut yang bersebelahan pada satu garis lurus berjumlah 180°.",
      "Jika dua garis sejajar dipotong sebuah garis transversal, muncul pola sudut: sehadap sama besar, dalam berseberangan sama besar, dan dalam sepihak berjumlah 180°.",
      "Gambar perspektif dapat menipu. Gunakan tanda panah garis sejajar dan posisi sudut, bukan perkiraan mata, untuk menentukan hubungan yang benar."
    ],
    "steps": [
      "Cari tanda garis sejajar atau informasi kesejajaran.",
      "Identifikasi jenis pasangan sudut.",
      "Gunakan kesamaan sudut atau jumlah 180°.",
      "Cek apakah hasil sudut masuk rentang 0° sampai 180° untuk sudut biasa."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Berpelurus",
        "problem": "Sebuah sudut 68°. Tentukan sudut yang berpelurus dengannya.",
        "steps": [
          "Sudut berpelurus berjumlah 180°.",
          "180° − 68° = 112°."
        ],
        "result": "112°."
      },
      {
        "title": "Contoh 2 · Bertolak belakang",
        "problem": "Dua garis berpotongan. Salah satu sudut 47°. Tentukan sudut di seberangnya.",
        "steps": [
          "Sudut yang tepat berseberangan adalah sudut bertolak belakang.",
          "Sudut bertolak belakang sama besar."
        ],
        "result": "47°."
      }
    ],
    "glossary": [
      {
        "term": "Transversal",
        "meaning": "Garis yang memotong dua garis lain."
      },
      {
        "term": "Sehadap",
        "meaning": "Pasangan sudut pada posisi yang bersesuaian."
      },
      {
        "term": "Berpelurus",
        "meaning": "Dua sudut berdekatan dengan jumlah 180°."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "bangun-ruang-garis-bidang",
    "group": "Geometri dan Pengukuran",
    "title": "Bangun Ruang: Hubungan Garis dan Bidang",
    "pages": "11",
    "level": "Menengah",
    "summary": "Mengenali garis, bidang, dan hubungan posisi pada bangun ruang seperti kubus atau balok.",
    "concepts": [
      "Dua garis dapat sejajar, berpotongan, atau bersilangan.",
      "Garis dapat terletak pada bidang, memotong bidang, atau sejajar bidang.",
      "Dua bidang dapat sejajar atau berpotongan pada sebuah garis.",
      "Gunakan penamaan titik sudut secara konsisten saat membaca gambar."
    ],
    "analogy": "Sebuah kamar berbentuk balok: lantai dan plafon adalah bidang sejajar, sedangkan dua dinding yang bertemu memiliki garis perpotongan di sudut kamar.",
    "formulas": [
      "Tidak ada satu rumus utama; fokus pada relasi posisi geometris."
    ],
    "example": "Pada balok ABCD.EFGH, bidang ABCD sejajar dengan EFGH. Rusuk AB sejajar dengan CD, EF, dan HG.",
    "traps": [
      "Menentukan hubungan hanya dari tampilan perspektif gambar.",
      "Lupa bahwa garis bersilangan tidak sejajar dan tidak berpotongan karena berada pada bidang berbeda.",
      "Keliru membaca urutan nama titik."
    ],
    "quiz": [
      {
        "q": "Pada kubus ABCD.EFGH, bidang ABCD dan EFGH adalah ...",
        "options": [
          "berpotongan",
          "sejajar",
          "tegak lurus selalu",
          "sama"
        ],
        "answer": 1,
        "explain": "Keduanya merupakan sisi berhadapan."
      },
      {
        "q": "Dua garis yang tidak sejajar, tidak berpotongan, dan tidak sebidang disebut ...",
        "options": [
          "sehadap",
          "bersilangan",
          "berpelurus",
          "sejajar"
        ],
        "answer": 1,
        "explain": "Itulah definisi garis bersilangan."
      }
    ],
    "essay": {
      "q": "Pada sebuah balok, berikan contoh dua bidang sejajar dan dua bidang yang berpotongan.",
      "answer": "Contoh: alas dan tutup sejajar; alas dan salah satu dinding berpotongan pada sebuah rusuk."
    },
    "objectives": [
      "Mengenali rusuk, titik sudut, dan bidang pada balok/kubus.",
      "Membedakan garis sejajar, berpotongan, dan bersilangan.",
      "Menentukan hubungan garis dengan bidang dan bidang dengan bidang."
    ],
    "prerequisites": [
      "Nama titik dan ruas garis.",
      "Konsep garis sejajar dan tegak lurus pada bidang datar."
    ],
    "deepDive": [
      "Pada bangun ruang, dua garis yang tampak berpotongan di gambar perspektif belum tentu benar-benar berpotongan. Posisi tiga dimensinya harus diperiksa.",
      "Garis bersilangan adalah dua garis yang tidak sejajar, tidak berpotongan, dan tidak berada pada satu bidang yang sama. Hubungan ini hanya muncul dalam ruang tiga dimensi.",
      "Dua bidang yang sejajar tidak mempunyai garis perpotongan, sedangkan dua bidang yang tidak sejajar dapat berpotongan sepanjang sebuah garis."
    ],
    "steps": [
      "Baca penamaan titik bangun secara konsisten.",
      "Tentukan apakah dua garis berada pada bidang yang sama.",
      "Periksa apakah garis sejajar atau bertemu di satu titik.",
      "Untuk bidang, cari sisi berhadapan atau garis perpotongannya."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Bidang sejajar",
        "problem": "Pada balok ABCD.EFGH, tentukan hubungan bidang ABCD dan EFGH.",
        "steps": [
          "ABCD adalah salah satu sisi.",
          "EFGH adalah sisi yang berhadapan.",
          "Sisi berhadapan pada balok sejajar."
        ],
        "result": "Bidang ABCD ∥ EFGH."
      },
      {
        "title": "Contoh 2 · Garis sejajar",
        "problem": "Pada balok ABCD.EFGH, sebutkan garis yang sejajar AB.",
        "steps": [
          "Cari rusuk dengan arah yang sama dengan AB.",
          "Pada penamaan standar balok, pasangan arah yang sama adalah CD, EF, dan HG."
        ],
        "result": "AB ∥ CD ∥ EF ∥ HG."
      }
    ],
    "glossary": [
      {
        "term": "Garis bersilangan",
        "meaning": "Dua garis tidak sejajar, tidak berpotongan, dan tidak sebidang."
      },
      {
        "term": "Bidang",
        "meaning": "Permukaan datar yang meluas dua dimensi."
      },
      {
        "term": "Rusuk",
        "meaning": "Ruas garis pertemuan dua sisi bangun ruang."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "kesebangunan",
    "group": "Geometri dan Pengukuran",
    "title": "Kesebangunan",
    "pages": "12",
    "level": "Menengah",
    "summary": "Menggunakan perbandingan sisi-sisi bersesuaian pada bangun yang sebangun.",
    "concepts": [
      "Bangun sebangun memiliki bentuk sama, tetapi ukuran boleh berbeda.",
      "Sudut-sudut bersesuaian sama besar.",
      "Perbandingan sisi-sisi bersesuaian bernilai tetap.",
      "Identifikasi pasangan titik yang bersesuaian sebelum membuat proporsi."
    ],
    "analogy": "Foto yang diperbesar tanpa diregangkan tetap sebangun dengan foto asli; semua panjang berubah dengan faktor skala yang sama.",
    "formulas": [
      "AB/DE = BC/EF = AC/DF = faktor skala"
    ],
    "example": "Segitiga kecil memiliki sisi 3,4,5. Jika faktor skala 2, segitiga sebangunnya memiliki sisi 6,8,10.",
    "traps": [
      "Memasangkan sisi yang tidak bersesuaian.",
      "Mencampur kesebangunan dengan kekongruenan.",
      "Lupa bahwa faktor skala panjang berbeda dengan faktor skala luas."
    ],
    "quiz": [
      {
        "q": "Segitiga dengan sisi 3,4,5 diperbesar faktor 3. Sisi terpanjang menjadi ...",
        "options": [
          "8",
          "10",
          "12",
          "15"
        ],
        "answer": 3,
        "explain": "5×3=15."
      },
      {
        "q": "Jika dua bangun sebangun dengan faktor skala panjang 2, faktor skala luas adalah ...",
        "options": [
          "2",
          "4",
          "6",
          "8"
        ],
        "answer": 1,
        "explain": "Luas berubah menurut kuadrat faktor skala: 2²=4."
      }
    ],
    "essay": {
      "q": "Sebuah segitiga memiliki sisi 6,8,10. Segitiga sebangun lain memiliki sisi terpendek 9. Tentukan dua sisi lainnya.",
      "answer": "Faktor skala 9/6=1,5, sehingga sisi lain 12 dan 15."
    },
    "objectives": [
      "Mengenali ciri bangun sebangun.",
      "Menentukan sisi-sisi yang bersesuaian.",
      "Menggunakan faktor skala untuk panjang, keliling, dan luas."
    ],
    "prerequisites": [
      "Perbandingan dan proporsi.",
      "Sifat dasar segitiga dan bangun datar."
    ],
    "deepDive": [
      "Dua bangun sebangun memiliki bentuk yang sama: sudut bersesuaian sama besar dan perbandingan sisi bersesuaian tetap. Ukurannya tidak harus sama.",
      "Faktor skala panjang k mengalikan semua panjang dengan k. Keliling juga dikali k, sedangkan luas dikali k² karena luas melibatkan dua dimensi panjang.",
      "Kesalahan umum adalah memasangkan sisi berdasarkan posisi gambar, bukan berdasarkan sudut atau urutan titik yang bersesuaian."
    ],
    "steps": [
      "Tentukan pasangan sudut atau titik yang bersesuaian.",
      "Pasangkan sisi sesuai urutan tersebut.",
      "Bentuk perbandingan dengan orientasi yang konsisten.",
      "Gunakan faktor skala yang sama untuk sisi lain."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Faktor skala",
        "problem": "Segitiga dengan sisi 3, 4, 5 diperbesar faktor 2,5.",
        "steps": [
          "Kalikan setiap sisi dengan 2,5.",
          "3 × 2,5 = 7,5; 4 × 2,5 = 10; 5 × 2,5 = 12,5."
        ],
        "result": "Sisi baru: 7,5; 10; 12,5."
      },
      {
        "title": "Contoh 2 · Skala luas",
        "problem": "Dua bangun sebangun memiliki faktor skala panjang 3. Jika luas bangun kecil 8 cm², berapa luas bangun besar?",
        "steps": [
          "Faktor skala luas = 3² = 9.",
          "8 × 9 = 72."
        ],
        "result": "72 cm²."
      }
    ],
    "glossary": [
      {
        "term": "Faktor skala",
        "meaning": "Perbandingan panjang bangun baru terhadap bangun asal."
      },
      {
        "term": "Sisi bersesuaian",
        "meaning": "Sisi yang menempati posisi yang sama pada bangun sebangun."
      },
      {
        "term": "Kongruen",
        "meaning": "Bentuk dan ukuran sama; lebih kuat daripada sebangun."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "pythagoras",
    "group": "Geometri dan Pengukuran",
    "title": "Teorema Pythagoras",
    "pages": "13",
    "level": "Dasar",
    "summary": "Menghitung panjang sisi segitiga siku-siku dan menerapkannya pada jarak atau diagonal.",
    "concepts": [
      "Teorema Pythagoras berlaku pada segitiga siku-siku.",
      "Sisi miring (hipotenusa) adalah sisi di depan sudut 90° dan merupakan sisi terpanjang.",
      "Kuadrat sisi miring sama dengan jumlah kuadrat dua sisi siku-siku.",
      "Banyak soal jarak dapat diubah menjadi segitiga siku-siku."
    ],
    "analogy": "Jika berjalan 3 meter ke timur lalu 4 meter ke utara, jarak lurus dari titik awal ke akhir adalah 5 meter.",
    "formulas": [
      "a²+b²=c²"
    ],
    "example": "Kaki segitiga 6 cm dan 8 cm. c=√(36+64)=√100=10 cm.",
    "traps": [
      "Menempatkan sisi yang bukan hipotenusa sebagai c.",
      "Menjumlahkan panjang langsung, bukan kuadratnya.",
      "Lupa mengambil akar setelah mendapatkan c²."
    ],
    "quiz": [
      {
        "q": "Segitiga siku-siku dengan kaki 5 dan 12 memiliki sisi miring ...",
        "options": [
          "13",
          "15",
          "17",
          "19"
        ],
        "answer": 0,
        "explain": "5²+12²=25+144=169=13²."
      },
      {
        "q": "Jika c=10 dan salah satu kaki 6, kaki lainnya ...",
        "options": [
          "4",
          "6",
          "8",
          "12"
        ],
        "answer": 2,
        "explain": "b²=100-36=64 → b=8."
      }
    ],
    "essay": {
      "q": "Jelaskan mengapa diagonal persegi panjang dapat dihitung dengan Teorema Pythagoras.",
      "answer": "Diagonal bersama panjang dan lebar membentuk segitiga siku-siku, sehingga d²=p²+l²."
    },
    "objectives": [
      "Mengidentifikasi hipotenusa pada segitiga siku-siku.",
      "Menghitung sisi yang belum diketahui dengan Teorema Pythagoras.",
      "Menerapkan Pythagoras pada diagonal dan jarak."
    ],
    "prerequisites": [
      "Kuadrat dan akar kuadrat.",
      "Segitiga siku-siku."
    ],
    "deepDive": [
      "Teorema Pythagoras hanya berlaku langsung untuk segitiga siku-siku. Jika c adalah hipotenusa, maka a² + b² = c². Hipotenusa selalu berhadapan dengan sudut 90° dan paling panjang.",
      "Jika yang dicari salah satu kaki segitiga, rumus diatur menjadi a² = c² − b². Jadi tidak selalu semua kuadrat dijumlahkan.",
      "Triple Pythagoras seperti 3-4-5, 5-12-13, dan 8-15-17 sering mempercepat soal, tetapi tetap pastikan sisi terpanjang menjadi hipotenusa."
    ],
    "steps": [
      "Pastikan ada sudut 90°.",
      "Tentukan hipotenusa c.",
      "Substitusikan panjang ke a² + b² = c².",
      "Ambil akar positif karena panjang tidak negatif."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Mencari hipotenusa",
        "problem": "Kaki segitiga 9 cm dan 12 cm.",
        "steps": [
          "c² = 9² + 12².",
          "c² = 81 + 144 = 225.",
          "c = √225."
        ],
        "result": "c = 15 cm."
      },
      {
        "title": "Contoh 2 · Mencari kaki",
        "problem": "Hipotenusa 13 cm dan satu kaki 5 cm.",
        "steps": [
          "b² = 13² − 5².",
          "b² = 169 − 25 = 144.",
          "b = √144."
        ],
        "result": "b = 12 cm."
      }
    ],
    "glossary": [
      {
        "term": "Hipotenusa",
        "meaning": "Sisi di depan sudut siku-siku; sisi terpanjang."
      },
      {
        "term": "Kuadrat",
        "meaning": "Hasil bilangan dikali dirinya sendiri."
      },
      {
        "term": "Triple Pythagoras",
        "meaning": "Tiga bilangan bulat yang memenuhi a² + b² = c²."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "transformasi",
    "group": "Geometri dan Pengukuran",
    "title": "Transformasi Geometri",
    "pages": "14–16",
    "level": "Menengah",
    "summary": "Menentukan bayangan titik akibat translasi, refleksi, rotasi, dilatasi, dan komposisi transformasi.",
    "concepts": [
      "Translasi menggeser titik dengan vektor tertentu.",
      "Refleksi mencerminkan titik terhadap garis/sumbu.",
      "Rotasi memutar titik terhadap pusat dengan sudut tertentu.",
      "Komposisi transformasi dikerjakan sesuai urutan yang diberikan."
    ],
    "analogy": "Mengedit gambar: geser, mirror, rotate, dan resize adalah padanan visual dari translasi, refleksi, rotasi, dan dilatasi.",
    "formulas": [
      "Translasi (a,b): (x,y)→(x+a,y+b)",
      "Refleksi sumbu-x: (x,y)→(x,-y)",
      "Refleksi sumbu-y: (x,y)→(-x,y)",
      "Rotasi 90° CCW: (x,y)→(-y,x)"
    ],
    "example": "Titik (2,3) diputar 90° berlawanan arah jarum jam terhadap O menjadi (-3,2).",
    "traps": [
      "Mencampur rotasi searah dan berlawanan arah jarum jam.",
      "Mengerjakan komposisi dengan urutan terbalik.",
      "Lupa pusat rotasi atau garis refleksi."
    ],
    "quiz": [
      {
        "q": "Refleksi titik (3,-2) terhadap sumbu-x menjadi ...",
        "options": [
          "(-3,-2)",
          "(3,2)",
          "(-3,2)",
          "(2,3)"
        ],
        "answer": 1,
        "explain": "Refleksi sumbu-x mengubah tanda y."
      },
      {
        "q": "Translasi (2,-1) pada titik (4,5) menghasilkan ...",
        "options": [
          "(2,6)",
          "(6,4)",
          "(6,6)",
          "(2,4)"
        ],
        "answer": 1,
        "explain": "(4+2,5-1)=(6,4)."
      }
    ],
    "essay": {
      "q": "Titik A(1,2) direfleksikan terhadap sumbu-y lalu ditranslasi (3,1). Tentukan hasil akhirnya.",
      "answer": "Refleksi: (-1,2), lalu translasi: (2,3)."
    },
    "objectives": [
      "Menentukan bayangan titik akibat translasi, refleksi, rotasi, dan dilatasi.",
      "Menerapkan transformasi berurutan sesuai urutan.",
      "Membaca perubahan koordinat secara sistematis."
    ],
    "prerequisites": [
      "Koordinat Cartesius.",
      "Bilangan positif-negatif dan pasangan berurutan."
    ],
    "deepDive": [
      "Transformasi mengubah posisi atau ukuran tanpa harus mengubah identitas objek. Translasi menggeser, refleksi mencerminkan, rotasi memutar, dan dilatasi mengubah skala.",
      "Rotasi 90° terhadap titik O memiliki aturan koordinat yang berbeda untuk arah jarum jam dan berlawanan arah jarum jam. Tanda koordinat harus diperhatikan dengan ketat.",
      "Pada komposisi transformasi, hasil tahap pertama menjadi input tahap kedua. Mengubah urutan biasanya mengubah hasil akhir."
    ],
    "steps": [
      "Tulis koordinat awal dengan jelas.",
      "Terapkan aturan transformasi pertama.",
      "Gunakan hasil itu untuk transformasi berikutnya.",
      "Plot atau cek kuadran hasil sebagai verifikasi."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Refleksi",
        "problem": "Refleksikan A(4, −3) terhadap sumbu-x.",
        "steps": [
          "Refleksi sumbu-x mempertahankan x.",
          "Tanda koordinat y dibalik: −3 menjadi 3."
        ],
        "result": "A′(4, 3)."
      },
      {
        "title": "Contoh 2 · Komposisi",
        "problem": "A(1,2) direfleksikan terhadap sumbu-y, lalu ditranslasi (3,1).",
        "steps": [
          "Refleksi sumbu-y: (1,2) → (−1,2).",
          "Translasi: (−1 + 3, 2 + 1)."
        ],
        "result": "A″(2,3)."
      }
    ],
    "glossary": [
      {
        "term": "Translasi",
        "meaning": "Pergeseran dengan vektor tertentu."
      },
      {
        "term": "Refleksi",
        "meaning": "Pencerminan terhadap garis atau sumbu."
      },
      {
        "term": "Rotasi",
        "meaning": "Perputaran terhadap pusat dengan sudut tertentu."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "jarak-ruang",
    "group": "Geometri dan Pengukuran",
    "title": "Jarak dalam Ruang",
    "pages": "17",
    "level": "Menengah",
    "summary": "Menghitung jarak antara dua titik pada bangun ruang dengan memanfaatkan Pythagoras bertahap.",
    "concepts": [
      "Jarak dua titik adalah panjang ruas garis lurus yang menghubungkannya.",
      "Pada balok, diagonal bidang dihitung lebih dulu jika diperlukan.",
      "Diagonal ruang dapat dihitung dari tiga ukuran saling tegak lurus.",
      "Gambar sketsa membantu menentukan segitiga siku-siku yang relevan."
    ],
    "analogy": "Tali dari satu sudut kamar ke sudut seberang dapat dihitung dengan panjang, lebar, dan tinggi kamar.",
    "formulas": [
      "Diagonal bidang = √(p²+l²)",
      "Diagonal ruang = √(p²+l²+t²)"
    ],
    "example": "Balok 3×4×12 memiliki diagonal ruang √(9+16+144)=√169=13.",
    "traps": [
      "Menjumlahkan p+l+t tanpa Pythagoras.",
      "Menggunakan ukuran yang tidak saling tegak lurus.",
      "Salah membedakan diagonal bidang dan diagonal ruang."
    ],
    "quiz": [
      {
        "q": "Diagonal ruang kubus sisi 2 adalah ...",
        "options": [
          "2√2",
          "2√3",
          "4",
          "4√2"
        ],
        "answer": 1,
        "explain": "d=√(2²+2²+2²)=2√3."
      },
      {
        "q": "Diagonal bidang persegi panjang 6×8 adalah ...",
        "options": [
          "10",
          "12",
          "14",
          "48"
        ],
        "answer": 0,
        "explain": "√(36+64)=10."
      }
    ],
    "essay": {
      "q": "Hitung diagonal ruang balok dengan p=6, l=8, t=24.",
      "answer": "√(36+64+576)=√676=26."
    },
    "objectives": [
      "Menghitung diagonal bidang.",
      "Menghitung diagonal ruang balok atau kubus.",
      "Memecah masalah jarak ruang menjadi Pythagoras bertahap."
    ],
    "prerequisites": [
      "Teorema Pythagoras.",
      "Unsur balok dan kubus."
    ],
    "deepDive": [
      "Jarak dua titik dalam ruang adalah panjang ruas garis lurus yang menghubungkan keduanya. Pada balok, ruas itu sering berupa diagonal bidang atau diagonal ruang.",
      "Diagonal ruang balok dapat diperoleh dengan Pythagoras dua kali, yang diringkas menjadi d = √(p² + l² + t²). Ketiga ukuran harus saling tegak lurus.",
      "Untuk kubus sisi s, diagonal bidang adalah s√2 dan diagonal ruang adalah s√3. Ini berasal dari substitusi panjang yang sama ke rumus Pythagoras."
    ],
    "steps": [
      "Identifikasi titik awal dan akhir.",
      "Cari apakah jarak berada dalam satu bidang atau menembus ruang.",
      "Gunakan Pythagoras pada segitiga siku-siku yang sesuai.",
      "Sederhanakan akar jika memungkinkan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Diagonal ruang balok",
        "problem": "Balok berukuran 3 cm × 4 cm × 12 cm.",
        "steps": [
          "d² = 3² + 4² + 12².",
          "d² = 9 + 16 + 144 = 169.",
          "d = √169."
        ],
        "result": "d = 13 cm."
      },
      {
        "title": "Contoh 2 · Kubus",
        "problem": "Kubus memiliki sisi 6 cm. Tentukan diagonal ruangnya.",
        "steps": [
          "d = s√3.",
          "Substitusi s = 6."
        ],
        "result": "d = 6√3 cm."
      }
    ],
    "glossary": [
      {
        "term": "Diagonal bidang",
        "meaning": "Ruas penghubung dua titik sudut berhadapan pada satu sisi."
      },
      {
        "term": "Diagonal ruang",
        "meaning": "Ruas penghubung dua titik sudut berhadapan melalui bagian dalam bangun."
      },
      {
        "term": "Jarak",
        "meaning": "Panjang ruas garis terpendek antara dua titik."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "keliling-luas",
    "group": "Geometri dan Pengukuran",
    "title": "Keliling dan Luas Bangun Datar",
    "pages": "18–20",
    "level": "Menengah",
    "summary": "Menghitung keliling dan luas bangun datar tunggal maupun gabungan, termasuk segitiga, lingkaran, dan layang-layang.",
    "concepts": [
      "Keliling adalah total panjang batas luar bangun.",
      "Luas adalah ukuran daerah yang tertutup oleh bangun.",
      "Bangun gabungan dapat dipecah menjadi bentuk sederhana.",
      "Pada soal ornamen, teliti bagian mana yang termasuk batas luar dan bagian mana yang tidak."
    ],
    "analogy": "Pagar yang mengelilingi taman berkaitan dengan keliling, sedangkan rumput yang menutupi taman berkaitan dengan luas.",
    "formulas": [
      "Segitiga: L=1/2×a×t",
      "Lingkaran: K=2πr, L=πr²",
      "Layang-layang: L=1/2×d₁×d₂"
    ],
    "example": "Lingkaran berjari-jari 7 cm: K=14π cm dan L=49π cm².",
    "traps": [
      "Menambahkan garis bagian dalam ke keliling luar.",
      "Menggunakan diameter sebagai radius.",
      "Salah satuan: keliling satuan panjang, luas satuan persegi."
    ],
    "quiz": [
      {
        "q": "Keliling lingkaran r=7 dengan π=22/7 adalah ...",
        "options": [
          "22",
          "44",
          "49",
          "154"
        ],
        "answer": 1,
        "explain": "2×22/7×7=44."
      },
      {
        "q": "Luas segitiga dengan alas 10 dan tinggi 6 adalah ...",
        "options": [
          "16",
          "30",
          "60",
          "120"
        ],
        "answer": 1,
        "explain": "1/2×10×6=30."
      }
    ],
    "essay": {
      "q": "Sebuah taman terdiri dari persegi panjang 10×6 dan setengah lingkaran berdiameter 6 pada salah satu sisinya. Jelaskan cara menghitung luas totalnya.",
      "answer": "Luas total = 10×6 + 1/2×π×3² = 60 + 4,5π."
    },
    "objectives": [
      "Membedakan keliling dan luas.",
      "Menghitung keliling/luas bangun dasar.",
      "Memecah bangun gabungan menjadi bagian sederhana."
    ],
    "prerequisites": [
      "Operasi bilangan.",
      "Panjang, satuan, dan konsep π."
    ],
    "deepDive": [
      "Keliling mengukur panjang batas luar, sehingga satuannya cm, m, dan sebagainya. Luas mengukur daerah dua dimensi, sehingga satuannya cm², m², dan seterusnya.",
      "Untuk bangun gabungan, tidak semua garis yang terlihat menjadi keliling. Garis di bagian dalam yang merupakan batas antarbagian tidak ikut keliling luar.",
      "Pada lingkaran, r adalah jari-jari dan d = 2r. Kesalahan antara diameter dan jari-jari menyebabkan hasil luas bisa meleset empat kali."
    ],
    "steps": [
      "Identifikasi bentuk dasar penyusun bangun.",
      "Tentukan ukuran yang diketahui dan yang perlu dicari.",
      "Untuk luas, jumlahkan atau kurangkan luas bagian yang sesuai.",
      "Untuk keliling, telusuri hanya batas luar satu putaran penuh."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Lingkaran",
        "problem": "Lingkaran berjari-jari 7 cm. Gunakan π = 22/7.",
        "steps": [
          "Keliling = 2πr = 2 × 22/7 × 7.",
          "Luas = πr² = 22/7 × 7²."
        ],
        "result": "Keliling 44 cm dan luas 154 cm²."
      },
      {
        "title": "Contoh 2 · Segitiga",
        "problem": "Segitiga memiliki alas 12 cm dan tinggi 9 cm.",
        "steps": [
          "L = 1/2 × alas × tinggi.",
          "L = 1/2 × 12 × 9."
        ],
        "result": "L = 54 cm²."
      }
    ],
    "glossary": [
      {
        "term": "Keliling",
        "meaning": "Total panjang batas luar bangun."
      },
      {
        "term": "Luas",
        "meaning": "Ukuran daerah yang ditutupi bangun."
      },
      {
        "term": "π",
        "meaning": "Konstanta perbandingan keliling lingkaran terhadap diameternya."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "volume-bangun-ruang",
    "group": "Geometri dan Pengukuran",
    "title": "Volume Bangun Ruang",
    "pages": "21",
    "level": "Menengah",
    "summary": "Menggunakan volume balok/kubus dan konsep penyusunan benda untuk menentukan kapasitas.",
    "concepts": [
      "Volume mengukur kapasitas ruang tiga dimensi.",
      "Untuk balok, volume adalah panjang×lebar×tinggi.",
      "Jumlah benda yang muat idealnya dihitung dari banyak susunan pada setiap dimensi.",
      "Orientasi benda dapat memengaruhi jumlah yang muat."
    ],
    "analogy": "Penyusunan kardus ke dalam truk dapat dipandang sebagai pengisian ruang besar oleh balok-balok kecil. Banyak susunan dihitung pada setiap arah lalu dikalikan.",
    "formulas": [
      "V_balok = p×l×t",
      "Jumlah kotak = (p_besar/p_kecil)×(l_besar/l_kecil)×(t_besar/t_kecil), jika ukuran membagi tepat"
    ],
    "example": "Ruang 240×150×120 cm diisi kardus 30×20×20 cm pada orientasi yang sesuai: hitung jumlah pada tiap arah lalu kalikan.",
    "traps": [
      "Membagi volume saja tanpa memeriksa orientasi dan keterisian dimensi.",
      "Mencampur satuan cm dan m.",
      "Tidak mengikuti syarat posisi kardus pada soal."
    ],
    "quiz": [
      {
        "q": "Volume balok 10×5×4 adalah ...",
        "options": [
          "19",
          "50",
          "100",
          "200"
        ],
        "answer": 3,
        "explain": "10×5×4=200."
      },
      {
        "q": "Kotak besar 12×8×6 diisi kubus sisi 2. Banyak kubus ...",
        "options": [
          "36",
          "48",
          "72",
          "144"
        ],
        "answer": 2,
        "explain": "6×4×3=72."
      }
    ],
    "essay": {
      "q": "Jelaskan mengapa hanya membagi volume ruang dengan volume kardus belum tentu cukup untuk menentukan banyak kardus yang benar-benar muat.",
      "answer": "Karena dimensi dan orientasi kardus dapat membuat ruang tersisa yang tidak dapat diisi walaupun volume total tampak cukup."
    },
    "objectives": [
      "Menghitung volume balok dan kubus.",
      "Menentukan banyak benda kecil yang dapat disusun dalam ruang besar.",
      "Memeriksa orientasi dan kesesuaian dimensi saat packing."
    ],
    "prerequisites": [
      "Perkalian tiga bilangan.",
      "Konversi satuan panjang."
    ],
    "deepDive": [
      "Volume balok adalah hasil kali tiga ukuran yang saling tegak lurus: panjang, lebar, dan tinggi. Satuan volume berbentuk kubik, misalnya cm³.",
      "Pada masalah penyusunan kardus, membagi volume besar dengan volume kecil memberi batas teoritis, tetapi jumlah nyata juga bergantung pada apakah dimensi kardus dapat tersusun sesuai arah yang diizinkan.",
      "Jika ukuran kotak kecil membagi tepat setiap dimensi ruang, jumlah kotak dapat dihitung dari banyak posisi pada panjang × lebar × tinggi."
    ],
    "steps": [
      "Samakan semua satuan.",
      "Catat dimensi ruang besar dan benda kecil.",
      "Tentukan orientasi benda yang diizinkan.",
      "Hitung banyak susunan pada tiap arah lalu kalikan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Volume balok",
        "problem": "Balok berukuran 12 cm × 5 cm × 4 cm.",
        "steps": [
          "V = p × l × t.",
          "V = 12 × 5 × 4."
        ],
        "result": "V = 240 cm³."
      },
      {
        "title": "Contoh 2 · Packing",
        "problem": "Kotak 12 × 8 × 6 diisi kubus sisi 2.",
        "steps": [
          "Sepanjang 12 muat 6 kubus.",
          "Sepanjang 8 muat 4 kubus.",
          "Sepanjang 6 muat 3 kubus.",
          "Jumlah = 6 × 4 × 3."
        ],
        "result": "72 kubus."
      }
    ],
    "glossary": [
      {
        "term": "Volume",
        "meaning": "Ukuran kapasitas ruang tiga dimensi."
      },
      {
        "term": "Orientasi",
        "meaning": "Arah penempatan suatu benda."
      },
      {
        "term": "cm³",
        "meaning": "Satuan volume kubik sentimeter."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "luas-permukaan",
    "group": "Geometri dan Pengukuran",
    "title": "Luas Permukaan Bangun Ruang",
    "pages": "22–23",
    "level": "Menengah",
    "summary": "Menghitung luas permukaan, khususnya tabung tanpa tutup, dan menghubungkannya dengan kebutuhan bahan.",
    "concepts": [
      "Luas permukaan adalah jumlah luas semua bagian luar yang akan ditutup.",
      "Selimut tabung jika dibentangkan menjadi persegi panjang dengan panjang keliling alas dan tinggi tabung.",
      "Jika tabung tanpa tutup, jangan memasukkan luas lingkaran tutup.",
      "Untuk membeli bahan per lembar, jumlah lembar harus dibulatkan ke atas."
    ],
    "analogy": "Menempel stiker pada lampu tabung seperti membungkus kaleng. Yang dihitung adalah area yang benar-benar tertutup stiker.",
    "formulas": [
      "Selimut tabung = 2πrh",
      "Luas tabung tanpa tutup = 2πrh + πr² (jika alas tertutup)"
    ],
    "example": "Tabung diameter 14 cm dan tinggi 25 cm. Selimut = π×14×25 = 350π cm².",
    "traps": [
      "Menggunakan diameter sebagai r.",
      "Menambahkan dua tutup padahal objek tanpa tutup.",
      "Membulatkan jumlah lembar bahan ke bawah."
    ],
    "quiz": [
      {
        "q": "Selimut tabung r=5, t=10 adalah ...",
        "options": [
          "50π",
          "100π",
          "150π",
          "250π"
        ],
        "answer": 1,
        "explain": "2π×5×10=100π."
      },
      {
        "q": "Kebutuhan bahan 650 cm², tiap lembar 300 cm². Minimal lembar ...",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "explain": "650/300≈2,17 sehingga harus membeli 3 lembar."
      }
    ],
    "essay": {
      "q": "Sebuah tabung tanpa tutup memiliki r=7 dan t=20. Tuliskan bentuk luas permukaan yang harus dilapisi.",
      "answer": "Selimut + satu alas = 2π(7)(20)+π(7²)=280π+49π=329π."
    },
    "objectives": [
      "Membedakan luas permukaan total dan selimut.",
      "Menghitung luas permukaan tabung sesuai bagian yang tertutup.",
      "Mengonversi kebutuhan luas menjadi jumlah lembar bahan."
    ],
    "prerequisites": [
      "Keliling dan luas lingkaran.",
      "Pembulatan ke atas."
    ],
    "deepDive": [
      "Jika selimut tabung dibentangkan, bentuknya persegi panjang. Panjang persegi panjang sama dengan keliling alas 2πr dan lebarnya sama dengan tinggi t, sehingga luas selimut 2πrt.",
      "Luas permukaan bergantung pada bagian yang benar-benar ada. Tabung tanpa tutup hanya memiliki selimut dan satu alas; tabung tertutup memiliki dua alas.",
      "Pada pembelian stiker atau bahan per lembar, hasil pembagian luas kebutuhan dengan kapasitas per lembar harus dibulatkan ke atas karena tidak bisa membeli sebagian lembar jika toko menjual utuh."
    ],
    "steps": [
      "Tentukan bagian permukaan yang harus dihitung.",
      "Ubah diameter menjadi jari-jari jika perlu.",
      "Hitung selimut dan alas/tutup yang relevan.",
      "Bagi dengan luas per lembar dan bulatkan ke atas untuk kebutuhan minimum."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Selimut tabung",
        "problem": "Tabung r = 5 cm dan t = 12 cm.",
        "steps": [
          "L_selimut = 2πrt.",
          "= 2π(5)(12)."
        ],
        "result": "L_selimut = 120π cm²."
      },
      {
        "title": "Contoh 2 · Bahan per lembar",
        "problem": "Diperlukan 850 cm² stiker dan satu lembar menutup 300 cm².",
        "steps": [
          "850 ÷ 300 = 2,83...",
          "Karena harus membeli lembar utuh, bulatkan ke atas."
        ],
        "result": "Minimal 3 lembar."
      }
    ],
    "glossary": [
      {
        "term": "Selimut tabung",
        "meaning": "Permukaan lengkung samping tabung."
      },
      {
        "term": "Luas permukaan",
        "meaning": "Jumlah luas semua permukaan luar yang dihitung."
      },
      {
        "term": "Pembulatan ke atas",
        "meaning": "Menaikkan hasil ke bilangan bulat berikutnya untuk kebutuhan minimum."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "trigonometri",
    "group": "Geometri dan Pengukuran",
    "title": "Perbandingan Trigonometri",
    "pages": "24",
    "level": "Menengah",
    "summary": "Memahami sin, cos, dan tan pada segitiga siku-siku serta hubungan sudut-sudut yang saling melengkapi.",
    "concepts": [
      "Terhadap sudut tertentu: sinus = depan/miring, cosinus = samping/miring, tangen = depan/samping.",
      "Sisi depan dan samping bergantung pada sudut yang sedang dilihat.",
      "Hipotenusa selalu sisi di depan sudut 90°.",
      "Untuk dua sudut lancip pada segitiga siku-siku, α+β=90° sehingga sin α = cos β."
    ],
    "analogy": "Saat menaiki tangga, tan sudut kemiringan membandingkan kenaikan vertikal terhadap jarak mendatar.",
    "formulas": [
      "sin θ = depan/miring",
      "cos θ = samping/miring",
      "tan θ = depan/samping"
    ],
    "example": "Segitiga 3-4-5. Jika sisi depan θ=3 dan samping=4, sinθ=3/5, cosθ=4/5, tanθ=3/4.",
    "traps": [
      "Salah menentukan sisi depan dan samping.",
      "Menganggap sisi depan selalu sisi vertikal.",
      "Tidak memanfaatkan Pythagoras ketika satu sisi belum diketahui."
    ],
    "quiz": [
      {
        "q": "Segitiga 3-4-5, terhadap sudut yang sisi depannya 3, cos θ = ...",
        "options": [
          "3/5",
          "4/5",
          "3/4",
          "4/3"
        ],
        "answer": 1,
        "explain": "cos = samping/miring = 4/5."
      },
      {
        "q": "Jika tan θ = 5/12 dan segitiga siku-siku, sisi miring proporsional dengan ...",
        "options": [
          "7",
          "10",
          "13",
          "17"
        ],
        "answer": 2,
        "explain": "Triple Pythagoras 5-12-13."
      }
    ],
    "essay": {
      "q": "Jelaskan mengapa nilai sin suatu sudut lancip selalu berada antara 0 dan 1.",
      "answer": "Sin=depan/miring. Pada segitiga siku-siku sisi miring adalah sisi terpanjang, sehingga rasio positif itu kurang dari 1."
    },
    "objectives": [
      "Menentukan sisi depan, samping, dan miring relatif terhadap sudut.",
      "Menghitung sin, cos, dan tan pada segitiga siku-siku.",
      "Menggunakan Pythagoras untuk melengkapi sisi sebelum mencari rasio trigonometrik."
    ],
    "prerequisites": [
      "Teorema Pythagoras.",
      "Pecahan dan perbandingan."
    ],
    "deepDive": [
      "Sisi depan dan samping tidak bersifat tetap; keduanya bergantung pada sudut yang sedang diamati. Sisi miring selalu tetap karena merupakan sisi di depan sudut 90°.",
      "Mnemonic yang sering dipakai adalah sin = depan/miring, cos = samping/miring, tan = depan/samping. Yang terpenting bukan hafal kata, tetapi mampu menandai sisi relatif terhadap sudut.",
      "Jika dua sudut lancip α dan β saling melengkapi pada segitiga siku-siku, α + β = 90°. Akibatnya sisi depan α adalah sisi samping β sehingga sin α = cos β."
    ],
    "steps": [
      "Tandai sudut acuan.",
      "Tentukan hipotenusa terlebih dahulu.",
      "Tentukan sisi depan dan sisi samping terhadap sudut acuan.",
      "Pilih rasio sin, cos, atau tan sesuai sisi yang diketahui/ditanya."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Rasio 3-4-5",
        "problem": "Segitiga siku-siku 3-4-5. Terhadap sudut θ, sisi depan 3 dan samping 4.",
        "steps": [
          "sin θ = depan/miring = 3/5.",
          "cos θ = samping/miring = 4/5.",
          "tan θ = depan/samping = 3/4."
        ],
        "result": "sin θ = 3/5, cos θ = 4/5, tan θ = 3/4."
      },
      {
        "title": "Contoh 2 · Cari sisi dulu",
        "problem": "tan θ = 5/12 pada segitiga siku-siku. Tentukan rasio sin θ.",
        "steps": [
          "Ambil depan = 5 dan samping = 12.",
          "Hipotenusa = √(5² + 12²) = 13.",
          "sin θ = depan/miring."
        ],
        "result": "sin θ = 5/13."
      }
    ],
    "glossary": [
      {
        "term": "Sinus",
        "meaning": "Perbandingan sisi depan terhadap miring."
      },
      {
        "term": "Cosinus",
        "meaning": "Perbandingan sisi samping terhadap miring."
      },
      {
        "term": "Tangen",
        "meaning": "Perbandingan sisi depan terhadap samping."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "diagram-grafik",
    "group": "Data dan Peluang",
    "title": "Membaca Diagram dan Grafik",
    "pages": "25",
    "level": "Dasar",
    "summary": "Menginterpretasikan diagram garis, membandingkan tren, dan menilai benar-salah pernyataan berdasarkan data.",
    "concepts": [
      "Baca judul, sumbu, satuan, legenda, dan rentang tahun sebelum menilai data.",
      "Tren naik berarti nilai pada periode berikutnya lebih besar, tetapi bisa saja ada tahun yang turun.",
      "Bandingkan titik data yang tepat, jangan hanya melihat kemiringan garis secara umum.",
      "Untuk pernyataan 'selalu', satu pengecualian saja sudah membuatnya salah."
    ],
    "analogy": "Grafik nilai dapat dipandang sebagai rekaman perubahan dari waktu ke waktu. Kesimpulan harus dibuat dengan membaca setiap titik, bukan hanya nilai awal dan akhir.",
    "formulas": [
      "Perubahan = nilai baru - nilai lama",
      "Persentase perubahan = perubahan/nilai lama × 100%"
    ],
    "example": "Jika data 300, 320, 315, maka tren keseluruhan dari awal ke akhir naik 15, tetapi tidak 'selalu naik' karena sempat turun dari 320 ke 315.",
    "traps": [
      "Mengabaikan skala sumbu.",
      "Menganggap garis yang terlihat curam selalu berarti perubahan besar.",
      "Salah memahami kata mutlak seperti selalu, semua, tidak pernah."
    ],
    "quiz": [
      {
        "q": "Data 10,12,11,15. Pernyataan 'selalu naik' adalah ...",
        "options": [
          "Benar",
          "Salah",
          "Tidak cukup data",
          "Benar jika grafik garis"
        ],
        "answer": 1,
        "explain": "Dari 12 ke 11 terjadi penurunan."
      },
      {
        "q": "Nilai naik dari 80 ke 100. Kenaikan persentasenya ...",
        "options": [
          "20%",
          "25%",
          "80%",
          "125%"
        ],
        "answer": 1,
        "explain": "(20/80)×100%=25%."
      }
    ],
    "essay": {
      "q": "Sebutkan empat hal yang harus diperiksa sebelum menyimpulkan informasi dari grafik.",
      "answer": "Contoh: judul, sumbu, satuan/skala, legenda, rentang waktu, dan titik data."
    },
    "objectives": [
      "Membaca judul, sumbu, skala, dan legenda grafik.",
      "Membandingkan nilai antarperiode atau antarkategori.",
      "Menilai pernyataan “selalu”, “tertinggi”, “menurun”, dan sejenisnya secara teliti."
    ],
    "prerequisites": [
      "Membandingkan bilangan.",
      "Persentase perubahan sederhana."
    ],
    "deepDive": [
      "Grafik adalah representasi visual data. Sebelum menyimpulkan, baca struktur grafik: apa yang diukur, satuannya, periode waktu, dan kategori pada legenda.",
      "Kata “selalu” bersifat sangat kuat. Jika satu tahun saja tidak mengikuti pola, pernyataan “selalu naik” menjadi salah. Sebaliknya, tren keseluruhan bisa naik walaupun ada satu penurunan di tengah.",
      "Skala sumbu dapat membuat perubahan kecil terlihat besar atau perubahan besar terlihat kecil. Karena itu gunakan angka pada sumbu, bukan hanya kemiringan garis."
    ],
    "steps": [
      "Baca judul, sumbu, satuan, dan legenda.",
      "Cari titik data yang relevan dengan pernyataan.",
      "Bandingkan nilai satu per satu, terutama untuk kata “selalu”.",
      "Hitung selisih atau persentase jika diminta."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Menilai “selalu naik”",
        "problem": "Data tahunan: 300, 320, 315, 340. Apakah selalu naik?",
        "steps": [
          "300 → 320 naik.",
          "320 → 315 turun.",
          "Karena ada satu penurunan, kata “selalu” tidak terpenuhi."
        ],
        "result": "Pernyataan “selalu naik” salah."
      },
      {
        "title": "Contoh 2 · Persentase perubahan",
        "problem": "Nilai meningkat dari 80 menjadi 100.",
        "steps": [
          "Kenaikan = 100 − 80 = 20.",
          "Persentase = 20/80 × 100%."
        ],
        "result": "Kenaikan 25%."
      }
    ],
    "glossary": [
      {
        "term": "Legenda",
        "meaning": "Keterangan warna/garis/kategori pada grafik."
      },
      {
        "term": "Tren",
        "meaning": "Arah perubahan umum data."
      },
      {
        "term": "Skala",
        "meaning": "Jarak nilai yang ditunjukkan pada sumbu."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "aturan-pencacahan",
    "group": "Data dan Peluang",
    "title": "Aturan Pencacahan",
    "pages": "26",
    "level": "Menengah",
    "summary": "Menghitung banyak kemungkinan susunan atau pilihan menggunakan aturan penjumlahan, perkalian, permutasi, dan syarat posisi.",
    "concepts": [
      "Aturan perkalian digunakan saat proses terdiri dari beberapa tahap pilihan.",
      "Permutasi digunakan saat urutan penting.",
      "Jika ada syarat seperti satu objek harus berada di antara dua objek lain, tangani syarat tersebut terlebih dahulu.",
      "Gunakan strategi blok ketika beberapa objek harus berdampingan atau memiliki pola posisi tertentu."
    ],
    "analogy": "Menyusun lima stan pedagang seperti mengatur kursi. Jika posisi siapa di tengah atau di antara siapa dibatasi, jumlah susunan berkurang.",
    "formulas": [
      "n! = n×(n-1)×...×1",
      "P(n,r)=n!/(n-r)!"
    ],
    "example": "Empat orang berbeda disusun berbaris: 4!=24 susunan.",
    "traps": [
      "Menggunakan kombinasi padahal urutan penting.",
      "Menghitung susunan yang melanggar syarat.",
      "Tidak memperhitungkan bahwa satu blok bisa mempunyai susunan internal."
    ],
    "quiz": [
      {
        "q": "Banyak susunan 3 orang berbeda dalam satu baris adalah ...",
        "options": [
          "3",
          "6",
          "9",
          "12"
        ],
        "answer": 1,
        "explain": "3!=6."
      },
      {
        "q": "Dari 4 baju dan 3 celana, banyak pasangan pakaian adalah ...",
        "options": [
          "7",
          "12",
          "24",
          "64"
        ],
        "answer": 1,
        "explain": "Aturan perkalian: 4×3=12."
      }
    ],
    "essay": {
      "q": "Ada 5 siswa berbeda. Berapa banyak susunan jika A harus selalu di posisi paling kiri? Jelaskan.",
      "answer": "Posisi A tetap. Empat siswa lain dapat disusun 4!=24 cara."
    },
    "objectives": [
      "Menggunakan aturan perkalian untuk proses bertahap.",
      "Menghitung permutasi saat urutan penting.",
      "Menangani syarat posisi tertentu dalam susunan."
    ],
    "prerequisites": [
      "Perkalian bilangan bulat.",
      "Konsep faktorial."
    ],
    "deepDive": [
      "Aturan pencacahan membantu menghitung banyak kemungkinan tanpa menuliskan semuanya. Jika tahap pertama memiliki a pilihan dan setiap pilihan dilanjutkan b pilihan, totalnya a × b.",
      "Permutasi digunakan ketika urutan mengubah hasil. Menyusun A-B-C berbeda dengan B-A-C. Untuk n objek berbeda yang semuanya disusun, banyaknya n!.",
      "Syarat posisi seperti “A harus di kiri”, “B harus di tengah”, atau “C berada di antara A dan D” sebaiknya ditangani sebelum menghitung susunan bebas yang tersisa."
    ],
    "steps": [
      "Tentukan apakah urutan penting.",
      "Pisahkan proses menjadi tahap atau posisi.",
      "Terapkan syarat tetap terlebih dahulu.",
      "Kalikan jumlah pilihan tiap tahap atau gunakan faktorial."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Faktorial",
        "problem": "Berapa susunan 4 siswa berbeda dalam satu baris?",
        "steps": [
          "Semua 4 siswa digunakan dan urutan penting.",
          "Jumlah susunan = 4!.",
          "4! = 4 × 3 × 2 × 1."
        ],
        "result": "24 susunan."
      },
      {
        "title": "Contoh 2 · Aturan perkalian",
        "problem": "Ada 5 baju dan 3 celana. Berapa pasangan pakaian?",
        "steps": [
          "Untuk setiap baju tersedia 3 pilihan celana.",
          "Total = 5 × 3."
        ],
        "result": "15 pasangan."
      }
    ],
    "glossary": [
      {
        "term": "Faktorial",
        "meaning": "n! = n × (n−1) × ... × 1."
      },
      {
        "term": "Permutasi",
        "meaning": "Susunan objek ketika urutan diperhitungkan."
      },
      {
        "term": "Aturan perkalian",
        "meaning": "Mengalikan banyak pilihan pada tahap-tahap berurutan."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "statistika",
    "group": "Data dan Peluang",
    "title": "Rata-rata, Median, dan Analisis Data",
    "pages": "27",
    "level": "Menengah",
    "summary": "Menggunakan ukuran pemusatan data dan informasi tambahan untuk menentukan nilai yang belum diketahui.",
    "concepts": [
      "Rata-rata adalah jumlah seluruh data dibagi banyak data.",
      "Median adalah nilai tengah setelah data diurutkan.",
      "Untuk banyak data ganjil, median adalah satu nilai tengah; untuk genap, median rata-rata dua nilai tengah.",
      "Informasi seperti batas maksimum dan rata-rata dapat dipakai bersama untuk membatasi nilai yang belum diketahui."
    ],
    "analogy": "Rata-rata nilai kelas memberi gambaran keseluruhan, sedangkan median menunjukkan posisi tengah dan lebih tahan terhadap nilai yang sangat ekstrem.",
    "formulas": [
      "mean = Σx/n",
      "median ganjil = data ke-(n+1)/2 setelah diurutkan"
    ],
    "example": "Data 4,6,8,10,12 memiliki mean 8 dan median 8.",
    "traps": [
      "Mencari median tanpa mengurutkan data.",
      "Mengira mean harus sama dengan salah satu data.",
      "Tidak mengubah informasi rata-rata menjadi jumlah total data."
    ],
    "quiz": [
      {
        "q": "Rata-rata 4,6,8 adalah ...",
        "options": [
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": 1,
        "explain": "(4+6+8)/3=6."
      },
      {
        "q": "Median dari 2,9,4,7,5 adalah ...",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "answer": 1,
        "explain": "Urutkan: 2,4,5,7,9; nilai tengah 5."
      }
    ],
    "essay": {
      "q": "Rata-rata lima bilangan adalah 8. Empat bilangan pertama 5,7,8,9. Tentukan bilangan kelima.",
      "answer": "Jumlah total=40. Empat pertama berjumlah 29, jadi bilangan kelima 11."
    },
    "objectives": [
      "Menghitung rata-rata dan median.",
      "Menentukan data yang hilang dari informasi rata-rata.",
      "Menafsirkan ukuran pemusatan sesuai konteks."
    ],
    "prerequisites": [
      "Penjumlahan dan pembagian.",
      "Mengurutkan bilangan."
    ],
    "deepDive": [
      "Rata-rata atau mean menggunakan seluruh data: jumlah semua nilai dibagi banyak data. Karena itu satu nilai ekstrem dapat menarik rata-rata naik atau turun.",
      "Median ditentukan dari posisi setelah data diurutkan. Pada banyak data ganjil ada satu nilai tengah; pada banyak data genap median adalah rata-rata dua nilai tengah.",
      "Jika rata-rata dan banyak data diketahui, jumlah total dapat dicari dengan mean × n. Teknik ini sangat berguna untuk mencari satu nilai yang belum diketahui."
    ],
    "steps": [
      "Urutkan data jika akan mencari median.",
      "Untuk mean, hitung jumlah lalu bagi banyak data.",
      "Untuk data hilang, ubah mean menjadi jumlah total.",
      "Periksa apakah jawaban konsisten dengan batas atau informasi tambahan."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Mean dan median",
        "problem": "Data: 4, 6, 8, 10, 12.",
        "steps": [
          "Jumlah = 40 dan n = 5, jadi mean = 8.",
          "Data sudah urut; posisi tengah adalah data ke-3."
        ],
        "result": "Mean = 8 dan median = 8."
      },
      {
        "title": "Contoh 2 · Data hilang",
        "problem": "Rata-rata 5 bilangan adalah 8. Empat nilainya 5, 7, 8, 9.",
        "steps": [
          "Jumlah total = 5 × 8 = 40.",
          "Jumlah empat nilai = 29.",
          "Nilai hilang = 40 − 29."
        ],
        "result": "11."
      }
    ],
    "glossary": [
      {
        "term": "Mean",
        "meaning": "Jumlah seluruh data dibagi banyak data."
      },
      {
        "term": "Median",
        "meaning": "Nilai tengah setelah data diurutkan."
      },
      {
        "term": "Ukuran pemusatan",
        "meaning": "Nilai yang mewakili pusat kumpulan data."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "peluang-tunggal",
    "group": "Data dan Peluang",
    "title": "Peluang Kejadian Tunggal",
    "pages": "28",
    "level": "Dasar",
    "summary": "Menghitung peluang satu kejadian dari ruang sampel yang hasilnya dianggap sama mungkin.",
    "concepts": [
      "Peluang adalah perbandingan banyak hasil yang diinginkan dengan banyak seluruh hasil yang mungkin.",
      "Nilai peluang berada antara 0 dan 1.",
      "Pastikan seluruh hasil dalam ruang sampel benar-benar dihitung.",
      "Jika beberapa jenis hadiah berjumlah berbeda, peluang mengikuti banyak kupon masing-masing jenis."
    ],
    "analogy": "Dalam kotak berisi 10 kartu dan 3 kartu berwarna merah, peluang mengambil merah secara acak adalah 3/10.",
    "formulas": [
      "P(A)=n(A)/n(S)"
    ],
    "example": "Kotak berisi 60 kupon: 15 makanan, 20 minuman, 10 hadiah lain, sisanya kosong. Kupon kosong=15, sehingga peluang kosong=15/60=1/4.",
    "traps": [
      "Menggunakan jumlah kejadian sebagai penyebut.",
      "Lupa menghitung kategori 'sisa'.",
      "Tidak menyederhanakan pecahan peluang."
    ],
    "quiz": [
      {
        "q": "Dadu fair dilempar. Peluang mendapat 6 adalah ...",
        "options": [
          "1/2",
          "1/3",
          "1/6",
          "5/6"
        ],
        "answer": 2,
        "explain": "Ada 1 hasil yang diinginkan dari 6 hasil."
      },
      {
        "q": "Kotak berisi 4 merah dan 6 biru. Peluang merah ...",
        "options": [
          "2/5",
          "3/5",
          "4/6",
          "2/3"
        ],
        "answer": 0,
        "explain": "4/10=2/5."
      }
    ],
    "essay": {
      "q": "Sebuah kantong berisi 5 bola hijau, 3 kuning, dan 2 biru. Hitung peluang mengambil bola yang bukan hijau.",
      "answer": "Bukan hijau = 3+2=5 dari total 10, jadi peluang 1/2."
    },
    "objectives": [
      "Menentukan ruang sampel dan kejadian.",
      "Menghitung peluang kejadian tunggal dengan hasil sama mungkin.",
      "Menyederhanakan pecahan peluang dan menafsirkan nilainya."
    ],
    "prerequisites": [
      "Pecahan.",
      "Pencacahan sederhana."
    ],
    "deepDive": [
      "Peluang mengukur tingkat kemungkinan suatu kejadian. Untuk hasil yang sama mungkin, P(A) = n(A)/n(S), yaitu banyak hasil yang mendukung A dibagi banyak seluruh hasil.",
      "Nilai peluang tidak mungkin kurang dari 0 atau lebih dari 1. Peluang 0 berarti mustahil dalam model, sedangkan peluang 1 berarti pasti.",
      "Pada soal kotak hadiah, jumlah “kosong” sering tidak disebut langsung dan harus dihitung sebagai total dikurangi semua kategori hadiah yang diketahui."
    ],
    "steps": [
      "Tentukan total seluruh hasil yang mungkin.",
      "Hitung hasil yang memenuhi kejadian.",
      "Bentuk pecahan n(A)/n(S).",
      "Sederhanakan dan cek bahwa hasil berada antara 0 dan 1."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Dadu",
        "problem": "Dadu fair dilempar sekali. Peluang muncul bilangan genap?",
        "steps": [
          "Ruang sampel: {1,2,3,4,5,6}, jadi n(S)=6.",
          "Bilangan genap: {2,4,6}, jadi n(A)=3.",
          "P(A)=3/6."
        ],
        "result": "1/2."
      },
      {
        "title": "Contoh 2 · Kotak kupon",
        "problem": "Ada 60 kupon; 15 makanan, 20 minuman, 10 hadiah lain, sisanya kosong.",
        "steps": [
          "Kupon terisi hadiah = 15 + 20 + 10 = 45.",
          "Kosong = 60 − 45 = 15.",
          "P(kosong)=15/60."
        ],
        "result": "1/4."
      }
    ],
    "glossary": [
      {
        "term": "Ruang sampel",
        "meaning": "Himpunan semua hasil yang mungkin."
      },
      {
        "term": "Kejadian",
        "meaning": "Himpunan hasil yang sedang diperhatikan."
      },
      {
        "term": "Peluang",
        "meaning": "Ukuran kemungkinan kejadian, dari 0 sampai 1."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  },
  {
    "id": "peluang-majemuk",
    "group": "Data dan Peluang",
    "title": "Peluang Kejadian Majemuk",
    "pages": "29",
    "level": "Menengah",
    "summary": "Menganalisis peluang yang melibatkan lebih dari satu kondisi, termasuk ruang sampel yang berubah setelah suatu hasil diambil.",
    "concepts": [
      "Kejadian majemuk melibatkan kombinasi beberapa kejadian atau beberapa tahap.",
      "Jika benda diambil tanpa dikembalikan, jumlah anggota ruang sampel berubah.",
      "Jika benda tertentu selalu dikembalikan sementara yang lain tidak, perlakukan mekanisme setiap kategori dengan teliti.",
      "Gunakan komplemen bila menghitung kejadian langsung lebih rumit."
    ],
    "analogy": "Mengambil kartu dari kotak tanpa mengembalikan seperti membagikan kartu permainan: peluang tahap berikutnya bergantung pada kartu yang sudah keluar.",
    "formulas": [
      "P(Aᶜ)=1-P(A)",
      "P(A∩B)=P(A)×P(B|A)"
    ],
    "example": "Dalam kotak ada 5 merah dan 5 biru. Peluang dua merah berturut-turut tanpa pengembalian = 5/10×4/9=2/9.",
    "traps": [
      "Menggunakan penyebut yang sama pada pengambilan tanpa pengembalian.",
      "Menganggap kejadian saling bebas padahal tidak.",
      "Mengabaikan aturan khusus tentang benda yang dikembalikan ke kotak."
    ],
    "quiz": [
      {
        "q": "Kotak berisi 3 merah dan 2 biru. Peluang dua merah tanpa pengembalian adalah ...",
        "options": [
          "3/10",
          "3/5",
          "9/25",
          "1/2"
        ],
        "answer": 0,
        "explain": "3/5×2/4=6/20=3/10."
      },
      {
        "q": "Jika P(A)=0,7 maka P(Aᶜ)=...",
        "options": [
          "0,2",
          "0,3",
          "0,7",
          "1,7"
        ],
        "answer": 1,
        "explain": "Komplemen = 1-0,7=0,3."
      }
    ],
    "essay": {
      "q": "Jelaskan perbedaan perhitungan peluang dua kali pengambilan dengan pengembalian dan tanpa pengembalian.",
      "answer": "Dengan pengembalian, komposisi ruang sampel tetap. Tanpa pengembalian, jumlah dan komposisi berubah sehingga peluang tahap berikutnya bersyarat."
    },
    "objectives": [
      "Menghitung peluang beberapa tahap.",
      "Membedakan pengambilan dengan dan tanpa pengembalian.",
      "Menggunakan peluang bersyarat dan komplemen sederhana."
    ],
    "prerequisites": [
      "Peluang kejadian tunggal.",
      "Perkalian pecahan."
    ],
    "deepDive": [
      "Pada percobaan bertahap, peluang keseluruhan sering diperoleh dengan mengalikan peluang tiap tahap. Jika tahap kedua dipengaruhi hasil tahap pertama, gunakan peluang bersyarat P(B|A).",
      "Tanpa pengembalian, jumlah benda di kotak berkurang sehingga penyebut pada tahap berikutnya berubah. Dengan pengembalian, komposisi kembali seperti semula sehingga peluang tahap berikutnya tetap.",
      "Komplemen sangat berguna untuk kejadian “tidak”, “setidaknya satu”, atau ketika menghitung kejadian lawannya lebih mudah: P(Aᶜ)=1−P(A)."
    ],
    "steps": [
      "Tentukan apakah ada lebih dari satu tahap.",
      "Periksa aturan pengembalian setelah setiap tahap.",
      "Tulis peluang tahap pertama dan kedua dengan penyebut yang benar.",
      "Kalikan untuk kejadian berurutan atau gunakan komplemen jika lebih sederhana."
    ],
    "workedExamples": [
      {
        "title": "Contoh 1 · Tanpa pengembalian",
        "problem": "Kotak berisi 5 merah dan 5 biru. Peluang mengambil dua merah berturut-turut tanpa pengembalian.",
        "steps": [
          "P(merah pertama)=5/10.",
          "Setelah satu merah diambil, tersisa 4 merah dari 9 bola.",
          "P(dua merah)=5/10 × 4/9."
        ],
        "result": "2/9."
      },
      {
        "title": "Contoh 2 · Komplemen",
        "problem": "Jika peluang hujan 0,35, berapa peluang tidak hujan?",
        "steps": [
          "Gunakan komplemen.",
          "1 − 0,35 = 0,65."
        ],
        "result": "0,65."
      }
    ],
    "glossary": [
      {
        "term": "Tanpa pengembalian",
        "meaning": "Objek yang diambil tidak dimasukkan kembali sebelum tahap berikutnya."
      },
      {
        "term": "Peluang bersyarat",
        "meaning": "Peluang suatu kejadian dengan informasi kejadian sebelumnya."
      },
      {
        "term": "Komplemen",
        "meaning": "Kejadian kebalikan dari kejadian yang sedang diperhatikan."
      }
    ],
    "subjectId": "matematika",
    "sourceLabel": "Soal TKA Matematika Wajib 2025"
  }
];
