const namesId = ["Alya", "Bima", "Citra", "Damar", "Faris", "Gita", "Hana", "Iqbal", "Jihan", "Kirana"];
const namesEn = ["Alex", "Bella", "Chris", "Diana", "Ethan", "Farah", "Grace", "Henry", "Irene", "Jason"];

const mathContexts = {
  "himpunan-bilangan": [
    "sedang memilah daftar peserta kegiatan ke dalam dua kelompok berdasarkan dua kriteria yang berbeda",
    "sedang mengelompokkan barang inventaris menurut dua syarat agar tidak ada item yang terhitung dua kali",
    "sedang menyusun daftar anggota klub berdasarkan kategori yang saling beririsan"
  ],
  "eksponen": [
    "sedang menghitung perubahan skala data yang ditulis dengan notasi pangkat agar perbandingan kapasitas lebih ringkas",
    "sedang membaca catatan pertumbuhan berulang yang menggunakan bentuk eksponen",
    "sedang menyederhanakan ukuran digital yang dinyatakan sebagai perkalian berpangkat"
  ],
  "operasi-khusus": [
    "sedang menggunakan aturan skor khusus yang ditetapkan panitia untuk menggabungkan dua nilai",
    "sedang menghitung indeks layanan dengan operasi yang didefinisikan sendiri oleh sistem",
    "sedang menerapkan rumus penilaian khusus pada dua data masukan"
  ],
  "fungsi-invers": [
    "sedang memakai aturan konversi yang mengubah nilai awal menjadi nilai keluaran dan perlu mencari kembali nilai asal",
    "sedang memeriksa sebuah mesin konversi dan harus menentukan input yang menghasilkan output tertentu",
    "sedang menggunakan tabel harga yang mengikuti fungsi linear dan perlu menelusuri nilai sebelum konversi"
  ],
  "komposisi-fungsi": [
    "sedang menghitung hasil setelah suatu data melewati dua tahap pemrosesan secara berurutan",
    "sedang menelusuri perubahan nilai yang diproses oleh fungsi pertama lalu fungsi kedua",
    "sedang memeriksa dua aturan konversi yang diterapkan berturut-turut pada nilai yang sama"
  ],
  "barisan-aritmetika": [
    "sedang menyusun jumlah kursi per baris dengan pertambahan tetap dari satu baris ke baris berikutnya",
    "sedang membuat target tabungan mingguan yang bertambah dengan selisih tetap",
    "sedang mencatat produksi harian yang meningkat dengan beda yang sama"
  ],
  "barisan-geometri": [
    "sedang mengamati jumlah yang berubah dengan rasio tetap pada setiap tahap",
    "sedang memperkirakan pertumbuhan berulang yang setiap periodenya dikalikan faktor yang sama",
    "sedang menata pola jumlah benda yang mengikuti perbandingan tetap antarbaris"
  ],
  "sistem-pertidaksamaan": [
    "sedang menentukan kombinasi pembelian yang harus memenuhi beberapa batas anggaran sekaligus",
    "sedang memilih jumlah dua jenis barang dengan batas kapasitas dan biaya",
    "sedang memetakan daerah pilihan yang memenuhi lebih dari satu syarat linear"
  ],
  "spl": [
    "sedang mencari harga satuan dua jenis barang dari dua transaksi berbeda",
    "sedang menentukan dua nilai yang harus memenuhi dua persamaan dari catatan pembelian",
    "sedang memisahkan kontribusi dua komponen berdasarkan dua total yang diketahui"
  ],
  "sudut-garis-sejajar": [
    "sedang memeriksa sudut pada dua garis sejajar yang dipotong sebuah garis agar pemasangan rangka tetap presisi",
    "sedang menentukan hubungan sudut pada pola jalur sejajar",
    "sedang menghitung sudut yang terbentuk pada dua garis sejajar dan sebuah garis potong"
  ],
  "bangun-ruang-garis-bidang": [
    "sedang menentukan posisi garis dan bidang pada rancangan sebuah ruangan",
    "sedang memeriksa hubungan sisi, rusuk, dan bidang pada model bangun ruang",
    "sedang menentukan bidang yang sesuai untuk memasang sebuah komponen pada kerangka tiga dimensi"
  ],
  "kesebangunan": [
    "sedang memperkirakan ukuran benda dari model yang memiliki bentuk sama dengan skala berbeda",
    "sedang menentukan panjang pada gambar rancangan yang sebangun dengan objek asli",
    "sedang menggunakan perbandingan sisi pada dua bentuk yang sebangun"
  ],
  "pythagoras": [
    "sedang menentukan panjang kabel diagonal dari dua ukuran tegak lurus yang sudah diketahui",
    "sedang menghitung jarak lurus pada denah dari perpindahan mendatar dan vertikal",
    "sedang menentukan sisi miring untuk memastikan sebuah penyangga memiliki panjang yang cukup"
  ],
  "transformasi": [
    "sedang memindahkan titik pada denah menggunakan aturan refleksi, rotasi, translasi, atau dilatasi",
    "sedang menentukan posisi baru sebuah objek setelah transformasi koordinat",
    "sedang memeriksa hasil dua transformasi berurutan pada sebuah titik"
  ],
  "jarak-ruang": [
    "sedang menentukan jarak terpendek antara dua titik pada ruang tiga dimensi",
    "sedang menghitung panjang penghubung diagonal di dalam ruangan",
    "sedang memperkirakan jarak langsung pada model balok atau kubus"
  ],
  "keliling-luas": [
    "sedang menghitung bahan tepi atau penutup yang dibutuhkan untuk sebuah bidang datar",
    "sedang menentukan panjang pembatas dan luas area pada rancangan sederhana",
    "sedang menghitung kebutuhan material berdasarkan keliling atau luas bentuk gabungan"
  ],
  "volume-bangun-ruang": [
    "sedang menentukan kapasitas sebuah wadah atau ruang penyimpanan",
    "sedang menghitung banyak benda yang dapat dimuat berdasarkan volume",
    "sedang membandingkan kapasitas beberapa bentuk ruang"
  ],
  "luas-permukaan": [
    "sedang menghitung banyak bahan pelapis yang menutupi permukaan sebuah benda tiga dimensi",
    "sedang memperkirakan luas stiker atau cat yang diperlukan untuk bagian luar sebuah wadah",
    "sedang menentukan luas bagian luar bangun ruang yang benar-benar harus ditutup"
  ],
  "trigonometri": [
    "sedang menentukan perbandingan sisi pada segitiga siku-siku untuk memperkirakan tinggi atau jarak",
    "sedang menggunakan sudut elevasi dan panjang sisi untuk menghitung ukuran yang sulit diukur langsung",
    "sedang menafsirkan sinus, cosinus, atau tangen pada pengukuran praktis"
  ],
  "diagram-grafik": [
    "sedang membaca perubahan data pada grafik agar keputusan didasarkan pada kecenderungan yang benar",
    "sedang membandingkan beberapa seri data dari diagram kegiatan",
    "sedang mengambil informasi numerik dari grafik sebelum membuat kesimpulan"
  ],
  "aturan-pencacahan": [
    "sedang menghitung banyak susunan atau pilihan yang mungkin tanpa mendaftar semuanya satu per satu",
    "sedang menentukan banyak cara menata posisi beberapa objek dengan syarat tertentu",
    "sedang menghitung kemungkinan kombinasi keputusan yang tersusun dari beberapa tahap"
  ],
  "statistika": [
    "sedang merangkum data kegiatan menggunakan ukuran pemusatan agar laporan mewakili kumpulan data",
    "sedang membandingkan rata-rata dan median sebelum menyimpulkan kondisi data",
    "sedang memeriksa perubahan satu nilai terhadap ukuran statistik keseluruhan"
  ],
  "peluang-tunggal": [
    "sedang menilai kemungkinan satu hasil terjadi dari seluruh hasil yang sama mungkin",
    "sedang menghitung peluang satu kejadian pada undian sederhana",
    "sedang membandingkan banyak hasil yang menguntungkan dengan seluruh ruang sampel"
  ],
  "peluang-majemuk": [
    "sedang menghitung peluang ketika lebih dari satu kejadian dipertimbangkan bersama",
    "sedang menilai kemungkinan gabungan dua kejadian pada sebuah percobaan",
    "sedang menentukan peluang kejadian bersyarat atau gabungan dari informasi yang tersedia"
  ]
};

