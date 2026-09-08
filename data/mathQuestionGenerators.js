const SUP = {"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻"};
const SUB = {"0":"₀","1":"₁","2":"₂","3":"₃","4":"₄","5":"₅","6":"₆","7":"₇","8":"₈","9":"₉","-":"₋"};

export function superscript(value) {
  return String(value).split("").map((c) => SUP[c] ?? c).join("");
}

export function subscript(value) {
  return String(value).split("").map((c) => SUB[c] ?? c).join("");
}

const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (arr) => arr[rnd(0, arr.length - 1)];
const isPrime = (n) => { if (n < 2) return false; for (let d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };
const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
const fraction = (a, b) => {
  const g = gcd(a, b);
  return `${a / g}/${b / g}`;
};
const fmt = (n) => Number.isInteger(n) ? String(n) : String(Number(n.toFixed(3))).replace(".", ",");
const rupiah = (n) => `Rp${Math.round(n).toLocaleString("id-ID")}`;

export function shuffle(items) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function question(q, correct, distractors, explain, difficulty = "Sedang") {
  const unique = [...new Set([String(correct), ...distractors.map(String)])].slice(0, 4);
  const fallback = ["0", "1", "−1", "Tidak dapat ditentukan", "∅", "180°", "(0, 0)"];
  let fi = 0;
  while (unique.length < 4) {
    const v = fallback[fi++] ?? `Pilihan ${fi}`;
    if (!unique.includes(v)) unique.push(v);
  }
  const options = shuffle(unique);
  return { q, options, answer: options.indexOf(String(correct)), explain, difficulty, points: 4 };
}

function setText(arr) { return `{${arr.join(", ")}}`; }
function factorial(n) { let v = 1; for (let i = 2; i <= n; i++) v *= i; return v; }

const generators = {
  "himpunan-bilangan": () => {
    const mode = rnd(0, 2);
    if (mode === 0) {
      const max = rnd(8, 14);
      const A = Array.from({ length: max }, (_, i) => i + 1).filter((x) => x % 2 === 0);
      const B = Array.from({ length: max }, (_, i) => i + 1).filter((x) => x % 3 === 0);
      const inter = A.filter((x) => B.includes(x));
      return question(`A adalah bilangan genap positif ≤ ${max} dan B adalah kelipatan 3 positif ≤ ${max}. A ∩ B = ...`, setText(inter), [setText(A), setText(B), setText([...new Set([...A, ...B])].sort((a,b)=>a-b))], `Anggota irisan harus memenuhi dua syarat sekaligus: genap dan kelipatan 3.`);
    }
    if (mode === 1) {
      const n = pick([10, 15, 20, 25]);
      const primes = Array.from({length:n},(_,i)=>i+1).filter(isPrime);
      return question(`Banyak bilangan prima yang tidak lebih dari ${n} adalah ...`, primes.length, [primes.length-1, primes.length+1, primes.length+2], `Bilangan prima sampai ${n}: ${primes.join(", ")}.`);
    }
    const base = [1,2,3,4,5,6,7,8];
    const A = base.filter(x=>x<=rnd(4,6));
    const B = base.filter(x=>x%2===0);
    const union=[...new Set([...A,...B])].sort((a,b)=>a-b);
    return question(`Jika A = ${setText(A)} dan B = ${setText(B)}, maka A ∪ B adalah ...`, setText(union), [setText(A), setText(B), setText(A.filter(x=>B.includes(x)))], `Gabungan memuat semua anggota A atau B, tanpa pengulangan.`);
  },

  "eksponen": () => {
    const mode = rnd(0, 3);
    const b = rnd(2, 6);
    const m = rnd(2, 5), n = rnd(2, 4);
    if (mode === 0) {
      const e=m+n;
      return question(`${b}${superscript(m)} × ${b}${superscript(n)} = ...`, `${b}${superscript(e)}`, [`${b}${superscript(m*n)}`, `${b*b}${superscript(e)}`, `${b}${superscript(Math.abs(m-n))}`], `Basis sama dan dikalikan, jadi eksponen dijumlahkan: ${m} + ${n} = ${e}.`);
    }
    if (mode === 1) {
      const hi=m+n+1, e=hi-n;
      return question(`${b}${superscript(hi)} ÷ ${b}${superscript(n)} = ...`, `${b}${superscript(e)}`, [`${b}${superscript(hi+n)}`, `${b}${superscript(n)}`, `${b*b}${superscript(e)}`], `Pada pembagian dengan basis sama, eksponen dikurangkan: ${hi} − ${n} = ${e}.`);
    }
    if (mode === 2) {
      const e=m*n;
      return question(`(${b}${superscript(m)})${superscript(n)} = ...`, `${b}${superscript(e)}`, [`${b}${superscript(m+n)}`, `${b*n}${superscript(m)}`, `${b}${superscript(Math.max(1,m-n))}`], `Pangkat dari pangkat membuat eksponen dikalikan: ${m} × ${n} = ${e}.`);
    }
    const root = pick([2,3,4,5,6,7,8,9]);
    const square = root*root;
    return question(`${square}¹⁄² = ...`, root, [root-1, root+1, square/2], `Pangkat ¹⁄² berarti akar kuadrat: √${square} = ${root}.`);
  },

  "operasi-khusus": () => {
    const k=rnd(2,5), c=rnd(1,4), a=rnd(2,8), b=rnd(1,7);
    const val=k*a+c*b;
    return question(`Didefinisikan p ★ q = ${k}p + ${c}q. Nilai ${a} ★ ${b} adalah ...`, val, [val+c, val-k, k*b+c*a], `Substitusi p=${a}, q=${b}: ${k}(${a}) + ${c}(${b}) = ${val}.`);
  },

  "fungsi-invers": () => {
    const a=rnd(2,5), b=rnd(1,9), x=rnd(2,8);
    const y=a*x+b;
    if (Math.random()<0.5) {
      return question(`Jika f(x) = ${a}x + ${b}, maka f⁻¹(${y}) = ...`, x, [x-1,x+1,y], `f(x) menghasilkan ${y} ketika x=${x}, sehingga f⁻¹(${y})=${x}.`);
    }
    const sign = b===0 ? "" : ` + ${b}`;
    return question(`Invers dari f(x) = ${a}x${sign} adalah ...`, `(x − ${b})/${a}`, [`(x + ${b})/${a}`, `${a}x − ${b}`, `1/(${a}x + ${b})`], `Tukar x dan y pada y=${a}x+${b}, lalu selesaikan terhadap y: f⁻¹(x)=(x−${b})/${a}.`);
  },

  "komposisi-fungsi": () => {
    const add=rnd(1,6), mul=rnd(2,5), x=rnd(1,8);
    const result=mul*(x+add);
    return question(`f(x) = x + ${add} dan g(x) = ${mul}x. Nilai (g ∘ f)(${x}) adalah ...`, result, [mul*x+add, x+add+mul, result+mul], `Kerjakan f lebih dahulu: f(${x})=${x+add}. Lalu g(${x+add})=${mul}×${x+add}=${result}.`);
  },

  "barisan-aritmetika": () => {
    const a=rnd(2,12), d=rnd(2,7), n=rnd(6,14);
    if (Math.random()<0.55) {
      const un=a+(n-1)*d;
      return question(`Barisan aritmetika memiliki suku pertama ${a} dan beda ${d}. Nilai U${subscript(n)} adalah ...`, un, [un-d, un+d, a+n*d], `U${subscript(n)} = a + (n−1)d = ${a} + (${n}−1)${d} = ${un}.`);
    }
    const un=a+(n-1)*d, sn=n*(a+un)/2;
    return question(`Jumlah ${n} suku pertama barisan aritmetika dengan a=${a} dan d=${d} adalah ...`, sn, [sn+d, sn-a, n*un], `U${subscript(n)}=${un}, lalu S${subscript(n)}=${n}/2 × (${a}+${un}) = ${sn}.`);
  },

  "barisan-geometri": () => {
    const a=pick([2,3,4,5]), r=pick([2,3]), n=rnd(4,7);
    const un=a*(r**(n-1));
    return question(`Barisan geometri memiliki a=${a} dan r=${r}. Nilai U${subscript(n)} adalah ...`, un, [a*(r**n), un-r, un+r], `U${subscript(n)} = ar${superscript(n-1)} = ${a} × ${r}${superscript(n-1)} = ${un}.`);
  },

  "sistem-pertidaksamaan": () => {
    const a=rnd(1,4), b=rnd(1,5), c=rnd(5,15), x=rnd(0,4), y=rnd(0,4);
    const lhs=a*x+b*y;
    const op = Math.random()<0.5 ? "≤" : "≥";
    const ok = op==="≤" ? lhs<=c : lhs>=c;
    return question(`Apakah titik (${x}, ${y}) memenuhi ${a}x + ${b}y ${op} ${c}?`, ok?"Ya":"Tidak", [ok?"Tidak":"Ya","Hanya jika x = y","Tidak dapat ditentukan"], `Substitusi memberi ${a}(${x}) + ${b}(${y}) = ${lhs}. Karena ${lhs} ${op} ${c} bernilai ${ok?"benar":"salah"}, jawabannya ${ok?"Ya":"Tidak"}.`);
  },

  "spl": () => {
    const x=rnd(1,7), y=rnd(1,7); let a=rnd(2,4), b=rnd(1,3); while (a === b) b=rnd(1,3);
    const c1=x+y, c2=a*x+b*y;
    return question(`Diketahui x + y = ${c1} dan ${a}x + ${b}y = ${c2}. Nilai x adalah ...`, x, [y,x+1,Math.max(0,x-1)], `Sistem dibuat dengan solusi x=${x}, y=${y}. Eliminasi atau substitusi menghasilkan x=${x}.`);
  },

  "sudut-garis-sejajar": () => {
    const angle=rnd(25,155);
    if (Math.random()<0.5) {
      const other=180-angle;
      return question(`Sebuah sudut besarnya ${angle}°. Sudut yang berpelurus dengannya adalah ...`, `${other}°`, [`${angle}°`,`${180+angle}°`,`${Math.abs(90-angle)}°`], `Sudut berpelurus berjumlah 180°, jadi 180° − ${angle}° = ${other}°.`);
    }
    return question(`Dua garis berpotongan. Jika salah satu sudut ${angle}°, besar sudut bertolak belakang adalah ...`, `${angle}°`, [`${180-angle}°`,`90°`,`${angle+10}°`], `Sudut bertolak belakang selalu sama besar.`);
  },

  "bangun-ruang-garis-bidang": () => {
    const bank=[
      ["Pada balok ABCD.EFGH, bidang ABCD terhadap EFGH adalah ...","sejajar",["berpotongan","bersilangan","berimpit"],"Keduanya adalah sisi berhadapan pada balok."],
      ["Dua garis yang tidak sejajar, tidak berpotongan, dan tidak sebidang disebut ...","bersilangan",["sehadap","berpelurus","berimpit"],"Itu adalah definisi garis bersilangan dalam ruang."],
      ["Pada kubus ABCD.EFGH, rusuk AB sejajar dengan ...","CD",["BC","AE","CG"],"AB dan CD berada pada arah yang sama dan tidak berpotongan."],
      ["Dua bidang tidak sejajar yang bertemu akan berpotongan pada ...","sebuah garis",["sebuah titik","seluruh bidang","tidak ada bagian"],"Dua bidang yang berpotongan menghasilkan garis perpotongan."],
      ["Pada balok ABCD.EFGH, bidang ABFE terhadap bidang DCGH adalah ...","sejajar",["berpotongan pada titik","tegak lurus","bersilangan"],"ABFE dan DCGH adalah dua sisi berhadapan."],
      ["Pada balok ABCD.EFGH, bidang ABCD dan ABFE berpotongan pada ...","garis AB",["garis CD","titik A saja","garis EF"],"Kedua bidang sama-sama memuat rusuk AB, sehingga garis perpotongannya AB."],
      ["Pada balok ABCD.EFGH, rusuk AE terhadap bidang ABCD adalah ...","tegak lurus",["sejajar","bersilangan","berimpit"],"Rusuk AE berdiri tegak terhadap bidang alas ABCD."],
      ["Pada balok ABCD.EFGH, rusuk AD sejajar dengan ...","BC",["AB","AE","BF"],"AD dan BC memiliki arah yang sama pada bidang alas."],
      ["Pada kubus ABCD.EFGH, rusuk BF sejajar dengan ...","AE",["AB","BC","FG"],"BF dan AE sama-sama merupakan rusuk tegak."],
      ["Pada kubus ABCD.EFGH, bidang ADHE sejajar dengan ...","BCGF",["ABFE","ABCD","CDHG"],"ADHE dan BCGF adalah dua sisi yang saling berhadapan."],
      ["Pada balok ABCD.EFGH, bidang ABFE berpotongan dengan BCGF pada ...","garis BF",["garis AB","garis BC","garis FG"],"Kedua bidang sama-sama memuat rusuk BF."],
      ["Pada kubus ABCD.EFGH, rusuk AB terhadap rusuk CG adalah ...","bersilangan",["sejajar","berpotongan","berimpit"],"AB dan CG tidak sejajar, tidak berpotongan, dan tidak berada pada satu bidang."],
      ["Pada balok ABCD.EFGH, garis AC terletak pada bidang ...","ABCD",["EFGH","ABFE","BCGF"],"AC adalah diagonal pada bidang alas ABCD."]
    ];
    const [q,c,d,e]=pick(bank); return question(q,c,d,e);
  },

  "kesebangunan": () => {
    const k=pick([2,3,4]), side=rnd(3,10);
    if (Math.random()<0.5) {
      const newSide=side*k;
      return question(`Dua bangun sebangun memiliki faktor skala panjang ${k}. Jika sisi pada bangun kecil ${side} cm, sisi bersesuaiannya pada bangun besar adalah ...`, `${newSide} cm`, [`${side+k} cm`,`${side*k*k} cm`,`${Math.max(1,newSide-k)} cm`], `Panjang dikalikan faktor skala: ${side} × ${k} = ${newSide}.`);
    }
    return question(`Jika faktor skala panjang dua bangun sebangun adalah ${k}, faktor skala luasnya adalah ...`, k*k, [k,k*k*k,2*k], `Luas berubah menurut kuadrat faktor skala: ${k}² = ${k*k}.`);
  },

  "pythagoras": () => {
    const triples=pick([[3,4,5],[5,12,13],[8,15,17],[7,24,25],[9,12,15]]);
    const [a,b,c]=triples;
    if (Math.random()<0.5) return question(`Segitiga siku-siku memiliki kaki ${a} cm dan ${b} cm. Sisi miringnya ...`, `${c} cm`, [`${a+b} cm`,`${c+1} cm`,`${Math.abs(b-a)} cm`], `${a}² + ${b}² = ${a*a} + ${b*b} = ${c*c}, jadi c=${c}.`);
    return question(`Segitiga siku-siku memiliki sisi miring ${c} cm dan salah satu kaki ${a} cm. Kaki lainnya ...`, `${b} cm`, [`${c-a} cm`,`${a+b} cm`,`${b+2} cm`], `Kaki² = ${c}² − ${a}² = ${c*c} − ${a*a} = ${b*b}, sehingga panjang kaki ${b} cm.`);
  },

  "transformasi": () => {
    const x=rnd(-5,5), y=rnd(-5,5), mode=rnd(0,2);
    if (mode===0) return question(`Titik A(${x}, ${y}) direfleksikan terhadap sumbu-x. Bayangannya adalah ...`, `(${x}, ${-y})`, [`(${-x}, ${y})`,`(${-x}, ${-y})`,`(${y}, ${x})`], `Refleksi terhadap sumbu-x mempertahankan x dan membalik tanda y.`);
    if (mode===1) { const a=rnd(-3,4), b=rnd(-3,4); return question(`Titik A(${x}, ${y}) ditranslasi oleh (${a}, ${b}). Bayangannya ...`, `(${x+a}, ${y+b})`, [`(${x-a}, ${y-b})`,`(${x+b}, ${y+a})`,`(${-x+a}, ${-y+b})`], `Translasi menambahkan vektor: (${x}+${a}, ${y}+${b}) = (${x+a}, ${y+b}).`); }
    return question(`Titik A(${x}, ${y}) dirotasi 90° berlawanan arah jarum jam terhadap O. Bayangannya ...`, `(${-y}, ${x})`, [`(${y}, ${-x})`,`(${-x}, ${-y})`,`(${y}, ${x})`], `Rotasi 90° berlawanan arah jarum jam memakai aturan (x,y) → (−y,x).`);
  },

  "jarak-ruang": () => {
    const base=pick([[3,4,12,13],[2,3,6,7],[1,2,2,3],[4,4,7,9],[6,6,7,11],[1,4,8,9],[2,6,9,11]]);
    const scale=rnd(1,4);
    const [p,l,t,d]=base.map((value)=>value*scale);
    return question(`Balok berukuran ${p} cm × ${l} cm × ${t} cm. Panjang diagonal ruangnya adalah ...`, `${d} cm`, [`${p+l+t} cm`,`${d+scale} cm`,`${Math.sqrt(p*p+l*l).toFixed(1).replace('.',',')} cm`], `d = √(${p}² + ${l}² + ${t}²) = √${p*p+l*l+t*t} = ${d} cm.`);
  },

  "keliling-luas": () => {
    const mode=rnd(0,2);
    if (mode===0) { const p=rnd(5,15), l=rnd(3,10), A=p*l; return question(`Luas persegi panjang dengan panjang ${p} cm dan lebar ${l} cm adalah ...`, `${A} cm²`, [`${2*(p+l)} cm²`,`${p+l} cm²`,`${A+p} cm²`], `L = p × l = ${p} × ${l} = ${A} cm².`); }
    if (mode===1) { const a=rnd(6,16), t=rnd(4,12), A=a*t/2; return question(`Luas segitiga dengan alas ${a} cm dan tinggi ${t} cm adalah ...`, `${fmt(A)} cm²`, [`${a*t} cm²`,`${a+t} cm²`,`${fmt(A+t)} cm²`], `L = 1/2 × ${a} × ${t} = ${fmt(A)} cm².`); }
    const r=pick([7,14,21]); const K=2*(22/7)*r; return question(`Keliling lingkaran berjari-jari ${r} cm dengan π = 22/7 adalah ...`, `${K} cm`, [`${K/2} cm`,`${(22/7)*r*r} cm`,`${K+22} cm`], `K = 2πr = 2 × 22/7 × ${r} = ${K} cm.`);
  },

  "volume-bangun-ruang": () => {
    const p=rnd(4,12), l=rnd(3,9), t=rnd(2,8), v=p*l*t;
    return question(`Volume balok berukuran ${p} cm × ${l} cm × ${t} cm adalah ...`, `${v} cm³`, [`${p+l+t} cm³`,`${2*(p*l+p*t+l*t)} cm³`,`${v+t} cm³`], `V = p × l × t = ${p} × ${l} × ${t} = ${v} cm³.`);
  },

  "luas-permukaan": () => {
    if (Math.random()<0.5) {
      const r=pick([3,4,5,7]), t=rnd(8,20), coeff=2*r*t;
      return question(`Luas selimut tabung dengan r=${r} cm dan t=${t} cm adalah ...`, `${coeff}π cm²`, [`${r*t}π cm²`,`${2*r*(r+t)}π cm²`,`${r*r}π cm²`], `L selimut = 2πrt = 2π(${r})(${t}) = ${coeff}π cm².`);
    }
    const need=rnd(4,12)*100+50, sheet=pick([200,250,300]); const count=Math.ceil(need/sheet);
    return question(`Kebutuhan stiker ${need} cm². Satu lembar menutup ${sheet} cm². Minimal lembar yang harus dibeli ...`, count, [Math.max(1,count-1),count+1,count+2], `${need} ÷ ${sheet} = ${(need/sheet).toFixed(2).replace('.',',')}. Karena lembar dibeli utuh, dibulatkan ke atas menjadi ${count}.`);
  },

  "trigonometri": () => {
    const triple=pick([[3,4,5],[5,12,13],[8,15,17],[7,24,25]]);
    const [opp,adj,hyp]=triple; const mode=rnd(0,2);
    if(mode===0) return question(`Pada segitiga siku-siku, terhadap sudut θ sisi depan=${opp} dan sisi miring=${hyp}. sin θ = ...`, fraction(opp,hyp), [fraction(adj,hyp),fraction(opp,adj),fraction(hyp,opp)], `sin θ = depan/miring = ${opp}/${hyp}.`);
    if(mode===1) return question(`Pada segitiga siku-siku, terhadap sudut θ sisi samping=${adj} dan sisi miring=${hyp}. cos θ = ...`, fraction(adj,hyp), [fraction(opp,hyp),fraction(opp,adj),fraction(hyp,adj)], `cos θ = samping/miring = ${adj}/${hyp}.`);
    return question(`Pada segitiga siku-siku, terhadap sudut θ sisi depan=${opp} dan samping=${adj}. tan θ = ...`, fraction(opp,adj), [fraction(adj,opp),fraction(opp,hyp),fraction(adj,hyp)], `tan θ = depan/samping = ${opp}/${adj}.`);
  },

  "diagram-grafik": () => {
    const a=rnd(200,300), b=a+rnd(10,40), c=b-rnd(5,25), d=c+rnd(20,50);
    const data=[a,b,c,d];
    if(Math.random()<0.5) return question(`Data empat tahun berturut-turut adalah ${data.join(", ")}. Apakah data tersebut “selalu meningkat”?`, "Tidak", ["Ya","Hanya pada dua tahun terakhir","Tidak dapat ditentukan"], `Dari tahun ke-2 ke tahun ke-3 terjadi penurunan: ${b} menjadi ${c}.`);
    const change=b-a; const pct=Math.round(change/a*1000)/10;
    return question(`Nilai meningkat dari ${a} menjadi ${b}. Besar kenaikannya adalah ...`, change, [b,a,change+10], `Kenaikan = nilai baru − nilai lama = ${b} − ${a} = ${change}.`);
  },

  "aturan-pencacahan": () => {
    if(Math.random()<0.5){ const n=rnd(3,6), ans=factorial(n); return question(`Banyak susunan ${n} orang berbeda dalam satu baris adalah ...`, ans, [n*n,ans/n,ans+n], `${n}! = ${Array.from({length:n},(_,i)=>n-i).join(" × ")} = ${ans}.`); }
    const a=rnd(3,7), b=rnd(2,5), ans=a*b; return question(`Tersedia ${a} pilihan baju dan ${b} pilihan celana. Banyak pasangan berbeda adalah ...`, ans, [a+b,a*b*2,Math.max(a,b)], `Aturan perkalian: ${a} × ${b} = ${ans}.`);
  },

  "statistika": () => {
    const mode=rnd(0,2);
    if(mode===0){ const vals=Array.from({length:5},()=>rnd(3,12)); const sum=vals.reduce((a,b)=>a+b,0); const mean=sum/5; if(!Number.isInteger(mean)) return generators.statistika(); return question(`Rata-rata data ${vals.join(", ")} adalah ...`, mean, [mean-1,mean+1,sum], `Jumlah data = ${sum}; banyak data = 5; mean = ${sum}/5 = ${mean}.`); }
    if(mode===1){ const vals=Array.from({length:5},()=>rnd(1,15)).sort((a,b)=>a-b); const med=vals[2]; return question(`Median dari data ${shuffle(vals).join(", ")} adalah ...`, med, [vals[1],vals[3],Math.round(vals.reduce((a,b)=>a+b,0)/5)], `Urutkan data menjadi ${vals.join(", ")}; nilai tengah (data ke-3) adalah ${med}.`); }
    const n=5, mean=rnd(6,12), vals=[rnd(3,8),rnd(4,9),rnd(5,10),rnd(6,11)]; const missing=n*mean-vals.reduce((a,b)=>a+b,0); if(missing<=0||missing>20) return generators.statistika(); return question(`Rata-rata 5 bilangan adalah ${mean}. Empat bilangan adalah ${vals.join(", ")}. Bilangan kelima ...`, missing, [missing-1,missing+1,mean], `Jumlah total = 5 × ${mean} = ${5*mean}. Jumlah empat bilangan = ${vals.reduce((a,b)=>a+b,0)}. Selisihnya ${missing}.`);
  },

  "peluang-tunggal": () => {
    const red=rnd(2,8), blue=rnd(2,8), total=red+blue;
    if(Math.random()<0.5) return question(`Kotak berisi ${red} bola merah dan ${blue} bola biru. Peluang mengambil bola merah adalah ...`, fraction(red,total), [fraction(blue,total),fraction(red,blue),fraction(1,total)], `P(merah) = ${red}/${total} = ${fraction(red,total)}.`);
    const desired=rnd(1,5), total2=desired+rnd(3,8); return question(`Dari ${total2} kupon yang sama mungkin, ${desired} kupon berhadiah. Peluang mendapat hadiah adalah ...`, fraction(desired,total2), [fraction(total2-desired,total2),fraction(1,total2),fraction(desired,total2+1)], `P = banyak hasil yang diinginkan / total = ${desired}/${total2}.`);
  },

  "peluang-majemuk": () => {
    if(Math.random()<0.6){ const red=rnd(3,7), blue=rnd(2,6), total=red+blue; const num=red*(red-1), den=total*(total-1); const ans=fraction(num,den); return question(`Kotak berisi ${red} merah dan ${blue} biru. Dua bola diambil berturut-turut tanpa pengembalian. Peluang keduanya merah adalah ...`, ans, [fraction(red,total),fraction(red*red,total*total),fraction((red-1),(total-1))], `P = ${red}/${total} × ${red-1}/${total-1} = ${ans}.`); }
    const p=pick([0.2,0.25,0.3,0.35,0.4,0.6,0.7]); const comp=Number((1-p).toFixed(2)); return question(`Jika P(A) = ${String(p).replace('.',',')}, maka P(Aᶜ) = ...`, String(comp).replace('.',','), [String(p).replace('.',','),String(Math.min(1,p+0.1)).replace('.',','),"1"], `P(Aᶜ) = 1 − P(A) = 1 − ${String(p).replace('.',',')} = ${String(comp).replace('.',',')}.`);
  }
};


export function generateMathQuestion(topicId) {
  const fn = generators[topicId];
  if (!fn) return question("Soal belum tersedia.", "-", ["A", "B", "C"], "Generator soal belum ditemukan.");
  return fn();
}
