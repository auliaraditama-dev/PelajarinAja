const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (items) => items[rnd(0, items.length - 1)];

export function shuffleLanguage(items) {
  const values = [...items];
  for (let i = values.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}

function single(q, correct, distractors, explain, difficulty = "Sedang") {
  const values = [...new Set([String(correct), ...distractors.map(String)])];
  const fallback = ["Tidak disebutkan", "Tidak dapat disimpulkan", "Semua pilihan salah", "Tidak relevan"];
  let cursor = 0;
  while (values.length < 4) {
    const value = fallback[cursor] ?? `Pilihan ${cursor + 1}`;
    cursor += 1;
    if (!values.includes(value)) values.push(value);
  }
  const options = shuffleLanguage(values.slice(0, 4));
  return { q, options, answer: options.indexOf(String(correct)), explain, difficulty, points: 4, type: "single" };
}

function multi(q, correct, distractors, explain, difficulty = "Lanjut") {
  const correctStrings = [...new Set(correct.map(String))];
  const values = [...new Set([...correctStrings, ...distractors.map(String)])];
  const options = shuffleLanguage(values.slice(0, Math.max(5, correctStrings.length + 2)));
  const answer = correctStrings.map((item) => options.indexOf(item)).filter((index) => index >= 0).sort((a, b) => a - b);
  return { q, options, answer, explain, difficulty, points: 4, type: "multiple" };
}

const idNames = ["Alya", "Bima", "Citra", "Damar", "Faris", "Gita", "Hana", "Iqbal", "Jihan", "Kirana"];
const idDays = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const idPlaces = ["aula sekolah", "perpustakaan", "laboratorium komputer", "lapangan", "ruang multimedia", "balai desa", "taman kota", "ruang praktik"];
const idActivities = ["seminar literasi", "pelatihan desain", "pameran karya", "lomba presentasi", "kerja bakti", "diskusi buku", "pelatihan keamanan digital", "bazar sekolah"];

function generateIdExplicit() {
  const name = pick(idNames);
  const day = pick(idDays);
  const place = pick(idPlaces);
  const activity = pick(idActivities);
  const time = pick(["08.00", "08.30", "09.00", "10.00", "13.00", "14.30"]);
  const mode = rnd(0, 4);
  const text = `${name} mengikuti ${activity} pada ${day} pukul ${time} di ${place}. Setelah kegiatan selesai, ia menuliskan tiga hal penting pada buku catatannya.`;
  if (mode === 0) return single(`Bacalah teks: “${text}” Di mana kegiatan berlangsung?`, place, [pick(idPlaces.filter((x) => x !== place)), "di rumah", "di kantor kecamatan"], `Tempat disebut langsung dalam teks, yaitu ${place}.`, "Dasar");
  if (mode === 1) return single(`Bacalah teks: “${text}” Kapan ${name} mengikuti kegiatan tersebut?`, day, [pick(idDays.filter((x) => x !== day)), "Minggu", "Tidak disebutkan"], `Hari kegiatan dinyatakan eksplisit: ${day}.`, "Dasar");
  if (mode === 2) return single(`Bacalah teks: “${text}” Pukul berapa kegiatan dimulai menurut teks?`, time, ["07.00", "12.00", "16.00"], `Waktu yang tertulis langsung adalah pukul ${time}.`, "Dasar");
  if (mode === 3) return single(`Bacalah teks: “${text}” Kegiatan yang diikuti ${name} adalah ...`, activity, [pick(idActivities.filter((x) => x !== activity)), "rapat orang tua", "ujian praktik"], `Jenis kegiatan disebut langsung sebagai ${activity}.`, "Dasar");
  return single(`Paragraf berikut membahas ${name} yang mengikuti ${activity}, mencatat hal penting, dan hadir sesuai jadwal. Ide pokok yang paling tepat adalah ...`, `${name} mengikuti sebuah kegiatan dan mencatat hal penting dari kegiatan tersebut.`, [`${name} tidak menyukai kegiatan sekolah.`, `Kegiatan di ${place} dibatalkan.`, `${name} hanya datang untuk meminjam buku.`], `Ide pokok harus mencakup informasi utama tanpa menambah fakta baru.`, "Sedang");
}

const idVocabFacts = [
  ["batu loncatan", "tahap atau titik perantara untuk mencapai target berikutnya", ["penghalang yang menghentikan proses", "tempat istirahat fisik", "hasil akhir suatu pekerjaan"]],
  ["jalan tol bebas hambatan", "proses yang berlangsung sangat cepat dan lancar karena sedikit penghalang", ["jalan raya yang benar-benar dibangun", "proses yang sengaja dihentikan", "kegiatan yang tidak memiliki tujuan"]],
  ["dipandang sebelah mata", "dianggap kurang penting atau diremehkan", ["diamati dengan sangat teliti", "dihargai paling tinggi", "dilihat hanya dari jarak dekat"]],
  ["jaring pengaman", "perlindungan yang mengurangi risiko ketika masalah terjadi", ["alat untuk menangkap ikan", "sistem yang mempercepat pekerjaan", "aturan yang menghapus semua risiko"]],
  ["kerentanan", "keadaan mudah terkena risiko atau gangguan", ["kemampuan untuk selalu menang", "kondisi tanpa risiko", "kecepatan melakukan pekerjaan"]],
  ["esensi", "inti atau makna paling mendasar", ["hiasan tambahan", "kesalahan teknis", "bagian yang dapat diabaikan"]],
  ["kontras", "perbedaan yang terlihat jelas antara dua hal", ["kesamaan mutlak", "urutan waktu", "hubungan kepemilikan"]],
  ["tereksploitasi", "dimanfaatkan secara tidak adil untuk keuntungan pihak lain", ["diberi perlindungan penuh", "bekerja tanpa aturan apa pun", "menerima penghargaan khusus"]],
  ["kemandirian", "kemampuan mengelola kebutuhan dan keputusan tanpa bergantung penuh pada pihak lain", ["ketergantungan total", "penolakan terhadap semua bantuan", "kemampuan menghindari tanggung jawab"]],
  ["flawless", "sangat rapi atau tampak tanpa cacat", ["rusak berat", "belum selesai", "sulit dipahami"]],
  ["pivot", "titik yang dimanfaatkan untuk bergerak dari satu bagian sistem ke bagian lain", ["sistem cadangan yang selalu aman", "alat untuk memutus jaringan", "data yang sudah terenkripsi"]],
  ["upgrade skill", "meningkatkan kemampuan atau keterampilan", ["menghapus seluruh pengalaman", "menurunkan tingkat kemampuan", "mengganti pekerjaan tanpa belajar"]]
];

function generateIdVocabulary() {
  const [term, meaning, wrong] = pick(idVocabFacts);
  const style = rnd(0, 3);
  const contexts = [
    `Dalam konteks bacaan, frasa “${term}” digunakan untuk menjelaskan suatu keadaan. Makna yang paling tepat adalah ...`,
    `Jika frasa “${term}” diganti dengan padanan yang tetap mempertahankan makna kalimat, padanan terbaik adalah ...`,
    `Penulis memakai istilah “${term}” secara kontekstual. Yang dimaksud penulis ialah ...`,
    `Makna “${term}” yang paling sesuai dengan hubungan antarkalimat adalah ...`
  ];
  return single(contexts[style], meaning, wrong, `Makna kontekstual “${term}” adalah ${meaning}.`);
}

const idInferenceScenarios = [
  ["Raka membawa payung meski pagi masih cerah. Sebelum berangkat ia memeriksa prakiraan cuaca yang menunjukkan kemungkinan hujan sore hari.", "Raka mengantisipasi kemungkinan hujan.", ["Raka memastikan hujan sudah turun.", "Raka ingin membuang payungnya.", "Raka tidak mempercayai prakiraan cuaca."]],
  ["Nisa membaca petunjuk penggunaan dua kali sebelum menyalakan alat baru dan meminta temannya memeriksa kabel.", "Nisa bersikap hati-hati sebelum menggunakan alat.", ["Nisa tidak pernah menggunakan alat elektronik.", "Alat tersebut sudah pasti rusak.", "Nisa ingin membatalkan seluruh pekerjaan."]],
  ["Seusai presentasi, Dito mencatat semua saran guru lalu memperbaiki tiga slide pada malam yang sama.", "Dito terbuka terhadap umpan balik dan ingin memperbaiki hasilnya.", ["Dito menolak semua saran.", "Dito tidak memahami materi sama sekali.", "Guru meminta Dito menghapus presentasi."]],
  ["Setelah harga bahan baku naik, penjual mengurangi ukuran kemasan tetapi mempertahankan harga jual.", "Penjual berusaha menyesuaikan biaya tanpa menaikkan harga langsung.", ["Harga bahan baku turun drastis.", "Penjual tidak lagi menjual produk.", "Ukuran kemasan bertambah besar."]],
  ["Mira mematikan notifikasi ponsel selama dua jam belajar dan menaruh perangkatnya di luar jangkauan.", "Mira berusaha mengurangi distraksi saat belajar.", ["Mira ingin mengganti ponselnya.", "Mira tidak memiliki tugas belajar.", "Mira sedang menunggu panggilan penting."]],
  ["Ketika hasil otomatis tampak sempurna, Arya justru merasa karya tersebut kehilangan karakter yang ia kenal.", "Arya menilai kesempurnaan teknis belum tentu mempertahankan makna kreatif.", ["Arya selalu menolak teknologi apa pun.", "Arya tidak dapat melihat warna.", "Hasil otomatis pasti salah secara teknis."]],
  ["Tim tetap melakukan pencadangan data meskipun sistem belum pernah mengalami kehilangan data.", "Tim melakukan tindakan pencegahan terhadap risiko masa depan.", ["Tim yakin data akan hilang hari ini.", "Pencadangan membuat data tidak berguna.", "Sistem sudah tidak memiliki data."]],
  ["Sebelum memilih tempat magang, Sari membandingkan jarak, jenis pekerjaan, mentor, dan peluang belajar.", "Sari mempertimbangkan beberapa faktor sebelum mengambil keputusan.", ["Sari memilih secara acak.", "Sari hanya memikirkan jarak.", "Sari tidak ingin magang."]],
  ["Setelah beberapa pelanggan mengeluh, toko memperbaiki prosedur pengecekan barang sebelum pengiriman.", "Keluhan pelanggan mendorong toko memperbaiki kontrol kualitas.", ["Toko berhenti menerima pesanan.", "Pelanggan meminta harga dinaikkan.", "Prosedur lama sudah sempurna."]],
  ["Aplikasi tetap cepat saat diuji sendiri, tetapi melambat ketika ratusan pengguna masuk bersamaan.", "Masalah kemungkinan berkaitan dengan beban pengguna yang meningkat.", ["Aplikasi tidak pernah dapat dijalankan.", "Semua pengguna memiliki perangkat rusak.", "Jaringan pasti tidak terhubung sama sekali."]],
  ["Rina menyisihkan sebagian penghasilan lepas untuk dana darurat dan asuransi karena tidak memiliki tunjangan tetap.", "Rina mengantisipasi risiko finansial dari pekerjaan lepas.", ["Rina yakin penghasilannya akan berhenti besok.", "Rina mendapatkan semua tunjangan perusahaan.", "Rina tidak memiliki penghasilan."]],
  ["Guru meminta siswa mencatat pesan error sebelum memperbaiki program dan membandingkan kondisi sebelum serta sesudah perubahan.", "Guru menekankan debugging yang dapat ditelusuri dan dibuktikan.", ["Guru melarang siswa memperbaiki program.", "Pesan error tidak berguna.", "Semua error harus diselesaikan dengan mengganti seluruh kode."]]
];

function generateIdInference() {
  const [text, correct, wrong] = pick(idInferenceScenarios);
  const lead = pick(["Kesimpulan paling logis berdasarkan teks adalah ...", "Makna tersirat yang paling kuat adalah ...", "Apa yang dapat diinferensikan dari situasi tersebut?", "Pernyataan yang paling didukung oleh petunjuk teks adalah ..."]);
  return single(`“${text}” ${lead}`, correct, wrong, `Kesimpulan dipilih karena didukung oleh tindakan atau hubungan sebab-akibat yang disebut dalam teks.`);
}

const idEvaluationCases = [
  ["Program membaca 15 menit meningkatkan kebiasaan membaca siswa.", "Data frekuensi membaca siswa sebelum dan sesudah program dari sampel yang memadai.", ["Warna sampul buku favorit siswa.", "Pendapat satu siswa bahwa perpustakaan nyaman.", "Jumlah kursi di ruang kelas."]],
  ["Penggunaan lampu hemat energi dapat menurunkan konsumsi listrik sekolah.", "Catatan pemakaian listrik sebelum dan sesudah penggantian lampu dengan kondisi penggunaan sebanding.", ["Daftar warna lampu yang disukai siswa.", "Harga makanan kantin.", "Jumlah buku di perpustakaan."]],
  ["Pelatihan keamanan digital mengurangi penggunaan kata sandi lemah.", "Perbandingan audit kata sandi sebelum dan beberapa minggu setelah pelatihan.", ["Foto kegiatan pelatihan.", "Jumlah peserta yang memakai kacamata.", "Ukuran ruang seminar."]],
  ["Waktu tidur yang cukup membantu konsentrasi belajar.", "Hasil pengukuran pola tidur dan tes konsentrasi pada kelompok yang relevan.", ["Daftar merek alarm siswa.", "Warna kamar peserta.", "Pendapat tentang musik favorit."]],
  ["Jalur sepeda sekolah meningkatkan kebiasaan bersepeda siswa.", "Data jumlah siswa yang bersepeda sebelum dan sesudah jalur tersedia.", ["Jenis cat pada jalur.", "Jumlah guru matematika.", "Harga sepatu olahraga."]],
  ["Pemisahan jaringan IoT dapat mengurangi dampak peretasan ke server utama.", "Hasil pengujian keamanan yang menunjukkan perangkat IoT yang dibobol tidak dapat mengakses segmen server.", ["Kecepatan warna lampu berubah.", "Harga kabel jaringan.", "Jumlah kamar gedung."]],
  ["Pembelajaran dengan umpan balik cepat memperbaiki kualitas revisi tugas.", "Perbandingan kualitas draf sebelum dan setelah siswa menerima umpan balik terstruktur.", ["Nama file tugas.", "Jumlah meja kelas.", "Merek laptop guru."]],
  ["Pekerja lepas perlu menyiapkan perlindungan finansial mandiri.", "Data bahwa sebagian pekerja lepas tidak memperoleh tunjangan tetap dan harus menanggung biaya perlindungan sendiri.", ["Logo platform digital.", "Warna portofolio pekerja.", "Jumlah ikon pada aplikasi."]],
  ["Pengujian otomatis membantu menemukan regresi setelah perubahan kode.", "Riwayat test yang menunjukkan fungsi lama gagal setelah perubahan dan terdeteksi oleh test otomatis.", ["Tema warna editor kode.", "Nama folder proyek.", "Ukuran monitor pengembang."]],
  ["Membaca label gizi membantu konsumen membandingkan kandungan makanan.", "Studi yang mengukur ketepatan pilihan konsumen setelah memahami label gizi.", ["Desain logo produk.", "Musik di toko.", "Warna keranjang belanja."]]
];

function generateIdEvaluation() {
  const [claim, evidence, wrong] = pick(idEvaluationCases);
  const mode = rnd(0, 1);
  if (mode === 0) return single(`Klaim: “${claim}” Bukti yang paling kuat dan relevan untuk mendukung klaim tersebut adalah ...`, evidence, wrong, `Bukti terbaik mengukur langsung hubungan yang dinyatakan dalam klaim.`);
  return single(`Seorang penulis ingin membuat argumen “${claim}” lebih meyakinkan. Informasi tambahan yang paling berguna adalah ...`, evidence, wrong, `Informasi tambahan harus relevan langsung dengan klaim dan dapat diverifikasi.`);
}

const idFictionCases = [
  ["Ruang itu dingin dan sunyi. Dira menatap karya digital yang sempurna, tetapi ia merasa bagian paling manusiawi dari karyanya telah hilang.", "konflik antara efisiensi teknologi dan nilai personal/kreatif", "melankolis dan penuh keraguan"],
  ["Arman berdiri di depan pintu ruang lomba. Tangannya gemetar, tetapi ia tetap masuk setelah membaca pesan dukungan dari ibunya.", "perjuangan melawan rasa takut dalam diri", "tegang namun penuh harapan"],
  ["Setiap sore, Lela menyiram tanaman milik nenek yang sudah tiada. Ia selalu berhenti sejenak ketika aroma bunga memenuhi halaman.", "kerinduan dan proses menjaga kenangan", "nostalgik dan tenang"],
  ["Kapal kecil mereka diterpa hujan. Rafi harus memilih kembali ke pantai atau meneruskan perjalanan membawa obat ke pulau seberang.", "pertentangan antara keselamatan diri dan tanggung jawab", "menegangkan"],
  ["Sinta mendapat tawaran kerja bergaji tinggi di kota lain, sementara ayahnya sedang sakit dan membutuhkan bantuan di rumah.", "konflik antara ambisi pribadi dan tanggung jawab keluarga", "serius dan dilematis"],
  ["Di kelas yang kosong, Edo menatap piala juara milik temannya. Ia tersenyum tipis, lalu menyembunyikan surat hasil seleksi miliknya sendiri.", "persaingan dan kecemburuan", "sunyi dan penuh ketegangan batin"],
  ["Malam itu listrik padam. Anak-anak menyalakan lilin dan mendengar kakek bercerita, hingga rumah yang gelap terasa lebih hangat.", "perubahan dari ketidaknyamanan menjadi kebersamaan", "hangat dan intim"],
  ["Setelah bertahun-tahun menolak pulang, Nara berdiri di stasiun kecil dan melihat papan nama desanya dari balik jendela.", "pergulatan dengan masa lalu dan keputusan untuk kembali", "reflektif"],
  ["Buku tua itu selalu disimpan ibu di lemari terkunci. Ketika kunci ditemukan, Awan ragu apakah ia benar-benar ingin mengetahui isi buku tersebut.", "keingintahuan berhadapan dengan ketakutan akan kebenaran", "misterius"],
  ["Meskipun semua temannya menertawakan desainnya, Fia terus memperbaiki prototipe sampai akhirnya alat sederhana itu bekerja.", "ketekunan menghadapi penolakan sosial", "optimistis setelah tekanan"]
];

function generateIdFiction() {
  const [text, conflict, mood] = pick(idFictionCases);
  const mode = rnd(0, 2);
  if (mode === 0) return single(`Bacalah kutipan: “${text}” Konflik utama yang paling tepat adalah ...`, conflict, ["perbedaan cuaca dan musim", "masalah perhitungan angka", "persaingan harga pasar"], `Konflik ditentukan dari nilai atau tujuan yang saling bertentangan dalam tindakan tokoh.`);
  if (mode === 1) return single(`Bacalah kutipan: “${text}” Suasana dominan yang dibangun adalah ...`, mood, ["riang tanpa konflik", "lucu dan absurd", "netral seperti laporan ilmiah"], `Suasana didukung oleh diksi, keadaan, dan reaksi tokoh.`);
  return single(`Bacalah kutipan: “${text}” Pernyataan yang paling tepat tentang tokoh adalah ...`, "Tokoh menghadapi persoalan batin yang dapat disimpulkan dari tindakan dan reaksinya.", ["Tokoh tidak mengalami masalah apa pun.", "Tokoh hanya berfungsi menjelaskan latar tempat.", "Tokoh pasti menjadi antagonis."], `Karakter dan keadaan tokoh disimpulkan dari bukti naratif, bukan label yang tidak disebutkan.`);
}

const idTextPairs = [
  ["Teks A menekankan fleksibilitas kerja lepas dan peluang klien global.", "Teks B menekankan hilangnya jaminan sosial dan risiko finansial pekerja lepas.", "Teks A melihat peluang, sedangkan Teks B menyoroti kerentanan dan perlindungan."],
  ["Teks A mendukung penggunaan perangkat digital untuk mempercepat belajar mandiri.", "Teks B mengingatkan bahwa notifikasi dan penggunaan tanpa aturan dapat mengganggu konsentrasi.", "Keduanya dapat disintesis menjadi penggunaan teknologi dengan aturan yang mengurangi distraksi."],
  ["Teks A menyatakan transportasi publik mengurangi kendaraan pribadi.", "Teks B menekankan bahwa layanan harus aman dan tepat waktu agar masyarakat mau beralih.", "Manfaat transportasi publik bergantung pula pada kualitas layanan."],
  ["Teks A memuji kerja kelompok karena ide lebih beragam.", "Teks B menyoroti risiko pembagian tugas yang tidak seimbang.", "Kerja kelompok bermanfaat jika peran dan tanggung jawab diatur dengan jelas."],
  ["Teks A menyebut AI mempercepat pekerjaan rutin.", "Teks B mengingatkan perlunya pemeriksaan manusia pada keputusan penting.", "AI dapat dipakai untuk efisiensi dengan pengawasan manusia pada bagian berisiko."],
  ["Teks A mendukung ruang terbuka hijau untuk kenyamanan kota.", "Teks B menekankan biaya pemeliharaan dan kebutuhan perencanaan air.", "Ruang hijau bermanfaat tetapi perlu rencana pemeliharaan yang realistis."],
  ["Teks A mendorong pembelian produk lokal untuk mendukung usaha kecil.", "Teks B mengingatkan konsumen tetap harus membandingkan kualitas dan harga.", "Dukungan produk lokal dapat dilakukan sambil mempertimbangkan kualitas dan kebutuhan."],
  ["Teks A menyarankan latihan rutin setiap hari.", "Teks B menekankan pentingnya waktu istirahat agar tidak kelelahan.", "Latihan efektif membutuhkan konsistensi sekaligus pemulihan yang cukup."],
  ["Teks A menyebut kerja dari rumah menghemat waktu perjalanan.", "Teks B membahas risiko batas kerja dan waktu pribadi menjadi kabur.", "Kerja dari rumah memberi efisiensi tetapi memerlukan pengaturan batas waktu."],
  ["Teks A menilai sistem otomatis mengurangi kesalahan manual.", "Teks B menekankan bahwa kesalahan konfigurasi dapat berdampak pada banyak proses sekaligus.", "Otomatisasi perlu validasi dan pengawasan karena dapat memperbesar dampak kesalahan konfigurasi."]
];

function generateIdMultipleTexts() {
  const [a, b, synthesis] = pick(idTextPairs);
  const mode = rnd(0, 1);
  if (mode === 0) return single(`${a} ${b} Sintesis yang paling tepat berdasarkan kedua teks adalah ...`, synthesis, ["Hanya Teks A yang dapat diterima.", "Hanya Teks B yang mengandung informasi berguna.", "Kedua teks membahas topik yang sama tanpa perbedaan apa pun."], `Sintesis harus mempertahankan gagasan penting dari kedua teks.`);
  return single(`${a} ${b} Perbedaan sudut pandang yang paling jelas adalah ...`, `Teks A menekankan manfaat/peluang, sedangkan Teks B menekankan risiko atau syarat yang perlu diperhatikan.`, ["Teks A dan B selalu bertentangan pada seluruh fakta.", "Teks A membahas topik yang sama sekali berbeda.", "Teks B hanya mengulang setiap kalimat Teks A."], `Perbandingan dilakukan pada aspek yang sama, yaitu penekanan manfaat dan risiko.`);
}

const idComplexCases = [
  ["Sebuah teks menyebut kata sandi bawaan dan jaringan IoT yang tidak tersegmentasi sebagai kelemahan.", ["Mengganti kata sandi bawaan dan memperbarui perangkat.", "Memisahkan jaringan IoT dari server utama."], ["Mengganti semua kabel cepat dengan kabel lambat.", "Mematikan seluruh gedung setiap malam.", "Menghapus semua aplikasi ponsel pengguna."]],
  ["Teks menyatakan kurang tidur dapat menurunkan fokus dan meningkatkan stres.", ["Kesulitan berkonsentrasi dapat berkaitan dengan kurang tidur.", "Stres dapat meningkat ketika kualitas tidur buruk."], ["Kurang tidur selalu meningkatkan nilai akademik.", "Semua orang membutuhkan jumlah tidur yang persis sama.", "Kurang tidur membuat tubuh tidak pernah lelah."]],
  ["Teks menyebut pekerja lepas berpeluang memperoleh klien luas tetapi tidak selalu memiliki tunjangan tetap.", ["Pekerja lepas dapat memiliki peluang pendapatan yang fleksibel.", "Pekerja lepas perlu mengelola sebagian perlindungan finansial secara mandiri."], ["Semua pekerja lepas pasti mendapatkan pensiun dari platform.", "Pekerja lepas tidak membutuhkan manajemen waktu.", "Pekerja lepas tidak boleh bekerja untuk klien luar negeri."]],
  ["Sebuah prosedur belajar meminta siswa menyiapkan bahan, memilih tempat tenang, dan mengambil jeda singkat setelah belajar cukup lama.", ["Menyiapkan buku termasuk tahap persiapan.", "Jeda singkat dapat menjadi bagian dari prosedur belajar."], ["Berbicara keras selalu dianjurkan.", "Tempat bising wajib dipilih.", "Semua langkah boleh diacak tanpa melihat tujuan."]],
  ["Teks menyatakan bukti kuat harus relevan dan dapat diverifikasi.", ["Data yang langsung mengukur klaim dapat menjadi bukti kuat.", "Sumber yang dapat diperiksa meningkatkan kredibilitas bukti."], ["Bukti tidak perlu terkait dengan klaim.", "Opini tanpa alasan selalu lebih kuat daripada data.", "Semakin panjang bukti, pasti semakin benar."]],
  ["Cerita menunjukkan tokoh tetap berlatih setelah beberapa kali gagal dan meminta umpan balik.", ["Tokoh menunjukkan ketekunan.", "Tokoh terbuka terhadap perbaikan."], ["Tokoh pasti tidak memiliki rasa takut.", "Tokoh tidak pernah melakukan kesalahan.", "Cerita membuktikan semua orang harus mengikuti pilihan tokoh."]],
  ["Dua teks membahas penggunaan AI: satu menekankan kecepatan, satu menekankan risiko kehilangan konteks.", ["AI dapat meningkatkan efisiensi pada tugas tertentu.", "Hasil AI tetap perlu dinilai sesuai konteks penggunaan."], ["AI selalu salah.", "Manusia tidak lagi diperlukan pada semua pekerjaan.", "Kedua teks tidak memiliki topik yang sama."]],
  ["Paragraf menjelaskan bahwa program berjalan lancar setelah bug route diperbaiki dan route:list diverifikasi.", ["Nama route yang tepat penting untuk navigasi aplikasi.", "Verifikasi setelah perbaikan membantu membuktikan bug telah terselesaikan."], ["route:list menghapus database.", "Bug route hanya dapat diperbaiki dengan mengganti framework.", "Verifikasi tidak diperlukan setelah perubahan."]],
  ["Teks menyatakan sebagian peserta mengalami kesulitan pada bagian inferensi.", ["Tidak semua peserta harus mengalami kesulitan yang sama.", "Inferensi merupakan salah satu bagian yang menantang bagi sebagian peserta."], ["Semua peserta pasti gagal inferensi.", "Tidak ada peserta yang memahami inferensi.", "Kesulitan inferensi tidak pernah dapat diperbaiki."]],
  ["Teks membandingkan dua strategi: latihan banyak soal dan meninjau kesalahan setelah latihan.", ["Jumlah latihan dapat membantu pembiasaan.", "Analisis kesalahan membantu mengetahui konsep yang perlu diperbaiki."], ["Meninjau kesalahan selalu membuang waktu.", "Latihan tidak pernah memerlukan pemahaman konsep.", "Satu strategi harus selalu menghapus strategi lain."]]
];

function generateIdComplex() {
  const [text, correct, wrong] = pick(idComplexCases);
  const q = `${text} Pilih semua pernyataan yang didukung oleh teks.`;
  return multi(q, correct, wrong, `Setiap opsi harus diverifikasi secara mandiri. Jawaban benar adalah opsi yang seluruh isinya didukung teks.`);
}

const enNames = ["Maya", "Leo", "Nina", "Rafi", "Sara", "Tom", "Aisha", "Ben", "Clara", "Dylan"];
const enPlaces = ["the school library", "the science room", "the city park", "a small museum", "the community center", "the computer lab", "a local café", "the sports hall"];
const enDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const enActivities = ["a reading workshop", "a science exhibition", "a volunteer project", "a photography class", "a study group", "a career seminar", "a sports practice", "a digital safety session"];

function generateEnTextual() {
  const name = pick(enNames);
  const place = pick(enPlaces);
  const day = pick(enDays);
  const activity = pick(enActivities);
  const item = pick(["a notebook", "two books", "a water bottle", "a camera", "a laptop", "a folder"]);
  const text = `${name} joined ${activity} at ${place} on ${day}. Before leaving, ${name} checked the schedule and packed ${item}. After the session, ${name} wrote a short summary.`;
  const mode = rnd(0, 4);
  if (mode === 0) return single(`Read the text: “${text}” Where did the activity take place?`, place, [pick(enPlaces.filter((x) => x !== place)), "at home", "at the airport"], `The place is directly stated as ${place}.`, "Dasar");
  if (mode === 1) return single(`Read the text: “${text}” When did ${name} join the activity?`, day, [pick(enDays.filter((x) => x !== day)), "Sunday", "The text does not say"], `The day is explicitly stated: ${day}.`, "Dasar");
  if (mode === 2) return single(`Read the text: “${text}” What did ${name} pack?`, item, ["a bicycle", "a cooking pan", "a tent"], `The item is directly stated as ${item}.`, "Dasar");
  if (mode === 3) return single(`Read the text: “${text}” What did ${name} do after the session?`, "wrote a short summary", ["left before the session started", "bought a new phone", "cancelled the activity"], `The final sentence states that ${name} wrote a short summary.`);
  return single(`Read the text: “${text}” What is the best main idea?`, `${name} attended an activity and completed simple preparation and follow-up tasks.`, [`${name} refused to attend the activity.`, `The activity was cancelled because the place was closed.`, `${name} spent the day shopping.`], `The main idea covers the whole passage without adding unsupported information.`);
}

const enInferenceCases = [
  ["Lina arrived early, checked the presentation file twice, and tested the projector before the audience entered.", "Lina wanted to reduce the risk of problems during the presentation.", ["Lina planned to cancel the presentation.", "The projector was definitely broken.", "Lina had never used a computer."]],
  ["After receiving feedback, Owen changed his report, asked one more question, and submitted a clearer version the next day.", "Owen was willing to learn from feedback.", ["Owen ignored the feedback.", "Owen stopped working on the report.", "The report was already perfect and unchanged."]],
  ["Mira turned off her phone notifications and chose a desk far from the entrance before studying.", "Mira was trying to reduce distractions.", ["Mira wanted to make the room noisier.", "Mira was waiting for many phone calls.", "Mira had finished all her work."]],
  ["The road was wet, dark clouds covered the sky, and several people carried umbrellas.", "It had probably rained recently or rain was likely.", ["The weather was certainly hot and dry.", "There was no chance of rain.", "The road had never been used."]],
  ["During the internship, Arif volunteered for tasks, asked for guidance when unsure, and kept notes about new procedures.", "Arif was responsible and willing to learn.", ["Arif avoided all new tasks.", "Arif disliked learning new procedures.", "Arif worked alone because he refused guidance."]],
  ["Nora compared several bus routes before choosing one that arrived earlier and required fewer transfers.", "Nora considered efficiency when choosing a route.", ["Nora chose the route randomly.", "Nora wanted the longest possible trip.", "Nora did not care about arrival time."]],
  ["The team created backups even though they had never lost a file before.", "The team was preparing for a possible future problem.", ["The team knew a file would be lost that day.", "Backups made their files unusable.", "The team had no files to protect."]],
  ["Ella smiled when her friend won, but later she stayed quiet and avoided talking about the competition.", "Ella may have mixed feelings about the result.", ["Ella definitely hated her friend.", "Ella did not know there was a competition.", "Ella was certain she had won."]],
  ["A store changed its checking process after several customers reported damaged items.", "Customer complaints led the store to improve quality control.", ["The store decided to stop selling all items.", "Customers asked the store to remove quality checks.", "The old process had no problems."]],
  ["The app worked well with five users but became slow when hundreds joined at the same time.", "The problem may be related to increased user load.", ["The app could never start.", "Every user had a broken device.", "The app contained no data."]]
];

function generateEnInference() {
  const [text, correct, wrong] = pick(enInferenceCases);
  return single(`Read the text: “${text}” What can be reasonably inferred?`, correct, wrong, `The inference follows from the actions and clues in the text, without adding unnecessary assumptions.`);
}

const enEvalCases = [
  ["Regular short breaks can improve study focus.", "A study comparing attention scores with and without planned short breaks.", ["A list of students' favorite snacks.", "The color of the classroom walls.", "A photograph of the school gate."]],
  ["Excessive late-night social media use may reduce sleep quality.", "Research measuring social media use at night and sleep duration or quality.", ["A list of popular profile pictures.", "The number of desks in a classroom.", "A survey about favorite sports only."]],
  ["A new recycling program reduced plastic waste at school.", "Waste measurements before and after the program under comparable conditions.", ["The school uniform color.", "The price of notebooks.", "The number of classroom windows."]],
  ["A digital safety workshop improved password habits.", "An audit comparing password practices before and after the workshop.", ["Photos of the workshop room.", "The trainer's favorite website.", "The number of chairs used."]],
  ["Using public transport can reduce the number of private vehicles on the road.", "Traffic data showing changes in private vehicle use when public transport access improves.", ["The paint color of buses.", "The number of advertisements at stations.", "The price of coffee near a bus stop."]],
  ["Clear feedback can improve students' revisions.", "A comparison of draft quality before and after structured feedback.", ["Students' shoe sizes.", "The teacher's desk location.", "The font used in the school logo."]],
  ["Separating IoT devices from a main server network can reduce security exposure.", "A security test showing a compromised IoT device cannot reach the protected server segment.", ["The number of smart lamps in a building.", "The brand color of a router.", "The building's parking capacity."]],
  ["A quiet study environment can help some students concentrate.", "A controlled comparison of concentration in noisy and quiet settings.", ["A list of students' favorite movies.", "The age of the library building.", "The number of pencils used."]]
];

function generateEnEvaluation() {
  const [claim, evidence, wrong] = pick(enEvalCases);
  return single(`Claim: “${claim}” Which additional information would best strengthen the claim?`, evidence, wrong, `The strongest addition directly measures or explains the relationship in the claim.`);
}

const enDescriptions = [
  ["The lake is surrounded by green hills. In the morning, thin mist floats above the calm water, and small wooden boats move quietly near the shore.", "a peaceful natural place"],
  ["The library has wide windows, bright reading lamps, long wooden tables, and quiet corners with comfortable chairs.", "a comfortable place for reading and study"],
  ["The market is narrow but lively. Colorful fruit fills the stalls, sellers call to customers, and the smell of spices spreads through the street.", "a busy and colorful market"],
  ["The old bridge is made of dark stone. Small plants grow between the blocks, and the river moves slowly beneath its arches.", "an old stone bridge with a calm setting"],
  ["The classroom is simple and clean, with posters on the walls, a large whiteboard, and desks arranged in small groups.", "a simple organized classroom"],
  ["The beach has soft sand, clear shallow water, and rows of trees that provide shade in the afternoon.", "a pleasant beach environment"],
  ["The workshop is filled with tools, labeled shelves, safety signs, and large tables where students assemble small machines.", "a practical learning workspace"],
  ["The café is small, warm, and filled with the smell of roasted coffee. Local photographs hang on the walls.", "a cozy local café"],
  ["The garden contains herbs, flowering plants, a narrow path, and a small pond where insects gather.", "a varied garden area"],
  ["The museum hall is cool and quiet, with historical photographs, maps, and objects displayed behind clear glass.", "a quiet historical exhibition space"]
];

function generateEnDescriptive() {
  const [text, impression] = pick(enDescriptions);
  const mode = rnd(0, 2);
  if (mode === 0) return single(`Read the descriptive text: “${text}” What is the best overall impression?`, impression, ["a dangerous industrial site", "a crowded airport terminal", "an empty place with no visible features"], `The repeated descriptive details support the overall impression.`);
  if (mode === 1) return single(`Read the descriptive text: “${text}” What is the main purpose of the text?`, "to help the reader imagine the place through specific details", ["to explain a sequence of past events", "to argue against visiting the place", "to give mathematical instructions"], `A descriptive text mainly builds an image of a person, place, object, or situation.`);
  return single(`Read the descriptive text: “${text}” Which feature is most typical of descriptive writing in the passage?`, "specific details about appearance and atmosphere", ["a step-by-step command sequence", "a debate between two writers", "a list of test results only"], `Descriptive texts rely on concrete qualities and sensory details.`);
}

const enRecounts = [
  ["Last Saturday, I joined a school clean-up. First, our team collected plastic near the field. Then we separated recyclable waste. At the end, we discussed what we had learned.", "joined a school clean-up", "discussed what the team had learned"],
  ["During my first week of internship, I attended orientation, learned the safety rules, and helped organize equipment. On Friday, my supervisor gave me feedback.", "attended orientation", "received feedback from the supervisor"],
  ["Yesterday, Ana visited a local museum. She read the exhibit notes, took several pictures, and later wrote a short reflection at home.", "visited a local museum", "wrote a reflection"],
  ["Last month, our class held a book fair. We prepared tables in the morning, welcomed visitors after lunch, and counted the donated books before going home.", "prepared the fair", "counted donated books"],
  ["On Monday, I missed the first bus. I waited for the next one, arrived ten minutes late, and explained the situation to my teacher.", "missed the first bus", "explained the delay to the teacher"],
  ["Last weekend, Farah learned to make a simple website. She followed a tutorial, tested each page, fixed two errors, and finally showed the site to her brother.", "followed a tutorial", "showed the finished site"],
  ["During the sports event, our team lost the first game but won the next two. After the event, we reviewed our mistakes together.", "lost the first game", "reviewed mistakes together"],
  ["Last Friday, Ben volunteered at an animal shelter. He cleaned cages, prepared food, and helped visitors understand the adoption process.", "volunteered at an animal shelter", "helped visitors with adoption information"]
];

function generateEnRecount() {
  const [text, first, last] = pick(enRecounts);
  const mode = rnd(0, 2);
  if (mode === 0) return single(`Read the recount: “${text}” Which event happened first?`, first, [last, "the writer planned next year's event", "the writer cancelled every activity"], `Recount questions can be solved by following chronological markers and event order.`);
  if (mode === 1) return single(`Read the recount: “${text}” Which event happened near the end?`, last, [first, "the writer forgot the entire experience", "nothing happened after the first event"], `The final sentences show the later event in the sequence.`);
  return single(`Read the recount: “${text}” Why is this a recount text?`, "It retells events that happened in the past in a time sequence.", ["It only describes the appearance of a place.", "It gives instructions using commands only.", "It presents a formal scientific formula."], `A recount retells past experiences in chronological order.`);
}

const enNarratives = [
  ["A young farmer found a wallet on the road. Although he needed money, he searched for the owner and returned it. The owner later helped him repair a broken water pump.", "honesty can build trust and lead to positive consequences", "the farmer's need for money versus doing what is right"],
  ["Two friends entered a competition. One lost and became angry, but after seeing how hard the winner had practiced, he apologized and asked to train together.", "accepting defeat and learning from others is better than resentment", "jealousy after losing the competition"],
  ["A girl was afraid to speak in public. She practiced in front of her family every evening and finally completed her school presentation despite feeling nervous.", "courage can grow through practice", "fear of public speaking"],
  ["A village ignored warnings about a blocked river channel. After heavy rain caused flooding, the residents worked together to clean and maintain the channel.", "warnings and prevention should be taken seriously", "the community's neglect of a known risk"],
  ["A boy laughed at his grandfather's old tools until a power failure stopped the new machine. His grandfather used a simple hand tool to finish the repair.", "older methods can still have value", "the boy's dismissive attitude toward older tools"],
  ["A student copied a friend's project to save time. When the teacher asked him to explain the design, he could not answer the questions.", "understanding is more important than copying a finished result", "the choice between quick copying and genuine learning"],
  ["A traveler chose a longer path because local people warned that the short bridge was unsafe. Later, he saw that the bridge had collapsed after heavy rain.", "careful advice can prevent danger", "choosing between a risky shortcut and a safer route"],
  ["A small shop owner refused to listen to customer complaints. Sales fell until she began recording feedback and improving the service.", "listening to feedback can support improvement", "resistance to feedback and the need to change"]
];

function generateEnNarrative() {
  const [text, lesson, conflict] = pick(enNarratives);
  const mode = rnd(0, 2);
  if (mode === 0) return single(`Read the narrative: “${text}” What is the most reasonable lesson?`, lesson, ["Problems should always be ignored.", "Winning is the only valuable outcome.", "People should never change their decisions."], `The lesson is based on the main conflict and its consequence.`);
  if (mode === 1) return single(`Read the narrative: “${text}” What is the central conflict?`, conflict, ["a mathematical calculation problem", "a discussion about weather vocabulary", "a list of unrelated objects"], `The conflict is the main tension that drives the character's choices.`);
  return single(`Read the narrative: “${text}” Which statement best describes the narrative structure?`, "A problem or challenge leads to actions and a meaningful outcome.", ["It only lists physical features.", "It gives numbered instructions with no characters.", "It presents only statistical evidence."], `Narratives develop through characters, conflict, events, and resolution or consequence.`);
}

const enProcedures = [
  ["To study effectively in a library: prepare your materials, choose a quiet spot, set a clear goal, take short breaks, and review your notes before leaving.", "study effectively in a library", "prepare your materials"],
  ["To back up a school project: connect the storage device, create a dated folder, copy the project files, open one copied file to verify it, then safely eject the device.", "create and verify a backup", "connect the storage device"],
  ["To make a simple fruit drink: wash the fruit, cut it into pieces, place it in a blender with water, blend until smooth, and serve immediately.", "make a simple fruit drink", "wash the fruit"],
  ["To submit an online assignment: check the file name, open the class portal, choose the correct task, upload the file, and confirm the submission status.", "submit an online assignment", "check the file name"],
  ["To clean a computer keyboard safely: turn off the device, disconnect power, remove loose dust gently, wipe the surface with a suitable cloth, and reconnect only when dry.", "clean a keyboard safely", "turn off the device"],
  ["To prepare for a presentation: organize the slides, check the time limit, practice aloud, test the display equipment, and bring a backup copy.", "prepare for a presentation", "organize the slides"],
  ["To plant a seed: prepare moist soil, make a small hole, place the seed inside, cover it lightly, and water carefully.", "plant a seed", "prepare moist soil"],
  ["To check a bicycle before riding: inspect the tires, test the brakes, adjust the seat, check the chain, and wear a helmet.", "check a bicycle before riding", "inspect the tires"]
];

function generateEnProcedure() {
  const [text, purpose, first] = pick(enProcedures);
  const mode = rnd(0, 2);
  if (mode === 0) return single(`Read the procedure: “${text}” What is the main purpose?`, `to ${purpose}`, ["to describe a past holiday", "to compare two fictional characters", "to argue about an unrelated policy"], `The ordered commands show the goal of the procedure.`);
  if (mode === 1) return single(`Read the procedure: “${text}” Which action should be done first?`, first, ["skip directly to the last step", "ignore all preparation", "repeat the final action before starting"], `The first instruction establishes the starting condition for the procedure.`);
  return single(`Read the procedure: “${text}” Which language feature is most typical?`, "imperative action verbs that guide the reader through steps", ["only past-tense storytelling", "dialogue between fictional characters", "a list of unsupported opinions"], `Procedure texts commonly use imperative verbs and ordered actions.`);
}

const enExpositions = [
  ["Schools should teach digital safety because students use online services every day. Training can help them recognize risky links, protect passwords, and report suspicious activity.", "schools should teach digital safety", "daily online use creates risks that training can help manage"],
  ["Cities should improve public transport. Reliable buses can reduce traffic, lower travel costs for some residents, and provide access for people who do not drive.", "cities should improve public transport", "reliable transport can reduce traffic and improve access"],
  ["Students benefit from reading regularly. Frequent reading exposes them to vocabulary, different ideas, and longer periods of focused attention.", "students benefit from reading regularly", "reading supports vocabulary, ideas, and focus"],
  ["Workplaces should provide clear feedback. Employees can correct mistakes sooner, understand expectations, and improve future performance.", "workplaces should provide clear feedback", "feedback helps employees correct and improve their work"],
  ["Schools should maintain green spaces. Trees provide shade, plants can support biodiversity, and outdoor areas give students a calmer environment during breaks.", "schools should maintain green spaces", "green spaces provide environmental and comfort benefits"],
  ["Teenagers should manage late-night screen use. Bright screens and constant messages can delay sleep and make it harder to focus the next day.", "teenagers should manage late-night screen use", "late-night screen habits can affect sleep and next-day focus"],
  ["Small businesses should keep basic digital backups. Hardware can fail, files can be deleted accidentally, and backups can reduce the impact of data loss.", "small businesses should keep digital backups", "backups reduce the impact of common data-loss risks"],
  ["Group projects need clear roles. Without agreed responsibilities, some tasks may be repeated while others are forgotten.", "group projects need clear roles", "clear responsibilities reduce duplication and missed tasks"]
];

function generateEnExposition() {
  const [text, thesis, reason] = pick(enExpositions);
  const mode = rnd(0, 2);
  if (mode === 0) return single(`Read the exposition: “${text}” What is the writer's main position?`, thesis, ["the topic should never be discussed", "all readers already agree with every detail", "the examples have no connection to the topic"], `The thesis is the central position supported by the following reasons.`);
  if (mode === 1) return single(`Read the exposition: “${text}” Which statement best summarizes the supporting argument?`, reason, ["the writer gives no reason at all", "the text is mainly a fictional story", "the text only describes colors and shapes"], `The supporting argument explains why the writer's position is reasonable.`);
  return single(`Read the exposition: “${text}” What is the text mainly trying to do?`, "persuade the reader by presenting a position and supporting reasons", ["give a step-by-step recipe", "retell a personal trip only", "describe one object without an argument"], `Analytical exposition presents a position and supports it with reasons.`);
}

const enVocabFacts = [
  ["keep his promise", "do what he previously said he would do", ["forget the decision", "change the subject", "avoid every responsibility"]],
  ["unnoticed", "not seen or not noticed", ["very famous", "extremely noisy", "carefully measured"]],
  ["surrounded", "having things or places around it", ["completely empty inside", "moving quickly away", "hidden under the ground"]],
  ["reliable", "able to be trusted or depended on", ["likely to fail every time", "difficult to see", "unrelated to the task"]],
  ["overwhelmed", "feeling that there is too much to handle", ["fully relaxed because nothing matters", "certain that every task is easy", "unable to remember any word at all"]],
  ["vulnerable", "open to harm, risk, or attack", ["protected from every possible risk", "finished ahead of schedule", "designed only for decoration"]],
  ["maintain", "keep something in good condition or continue it", ["destroy it immediately", "forget that it exists", "replace it every hour"]],
  ["prominent", "important, noticeable, or standing out clearly", ["hidden and impossible to see", "completely unrelated", "temporary and meaningless"]],
  ["preserve", "protect something so it can continue or remain", ["remove it permanently", "make it less accurate", "ignore all changes"]],
  ["frequent", "happening often", ["happening once only", "never happening", "impossible to measure"]],
  ["responsible", "showing that someone can be trusted to do duties carefully", ["refusing every duty", "avoiding all consequences", "working without any plan"]],
  ["evidence", "information used to support a claim or conclusion", ["a random decoration", "a personal name only", "a step that always comes last"]]
];

function generateEnVocabulary() {
  const [term, meaning, wrong] = pick(enVocabFacts);
  const lead = pick([`What does “${term}” most likely mean in context?`, `Which phrase is the best contextual meaning of “${term}”?`, `Choose the meaning that could replace “${term}” without changing the main idea.`, `The expression “${term}” is closest in meaning to ...`]);
  return single(lead, meaning, wrong, `The contextually appropriate meaning is: ${meaning}.`);
}

const enMultipleCases = [
  ["A text says poor sleep can reduce focus and increase stress.", ["Poor sleep may make it harder to concentrate.", "Poor sleep may be linked to higher stress."], ["Poor sleep always improves test scores.", "Every teenager needs exactly the same sleep schedule.", "Poor sleep makes people permanently unable to learn."]],
  ["A library procedure says to prepare materials, choose a quiet place, set a goal, and take short breaks.", ["Bringing study materials is preparation.", "Short breaks can be part of the study procedure."], ["Playing loud music is required.", "The noisiest area should always be chosen.", "The steps have no relationship to effective study."]],
  ["A passage about social media mentions comparison pressure, sleep problems, and cyberbullying as possible concerns.", ["Comparison with idealized images can affect feelings about oneself.", "Late-night use can disturb sleep.", "Cyberbullying can make users feel isolated or afraid."], ["Social media has only positive effects.", "Every user experiences exactly the same problem."]],
  ["Two texts discuss freelance work: one highlights flexible opportunities and one highlights missing employment protections.", ["Freelance work can provide flexibility.", "Freelancers may need to manage some financial protections themselves."], ["Every platform guarantees retirement benefits.", "Freelancers cannot work with international clients.", "The two texts discuss unrelated topics."]],
  ["An internship recount says the writer prepared equipment, helped visitors, learned new tasks, and responded to feedback.", ["The writer took part in practical tasks.", "The writer had opportunities to learn.", "Feedback was part of the experience."], ["The writer refused every task.", "The writer never interacted with anyone."]],
  ["A descriptive text presents forests, reefs, waterfalls, and traditional farming landscapes.", ["The text emphasizes natural scenery.", "Different places can offer different experiences."], ["The text is mainly a recipe.", "The text says all locations are identical.", "The text contains no description of place."]],
  ["An exposition argues that digital safety education is useful because students use online services and face risks.", ["The text presents a position.", "The reasons are connected to the position.", "Relevant evidence could make the argument stronger."], ["The text is only a chronological holiday story.", "Arguments never need evidence."]],
  ["A narrative shows a character losing, becoming angry, then later apologizing and learning from the winner.", ["The character changes after the conflict.", "The story can support a lesson about handling defeat."], ["The character never experiences conflict.", "The story proves losing is always better than winning.", "The narrative has no sequence of events."]]
];

function generateEnMultiple() {
  const [text, correct, wrong] = pick(enMultipleCases);
  return multi(`${text} Select all statements supported by the text.`, correct, wrong, `Each option must be checked separately against the information given.`);
}

const languageGenerators = {
  "bi-informasi-eksplisit": generateIdExplicit,
  "bi-kosakata-kontekstual": generateIdVocabulary,
  "bi-inferensi": generateIdInference,
  "bi-evaluasi-gagasan": generateIdEvaluation,
  "bi-fiksi": generateIdFiction,
  "bi-teks-jamak": generateIdMultipleTexts,
  "bi-pg-kompleks": generateIdComplex,
  "en-textual": generateEnTextual,
  "en-inferential": generateEnInference,
  "en-evaluation": generateEnEvaluation,
  "en-descriptive": generateEnDescriptive,
  "en-recount": generateEnRecount,
  "en-narrative": generateEnNarrative,
  "en-procedure": generateEnProcedure,
  "en-exposition": generateEnExposition,
  "en-vocabulary": generateEnVocabulary,
  "en-multiple-texts": generateEnMultiple
};

export function generateLanguageQuestion(topicId) {
  const generator = languageGenerators[topicId];
  const result = generator ? generator() : single("Soal belum tersedia.", "-", ["A", "B", "C"], "Generator soal belum ditemukan.");
  const prefixes = topicId.startsWith("en-")
    ? ["", "Reading check: ", "Comprehension task: ", "Read carefully. "]
    : ["", "Uji pemahaman: ", "Latihan analisis: ", "Cermati konteks berikut. "];
  return { ...result, q: `${pick(prefixes)}${result.q}` };
}