const idContexts = {
  "bi-informasi-eksplisit": [
    "membaca pengumuman kegiatan untuk memastikan informasi yang tertulis secara langsung sebelum mengambil keputusan",
    "memeriksa pesan layanan agar tempat, waktu, tujuan, atau rincian utama tidak salah dipahami",
    "membaca laporan singkat dan harus menemukan ide pokok serta fakta yang dinyatakan eksplisit"
  ],
  "bi-kosakata-kontekstual": [
    "menemukan istilah yang maknanya bergantung pada kalimat dan perlu memilih padanan yang tidak mengubah maksud bacaan",
    "membaca artikel populer dan harus menafsirkan frasa berdasarkan konteks, bukan arti harfiah semata",
    "memeriksa makna kata rujukan atau istilah khusus dari hubungan antarkalimat"
  ],
  "bi-inferensi": [
    "membaca situasi yang tidak menyatakan kesimpulan secara langsung dan harus menarik makna tersirat dari bukti tindakan",
    "menilai hubungan sebab-akibat pada sebuah peristiwa untuk menemukan kesimpulan yang paling didukung",
    "membaca laporan singkat dan harus membedakan kesimpulan wajar dari asumsi yang tidak memiliki bukti"
  ],
  "bi-evaluasi-gagasan": [
    "membaca sebuah pendapat dan harus menilai alasan mana yang benar-benar mendukung atau melemahkan gagasan utama",
    "membandingkan klaim dengan bukti sebelum menyetujui sebuah keputusan",
    "menilai kualitas argumen pada informasi sehari-hari agar pilihan tidak hanya berdasarkan opini pribadi"
  ],
  "bi-fiksi": [
    "membaca cerita tentang pilihan dan konflik tokoh untuk memahami suasana, motivasi, serta makna simbolik",
    "menafsirkan tindakan tokoh dan perubahan suasana dalam sebuah cerita",
    "membaca karya fiksi dan harus menghubungkan detail cerita dengan konflik serta pesan yang tersirat"
  ],
  "bi-teks-jamak": [
    "membandingkan dua bacaan tentang masalah yang sama untuk menemukan perbedaan sudut pandang dan titik temu",
    "menggabungkan informasi dari dua sumber sebelum menentukan kesimpulan yang paling seimbang",
    "menilai dua teks yang saling berkaitan agar sintesis tidak mengambil informasi dari satu sisi saja"
  ],
  "bi-pg-kompleks": [
    "memeriksa beberapa pernyataan satu per satu karena lebih dari satu pernyataan dapat didukung oleh bacaan",
    "menilai kombinasi jawaban berdasarkan bukti yang berbeda pada teks",
    "memastikan setiap opsi benar secara mandiri sebelum memilih seluruh kombinasi yang tepat"
  ]
};

