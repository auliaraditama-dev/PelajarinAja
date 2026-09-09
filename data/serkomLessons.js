const lessons = {
  "serkom-skkni-muk": {
    syntax: ["Aktivitas → Bukti → Unit Kompetensi", "Latihan ≠ Keputusan K/BK resmi"],
    code: ["Baca skema dan MUK", "Kerjakan aktivitas", "Simpan bukti", "Jelaskan keterkaitan bukti dengan unit"],
    explain: ["Mulai dari dokumen yang benar-benar dipakai pada latihan atau asesmen.", "Lakukan pekerjaan yang menghasilkan kemampuan teramati.", "Bukti dapat berupa source code, output terminal, screenshot, log debugging, atau hasil test.", "Saat ditanya asesor, jelaskan mengapa bukti tersebut menunjukkan kompetensi yang dimaksud."],
    tryIt: "Pilih satu aktivitas proyek, misalnya debugging. Sebutkan bukti yang harus ditunjukkan dan unit yang diperkuat."
  },
  "serkom-inti-mvc": {
    syntax: ["Browser → Route → Controller → Model → Database", "Database → Model → Controller → Blade → Browser"],
    code: ["Route::get('/produk', [ProductController::class, 'index']);", "$products = Product::query()->latest()->get();", "return view('produk.index', compact('products'));"],
    explain: ["Route menerima request GET ke /produk lalu memilih method index pada ProductController.", "Controller meminta data produk melalui model Product dan Eloquent.", "Controller mengirim collection products ke Blade agar dapat ditampilkan sebagai HTML."],
    tryIt: "Jelaskan secara runtut proses yang terjadi saat pengguna membuka /produk."
  },
  "serkom-skenario-ipo": {
    syntax: ["Input → Process → Output"],
    code: ["Input: nama_produk, deskripsi, harga, gambar", "Process: validate → create/update/delete → query", "Output: landing, tabel, form, error, success"],
    explain: ["Input adalah data yang masuk dari pengguna.", "Process adalah pekerjaan aplikasi terhadap data.", "Output adalah hasil yang terlihat atau dikembalikan setelah proses selesai."],
    tryIt: "Buat IPO untuk proses edit produk."
  },
  "serkom-syntax": {
    syntax: ["$variabel", "Class::method()", "$object->method()", "['key' => 'value']", "{{ $nilai }}"],
    code: ["$produk = Product::query()->first();", "$harga = $produk->harga;", "$data = ['nama_produk' => 'Kopi Aceh'];", "return view('produk.index', compact('produk'));"],
    explain: ["Tanda $ menunjukkan variabel PHP; baris ini mengambil satu Product.", "Operator -> mengakses properti atau method dari object.", "Kurung siku membuat array; => menghubungkan key dengan value.", "view() memilih Blade, sedangkan compact() mengirim variabel ke view."],
    tryIt: "Jelaskan perbedaan :: dan -> menggunakan satu contoh."
  },
  "serkom-environment": {
    syntax: ["php -v", "composer --version", "php artisan --version"],
    code: ["composer install", "php artisan key:generate", "php artisan config:clear", "php artisan migrate:status", "php artisan serve"],
    explain: ["Memasang dependency PHP sesuai composer.lock/composer.json.", "Membuat APP_KEY untuk aplikasi Laravel.", "Membersihkan cache konfigurasi setelah .env berubah.", "Memeriksa migration yang sudah atau belum dijalankan.", "Menjalankan server development lokal Laravel."],
    tryIt: "Jika aplikasi menampilkan No application encryption key, tentukan perintah yang perlu dijalankan dan jelaskan alasannya."
  },
  "serkom-migration": {
    syntax: ["Schema::create('products', function (Blueprint $table) { ... });"],
    code: ["$table->id();", "$table->string('nama_produk', 100);", "$table->text('deskripsi');", "$table->unsignedInteger('harga');", "$table->string('gambar')->nullable();", "$table->timestamps();"],
    explain: ["Membuat primary key id auto increment.", "Membuat nama_produk maksimal 100 karakter.", "Membuat kolom teks panjang untuk deskripsi.", "Membuat harga sebagai integer yang tidak negatif.", "Membuat gambar opsional karena nullable.", "Membuat created_at dan updated_at."],
    tryIt: "Mengapa migration cocok untuk mendefinisikan struktur tabel, tetapi bukan tempat terbaik untuk menyimpan data contoh?"
  },
  "serkom-model": {
    syntax: ["Model = representasi tabel untuk Eloquent", "$fillable = atribut yang boleh diisi massal"],
    code: ["class Product extends Model", "{", "protected $fillable = ['nama_produk', 'deskripsi', 'harga', 'gambar'];", "protected function casts(): array", "{", "return ['harga' => 'integer'];", "}", "}"],
    explain: ["Product mewarisi fitur dasar Eloquent Model.", "Membuka isi class.", "$fillable mengizinkan empat field dipakai oleh create() atau update() massal.", "casts() mendefinisikan cara atribut dibaca oleh model.", "Membuka method casts.", "harga akan diperlakukan sebagai integer saat digunakan.", "Menutup method.", "Menutup class."],
    tryIt: "Jelaskan perbedaan validation, $fillable, dan casts() tanpa mencampur fungsinya."
  },
  "serkom-seeder": {
    syntax: ["Seeder = data awal atau data latihan"],
    code: ["$products = [['nama_produk' => 'Kopi Original', 'harga' => 25000]];", "foreach ($products as $product) {", "Product::query()->create($product);", "}"],
    explain: ["Menyimpan daftar data awal di dalam array.", "foreach membaca setiap item satu per satu.", "Eloquent membuat record berdasarkan array product.", "Menutup blok perulangan."],
    tryIt: "Tambahkan satu data produk baru secara konsep dan jelaskan bagaimana foreach akan memprosesnya."
  },
  "serkom-controller": {
    syntax: ["Request → validate → Model → redirect/view"],
    code: ["public function store(Request $request): RedirectResponse", "{", "$validated = $request->validate(['nama_produk' => ['required', 'string'], 'harga' => ['required', 'integer', 'min:0']]);", "Product::query()->create($validated);", "return redirect()->route('produk.index')->with('success', 'Produk berhasil ditambahkan.');", "}"],
    explain: ["store menerima request dan menyatakan akan mengembalikan RedirectResponse.", "Membuka method.", "Input disaring sesuai aturan sebelum dipakai.", "Data valid disimpan melalui model Product.", "Browser diarahkan ke index dan menerima flash message success.", "Menutup method."],
    tryIt: "Apa yang terjadi jika harga berisi teks 'dua puluh ribu'?"
  },
  "serkom-routing": {
    syntax: ["Route menentukan HTTP method + URI + tujuan"],
    code: ["Route::get('/', [ProductController::class, 'landing'])->name('landing');", "Route::resource('produk', ProductController::class)->except(['show']);"],
    explain: ["GET / diarahkan ke landing() dan diberi nama route landing.", "Resource route otomatis membuat route CRUD, lalu show dikecualikan karena tidak dibutuhkan."],
    tryIt: "Sebutkan route yang menangani form tambah dan route yang menangani proses menyimpan."
  },
  "serkom-blade-landing": {
    syntax: ["@extends → menggunakan layout", "@section → mengisi bagian layout", "@forelse → perulangan + kondisi data kosong"],
    code: ["@extends('layouts.app')", "@section('content')", "@forelse ($products as $produk)", "<h3>{{ $produk->nama_produk }}</h3>", "@empty", "<p>Belum ada produk.</p>", "@endforelse", "@endsection"],
    explain: ["View menggunakan layout utama.", "Membuka section content.", "Melakukan perulangan terhadap collection products.", "Menampilkan nama produk dengan escaping Blade.", "Masuk ke cabang jika collection kosong.", "Menampilkan pesan kosong.", "Menutup forelse.", "Menutup section."],
    tryIt: "Jelaskan alasan @forelse lebih sesuai daripada @foreach ketika data kosong juga harus ditangani."
  },
  "serkom-form-crud": {
    syntax: ["POST + @csrf", "PUT/DELETE memakai @method"],
    code: ["<form method=\"POST\" action=\"{{ route('produk.update', $produk) }}\">", "@csrf", "@method('PUT')", "<input name=\"nama_produk\" value=\"{{ old('nama_produk', $produk->nama_produk) }}\">", "@error('nama_produk')", "<small>{{ $message }}</small>", "@enderror", "</form>"],
    explain: ["Browser mengirim form melalui POST ke route update.", "@csrf menambahkan token keamanan.", "@method membuat Laravel memperlakukan request sebagai PUT.", "old() mempertahankan input lama jika validasi gagal dan memakai nilai model sebagai fallback.", "@error membuka blok jika nama_produk bermasalah.", "$message menampilkan pesan error field.", "Menutup blok error.", "Menutup form."],
    tryIt: "Mengapa HTML form masih memakai POST walaupun operasi Laravel-nya PUT?"
  },
  "serkom-css": {
    syntax: ["Prinsip responsif: layout harus tetap terbaca dan dapat digunakan pada layar kecil"],
    code: [".product-grid {", "display: grid;", "grid-template-columns: repeat(3, 1fr);", "gap: 24px;", "}", "@media (max-width: 800px) {", ".product-grid { grid-template-columns: 1fr; }", "}"],
    explain: ["Memilih elemen product-grid.", "Mengaktifkan CSS Grid.", "Desktop memakai tiga kolom sama lebar.", "Memberi jarak antar kartu.", "Menutup selector.", "Membuat aturan khusus layar maksimal 800px.", "Pada layar kecil grid berubah menjadi satu kolom.", "Menutup media query."],
    tryIt: "Apa masalah yang mungkin muncul jika tabel atau grid tidak diberi penyesuaian untuk layar kecil?"
  },
  "serkom-workflow": {
    syntax: ["Create: form → POST → store → DB → redirect", "Update: edit → PUT → update → DB → redirect", "Delete: DELETE → destroy → DB → redirect"],
    code: ["GET /produk/create → create()", "POST /produk → store()", "GET /produk/{produk}/edit → edit()", "PUT /produk/{produk} → update()", "DELETE /produk/{produk} → destroy()"],
    explain: ["Menampilkan form tambah.", "Memproses dan menyimpan data baru.", "Menampilkan form edit dengan record yang dipilih.", "Memproses perubahan record.", "Menghapus record yang dipilih."],
    tryIt: "Urutkan langkah lengkap ketika pengguna mengedit harga produk dari halaman index sampai kembali ke index."
  },
  "serkom-debugging": {
    syntax: ["Reproduce → Read → Hypothesize → Change small → Retest → Record"],
    code: ["php artisan route:list", "php artisan optimize:clear", "php artisan migrate:status", "php artisan test"],
    explain: ["Memeriksa method, URI, action, dan nama route ketika ada masalah routing.", "Membersihkan cache aplikasi ketika perubahan belum terbaca.", "Memeriksa status migration saat tabel/kolom bermasalah.", "Menjalankan test agar kegagalan dapat dilihat secara konsisten."],
    tryIt: "Jika muncul Route not defined, tentukan dua pemeriksaan pertama yang perlu dilakukan."
  },
  "serkom-testing": {
    syntax: ["Arrange → Act → Assert"],
    code: ["public function test_landing_page_dapat_diakses(): void", "{", "$response = $this->get(route('landing'));", "$response->assertOk();", "$response->assertSee('Kopi Ulee Kareng');", "}"],
    explain: ["Mendefinisikan satu test dengan nama yang menjelaskan perilaku.", "Membuka method test.", "Mengirim request GET ke route landing.", "Memastikan status response sukses.", "Memastikan teks penting tampil.", "Menutup method."],
    tryIt: "Apa perbedaan expected result dan actual result dalam pengujian?"
  },
  "serkom-portfolio": {
    syntax: ["Bukti yang baik = valid + autentik + terkini + memadai"],
    code: ["README.md", "01_Source_Code/", "03_Screenshot/", "04_Debugging/", "05_Testing/"],
    explain: ["README menjelaskan cara menjalankan dan struktur proyek.", "Folder source menyimpan implementasi.", "Screenshot menunjukkan tampilan atau hasil penting.", "Catatan debugging menunjukkan proses menemukan dan memperbaiki masalah.", "Laporan testing menunjukkan skenario dan hasil uji."],
    tryIt: "Sebutkan tiga bukti yang menunjukkan bahwa proyek dipahami dan dikerjakan secara autentik."
  },
  "serkom-asesor": {
    syntax: ["Jawaban kuat: fungsi → alasan → contoh/bukti"],
    code: ["Pertanyaan: Apa fungsi $fillable?", "Fungsi: menentukan field yang boleh diisi massal.", "Alasan: melindungi atribut model dari mass assignment yang tidak diinginkan.", "Bukti: field dipakai saat create() dan update()."],
    explain: ["Identifikasi inti pertanyaan.", "Jelaskan fungsi secara ringkas dan tepat.", "Tambahkan alasan teknis yang relevan.", "Sertakan contoh atau bukti dari proyek untuk memperkuat jawaban."],
    tryIt: "Jawab pertanyaan 'Apa beda create() dan store()?' dengan pola fungsi → alasan → contoh."
  },
  "serkom-cheatsheet": {
    syntax: ["Setup → DB → Backend → View → Debug → Test → Evidence"],
    code: ["composer install", "php artisan key:generate", "php artisan migrate --seed", "php artisan route:list", "php artisan serve", "php artisan test"],
    explain: ["Menyiapkan dependency proyek.", "Menyiapkan APP_KEY.", "Membangun skema dan data awal.", "Memeriksa route sebelum demo.", "Menjalankan aplikasi lokal.", "Memverifikasi fitur dengan test."],
    tryIt: "Jelaskan urutan minimum untuk menjalankan starter project hingga aplikasi siap diuji tanpa mengandalkan catatan."
  }
};

export function getSerkomLesson(topicId) {
  return lessons[topicId] ?? null;
}
