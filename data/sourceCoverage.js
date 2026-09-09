export const sourceDocuments = [
  {
    id: "tka-matematika",
    subjectId: "matematika",
    title: "Soal TKA Matematika (Wajib) SMA/MA/SMK Tahun 2025",
    pages: 29,
    role: "Acuan indikator, bentuk soal, konteks numerasi, dan cakupan Bilangan, Aljabar, Geometri dan Pengukuran, Data dan Peluang."
  },
  {
    id: "tka-bahasa-indonesia",
    subjectId: "bahasa-indonesia",
    title: "Soal TKA Bahasa Indonesia",
    pages: 5,
    role: "Acuan bacaan nonfiksi, fiksi, teks jamak, kosakata kontekstual, inferensi, evaluasi gagasan, dan pilihan ganda kompleks."
  },
  {
    id: "tka-bahasa-inggris",
    subjectId: "bahasa-inggris",
    title: "TKA Bahasa Inggris",
    pages: 17,
    role: "Acuan definisi TKA, level A2–B1, jenis teks, matriks kompetensi membaca, serta contoh pilihan ganda dan pilihan ganda kompleks."
  },
  {
    id: "serkom-jobsheet",
    subjectId: "serkom",
    title: "Jobsheet Pembelajaran Persiapan SERKOM RPL Laravel 12",
    pages: 42,
    role: "Acuan proyek Kopi Ulee Kareng, skema latihan, Laravel 12, CRUD products, debugging, testing, dokumentasi, bukti, dan kesiapan asesmen."
  },
  {
    id: "serkom-rangkuman",
    subjectId: "serkom",
    title: "Rangkuman & Analisis Laravel 12 Persiapan SERKOM RPL",
    pages: 58,
    role: "Acuan bedah syntax dan kode per baris, alur MVC, Eloquent, Blade, validation, debugging, testing, portofolio, dan pertanyaan asesor."
  }
];

