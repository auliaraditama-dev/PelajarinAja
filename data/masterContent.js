const serkomImplementations = {
  "serkom-skkni-muk": {
    title: "Membuktikan kompetensi melalui artefak yang dapat diverifikasi",
    language: "bash",
    code: `php artisan migrate:status
php artisan route:list
php artisan test`,
    explanations: [
      "Memeriksa apakah migration yang menjadi bukti struktur database sudah benar-benar dijalankan.",
      "Menampilkan daftar method HTTP, URI, nama route, dan action sebagai bukti konfigurasi routing.",
      "Menjalankan pengujian otomatis sebagai salah satu bukti bahwa perilaku aplikasi telah diverifikasi."
    ]
  },
  "serkom-inti-mvc": {
    title: "Melihat hubungan Route, Controller, Model, dan View",
    language: "php",
    code: `Route::get('/', [ProductController::class, 'landing'])->name('landing');
$products = Product::query()->latest()->get();
return view('landing', compact('products'));
@forelse ($products as $produk)
{{ $produk->nama_produk }}
@endforelse`,
    explanations: [
      "Route menerima request GET ke halaman utama dan mengarahkannya ke method landing pada ProductController.",
      "Controller meminta Model Product mengambil data produk terbaru dari database melalui Eloquent.",
      "Controller mengirim collection products ke view landing.",
      "Blade mulai melakukan perulangan setiap item pada collection products.",
      "Blade menampilkan atribut nama_produk milik satu record produk.",
      "Directive ini menutup blok perulangan @forelse."
    ]
  },
  "serkom-skenario-ipo": {
    title: "Menerjemahkan Input–Process–Output ke method store",
    language: "php",
    code: `public function store(Request $request): RedirectResponse
{
    $validated = $request->validate([
        'nama_produk' => ['required', 'string', 'max:100'],
        'deskripsi' => ['required', 'string'],
        'harga' => ['required', 'integer', 'min:0'],
        'gambar' => ['nullable', 'string', 'max:255'],
    ]);
    Product::query()->create($validated);
    return redirect()->route('produk.index')->with('success', 'Produk berhasil ditambahkan.');
}`,
    explanations: [
      "Mendefinisikan proses penyimpanan data baru dan menyatakan bahwa hasilnya berupa RedirectResponse.",
      "Membuka blok method store.",
      "Memulai validasi input yang dikirim pengguna.",
      "Nama produk wajib ada, berupa string, dan maksimal 100 karakter.",
      "Deskripsi wajib ada dan berupa string.",
      "Harga wajib berupa bilangan bulat dan tidak boleh negatif.",
      "Gambar boleh kosong, tetapi jika diisi harus berupa string maksimal 255 karakter.",
      "Menutup array aturan validasi dan pemanggilan validate.",
      "Menyimpan input yang sudah lolos validasi ke tabel products melalui model Product.",
      "Mengirim pengguna kembali ke daftar produk sambil membawa pesan sukses sementara.",
      "Menutup blok method."
    ]
  },
  "serkom-syntax": {
    title: "Membaca sintaks PHP dan Eloquent secara bertahap",
    language: "php",
    code: `$data = [
    'nama_produk' => 'Kopi Sanger',
    'harga' => 18000,
];
$product = Product::query()->create($data);
$product->delete();`,
    explanations: [
      "Membuat variabel PHP bernama data dan mulai mendefinisikan array.",
      "Pasangan key-value untuk field nama_produk menggunakan operator =>.",
      "Pasangan key-value untuk field harga menggunakan angka integer.",
      "Menutup array dan mengakhiri statement dengan titik koma.",
      "Operator :: mengakses method pada class Product, sedangkan -> melanjutkan pemanggilan method pada object/query.",
      "Operator -> memanggil method delete pada object product untuk menghapus record terkait."
    ]
  },
  "serkom-environment": {
    title: "Konfigurasi lingkungan Laravel dan koneksi database",
    language: "env",
    code: `APP_ENV=local
APP_DEBUG=true
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=kopi_ulee_kareng
DB_USERNAME=root
DB_PASSWORD=`,
    explanations: [
      "Menandai bahwa aplikasi dijalankan pada lingkungan lokal latihan.",
      "Mengaktifkan detail error untuk proses belajar lokal; jangan digunakan pada lingkungan publik.",
      "Memilih driver database MySQL.",
      "Menentukan alamat server database lokal.",
      "Menentukan port standar MySQL yang digunakan latihan.",
      "Menentukan nama database yang harus sudah dibuat.",
      "Menentukan pengguna database lokal.",
      "Menentukan password database; pada laboratorium tertentu akun root dapat tidak memakai password."
    ]
  },
  "serkom-migration": {
    title: "Membangun skema tabel products melalui migration",
    language: "php",
    code: `Schema::create('products', function (Blueprint $table) {
    $table->id();
    $table->string('nama_produk', 100);
    $table->text('deskripsi');
    $table->unsignedInteger('harga');
    $table->string('gambar')->nullable();
    $table->timestamps();
});`,
    explanations: [
      "Memerintahkan Laravel membuat tabel products dan memberikan object Blueprint untuk mendefinisikan kolom.",
      "Membuat primary key id auto-increment.",
      "Membuat kolom nama_produk bertipe string dengan panjang maksimal 100 karakter pada skema.",
      "Membuat kolom deskripsi bertipe TEXT untuk isi yang lebih panjang.",
      "Membuat kolom harga berupa integer tanpa nilai negatif.",
      "Membuat kolom gambar yang boleh bernilai NULL karena gambar bersifat opsional.",
      "Membuat created_at dan updated_at secara otomatis.",
      "Menutup closure Schema::create."
    ]
  },
  "serkom-model": {
    title: "Mengatur mass assignment dan casting pada Model Product",
    language: "php",
    code: `class Product extends Model
{
    protected $fillable = ['nama_produk', 'deskripsi', 'harga', 'gambar'];

    protected function casts(): array
    {
        return ['harga' => 'integer'];
    }
}`,
    explanations: [
      "Mendefinisikan model Product yang mewarisi kemampuan dasar Eloquent Model.",
      "Membuka blok class.",
      "Menentukan field yang diizinkan untuk diisi massal melalui create atau update.",
      "Baris kosong hanya memisahkan bagian kode agar mudah dibaca.",
      "Mendefinisikan method casts yang harus mengembalikan array.",
      "Membuka blok method casts.",
      "Memastikan atribut harga diperlakukan sebagai integer ketika digunakan melalui model.",
      "Menutup method casts.",
      "Menutup class Product."
    ]
  },
  "serkom-seeder": {
    title: "Mengisi data awal dengan array dan foreach",
    language: "php",
    code: `$products = [
    ['nama_produk' => 'Kopi Original', 'deskripsi' => 'Aroma kuat.', 'harga' => 25000, 'gambar' => 'kopi-original.jpg'],
    ['nama_produk' => 'Kopi Sanger', 'deskripsi' => 'Rasa lembut.', 'harga' => 18000, 'gambar' => 'kopi-sanger.jpg'],
];
foreach ($products as $product) {
    Product::query()->create($product);
}`,
    explanations: [
      "Membuat array utama yang akan menampung beberapa record produk.",
      "Record pertama disimpan sebagai associative array dengan nama field yang sama seperti kolom/model.",
      "Record kedua menggunakan struktur field yang sama agar mudah diproses berulang.",
      "Menutup array products.",
      "foreach membaca setiap record satu per satu dan menyimpannya sementara pada variabel product.",
      "Eloquent membuat satu record database dari data product pada iterasi saat ini.",
      "Menutup blok perulangan."
    ]
  },
  "serkom-controller": {
    title: "Membedah controller CRUD: validasi, penyimpanan, dan redirect",
    language: "php",
    code: `$validated = $request->validate([
    'nama_produk' => ['required', 'string', 'max:100'],
    'deskripsi' => ['required', 'string'],
    'harga' => ['required', 'integer', 'min:0'],
    'gambar' => ['nullable', 'string', 'max:255'],
]);
Product::query()->create($validated);
return redirect()->route('produk.index')->with('success', 'Produk berhasil ditambahkan.');`,
    explanations: [
      "Controller meminta Laravel memvalidasi input dan menyimpan hasil yang lolos ke variabel validated.",
      "Aturan nama_produk memastikan input wajib, berupa teks, dan panjangnya dibatasi.",
      "Aturan deskripsi memastikan field tidak kosong dan berupa teks.",
      "Aturan harga menolak teks nonangka dan bilangan negatif.",
      "Field gambar opsional, tetapi dibatasi tipe dan panjangnya bila diisi.",
      "Menutup array aturan validasi.",
      "Data yang sudah lolos validasi dibuat menjadi record baru melalui Eloquent.",
      "Controller mengakhiri proses dengan redirect dan flash message success."
    ]
  },
  "serkom-routing": {
    title: "Menghasilkan route CRUD dengan Route::resource",
    language: "php",
    code: `Route::get('/', [ProductController::class, 'landing'])->name('landing');
Route::resource('produk', ProductController::class)
    ->except(['show'])
    ->parameters(['produk' => 'produk']);`,
    explanations: [
      "Mendaftarkan halaman publik / sebagai GET dan memberinya nama route landing.",
      "Mendaftarkan sekumpulan route CRUD resource untuk produk.",
      "Mengecualikan method show karena halaman detail tunggal tidak dibutuhkan pada spesifikasi proyek.",
      "Menetapkan nama parameter resource menjadi produk agar konsisten dengan Route Model Binding."
    ]
  },
  "serkom-blade-landing": {
    title: "Menampilkan collection produk secara dinamis di Blade",
    language: "blade",
    code: `@forelse ($products as $produk)
<article class="product-card">
    <h3>{{ $produk->nama_produk }}</h3>
    <p>{{ $produk->deskripsi }}</p>
    <strong>Rp{{ number_format($produk->harga, 0, ',', '.') }}</strong>
</article>
@empty
<div class="empty-state">Belum ada produk.</div>
@endforelse`,
    explanations: [
      "@forelse memulai loop collection products sekaligus menyiapkan cabang ketika data kosong.",
      "Membuka elemen article untuk satu kartu produk.",
      "Blade echo menampilkan nama produk dengan escaping HTML.",
      "Menampilkan deskripsi milik record yang sedang diproses.",
      "Memformat harga menjadi tampilan rupiah dengan pemisah ribuan.",
      "Menutup kartu produk.",
      "@empty dijalankan bila collection tidak memiliki record.",
      "Menampilkan pesan yang menjelaskan bahwa data produk belum tersedia.",
      "Menutup blok @forelse."
    ]
  },
  "serkom-form-crud": {
    title: "Form update: CSRF, method spoofing, old(), dan error",
    language: "blade",
    code: `<form method="POST" action="{{ route('produk.update', $produk) }}">
    @csrf
    @method('PUT')
    <input name="nama_produk" value="{{ old('nama_produk', $produk->nama_produk) }}">
    @error('nama_produk')
    <small>{{ $message }}</small>
    @enderror
    <button type="submit">Perbarui Produk</button>
</form>`,
    explanations: [
      "Browser mengirim form ke route update menggunakan POST sebagai method HTML dasar.",
      "@csrf menambahkan token keamanan untuk memvalidasi bahwa request berasal dari form aplikasi.",
      "@method('PUT') membuat Laravel memperlakukan POST tersebut sebagai request PUT.",
      "old() mempertahankan input sebelumnya saat validasi gagal dan memakai nilai model sebagai fallback.",
      "@error membuka blok khusus jika field nama_produk memiliki pesan validasi.",
      "Variabel message berisi pesan validasi untuk field tersebut.",
      "Menutup blok @error.",
      "Tombol submit mengirim perubahan yang telah diisi pengguna.",
      "Menutup elemen form."
    ]
  },
  "serkom-css": {
    title: "Membuat layout responsif tanpa dependency internet",
    language: "css",
    code: `.product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}
@media (max-width: 800px) {
    .product-grid {
        grid-template-columns: 1fr;
    }
}`,
    explanations: [
      "Memilih elemen dengan class product-grid.",
      "Mengaktifkan CSS Grid sebagai sistem layout.",
      "Membuat tiga kolom dengan lebar yang sama pada layar besar.",
      "Memberi jarak 24 piksel antar kartu.",
      "Menutup aturan dasar product-grid.",
      "Membuka media query yang berlaku ketika lebar layar 800 piksel atau kurang.",
      "Memilih kembali product-grid khusus pada layar kecil.",
      "Mengubah grid menjadi satu kolom agar konten tetap terbaca.",
      "Menutup aturan product-grid pada media query.",
      "Menutup media query."
    ]
  },
  "serkom-workflow": {
    title: "Alur CREATE dari browser sampai database",
    language: "php",
    code: `Route::post('/produk', [ProductController::class, 'store'])->name('produk.store');
public function store(Request $request): RedirectResponse
{
    $validated = $request->validate(['harga' => ['required', 'integer', 'min:0']]);
    Product::query()->create($validated);
    return redirect()->route('produk.index');
}`,
    explanations: [
      "Route menerima request POST dari form tambah produk dan mengarahkannya ke store.",
      "Controller mendefinisikan method store yang menerima object Request.",
      "Membuka blok method.",
      "Input harga divalidasi sebelum data menyentuh database.",
      "Model Product melakukan operasi create pada data yang telah lolos validasi.",
      "Browser diarahkan ke halaman index setelah penyimpanan selesai.",
      "Menutup blok method."
    ]
  },
  "serkom-debugging": {
    title: "Memperbaiki Undefined variable dengan menyamakan kontrak data",
    language: "php",
    code: `$products = Product::query()->latest()->get();
return view('landing', compact('products'));

@forelse ($products as $produk)
{{ $produk->nama_produk }}
@empty
Belum ada produk.
@endforelse`,
    explanations: [
      "Controller membuat variabel products berisi collection hasil query.",
      "compact('products') mengirim variabel dengan nama products ke Blade.",
      "Baris kosong memisahkan kode controller dan contoh Blade secara visual.",
      "View harus memakai nama products yang sama persis dengan data dari controller.",
      "Setiap item collection diberi nama sementara produk lalu atributnya ditampilkan.",
      "Cabang empty menangani kondisi collection kosong tanpa menimbulkan error.",
      "Pesan fallback membantu pengguna memahami keadaan data.",
      "Menutup struktur @forelse."
    ]
  },
  "serkom-testing": {
    title: "Feature Test untuk penyimpanan produk valid",
    language: "php",
    code: `public function test_produk_valid_dapat_disimpan(): void
{
    $response = $this->post(route('produk.store'), [
        'nama_produk' => 'Kopi Test',
        'deskripsi' => 'Produk untuk pengujian.',
        'harga' => 20000,
        'gambar' => null,
    ]);
    $response->assertRedirect(route('produk.index'));
    $this->assertDatabaseHas('products', ['nama_produk' => 'Kopi Test', 'harga' => 20000]);
}`,
    explanations: [
      "Mendefinisikan satu test case yang memverifikasi penyimpanan produk valid.",
      "Membuka blok test.",
      "Mensimulasikan request POST ke route produk.store dengan data uji.",
      "Memberikan nama produk valid.",
      "Memberikan deskripsi valid.",
      "Memberikan harga integer positif.",
      "Memberikan nilai null untuk gambar karena field tersebut opsional.",
      "Menutup data request.",
      "Memastikan response mengarah kembali ke index seperti perilaku yang ditentukan controller.",
      "Memastikan database benar-benar memiliki record dengan nilai penting yang diuji.",
      "Menutup blok test."
    ]
  },
  "serkom-portfolio": {
    title: "Urutan setup yang wajib dapat dijelaskan di README",
    language: "bash",
    code: `composer install
php artisan key:generate
php artisan migrate --seed
php artisan test
php artisan serve`,
    explanations: [
      "Memasang dependency PHP berdasarkan composer.lock/composer.json.",
      "Membangkitkan application key untuk instalasi lokal yang belum memiliki APP_KEY.",
      "Menjalankan migration sekaligus seeder agar struktur dan data awal tersedia.",
      "Menjalankan pengujian sebelum aplikasi dianggap siap didemonstrasikan.",
      "Menjalankan development server Laravel untuk demo lokal."
    ]
  },
  "serkom-asesor": {
    title: "Contoh kode yang harus mampu dijelaskan saat ditanya asesor",
    language: "php",
    code: `protected $fillable = [
    'nama_produk',
    'deskripsi',
    'harga',
    'gambar',
];`,
    explanations: [
      "Property fillable membatasi atribut yang boleh diisi melalui mass assignment.",
      "Mengizinkan field nama_produk untuk create/update massal.",
      "Mengizinkan field deskripsi.",
      "Mengizinkan field harga.",
      "Mengizinkan field gambar.",
      "Menutup array fillable."
    ]
  },
  "serkom-cheatsheet": {
    title: "Urutan kerja inti saat latihan mandiri",
    language: "bash",
    code: `composer install
php artisan key:generate
php artisan migrate:status
php artisan migrate
php artisan db:seed
php artisan route:list
php artisan test
php artisan serve`,
    explanations: [
      "Pastikan dependency project tersedia.",
      "Pastikan APP_KEY tersedia bila project baru disiapkan.",
      "Periksa keadaan migration sebelum mengubah database.",
      "Jalankan migration agar tabel products dibuat.",
      "Isi data awal untuk memudahkan pengujian tampilan.",
      "Periksa seluruh route penting dan nama route.",
      "Jalankan test untuk membuktikan fungsi penting bekerja.",
      "Jalankan aplikasi dan lakukan pemeriksaan manual di browser."
    ]
  }
};

