const people = ["Alya", "Bima", "Citra", "Damar", "Farhan", "Gita", "Hana", "Iqbal", "Nadia", "Raka", "Salsa", "Tio"];
const places = ["kantin sekolah", "perpustakaan", "halte bus", "minimarket", "lapangan olahraga", "ruang kelas", "koperasi sekolah", "rumah", "pasar lingkungan", "tempat praktik", "kafe kecil", "pusat layanan warga"];
const moments = ["pagi hari", "setelah jam pelajaran", "sore hari", "akhir pekan", "saat persiapan kegiatan", "sebelum presentasi", "ketika melakukan evaluasi", "saat kegiatan kelompok"];
const englishPeople = ["Alya", "Ben", "Clara", "Dion", "Emma", "Faris", "Grace", "Hana", "Kevin", "Lina", "Maya", "Rafi"];
const englishPlaces = ["school library", "bus stop", "school canteen", "community park", "small shop", "classroom", "sports hall", "family kitchen", "local market", "internship office", "study room", "community center"];
const englishMoments = ["in the morning", "after class", "in the afternoon", "at the weekend", "before a school event", "during a group project", "before a presentation", "while preparing a report"];

const math = {
  "himpunan-bilangan": ["mencatat jenis barang yang tersedia dan membandingkan kelompok barang berdasarkan syarat tertentu", "mengelompokkan peserta kegiatan berdasarkan kriteria yang berbeda lalu mencari anggota yang termasuk pada gabungan atau irisan kelompok", "menyusun daftar fasilitas yang dapat dipakai oleh dua kelompok kegiatan dengan aturan keanggotaan yang berbeda"],
  "eksponen": ["menghitung pertumbuhan kapasitas penyimpanan digital yang berlipat secara teratur", "membandingkan pola penggandaan jumlah paket pada beberapa tahap pengiriman", "menyederhanakan model perkalian berulang ketika menghitung susunan benda dalam beberapa lapis"],
  "operasi-khusus": ["menggunakan aturan hitung buatan untuk mengubah poin belanja menjadi nilai akhir", "menerapkan rumus khusus yang dipakai sebuah permainan edukasi untuk menghitung skor", "membaca aturan pengolahan dua nilai pada sebuah aplikasi latihan"],
  "fungsi-invers": ["menelusuri kembali harga awal dari harga setelah potongan atau penyesuaian", "mengubah hasil pengukuran kembali ke nilai sebelum proses konversi", "mencari nilai masukan ketika hasil sebuah proses perhitungan sudah diketahui"],
  "komposisi-fungsi": ["menghitung harga setelah dua tahap diskon yang diterapkan berurutan", "menentukan hasil akhir setelah sebuah nilai melewati dua aturan pengolahan", "menghitung biaya akhir setelah tarif dasar diproses oleh dua ketentuan berbeda"],
  "barisan-aritmetika": ["mengatur jumlah kursi tiap baris pada acara sekolah dengan pertambahan tetap", "menabung dengan kenaikan nominal setoran yang sama setiap periode", "menyusun jadwal produksi harian yang bertambah dengan selisih tetap"],
  "barisan-geometri": ["memodelkan jumlah pengikut atau penyebaran informasi yang bertambah dengan rasio tetap", "menghitung perubahan jumlah mikroorganisme pada simulasi laboratorium sederhana", "menganalisis nilai yang berkurang atau bertambah dengan faktor yang sama setiap tahap"],
  "sistem-pertidaksamaan": ["menentukan kombinasi barang yang masih memenuhi batas anggaran dan kapasitas", "memilih jumlah dua jenis paket yang memenuhi batas waktu dan biaya", "menentukan daerah kemungkinan keputusan ketika beberapa syarat harus dipenuhi sekaligus"],
  "spl": ["menentukan harga satuan dua jenis barang dari total beberapa pembelian", "mencari jumlah dua jenis tiket berdasarkan total tiket dan total pendapatan", "menentukan nilai dua besaran yang harus memenuhi beberapa persamaan sekaligus"],
  "sudut-garis-sejajar": ["menganalisis sudut pada marka jalan, rak, dan garis dekorasi yang sejajar", "mengukur kemiringan dua garis pada desain papan informasi", "menentukan pasangan sudut pada struktur sederhana yang memiliki garis sejajar"],
  "bangun-ruang-garis-bidang": ["menentukan hubungan rak, lantai, dinding, dan garis tepi pada sebuah ruangan", "menganalisis posisi tiang dan bidang pada desain ruang pamer", "menentukan hubungan garis dan bidang pada bentuk kotak penyimpanan atau ruangan"],
  "kesebangunan": ["memperkirakan tinggi benda dari bayangan atau model berskala", "mengubah ukuran desain poster tanpa mengubah perbandingan bentuk", "membandingkan ukuran dua bentuk yang serupa pada denah dan benda nyata"],
  "pythagoras": ["menghitung panjang kabel yang dipasang secara diagonal pada dinding", "menentukan jarak terpendek pada lintasan berbentuk siku-siku", "menghitung panjang penyangga diagonal pada rak atau taman"],
  "transformasi": ["memindahkan posisi objek pada denah digital melalui refleksi, rotasi, translasi, atau dilatasi", "menentukan posisi ikon setelah desain diputar atau dicerminkan", "menganalisis perubahan koordinat pada peta sederhana"],
  "jarak-ruang": ["menghitung panjang kabel dari satu sudut ruangan ke sudut lain", "menentukan jarak terpendek antara dua titik pada kotak penyimpanan", "mengukur lintasan diagonal di dalam ruangan atau kemasan berbentuk balok"],
  "keliling-luas": ["menghitung bahan untuk bingkai, pagar, stiker, atau lantai", "menentukan luas area yang akan dicat atau ditutup bahan", "menghitung panjang tepi dan luas desain gabungan pada kebutuhan rumah atau sekolah"],
  "volume-bangun-ruang": ["menghitung kapasitas kotak, bak, atau ruang penyimpanan", "menentukan jumlah kemasan yang dapat dimuat pada ruang tertentu", "membandingkan volume wadah untuk kebutuhan pengiriman atau penyimpanan"],
  "luas-permukaan": ["menghitung kebutuhan kertas pembungkus, cat, atau stiker pada benda tiga dimensi", "menentukan bahan yang diperlukan untuk melapisi bagian luar wadah", "menghitung luas sisi benda yang akan diberi label atau pelindung"],
  "trigonometri": ["memperkirakan tinggi tiang atau bangunan dari sudut pandang dan jarak", "menghitung kemiringan tangga atau atap", "menentukan hubungan sisi pada pengukuran yang sulit dilakukan secara langsung"],
  "diagram-grafik": ["membaca perubahan jumlah pengunjung, penjualan, atau penggunaan listrik dari waktu ke waktu", "membandingkan data kegiatan kelas melalui grafik", "menarik kesimpulan dari tren data yang disajikan dalam tabel atau diagram"],
  "aturan-pencacahan": ["menghitung banyak susunan jadwal, tempat duduk, atau kombinasi pilihan", "menentukan banyak cara memilih pakaian atau menu dari beberapa pilihan", "menghitung banyak kemungkinan penataan orang atau benda dengan syarat tertentu"],
  "statistika": ["menganalisis nilai latihan, waktu tempuh, atau jumlah pengunjung", "membandingkan rata-rata dan median dari data kegiatan sehari-hari", "menilai apakah satu data ekstrem memengaruhi ringkasan kumpulan data"],
  "peluang-tunggal": ["menghitung peluang memperoleh kupon, warna, atau nomor tertentu dalam undian sederhana", "menentukan peluang terpilihnya satu kategori dari sekumpulan pilihan", "menganalisis kesempatan terjadinya satu kejadian pada permainan atau pengambilan acak"],
  "peluang-majemuk": ["menghitung peluang dua kejadian yang terjadi bersama atau berurutan", "menganalisis undian bertahap dengan beberapa kategori hasil", "menentukan peluang gabungan pada aktivitas pengambilan benda atau pemilihan acak"]
};