const math = {
  "himpunan-bilangan": {
    refs: ["TKA Matematika hal. 1"],
    competency: "Memahami jenis dan sifat bilangan serta menentukan gabungan atau irisan beberapa himpunan bilangan.",
    coverage: [
      "Membedakan bilangan asli, cacah, genap, prima, dan himpunan yang dibatasi syarat tertentu.",
      "Menentukan anggota setiap himpunan dari notasi pembentuk himpunan sebelum menjalankan operasi irisan atau gabungan.",
      "Memeriksa apakah satu anggota memenuhi lebih dari satu syarat dan menghindari pengulangan anggota pada hasil gabungan.",
      "Menerjemahkan notasi himpunan ke daftar anggota sebagai strategi verifikasi sebelum memilih jawaban."
    ]
  },
  "eksponen": {
    refs: ["TKA Matematika hal. 2"],
    competency: "Menyederhanakan bentuk bilangan berpangkat bulat atau pecahan dengan menerapkan sifat eksponen.",
    coverage: [
      "Menggunakan aturan perkalian dan pembagian untuk basis yang sama serta aturan pangkat dari suatu pangkat.",
      "Menafsirkan pangkat pecahan sebagai bentuk akar dan mengubah bilangan ke basis yang sepadan bila diperlukan.",
      "Menyederhanakan pembilang dan penyebut secara terpisah sebelum menggabungkan hasil.",
      "Memeriksa tanda, basis, dan eksponen agar aturan tidak diterapkan pada bentuk yang tidak memenuhi syarat."
    ]
  },
  "operasi-khusus": {
    refs: ["TKA Matematika hal. 3"],
    competency: "Menerapkan operasi bilangan yang didefinisikan secara khusus lalu menilai beberapa pernyataan secara mandiri.",
    coverage: [
      "Membaca definisi operator baru sebagai aturan substitusi, bukan sebagai operasi aritmetika biasa.",
      "Menggunakan informasi hasil operasi untuk membentuk persamaan dan menentukan nilai variabel yang belum diketahui.",
      "Menguji sifat bilangan dari nilai yang diperoleh, misalnya kelipatan atau keprimaan.",
      "Mengevaluasi setiap pernyataan Benar/Salah tanpa menganggap jawaban satu baris menentukan baris lain."
    ]
  },
  "fungsi-invers": {
    refs: ["TKA Matematika hal. 4"],
    competency: "Mengidentifikasi nilai invers suatu fungsi dan menerapkannya pada masalah kontekstual.",
    coverage: [
      "Membaca fungsi linear sebagai hubungan input-output pada konteks nyata.",
      "Menentukan input ketika output diketahui dengan menyusun ulang persamaan atau menggunakan fungsi invers.",
      "Menjaga konsistensi makna variabel, satuan, dan konteks tahun atau besaran yang digunakan.",
      "Memeriksa hasil substitusi kembali ke fungsi awal sebagai langkah verifikasi."
    ]
  },
  "komposisi-fungsi": {
    refs: ["TKA Matematika hal. 5"],
    competency: "Mengidentifikasi syarat komposisi fungsi dan menerapkannya dalam masalah kontekstual bertahap.",
    coverage: [
      "Membedakan proses fungsi pertama dan fungsi kedua pada perubahan nilai secara berurutan.",
      "Menentukan nilai setelah fungsi pertama sebelum memasukkannya sebagai input fungsi berikutnya.",
      "Menggabungkan syarat tambahan dari tabel atau data kontekstual setelah proses komposisi selesai.",
      "Memilih pihak yang memenuhi batas kemampuan atau anggaran berdasarkan hasil akhir, bukan nilai awal."
    ]
  },
  "barisan-aritmetika": {
    refs: ["TKA Matematika hal. 6"],
    competency: "Menyelesaikan masalah kontekstual yang berkaitan dengan barisan dan deret aritmetika.",
    coverage: [
      "Mengidentifikasi suku pertama dan beda dari pola pertambahan yang tetap.",
      "Menentukan suku tertentu menggunakan Uₙ = a + (n−1)b.",
      "Menentukan jumlah beberapa suku menggunakan rumus deret aritmetika ketika yang diminta adalah total.",
      "Membedakan pertanyaan tentang banyak objek pada satu baris dengan total objek pada seluruh baris."
    ]
  },
  "barisan-geometri": {
    refs: ["TKA Matematika hal. 7"],
    competency: "Menyelesaikan masalah kontekstual yang berkaitan dengan barisan atau deret geometri.",
    coverage: [
      "Mengidentifikasi rasio tetap dari perubahan nilai yang berulang.",
      "Menggunakan Uₙ = arⁿ⁻¹ untuk menentukan nilai pada tahap atau hari tertentu.",
      "Membandingkan hasil dengan batas kenyamanan atau batas klinis yang diberikan pada stimulus.",
      "Menilai beberapa pilihan hari secara cermat karena lebih dari satu kondisi dapat memenuhi syarat."
    ]
  },
  "sistem-pertidaksamaan": {
    refs: ["TKA Matematika hal. 8"],
    competency: "Memodelkan dan membaca daerah penyelesaian sistem pertidaksamaan linear multivariabel.",
    coverage: [
      "Mengubah garis batas pada grafik menjadi persamaan linear.",
      "Menentukan arah pertidaksamaan dari sisi daerah yang diarsir menggunakan titik uji.",
      "Menggabungkan beberapa syarat termasuk x ≥ 0 atau y ≥ 0 bila daerah dibatasi sumbu.",
      "Memeriksa semua pertidaksamaan secara bersamaan karena daerah solusi adalah irisan seluruh syarat."
    ]
  },
  "spl": {
    refs: ["TKA Matematika hal. 9"],
    competency: "Memodelkan masalah kontekstual ke sistem persamaan linear dan menentukan nilai variabel yang dibutuhkan.",
    coverage: [
      "Menentukan variabel dari komponen biaya atau jumlah objek pada paket yang berbeda.",
      "Menyusun persamaan dari total harga tiap kombinasi.",
      "Menggunakan eliminasi, substitusi, atau metode matriks untuk memperoleh nilai variabel.",
      "Menyusun kembali kombinasi baru sesuai pertanyaan setelah nilai setiap komponen diketahui."
    ]
  },
  "sudut-garis-sejajar": {
    refs: ["TKA Matematika hal. 10"],
    competency: "Mengidentifikasi hubungan antar sudut, dua garis, dan garis sejajar.",
    coverage: [
      "Membedakan sudut sehadap, berseberangan, sepihak, bertolak belakang, dan pasangan berpelurus.",
      "Menggunakan sifat garis sejajar untuk menyamakan atau menjumlahkan sudut tertentu.",
      "Menentukan pasangan yang membentuk 180° berdasarkan posisi geometris, bukan hanya tampilan gambar.",
      "Mengevaluasi beberapa pasangan sudut pada format pilihan ganda kompleks."
    ]
  },
  "bangun-ruang-garis-bidang": {
    refs: ["TKA Matematika hal. 11"],
    competency: "Menentukan hubungan antar bidang atau garis pada bangun ruang.",
    coverage: [
      "Mengenali penamaan titik sudut pada ilustrasi ruang dan menghubungkannya dengan bidang dinding, lantai, atau sisi bangun.",
      "Menentukan bidang yang berhadapan, berpotongan, sejajar, atau tegak lurus dari susunan titik.",
      "Menerjemahkan kebutuhan posisi benda di ruangan menjadi syarat bidang yang tepat.",
      "Memverifikasi bidang melalui minimal tiga titik yang tidak segaris."
    ]
  },
  "kesebangunan": {
    refs: ["TKA Matematika hal. 12"],
    competency: "Menentukan panjang sisi yang tidak diketahui dengan konsep kesebangunan.",
    coverage: [
      "Mengenali pasangan bangun yang sebangun dari garis-garis sejajar atau sudut yang sama.",
      "Menetapkan pasangan sisi yang bersesuaian sebelum membuat perbandingan.",
      "Menggunakan rasio panjang sisi untuk menentukan bagian yang belum diketahui.",
      "Memeriksa konsistensi skala agar sisi besar dan kecil tidak tertukar."
    ]
  },
  "pythagoras": {
    refs: ["TKA Matematika hal. 13"],
    competency: "Menerapkan Teorema Pythagoras pada masalah kontekstual sehari-hari.",
    coverage: [
      "Mengidentifikasi segitiga siku-siku tersembunyi pada ukuran kebun atau lintasan diagonal.",
      "Menggunakan a² + b² = c² untuk memperoleh panjang miring atau sisi tegak.",
      "Menghubungkan hasil panjang dengan jarak antar tanaman atau diameter objek.",
      "Menilai klaim jumlah maksimum dengan pembagian panjang efektif dan aturan penempatan."
    ]
  },
  "transformasi": {
    refs: ["TKA Matematika hal. 14–16"],
    competency: "Menentukan bayangan atau titik asal setelah komposisi refleksi, rotasi, translasi, atau dilatasi.",
    coverage: [
      "Menerapkan transformasi sesuai urutan yang diberikan karena komposisi transformasi tidak dapat ditukar sembarangan.",
      "Menggunakan aturan koordinat untuk refleksi terhadap garis tertentu dan rotasi berpusat O(0,0).",
      "Membaca koordinat titik bayangan pada bidang Kartesius secara teliti.",
      "Melakukan transformasi balik bila yang dicari adalah titik asal."
    ]
  },
  "jarak-ruang": {
    refs: ["TKA Matematika hal. 17"],
    competency: "Menyelesaikan masalah jarak dua titik pada bangun ruang.",
    coverage: [
      "Mengubah panjang, lebar, dan tinggi ruang menjadi komponen jarak tiga dimensi.",
      "Menggunakan diagonal bidang sebelum diagonal ruang bila membantu visualisasi.",
      "Menerapkan d = √(p² + l² + t²) untuk dua titik sudut yang berlawanan pada balok.",
      "Menyesuaikan hasil dengan jumlah tali atau sisa panjang yang tersedia."
    ]
  },
  "keliling-luas": {
    refs: ["TKA Matematika hal. 18–20"],
    competency: "Menggunakan hubungan keliling dan luas untuk menyelesaikan masalah bangun datar kontekstual.",
    coverage: [
      "Memecah ornamen gabungan menjadi segitiga, lingkaran, atau bagian lain yang lebih sederhana.",
      "Menghitung keliling bagian luar sesuai garis yang benar-benar ditempeli atau diukur.",
      "Menggunakan informasi tambahan untuk memutuskan apakah data sudah cukup menentukan keliling atau luas.",
      "Membedakan data yang relevan, data berlebih, dan data yang masih kurang."
    ]
  },
  "volume-bangun-ruang": {
    refs: ["TKA Matematika hal. 21"],
    competency: "Menyelesaikan masalah kontekstual yang melibatkan volume bangun ruang.",
    coverage: [
      "Menghitung volume ruang penyimpanan dan volume satu kardus dengan satuan yang konsisten.",
      "Menentukan orientasi kardus yang sesuai dengan batas panjang, lebar, dan tinggi.",
      "Menghitung banyak kardus per arah menggunakan pembagian bilangan bulat.",
      "Mengalikan kapasitas setiap arah dan memeriksa sisa ruang yang tidak dapat dipakai."
    ]
  },
  "luas-permukaan": {
    refs: ["TKA Matematika hal. 22–23"],
    competency: "Menyelesaikan masalah kontekstual yang melibatkan luas permukaan bangun ruang.",
    coverage: [
      "Mengidentifikasi bagian tabung yang benar-benar dilapisi dan bagian yang dikecualikan.",
      "Menggunakan luas selimut tabung 2πrt untuk tabung tanpa alas dan tutup.",
      "Mengalikan kebutuhan bahan dengan jumlah objek yang dibuat.",
      "Membulatkan jumlah lembar bahan ke atas karena pembelian tidak dapat dilakukan dalam pecahan lembar."
    ]
  },
  "trigonometri": {
    refs: ["TKA Matematika hal. 24"],
    competency: "Menentukan nilai perbandingan trigonometri dari sudut tertentu dan hubungan geometri lain.",
    coverage: [
      "Mengidentifikasi sisi depan, samping, dan miring terhadap sudut yang sedang ditinjau.",
      "Menggunakan sin, cos, dan tan sesuai definisi pada segitiga siku-siku.",
      "Memanfaatkan panjang yang sama atau sifat geometri pada gambar sebelum menghitung rasio.",
      "Menilai beberapa pernyataan trigonometri secara independen pada tabel Benar/Salah."
    ]
  },
  "diagram-grafik": {
    refs: ["TKA Matematika hal. 25"],
    competency: "Menginterpretasikan data dalam diagram garis dan memilih pernyataan yang sesuai.",
    coverage: [
      "Membaca nilai setiap seri pada tahun tertentu dari posisi titik terhadap sumbu.",
      "Membedakan tren naik, turun, tetap, serta perpotongan antar seri.",
      "Memeriksa klaim yang menggunakan kata selalu, konsisten, atau setiap tahun dengan seluruh rentang data.",
      "Menilai beberapa pernyataan sekaligus tanpa hanya melihat satu titik data."
    ]
  },
  "aturan-pencacahan": {
    refs: ["TKA Matematika hal. 26"],
    competency: "Menerapkan aturan pencacahan, permutasi, atau kombinasi pada masalah sehari-hari.",
    coverage: [
      "Menentukan apakah urutan objek berpengaruh pada banyak susunan.",
      "Menerjemahkan syarat posisi, misalnya satu pedagang harus berada di antara dua pedagang lain.",
      "Mengelompokkan blok posisi bila syarat keterdekatan dapat menyederhanakan pencacahan.",
      "Menghindari pencacahan ganda dengan memastikan setiap susunan dihitung tepat satu kali."
    ]
  },
  "statistika": {
    refs: ["TKA Matematika hal. 27"],
    competency: "Menggunakan ukuran pemusatan atau sebaran untuk melengkapi dan menilai data.",
    coverage: [
      "Menggunakan rata-rata untuk memperoleh jumlah total data yang harus dipenuhi.",
      "Menggunakan median untuk menilai posisi data setelah diurutkan.",
      "Menggabungkan batas nilai maksimum dengan persamaan jumlah untuk mempersempit kemungkinan.",
      "Menilai apakah suatu hubungan pasti benar atau hanya mungkin terjadi."
    ]
  },
  "peluang-tunggal": {
    refs: ["TKA Matematika hal. 28"],
    competency: "Menentukan peluang kejadian tunggal berdasarkan ruang sampel yang diberikan.",
    coverage: [
      "Menghitung banyak objek pada setiap kategori dari total dan kategori yang sudah diketahui.",
      "Menentukan banyak hasil yang memenuhi kejadian yang ditanyakan.",
      "Menggunakan P(A) = n(A)/n(S) dan menyederhanakan pecahan.",
      "Memastikan semua hasil pada ruang sampel memiliki peluang yang sama bila rumus klasik digunakan."
    ]
  },
  "peluang-majemuk": {
    refs: ["TKA Matematika hal. 29"],
    competency: "Menerapkan peluang kejadian majemuk pada pengambilan berurutan tanpa pengembalian.",
    coverage: [
      "Memperbarui jumlah total objek setelah beberapa hasil telah terambil dan tidak dikembalikan.",
      "Menentukan syarat jumlah kategori yang tersisa agar peluang berikutnya memenuhi nilai tertentu.",
      "Menggunakan hubungan peluang untuk menyusun persamaan jumlah objek tersisa.",
      "Menguji setiap opsi terhadap kondisi pengambilan sebelumnya dan memastikan urutan informasi konsisten."
    ]
  }
};

