import { everydayContext } from "./everydayContexts.js";

const mathFrames = [
  "Gunakan konteks berikut sebagai latihan numerasi. Tentukan lebih dahulu informasi yang benar-benar dipakai, kemudian ubah informasi tersebut menjadi model matematika yang sesuai.",
  "Masalah berikut ditempatkan pada situasi sehari-hari agar proses penyelesaian tidak berhenti pada hafalan rumus. Identifikasi besaran, hubungan, dan syarat sebelum menghitung.",
  "Bacalah skenario secara utuh. Beberapa rincian berfungsi sebagai konteks, sedangkan bagian inti memuat data yang harus diolah. Pilih konsep yang tepat dan periksa kewajaran hasil.",
  "Pada kehidupan sehari-hari, data sering muncul dalam bentuk narasi. Latihan ini meminta pembaca menerjemahkan narasi menjadi hubungan matematis, menyelesaikannya, lalu memeriksa hasil terhadap kondisi awal."
];

const idFrames = [
  "Gunakan bacaan berikut sebagai latihan literasi pada situasi sehari-hari. Bedakan informasi eksplisit, petunjuk tersirat, opini, dan bukti sebelum menilai pilihan jawaban.",
  "Bacalah keseluruhan stimulus terlebih dahulu. Perhatikan hubungan antarkalimat, kata rujukan, sebab-akibat, sudut pandang, dan batas makna sebelum menarik kesimpulan.",
  "Latihan berikut menempatkan kemampuan membaca kritis pada konteks yang dekat dengan kehidupan. Jawaban yang tepat harus memiliki dukungan tekstual paling kuat.",
  "Jangan memilih jawaban hanya karena satu kata pada opsi sama dengan kata dalam bacaan. Hubungkan ide utama, rincian, dan tujuan teks untuk menentukan pilihan yang paling tepat."
];

const enFrames = [
  "Use the following everyday context as a reading-comprehension task. Read for meaning, identify the question type, locate evidence, and eliminate unsupported options.",
  "Read the full stimulus before answering. Pay attention to explicit details, references, sequence, cause and effect, comparison, implied meaning, and the writer's purpose where relevant.",
  "The situation below is familiar, but the task still requires careful A2–B1 reading. The best answer must be supported by the passage rather than by outside assumptions.",
  "Treat the text as a complete message. Connect related sentences, distinguish main ideas from supporting details, and check whether each option accurately reflects the evidence."
];

const serkomFrames = [
  "Gunakan skenario berikut sebagai latihan logika pemrograman dan analisis alur Laravel. Tentukan komponen yang bertanggung jawab, data yang masuk, proses yang terjadi, output yang diharapkan, dan cara verifikasinya.",
  "Pada pekerjaan pengembangan perangkat lunak, masalah tidak cukup diselesaikan dengan menebak file yang salah. Telusuri request, route, controller, model, database, view atau redirect secara runtut.",
  "Bacalah konteks teknis dan potongan kode sebagai satu alur. Perhatikan method, parameter, tipe data, aturan validasi, query, serta hubungan antarkomponen sebelum menentukan jawaban.",
  "Skenario ini meniru pekerjaan sehari-hari seorang pemrogram junior. Jawaban yang tepat harus menjelaskan perilaku kode dan langkah pemeriksaan yang dapat dibuktikan."
];

function pick(items, index) {
  return items[Math.abs(Number(index) || 0) % items.length];
}

function curriculumBridge(topic) {
  const coverage = topic?.learningCoverage ?? [];
  const first = coverage[0] ?? topic?.summary ?? "Konsep pada materi aktif menjadi dasar analisis.";
  const second = coverage[1] ?? "Gunakan informasi yang tersedia tanpa menambahkan asumsi yang tidak diperlukan.";
  return `${first} ${second}`;
}

export function buildTkaStimulus(topic, original, variantIndex = 0) {
  const scenario = everydayContext(topic, variantIndex);
  if (topic.subjectId === "matematika") {
    return {
      key: scenario.key,
      text: `${scenario.text}\n\n${pick(mathFrames, variantIndex)}\n\nFokus materi: ${topic.title}. ${curriculumBridge(topic)}\n\nData atau persoalan inti:\n${original}\n\nSelesaikan berdasarkan data inti dan gunakan konteks untuk menilai apakah hasil akhir masuk akal dalam situasi tersebut.`
    };
  }
  if (topic.subjectId === "bahasa-indonesia") {
    return {
      key: scenario.key,
      text: `${scenario.text}\n\n${pick(idFrames, variantIndex)}\n\nFokus materi: ${topic.title}. ${curriculumBridge(topic)}\n\nBacaan atau informasi inti:\n${original}\n\nTentukan jawaban dengan menunjuk bukti yang paling relevan pada bacaan dan hindari kesimpulan yang melampaui informasi teks.`
    };
  }
  return {
    key: scenario.key,
    text: `${scenario.text}\n\n${pick(enFrames, variantIndex)}\n\nFocus: ${topic.title}. ${curriculumBridge(topic)}\n\nCore reading material:\n${original}\n\nChoose the answer that is most strongly supported by the text and the relationship between its ideas.`
  };
}

export function buildSerkomStimulus(topic, lesson, originalQuestion, variantIndex = 0) {
  const scenario = everydayContext(topic, variantIndex);
  const code = (lesson?.code ?? []).slice(0, 10).join("\n");
  const scope = curriculumBridge(topic);
  const text = `${scenario.text}\n\n${pick(serkomFrames, variantIndex)}\n\nFokus materi: ${topic.title}. ${scope}\n\nMasalah teknis yang harus dianalisis:\n${originalQuestion}\n\nHubungkan jawaban dengan fungsi komponen, alur data, kemungkinan gejala, dan langkah verifikasi yang paling relevan.`;
  return { key: scenario.key, stimulus: text, codeExcerpt: code, originalQuestion };
}