const indonesian = {
  "bi-informasi-eksplisit": ["membaca pengumuman perubahan jadwal transportasi dan mencari informasi yang dinyatakan langsung", "membaca informasi layanan perpustakaan untuk menentukan fakta utama", "membaca pemberitahuan kegiatan lingkungan dan mengidentifikasi ide pokok serta rincian penting"],
  "bi-kosakata-kontekstual": ["menafsirkan istilah pada ulasan belanja daring, berita sekolah, atau percakapan layanan publik", "memahami makna frasa yang berubah sesuai konteks kalimat", "menentukan arti ungkapan pada artikel teknologi yang dekat dengan kehidupan sehari-hari"],
  "bi-inferensi": ["menarik kesimpulan dari percakapan, pengumuman, atau pengalaman tokoh yang tidak menyatakan semuanya secara langsung", "menentukan maksud tersirat pada pesan layanan atau cerita singkat", "menghubungkan beberapa petunjuk untuk memahami akibat yang tidak ditulis secara eksplisit"],
  "bi-evaluasi-gagasan": ["menilai kekuatan alasan dalam artikel tentang penggunaan gawai, transportasi, sampah, atau kebiasaan belajar", "membedakan bukti yang relevan dan pernyataan yang hanya berupa asumsi", "menilai apakah data yang diberikan benar-benar mendukung pendapat penulis"],
  "bi-fiksi": ["membaca cerita tentang pertemanan, keluarga, kegiatan sekolah, pekerjaan kreatif, atau perubahan teknologi", "menafsirkan konflik tokoh dalam situasi yang dekat dengan kehidupan remaja", "memahami suasana, simbol, dan perubahan sikap tokoh melalui detail cerita"],
  "bi-teks-jamak": ["membandingkan dua pendapat tentang kerja paruh waktu, transportasi, teknologi, atau lingkungan", "menyintesis informasi dari dua teks yang melihat masalah sehari-hari dari sudut berbeda", "menentukan titik temu dan perbedaan argumen pada dua bacaan"],
  "bi-pg-kompleks": ["memeriksa beberapa pernyataan sekaligus berdasarkan bacaan tentang layanan publik, kebiasaan digital, atau kegiatan sekolah", "menilai setiap opsi secara mandiri sebelum menentukan kombinasi jawaban", "memverifikasi beberapa klaim terhadap bukti dalam satu atau dua teks"]
};