function importanceForSubject(topic) {
  if (topic.subjectId === "matematika") return `Konsep ${topic.title} penting karena TKA tidak hanya meminta hasil hitung, tetapi juga kemampuan memilih model, membaca informasi, dan memeriksa apakah langkah penyelesaian masuk akal. Penguasaan konsep dasar mengurangi ketergantungan pada hafalan rumus.`;
  if (topic.subjectId === "bahasa-indonesia") return `${topic.title} penting karena soal membaca menguji ketepatan memahami teks, bukan sekadar menemukan kata yang sama. Kemampuan membedakan informasi, inferensi, dan evaluasi membantu menghindari pilihan yang tampak masuk akal tetapi tidak didukung teks.`;
  if (topic.subjectId === "bahasa-inggris") return `${topic.title} penting karena TKA Bahasa Inggris menilai reading comprehension tingkat A2–B1. Pembaca perlu menghubungkan explicit information, paraphrase, inference, dan tujuan teks tanpa harus menerjemahkan setiap kata.`;
  return `Materi ${topic.title} penting karena kompetensi SERKOM harus dapat dijelaskan, dipraktikkan, diverifikasi, dan dibuktikan melalui artefak kerja, bukan hanya dihafalkan.`;
}

function backgroundForSubject(topic) {
  if (topic.subjectId === "matematika") return `Materi ini berada dalam cakupan TKA Matematika Wajib dan dipakai untuk menguji pemahaman konsep serta penalaran pada konteks yang bervariasi. Pola soal dapat berubah, tetapi prinsip matematikanya tetap sama.`;
  if (topic.subjectId === "bahasa-indonesia") return `Materi ini diturunkan dari pola kompetensi pada soal TKA Bahasa Indonesia yang menggunakan teks nonfiksi, fiksi, dan teks jamak. Fokusnya adalah membuktikan jawaban melalui isi, struktur, dan bahasa teks.`;
  if (topic.subjectId === "bahasa-inggris") return `Materi ini mengikuti kerangka TKA Bahasa Inggris yang menggunakan teks descriptive, recount, narrative, procedure, dan analytical exposition pada tingkat A2–B1, dengan kompetensi textual, inferential, serta evaluation and appreciation.`;
  return `Materi SERKOM ditempatkan dalam studi kasus Laravel 12: landing page Kopi Ulee Kareng dan CRUD satu tabel products. Pembelajaran menekankan alur kerja, debugging, testing, dokumentasi, dan bukti kompetensi.`;
}