const indonesian = {
  "bi-informasi-eksplisit": {
    refs: ["TKA Bahasa Indonesia hal. 1"],
    competency: "Menemukan informasi yang dinyatakan langsung dan menghubungkannya dengan pertanyaan.",
    coverage: [
      "Bacaan IoT pada gedung pintar digunakan untuk melatih identifikasi fungsi perangkat yang dinyatakan eksplisit.",
      "Informasi utama harus dibedakan dari ilustrasi, contoh, dan kalimat penegas.",
      "Jawaban dipilih berdasarkan bukti yang benar-benar terdapat pada teks, bukan pengetahuan umum di luar bacaan.",
      "Kata rujukan dan hubungan antar kalimat perlu dilacak agar subjek atau objek yang dimaksud tidak tertukar."
    ]
  },
  "bi-kosakata-kontekstual": {
    refs: ["TKA Bahasa Indonesia hal. 1–2"],
    competency: "Menentukan makna kata, frasa, atau istilah berdasarkan konteks penggunaannya.",
    coverage: [
      "Istilah seperti pivot atau batu loncatan dibaca berdasarkan fungsi di dalam paragraf keamanan jaringan.",
      "Makna kontekstual dapat berbeda dari makna literal sehingga kalimat sebelum dan sesudah istilah harus diperiksa.",
      "Ungkapan metaforis seperti jalan tol bebas hambatan perlu diterjemahkan menjadi hubungan sebab-akibat yang dimaksud penulis.",
      "Opsi yang hanya cocok secara kamus tetapi tidak cocok dengan konteks harus dieliminasi."
    ]
  },
  "bi-inferensi": {
    refs: ["TKA Bahasa Indonesia hal. 2–4"],
    competency: "Menarik kesimpulan yang tidak dinyatakan langsung dengan menggunakan bukti dalam teks.",
    coverage: [
      "Inferensi dibangun dari fakta eksplisit ditambah hubungan logis, bukan dari asumsi bebas.",
      "Frasa metaforis, tindakan tokoh, atau dampak suatu kondisi dapat menjadi petunjuk makna tersirat.",
      "Pada teks jamak, inferensi perlu mempertimbangkan informasi dari kedua teks secara bersamaan.",
      "Jawaban terbaik adalah kesimpulan yang paling dekat dengan bukti dan tidak melampaui cakupan informasi."
    ]
  },
  "bi-evaluasi-gagasan": {
    refs: ["TKA Bahasa Indonesia hal. 2–5"],
    competency: "Menilai kekuatan gagasan, bukti, solusi, dan konsekuensi yang terdapat dalam bacaan.",
    coverage: [
      "Tindakan preventif pada bacaan keamanan jaringan dinilai dari kecocokannya dengan kelemahan yang disebutkan.",
      "Pernyataan penguat atau pelemah harus memiliki hubungan langsung dengan alasan utama penulis.",
      "Evaluasi tidak cukup menyatakan setuju atau tidak setuju; alasan harus dapat ditelusuri ke informasi bacaan.",
      "Pada teks jamak, solusi yang rasional dapat memadukan peluang dan risiko dari dua sudut pandang."
    ]
  },
  "bi-fiksi": {
    refs: ["TKA Bahasa Indonesia hal. 2–3"],
    competency: "Menganalisis tokoh, konflik, suasana, dan makna simbolik pada teks fiksi.",
    coverage: [
      "Cerita editor dan colorist digunakan untuk membaca konflik antara sentuhan manusia, nilai artistik, dan efisiensi AI.",
      "Makna simbolik ditarik dari diksi dan perbandingan, bukan hanya peristiwa literal.",
      "Suasana dibangun melalui latar, tindakan, pilihan kata, dan respons tokoh.",
      "Konflik pribadi tokoh dapat merepresentasikan isu yang lebih luas dalam dunia kerja atau industri kreatif."
    ]
  },
  "bi-teks-jamak": {
    refs: ["TKA Bahasa Indonesia hal. 3–5"],
    competency: "Membandingkan sudut pandang dan menyintesis informasi dari dua teks atau lebih.",
    coverage: [
      "Teks gig economy memperlihatkan satu sudut pandang yang menekankan fleksibilitas dan satu sudut pandang yang menekankan kerentanan.",
      "Perbandingan harus menyatakan perbedaan fokus secara seimbang tanpa mengubah posisi penulis.",
      "Sintesis menggabungkan informasi yang kompatibel dari kedua teks untuk menghasilkan keputusan atau rekomendasi.",
      "Pernyataan valid harus didukung oleh salah satu atau kedua teks dan tidak boleh bertentangan dengan informasi eksplisit."
    ]
  },
  "bi-pg-kompleks": {
    refs: ["TKA Bahasa Indonesia hal. 2 dan 4–5"],
    competency: "Menilai beberapa opsi secara mandiri pada pilihan ganda kompleks dan memilih seluruh kombinasi yang benar.",
    coverage: [
      "Setiap opsi diuji satu per satu terhadap stimulus sebelum kombinasi jawaban diputuskan.",
      "Jumlah jawaban benar tidak boleh ditebak dari pola; semua opsi perlu diverifikasi.",
      "Pernyataan yang sebagian benar tetapi memiliki satu klaim keliru tetap harus ditolak.",
      "Pemeriksaan akhir dilakukan dengan membandingkan kembali seluruh pilihan terpilih dengan bukti teks."
    ]
  }
};