const english = {
  "en-textual": ["reading a school notice and locating details that are directly stated", "reading information about a library service and identifying the main explicit facts", "reading a short daily announcement and organizing the important details"],
  "en-inferential": ["using clues from a message, short story, or daily situation to reach a reasonable conclusion", "connecting two or more details to understand an idea that is not directly stated", "inferring a person's intention from actions and context"],
  "en-evaluation": ["evaluating whether an opinion about study habits, transport, technology, or the environment is supported by evidence", "judging the strength of reasons in a short everyday argument", "deciding which statement is most consistent with the writer's evidence and purpose"],
  "en-descriptive": ["reading a description of a local park, school facility, tourist place, or small business", "identifying details that help a reader imagine a familiar place", "understanding how descriptive details are organized to present an object or place"],
  "en-recount": ["reading about a school trip, internship day, family event, or weekend activity", "following the sequence of events in a personal experience", "identifying what happened, when it happened, and how the writer responded"],
  "en-narrative": ["reading a story about friendship, responsibility, family, or a simple challenge", "tracking characters, conflict, and resolution in a familiar setting", "inferring a lesson from events in a short narrative"],
  "en-procedure": ["reading instructions for preparing food, using a school facility, organizing study materials, or completing a simple task", "following ordered steps in a practical daily activity", "identifying the purpose, materials, and sequence of a procedure"],
  "en-exposition": ["reading an argument about screen time, public transport, recycling, part-time work, or school rules", "identifying a claim and the reasons used to support it", "evaluating an everyday issue presented through an analytical argument"],
  "en-vocabulary": ["using surrounding sentences to understand a word in a message, notice, article, or short story", "identifying what a pronoun or reference word points to", "working out contextual meaning without translating every word"],
  "en-multiple-texts": ["comparing two short texts about study choices, work, travel, technology, or community activities", "combining information from different sources before making a conclusion", "checking several statements against two related everyday texts"]
};

