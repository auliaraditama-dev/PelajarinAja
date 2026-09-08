export function materialOverview(topic) {
  const title = topic.title.toLowerCase();
  if (topic.subjectId === "serkom") {
    return `Materi ${title} menekankan pemahaman fungsi komponen, keterkaitan antar file, alur data, alasan teknis, serta bukti verifikasi. Penguasaan dinilai dari kemampuan menerapkan konsep dan menjelaskan proses kerja secara runtut.`;
  }
  if (topic.subjectId === "matematika") {
    return `Materi ${title} perlu dipahami melalui urutan yang sistematis: identifikasi yang ditanyakan, pilih data yang relevan, tentukan konsep atau rumus, lakukan perhitungan secara bertahap, lalu verifikasi hasil.`;
  }
  if (topic.subjectId === "bahasa-indonesia") {
    return `Materi ${title} berfokus pada pembacaan terarah. Pertanyaan perlu diidentifikasi terlebih dahulu, kemudian bukti yang relevan dicari dalam teks sebelum menentukan jawaban yang paling sesuai.`;
  }
  return `Materi ${title} berfokus pada pemahaman isi teks secara terarah. Tidak setiap kata harus diterjemahkan; prioritasnya adalah tujuan pertanyaan, kata kunci, hubungan antar kalimat, dan bukti yang mendukung jawaban.`;
}

export function materialImportance(topic) {
  if (topic.subjectId === "serkom") {
    return `Materi ini penting karena asesmen SERKOM menilai hasil kerja sekaligus pemahaman terhadap proses teknis. Implementasi perlu dapat dijelaskan, diverifikasi, diuji, dan didukung bukti yang sesuai.`;
  }
  if (topic.subjectId === "matematika") {
    return `Konsep ini penting karena bentuk soal dapat berubah tanpa mengubah prinsip penyelesaiannya. Pemahaman konsep memungkinkan strategi yang sama diterapkan pada angka, konteks, dan representasi yang berbeda.`;
  }
  return `Materi ini penting karena beberapa pilihan jawaban dapat terlihat masuk akal. Jawaban yang tepat harus memiliki dukungan paling kuat dari isi, maksud, hubungan informasi, atau bukti yang terdapat dalam teks.`;
}

export function conceptIllustration(topic) {
  if (topic.analogy) return topic.analogy;
  if (topic.subjectId === "serkom") return "Alur aplikasi dapat disamakan dengan sistem layanan: request diterima, diarahkan ke komponen pemroses, data diakses atau disimpan, lalu hasil dikembalikan sebagai response.";
  if (topic.subjectId === "matematika") return "Soal dapat dipandang sebagai proses navigasi: data berperan sebagai informasi awal, konsep atau rumus sebagai metode, dan hasil akhir sebagai tujuan yang perlu diverifikasi.";
  return "Teks dapat dipahami sebagai rangkaian informasi yang saling terhubung. Makna suatu bagian ditentukan oleh konteks, hubungan dengan kalimat lain, dan tujuan keseluruhan bacaan.";
}