const english = {
  "en-textual": {
    refs: ["TKA Bahasa Inggris hal. 1–3, 5–6, 9, 12, 14–15"],
    competency: "Understand explicit information, classify details, organize points, and restate information from A2–B1 texts.",
    coverage: [
      "TKA reading uses everyday, vocational, and basic academic contexts with high-frequency vocabulary.",
      "Textual comprehension includes identifying stated details, grouping information, outlining main points, and summarizing.",
      "Questions may ask for sequence, purpose, location, activity, or directly stated cause and effect.",
      "The answer must be supported by explicit textual evidence rather than outside assumptions."
    ]
  },
  "en-inferential": {
    refs: ["TKA Bahasa Inggris hal. 2–4, 6–7, 10, 12, 14–16"],
    competency: "Infer unstated ideas, relationships, causes, comparisons, character traits, and likely outcomes.",
    coverage: [
      "Inferential comprehension combines textual clues with reasonable background knowledge while staying within the text.",
      "Tasks include identifying cause and effect, comparing characters or places, interpreting implicit meaning, and predicting what may happen next.",
      "Character traits should be inferred from actions and decisions, not from unsupported labels.",
      "A valid inference is the option that explains the clues with the fewest additional assumptions."
    ]
  },
  "en-evaluation": {
    refs: ["TKA Bahasa Inggris hal. 4, 11, 13, 16–17"],
    competency: "Evaluate ideas, evidence, relevance, adequacy of information, and the reader's response to a text.",
    coverage: [
      "Evaluation and appreciation require judging ideas and language, not merely locating a sentence.",
      "Readers may be asked which additional fact would strengthen an argument or which statements support the writer's claim.",
      "Responses should distinguish evidence from opinion and evaluate whether information is relevant to the stated purpose.",
      "Appreciation questions may ask for the strongest impression, attitude, or emotional effect supported by the text."
    ]
  },
  "en-descriptive": {
    refs: ["TKA Bahasa Inggris hal. 1, 11–13"],
    competency: "Read descriptive texts about places, people, objects, or natural attractions at A2–B1 level.",
    coverage: [
      "Descriptive texts identify a subject and develop its characteristics through specific details.",
      "The Bali example combines factual descriptions of natural attractions with conservation messages.",
      "Readers distinguish which place is associated with relaxation, conservation, culture, or another stated function.",
      "Details, adjectives, spatial references, and purpose statements are used to construct the overall description."
    ]
  },
  "en-recount": {
    refs: ["TKA Bahasa Inggris hal. 1, 13–14"],
    competency: "Understand chronological events, experiences, reflections, and lessons in recount texts.",
    coverage: [
      "Recount texts generally organize orientation, events, and a closing reflection in time order.",
      "The sports-club internship example requires tracking duties, unexpected events, feedback, and the writer's learning.",
      "Time markers and sequence words help identify what happened before or after another event.",
      "Questions may combine explicit details with inference about personality or future plans."
    ]
  },
  "en-narrative": {
    refs: ["TKA Bahasa Inggris hal. 1, 4–8"],
    competency: "Understand narrative sequence, conflict, character motivation, comparison, and moral lessons.",
    coverage: [
      "Narrative texts require tracking orientation, conflict, major events, resolution, and consequences.",
      "The Son Tinh and Thuy Tinh story is used to identify main points, causes of conflict, similarities and differences, and moral lessons.",
      "Implicit phrases must be interpreted from the sequence of actions and character decisions.",
      "Multiple-correct questions may test more than one lesson or valid interpretation from the same story."
    ]
  },
  "en-procedure": {
    refs: ["TKA Bahasa Inggris hal. 1, 8–11"],
    competency: "Read procedural or infographic-based instructions and classify steps, preparation, rules, and outcomes.",
    coverage: [
      "Procedure texts present a goal followed by ordered actions, materials, rules, or recommendations.",
      "The library-study infographic includes preparation, choosing a quiet spot, setting a goal, following rules, taking breaks, and reviewing before leaving.",
      "Readers identify which details belong to preparation and which belong to breaks or study behavior.",
      "Evaluation questions may ask which action the reader would reasonably take before applying the procedure."
    ]
  },
  "en-exposition": {
    refs: ["TKA Bahasa Inggris hal. 1, 15–17"],
    competency: "Analyze claims, supporting reasons, evidence, and recommendations in analytical exposition texts.",
    coverage: [
      "Analytical exposition states a position and develops it with reasons before closing with a conclusion or recommendation.",
      "The social-media text discusses mental health through comparison pressure, sleep and study disruption, cyberbullying, and guidance from adults or schools.",
      "Readers identify evidence that supports the author's argument and facts that would make the argument more persuasive.",
      "The strongest answer must support the writer's claim directly rather than merely mention the same topic."
    ]
  },
  "en-vocabulary": {
    refs: ["TKA Bahasa Inggris hal. 1–4, 7, 11–17"],
    competency: "Interpret vocabulary, phrases, references, and meaning from surrounding context.",
    coverage: [
      "Vocabulary at A2–B1 level is interpreted through surrounding sentences and discourse purpose.",
      "Pronoun and reference questions require identifying the most logical antecedent.",
      "A phrase may carry an implied meaning that cannot be recovered by translating each word separately.",
      "Context clues include examples, contrasts, causes, definitions, and repeated ideas."
    ]
  },
  "en-multiple-texts": {
    refs: ["TKA Bahasa Inggris hal. 2–4, 7–10, 12–17"],
    competency: "Integrate information across several statements or texts and answer complex multiple-choice formats accurately.",
    coverage: [
      "Complex formats include categorization, multiple-correct options, and several statements that must be evaluated independently.",
      "The assessment matrix covers textual, inferential, and evaluative skills rather than one fixed question format.",
      "Every selected option must be supported; selecting one unsupported option can invalidate the combination.",
      "Comparison and synthesis tasks require preserving the distinct perspective of each source before combining conclusions."
    ]
  }
};