const serkom = {
  "serkom-skkni-muk": ["menyiapkan bukti praktik sebelum simulasi kompetensi dan memastikan setiap bukti sesuai unit yang dinilai", "mencocokkan kegiatan proyek dengan unit kompetensi dan dokumen asesmen", "menata portofolio latihan agar aktivitas, hasil, dan bukti dapat ditelusuri"],
  "serkom-inti-mvc": ["menelusuri alur halaman produk pada aplikasi usaha kecil ketika pengguna membuka halaman melalui browser", "menjelaskan mengapa route, controller, model, database, dan view memiliki tanggung jawab berbeda", "menganalisis alur request ketika data produk harus ditampilkan dari database"],
  "serkom-skenario-ipo": ["menerjemahkan kebutuhan pemilik usaha kecil menjadi input, proses, dan output aplikasi", "menentukan batas fitur agar proyek CRUD tetap sesuai ruang lingkup", "menjelaskan alur data dari form hingga tampil kembali di halaman"],
  "serkom-syntax": ["membaca potongan kode proyek dan membedakan variabel, array, object operator, scope resolution, dan directive Blade", "menentukan fungsi simbol yang sering muncul ketika memperbaiki kode Laravel", "menghubungkan sintaks PHP, HTML, Blade, CSS, dan HTTP dengan fungsi praktisnya"],
  "serkom-environment": ["menyiapkan komputer laboratorium sebelum praktik dan memastikan PHP, Composer, Laravel, serta MySQL dapat digunakan", "memeriksa konfigurasi .env ketika aplikasi gagal terhubung ke database", "menentukan perintah terminal yang tepat saat menyiapkan proyek pada komputer baru"],
  "serkom-migration": ["mengubah kebutuhan data produk menjadi struktur tabel yang dapat dibuat ulang melalui migration", "memeriksa alasan tipe data dan nullable pada tabel products", "menentukan tindakan ketika tabel belum tersedia atau perlu di-rollback"],
  "serkom-model": ["memeriksa model Product ketika proses create atau update tidak bekerja sesuai harapan", "membedakan fungsi $fillable, casts(), dan Route Model Binding", "menelusuri bagaimana Eloquent mewakili data products pada kode aplikasi"],
  "serkom-seeder": ["menyiapkan data awal agar landing page dapat diuji tanpa menginput produk satu per satu", "menganalisis penggunaan array dan foreach ketika beberapa record dibuat secara berurutan", "memeriksa hubungan DatabaseSeeder dan ProductSeeder"],
  "serkom-controller": ["menelusuri request form tambah produk dari validasi hingga redirect", "menganalisis method store, update, dan destroy ketika hasil CRUD tidak sesuai", "memeriksa bagaimana controller mengatur input, query, dan pesan sesi"],
  "serkom-routing": ["memeriksa route:list ketika tombol pada halaman mengarah ke route yang salah", "mencocokkan HTTP method, URI, nama route, dan method controller", "menentukan route resource yang aktif ketika show dikecualikan"],
  "serkom-blade-landing": ["menampilkan produk dari database pada landing page usaha kecil", "memeriksa penggunaan layout, section, loop, dan fallback ketika data kosong", "menelusuri data dari controller hingga variabel Blade"],
  "serkom-form-crud": ["membangun form tambah dan edit tanpa menulis field yang sama dua kali", "memeriksa CSRF, method spoofing, old(), dan pesan error ketika form tidak bekerja", "menentukan fungsi partial form pada halaman create dan edit"],
  "serkom-css": ["memastikan landing page dan tabel CRUD tetap terbaca pada laptop dan ponsel", "menelusuri selector dan media query ketika tampilan tidak responsif", "memeriksa konsistensi ukuran, jarak, dan layout pada antarmuka"],
  "serkom-workflow": ["mendemonstrasikan alur create, read, update, dan delete dari browser sampai database", "menjelaskan perubahan data setelah satu aksi CRUD dilakukan", "menghubungkan route, controller, model, database, Blade, dan redirect dalam satu workflow"],
  "serkom-debugging": ["menangani error route, undefined variable, mass assignment, atau mismatch nama kolom secara terstruktur", "mencatat pesan error sebelum memperbaiki kode", "menguji ulang fitur setelah satu perubahan kecil dilakukan"],
  "serkom-testing": ["menjalankan skenario uji normal, batas, dan input tidak valid pada aplikasi produk", "membandingkan expected result dengan actual result", "membaca hasil php artisan test dan menentukan tindak lanjut jika satu test gagal"],
  "serkom-portfolio": ["menyiapkan README, screenshot, catatan debugging, dan hasil testing sebelum pengumpulan", "menentukan bukti yang perlu disertakan agar proses kerja dapat diverifikasi", "menyusun presentasi singkat yang menunjukkan kebutuhan, alur, CRUD, debugging, dan testing"],
  "serkom-asesor": ["menjawab pertanyaan lisan tentang fungsi migration, model, controller, route, Blade, validation, dan testing", "menjelaskan alasan teknis di balik kode yang sudah dibuat", "membedakan istilah yang sering tertukar saat sesi tanya jawab"],
  "serkom-cheatsheet": ["menyusun urutan perintah dan file yang harus diperiksa sebelum simulasi", "mengingat kembali alur kerja proyek tanpa bergantung pada langkah kode lengkap", "menggunakan ringkasan sebagai pemeriksaan akhir sebelum praktik mandiri"]
};

