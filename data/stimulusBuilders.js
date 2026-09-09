import { linkedContext } from "./linkedContexts.js";

const idVocabularyContexts = {
  "batu loncatan": "Setelah satu akun berhasil diakses, pelaku menggunakan akun tersebut sebagai batu loncatan untuk mencoba masuk ke sistem lain yang memiliki hak akses lebih tinggi.",
  "jalan tol bebas hambatan": "Ketika jaringan sangat cepat tetapi pengamanan lemah, aliran data yang seharusnya membantu pengguna justru dapat menjadi jalan tol bebas hambatan bagi pencurian informasi.",
  "dipandang sebelah mata": "Pekerjaan lepas sering dipandang sebelah mata meskipun sebagian pekerja mampu membangun portofolio dan penghasilan dari klien yang beragam.",
  "jaring pengaman": "Pekerja tetap memiliki beberapa jaring pengaman, seperti perlindungan kesehatan dan bantuan ketika terjadi risiko kerja.",
  "kerentanan": "Penggunaan kata sandi bawaan dan perangkat yang jarang diperbarui menambah kerentanan sistem terhadap serangan.",
  "esensi": "Hasil edit otomatis terlihat rapi, tetapi Arya merasa esensi dokumenter itu berkurang karena suasana asli tidak lagi terasa.",
  "kontras": "Desain poster memakai kontras yang kuat antara latar gelap dan tulisan terang agar informasi utama mudah dibaca.",
  "tereksploitasi": "Sebagian pekerja merasa tereksploitasi ketika tarif terus ditekan sementara biaya alat dan perlindungan kerja harus ditanggung sendiri.",
  "kemandirian": "Mampu mengatur jadwal, pemasukan, dan keputusan kerja sendiri sering dianggap sebagai bentuk kemandirian.",
  "flawless": "Hasil render terlihat flawless secara teknis, tetapi editor masih menilai suasana visualnya terlalu dingin.",
  "pivot": "Setelah perangkat IoT berhasil ditembus, penyerang menjadikannya pivot untuk mencoba menjangkau server lain pada jaringan yang sama.",
  "upgrade skill": "Agar tetap mampu bersaing, pekerja lepas perlu terus melakukan upgrade skill melalui latihan dan proyek baru."
};

const enVocabularyContexts = {
  "keep his promise": "Rafi said he would return the borrowed camera on Friday, and he came to the media room that morning to keep his promise.",
  "unnoticed": "The small error remained unnoticed because everyone focused on the final score instead of checking the calculation steps.",
  "surrounded": "The reading corner is surrounded by tall shelves, plants, and large windows that face the school garden.",
  "reliable": "The team chose a reliable backup drive because it had worked consistently during several previous projects.",
  "overwhelmed": "Nadia felt overwhelmed when several assignments, messages, and deadlines arrived at the same time.",
  "vulnerable": "A device with an unchanged default password can be vulnerable to unauthorized access.",
  "maintain": "The students clean the garden every week to maintain the area and keep the plants healthy.",
  "prominent": "The museum has a prominent entrance sign that can be seen clearly from the main road.",
  "preserve": "The community records traditional stories to preserve them for younger generations.",
  "frequent": "Frequent reading gives students repeated contact with vocabulary and different sentence patterns.",
  "responsible": "A responsible team member checks the assigned task, reports problems, and completes the work on time.",
  "evidence": "The report includes attendance records and before-and-after survey results as evidence for its conclusion."
};

const idQuestionMarkers = [
  "Di mana ", "Kapan ", "Pukul berapa ", "Kegiatan yang ", "Ide pokok ", "Pernyataan yang ", "Informasi tambahan ", "Bukti yang ", "Perbedaan sudut pandang ", "Pilih semua ", "Konflik utama ", "Suasana dominan ", "Makna yang ", "Makna ", "Yang dimaksud ", "Padanan terbaik ", "Langkah antisipasi ", "Simpulan yang ", "Tujuan utama ", "Pernyataan berikut"
];