const enContexts = {
  "en-textual": [
    "is reading a notice or short message and needs to identify information that is stated directly",
    "is checking an everyday text for a specific detail before making a practical decision",
    "is reading a short passage and needs to distinguish the main idea from supporting details"
  ],
  "en-inferential": [
    "is reading a situation where the conclusion is not stated directly and must be inferred from evidence",
    "needs to connect actions, causes, and consequences in a short passage",
    "is deciding which conclusion is supported without adding outside assumptions"
  ],
  "en-evaluation": [
    "is evaluating whether a claim is supported by the reasons and evidence in a short text",
    "needs to judge the writer's purpose and the strength of an argument",
    "is comparing an opinion with the evidence used to justify it"
  ],
  "en-descriptive": [
    "is reading a description to identify concrete details about appearance, atmosphere, place, or object",
    "needs to understand how sensory details build a clear picture of a place",
    "is identifying which details make a descriptive text specific rather than general"
  ],
  "en-recount": [
    "is reading a past event and needs to follow the sequence from beginning to end",
    "needs to identify what happened, when it happened, and what followed",
    "is reading a personal or work-related experience and tracking its chronological order"
  ],
  "en-narrative": [
    "is reading a story and needs to connect the character's problem, actions, and outcome",
    "needs to identify the central conflict and the lesson supported by the events",
    "is interpreting how a character's choice changes the result of a story"
  ],
  "en-procedure": [
    "is following practical instructions and needs to identify the purpose and correct order of actions",
    "needs to determine which step must happen before another step in a daily procedure",
    "is reading instructions and identifying the imperative verbs that guide the task"
  ],
  "en-exposition": [
    "is reading an argument about an everyday issue and needs to identify the writer's position and reasons",
    "needs to distinguish a thesis from the evidence used to support it",
    "is evaluating how reasons are connected to a recommendation or claim"
  ],
  "en-vocabulary": [
    "finds an unfamiliar word in a sentence and needs to infer its meaning from nearby clues",
    "needs to identify what a reference word points to in an everyday text",
    "is choosing a contextual meaning that keeps the sentence's original message"
  ],
  "en-multiple-texts": [
    "is comparing two related texts and needs to combine evidence before reaching a conclusion",
    "needs to identify agreement and disagreement across two sources",
    "is checking several statements against information from more than one text"
  ]
};