function pick(list, index) {
  return list[Math.abs(index) % list.length];
}

function detail(index, englishMode = false) {
  const n = Math.abs(Number(index) || 0);
  if (englishMode) {
    return {
      person: pick(englishPeople, n),
      partner: pick(englishPeople, Math.floor(n / 3) + 4),
      place: pick(englishPlaces, Math.floor(n / 5) + 2),
      moment: pick(englishMoments, Math.floor(n / 7) + 1),
      count: 12 + (n % 37),
      minutes: 15 + (n % 46),
      amount: 20 + (n % 81)
    };
  }
  return {
    person: pick(people, n),
    partner: pick(people, Math.floor(n / 3) + 4),
    place: pick(places, Math.floor(n / 5) + 2),
    moment: pick(moments, Math.floor(n / 7) + 1),
    count: 12 + (n % 37),
    minutes: 15 + (n % 46),
    amount: 20 + (n % 81)
  };
}

export function everydayContext(topic, variantIndex = 0) {
  const d = detail(variantIndex, topic.subjectId === "bahasa-inggris");
  if (topic.subjectId === "matematika") {
    const task = pick(math[topic.id] ?? ["menyelesaikan persoalan numerasi yang muncul pada kegiatan sehari-hari"], variantIndex);
    return {
      key: `${topic.id}-${Math.abs(Number(variantIndex) || 0)}`,
      text: `${d.person} dan ${d.partner} sedang berada di ${d.place} ${d.moment}. Mereka perlu ${task}. Catatan kegiatan memuat ${d.count} item dan waktu pemeriksaan sekitar ${d.minutes} menit. Sebagian informasi hanya memberi konteks, sedangkan data matematika yang benar-benar diperlukan terdapat pada bagian inti soal. Karena keputusan akan digunakan dalam kegiatan nyata, hasil perhitungan perlu diperiksa kembali agar sesuai dengan syarat, satuan, dan hubungan antarbesaran.`
    };
  }
  if (topic.subjectId === "bahasa-indonesia") {
    const task = pick(indonesian[topic.id] ?? ["membaca informasi sehari-hari secara kritis dan menentukan jawaban berdasarkan bukti teks"], variantIndex);
    return {
      key: `${topic.id}-${Math.abs(Number(variantIndex) || 0)}`,
      text: `${d.person} menerima sebuah bacaan ketika berada di ${d.place} ${d.moment}. Bacaan itu berkaitan dengan kegiatan yang dekat dengan kehidupan sehari-hari dan digunakan untuk ${task}. Dalam situasi seperti ini, pembaca sering menemukan fakta, contoh, pendapat, kata rujukan, serta informasi yang hanya tersirat dalam paragraf yang sama. Oleh karena itu, jawaban harus ditentukan dari bukti pada teks, bukan dari asumsi pribadi atau sekadar kemiripan kata dengan salah satu pilihan.`
    };
  }
  if (topic.subjectId === "bahasa-inggris") {
    const task = pick(english[topic.id] ?? ["reading an everyday text carefully and choosing an answer that is supported by evidence"], variantIndex);
    return {
      key: `${topic.id}-${Math.abs(Number(variantIndex) || 0)}`,
      text: `${d.person} is at the ${d.place} ${d.moment} and needs to practice ${task}. The situation is familiar, but the reading still contains details that have different functions: some state facts directly, some support an inference, and some only provide background. A careful reader should identify what the question asks, locate the strongest evidence, connect related sentences, and reject options that add information not supported by the text.`
    };
  }
  const task = pick(serkom[topic.id] ?? ["menelusuri masalah pada aplikasi Laravel 12 dan menjelaskan keputusan teknis berdasarkan alur program"], variantIndex);
  return {
    key: `${topic.id}-${Math.abs(Number(variantIndex) || 0)}`,
    text: `${d.person} sedang melakukan praktik sebagai pemrogram junior untuk membantu pengelolaan data produk pada usaha kecil. ${d.person} perlu ${task}. Pekerjaan dilakukan pada proyek Laravel 12 berbasis PHP 8.2 dan MySQL, sehingga setiap keputusan harus dikaitkan dengan file, request, data, output, dan cara verifikasi yang tepat. Dalam praktik nyata, halaman yang terlihat benar belum cukup; alur harus dapat dijelaskan, error harus dapat ditelusuri, dan hasil akhir perlu dibuktikan melalui browser, route, database, migration, atau test sesuai kebutuhan.`
  };
}