const enQuestionMarkers = [
  "What ", "Which ", "When ", "Where ", "Why ", "How ", "Select all ", "The expression ", "Choose the meaning ", "What can ", "What is ", "Which statement"
];

const framePrefixes = [
  "Uji pemahaman:", "Latihan analisis:", "Cermati konteks berikut.", "Cermati konteks berikut:", "Cermati informasi berikut:", "Gunakan konsep yang sesuai:", "Perhatikan data berikut:", "Tentukan jawaban yang tepat:", "Berdasarkan informasi yang diberikan:", "Pilih hasil yang benar:", "Analisis informasi berikut:", "Perhatikan hubungan berikut:", "Tinjau situasi berikut:", "Hubungkan informasi berikut dengan konsep materi:", "Tentukan jawaban berdasarkan proses yang tepat:", "Cermati hubungan antarinformasi berikut:", "Pilih jawaban yang paling tepat berdasarkan materi:", "Gunakan seluruh informasi yang relevan:", "Analisis kondisi berikut secara runtut:", "Periksa hubungan data sebelum menentukan jawaban:", "Reading check:", "Comprehension task:", "Read carefully.", "Read the information carefully:", "Use the details in the text:", "Consider the following information:", "Identify the most relevant detail:", "Based on the information provided:", "Read the short passage carefully:", "Focus on the stated information:", "Choose the answer supported by the text:", "Analyze the following situation:", "Connect the details in the text:", "Consider the relationship between the ideas:", "Use all relevant information:", "Read the passage and evaluate the evidence:", "Interpret the information carefully:", "Compare the details before answering:", "Determine the conclusion best supported by the text:"
];

const frameTails = [
  "Gunakan informasi yang dinyatakan secara langsung.", "Periksa syarat utama sebelum memilih jawaban.", "Gunakan konsep inti tanpa menambah asumsi.", "Pastikan hasil sesuai dengan data yang tersedia.", "Perhatikan hubungan antarbagian sebelum memilih jawaban.", "Gunakan lebih dari satu informasi yang relevan.", "Pastikan alasan dan hasil akhir konsisten.", "Eliminasi pilihan yang tidak sesuai dengan konsep.", "Use only information supported by the text.", "Check the key detail before choosing your answer.", "Do not add assumptions that are not stated.", "Make sure the answer matches the information given.", "Consider how the details work together before choosing an answer.", "Use more than one relevant clue when necessary.", "Make sure the conclusion is consistent with the evidence.", "Eliminate choices that are too broad or unsupported."
];