export function problemSolvingGuide(topic) {
  if (topic.subjectId === "matematika") {
    return [
      "Identifikasi secara tepat besaran atau nilai yang diminta.",
      "Catat data yang relevan dan pisahkan informasi yang tidak diperlukan.",
      "Tentukan konsep, sifat, atau rumus yang paling sesuai.",
      "Substitusikan data secara runtut dan kerjakan satu tahap pada satu waktu.",
      "Periksa tanda operasi, satuan, domain, dan kewajaran hasil.",
      "Cocokkan hasil dengan pilihan jawaban apabila soal berbentuk pilihan ganda."
    ];
  }
  if (topic.subjectId === "serkom") {
    return [
      "Identifikasi fitur, kebutuhan, atau masalah teknis yang dibahas.",
      "Tentukan file, class, method, route, model, view, atau perintah yang bertanggung jawab.",
      "Uraikan alur input, proses, akses data, dan output secara berurutan.",
      "Analisis kode berdasarkan komponen, parameter, operasi, nilai balik, dan efeknya terhadap aplikasi.",
      "Lakukan verifikasi menggunakan browser, database, route:list, migrate:status, atau test sesuai konteks.",
      "Jika terjadi error, catat gejala, lokasi, dugaan penyebab, lalu ubah bagian terkecil yang relevan.",
      "Simpan bukti hasil agar proses dapat ditelusuri dan dijelaskan kembali pada asesmen."
    ];
  }
  return [
    "Identifikasi jenis informasi yang diminta oleh pertanyaan.",
    "Tandai kata kunci atau batasan penting pada pertanyaan.",
    "Temukan kalimat atau bagian teks yang menjadi bukti utama.",
    "Bedakan informasi eksplisit, inferensi, opini, dan evaluasi.",
    "Eliminasi pilihan yang bertentangan, terlalu umum, atau tidak didukung teks.",
    "Pilih jawaban dengan dukungan bukti paling kuat dari bacaan."
  ];
}

export function questionSolutionSteps(question, topic) {
  if (topic.subjectId === "matematika") {
    return [
      `Fokus pertanyaan: “${question.q.replace(/^(Latihan konsep: |Uji cepat: |Cermati soal berikut\. |Paket variasi: )/, "").slice(0, 120)}${question.q.length > 120 ? "…" : ""}”.`,
      "Identifikasi data yang berkaitan langsung dengan nilai yang diminta.",
      "Terapkan konsep pada materi aktif dan lakukan operasi secara berurutan.",
      `Verifikasi hasil menggunakan pembahasan berikut: ${question.explain}`
    ];
  }
  if (topic.subjectId === "serkom") {
    return [
      "Identifikasi kata kunci teknis, misalnya route, controller, model, migration, Blade, validation, atau testing.",
      "Hubungkan kata kunci dengan tanggung jawab komponen yang tepat pada arsitektur Laravel.",
      "Eliminasi pilihan yang mencampurkan fungsi antar komponen atau tidak sesuai alur request-response.",
      `Verifikasi kesimpulan menggunakan alasan berikut: ${question.explain}`
    ];
  }
  return [
    "Tentukan apakah soal meminta informasi eksplisit, inferensi, makna kata, tujuan penulis, atau evaluasi.",
    "Cari bukti yang paling dekat dan paling relevan di dalam teks.",
    "Bandingkan setiap pilihan dengan bukti tersebut dan eliminasi yang tidak sesuai.",
    `Gunakan pembahasan berikut sebagai verifikasi akhir: ${question.explain}`
  ];
}

export function masteryChecklist(topic) {
  if (topic.subjectId === "serkom") {
    return [
      "Fungsi komponen dapat dijelaskan secara mandiri dan tepat.",
      "File atau perintah yang berkaitan dapat ditunjukkan dengan benar.",
      "Alur input, proses, output, dan verifikasi dapat dijelaskan secara runtut.",
      "Gejala error umum dan langkah penelusuran awal dapat diidentifikasi."
    ];
  }
  if (topic.subjectId === "matematika") {
    return [
      "Besaran yang ditanyakan dapat diidentifikasi sebelum perhitungan dimulai.",
      "Rumus atau konsep dapat dipilih berdasarkan kondisi soal.",
      "Perhitungan dapat ditulis secara bertahap dan konsisten.",
      "Satuan, domain, dan kewajaran hasil selalu diperiksa."
    ];
  }
  return [
    "Bukti teks yang mendukung jawaban dapat ditunjukkan.",
    "Pilihan jawaban tidak ditentukan hanya berdasarkan kesan umum.",
    "Informasi eksplisit dan kesimpulan tersirat dapat dibedakan.",
    "Kata kunci pertanyaan diperiksa sebelum menentukan jawaban."
  ];
}