function limitationsForTopic(topic) {
  const traps = topic.traps ?? [];
  const items = traps.slice(0, 3);
  if (topic.subjectId === "serkom") items.push("Contoh pada platform adalah bahan belajar dan simulasi. Nama unit, kode, bukti, dan keputusan K/BK resmi tetap harus mengikuti skema, MUK, asesor, dan LSP yang berlaku.");
  else if (topic.subjectId === "matematika") items.push("Rumus tidak dapat dipakai secara mekanis tanpa memeriksa syarat, satuan, domain, atau konteks soal.");
  else items.push("Strategi membaca tidak menggantikan bukti tekstual; jawaban tetap harus dapat ditelusuri ke informasi atau hubungan logis dalam bacaan.");
  return items;
}

function implementationForTopic(topic) {
  if (topic.subjectId === "serkom") return serkomImplementations[topic.id] ?? serkomImplementations["serkom-cheatsheet"];
  if (topic.subjectId === "matematika") return {
    title: "Rumus dan penerapan terstruktur",
    language: "math",
    code: (topic.formulas ?? []).join("\n"),
    explanations: (topic.formulas ?? []).map((item) => `Gunakan pola “${item}” hanya setelah data, syarat, dan tujuan pertanyaan sudah diidentifikasi.`)
  };
  const example = topic.workedExamples?.[0];
  return {
    title: "Studi kasus membaca",
    language: "case",
    code: example?.problem ?? topic.example ?? topic.summary,
    explanations: example?.steps?.length ? example.steps : ["Identifikasi tuntutan pertanyaan.", "Cari bukti yang relevan pada teks.", "Bandingkan pilihan dengan bukti tersebut."]
  };
}

