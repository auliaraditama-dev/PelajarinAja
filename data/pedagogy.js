export function teacherLead(topic) {
  const title = topic.title.toLowerCase();
  if (topic.subjectId === "serkom") {
    return `Bayangkan kamu sedang duduk di depan asesor dan diminta menjelaskan ${title}. Targetnya bukan sekadar bisa mengetik kode, tetapi bisa menjelaskan apa yang terjadi, file mana yang bekerja, mengapa langkah itu diperlukan, dan bagaimana membuktikan hasilnya benar.`;
  }
  if (topic.subjectId === "matematika") {
    return `Kita pelajari ${title} dengan cara yang sederhana: pahami dulu ceritanya, cari informasi yang benar-benar dipakai, pilih konsep yang cocok, lalu hitung pelan-pelan. Jangan buru-buru memasukkan angka ke rumus sebelum tahu apa yang sedang dicari.`;
  }
  if (topic.subjectId === "bahasa-indonesia") {
    return `Pada materi ${title}, yang paling penting bukan membaca cepat, tetapi membaca dengan tujuan. Kita cari apa yang ditanyakan, tandai bukti di teks, lalu pilih jawaban yang paling didukung bacaan, bukan yang hanya terasa masuk akal.`;
  }
  return `Pada materi ${title}, kita tidak perlu menerjemahkan setiap kata. Fokus dulu pada tujuan pertanyaan, kata kunci, hubungan antar kalimat, lalu gunakan bukti dari teks untuk memastikan jawaban.`;
}

export function teacherWhy(topic) {
  if (topic.subjectId === "serkom") {
    return `Materi ini penting karena di SERKOM kamu perlu menunjukkan dua hal sekaligus: aplikasi bekerja dan kamu memahami alasan teknis di balik pekerjaanmu. Kode yang berjalan tetapi tidak bisa dijelaskan akan sulit menjadi bukti pemahaman yang kuat.`;
  }
  if (topic.subjectId === "matematika") {
    return `Konsep ini penting karena soal TKA sering mengubah bentuk cerita, angka, atau konteks. Kalau kamu hanya menghafal satu contoh, kamu mudah bingung. Kalau konsepnya paham, bentuk soal boleh berubah tetapi langkah berpikirnya tetap bisa dipakai.`;
  }
  return `Materi ini penting karena soal membaca sering memberi pilihan yang semuanya tampak masuk akal. Pembeda utamanya adalah bukti. Jawaban terbaik harus paling sesuai dengan isi, maksud, atau hubungan informasi di dalam teks.`;
}

export function everydayAnalogy(topic) {
  if (topic.analogy) return topic.analogy;
  if (topic.subjectId === "serkom") return "Anggap aplikasi seperti restoran: pelanggan mengirim pesanan, pelayan meneruskan, dapur memproses, gudang menyimpan bahan, lalu hasil kembali ke pelanggan.";
  if (topic.subjectId === "matematika") return "Anggap soal seperti petunjuk perjalanan. Angka adalah rambu, rumus adalah peta, dan jawaban adalah tujuan. Peta baru berguna setelah kita tahu posisi awal dan tujuan.";
  return "Anggap teks seperti percakapan. Kita tidak menebak maksud orang dari satu kata saja, tetapi dari kalimat sebelum-sesudah dan tujuan pembicaraannya.";
}

export function problemSolvingGuide(topic) {
  if (topic.subjectId === "matematika") {
    return [
      "Baca pertanyaan terakhir dulu agar tahu apa yang harus dicari.",
      "Tulis data penting dan buang informasi yang tidak diperlukan.",
      "Tentukan konsep atau rumus yang paling sesuai.",
      "Substitusikan angka secara rapi satu langkah per baris.",
      "Periksa tanda, satuan, dan kewajaran hasil.",
      "Cocokkan hasil dengan pilihan jawaban jika bentuknya pilihan ganda."
    ];
  }
  if (topic.subjectId === "serkom") {
    return [
      "Tentukan fitur atau masalah yang sedang dibahas.",
      "Tunjuk file, class, method, route, atau perintah yang bertanggung jawab.",
      "Jelaskan alur input → proses → data → output dengan kalimat sendiri.",
      "Baca kode dari luar ke dalam: nama komponen, parameter, proses, lalu hasil.",
      "Verifikasi dengan browser, database, route:list, migrate:status, atau test sesuai kebutuhan.",
      "Jika error, catat gejala dan ubah bagian terkecil yang paling relevan.",
      "Simpan bukti hasil supaya proses dapat dijelaskan kembali saat asesmen."
    ];
  }
  return [
    "Baca pertanyaan sebelum membaca ulang teks.",
    "Tandai kata kunci pada pertanyaan.",
    "Cari kalimat atau bagian teks yang menjadi bukti.",
    "Bedakan informasi eksplisit, kesimpulan tersirat, dan opini.",
    "Eliminasi pilihan yang terlalu umum, bertentangan, atau tidak didukung teks.",
    "Pilih jawaban yang paling dekat dengan bukti, bukan yang sekadar terdengar bagus."
  ];
}

export function questionSolutionSteps(question, topic) {
  if (topic.subjectId === "matematika") {
    return [
      `Apa yang dicari: fokus pada inti pertanyaan “${question.q.replace(/^(Latihan konsep: |Uji cepat: |Cermati soal berikut\. |Paket variasi: )/, "").slice(0, 120)}${question.q.length > 120 ? "…" : ""}”.`,
      "Ambil data yang berhubungan langsung dengan yang ditanyakan.",
      "Gunakan konsep pada materi aktif, kerjakan operasi secara berurutan, lalu sederhanakan hasil.",
      `Periksa hasil dengan pembahasan: ${question.explain}`
    ];
  }
  if (topic.subjectId === "serkom") {
    return [
      "Kenali kata kunci teknis pada soal, misalnya route, controller, model, migration, Blade, validation, atau testing.",
      "Hubungkan kata kunci itu dengan fungsi komponen yang benar di alur Laravel.",
      "Eliminasi pilihan yang mencampur tanggung jawab antar komponen.",
      `Cek alasan akhirnya: ${question.explain}`
    ];
  }
  return [
    "Lihat dulu apa yang diminta: informasi langsung, inferensi, makna kata, tujuan penulis, atau evaluasi.",
    "Temukan bukti paling dekat di teks atau konteks.",
    "Bandingkan setiap pilihan dengan bukti tersebut.",
    `Gunakan penjelasan ini sebagai pengecekan akhir: ${question.explain}`
  ];
}

export function examChecklist(topic) {
  if (topic.subjectId === "serkom") {
    return [
      "Saya bisa menjelaskan fungsi komponen tanpa membaca hafalan.",
      "Saya bisa menunjukkan file atau perintah yang terkait.",
      "Saya bisa menjelaskan input, proses, output, dan cara verifikasi.",
      "Saya tahu gejala error umum dan langkah awal menelusurinya."
    ];
  }
  if (topic.subjectId === "matematika") {
    return [
      "Saya tahu apa yang ditanyakan sebelum menghitung.",
      "Saya bisa memilih rumus tanpa menebak.",
      "Saya menulis langkah hitung satu per satu.",
      "Saya selalu memeriksa satuan dan kewajaran hasil."
    ];
  }
  return [
    "Saya bisa menunjukkan bukti teks untuk jawaban.",
    "Saya tidak memilih jawaban hanya karena terdengar masuk akal.",
    "Saya bisa membedakan fakta eksplisit dan kesimpulan tersirat.",
    "Saya mengecek kata kunci pada pertanyaan sebelum menjawab."
  ];
}
