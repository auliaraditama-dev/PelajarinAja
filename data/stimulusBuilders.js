const mathContexts = [
  "Sebuah tim sekolah sedang menyiapkan laporan kegiatan dan harus memastikan setiap keputusan dapat dijelaskan berdasarkan data, bukan perkiraan. Informasi pada soal menjadi bagian utama yang perlu diolah secara matematis. Peserta diminta memilah fakta yang relevan, menghubungkannya dengan konsep yang tepat, lalu memeriksa apakah hasil akhirnya konsisten dengan kondisi pada stimulus.",
  "Dalam kegiatan perencanaan sekolah, panitia menerima sejumlah informasi yang harus dianalisis sebelum mengambil keputusan. Tidak semua kalimat memiliki fungsi yang sama: sebagian merupakan konteks, sebagian menjadi data utama, dan sebagian menjadi syarat pembatas. Gunakan hubungan matematis pada materi aktif untuk menafsirkan data tersebut secara runtut dan dapat diverifikasi.",
  "Sebuah kelompok siswa sedang menyelesaikan masalah numerasi yang dikaitkan dengan situasi sehari-hari. Mereka tidak hanya diminta memperoleh hasil akhir, tetapi juga menentukan informasi mana yang digunakan, konsep apa yang sesuai, dan bagaimana hasil dapat diperiksa kembali. Bacalah seluruh informasi sebelum melakukan operasi hitung agar tidak ada syarat yang terlewat.",
  "Pada sebuah studi kasus, data disajikan dalam bentuk narasi agar pembaca harus menerjemahkan informasi verbal menjadi model matematika. Tahap pentingnya adalah memahami pertanyaan, menuliskan besaran yang diketahui, memilih relasi yang sesuai, dan menguji kewajaran hasil. Gunakan informasi inti berikut sebagai dasar penyelesaian."
];

const idContexts = [
  "Bacaan berikut ditempatkan dalam konteks literasi akademik dan vokasional. Pembaca perlu membedakan informasi yang benar-benar dinyatakan, informasi yang hanya tersirat, serta penilaian yang membutuhkan hubungan antargagasan. Jangan memilih jawaban hanya karena terdengar masuk akal; setiap pilihan harus diuji terhadap bukti yang tersedia di dalam stimulus.",
  "Dalam latihan literasi ini, teks perlu dibaca sebagai satu kesatuan. Perhatikan hubungan antar kalimat, kata rujukan, sebab-akibat, sudut pandang, serta kata yang membatasi makna seperti selalu, hanya, paling, atau mungkin. Jawaban yang tepat harus memiliki dukungan tekstual paling kuat dan tidak menambahkan asumsi yang tidak diberikan.",
  "Stimulus berikut dirancang untuk melatih kemampuan membaca kritis. Informasi utama, contoh, analogi, dan opini dapat muncul dalam satu bacaan yang sama. Sebelum memilih jawaban, identifikasi terlebih dahulu jenis pertanyaan yang diajukan, kemudian cari bagian teks yang paling relevan dan bandingkan setiap opsi dengan bukti tersebut.",
  "Soal ini menggunakan konteks yang dekat dengan dunia pendidikan, teknologi, pekerjaan, atau kehidupan sosial. Tujuannya bukan sekadar menemukan satu kata yang sama dengan pilihan jawaban, melainkan memahami makna keseluruhan, hubungan gagasan, dan konsekuensi logis dari informasi yang disampaikan penulis."
];

const enContexts = [
  "Read the following material as an academic reading task. Focus on the writer's purpose, the relationship between sentences, explicit details, implied ideas, and the evidence used to support a conclusion. Do not choose an option only because it repeats a familiar word. The best answer must be supported by the meaning of the whole passage and the specific question being asked.",
  "The following stimulus is designed to train reading comprehension in everyday, vocational, and basic academic contexts. Identify key details, references, sequence, cause and effect, comparison, and the writer's attitude where relevant. Some options may sound reasonable outside the text, but only the option with the strongest textual support should be selected.",
  "Use the passage below to practice careful reading at approximately A2–B1 level. Read for meaning rather than translating every word. First identify what the question asks, then locate the most relevant evidence, and finally eliminate choices that are too broad, unsupported, or inconsistent with the information in the passage.",
  "This reading task requires more than matching words. Consider how ideas are organized, what is stated directly, what can reasonably be inferred, and whether a statement is supported by the evidence. When several details are present, connect them before deciding which answer is the most accurate."
];

