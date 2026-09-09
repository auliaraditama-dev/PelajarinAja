import { linkedContext } from "./linkedContexts.js";

const mathClosings = [
  "Gunakan seluruh data yang tercantum pada persoalan inti, pilih konsep yang sesuai, lalu periksa apakah hasil akhirnya memenuhi syarat pada situasi tersebut.",
  "Hubungkan setiap angka dan syarat pada persoalan dengan kebutuhan kegiatan. Informasi yang tidak muncul pada persoalan inti tidak diperlukan untuk menghitung jawaban.",
  "Model matematika pada persoalan inti mewakili keputusan yang harus dibuat. Selesaikan model tersebut secara runtut dan periksa kembali satuan, tanda, atau batas yang berlaku."
];

const idClosings = [
  "Gunakan bukti yang paling dekat dengan pertanyaan. Pilihan yang hanya terdengar masuk akal tetapi tidak didukung bacaan harus dieliminasi.",
  "Jawaban yang benar harus konsisten dengan kata, kalimat, hubungan gagasan, atau inferensi yang benar-benar tersedia dalam bacaan inti.",
  "Periksa kembali apakah pilihan jawaban menjawab hal yang ditanyakan tanpa menambah fakta baru di luar teks."
];

const enClosings = [
  "Use the strongest evidence from the passage. Reject an option when it adds an idea that is not supported by the text.",
  "Connect the question to the exact sentence, sequence, reference, inference, or argument that provides the answer.",
  "Check that the selected option answers what is asked and stays within the meaning of the passage. Before locking the answer, identify the exact word, sentence, reference, sequence, or relationship that supports the choice and confirm that no outside assumption is needed."
];

const serkomClosings = [
  "Telusuri kasus dari gejala ke komponen yang bertanggung jawab, kemudian pilih jawaban yang dapat dibuktikan melalui kode, route, database, browser, migration, atau test yang sesuai.",
  "Jangan memilih komponen hanya karena namanya familiar. Cocokkan fungsi komponen dengan masalah yang benar-benar dinyatakan pada kasus.",
  "Gunakan alur request-response dan tanggung jawab setiap file untuk menentukan tindakan yang paling relevan, lalu tentukan cara verifikasi hasilnya."
];

function pick(items, index) {
  return items[Math.abs(Number(index) || 0) % items.length];
}

function compact(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function tokens(value) {
  const stop = new Set(["yang", "dan", "atau", "pada", "untuk", "dari", "dengan", "adalah", "dalam", "sebuah", "bagaimana", "ketika", "pilih", "penjelasan", "materi", "proyek", "laravel", "seharusnya", "tentang"]);
  return compact(value).toLowerCase().split(/[^a-z0-9_$@.:-]+/).filter((item) => item.length >= 4 && !stop.has(item));
}

function relevantTechnicalExcerpt(lesson, question) {
  const lines = [...(lesson?.code ?? []), ...(lesson?.syntax ?? [])].map((line) => String(line).trim()).filter(Boolean);
  if (!lines.length) return compact(question);
  const queryTokens = new Set(tokens(question));
  const ranked = lines.map((line, index) => {
    const lineTokens = tokens(line);
    const score = lineTokens.reduce((sum, token) => sum + (queryTokens.has(token) ? 3 : 0), 0) + (index < 4 ? 0.25 : 0);
    return { line, score, index };
  }).sort((a, b) => b.score - a.score || a.index - b.index);
  const selected = ranked.filter((item) => item.score > 0).slice(0, 7).map((item) => item.line);
  const fallback = ranked.slice(0, Math.min(5, ranked.length)).map((item) => item.line);
  return [...new Set(selected.length ? selected : fallback)].join("\n");
}

function questionCore(question) {
  const q = compact(question?.q ?? question);
  if (question?.type === "matrix") {
    const rows = (question.statements ?? []).map((item, index) => `${index + 1}. ${compact(item.text)}`).join(" ");
    return compact(`${q} ${rows}`);
  }
  if (question?.type === "multiple") {
    const rows = (question.options ?? []).map((item, index) => `${String.fromCharCode(65 + index)}. ${compact(item)}`).join(" ");
    return compact(`${q} ${rows}`);
  }
  return q;
}

export function buildTkaStimulus(topic, question, variantIndex = 0) {
  const scenario = linkedContext(topic, variantIndex);
  const core = questionCore(question);
  if (topic.subjectId === "matematika") {
    return {
      key: scenario.key,
      coreQuestion: core,
      text: `${scenario.intro}\n\n${scenario.bridge}\n\nPersoalan yang langsung digunakan dalam kegiatan:\n${core}\n\n${pick(mathClosings, variantIndex)}`
    };
  }
  if (topic.subjectId === "bahasa-indonesia") {
    return {
      key: scenario.key,
      coreQuestion: core,
      text: `${scenario.intro}\n\n${scenario.bridge}\n\nBacaan dan tugas inti:\n${core}\n\n${pick(idClosings, variantIndex)}`
    };
  }
  return {
    key: scenario.key,
    coreQuestion: core,
    text: `${scenario.intro}\n\n${scenario.bridge}\n\nCore passage and task:\n${core}\n\n${pick(enClosings, variantIndex)}`
  };
}

export function buildSerkomStimulus(topic, lesson, question, variantIndex = 0) {
  const scenario = linkedContext(topic, variantIndex);
  const core = compact(question?.q ?? question);
  const codeExcerpt = relevantTechnicalExcerpt(lesson, core);
  return {
    key: scenario.key,
    coreQuestion: core,
    stimulus: `${scenario.intro}\n\n${scenario.bridge}\n\nMasalah yang langsung harus diselesaikan:\n${core}\n\n${pick(serkomClosings, variantIndex)}`,
    codeExcerpt
  };
}