const serkomContexts = {
  "serkom-skkni-muk": [
    "sedang menyiapkan bukti praktik dan harus memastikan aktivitas yang dilakukan dapat ditelusuri ke unit kompetensi yang dinilai",
    "sedang memeriksa kelengkapan portofolio sebelum simulasi asesmen",
    "sedang mencocokkan pekerjaan proyek dengan bukti yang dapat diverifikasi"
  ],
  "serkom-inti-mvc": [
    "sedang menelusuri request dari browser sampai data tampil kembali dan harus menentukan tanggung jawab setiap komponen MVC",
    "sedang memeriksa alur halaman produk yang melibatkan route, controller, model, database, dan view",
    "sedang menjelaskan mengapa satu masalah harus diperiksa pada komponen tertentu, bukan pada seluruh aplikasi sekaligus"
  ],
  "serkom-skenario-ipo": [
    "sedang mengubah kebutuhan pemilik usaha menjadi input, proses, output, dan batas fitur aplikasi",
    "sedang memastikan rancangan CRUD tidak keluar dari ruang lingkup satu tabel products",
    "sedang menelusuri alur data dari form sampai output yang dilihat pengguna"
  ],
  "serkom-syntax": [
    "sedang membaca potongan PHP, Laravel, Blade, HTML, CSS, dan HTTP untuk menentukan arti simbol yang memengaruhi perilaku program",
    "sedang memperbaiki kode dan harus membedakan operator object, scope resolution, array, directive, serta method HTTP",
    "sedang menjelaskan fungsi sintaks yang muncul pada file proyek"
  ],
  "serkom-environment": [
    "sedang menyiapkan komputer praktik dan harus memastikan PHP, Composer, Laravel, MySQL, serta konfigurasi .env bekerja bersama",
    "sedang menangani aplikasi yang gagal terhubung ke database setelah dipindahkan ke komputer lain",
    "sedang memverifikasi lingkungan sebelum menjalankan migration dan server lokal"
  ],
  "serkom-migration": [
    "sedang memeriksa struktur tabel products agar nama kolom, tipe data, nullable, dan rollback sesuai kebutuhan aplikasi",
    "sedang mencari penyebab ketidaksesuaian antara kode controller dan struktur database",
    "sedang menentukan perubahan skema yang harus dikelola melalui migration"
  ],
  "serkom-model": [
    "sedang memeriksa model Product ketika operasi Eloquent create atau update tidak bekerja sesuai data tervalidasi",
    "sedang membedakan tanggung jawab $fillable, casts(), dan Route Model Binding",
    "sedang menelusuri bagaimana record products direpresentasikan sebagai object Eloquent"
  ],
  "serkom-seeder": [
    "sedang menyiapkan data awal agar landing page dapat diuji tanpa memasukkan produk satu per satu",
    "sedang memeriksa array dan foreach yang membuat beberapa record Product",
    "sedang menelusuri hubungan DatabaseSeeder dengan ProductSeeder"
  ],
  "serkom-controller": [
    "sedang menelusuri method controller dari Request, validation, operasi Eloquent, redirect, sampai flash message",
    "sedang mencari penyebab aksi tambah atau edit produk tidak menghasilkan perubahan yang diharapkan",
    "sedang menentukan method controller yang bertanggung jawab pada satu aksi CRUD"
  ],
  "serkom-routing": [
    "sedang memeriksa route:list untuk mencocokkan URI, HTTP method, nama route, dan method controller",
    "sedang menangani tombol yang mengarah ke route yang salah",
    "sedang memastikan resource route hanya mengaktifkan endpoint yang dibutuhkan proyek"
  ],
  "serkom-blade-landing": [
    "sedang menelusuri data produk dari controller sampai ditampilkan melalui Blade",
    "sedang memeriksa layout, section, loop, dan kondisi data kosong pada landing page",
    "sedang mencari penyebab variabel produk tidak tampil di view"
  ],
  "serkom-form-crud": [
    "sedang memeriksa form create dan edit agar CSRF, method spoofing, old(), error, dan partial bekerja sesuai request",
    "sedang mencari penyebab form update tidak mengirim method yang diharapkan Laravel",
    "sedang mengurangi duplikasi field dengan form partial tanpa mengubah perilaku validasi"
  ],
  "serkom-css": [
    "sedang memperbaiki tampilan agar form dan tabel tetap terbaca pada ponsel tanpa mengubah logika backend",
    "sedang memeriksa selector dan media query yang menyebabkan layout keluar layar",
    "sedang memastikan perubahan CSS hanya memengaruhi presentasi, bukan data atau route"
  ],
  "serkom-workflow": [
    "sedang mendemonstrasikan satu alur CRUD lengkap dari browser, route, controller, model, database, sampai response",
    "sedang menjelaskan perubahan data yang terjadi setelah aksi create, update, atau delete",
    "sedang menelusuri titik verifikasi pada setiap tahap workflow"
  ],
  "serkom-debugging": [
    "sedang mereproduksi error, membaca pesan, membuat hipotesis, mengubah bagian terkecil yang relevan, lalu menguji ulang",
    "sedang menangani Route not defined, undefined variable, atau MassAssignmentException secara terstruktur",
    "sedang menentukan file dan baris yang harus diperiksa berdasarkan gejala yang muncul"
  ],
  "serkom-testing": [
    "sedang membandingkan expected result dengan actual result pada skenario uji normal dan invalid",
    "sedang membaca hasil feature test untuk menentukan apakah data dan response sudah sesuai",
    "sedang memeriksa assertion yang tepat untuk response atau database"
  ],
  "serkom-portfolio": [
    "sedang menyiapkan README, screenshot, catatan debugging, dan laporan testing agar proses kerja dapat diverifikasi",
    "sedang memilih bukti yang menunjukkan fungsi aplikasi, bukan hanya tampilan akhir",
    "sedang menyusun presentasi singkat yang mengikuti alur kebutuhan, implementasi, debugging, dan testing"
  ],
  "serkom-asesor": [
    "sedang menjawab pertanyaan teknis dan harus menjelaskan fungsi komponen berdasarkan alur program yang benar",
    "sedang membedakan istilah Laravel yang sering tertukar saat sesi verifikasi",
    "sedang menjelaskan alasan teknis di balik kode yang sudah dibuat"
  ],
  "serkom-cheatsheet": [
    "sedang menyusun urutan pemeriksaan dari environment, database, backend, view, debugging, testing, sampai dokumentasi",
    "sedang melakukan pemeriksaan akhir sebelum praktik mandiri",
    "sedang menentukan langkah berikutnya berdasarkan posisi pekerjaan pada workflow proyek"
  ]
};