const serkomContexts = [
  "Seorang peserta SERKOM sedang meninjau proyek Laravel 12 sebelum melakukan demonstrasi. Ia harus dapat menjelaskan alasan teknis di balik setiap file dan perintah, bukan hanya menunjukkan bahwa halaman berhasil tampil. Ketika menemukan masalah, peserta wajib menelusuri alur request, memeriksa komponen yang bertanggung jawab, melakukan perubahan sekecil mungkin, lalu memverifikasi hasil melalui browser, database, route, migration, atau test yang relevan.",
  "Pada simulasi Pemrogram Junior, sebuah fitur dinilai dari tiga hal: implementasi berfungsi, alurnya dapat dijelaskan, dan hasilnya dapat dibuktikan. Peserta menerima potongan proyek Laravel 12 yang menggunakan tabel products, Eloquent, Blade, validation, dan resource route. Bacalah konteks teknis secara runtut karena satu istilah dapat memiliki fungsi yang berbeda pada model, controller, migration, view, atau testing.",
  "Skenario berikut menempatkan peserta sebagai pengembang junior yang harus memelihara aplikasi CRUD. Sebelum memilih jawaban, tentukan komponen Laravel yang paling berkaitan, pahami input dan outputnya, kemudian cek apakah penjelasan tersebut sesuai dengan alur browser → route → controller → model/database → view atau redirect. Jawaban yang baik harus konsisten dengan perilaku framework dan spesifikasi proyek latihan.",
  "Dalam asesmen praktik, kesalahan kecil seperti nama route yang tidak konsisten, field yang tidak tervalidasi, atau atribut model yang tidak dapat diisi dapat menghentikan alur aplikasi. Peserta perlu membaca potongan kode, mengenali tanggung jawab setiap bagian, menghubungkannya dengan gejala yang muncul, dan menentukan langkah verifikasi yang paling relevan sebelum melakukan perubahan."
];

function pick(items, index) {
  return items[Math.abs(index) % items.length];
}

function sourceBridge(topic) {
  const coverage = topic?.sourceCoverage ?? [];
  const first = coverage[0] ?? topic?.summary ?? "Konsep pada materi aktif digunakan sebagai dasar analisis.";
  const second = coverage[1] ?? "Gunakan informasi yang tersedia tanpa menambahkan asumsi yang tidak diperlukan.";
  return `${first} ${second}`;
}

export function buildTkaStimulus(topic, original, variantIndex = 0) {
  if (topic.subjectId === "matematika") {
    return `${pick(mathContexts, variantIndex)}\n\nFokus materi: ${topic.title}. ${sourceBridge(topic)}\n\nInformasi inti yang harus dianalisis:\n${original}`;
  }
  if (topic.subjectId === "bahasa-indonesia") {
    return `${pick(idContexts, variantIndex)}\n\nFokus materi: ${topic.title}. ${sourceBridge(topic)}\n\nBacaan atau informasi inti:\n${original}`;
  }
  return `${pick(enContexts, variantIndex)}\n\nFocus: ${topic.title}. ${sourceBridge(topic)}\n\nCore reading material:\n${original}`;
}

export function buildSerkomStimulus(topic, lesson, originalQuestion, variantIndex = 0) {
  const code = (lesson?.code ?? []).slice(0, 8).join("\n");
  const context = pick(serkomContexts, variantIndex);
  const source = sourceBridge(topic);
  const stimulus = `${context}\n\nFokus materi: ${topic.title}. ${source}\n\nPertanyaan teknis harus dijawab dengan menghubungkan fungsi komponen, alur data, dan cara verifikasi. Cermati potongan kode atau perintah berikut sebelum menentukan jawaban.`;
  return { stimulus, codeExcerpt: code, originalQuestion };
}