function compact(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function cleanFrames(value) {
  let text = compact(value);
  let changed = true;
  while (changed) {
    changed = false;
    for (const prefix of framePrefixes) {
      if (text.toLowerCase().startsWith(prefix.toLowerCase())) {
        text = compact(text.slice(prefix.length));
        changed = true;
      }
    }
  }
  for (const tail of frameTails) {
    if (text.toLowerCase().endsWith(tail.toLowerCase())) text = compact(text.slice(0, -tail.length));
  }
  return text;
}

function findMarker(text, markers) {
  let result = null;
  for (const marker of markers) {
    const index = text.indexOf(marker);
    if (index > 0 && (!result || index < result.index)) result = { marker, index };
  }
  return result;
}

function splitQuoted(text, markers) {
  const source = cleanFrames(text);
  const matches = [...source.matchAll(/“([^”]+)”/g)];
  if (!matches.length) return null;
  const longMatches = matches.filter((match) => compact(match[1]).length >= 35);
  if (!longMatches.length) return null;
  const passage = longMatches.map((match) => compact(match[1])).join("\n\n");
  const last = longMatches[longMatches.length - 1];
  const after = cleanFrames(source.slice((last.index ?? 0) + last[0].length));
  const before = cleanFrames(source.slice(0, longMatches[0].index ?? 0));
  const marker = findMarker(after, markers);
  const question = marker ? compact(after.slice(marker.index)) : after || before;
  return { passage, question: question || source };
}

function splitPlain(text, markers) {
  const source = cleanFrames(text);
  const marker = findMarker(source, markers);
  if (!marker) return null;
  const passage = compact(source.slice(0, marker.index));
  const question = compact(source.slice(marker.index));
  if (!passage || !question) return null;
  return { passage, question };
}

function quotedTerm(text) {
  const match = cleanFrames(text).match(/“([^”]{2,40})”/);
  return match ? compact(match[1]) : "";
}

function idLanguageParts(question) {
  const source = cleanFrames(question?.semanticCore ?? question?.q ?? "");
  const term = quotedTerm(source).toLowerCase();
  if (term && idVocabularyContexts[term] && /makna|padanan|frasa|istilah/i.test(source)) {
    return { passage: idVocabularyContexts[term], question: source };
  }
  const quoted = splitQuoted(source, idQuestionMarkers);
  if (quoted) return quoted;
  const plain = splitPlain(source, idQuestionMarkers);
  if (plain) return plain;
  return { passage: source, question: "Berdasarkan teks tersebut, manakah jawaban yang paling tepat?" };
}

function enLanguageParts(question) {
  const source = cleanFrames(question?.semanticCore ?? question?.q ?? "");
  const term = quotedTerm(source).toLowerCase();
  if (term && enVocabularyContexts[term] && /meaning|expression|replace/i.test(source)) {
    return { passage: enVocabularyContexts[term], question: source };
  }
  const quoted = splitQuoted(source, enQuestionMarkers);
  if (quoted) return quoted;
  const plain = splitPlain(source, enQuestionMarkers);
  if (plain) return plain;
  if (/select all/i.test(source)) {
    const index = source.search(/select all/i);
    return { passage: compact(source.slice(0, index)), question: compact(source.slice(index)) };
  }
  return { passage: source, question: "Which answer is best supported by the text?" };
}


const idQuestionDirectives = {
  Pendek: ["Gunakan bukti pada teks.", "Pilih jawaban yang didukung teks.", "Jangan menambah asumsi di luar bacaan.", "Cocokkan jawaban dengan informasi pada teks."],
  Sedang: ["Tentukan jawaban dengan menghubungkan pertanyaan pada bukti yang tersedia dalam bacaan.", "Pilih opsi yang paling konsisten dengan informasi yang dinyatakan atau tersirat secara wajar.", "Gunakan bagian bacaan yang paling relevan sebagai dasar keputusan.", "Periksa setiap pilihan terhadap konteks sebelum menentukan jawaban."],
  Panjang: ["Gunakan seluruh bukti yang relevan dalam bacaan dan pastikan kesimpulan tidak melampaui informasi yang tersedia.", "Hubungkan rincian, hubungan antarkalimat, dan tujuan bacaan sebelum memilih jawaban yang paling dapat dipertanggungjawabkan.", "Bandingkan pilihan dengan isi bacaan secara menyeluruh, lalu singkirkan opsi yang menambah asumsi atau mengubah maksud teks.", "Pastikan jawaban akhir tetap konsisten dengan fakta, inferensi, atau evaluasi yang benar-benar didukung oleh bacaan."]
};

const enQuestionDirectives = {
  Pendek: ["Use evidence from the text.", "Choose the answer supported by the passage.", "Do not add information that is not stated.", "Match the answer to the text."],
  Sedang: ["Connect the question with the most relevant evidence in the passage.", "Choose the option that is most consistent with what the text states or reasonably implies.", "Use the relevant part of the passage as the basis for your answer.", "Check each option against the context before choosing."],
  Panjang: ["Use all relevant evidence in the passage and make sure the conclusion does not go beyond the information provided.", "Connect details, relationships between sentences, and the purpose of the text before choosing the best-supported answer.", "Compare each option with the complete passage and eliminate choices that add assumptions or change the writer's meaning.", "Make sure the final answer remains consistent with the textual, inferential, or evaluative evidence in the passage."]
};

function questionWithDirective(question, subjectId, variantIndex, lengthClass) {
  const bank = subjectId === "bahasa-inggris" ? enQuestionDirectives : idQuestionDirectives;
  const options = bank[lengthClass] ?? bank.Sedang;
  const directive = options[Math.abs(Number(variantIndex) || 0) % options.length];
  return `${compact(question)} ${directive}`;
}

function mathQuestion(topic, source, variantIndex = 0, lengthClass = "Sedang") {
  const prompts = {
    "himpunan-bilangan": "Berdasarkan data pada teks, himpunan hasil yang diminta adalah ...",
    "eksponen": "Berdasarkan operasi pada teks, hasil perhitungannya adalah ...",
    "operasi-khusus": "Berdasarkan aturan operasi pada teks, nilai yang diminta adalah ...",
    "fungsi-invers": "Berdasarkan aturan fungsi pada teks, nilai asal yang diminta adalah ...",
    "komposisi-fungsi": "Berdasarkan dua tahap fungsi pada teks, hasil akhirnya adalah ...",
    "barisan-aritmetika": "Berdasarkan pola pada teks, nilai atau jumlah yang diminta adalah ...",
    "barisan-geometri": "Berdasarkan pola rasio pada teks, nilai yang diminta adalah ...",
    "sistem-pertidaksamaan": "Berdasarkan syarat pada teks, manakah keputusan yang benar?",
    "spl": "Berdasarkan dua hubungan pada teks, nilai variabel yang diminta adalah ...",
    "sudut-garis-sejajar": "Berdasarkan hubungan sudut pada teks, besar sudut yang diminta adalah ...",
    "bangun-ruang-garis-bidang": "Berdasarkan hubungan geometri pada teks, jawaban yang tepat adalah ...",
    "kesebangunan": "Berdasarkan perbandingan pada teks, hasil yang diminta adalah ...",
    "pythagoras": "Berdasarkan ukuran pada teks, panjang yang diminta adalah ...",
    "transformasi": "Berdasarkan transformasi pada teks, koordinat bayangan yang benar adalah ...",
    "jarak-ruang": "Berdasarkan ukuran ruang pada teks, jarak yang diminta adalah ...",
    "keliling-luas": "Berdasarkan ukuran pada teks, hasil pengukuran yang diminta adalah ...",
    "volume-bangun-ruang": "Berdasarkan ukuran pada teks, volume yang diminta adalah ...",
    "luas-permukaan": "Berdasarkan kebutuhan pada teks, hasil minimum yang tepat adalah ...",
    "trigonometri": "Berdasarkan sisi-sisi pada teks, nilai perbandingan trigonometri yang diminta adalah ...",
    "diagram-grafik": "Berdasarkan data pada teks, simpulan yang tepat adalah ...",
    "aturan-pencacahan": "Berdasarkan pilihan pada teks, banyak kemungkinan yang dapat dibentuk adalah ...",
    "statistika": "Berdasarkan data pada teks, nilai statistik yang diminta adalah ...",
    "peluang-tunggal": "Berdasarkan ruang sampel pada teks, peluang yang diminta adalah ...",
    "peluang-majemuk": "Berdasarkan informasi peluang pada teks, hasil yang diminta adalah ..."
  };
  const base = prompts[topic.id] ?? `Berdasarkan informasi pada teks, selesaikan persoalan berikut: ${source}`;
  const variants = lengthClass === "Pendek"
    ? [base, base.replace("Berdasarkan ", "Dari "), `Hasil yang tepat untuk kebutuhan pada teks adalah ...`]
    : lengthClass === "Panjang"
      ? [base, `Setelah seluruh data pada teks dihubungkan dengan konsep ${topic.title}, hasil yang paling konsisten adalah ...`, `Manakah hasil yang memenuhi seluruh angka, syarat, dan hubungan pada teks?`]
      : [base, `Gunakan data pada teks untuk menentukan hasil yang benar.`, `Manakah hasil yang sesuai dengan hubungan matematis pada teks?`];
  return variants[Math.abs(Number(variantIndex) || 0) % variants.length];
}

function mathPassage(topic, scenario, question, variantIndex = 0, lengthClass = "Sedang") {
  const source = cleanFrames(question?.semanticCore ?? question?.q ?? "");
  const statement = source.replace(/\.{3,}$/g, "belum ditentukan.").replace(/\?$/g, ".");
  const passages = {
    Pendek: `${scenario.introShort ?? scenario.intro} Catatan yang dipakai untuk menyelesaikan kebutuhan tersebut menyatakan: ${statement}`,
    Sedang: `${scenario.intro} Data yang digunakan dalam keputusan tersebut tercatat sebagai berikut: ${statement} Nilai yang diperoleh dari data ini akan langsung dipakai untuk menyelesaikan kebutuhan pada kegiatan tersebut.`,
    Panjang: `${scenario.intro} ${scenario.bridge} Catatan perhitungannya menyatakan: ${statement} Setiap angka dan syarat pada catatan itu diperlukan untuk menentukan hasil akhir yang akan dipakai pada kegiatan tersebut.`
  };
  return {
    passage: passages[lengthClass] ?? passages.Sedang,
    question: mathQuestion(topic, source, variantIndex, lengthClass)
  };
}

function serkomQuestion(source) {
  const clean = cleanFrames(source);
  if (/^pilih /i.test(clean) || /^(apa|bagaimana|mengapa|kapan|ketika|fungsi|manakah|pernyataan|dalam)/i.test(clean)) return clean;
  return `Berdasarkan kasus dan potongan kode tersebut, ${clean.charAt(0).toLowerCase()}${clean.slice(1)}`;
}


const technicalSnippets = [
  [/destroy|hapus|delete\(\)/i, "public function destroy(Product $produk): RedirectResponse\n{\n    $produk->delete();\n    return redirect()->route('produk.index')->with('success', 'Produk berhasil dihapus.');\n}"],
  [/update\(|memperbarui|perbarui/i, "public function update(Request $request, Product $produk): RedirectResponse\n{\n    $validated = $request->validate(['nama_produk' => ['required', 'string', 'max:100'], 'harga' => ['required', 'integer', 'min:0']]);\n    $produk->update($validated);\n    return redirect()->route('produk.index')->with('success', 'Produk berhasil diperbarui.');\n}"],
  [/edit\(|form edit/i, "public function edit(Product $produk): View\n{\n    return view('produk.edit', compact('produk'));\n}"],
  [/store\(|simpan|create\(/i, "public function store(Request $request): RedirectResponse\n{\n    $validated = $request->validate(['nama_produk' => ['required', 'string', 'max:100'], 'harga' => ['required', 'integer', 'min:0']]);\n    Product::query()->create($validated);\n    return redirect()->route('produk.index')->with('success', 'Produk berhasil ditambahkan.');\n}"],
  [/flash|session success|with\('success'/i, "return redirect()->route('produk.index')->with('success', 'Produk berhasil ditambahkan.');"],
  [/validation|validate|validasi/i, "$validated = $request->validate(['nama_produk' => ['required', 'string', 'max:100'], 'deskripsi' => ['required', 'string'], 'harga' => ['required', 'integer', 'min:0'], 'gambar' => ['nullable', 'string', 'max:255']]);"],
  [/fillable|mass assignment/i, "protected $fillable = ['nama_produk', 'deskripsi', 'harga', 'gambar'];"],
  [/casts|casting/i, "protected function casts(): array\n{\n    return ['harga' => 'integer'];\n}"],
  [/migration|schema|unsignedinteger|nullable|timestamps|rollback|down\(\)|up\(\)/i, "Schema::create('products', function (Blueprint $table) {\n    $table->id();\n    $table->string('nama_produk', 100);\n    $table->text('deskripsi');\n    $table->unsignedInteger('harga');\n    $table->string('gambar')->nullable();\n    $table->timestamps();\n});"],
  [/seeder|db:seed|foreach/i, "foreach ($products as $product) {\n    Product::query()->create($product);\n}"],
  [/route model binding|product \$produk|binding/i, "public function edit(Product $produk): View\n{\n    return view('produk.edit', compact('produk'));\n}"],
  [/route:list|resource route|route|routing/i, "Route::get('/', [ProductController::class, 'landing'])->name('landing');\nRoute::resource('produk', ProductController::class)->except(['show']);"],
  [/@csrf|csrf/i, "<form method=\"POST\" action=\"{{ route('produk.store') }}\">\n    @csrf\n</form>"],
  [/@method|method spoofing|put|patch/i, "<form method=\"POST\" action=\"{{ route('produk.update', $produk) }}\">\n    @csrf\n    @method('PUT')\n</form>"],
  [/@forelse|blade|view|landing/i, "@forelse ($products as $produk)\n    <h3>{{ $produk->nama_produk }}</h3>\n@empty\n    <p>Belum ada produk.</p>\n@endforelse"],
  [/assertdatabasehas/i, "$this->assertDatabaseHas('products', ['nama_produk' => 'Kopi Ulee Kareng']);"],
  [/assertok/i, "$response = $this->get('/');\n$response->assertOk();"],
  [/refreshdatabase/i, "use Illuminate\Foundation\Testing\RefreshDatabase;\nuse RefreshDatabase;"],
  [/php artisan test|feature test|testing|pengujian/i, "php artisan test\n$this->assertDatabaseHas('products', ['nama_produk' => 'Kopi Ulee Kareng']);"],
  [/composer|artisan|environment|lingkungan|php -v/i, "php -v\ncomposer --version\nphp artisan --version\nphp artisan about"],
  [/\.env|db_connection|db_database/i, "APP_ENV=local\nAPP_DEBUG=true\nDB_CONNECTION=mysql\nDB_DATABASE=kopi_ulee_kareng"],
  [/css|media query|responsif/i, "@media (max-width: 768px) {\n    .container { width: 92%; }\n}"],
  [/request|controller|mvc/i, "Browser -> Route -> ProductController -> Product -> MySQL -> Blade View -> Browser"]
];

function exactTechnicalSnippet(question) {
  const source = compact(question);
  const found = technicalSnippets.find(([pattern]) => pattern.test(source));
  return found ? found[1] : "";
}

function technicalExcerpt(lesson, question) {
  const source = compact(question);
  const exact = exactTechnicalSnippet(source);
  if (exact) return exact;
  const tokens = new Set(source.toLowerCase().split(/[^a-z0-9_$@.:-]+/).filter((item) => item.length >= 3));
  const lines = [...(lesson?.code ?? []), ...(lesson?.syntax ?? [])].map((line) => String(line).trim()).filter(Boolean);
  if (!lines.length) return source;
  const ranked = lines.map((line, index) => {
    const score = line.toLowerCase().split(/[^a-z0-9_$@.:-]+/).filter(Boolean).reduce((sum, token) => sum + (tokens.has(token) ? 4 : 0), 0);
    return { line, score, index };
  }).sort((a, b) => b.score - a.score || a.index - b.index);
  const selected = ranked.filter((item) => item.score > 0).slice(0, 8).map((item) => item.line);
  return [...new Set(selected.length ? selected : ranked.slice(0, Math.min(6, ranked.length)).map((item) => item.line))].join("\n");
}

function semanticParts(question) {
  return String(question?.semanticCore ?? question?.q ?? "").split("||").map((part) => compact(part)).filter(Boolean);
}

function sourceOnly(part) {
  const index = part.lastIndexOf("=>");
  return index > 0 ? compact(part.slice(0, index)) : compact(part);
}

function compoundTkaParts(topic, question, scenario, variantIndex = 0, lengthClass = "Sedang") {
  const parts = semanticParts(question).map(sourceOnly);
  if (parts.length < 2) return null;
  if (topic.subjectId === "matematika") {
    const passage = `${scenario.intro} Untuk menyelesaikan tugas, dua bagian data berikut harus dianalisis secara terpisah.\n\n${parts.map((part, index) => `Bagian ${index + 1}: ${cleanFrames(part).replace(/\.{3,}$/g, "belum ditentukan.")}`).join("\n\n")}`;
    const questionText = question.type === "multiple" ? "Berdasarkan seluruh bagian pada teks, pilih semua pernyataan yang benar." : question.type === "matrix" ? "Berdasarkan seluruh bagian pada teks, tentukan Benar atau Salah untuk setiap pernyataan." : "Berdasarkan dua bagian pada teks, pilih pasangan jawaban yang benar secara berurutan.";
    return { passage, question: questionWithDirective(questionText, topic.subjectId, variantIndex, lengthClass) };
  }
  if (topic.subjectId === "bahasa-indonesia") {
    const blocks = parts.map((part, index) => {
      const parsed = idLanguageParts({ semanticCore: part });
      return `Bagian ${index + 1}: ${parsed.passage}\nTugas bagian ${index + 1}: ${parsed.question}`;
    });
    const questionText = question.type === "multiple" ? "Berdasarkan seluruh bagian pada teks, pilih semua pernyataan yang benar." : question.type === "matrix" ? "Berdasarkan seluruh bagian pada teks, tentukan Benar atau Salah untuk setiap pernyataan." : "Berdasarkan kedua bagian pada teks, pilih pasangan jawaban yang benar.";
    return { passage: `${scenario.intro} Teks yang dianalisis terdiri atas beberapa bagian.\n\n${blocks.join("\n\n")}`, question: questionWithDirective(questionText, topic.subjectId, variantIndex, lengthClass) };
  }
  const blocks = parts.map((part, index) => {
    const parsed = enLanguageParts({ semanticCore: part });
    return `Part ${index + 1}: ${parsed.passage}\nTask ${index + 1}: ${parsed.question}`;
  });
  const questionText = question.type === "multiple" ? "Select all statements that are supported by the complete text." : question.type === "matrix" ? "Decide whether each statement is True or False based on the complete text." : "Choose the option that gives the correct answers for both parts in order.";
  return { passage: `${scenario.intro} The text being analyzed contains several parts.\n\n${blocks.join("\n\n")}`, question: questionWithDirective(questionText, topic.subjectId, variantIndex, lengthClass) };
}

export function buildTkaStimulus(topic, question, variantIndex = 0, lengthClass = "Sedang") {
  const scenario = linkedContext(topic, variantIndex);
  const compound = compoundTkaParts(topic, question, scenario, variantIndex, lengthClass);
  if (compound) {
    return {
      key: scenario.key,
      coreQuestion: compact(`${compound.passage} ${compound.question}`),
      sourceCore: compact(question?.semanticCore ?? question?.q ?? ""),
      text: compound.passage,
      question: compound.question,
      readingLabel: topic.subjectId === "bahasa-inggris" ? "Read the following text:" : "Bacalah teks berikut:",
      questionLabel: topic.subjectId === "bahasa-inggris" ? "Question:" : "Pertanyaan:"
    };
  }
  if (topic.subjectId === "matematika") {
    const parts = mathPassage(topic, scenario, question, variantIndex, lengthClass);
    return {
      key: scenario.key,
      coreQuestion: compact(`${parts.passage} ${questionWithDirective(parts.question, topic.subjectId, variantIndex, lengthClass)}`),
      sourceCore: compact(question?.semanticCore ?? question?.q ?? ""),
      text: parts.passage,
      question: questionWithDirective(parts.question, topic.subjectId, variantIndex, lengthClass),
      readingLabel: "Bacalah teks berikut:",
      questionLabel: "Pertanyaan:"
    };
  }
  if (topic.subjectId === "bahasa-indonesia") {
    const parts = idLanguageParts(question);
    const passages = {
      Pendek: `${scenario.introShort ?? scenario.intro} ${parts.passage}`,
      Sedang: `${scenario.intro} ${parts.passage}`,
      Panjang: `${scenario.intro} ${scenario.bridge} ${parts.passage}`
    };
    const passage = passages[lengthClass] ?? passages.Sedang;
    return {
      key: scenario.key,
      coreQuestion: compact(`${passage} ${questionWithDirective(parts.question, topic.subjectId, variantIndex, lengthClass)}`),
      sourceCore: compact(question?.semanticCore ?? question?.q ?? ""),
      text: passage,
      question: questionWithDirective(parts.question, topic.subjectId, variantIndex, lengthClass),
      readingLabel: "Bacalah teks berikut:",
      questionLabel: "Pertanyaan:"
    };
  }
  const parts = enLanguageParts(question);
  const passages = {
    Pendek: `${scenario.introShort ?? scenario.intro} ${parts.passage}`,
    Sedang: `${scenario.intro} ${parts.passage}`,
    Panjang: `${scenario.intro} ${scenario.bridge} ${parts.passage}`
  };
  const passage = passages[lengthClass] ?? passages.Sedang;
  return {
    key: scenario.key,
    coreQuestion: compact(`${passage} ${questionWithDirective(parts.question, topic.subjectId, variantIndex, lengthClass)}`),
    sourceCore: compact(question?.semanticCore ?? question?.q ?? ""),
    text: passage,
    question: questionWithDirective(parts.question, topic.subjectId, variantIndex, lengthClass),
    readingLabel: "Read the following text:",
    questionLabel: "Question:"
  };
}

export function buildSerkomStimulus(topic, lesson, question, variantIndex = 0, lengthClass = "Sedang") {
  const scenario = linkedContext(topic, variantIndex);
  const parts = semanticParts(question).map(sourceOnly);
  const core = parts.length > 1 ? parts.map((part, index) => `Bagian ${index + 1}: ${cleanFrames(part)}`).join(" ") : cleanFrames(question?.semanticCore ?? question?.q ?? "");
  const codeExcerpt = technicalExcerpt(lesson, core);
  const questionText = parts.length > 1 ? "Berdasarkan dua bagian kasus tersebut, pilih pasangan jawaban teknis yang benar secara berurutan." : serkomQuestion(core);
  const focus = parts.length > 1 ? parts.map((part, index) => `Bagian ${index + 1}: ${cleanFrames(part)}`).join(" ") : core;
  const singleStimuli = {
    Pendek: `${scenario.introShort ?? scenario.intro} Fokus masalah yang harus diselesaikan adalah: ${focus}`,
    Sedang: `${scenario.intro} Tim menelusuri kasus berikut sebelum menentukan tindakan: ${focus} Potongan kode atau perintah di bawah adalah bagian yang diperiksa langsung pada kasus tersebut.`,
    Panjang: `${scenario.intro} ${scenario.bridge} Gejala, tujuan, atau keputusan teknis yang sedang diperiksa adalah: ${focus} Potongan kode atau perintah di bawah harus dibaca bersama alur request, data, output, dan langkah verifikasi yang relevan.`
  };
  const stimulus = parts.length > 1
    ? `${singleStimuli[lengthClass] ?? singleStimuli.Sedang}`
    : singleStimuli[lengthClass] ?? singleStimuli.Sedang;
  return {
    key: scenario.key,
    coreQuestion: compact(`${stimulus} ${questionText}`),
    sourceCore: core,
    stimulus,
    codeExcerpt,
    question: questionText,
    readingLabel: "Bacalah kasus berikut:",
    questionLabel: "Pertanyaan:"
  };
}
