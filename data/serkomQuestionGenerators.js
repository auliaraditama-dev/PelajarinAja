const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (items) => items[rnd(0, items.length - 1)];

function shuffle(items) {
  const values = [...items];
  for (let i = values.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}

function single(q, correct, wrong, explain, difficulty = "Sedang") {
  const values = [...new Set([correct, ...wrong])];
  const fallback = ["Tidak berkaitan dengan materi ini.", "Selalu menghapus seluruh data proyek.", "Hanya berfungsi mengubah warna tampilan.", "Tidak memiliki fungsi dalam Laravel."];
  let cursor = 0;
  while (values.length < 4) {
    const value = fallback[cursor] ?? `Pilihan ${cursor + 1}`;
    cursor += 1;
    if (!values.includes(value)) values.push(value);
  }
  const options = shuffle(values.slice(0, 4));
  return { q, options, answer: options.indexOf(correct), explain, difficulty, points: 4, type: "single" };
}

const facts = {
  "serkom-skkni-muk": [
    ["status latihan", "Latihan berfungsi sebagai bahan pembelajaran dan simulasi; keputusan kompeten resmi tetap mengikuti asesor, LSP, skema, dan MUK yang disahkan.", ["Latihan otomatis menjadi sertifikat kompetensi resmi.", "Nilai latihan selalu menggantikan keputusan asesor.", "Materi latihan dapat mengubah MUK resmi tanpa validasi LSP."]],
    ["J.620100.033.02", "Unit tersebut berkaitan dengan pelaksanaan pengujian unit program dan disebut langsung pada MUK sekolah yang dipelajari dalam latihan.", ["Unit tersebut khusus mengatur desain logo.", "Unit tersebut hanya membahas pemasangan jaringan fisik.", "Unit tersebut menghapus kebutuhan pengujian aplikasi."]],
    ["unit penguatan", "Unit penguatan dipakai untuk memperkuat kemampuan yang dibutuhkan proyek, tetapi status administratif resmi tetap mengikuti skema LSP.", ["Unit penguatan selalu otomatis menjadi unit asesmen resmi.", "Unit penguatan tidak membutuhkan bukti aktivitas apa pun.", "Unit penguatan hanya berupa teori tanpa hubungan dengan proyek."]],
    ["keterlacakan bukti", "Setiap aktivitas proyek sebaiknya dapat ditelusuri ke bukti seperti source code, log terminal, catatan debugging, atau tabel pengujian.", ["Bukti cukup berupa ingatan peserta tanpa artefak.", "Hanya tampilan akhir yang boleh dijadikan bukti.", "Proses kerja harus dihapus setelah aplikasi selesai."]],
    ["validasi kode unit", "Jika terdapat variasi penulisan kode atau judul unit, dokumen skema LSP yang berlaku perlu menjadi rujukan sebelum asesmen resmi.", ["Peserta boleh memilih kode unit secara acak.", "Kode pada latihan selalu lebih resmi daripada dokumen LSP.", "Perbedaan judul unit tidak perlu pernah diperiksa."]],
    ["bukti kompetensi", "Bukti yang baik harus cukup menunjukkan proses atau hasil kerja yang relevan dan dapat diverifikasi.", ["Bukti harus berupa satu screenshot saja untuk semua unit.", "Bukti tidak perlu berkaitan dengan aktivitas yang dinilai.", "Bukti yang tidak dapat dibuka tetap dianggap memadai."]]
  ],
  "serkom-inti-mvc": [
    ["Route", "Route memetakan kombinasi URL dan HTTP method ke proses/controller yang sesuai.", ["Route membuat tabel database secara otomatis.", "Route hanya mengatur warna CSS.", "Route menggantikan seluruh fungsi model."]],
    ["Controller", "Controller menerima request, menjalankan logika atau validasi, memanggil model, lalu menghasilkan view atau redirect.", ["Controller hanya menyimpan file gambar statis.", "Controller menggantikan fungsi MySQL sebagai database.", "Controller hanya mengatur font halaman."]],
    ["Model", "Model Product merepresentasikan data products dan berinteraksi dengan database melalui Eloquent.", ["Model hanya mengatur navigasi browser.", "Model berfungsi sebagai stylesheet.", "Model hanya dipakai untuk membuat screenshot."]],
    ["Migration", "Migration mendefinisikan perubahan struktur database melalui kode yang dapat dijalankan dan dibatalkan.", ["Migration adalah tempat utama menulis CSS.", "Migration hanya berisi data screenshot.", "Migration menggantikan route resource."]],
    ["Blade View", "Blade menampilkan HTML dinamis menggunakan data yang dikirim dari controller.", ["Blade menjalankan server MySQL.", "Blade menentukan port database.", "Blade menggantikan Composer sebagai dependency manager."]],
    ["alur MVC", "Browser mengirim request, route menentukan tujuan, controller memproses, model berkomunikasi dengan database, lalu Blade menampilkan response.", ["Browser langsung mengubah migration tanpa route.", "CSS mengirim query SQL langsung ke database.", "Seeder menggantikan seluruh alur request-response."]]
  ],
  "serkom-skenario-ipo": [
    ["Input", "Input proyek meliputi nama produk, deskripsi, harga, dan nama file gambar opsional.", ["Input wajib meliputi data pembayaran dan kartu kredit.", "Input utama hanya warna background.", "Input proyek harus memiliki puluhan tabel relasi."]],
    ["Process", "Proses utama meliputi validasi, simpan, baca, ubah, hapus, query, dan tampilkan data.", ["Proses hanya mencetak screenshot tanpa menjalankan aplikasi.", "Proses wajib melakukan pembayaran daring.", "Proses tidak boleh menyentuh database."]],
    ["Output", "Output proyek meliputi landing page, tabel produk, form, pesan validasi, dan notifikasi berhasil.", ["Output utama adalah file .env publik.", "Output wajib berupa API pembayaran.", "Output hanya satu halaman kosong."]],
    ["batasan satu tabel", "Proyek latihan cukup memakai satu tabel inti products karena studi kasus hanya memiliki satu entitas utama produk.", ["Satu tabel dipakai karena Laravel tidak mendukung relasi.", "Proyek wajib memiliki autentikasi banyak role.", "Semua aplikasi produksi harus selalu satu tabel."]],
    ["fitur yang tidak diwajibkan", "Autentikasi, role, pembayaran, keranjang, API, relasi banyak tabel, grafik, dan deployment berada di luar batas proyek latihan ini.", ["Semua fitur tersebut wajib agar CRUD dapat berjalan.", "Tanpa pembayaran migration tidak dapat dibuat.", "API wajib untuk menampilkan Blade."]],
    ["alur tambah produk", "Form mengirim request, controller memvalidasi, model/Eloquent menyimpan ke database, lalu aplikasi redirect dan menampilkan pesan.", ["Form menulis langsung ke file CSS.", "Browser mengubah tabel tanpa controller atau model.", "Redirect harus dilakukan sebelum validasi."]]
  ],
  "serkom-syntax": [
    ["operator ->", "Operator -> digunakan untuk mengakses method atau properti milik objek, misalnya $produk->delete().", ["Operator -> hanya menulis komentar CSS.", "Operator -> membuat class menjadi static.", "Operator -> selalu berarti perbandingan nilai."]],
    ["operator ::", "Operator :: digunakan untuk mengakses anggota class/static seperti Product::query() atau Route::get().", ["Operator :: hanya untuk menggabungkan string.", "Operator :: berarti menghapus database.", "Operator :: menggantikan tanda titik pada CSS."]],
    ["array [ ]", "Tanda [ ] digunakan untuk membuat array PHP yang dapat menampung daftar nilai atau pasangan key-value.", ["Tanda [ ] hanya digunakan untuk membuat route.", "Tanda [ ] selalu berarti komentar.", "Tanda [ ] hanya valid di file CSS."]],
    ["=>", "Tanda => menghubungkan key dengan value pada array asosiatif PHP.", ["Tanda => menjalankan server lokal.", "Tanda => menggantikan method HTTP.", "Tanda => menutup class PHP."]],
    ["Blade {{ }}", "{{ }} menampilkan nilai ke HTML dengan mekanisme escaping Blade.", ["{{ }} membuat tabel MySQL.", "{{ }} digunakan untuk menjalankan composer install.", "{{ }} adalah media query CSS."]],
    ["HTTP DELETE", "DELETE digunakan untuk meminta penghapusan resource pada pola CRUD.", ["DELETE digunakan untuk membaca halaman tanpa perubahan.", "DELETE selalu membuat record baru.", "DELETE hanya dipakai untuk stylesheet."]]
  ],
  "serkom-environment": [
    ["php -v", "Perintah php -v digunakan untuk memeriksa bahwa PHP dapat dipanggil dan mengetahui versinya.", ["php -v membuat migration products.", "php -v menghapus cache browser.", "php -v menjalankan semua feature test."]],
    ["composer install", "composer install memasang dependency berdasarkan konfigurasi proyek yang sudah ada.", ["composer install membuat database MySQL otomatis.", "composer install mengganti semua route menjadi GET.", "composer install menyalakan monitor komputer."]],
    [".env", ".env menyimpan konfigurasi lingkungan seperti koneksi database dan pengaturan aplikasi lokal.", [".env adalah file stylesheet publik.", ".env harus selalu diunggah ke repositori publik.", ".env menggantikan migration database."]],
    ["APP_DEBUG", "APP_DEBUG=true sesuai untuk latihan lokal, tetapi tidak seharusnya digunakan sebagai pengaturan publik produksi.", ["APP_DEBUG wajib selalu true pada semua deployment publik.", "APP_DEBUG menentukan jumlah kolom tabel.", "APP_DEBUG menggantikan token CSRF."]],
    ["config:clear", "php artisan config:clear membantu membersihkan cache konfigurasi setelah perubahan konfigurasi lingkungan.", ["config:clear menghapus seluruh source code.", "config:clear membuat akun database baru.", "config:clear menghapus route resource dari file web.php."]],
    ["database kopi_ulee_kareng", "Nama database pada MySQL harus konsisten dengan DB_DATABASE di .env agar koneksi berhasil.", ["Nama database tidak pernah perlu cocok dengan .env.", "DB_DATABASE hanya mengubah title HTML.", "Database dapat dipakai tanpa MySQL aktif dalam skenario ini."]]
  ],
  "serkom-migration": [
    ["data dictionary", "Data dictionary mendefinisikan nama kolom, tipe, aturan, dan makna sebelum skema diterapkan.", ["Data dictionary hanya daftar warna CSS.", "Data dictionary menggantikan seluruh feature test.", "Data dictionary tidak berkaitan dengan database."]],
    ["$table->id()", "$table->id() membuat primary key id auto-increment yang sesuai konvensi Laravel.", ["$table->id() membuat stylesheet.", "$table->id() menghapus route produk.", "$table->id() menampilkan flash message."]],
    ["unsignedInteger harga", "Tipe integer nonnegatif sesuai kebutuhan latihan karena harga berupa bilangan bulat minimal 0.", ["unsignedInteger dipakai agar harga dapat berisi kalimat panjang.", "unsignedInteger membuat harga selalu negatif.", "unsignedInteger hanya untuk menyimpan gambar."]],
    ["nullable gambar", "nullable mengizinkan kolom gambar tidak memiliki nilai sehingga fallback gambar dapat digunakan.", ["nullable memaksa gambar selalu terisi.", "nullable menghapus kolom gambar.", "nullable berarti kolom hanya boleh angka negatif."]],
    ["up()", "Method up() pada migration menerapkan pembuatan atau perubahan struktur database.", ["up() hanya menampilkan view Blade.", "up() menjalankan stylesheet.", "up() adalah method resource untuk form edit."]],
    ["down()", "Method down() membatalkan perubahan migration ketika rollback dijalankan.", ["down() selalu menyimpan produk baru.", "down() memformat harga ke rupiah.", "down() membuat flash session berhasil."]]
  ],
  "serkom-model": [
    ["$fillable", "$fillable adalah whitelist atribut yang boleh diisi melalui mass assignment seperti create() dan update().", ["$fillable memvalidasi apakah harga integer.", "$fillable membuat kolom pada MySQL.", "$fillable menentukan warna tombol."]],
    ["validation", "Validation menentukan apakah input user memenuhi aturan sebelum diproses lebih lanjut.", ["Validation menentukan field mass assignment saja.", "Validation hanya mengubah tipe tampilan CSS.", "Validation menggantikan migration."]],
    ["casts()", "casts() mendefinisikan konversi tipe atribut saat digunakan oleh model, misalnya harga sebagai integer.", ["casts() membuat kolom baru di database.", "casts() mengganti route DELETE menjadi GET.", "casts() menghapus kebutuhan model."]],
    ["Product model", "Product menjadi representasi model untuk data pada tabel products melalui Eloquent.", ["Product hanya nama class CSS.", "Product adalah perintah Composer.", "Product digunakan untuk mengatur port MySQL."]],
    ["Route Model Binding", "Parameter Product $produk memungkinkan Laravel mengambil record model berdasarkan parameter route secara otomatis.", ["Route Model Binding hanya mengganti warna URL.", "Route Model Binding membuat tabel tanpa migration.", "Route Model Binding menghapus semua record saat route dibuka."]],
    ["Mass assignment", "Mass assignment mengisi beberapa atribut model sekaligus dari array data yang diizinkan.", ["Mass assignment adalah metode membuat media query.", "Mass assignment berarti menjalankan server dua kali.", "Mass assignment hanya untuk membaca file gambar."]]
  ],
  "serkom-seeder": [
    ["Seeder", "Seeder digunakan untuk memasukkan data awal atau data latihan ke database.", ["Seeder menentukan struktur kolom utama.", "Seeder menggantikan route resource.", "Seeder hanya menulis CSS."]],
    ["ProductSeeder", "ProductSeeder dapat menyimpan kumpulan data produk latihan lalu membuat record melalui model Product.", ["ProductSeeder mengubah HTTP GET menjadi DELETE.", "ProductSeeder hanya menghasilkan screenshot.", "ProductSeeder membuat file .env menjadi publik."]],
    ["foreach", "foreach membaca setiap item array/collection satu per satu untuk diproses.", ["foreach hanya dipakai untuk membuat migration rollback.", "foreach selalu menghentikan program pada item pertama.", "foreach adalah perintah Composer."]],
    ["Product::query()->create", "Pemanggilan tersebut membuat record menggunakan data array yang sesuai dengan atribut mass assignment.", ["Pemanggilan tersebut hanya membaca file CSS.", "Pemanggilan tersebut menghapus seluruh tabel.", "Pemanggilan tersebut menyalakan MySQL."]],
    ["DatabaseSeeder", "DatabaseSeeder dapat memanggil seeder lain seperti ProductSeeder agar proses seeding terorganisasi.", ["DatabaseSeeder adalah file route publik.", "DatabaseSeeder hanya menyimpan variabel JavaScript.", "DatabaseSeeder wajib berisi HTML landing page."]],
    ["db:seed", "php artisan db:seed menjalankan proses seeding yang telah didefinisikan.", ["db:seed hanya menampilkan route:list.", "db:seed menghapus semua dependency Composer.", "db:seed mengganti APP_KEY."]]
  ],
  "serkom-controller": [
    ["create()", "create() menampilkan form tambah dan belum menyimpan record baru.", ["create() selalu menghapus record.", "create() menjalankan migration rollback.", "create() menampilkan form edit record lama."]],
    ["store()", "store() menerima request tambah, memvalidasi input, menyimpan record, lalu redirect dengan pesan.", ["store() hanya menampilkan form kosong.", "store() hanya membaca stylesheet.", "store() digunakan khusus menghapus record."]],
    ["edit()", "edit() menampilkan form edit dengan model yang sudah ditemukan melalui route model binding.", ["edit() selalu membuat record baru.", "edit() menghapus tabel products.", "edit() menggantikan migration."]],
    ["update()", "update() memvalidasi request dan menyimpan perubahan pada record yang sudah ada.", ["update() hanya membuka form tambah.", "update() menghapus seluruh database.", "update() menjalankan composer install."]],
    ["destroy()", "destroy() menghapus record model lalu mengarahkan pengguna kembali dengan umpan balik.", ["destroy() hanya membaca data tanpa perubahan.", "destroy() membuat migration baru.", "destroy() mengatur layout Blade."]],
    ["flash session success", "Pesan success dapat dikirim saat redirect agar halaman berikutnya memberi umpan balik operasi berhasil.", ["Flash session success membuat kolom database.", "Flash session success menggantikan validation.", "Flash session success hanya bekerja di CSS."]]
  ],
  "serkom-routing": [
    ["Route::get", "Route::get digunakan untuk route yang merespons request GET seperti landing page.", ["Route::get selalu menghapus resource.", "Route::get membuat migration baru.", "Route::get hanya digunakan di file CSS."]],
    ["Route::resource", "Route::resource dapat mendaftarkan sekumpulan route CRUD konvensional untuk controller resource.", ["Route::resource hanya membuat satu route GET.", "Route::resource menggantikan model Product.", "Route::resource membuat database tanpa migration."]],
    ["except show", "Mengecualikan show membuat proyek memakai enam route resource administratif: index, create, store, edit, update, destroy.", ["except show menghapus semua route produk.", "except show membuat route login otomatis.", "except show menambah route pembayaran."]],
    ["produk.store", "Nama route produk.store mengarah pada proses penyimpanan produk baru melalui POST.", ["produk.store selalu membuka form edit.", "produk.store menghapus database.", "produk.store hanya menampilkan CSS."]],
    ["produk.update", "Nama route produk.update dipakai untuk memperbarui resource yang sudah ada melalui PUT/PATCH.", ["produk.update hanya untuk GET landing.", "produk.update membuat project Composer baru.", "produk.update mematikan server MySQL."]],
    ["route:list", "php artisan route:list membantu memeriksa HTTP method, URI, nama route, dan action controller.", ["route:list menghapus seluruh route.", "route:list mengubah tabel products.", "route:list hanya menampilkan file gambar."]]
  ],
  "serkom-blade-landing": [
    ["@extends", "@extends membuat view menggunakan layout induk yang reusable.", ["@extends membuat migration.", "@extends menyalakan MySQL.", "@extends menghapus record produk."]],
    ["@yield", "@yield menyediakan tempat pada layout yang akan diisi section dari view turunan.", ["@yield adalah perintah Composer.", "@yield mengubah DB_PORT.", "@yield hanya menjalankan feature test."]],
    ["compact('products')", "compact('products') dapat mengirim variabel $products dari controller ke view dengan nama yang sama.", ["compact membuat tabel database.", "compact menghapus route.", "compact hanya mengatur warna tombol."]],
    ["@forelse", "@forelse menggabungkan perulangan data dengan cabang kondisi ketika collection kosong.", ["@forelse hanya untuk menghapus data.", "@forelse mengganti HTTP method.", "@forelse membuat APP_KEY."]],
    ["asset()", "asset() membantu membentuk URL ke file publik seperti CSS atau gambar.", ["asset() membuat database baru.", "asset() menjalankan validation server.", "asset() mengganti resource controller."]],
    ["number_format", "number_format dapat memformat nilai harga agar lebih mudah dibaca pada tampilan.", ["number_format mengubah skema database.", "number_format menjalankan route model binding.", "number_format membuat token CSRF."]]
  ],
  "serkom-form-crud": [
    ["partial _form", "Partial _form memungkinkan field create dan edit dipakai ulang sehingga duplikasi berkurang.", ["Partial _form membuat database baru.", "Partial _form menggantikan controller.", "Partial _form hanya untuk test otomatis."]],
    ["@csrf", "@csrf menghasilkan token proteksi untuk form web yang mengubah data.", ["@csrf membuat kolom id.", "@csrf mengubah GET menjadi migration.", "@csrf menampilkan route:list."]],
    ["@method('PUT')", "@method('PUT') memungkinkan form HTML POST diperlakukan Laravel sebagai request PUT untuk update.", ["@method('PUT') menghapus model Product.", "@method('PUT') hanya mengatur warna CSS.", "@method('PUT') membuat APP_KEY."]],
    ["@method('DELETE')", "@method('DELETE') digunakan pada form hapus agar cocok dengan resource route DELETE.", ["@method('DELETE') membuat record baru.", "@method('DELETE') hanya menampilkan halaman landing.", "@method('DELETE') membuat migration up()."]],
    ["old()", "old() mengembalikan input sebelumnya agar field tidak kosong kembali setelah validasi gagal.", ["old() menghapus semua input setiap error.", "old() membuat database.", "old() menggantikan Eloquent model."]],
    ["@error", "@error memeriksa error field dan dapat menampilkan pesan validasi yang terkait.", ["@error hanya untuk memilih route GET.", "@error menjalankan Composer.", "@error mematikan server lokal."]]
  ],
  "serkom-css": [
    ["CSS lokal", "CSS lokal pada public/css membantu latihan tetap berjalan tanpa ketergantungan internet untuk styling.", ["CSS lokal wajib membuat database baru.", "CSS lokal menggantikan PHP.", "CSS lokal hanya dapat dipakai jika ada API eksternal."]],
    ["CSS variables", "Variabel CSS membantu menjaga warna dan nilai desain tetap konsisten di banyak komponen.", ["Variabel CSS menyimpan password database.", "Variabel CSS membuat route resource.", "Variabel CSS digunakan untuk migration rollback."]],
    ["media query", "Media query menyesuaikan layout pada ukuran layar tertentu agar tampilan responsif.", ["Media query mengubah data products.", "Media query menjalankan feature test.", "Media query membuat APP_KEY."]],
    ["grid satu kolom", "Pada layar kecil, grid multi-kolom dapat diubah menjadi satu kolom agar konten lebih mudah dibaca.", ["Pada layar kecil semua teks harus disembunyikan.", "Responsif berarti selalu memperbesar tabel tanpa batas.", "Grid tidak boleh pernah berubah pada perangkat berbeda."]],
    ["overflow tabel", "Overflow horizontal dapat digunakan agar tabel administratif tetap dapat diakses pada layar sempit.", ["Overflow menghapus data tabel.", "Overflow mengubah route DELETE menjadi GET.", "Overflow hanya berlaku di database."]],
    ["fokus penilaian UI", "Dalam latihan, keterbacaan, konsistensi, fungsi, dan responsivitas lebih penting daripada kompleksitas desain.", ["UI dinilai hanya dari jumlah animasi.", "Semakin banyak efek selalu berarti kompetensi lebih tinggi.", "Fungsi CRUD tidak perlu bekerja jika desain menarik."]]
  ],
  "serkom-workflow": [
    ["CREATE", "CREATE berjalan dari form tambah ke POST, store(), validation, create(), lalu redirect.", ["CREATE dimulai dari DELETE dan destroy().", "CREATE hanya membaca data tanpa perubahan.", "CREATE wajib melalui migration rollback setiap kali."]],
    ["READ", "READ menggunakan GET, query data, pengiriman data ke view, lalu Blade menampilkan hasil.", ["READ selalu menghapus record.", "READ hanya membuat CSS.", "READ harus menggunakan DELETE."]],
    ["UPDATE", "UPDATE dimulai dari form edit, route model binding, request PUT/PATCH, validation, lalu update record.", ["UPDATE selalu membuat record baru tanpa model lama.", "UPDATE hanya menampilkan halaman kosong.", "UPDATE harus menghapus migration."]],
    ["DELETE", "DELETE menggunakan route dengan method DELETE, binding model, destroy(), delete(), lalu redirect.", ["DELETE hanya membaca data.", "DELETE selalu menggunakan GET agar aman.", "DELETE membuat database baru."]],
    ["Route Model Binding pada workflow", "Binding menyediakan model yang tepat untuk edit, update, dan destroy berdasarkan parameter route.", ["Binding hanya mengatur CSS.", "Binding menggantikan semua validation.", "Binding membuat tabel otomatis."]],
    ["verifikasi workflow", "Setelah operasi CRUD, hasil perlu dicek pada response, tampilan, dan database sesuai skenario uji.", ["Workflow dianggap benar tanpa pernah dijalankan.", "Cukup melihat source code tanpa verifikasi apa pun.", "Verifikasi selalu dilakukan sebelum operasi dijalankan."]]
  ],
  "serkom-debugging": [
    ["reproduksi error", "Langkah awal debugging adalah memunculkan kembali masalah dengan langkah yang konsisten.", ["Langkah awal selalu menghapus seluruh proyek.", "Error tidak perlu pernah direproduksi.", "Debugging dimulai dengan mengganti semua file sekaligus."]],
    ["pesan error", "Pesan error, file, baris, route, dan data uji membantu mempersempit lokasi masalah.", ["Pesan error sebaiknya diabaikan.", "Pesan error hanya berguna untuk desain CSS.", "Lokasi file tidak pernah relevan saat debugging."]],
    ["hipotesis penyebab", "Sebelum mengubah kode, peserta sebaiknya merumuskan dugaan penyebab berdasarkan gejala dan bukti.", ["Hipotesis berarti mengubah kode tanpa membaca error.", "Hipotesis harus selalu berupa tebakan acak.", "Hipotesis menggantikan uji ulang."]],
    ["perubahan kecil", "Ubah bagian terkecil yang relevan agar dampak perbaikan mudah dilacak.", ["Selalu ganti seluruh proyek untuk satu error kecil.", "Perubahan kecil tidak boleh pernah digunakan.", "Debugging hanya selesai jika semua file dihapus."]],
    ["Route not defined", "Gejala Route not defined biasanya mengarahkan pemeriksaan pada nama route dan output route:list.", ["Route not defined selalu berarti RAM rusak.", "Route not defined diperbaiki dengan mengganti warna tombol.", "Route not defined berarti database harus dihapus."]],
    ["MassAssignmentException", "Mass assignment error mengarahkan pemeriksaan pada atribut model seperti $fillable.", ["Error tersebut selalu berasal dari media query CSS.", "Error tersebut hanya disebabkan ukuran gambar.", "Error tersebut diperbaiki dengan mengganti HTTP GET menjadi DELETE tanpa alasan."]]
  ],
  "serkom-testing": [
    ["expected result", "Expected result adalah hasil yang ditentukan sebelum test dijalankan sebagai acuan lulus/gagal.", ["Expected result adalah hasil aktual setelah test.", "Expected result hanya warna tombol.", "Expected result dibuat setelah semua hasil diketahui agar selalu lulus."]],
    ["actual result", "Actual result adalah hasil nyata yang diperoleh ketika skenario test dieksekusi.", ["Actual result adalah nama route yang belum dijalankan.", "Actual result selalu harus sama tanpa pengujian.", "Actual result hanya isi README."]],
    ["data invalid", "Data invalid diperlukan untuk membuktikan validation menolak input yang tidak memenuhi aturan.", ["Data invalid tidak boleh pernah diuji.", "Data invalid digunakan agar semua input diterima.", "Data invalid hanya untuk mengubah CSS."]],
    ["assertOk", "assertOk memeriksa bahwa response HTTP berhasil dengan status yang sesuai.", ["assertOk menghapus record database.", "assertOk membuat migration baru.", "assertOk hanya menampilkan screenshot."]],
    ["assertDatabaseHas", "assertDatabaseHas memeriksa bahwa database memuat data yang diharapkan setelah proses.", ["assertDatabaseHas mengubah file .env.", "assertDatabaseHas hanya memeriksa warna HTML.", "assertDatabaseHas menjalankan Composer install."]],
    ["RefreshDatabase", "RefreshDatabase membantu menjaga kondisi database test tetap terisolasi dan konsisten antar test.", ["RefreshDatabase dipakai untuk styling responsif.", "RefreshDatabase mengunggah .env ke publik.", "RefreshDatabase menggantikan semua assertion."]]
  ],
  "serkom-portfolio": [
    ["README", "README menjelaskan teknologi, cara menjalankan, fitur, dan struktur utama aplikasi.", ["README harus berisi password database asli.", "README menggantikan source code.", "README hanya berisi judul tanpa cara menjalankan."]],
    ["source code", "Source code merupakan bukti utama implementasi yang harus dapat dibuka dan ditelusuri.", ["Source code sebaiknya dihapus setelah screenshot dibuat.", "Source code tidak relevan untuk verifikasi.", "Source code cukup diganti satu foto layar."]],
    ["catatan debugging", "Catatan debugging menunjukkan error, dugaan penyebab, perbaikan, dan hasil uji ulang.", ["Catatan debugging cukup menulis kata berhasil.", "Catatan debugging tidak perlu memuat masalah awal.", "Catatan debugging hanya berisi warna tema."]],
    ["laporan testing", "Laporan testing mencatat skenario, data, expected result, actual result, status, dan tindak lanjut.", ["Laporan testing tidak perlu menyebut skenario.", "Laporan testing cukup satu gambar tanpa penjelasan.", "Laporan testing hanya daftar dependency."]],
    ["presentasi 5 menit", "Presentasi ringkas sebaiknya mengikuti kebutuhan, arsitektur, CRUD, validation, debugging, testing, lalu bukti.", ["Presentasi hanya membahas warna UI.", "Presentasi tidak perlu menunjukkan aplikasi.", "Presentasi harus menghindari penjelasan alur sistem."]],
    [".env", "File .env tidak dibagikan ke repositori publik karena dapat berisi konfigurasi sensitif.", [".env wajib dipublikasikan agar asesor dapat melihat password.", ".env adalah screenshot utama portofolio.", ".env harus diubah menjadi file CSS."]]
  ],
  "serkom-asesor": [
    ["fungsi migration", "Migration mendefinisikan dan mengubah struktur database melalui kode; up() menerapkan dan down() membatalkan.", ["Migration hanya menampilkan halaman.", "Migration mengatur navigasi browser.", "Migration adalah alat untuk styling."]],
    ["fungsi controller", "Controller menerima request, menjalankan logika/validasi, memanggil model, lalu menghasilkan view atau redirect.", ["Controller hanya menyimpan gambar.", "Controller adalah tabel MySQL.", "Controller hanya mengatur media query."]],
    ["beda $fillable dan validation", "$fillable mengatur atribut mass assignment, sedangkan validation memeriksa apakah input user memenuhi aturan.", ["Keduanya selalu sama dan dapat saling menggantikan.", "Validation hanya untuk CSS.", "$fillable membuat route GET."]],
    ["beda create dan store", "create menampilkan form tambah, sedangkan store memproses request dan menyimpan record baru.", ["create dan store selalu menghapus data.", "store hanya menampilkan form tanpa memproses request.", "create adalah method untuk update."]],
    ["beda running dan debugging", "Running berarti menjalankan program; debugging berarti mencari penyebab error, memperbaiki, dan menguji ulang.", ["Running dan debugging selalu identik.", "Debugging hanya berarti restart browser.", "Running selalu mencatat expected result."]],
    ["kapan siap diserahkan", "Aplikasi siap diserahkan ketika fungsi minimum bekerja, error kritis tertangani, testing dapat dijelaskan, dan bukti dokumentasi lengkap.", ["Aplikasi siap saat landing page memiliki warna menarik meski CRUD gagal.", "Aplikasi siap sebelum pernah diuji.", "Aplikasi siap jika .env dipublikasikan."]]
  ],
  "serkom-cheatsheet": [
    ["urutan awal", "Mulai dari pemeriksaan PHP/Composer, project dan .env, lalu database sebelum membangun komponen aplikasi.", ["Mulai dengan menghapus database dan source code.", "Mulai dari presentasi sebelum project tersedia.", "Mulai dengan route DELETE untuk semua halaman."]],
    ["model dan migration", "Model dan migration disiapkan lebih awal agar struktur data dan representasi Eloquent tersedia.", ["Model dibuat setelah semua bukti dikumpulkan tanpa database.", "Migration hanya dibuat untuk CSS.", "Model tidak diperlukan pada proyek ini."]],
    ["controller dan route", "Setelah data siap, controller dan route menghubungkan request dengan operasi CRUD.", ["Controller dan route hanya dibuat setelah project diserahkan.", "Route tidak perlu cocok dengan controller.", "Semua route harus menggunakan DELETE."]],
    ["views dan CSS", "View Blade dan CSS membentuk antarmuka setelah alur data backend siap dihubungkan.", ["View harus menulis query database langsung tanpa controller.", "CSS menggantikan model.", "Blade digunakan untuk menjalankan MySQL."]],
    ["test dan debug", "Setelah fitur berjalan, uji jalur normal dan invalid, reproduksi bug, perbaiki, lalu uji ulang.", ["Testing dilakukan hanya jika aplikasi gagal total.", "Bug tidak perlu dicatat.", "Setelah perbaikan tidak perlu verifikasi ulang."]],
    ["dokumentasi akhir", "README, screenshot, catatan debugging, laporan testing, dan presentasi merangkum bukti kerja yang telah dilakukan.", ["Dokumentasi sebaiknya dibuat tanpa melihat hasil proyek.", "Dokumentasi menggantikan kebutuhan aplikasi berfungsi.", "Dokumentasi wajib memuat kredensial rahasia."]]
  ]
};

const titles = {
  "serkom-skkni-muk": "Posisi SKKNI, MUK, Unit, dan Bukti Kompetensi",
  "serkom-inti-mvc": "Inti Proyek dan Arsitektur MVC",
  "serkom-skenario-ipo": "Skenario Proyek, Batasan, IPO, dan Alur Request–Response",
  "serkom-syntax": "Kamus Syntax PHP, Laravel, Blade, HTML, CSS, dan HTTP",
  "serkom-environment": "PHP, Composer, Artisan, Database, dan .env",
  "serkom-migration": "Database, Data Dictionary, dan Migration",
  "serkom-model": "Model Eloquent, $fillable, casts(), dan Route Model Binding",
  "serkom-seeder": "Seeder, Array, foreach, dan Data Awal",
  "serkom-controller": "Controller CRUD, Validation, Redirect, dan Pesan Sesi",
  "serkom-routing": "Routing, Resource Route, Parameter, dan HTTP Method",
  "serkom-blade-landing": "Blade Layout dan Landing Page Dinamis",
  "serkom-form-crud": "Form CRUD, Partial, CSRF, Method Spoofing, old(), dan Error",
  "serkom-css": "CSS Responsif dan Keterbacaan Antarmuka",
  "serkom-workflow": "Workflow CRUD Lengkap dari Browser sampai Database",
  "serkom-debugging": "Debugging Terstruktur dan Troubleshooting",
  "serkom-testing": "Pengujian Manual dan Feature Test Laravel",
  "serkom-portfolio": "README, Portofolio, Presentasi, dan Bukti Serkom",
  "serkom-asesor": "Pertanyaan Lisan Asesor: Jawaban Ringkas dan Tepat",
  "serkom-cheatsheet": "Cheat Sheet, Urutan Proyek, dan Latihan Mandiri"
};

export function generateSerkomQuestion(topicId) {
  const bank = facts[topicId];
  if (!bank) return single("Soal SERKOM belum tersedia.", "Generator tersedia untuk materi SERKOM yang terdaftar.", ["Semua generator hilang.", "Laravel tidak dapat diuji.", "Materi tidak memiliki topik."], "Pilih materi SERKOM yang tersedia.");
  const [term, correct, wrong] = pick(bank);
  const title = titles[topicId] ?? "materi SERKOM";
  const style = rnd(0, 4);
  const prompts = [
    `Dalam materi “${title}”, pernyataan yang paling tepat tentang ${term} adalah ...`,
    `Seorang peserta SERKOM diminta menjelaskan ${term}. Jawaban yang paling akurat adalah ...`,
    `Ketika meninjau proyek Laravel 12, bagaimana ${term} seharusnya dipahami?`,
    `Pilih penjelasan yang sesuai untuk ${term} pada proyek latihan SERKOM.`,
    `Pada sesi tanya jawab asesor, penjelasan mana yang paling kuat mengenai ${term}?`
  ];
  return single(prompts[style], correct, wrong, `Konsep ${term} harus dijelaskan berdasarkan fungsi dan perannya pada proyek, bukan sekadar dihafal.`, style === 4 ? "Lanjut" : "Sedang");
}
