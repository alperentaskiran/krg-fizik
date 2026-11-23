import type { Soru } from '../tipler.ts'
import { cizgi, eksen, ok, olcu, svg, tarama, yazi } from '../cizim.ts'

const r = String.raw
const T1 = 'Fizik Bilimi ve Kariyer Keşfi'
const T2 = 'Kuvvet ve Hareket'
const T3 = 'Akışkanlar'
const T4 = 'Enerji'

export const sinif9Sorulari: Soru[] = [
  // ───────────── TEMA 1 · FİZİK BİLİMİ VE KARİYER KEŞFİ ─────────────
  {
    id: '9-1',
    sinif: 9,
    tema: T1,
    ogrenmeCiktisi: 'FİZ.9.1.2',
    surecBileseni: 'Fizik biliminin alt dallarını çalışma alanlarına göre sınıflandırır.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Aşağıdaki araştırmalardan hangisi doğrudan fiziğin **optik** alt dalının çalışma alanına girer?`,
    secenekler: {
      A: 'Gözlük camlarında ışığın nasıl kırıldığını inceleyen araştırma',
      B: 'Çalışan bir motorun ürettiği ısıyı ölçen araştırma',
      C: 'Atom çekirdeğinin bozunma hızını hesaplayan araştırma',
      D: 'Mıknatısların demir tozlarını çekmesini inceleyen araştırma',
      E: 'Ses dalgalarının duvardan yansımasını inceleyen araştırma',
    },
    dogruCevap: 'A',
    adimAdimCozum: [
      'Optik, ışığın yayılmasını, yansımasını ve kırılmasını inceleyen alt daldır.',
      'B termodinamik, C nükleer fizik, D elektromanyetizma, E ise akustik (mekanik dalgalar) alanına girer.',
      r`Gözlük camında ışığın kırılması optiğin konusudur $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '9-2',
    sinif: 9,
    tema: T1,
    ogrenmeCiktisi: 'FİZ.9.1.1',
    surecBileseni: 'Fizik biliminin doğasına ilişkin yargıları sorgular.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Fizik bilimi ile ilgili,

I. Gözlem ve deneylere dayanır.
II. Ulaştığı yasalar hiçbir koşulda değişmez ve kesindir.
III. Matematiği ortak bir dil olarak kullanır.

yargılarından hangileri doğrudur?`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve III', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'C',
    adimAdimCozum: [
      'I. Fizik; gözlem, ölçüm ve deneye dayanan bir bilimdir. **Doğru**',
      'II. Bilimsel bilgi yeni kanıtlarla değişebilir; örneğin Newton mekaniği yüksek hızlarda yerini göreliliğe bırakır. **Yanlış**',
      r`III. Fizik yasaları matematiksel bağıntılarla ifade edilir ($F = m\cdot a$ gibi). **Doğru** $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '9-3',
    sinif: 9,
    tema: T1,
    ogrenmeCiktisi: 'FİZ.9.1.4',
    surecBileseni: 'İlgi alanlarını fizikle ilişkili meslek alanlarıyla eşleştirir.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Deprem dalgalarının yer kabuğunda nasıl yayıldığını inceleyerek binaların daha güvenli yapılmasına katkı sağlamak isteyen bir öğrenci için aşağıdaki meslek alanlarından hangisi en uygundur?`,
    secenekler: {
      A: 'Optik mühendisliği',
      B: 'Nükleer fizik araştırmacılığı',
      C: 'Tıbbi fizik uzmanlığı',
      D: 'Biyofizik araştırmacılığı',
      E: 'Jeofizik mühendisliği',
    },
    dogruCevap: 'E',
    adimAdimCozum: [
      'Deprem dalgalarının yer içindeki yayılmasını inceleyen alan jeofiziktir.',
      'Jeofizik mühendisleri sismik verilerle zemin etüdü yapar ve deprem riskini değerlendirir.',
      r`Diğer alanlar ışık, çekirdek, tıp ve canlı sistemleriyle ilgilidir $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '9-4',
    sinif: 9,
    tema: T1,
    ogrenmeCiktisi: 'FİZ.9.1.3',
    surecBileseni: 'Fizik bilimine katkı sağlayan bilim insanlarının çalışmalarını tanır.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`"Kitab'ül Menazır" adlı eserinde görmenin, gözden çıkan ışınlarla değil cisimlerden göze gelen ışıkla gerçekleştiğini savunan ve deneysel yöntemi optik çalışmalarında kullanan bilim insanı aşağıdakilerden hangisidir?`,
    secenekler: {
      A: 'Galileo Galilei',
      B: 'İbn-i Heysem',
      C: 'Isaac Newton',
      D: 'Ali Kuşçu',
      E: 'Uluğ Bey',
    },
    dogruCevap: 'B',
    adimAdimCozum: [
      "Kitab'ül Menazır (Optik Kitabı), 11. yüzyılda İbn-i Heysem tarafından yazılmıştır.",
      'İbn-i Heysem karanlık oda deneyleriyle ışığın doğrusal yayıldığını göstermiştir.',
      r`Ali Kuşçu ve Uluğ Bey astronomi, Galileo ve Newton mekanik alanında öne çıkar $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '9-5',
    sinif: 9,
    tema: T1,
    ogrenmeCiktisi: 'FİZ.9.1.4',
    surecBileseni: 'Fizik bilimiyle ilişkili meslekleri araştırır, bulgularını gerekçelendirerek sunar.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Kariyer Günü:** Okulunuzun kariyer gününde üç konuk geliyor: bir hastanede **MR cihazından** sorumlu medikal fizikçi, bir rüzgâr santralinde **türbin bakımı** yapan mühendis ve bir gözlemevinde **teleskop** ile çalışan astrofizikçi.

a) Her konuğun çalışma alanını fiziğin en az bir alt dalıyla eşleştiriniz.
b) Rüzgâr türbininin çalışmasında hangi enerji dönüşümleri gerçekleşir?
c) Bu üç meslekten birini seçerek konuğa sorabileceğiniz, fizik bilgisi gerektiren iki soru yazınız.`,
    dogruCevap: 'a) MR → elektromanyetizma / atom fiziği; türbin → mekanik ve termodinamik; teleskop → optik ve astrofizik · b) Rüzgârın kinetik enerjisi → dönme kinetik enerjisi → elektrik enerjisi',
    adimAdimCozum: [
      'a) MR cihazı güçlü manyetik alan ve radyo dalgalarıyla çalışır: elektromanyetizma, atom ve çekirdek fiziği.',
      'Rüzgâr türbini kuvvet, tork ve enerji dönüşümleriyle ilgilidir: mekanik; ısınma ve verim açısından termodinamik.',
      'Teleskop ışığın kırılması/yansıması ile görüntü oluşturur: optik; gök cisimlerini inceler: astrofizik.',
      'b) Rüzgârın kinetik enerjisi kanatları döndürür (dönme kinetik enerjisi), jeneratörde elektrik enerjisine dönüşür; bir kısmı ısı ve ses olarak kaybolur.',
      'c) Örnek: "MR cihazındaki mıknatısın alanı neden bu kadar büyük olmalı?", "Kanat uzunluğu üretilen enerjiyi nasıl etkiler?"',
    ],
    rubrik: [
      { olcut: 'Üç mesleği doğru alt dallarla eşleştirme', puan: 4 },
      { olcut: 'Enerji dönüşüm zincirini doğru sıralama', puan: 3 },
      { olcut: 'Fizik içerikli, anlamlı iki soru yazma', puan: 3 },
    ],
  },

  // ───────────── TEMA 2 · KUVVET VE HAREKET ─────────────
  {
    id: '9-6',
    sinif: 9,
    tema: T2,
    ogrenmeCiktisi: 'FİZ.9.2.2',
    surecBileseni: 'Nicelikleri skaler ve vektörel olarak sınıflandırır.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`I. Hız
II. Kütle
III. Yer değiştirme

Yukarıdaki niceliklerden hangileri vektörel büyüklüktür?`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'II ve III' },
    dogruCevap: 'D',
    adimAdimCozum: [
      'Vektörel nicelikler büyüklüğün yanında yön bilgisi de gerektirir.',
      'Hız ve yer değiştirmenin yönü vardır → vektörel.',
      r`Kütle yalnızca büyüklük ve birimle ifade edilir → skaler $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '9-7',
    sinif: 9,
    tema: T2,
    ogrenmeCiktisi: 'FİZ.9.2.3',
    surecBileseni: 'Dik vektörlerin bileşkesini geometrik ve matematiksel olarak bulur.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir O noktasına şekildeki gibi birbirine dik $F_1 = 6\ \text{N}$ ve $F_2 = 8\ \text{N}$ büyüklüğünde iki kuvvet etki ediyor. Bu iki kuvvetin bileşkesinin büyüklüğü kaç newtondur?`,
    svgDiyagram: svg(
      300, 230, 'Birbirine dik iki kuvvet vektörü',
      cizgi(188, 180, 188, 36, { sinif: 'k', k: 1.5 }),
      cizgi(80, 36, 188, 36, { sinif: 'k', k: 1.5 }),
      ok(80, 180, 188, 180, 'v'),
      ok(80, 180, 80, 36, 'i'),
      '<circle cx="80" cy="180" r="5" class="f-t" stroke="none"/>',
      yazi(64, 198, 'O'),
      yazi(134, 204, 'F₁ = 6 N', { hiza: 'middle' }),
      yazi(90, 104, 'F₂ = 8 N'),
    ),
    secenekler: { A: '$2$', B: '$7$', C: '$10$', D: '$14$', E: '$20$' },
    dogruCevap: 'C',
    hesap: 'sqrt(6**2 + 8**2)',
    adimAdimCozum: [
      'Dik kuvvetlerin bileşkesi, kenarları bu kuvvetler olan dikdörtgenin köşegenidir.',
      r`Pisagor bağıntısı: $R = \sqrt{F_1^2 + F_2^2} = \sqrt{36 + 64}$`,
      r`$R = \sqrt{100} = 10\ \text{N}$ $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '9-8',
    sinif: 9,
    tema: T2,
    ogrenmeCiktisi: 'FİZ.9.2.5',
    surecBileseni: 'Alınan yol ile yer değiştirme arasındaki farkı açıklar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir koşucu K noktasından doğuya doğru $40\ \text{m}$, ardından kuzeye doğru $30\ \text{m}$ koşarak L noktasına ulaşıyor. Koşucunun yer değiştirmesinin büyüklüğü kaç metredir?`,
    svgDiyagram: svg(
      320, 230, 'Koşucunun önce doğuya sonra kuzeye hareketi',
      ok(40, 190, 240, 190, 'i'),
      ok(240, 190, 240, 40, 'i'),
      ok(40, 190, 240, 40, 'v', 2.5),
      '<circle cx="40" cy="190" r="5" class="f-t" stroke="none"/>',
      '<circle cx="240" cy="40" r="5" class="f-t" stroke="none"/>',
      yazi(26, 214, 'K'),
      yazi(252, 40, 'L'),
      yazi(140, 214, '40 m', { hiza: 'middle' }),
      yazi(252, 120, '30 m'),
      yazi(176, 116, '?', { sinif: 'f-v' }),
    ),
    secenekler: { A: '$50$', B: '$60$', C: '$70$', D: '$80$', E: '$100$' },
    dogruCevap: 'A',
    hesap: 'sqrt(40**2 + 30**2)',
    adimAdimCozum: [
      'Yer değiştirme, ilk konumdan son konuma çizilen vektördür; izlenen yola bağlı değildir.',
      r`$\Delta x = \sqrt{40^2 + 30^2} = \sqrt{1600 + 900} = \sqrt{2500}$`,
      r`$\Delta x = 50\ \text{m}$ (alınan yol ise $70\ \text{m}$'dir) $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '9-9',
    sinif: 9,
    tema: T2,
    ogrenmeCiktisi: 'FİZ.9.2.4',
    surecBileseni: 'Doğadaki temel kuvvetleri özellikleri ve etki alanlarıyla karşılaştırır.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Doğadaki temel kuvvetlerle ilgili,

I. Atom çekirdeğindeki protonları ve nötronları bir arada tutan kuvvet, güçlü nükleer kuvvettir.
II. Kütle çekim kuvveti, dört temel kuvvetin en şiddetlisidir.
III. Elektromanyetik kuvvet hem çekici hem de itici olabilir.

yargılarından hangileri doğrudur?`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'II ve III' },
    dogruCevap: 'D',
    adimAdimCozum: [
      'I. Çekirdekteki parçacıkları güçlü nükleer kuvvet bir arada tutar. **Doğru**',
      'II. Kütle çekim kuvveti, temel kuvvetlerin en zayıfıdır. **Yanlış**',
      r`III. Zıt yükler çeker, aynı işaretli yükler iter. **Doğru** $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '9-10',
    sinif: 9,
    tema: T2,
    ogrenmeCiktisi: 'FİZ.9.2.5',
    surecBileseni: 'Ortalama sürat ve ortalama hız kavramlarını günlük yaşam bağlamında hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Okul Yolu:** Elif evinden çıkıp önce doğuya doğru $300\ \text{m}$, ardından kuzeye doğru $400\ \text{m}$ yürüyerek okula ulaşıyor. Yolculuk toplam $250\ \text{s}$ sürüyor.

a) Elif'in aldığı toplam yolu ve yer değiştirmesinin büyüklüğünü bulunuz.
b) Ortalama süratini ve ortalama hızının büyüklüğünü hesaplayınız.
c) Elif aynı yolu dönüşte de yürüyüp eve gelirse, gidiş-dönüş için ortalama hızı ne olur? Açıklayınız.`,
    svgDiyagram: svg(
      300, 240, 'Evden okula doğu ve kuzey yönlü yürüyüş',
      ok(50, 200, 170, 200, 'i'),
      ok(170, 200, 170, 40, 'i'),
      ok(50, 200, 170, 40, 'v', 2.5),
      '<rect x="30" y="188" width="22" height="22" rx="3" class="f-kv" stroke-width="2"/>',
      '<rect x="160" y="22" width="34" height="20" rx="3" class="f-k" stroke-width="2"/>',
      yazi(26, 228, 'Ev', { boy: 13 }),
      yazi(200, 36, 'Okul', { boy: 13 }),
      yazi(110, 224, '300 m', { hiza: 'middle', boy: 13 }),
      yazi(180, 124, '400 m', { boy: 13 }),
      ok(250, 70, 250, 30, 't', 2),
      yazi(244, 84, 'K', { boy: 12 }),
    ),
    dogruCevap: r`a) Yol $700\ \text{m}$, yer değiştirme $500\ \text{m}$ · b) $2{,}8\ \text{m/s}$ ve $2\ \text{m/s}$ · c) $0$`,
    adimAdimCozum: [
      r`a) Alınan yol: $300 + 400 = 700\ \text{m}$; yer değiştirme: $\sqrt{300^2 + 400^2} = 500\ \text{m}$`,
      r`b) Ortalama sürat $= \dfrac{\text{yol}}{t} = \dfrac{700}{250} = 2{,}8\ \text{m/s}$`,
      r`Ortalama hız $= \dfrac{\Delta x}{t} = \dfrac{500}{250} = 2\ \text{m/s}$ (kuzeydoğu yönünde)`,
      'c) Eve dönünce son konum ilk konumla aynıdır; yer değiştirme ve dolayısıyla ortalama hız sıfırdır.',
    ],
    rubrik: [
      { olcut: 'Yol ve yer değiştirmeyi doğru hesaplama', puan: 3 },
      { olcut: 'Ortalama sürat ve ortalama hızı birimiyle bulma', puan: 4 },
      { olcut: 'Gidiş-dönüşte ortalama hızın sıfır olduğunu gerekçelendirme', puan: 3 },
    ],
  },

  // ───────────── TEMA 3 · AKIŞKANLAR ─────────────
  {
    id: '9-11',
    sinif: 9,
    tema: T3,
    ogrenmeCiktisi: 'FİZ.9.3.1',
    surecBileseni: 'Katı basıncının kuvvet ve yüzey alanı ile ilişkisini hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Ağırlığı $120\ \text{N}$ olan dikdörtgenler prizması biçimindeki bir tuğla, yatay zemine yüzey alanı $0{,}04\ \text{m}^2$ olan yüzeyi üzerine konuluyor. Tuğlanın zemine uyguladığı basınç kaç pascaldır?`,
    svgDiyagram: svg(
      340, 210, 'Yatay zemindeki tuğla',
      cizgi(40, 160, 300, 160, { k: 3 }),
      tarama(50, 160, 250),
      '<rect x="100" y="90" width="140" height="70" rx="2" class="f-kv" stroke-width="3"/>',
      yazi(170, 132, 'G = 120 N', { hiza: 'middle' }),
      ok(170, 150, 170, 196, 'v'),
      yazi(250, 196, 'A = 0,04 m²', { boy: 13 }),
    ),
    secenekler: { A: '$1500$', B: '$3000$', C: '$4500$', D: '$6000$', E: '$12000$' },
    dogruCevap: 'B',
    hesap: '120 / 0.04',
    adimAdimCozum: [
      r`Katı basıncı: $P = \dfrac{F}{A}$; dik kuvvet tuğlanın ağırlığıdır.`,
      r`$P = \dfrac{120}{0{,}04} = 3000\ \text{Pa}$ $\Rightarrow$ Cevap **B**`,
      'Not: Tuğla daha küçük yüzeyi üzerine konursa aynı ağırlıkla basınç artar.',
    ],
  },
  {
    id: '9-12',
    sinif: 9,
    tema: T3,
    ogrenmeCiktisi: 'FİZ.9.3.2',
    surecBileseni: 'Birbirine karışmayan sıvıların bir noktada oluşturduğu toplam basıncı hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekildeki açık kapta birbirine karışmayan yağ ($\rho_{yağ} = 800\ \text{kg/m}^3$) ve su ($\rho_{su} = 1000\ \text{kg/m}^3$) bulunuyor. Sıvıların kabın tabanındaki K noktasında oluşturduğu toplam basınç kaç pascaldır? ($g = 10\ \text{m/s}^2$, açık hava basıncını ihmal ediniz.)`,
    svgDiyagram: svg(
      340, 190, 'Yağ ve su bulunan açık kap',
      '<rect x="62" y="70" width="176" height="50" class="f-kv" stroke="none"/>',
      '<rect x="62" y="120" width="176" height="38" class="f-s" stroke="none"/>',
      '<path d="M60 30 V160 H240 V30" stroke-width="4"/>',
      cizgi(62, 120, 238, 120, { sinif: 'c-i', k: 1.5 }),
      yazi(80, 100, 'yağ', { boy: 13 }),
      yazi(80, 145, 'su', { boy: 13 }),
      '<circle cx="150" cy="154" r="5" class="f-v" stroke="none"/>',
      yazi(160, 150, 'K', { boy: 13 }),
      olcu(270, 70, 270, 120, '0,5 m'),
      olcu(270, 120, 270, 158, '0,4 m'),
    ),
    secenekler: { A: '$4000$', B: '$5000$', C: '$6000$', D: '$7200$', E: '$8000$' },
    dogruCevap: 'E',
    hesap: '800*10*0.5 + 1000*10*0.4',
    adimAdimCozum: [
      r`Her sıvı katmanı kendi basıncını ekler: $P_K = \rho_{yağ}\, g\, h_{yağ} + \rho_{su}\, g\, h_{su}$`,
      r`Yağın katkısı: $800 \cdot 10 \cdot 0{,}5 = 4000\ \text{Pa}$`,
      r`Suyun katkısı: $1000 \cdot 10 \cdot 0{,}4 = 4000\ \text{Pa}$`,
      r`$P_K = 4000 + 4000 = 8000\ \text{Pa}$ $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '9-13',
    sinif: 9,
    tema: T3,
    ogrenmeCiktisi: 'FİZ.9.3.4',
    surecBileseni: 'Kaldırma kuvvetinin batan hacim ve sıvı yoğunluğu ile ilişkisini hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Dinamometreye asılı, hacmi $0{,}002\ \text{m}^3$ olan bir cisim şekildeki gibi tamamen suya batırılıyor. Suyun cisme uyguladığı kaldırma kuvveti kaç newtondur? ($\rho_{su} = 1000\ \text{kg/m}^3$, $g = 10\ \text{m/s}^2$)`,
    svgDiyagram: svg(
      300, 260, 'Dinamometreye asılı ve suya batırılmış cisim',
      cizgi(100, 20, 200, 20, { k: 4 }),
      cizgi(150, 20, 150, 30),
      '<rect x="135" y="30" width="30" height="58" rx="4" class="f-k" stroke-width="2.5"/>',
      cizgi(141, 46, 159, 46, { k: 1.5 }),
      cizgi(141, 58, 159, 58, { k: 1.5 }),
      cizgi(141, 70, 159, 70, { k: 1.5 }),
      cizgi(150, 88, 150, 150),
      '<rect x="62" y="120" width="176" height="118" class="f-s" stroke="none"/>',
      '<path d="M60 100 V240 H240 V100" stroke-width="4"/>',
      '<rect x="125" y="150" width="50" height="50" rx="2" class="f-kv" stroke-width="3"/>',
      yazi(180, 220, 'su', { boy: 13 }),
      yazi(186, 70, 'dinamometre', { boy: 12 }),
    ),
    secenekler: { A: '$2$', B: '$5$', C: '$10$', D: '$20$', E: '$40$' },
    dogruCevap: 'D',
    hesap: '1000 * 10 * 0.002',
    adimAdimCozum: [
      r`Kaldırma kuvveti (Arşimet): $F_k = V_{batan} \cdot \rho_{sıvı} \cdot g$`,
      r`Cisim tamamen battığından $V_{batan} = 0{,}002\ \text{m}^3$`,
      r`$F_k = 0{,}002 \cdot 1000 \cdot 10 = 20\ \text{N}$ $\Rightarrow$ Cevap **D**`,
      'Dinamometredeki değer, cismin havadaki ağırlığından 20 N daha az okunur.',
    ],
  },
  {
    id: '9-14',
    sinif: 9,
    tema: T3,
    ogrenmeCiktisi: 'FİZ.9.3.5',
    surecBileseni: 'Akışkan hızı ile basınç arasındaki ilişkiyi günlük olaylarla ilişkilendirir.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Aşağıdaki olaylardan hangisi **Bernoulli ilkesi** ile açıklanır?`,
    secenekler: {
      A: 'Hızla geçen trenin yanındaki kişinin trene doğru çekilmesi',
      B: 'Denizde yüzen bir geminin su yüzeyinde dengede kalabilmesi',
      C: 'Barajların taban kısmının üst kısmından daha kalın yapılması',
      D: 'Pipetle içilen meyve suyunun pipette yukarı doğru yükselmesi',
      E: 'Su cenderesi kullanılarak ağır bir otomobilin kolayca kaldırılması',
    },
    dogruCevap: 'A',
    adimAdimCozum: [
      'Bernoulli ilkesi: Akışkanın hızının arttığı yerde basıncı azalır.',
      'Tren ile kişi arasındaki havanın hızı artar, basınç düşer; dıştaki yüksek basınç kişiyi trene doğru iter.',
      r`B kaldırma kuvveti, C sıvı basıncı, D açık hava basıncı, E Pascal ilkesiyle açıklanır $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '9-15',
    sinif: 9,
    tema: T3,
    ogrenmeCiktisi: 'FİZ.9.3.3',
    surecBileseni: 'Açık hava basıncını Torricelli deneyi bağlamında yorumlar.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Dağ Kampı:** Fizik kulübü deniz kenarında Torricelli deneyini yapıyor ve cıva sütununun yüksekliğini $76\ \text{cm}$ ölçüyor. Kulüp daha sonra aynı düzenekle $2000\ \text{m}$ yükseklikteki bir dağ kampına gidiyor. ($\rho_{cıva} = 13{,}6\ \text{g/cm}^3$, $\rho_{su} = 1\ \text{g/cm}^3$)

a) Dağ kampında cıva sütununun yüksekliği nasıl değişir? Nedenini açıklayınız.
b) Deniz kenarındaki deney cıva yerine suyla yapılsaydı su sütunu kaç metre olurdu?
c) Dağda yemek pişirirken suyun daha düşük sıcaklıkta kaynamasının nedenini açıklayınız.`,
    svgDiyagram: svg(
      300, 260, 'Torricelli deney düzeneği',
      '<rect x="62" y="210" width="176" height="28" class="f-kv" stroke="none"/>',
      '<path d="M60 196 V240 H240 V196" stroke-width="3"/>',
      '<rect x="137" y="80" width="26" height="150" class="f-kv" stroke="none"/>',
      '<path d="M135 230 V40 H165 V230" stroke-width="3"/>',
      yazi(172, 62, 'boşluk', { boy: 12 }),
      cizgi(137, 80, 163, 80, { sinif: 'c-v', k: 2 }),
      olcu(210, 80, 210, 210, '76 cm'),
      yazi(70, 232, 'cıva', { boy: 12 }),
    ),
    dogruCevap: r`a) Azalır · b) $\approx 10{,}3\ \text{m}$ · c) Açık hava basıncı düştüğü için kaynama noktası düşer`,
    adimAdimCozum: [
      'a) Yükseldikçe üstteki hava sütunu ve yoğunluk azalır; açık hava basıncı düşer, cıva sütunu kısalır.',
      r`b) Aynı basıncı dengelemek için: $h_{su}\,\rho_{su} = h_{cıva}\,\rho_{cıva} \Rightarrow h_{su} = 76 \cdot 13{,}6 = 1033{,}6\ \text{cm}$`,
      r`$h_{su} \approx 10{,}3\ \text{m}$ — bu yüzden su ile Torricelli deneyi pratik değildir.`,
      'c) Kaynama, buhar basıncı dış basınca eşit olunca başlar; dış basınç düşük olduğundan su 100 °C’den önce kaynar.',
    ],
    rubrik: [
      { olcut: 'Basıncın yükseklikle azaldığını gerekçesiyle açıklama', puan: 3 },
      { olcut: 'Su sütunu yüksekliğini doğru hesaplama', puan: 4 },
      { olcut: 'Kaynama noktası–dış basınç ilişkisini açıklama', puan: 3 },
    ],
  },

  // ───────────── TEMA 4 · ENERJİ ─────────────
  {
    id: '9-16',
    sinif: 9,
    tema: T4,
    ogrenmeCiktisi: 'FİZ.9.4.2',
    surecBileseni: 'Alınan ısıyı kütle, öz ısı ve sıcaklık değişimiyle ilişkilendirir.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`$500\ \text{g}$ suyun sıcaklığını $20\ ^\circ\text{C}$'den $80\ ^\circ\text{C}$'ye çıkarmak için suya kaç kilokalori ısı verilmelidir? ($c_{su} = 1\ \text{cal/g}\,^\circ\text{C}$, ısı kaybı yoktur.)`,
    secenekler: { A: '$6$', B: '$10$', C: '$15$', D: '$20$', E: '$30$' },
    dogruCevap: 'E',
    hesap: '500 * 1 * (80 - 20) / 1000',
    adimAdimCozum: [
      r`Isı bağıntısı: $Q = m \cdot c \cdot \Delta T$`,
      r`$\Delta T = 80 - 20 = 60\ ^\circ\text{C}$`,
      r`$Q = 500 \cdot 1 \cdot 60 = 30\,000\ \text{cal}$`,
      r`$Q = 30\ \text{kcal}$ $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '9-17',
    sinif: 9,
    tema: T4,
    ogrenmeCiktisi: 'FİZ.9.4.3',
    surecBileseni: 'Sıcaklık–ısı grafiğinden hâl değişimine ilişkin çıkarım yapar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`$-20\ ^\circ\text{C}$'deki buza sabit kaynakla ısı veriliyor ve sıcaklık–ısı grafiği şekildeki gibi elde ediliyor.

I. K bölümünde madde katı hâldedir.
II. L bölümünde sıcaklık sabit kaldığından maddenin iç enerjisi değişmez.
III. M bölümünde madde sıvı hâldedir.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      340, 230, 'Buzun sıcaklık–ısı grafiği',
      eksen(60, 200, 270, 180, 'Q', 'T (°C)'),
      '<path d="M60 170 L110 140 L230 140 L300 60" class="c-v" stroke-width="4"/>',
      cizgi(60, 140, 110, 140, { sinif: 'k', k: 1.5 }),
      cizgi(60, 60, 300, 60, { sinif: 'k', k: 1.5 }),
      yazi(52, 145, '0', { boy: 13, hiza: 'end' }),
      yazi(52, 175, '−20', { boy: 13, hiza: 'end' }),
      yazi(52, 65, '40', { boy: 13, hiza: 'end' }),
      yazi(76, 148, 'K', { boy: 14 }),
      yazi(170, 132, 'L', { boy: 14, hiza: 'middle' }),
      yazi(272, 112, 'M', { boy: 14 }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve III', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'C',
    adimAdimCozum: [
      'I. K bölümünde buz 0 °C’ye kadar ısınır; madde katıdır. **Doğru**',
      'II. L bölümünde erime olur; sıcaklık sabit kalsa da verilen ısı taneciklerin potansiyel enerjisini, dolayısıyla iç enerjiyi artırır. **Yanlış**',
      r`III. M bölümünde buzun tamamı erimiş, su ısınmaktadır. **Doğru** $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '9-18',
    sinif: 9,
    tema: T4,
    ogrenmeCiktisi: 'FİZ.9.4.4',
    surecBileseni: 'Isıl dengede alınan ve verilen ısının eşitliğini kullanarak denge sıcaklığını hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`$80\ ^\circ\text{C}$'deki $200\ \text{g}$ su ile $20\ ^\circ\text{C}$'deki $300\ \text{g}$ su, ısıca yalıtılmış bir kapta karıştırılıyor. Karışımın denge sıcaklığı kaç $^\circ\text{C}$ olur?`,
    secenekler: { A: '$40$', B: '$44$', C: '$50$', D: '$56$', E: '$60$' },
    dogruCevap: 'B',
    hesap: '(200*80 + 300*20) / (200 + 300)',
    adimAdimCozum: [
      r`Isıl denge: $Q_{verilen} = Q_{alınan} \Rightarrow m_1 c (80 - T) = m_2 c (T - 20)$`,
      r`$200(80 - T) = 300(T - 20) \Rightarrow 16000 - 200T = 300T - 6000$`,
      r`$500T = 22000 \Rightarrow T = 44\ ^\circ\text{C}$ $\Rightarrow$ Cevap **B**`,
      'Kontrol: Denge sıcaklığı kütlesi büyük olan soğuk suya daha yakındır.',
    ],
  },
  {
    id: '9-19',
    sinif: 9,
    tema: T4,
    ogrenmeCiktisi: 'FİZ.9.4.5',
    surecBileseni: 'Isı aktarım yollarını bir ürün tasarımı üzerinden analiz eder.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Termos Tasarımı:** Bir öğrenci grubu, çayı uzun süre sıcak tutacak bir termos tasarlıyor. Tasarımda çift cidarlı cam, cidarlar arasında vakum, iç yüzeylerde gümüş kaplama ve sıkı kapanan bir kapak bulunuyor.

a) Isının iletim, konveksiyon ve ışıma yollarıyla aktarımını kısaca tanımlayınız.
b) Tasarımdaki her bir parçanın hangi ısı aktarım yolunu engellediğini açıklayınız.
c) Bu termos soğuk içecekleri de soğuk tutar mı? Gerekçelendiriniz.`,
    svgDiyagram: svg(
      340, 260, 'Termosun kesit görünümü',
      '<rect x="40" y="44" width="140" height="200" rx="20" stroke-width="3"/>',
      '<rect x="58" y="64" width="104" height="164" rx="14" class="c-i" stroke-width="3"/>',
      '<rect x="62" y="110" width="96" height="114" rx="10" class="f-s" stroke="none"/>',
      '<rect x="76" y="30" width="68" height="34" rx="6" class="f-kv" stroke-width="2.5"/>',
      cizgi(144, 46, 210, 46, { k: 1 }),
      yazi(214, 50, 'kapak', { boy: 13 }),
      cizgi(162, 90, 210, 90, { k: 1 }),
      yazi(214, 94, 'gümüş kaplı cam', { boy: 13 }),
      cizgi(171, 150, 210, 150, { k: 1 }),
      yazi(214, 154, 'vakum', { boy: 13 }),
      cizgi(140, 200, 210, 200, { k: 1 }),
      yazi(214, 204, 'sıcak çay', { boy: 13 }),
    ),
    dogruCevap: 'b) Vakum → iletim ve konveksiyon; gümüş kaplama → ışıma; kapak → konveksiyon ve buharlaşma · c) Evet, ısı aktarımı her iki yönde de yavaşlar',
    adimAdimCozum: [
      'a) İletim: tanecikler arası çarpışmalarla aktarım (katılarda baskın). Konveksiyon: akışkanın hareketiyle aktarım. Işıma: elektromanyetik dalgalarla, ortam gerektirmeyen aktarım.',
      'b) Vakumda madde olmadığı için iletim ve konveksiyon neredeyse durur.',
      'Gümüş kaplama ışımayı geri yansıtarak ışıma yoluyla kaybı azaltır; kapak, sıcak havanın yükselip kaçmasını (konveksiyon) ve buharlaşmayı engeller.',
      'c) Evet. Termos ısı aktarımını yönden bağımsız olarak yavaşlatır; dışarıdaki ısının içeri girmesini de zorlaştırır.',
    ],
    rubrik: [
      { olcut: 'Üç ısı aktarım yolunu doğru tanımlama', puan: 3 },
      { olcut: 'Her tasarım parçasını doğru aktarım yoluyla eşleştirme', puan: 4 },
      { olcut: 'Soğuk içecek durumunu gerekçeli açıklama', puan: 3 },
    ],
  },
  {
    id: '9-20',
    sinif: 9,
    tema: T4,
    ogrenmeCiktisi: 'FİZ.9.4.6',
    surecBileseni: 'Isı iletim hızını etkileyen değişkenleri bir yalıtım problemi üzerinden değerlendirir.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Enerji Verimli Ev:** Bir evin dış duvarına yalıtım levhası ekleniyor. İç ortam $22\ ^\circ\text{C}$, dış ortam $2\ ^\circ\text{C}$'dir. Duvardan birim zamanda iletilen ısı, $\dfrac{Q}{t} = \dfrac{k \cdot A \cdot \Delta T}{d}$ bağıntısıyla modellenebilir.

a) Isı iletim hızını artıran ve azaltan değişkenleri yazınız.
b) Yalıtım levhasının kalınlığı iki katına çıkarılırsa (diğer koşullar aynı), levhadan geçen ısı iletim hızı nasıl değişir?
c) Kış günü dış sıcaklık $-8\ ^\circ\text{C}$'ye düşerse ısı kaybı kaç katına çıkar?`,
    svgDiyagram: svg(
      340, 220, 'Yalıtımlı duvardan ısı iletimi',
      '<rect x="120" y="30" width="50" height="160" class="f-kv" stroke-width="2.5"/>',
      '<rect x="170" y="30" width="40" height="160" class="f-k" stroke-width="2.5"/>',
      ok(40, 110, 112, 110, 'v'),
      ok(218, 110, 300, 110, 'v'),
      yazi(20, 80, 'iç: 22 °C', { boy: 13 }),
      yazi(224, 80, 'dış: 2 °C', { boy: 13 }),
      yazi(145, 210, 'tuğla', { boy: 12, hiza: 'middle' }),
      yazi(190, 210, 'yalıtım', { boy: 12, hiza: 'middle' }),
      olcu(170, 20, 210, 20, 'd'),
    ),
    dogruCevap: r`b) Yarıya iner · c) $\Delta T$ $20$'den $30\ ^\circ\text{C}$'ye çıktığı için $1{,}5$ katına çıkar`,
    adimAdimCozum: [
      'a) Isı iletim hızı; ısı iletim katsayısı (k), kesit alanı (A) ve sıcaklık farkı (ΔT) ile doğru, kalınlık (d) ile ters orantılıdır.',
      r`b) $\dfrac{Q}{t} \propto \dfrac{1}{d}$; $d$ iki katına çıkarsa iletim hızı yarıya iner.`,
      r`c) İlk durum: $\Delta T = 22 - 2 = 20\ ^\circ\text{C}$; yeni durum: $\Delta T = 22 - (-8) = 30\ ^\circ\text{C}$`,
      r`$\dfrac{30}{20} = 1{,}5$ — ısı kaybı $1{,}5$ katına çıkar.`,
    ],
    rubrik: [
      { olcut: 'Değişkenleri doğru/ters orantı ile ifade etme', puan: 3 },
      { olcut: 'Kalınlık etkisini doğru yorumlama', puan: 3 },
      { olcut: 'Sıcaklık farkı oranını doğru hesaplama', puan: 4 },
    ],
  },
]