const serkom = {
  "serkom-skkni-muk": {
    refs: ["Jobsheet hal. 1–5", "Rangkuman bagian 1"],
    competency: "Memahami posisi bahan latihan terhadap SKKNI, MUK, skema LSP, unit pembelajaran, dan bukti kompetensi.",
    coverage: [
      "Jobsheet adalah bahan pembelajaran dan simulasi, sedangkan keputusan kompeten atau belum kompeten tetap mengikuti asesor dan LSP.",
      "Unit penguatan mencakup struktur data, spesifikasi program, eksekusi, best practices, pemrograman terstruktur, dokumentasi, debugging, dan pengujian.",
      "J.620100.033.02 tentang pengujian unit program disebut langsung pada MUK sekolah yang dipelajari dalam dokumen.",
      "Setiap aktivitas proyek harus dapat ditelusuri ke bukti seperti source code, log terminal, catatan debugging, tabel test, dan output pengujian."
    ]
  },
  "serkom-inti-mvc": {
    refs: ["Rangkuman hal. 3–4", "Jobsheet hal. 5–7"],
    competency: "Menjelaskan arsitektur MVC dan aliran data dari request browser sampai response Blade.",
    coverage: [
      "Route menerima request dan menentukan controller yang dipanggil.",
      "Controller mengatur proses, validation, query model, view, atau redirect.",
      "Model Product menjadi representasi tabel products melalui Eloquent, sedangkan migration mengatur skema.",
      "Blade menampilkan data dinamis dan response kembali ke browser; peserta harus dapat menunjuk file pada setiap tahap."
    ]
  },
  "serkom-skenario-ipo": {
    refs: ["Jobsheet hal. 6–7, 12–13", "Rangkuman hal. 3–4"],
    competency: "Menerjemahkan kebutuhan proyek ke tujuan, pengguna, input, proses, output, navigasi, struktur file, dan batasan.",
    coverage: [
      "Studi kasus berfokus pada landing page Kopi Ulee Kareng dengan data produk dari database dan halaman CRUD.",
      "Input terdiri dari nama_produk, deskripsi, harga, dan gambar opsional; proses mencakup validasi, simpan, baca, ubah, hapus, dan tampilkan.",
      "Batasan proyek meniadakan auth, role, pembayaran, keranjang, API, relasi banyak tabel, grafik, dan deployment agar fokus tetap pada kompetensi inti.",
      "Struktur target mencakup controller, model, migration, seeder, Blade views, CSS, routes, tests, dan README."
    ]
  },
  "serkom-syntax": {
    refs: ["Rangkuman hal. 5–6"],
    competency: "Memahami simbol dan syntax dasar PHP, Laravel, Blade, HTML, CSS, dan HTTP yang muncul pada proyek.",
    coverage: [
      "Syntax yang dianalisis meliputi variabel $, array, key-value =>, object operator ->, scope resolution ::, visibility, return type, dan null coalescing.",
      "Blade menggunakan echo {{ }}, directive @extends, @section, @csrf, @error, @forelse, dan helper route atau asset.",
      "HTML memberi struktur semantik, sedangkan CSS menggunakan selector, property-value, grid, dan media query.",
      "HTTP GET, POST, PUT/PATCH, dan DELETE dipetakan ke operasi Read, Create, Update, dan Delete."
    ]
  },
  "serkom-environment": {
    refs: ["Jobsheet hal. 8–11", "Rangkuman hal. 6–8"],
    competency: "Menyiapkan PHP 8.2, Composer, Laravel 12, MySQL, .env, folder proyek, dan perintah Artisan secara benar.",
    coverage: [
      "Lingkungan latihan menggunakan Windows, PHP 8.2.x, Laravel 12.x, MySQL/MariaDB, Composer, VS Code, dan browser modern.",
      "Starter project menjalankan composer install, menyiapkan .env bila diperlukan, membuat APP_KEY, dan memeriksa versi Laravel.",
      "Database kopi_ulee_kareng dihubungkan melalui DB_CONNECTION, host, port, database, username, dan password.",
      "APP_DEBUG=true hanya untuk latihan lokal dan .env tidak boleh dipublikasikan karena dapat memuat secret atau kredensial.",
      "Checklist kesiapan memastikan PHP, Composer, Laravel, MySQL, database, .env, editor, dan folder aset telah siap."
    ]
  },
  "serkom-migration": {
    refs: ["Jobsheet hal. 7, 14–15", "Rangkuman hal. 9–10"],
    competency: "Merancang data dictionary dan migration products termasuk up(), down(), tipe kolom, nullable, dan timestamps.",
    coverage: [
      "products memiliki id, nama_produk, deskripsi, harga, gambar, created_at, dan updated_at.",
      "nama_produk dibatasi string 100, deskripsi menggunakan text, harga unsignedInteger, dan gambar nullable.",
      "up() membuat tabel sedangkan down() menghapusnya saat rollback.",
      "Migration adalah riwayat struktur database, bukan tempat menyimpan data contoh.",
      "Verifikasi dilakukan dengan php artisan migrate dan migrate:status serta pemeriksaan tabel pada database."
    ]
  },
  "serkom-model": {
    refs: ["Jobsheet hal. 15", "Rangkuman hal. 11–12"],
    competency: "Memahami model Product, $fillable, casts(), Eloquent, dan Route Model Binding.",
    coverage: [
      "Product extends Model dan menggunakan HasFactory.",
      "$fillable menentukan field yang boleh diisi melalui mass assignment seperti create() atau update().",
      "casts() mengubah cara atribut harga digunakan sebagai integer dan tidak membuat kolom database.",
      "Validation dan $fillable memiliki fungsi berbeda: validation menilai input, $fillable mengatur mass assignment.",
      "Product $produk pada parameter controller memungkinkan Laravel mengambil record dari parameter route secara otomatis."
    ]
  },
  "serkom-seeder": {
    refs: ["Jobsheet hal. 15–17", "Rangkuman hal. 13–15"],
    competency: "Membuat data awal menggunakan array, foreach, Product::query()->create(), ProductSeeder, dan DatabaseSeeder.",
    coverage: [
      "Seeder menyediakan data latihan agar landing page dan CRUD dapat diuji sejak awal.",
      "$products menyimpan beberapa associative array dengan field yang sesuai model.",
      "foreach membaca setiap record dan Eloquent create() menyimpannya ke database.",
      "DatabaseSeeder memanggil ProductSeeder melalui $this->call().",
      "Data seeder berbeda dari skema migration dan dapat dijalankan dengan php artisan db:seed."
    ]
  },
  "serkom-controller": {
    refs: ["Jobsheet hal. 17–19", "Rangkuman hal. 16–20"],
    competency: "Memahami seluruh method ProductController, validation, query, redirect, session message, dan Route Model Binding.",
    coverage: [
      "landing() dan index() mengambil collection produk terbaru lalu mengirimkannya ke view.",
      "create() dan edit() menampilkan form, sedangkan store() dan update() memproses serta menyimpan data.",
      "store() dan update() memvalidasi nama_produk, deskripsi, harga, dan gambar sebelum menulis ke database.",
      "destroy() menghapus record yang telah diperoleh melalui Route Model Binding.",
      "Redirect ke produk.index disertai flash session success agar pengguna memperoleh umpan balik setelah operasi."
    ]
  },
  "serkom-routing": {
    refs: ["Jobsheet hal. 19", "Rangkuman hal. 21"],
    competency: "Mendaftarkan route landing dan resource route CRUD serta memahami URI, nama route, method HTTP, dan parameter.",
    coverage: [
      "GET / diarahkan ke ProductController::landing dan diberi nama landing.",
      "Route::resource('produk', ProductController::class) menghasilkan route CRUD berdasarkan konvensi Laravel.",
      "show dikecualikan sehingga resource route aktif mencakup index, create, store, edit, update, dan destroy.",
      "route:list digunakan untuk memeriksa method, URI, action, dan nama route yang benar.",
      "Nama parameter {produk} harus konsisten dengan Route Model Binding pada Product $produk."
    ]
  },
  "serkom-blade-landing": {
    refs: ["Jobsheet hal. 20–22", "Rangkuman hal. 22–28"],
    competency: "Membangun layout Blade dan landing page dinamis yang menampilkan collection produk dari database.",
    coverage: [
      "Layout app.blade.php menyiapkan doctype, bahasa, charset, viewport, CSRF meta, title, stylesheet, dan @yield('content').",
      "Landing page memuat navbar, hero, tentang, keunggulan, produk, kontak, dan footer sesuai spesifikasi.",
      "@forelse menampilkan collection products sekaligus menyediakan cabang @empty ketika database belum memiliki produk.",
      "asset() membentuk URL aset dan number_format() memformat harga rupiah.",
      "Data mengalir dari controller melalui compact('products') lalu diakses sebagai $produk pada loop Blade."
    ]
  },
  "serkom-form-crud": {
    refs: ["Jobsheet hal. 22–26", "Rangkuman bagian 11"],
    competency: "Membangun partial form, halaman create/edit/index, CSRF, method spoofing, old(), error validation, dan aksi delete.",
    coverage: [
      "Partial _form.blade.php menghindari duplikasi field antara tambah dan edit.",
      "old() mengembalikan input lama setelah validation gagal dan dapat memakai nilai model sebagai fallback.",
      "@error menampilkan pesan validation pada field terkait dan @csrf melindungi form dari request lintas situs.",
      "@method('PUT') dan @method('DELETE') melakukan method spoofing karena form HTML hanya mengirim GET atau POST secara langsung.",
      "Index CRUD menampilkan tabel produk, tombol tambah, edit, hapus, notifikasi success, dan empty state."
    ]
  },
  "serkom-css": {
    refs: ["Jobsheet hal. 26–29", "Rangkuman bagian 12"],
    competency: "Menerapkan CSS lokal yang konsisten, terbaca, dan responsif tanpa dependency internet.",
    coverage: [
      "CSS memakai custom properties untuk warna, border, dan state agar desain konsisten.",
      "Grid digunakan pada hero, features, dan product cards; container menjaga lebar konten tetap terkendali.",
      "Form dan tabel memiliki state fokus, error, success, tombol aksi, dan overflow yang sesuai.",
      "Media query max-width 800px mengubah layout menjadi satu kolom dan memungkinkan tabel digulir horizontal.",
      "Kriteria tampilan latihan menekankan keterbacaan, konsistensi, dan fungsi, bukan kompleksitas visual."
    ]
  },
  "serkom-workflow": {
    refs: ["Jobsheet hal. 29–30", "Rangkuman bagian 13"],
    competency: "Menjalankan aplikasi dan menelusuri workflow Create, Read, Update, Delete dari browser sampai database.",
    coverage: [
      "php artisan optimize:clear membersihkan cache terkait sebelum pemeriksaan akhir.",
      "php artisan route:list memastikan seluruh route tersedia dan php artisan serve menjalankan server lokal.",
      "Checklist CRUD memeriksa landing, data dinamis, index, tambah valid, penolakan invalid, edit, hapus, pesan, dan responsivitas.",
      "Setiap operasi perlu ditelusuri sebagai request → route → controller → model/database → redirect/view → browser.",
      "Hasil aktual dibandingkan dengan spesifikasi sebelum fitur dinyatakan selesai."
    ]
  },
  "serkom-debugging": {
    refs: ["Jobsheet hal. 31, 34, 40", "Rangkuman bagian 14"],
    competency: "Melakukan debugging terstruktur mulai dari reproduksi error sampai bukti uji ulang.",
    coverage: [
      "Prosedur debugging: reproduksi, baca pesan, catat jenis/file/baris/route/data, buat hipotesis, ubah bagian terkecil, uji ulang, dan catat bukti.",
      "Latihan bug mencakup undefined variable, route not defined, $fillable kosong, nama kolom tidak konsisten, directive Blade tidak ditutup, dan validation harga yang lemah.",
      "Troubleshooting cepat mencakup PHP/Composer tidak dikenali, APP_KEY kosong, database connection, migration, route, view, CSRF 419, method 405, CSS, dan testing DB.",
      "Catatan debugging merekam waktu, fitur, pesan error, file/baris, dugaan penyebab, perbaikan, hasil uji ulang, dan bukti."
    ]
  },
  "serkom-testing": {
    refs: ["Jobsheet hal. 31–34, 38–39", "Rangkuman bagian 15"],
    competency: "Merancang dan menjalankan pengujian manual serta Feature Test Laravel dan menganalisis hasilnya.",
    coverage: [
      "Pengujian mencakup kebutuhan uji, dokumentasi, data uji, pelaksanaan, evaluasi, dan tindak lanjut.",
      "TC-01 sampai TC-10 mencakup landing, kondisi kosong, tambah valid, nama kosong, harga huruf, harga negatif, edit, hapus, fallback gambar, dan sinkronisasi landing.",
      "Feature test menggunakan RefreshDatabase, HTTP request test, assertOk, assertSee, assertRedirect, assertDatabaseHas, dan assertSessionHasErrors.",
      "php artisan test harus menghasilkan PASS; bila FAIL, nama test, pesan, expected/actual, dan stack trace dianalisis.",
      "Kesiapan U8 menuntut seluruh KUK pengujian teramati dan kesalahan yang ditemukan dapat diselesaikan."
    ]
  },
  "serkom-portfolio": {
    refs: ["Jobsheet hal. 35–39", "Rangkuman bagian 16"],
    competency: "Menyusun README, struktur portofolio, screenshot, catatan debugging, laporan testing, presentasi, log pengerjaan, dan rekap kesiapan.",
    coverage: [
      "README memuat teknologi, cara menjalankan, fitur, struktur utama, pengujian, dan identitas peserta.",
      "Portofolio memisahkan source code, spesifikasi, screenshot, debugging, testing, dan README.",
      "Bukti wajib meliputi spesifikasi/IPO, source, migration/model, controller/route, views, CSS/aset, README, screenshot, debugging, hasil uji, dan output test.",
      "Presentasi 5 menit mengikuti kebutuhan, alur MVC, demo CRUD, validation, satu bug, testing, dan bukti.",
      "File .env yang sensitif tidak dikumpulkan atau dipublikasikan."
    ]
  },
  "serkom-asesor": {
    refs: ["Jobsheet hal. 40–41", "Rangkuman bagian 17"],
    competency: "Menjawab pertanyaan observasi atau lisan dengan penjelasan singkat, tepat, dan dapat dibuktikan.",
    coverage: [
      "Pertanyaan mencakup alasan satu tabel products, fungsi migration/model/controller/route/view, $fillable, integer harga, dan alur produk ke landing.",
      "Peserta perlu menjelaskan perbedaan running dan debugging, fungsi route:list, @csrf dan @method, serta alasan @forelse digunakan.",
      "Pertanyaan lanjutan mencakup beda store-update, pentingnya dokumentasi sesuai kode, langkah awal undefined variable, dan expected versus actual result.",
      "Jawaban yang kuat menghubungkan definisi dengan file, method, perintah, atau bukti yang benar-benar digunakan pada proyek."
    ]
  },
  "serkom-cheatsheet": {
    refs: ["Jobsheet hal. 41–42", "Rangkuman bagian 18"],
    competency: "Menguasai urutan kerja, perintah inti, refleksi, rujukan, dan strategi latihan mandiri sebelum SERKOM.",
    coverage: [
      "Cheat sheet mencakup composer install, key:generate, about, config:clear, optimize:clear, make:model, make:controller, make:seeder, make:test, migrate, db:seed, route:list, serve, dan test.",
      "Refleksi peserta menilai bagian yang dikuasai, bagian membingungkan, error terpenting, bukti keaslian kode, dan target latihan berikutnya.",
      "Urutan latihan yang efektif adalah setup → database → backend → views → validation → debugging → testing → dokumentasi → presentasi.",
      "Jobsheet dianjurkan digunakan berulang sampai peserta mampu menyelesaikan proyek tanpa bergantung pada potongan kode lengkap.",
      "Rujukan utama meliputi SKKNI 282 Tahun 2016, dokumentasi Laravel 12, dan perangkat MUK sekolah/LSP."
    ]
  }
};

const coverage = { ...math, ...indonesian, ...english, ...serkom };

export function getSourceCoverage(topicId) {
  const item = coverage[topicId];
  if (!item) return { sourceReferences: [], sourceCompetency: "", sourceCoverage: [] };
  return {
    sourceReferences: item.refs,
    sourceCompetency: item.competency,
    sourceCoverage: item.coverage
  };
}