const mathGoals = [
  "Hasilnya akan dipakai untuk menentukan keputusan akhir pada kegiatan tersebut.",
  "Nilai yang diperoleh menentukan apakah rencana dapat dilanjutkan sesuai kebutuhan.",
  "Perhitungan itu menjadi dasar untuk memilih ukuran, jumlah, atau posisi yang tepat.",
  "Tim perlu memperoleh hasil yang tepat sebelum menetapkan langkah berikutnya.",
  "Keputusan akhir bergantung langsung pada hubungan angka dan syarat yang tersedia.",
  "Hasil perhitungan akan dicocokkan dengan kebutuhan nyata pada kegiatan itu.",
  "Nilai yang dicari digunakan untuk memastikan rencana memenuhi batas yang telah ditentukan.",
  "Perhitungan yang benar diperlukan agar keputusan tidak bertentangan dengan data yang tersedia."
];

const idGoals = [
  "Jawaban harus ditentukan dari bukti yang terdapat pada bacaan yang sama.",
  "Rincian dalam teks akan dipakai untuk menjawab pertanyaan tanpa menambah asumsi.",
  "Informasi utama pada bacaan perlu dibedakan dari simpulan yang tidak didukung.",
  "Keputusan akhir harus mengikuti fakta, hubungan gagasan, atau makna yang benar-benar muncul dalam teks.",
  "Setiap pilihan akan diperiksa terhadap informasi yang tertulis atau tersirat secara wajar dalam bacaan.",
  "Pembaca perlu menghubungkan pertanyaan dengan bagian teks yang menjadi bukti jawabannya.",
  "Jawaban yang dipilih harus tetap konsisten dengan konteks dan maksud bacaan.",
  "Teks menjadi satu-satunya dasar untuk menentukan informasi, inferensi, atau evaluasi yang diminta."
];