export function buildMasterContent(topic) {
  const example = topic.workedExamples?.[0];
  return {
    conceptual: {
      title: topic.title,
      analogy: topic.analogy || topic.deepDive?.[0] || topic.summary,
      workflow: topic.steps?.length ? topic.steps : ["Pahami istilah utama.", "Identifikasi informasi yang diketahui.", "Terapkan konsep secara berurutan.", "Periksa kembali hasil terhadap konteks."]
    },
    critical: {
      whyImportant: importanceForSubject(topic),
      background: backgroundForSubject(topic),
      theory: topic.deepDive ?? [],
      limitations: limitationsForTopic(topic)
    },
    implementation: implementationForTopic(topic),
    exam: {
      question: example?.problem ?? topic.essay?.q ?? `Jelaskan konsep utama ${topic.title}.`,
      answer: example?.result ?? topic.essay?.answer ?? topic.example ?? "Gunakan konsep inti dan tunjukkan alasan setiap langkah.",
      steps: example?.steps?.length ? example.steps : topic.steps ?? []
    },
    highlights: (topic.concepts ?? []).slice(0, 3),
    prompt: topic.essay?.q ?? `Coba jelaskan ${topic.title} dengan kata-katamu sendiri dan sebutkan satu contoh penerapannya.`
  };
}