const enGoals = [
  "The answer must be supported by evidence from the same passage.",
  "The details in the text are needed to answer without adding unsupported assumptions.",
  "The reader needs to connect the question with the sentence or idea that supports it.",
  "The final choice must remain consistent with the meaning and evidence in the passage.",
  "Each option will be checked against information stated or reasonably implied in the text.",
  "The task requires distinguishing supported details from conclusions that go beyond the passage.",
  "The passage provides the evidence needed for the requested textual, inferential, or evaluative judgment.",
  "The response must follow the context, sequence, purpose, or argument presented in the text."
];

const serkomGoals = [
  "Hasil analisis akan menentukan komponen atau file yang perlu diperiksa berikutnya.",
  "Tim harus menghubungkan gejala dengan bagian program yang benar sebelum melakukan perubahan.",
  "Keputusan teknis harus sesuai dengan alur request, data, proses, dan response pada aplikasi.",
  "Setiap langkah perbaikan harus dapat diverifikasi melalui output, route, data, atau hasil pengujian.",
  "Tim perlu menentukan tindakan terkecil yang relevan agar perubahan tidak merusak bagian lain.",
  "Analisis harus membedakan fungsi route, controller, model, database, view, dan pengujian.",
  "Potongan kode yang diperiksa menjadi dasar untuk menentukan penyebab, fungsi, atau langkah verifikasi.",
  "Jawaban teknis harus konsisten dengan perilaku Laravel dan batas proyek yang sedang dikerjakan."
];

const enVerificationGoals = [
  "Therefore, every relevant detail must be connected directly to the answer.",
  "The final choice needs to be checked against the information provided.",
  "No conclusion should depend on information outside the task.",
  "Each detail should be used according to its role in the passage.",
  "The selected answer must be explainable through a clear chain of evidence.",
  "A conclusion is acceptable only when it matches all relevant information.",
  "Before the answer is locked, the connection between evidence and conclusion should be checked.",
  "The reasoning should remain consistent from the first detail to the final choice."
];

const verificationGoals = [
  "Karena itu, data yang disebutkan pada persoalan harus digunakan secara langsung.",
  "Hasil akhirnya perlu diperiksa kembali terhadap syarat yang diberikan.",
  "Tidak ada langkah yang boleh didasarkan pada informasi di luar persoalan.",
  "Setiap bagian informasi perlu dipakai sesuai fungsinya dalam penyelesaian.",
  "Pilihan akhir harus dapat dijelaskan dengan proses yang runtut.",
  "Kesimpulan hanya dianggap tepat jika sesuai dengan seluruh informasi yang relevan.",
  "Sebelum jawaban dikunci, hubungan antara data dan hasil perlu diverifikasi.",
  "Langkah penyelesaian harus tetap konsisten dari awal sampai hasil akhir."
];

function pick(items, index) {
  return items[Math.abs(Number(index) || 0) % items.length];
}

function actor(subjectId, index) {
  const names = subjectId === "bahasa-inggris" ? namesEn : namesId;
  return pick(names, index);
}

export function linkedContext(topic, variantIndex = 0) {
  const numeric = Math.abs(Math.trunc(Number(variantIndex) || 0));
  const person = actor(topic.subjectId, numeric);
  const key = `${topic.id}-${numeric}`;
  const verification = topic.subjectId === "bahasa-inggris" ? pick(enVerificationGoals, Math.floor(numeric / 80)) : pick(verificationGoals, Math.floor(numeric / 80));
  if (topic.subjectId === "matematika") {
    const activity = pick(mathContexts[topic.id] ?? ["sedang menyelesaikan persoalan numerasi yang langsung digunakan dalam kegiatan"], numeric);
    const goal = pick(mathGoals, Math.floor(numeric / 10));
    return {
      key,
      introShort: `${person} ${activity}. ${goal}`,
      intro: `${person} ${activity}. ${goal} ${verification}`,
      bridge: "Angka, syarat, dan hubungan matematis pada persoalan merupakan informasi yang dipakai langsung untuk memperoleh hasil tersebut."
    };
  }
  if (topic.subjectId === "bahasa-indonesia") {
    const activity = pick(idContexts[topic.id] ?? ["sedang membaca informasi sehari-hari dan harus menentukan jawaban berdasarkan bukti yang tersedia"], numeric);
    const goal = pick(idGoals, Math.floor(numeric / 10));
    return {
      key,
      introShort: `${person} ${activity}. ${goal}`,
      intro: `${person} ${activity}. ${goal} ${verification}`,
      bridge: "Pertanyaan dan bacaan berada pada konteks yang sama sehingga bukti jawaban harus berasal dari informasi yang benar-benar tersedia dalam teks."
    };
  }
  if (topic.subjectId === "bahasa-inggris") {
    const activity = pick(enContexts[topic.id] ?? ["is reading an everyday text and needs to answer using evidence from the same text"], numeric);
    const goal = pick(enGoals, Math.floor(numeric / 10));
    return {
      key,
      introShort: `${person} ${activity}. ${goal}`,
      intro: `${person} ${activity}. ${goal} ${verification}`,
      bridge: "The question and passage belong to the same context, so the answer must follow the evidence that is actually available in the text."
    };
  }
  const activity = pick(serkomContexts[topic.id] ?? ["sedang menelusuri masalah teknis pada aplikasi dan harus menghubungkan gejala dengan komponen yang bertanggung jawab"], numeric);
  const goal = pick(serkomGoals, Math.floor(numeric / 10));
  return {
    key,
    introShort: `${person} ${activity}. ${goal}`,
    intro: `${person} ${activity}. ${goal} ${verification}`,
    bridge: "Kasus, kode, data, output, dan langkah verifikasi harus dibaca sebagai satu alur teknis yang saling berkaitan."
  };
}
