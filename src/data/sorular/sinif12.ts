import type { Soru } from '../tipler.ts'
import { cizgi, eksen, ok, olcu, svg, yazi } from '../cizim.ts'

const r = String.raw
const T1 = 'Çembersel Hareket'
const T2 = 'Basit Harmonik Hareket'
const T3 = 'Dalga Mekaniği'
const T4 = 'Atom Fiziğine Giriş ve Radyoaktivite'
const T5 = 'Modern Fizik'
const T6 = 'Modern Fiziğin Teknolojideki Uygulamaları'

/** Duvara bağlı yay–kütle düzeneği (BHH soruları için ortak çizim) */
const yayKutle = (etiketK: string, etiketM: string) =>
  [
    cizgi(40, 70, 40, 180, { k: 4 }),
    '<path d="M40 80 l-14 14 M40 100 l-14 14 M40 120 l-14 14 M40 140 l-14 14 M40 160 l-14 14" stroke-width="2"/>',
    cizgi(26, 180, 390, 180, { k: 3 }),
    '<path d="M40 150 h15 l6 -12 l12 24 l12 -24 l12 24 l12 -24 l12 24 l12 -24 l12 24 l12 -24 l12 24 l6 -12 h25" class="c-i" stroke-width="3"/>',
    '<rect x="200" y="125" width="60" height="55" rx="4" class="f-kv" stroke-width="3"/>',
    yazi(230, 158, etiketM, { hiza: 'middle', boy: 14 }),
    cizgi(230, 40, 230, 120, { sinif: 'k', k: 1.5 }),
    yazi(230, 34, 'denge (O)', { boy: 12, hiza: 'middle' }),
    '<path d="M150 210 H310 M150 202 v16 M230 202 v16 M310 202 v16" stroke-width="1.5"/>',
    yazi(150, 234, '−A', { boy: 13, hiza: 'middle' }),
    yazi(230, 234, '0', { boy: 13, hiza: 'middle' }),
    yazi(310, 234, '+A', { boy: 13, hiza: 'middle' }),
    yazi(84, 124, etiketK),
  ].join('')

export const sinif12Sorulari: Soru[] = [
  // ───────────── ÜNİTE 1 · ÇEMBERSEL HAREKET ─────────────
  {
    id: '12-1',
    sinif: 12,
    tema: T1,
    ogrenmeCiktisi: 'FİZ.12.1.1',
    surecBileseni: 'Düzgün çembersel harekette merkezcil kuvveti nicel olarak inceler.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Sürtünmesiz yatay düzlemde $m = 0{,}5\ \text{kg}$ kütleli bir cisim, $r = 2\ \text{m}$ uzunluğundaki iple bağlı olarak $v = 4\ \text{m/s}$ sabit süratle düzgün çembersel hareket yapıyor. İpteki gerilme kuvveti kaç newtondur?`,
    svgDiyagram: svg(
      400, 250, 'Düzgün çembersel hareket yapan cisim, hız ve merkezcil kuvvet',
      '<circle cx="200" cy="125" r="90" class="k" stroke-width="2"/>',
      '<circle cx="200" cy="125" r="4" class="f-t" stroke="none"/>',
      yazi(182, 146, 'O'),
      cizgi(200, 125, 290, 125),
      yazi(232, 117, 'r = 2 m', { boy: 13 }),
      '<circle cx="290" cy="125" r="11" class="f-k" stroke-width="2"/>',
      ok(290, 112, 290, 42, 'i'),
      yazi(300, 66, 'v'),
      ok(276, 142, 222, 142, 'v'),
      yazi(240, 164, 'Fₘ'),
      yazi(306, 130, '0,5 kg', { boy: 13 }),
    ),
    secenekler: { A: '$1$', B: '$2$', C: '$4$', D: '$8$', E: '$16$' },
    dogruCevap: 'C',
    hesap: '0.5 * 4**2 / 2',
    adimAdimCozum: [
      r`İpteki gerilme merkezcil kuvveti sağlar: $F_m = \dfrac{m v^2}{r}$`,
      r`$F_m = \dfrac{0{,}5 \cdot 16}{2}$`,
      r`$F_m = 4\ \text{N}$ $\Rightarrow$ Cevap **C**`,
      r`Merkezcil ivme: $a_m = \dfrac{v^2}{r} = 8\ \text{m/s}^2$, daima merkeze yöneliktir.`,
    ],
  },
  {
    id: '12-2',
    sinif: 12,
    tema: T1,
    ogrenmeCiktisi: 'FİZ.12.1.1',
    surecBileseni: 'Frekans ile açısal hız arasındaki ilişkiyi kullanır.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir pikap plağı dakikada $120$ devir yapacak şekilde sabit açısal hızla dönüyor. Plağın açısal hızı kaç $\text{rad/s}$'dir? ($\pi = 3$)`,
    secenekler: { A: '$2$', B: '$4$', C: '$6$', D: '$12$', E: '$24$' },
    dogruCevap: 'D',
    hesap: '2 * 3 * 120 / 60',
    adimAdimCozum: [
      r`Frekans: $f = \dfrac{120\ \text{devir}}{60\ \text{s}} = 2\ \text{Hz}$`,
      r`Açısal hız: $\omega = 2\pi f = 2 \cdot 3 \cdot 2$`,
      r`$\omega = 12\ \text{rad/s}$ $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '12-3',
    sinif: 12,
    tema: T1,
    ogrenmeCiktisi: 'FİZ.12.1.4',
    surecBileseni: 'Kepler yasalarını gezegenlerin hareketiyle ilişkilendirir.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir gezegenin Güneş etrafındaki yörüngesi şekildeki gibidir.

I. Gezegenin yörüngedeki çizgisel sürati her noktada aynıdır.
II. Gezegenlerin yörüngeleri, Güneş'in merkezde bulunduğu tam çemberlerdir.
III. Gezegenin dolanma periyodunun karesi, yörüngenin ortalama yarıçapının küpü ile orantılıdır.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      380, 220, 'Güneş etrafında eliptik yörünge',
      '<ellipse cx="190" cy="110" rx="150" ry="80" class="k" stroke-width="2"/>',
      '<circle cx="67" cy="110" r="14" class="f-v" stroke="none"/>',
      yazi(67, 146, 'Güneş', { boy: 13, hiza: 'middle' }),
      '<circle cx="40" cy="110" r="7" class="f-i" stroke="none"/>',
      yazi(26, 96, 'K', { boy: 13, hiza: 'middle' }),
      '<circle cx="340" cy="110" r="7" class="f-i" stroke="none"/>',
      yazi(354, 96, 'L', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız III', C: 'I ve II', D: 'I ve III', E: 'I, II ve III' },
    dogruCevap: 'B',
    adimAdimCozum: [
      'I. Kepler’in II. yasası (eşit alanlar): Gezegen Güneş’e yakınken (K) hızlı, uzaktayken (L) yavaş gider. **Yanlış**',
      'II. Kepler’in I. yasası: Yörüngeler, Güneş’in odaklardan birinde bulunduğu elipslerdir. **Yanlış**',
      r`III. Kepler’in III. yasası: $T^2 \propto r^3$ **Doğru** $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-4',
    sinif: 12,
    tema: T1,
    ogrenmeCiktisi: 'FİZ.12.1.3',
    surecBileseni: 'Açısal momentumun korunumunu günlük yaşam örnekleriyle açıklar.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Buz Pateni Gösterisi:** Bir buz patencisi kolları açıkken kendi ekseni etrafında $2\ \text{rad/s}$ açısal hızla dönüyor; bu durumda eylemsizlik momenti $4\ \text{kg}\cdot\text{m}^2$'dir. Kollarını göğsüne çektiğinde eylemsizlik momenti $1\ \text{kg}\cdot\text{m}^2$'ye düşüyor. (Buz ile sürtünme ihmal edilecek.)

a) Kollarını çektikten sonraki açısal hızını hesaplayınız.
b) Dönme kinetik enerjisi değişir mi? Hesaplayarak gösteriniz ve enerji farkının kaynağını açıklayınız.
c) Açısal momentumun korunumuna günlük yaşamdan veya teknolojiden bir örnek daha veriniz.`,
    dogruCevap: r`a) $8\ \text{rad/s}$ · b) $8\ \text{J} \to 32\ \text{J}$, artar (kasların yaptığı iş) · c) Jiroskop, dalgıç, uydular`,
    adimAdimCozum: [
      r`a) Dış tork yok $\Rightarrow$ $L = I\omega$ korunur: $4 \cdot 2 = 1 \cdot \omega_2 \Rightarrow \omega_2 = 8\ \text{rad/s}$`,
      r`b) $E_1 = \tfrac{1}{2} \cdot 4 \cdot 2^2 = 8\ \text{J}$; $E_2 = \tfrac{1}{2} \cdot 1 \cdot 8^2 = 32\ \text{J}$`,
      'Kinetik enerji artar; artış, patencinin kollarını içeri çekerken kaslarıyla yaptığı işten gelir.',
      'c) Tramplenden atlayan dalgıcın vücudunu toplayarak hızlı dönmesi, jiroskoplar, uyduların yönelim kontrolü.',
    ],
    rubrik: [
      { olcut: 'Açısal momentum korunumuyla yeni açısal hızı bulma', puan: 4 },
      { olcut: 'Kinetik enerjileri hesaplayıp artışın kaynağını açıklama', puan: 4 },
      { olcut: 'Uygun ek örnek verme', puan: 2 },
    ],
  },

  // ───────────── ÜNİTE 2 · BASİT HARMONİK HAREKET ─────────────
  {
    id: '12-5',
    sinif: 12,
    tema: T2,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Yay–kütle sisteminin periyodunu etkileyen değişkenleri belirler.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Yay sabiti $k = 100\ \text{N/m}$ olan yaya bağlı $m = 1\ \text{kg}$ kütleli cisim, sürtünmesiz yatay düzlemde basit harmonik hareket yapıyor. Hareketin periyodu kaç saniyedir? ($\pi = 3$)`,
    svgDiyagram: svg(400, 250, 'Duvara bağlı yay ve kütle sistemi', yayKutle('k = 100 N/m', '1 kg')),
    secenekler: { A: r`$0{,}6$`, B: r`$1{,}2$`, C: r`$1{,}8$`, D: '$3$', E: '$6$' },
    dogruCevap: 'A',
    hesap: '2 * 3 * sqrt(1/100)',
    adimAdimCozum: [
      r`Yay–kütle sisteminin periyodu: $T = 2\pi\sqrt{\dfrac{m}{k}}$`,
      r`$T = 2 \cdot 3 \cdot \sqrt{\dfrac{1}{100}} = 6 \cdot 0{,}1$`,
      r`$T = 0{,}6\ \text{s}$ $\Rightarrow$ Cevap **A**`,
      'Periyot genliğe bağlı değildir; yalnızca m ve k belirler.',
    ],
  },
  {
    id: '12-6',
    sinif: 12,
    tema: T2,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Basit sarkacın periyodunu ip uzunluğu ve çekim ivmesiyle ilişkilendirir.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`İp uzunluğu $2{,}5\ \text{m}$ olan basit sarkaç, küçük açılarla salınım yapıyor. Sarkacın periyodu kaç saniyedir? ($g = 10\ \text{m/s}^2$, $\pi = 3$)`,
    svgDiyagram: svg(
      340, 240, 'Basit sarkaç',
      cizgi(110, 24, 250, 24, { k: 4 }),
      '<path d="M120 24 l-10 -10 M140 24 l-10 -10 M160 24 l-10 -10 M180 24 l-10 -10 M200 24 l-10 -10 M220 24 l-10 -10 M240 24 l-10 -10" stroke-width="1.5"/>',
      cizgi(180, 24, 180, 200, { sinif: 'k', k: 1.5 }),
      cizgi(180, 24, 222, 184, { k: 2.5 }),
      '<circle cx="226" cy="196" r="14" class="f-kv" stroke-width="2.5"/>',
      '<path d="M180 70 A46 46 0 0 1 192 68" class="c-v" stroke-width="2.5"/>',
      yazi(214, 110, 'L = 2,5 m', { boy: 13 }),
    ),
    secenekler: { A: r`$0{,}5$`, B: '$1$', C: r`$1{,}5$`, D: '$2$', E: '$3$' },
    dogruCevap: 'E',
    hesap: '2 * 3 * sqrt(2.5/10)',
    adimAdimCozum: [
      r`Basit sarkacın periyodu: $T = 2\pi\sqrt{\dfrac{L}{g}}$`,
      r`$T = 2 \cdot 3 \cdot \sqrt{\dfrac{2{,}5}{10}} = 6 \cdot \sqrt{0{,}25} = 6 \cdot 0{,}5$`,
      r`$T = 3\ \text{s}$ $\Rightarrow$ Cevap **E**`,
      'Periyot kütleye ve (küçük açılarda) genliğe bağlı değildir.',
    ],
  },
  {
    id: '12-7',
    sinif: 12,
    tema: T2,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Basit harmonik harekette konuma bağlı hız, ivme ve kuvveti yorumlar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Sürtünmesiz yatay düzlemde yaya bağlı cisim, $-A$ ile $+A$ noktaları arasında basit harmonik hareket yapıyor. Cisim denge noktası O'dan geçerken,

I. Sürati en büyük değerindedir.
II. İvmesinin büyüklüğü en büyük değerindedir.
III. Cisme etki eden geri çağırıcı kuvvet sıfırdır.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(400, 250, 'Denge noktası etrafında salınan yay–kütle sistemi', yayKutle('k', 'm')),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'II ve III' },
    dogruCevap: 'D',
    adimAdimCozum: [
      'I. Denge noktasında potansiyel enerji sıfır, kinetik enerji maksimumdur; sürat en büyüktür. **Doğru**',
      r`II. $a = -\omega^2 x$; $x = 0$ olduğundan ivme sıfırdır. **Yanlış**`,
      r`III. $F = -k\,x = 0$ **Doğru** $\Rightarrow$ Cevap **D**`,
    ],
  },

  // ───────────── ÜNİTE 3 · DALGA MEKANİĞİ ─────────────
  {
    id: '12-8',
    sinif: 12,
    tema: T3,
    ogrenmeCiktisi: 'FİZ.12.3.1',
    surecBileseni: 'Çift yarıkta saçak aralığını deney değişkenleriyle hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Young çift yarık deneyinde dalga boyu $500\ \text{nm}$ olan ışık kullanılıyor. Yarıklar arası uzaklık $0{,}5\ \text{mm}$, yarıklar ile perde arası uzaklık $1\ \text{m}$ olduğuna göre ardışık iki aydınlık saçak arasındaki uzaklık kaç milimetredir?`,
    svgDiyagram: svg(
      400, 240, 'Young çift yarık deney düzeneği ve perdedeki saçaklar',
      '<rect x="14" y="108" width="36" height="24" rx="4" class="f-k" stroke-width="2"/>',
      yazi(10, 152, 'ışık', { boy: 12 }),
      '<path d="M60 120 q6 -10 12 0 q6 10 12 0 q6 -10 12 0 q6 10 12 0 q6 -10 12 0" class="c-v" stroke-width="2"/>',
      cizgi(150, 30, 150, 104, { k: 5 }),
      cizgi(150, 114, 150, 126, { k: 5 }),
      cizgi(150, 136, 150, 210, { k: 5 }),
      yazi(150, 24, 'çift yarık', { boy: 13, hiza: 'middle' }),
      '<g class="k" stroke-width="1"><line x1="152" y1="109" x2="360" y2="60"/><line x1="152" y1="131" x2="360" y2="60"/><line x1="152" y1="109" x2="360" y2="180"/><line x1="152" y1="131" x2="360" y2="180"/></g>',
      cizgi(362, 30, 362, 210, { k: 3 }),
      '<g class="f-v" stroke="none"><rect x="364" y="56" width="10" height="8" rx="2"/><rect x="364" y="86" width="10" height="8" rx="2"/><rect x="364" y="116" width="10" height="8" rx="2"/><rect x="364" y="146" width="10" height="8" rx="2"/><rect x="364" y="176" width="10" height="8" rx="2"/></g>',
      yazi(372, 24, 'perde', { boy: 13, hiza: 'end' }),
      yazi(130, 124, 'd', { boy: 13, hiza: 'end' }),
      olcu(150, 228, 362, 228, 'L = 1 m', { dy: -8 }),
    ),
    secenekler: { A: r`$0{,}25$`, B: r`$0{,}5$`, C: '$1$', D: '$2$', E: '$4$' },
    dogruCevap: 'C',
    hesap: '500e-9 * 1 / 0.5e-3 * 1000',
    adimAdimCozum: [
      r`Saçak aralığı: $\Delta x = \dfrac{\lambda L}{d}$`,
      r`$\Delta x = \dfrac{500 \cdot 10^{-9} \cdot 1}{0{,}5 \cdot 10^{-3}} = 10^{-3}\ \text{m}$`,
      r`$\Delta x = 1\ \text{mm}$ $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-9',
    sinif: 12,
    tema: T3,
    ogrenmeCiktisi: 'FİZ.12.3.1',
    surecBileseni: 'Girişim deseninin değişkenlere bağlılığını analiz eder.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Young çift yarık deneyinde diğer koşullar sabit tutularak yalnızca,

I. yarıklar ile perde arasındaki uzaklığı artırmak,
II. yarıklar arasındaki uzaklığı artırmak,
III. dalga boyu daha büyük bir ışık kullanmak

işlemlerinden hangileri ayrı ayrı yapılırsa perdedeki saçak aralığı artar?`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'Yalnız III', D: 'I ve II', E: 'I ve III' },
    dogruCevap: 'E',
    adimAdimCozum: [
      r`$\Delta x = \dfrac{\lambda L}{d}$ bağıntısını inceleyelim.`,
      r`I. $L$ artarsa $\Delta x$ artar. II. $d$ artarsa $\Delta x$ azalır. III. $\lambda$ artarsa $\Delta x$ artar.`,
      r`Saçak aralığını I ve III artırır $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '12-10',
    sinif: 12,
    tema: T3,
    ogrenmeCiktisi: 'FİZ.12.3.2',
    surecBileseni: 'Elektromanyetik dalgaların özelliklerini ve spektrumdaki yerlerini karşılaştırır.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Elektromanyetik dalgalarla ilgili aşağıdaki ifadelerden hangisi doğrudur?`,
    secenekler: {
      A: 'Boşlukta ışık hızıyla yayılır ve yayılmak için ortama gerek duymaz',
      B: 'Radyo dalgalarının frekansı, gama ışınlarının frekansından büyüktür',
      C: 'Yalnızca sabit hızla hareket eden yüklü parçacıklar tarafından üretilir',
      D: 'Elektrik ve manyetik alan bileşenleri her zaman birbirine paralel titreşir',
      E: 'Mikrodalgaların boşluktaki hızı, görünür ışığın hızından daha küçüktür',
    },
    dogruCevap: 'A',
    adimAdimCozum: [
      r`EM dalgalar boşlukta $c = 3 \cdot 10^8\ \text{m/s}$ ile yayılır ve ortam gerektirmez (E yanlış, tüm EM dalgaların hızı aynıdır).`,
      'Gama ışınları spektrumun en yüksek frekanslı ucundadır (B yanlış). EM dalgalar ivmeli yüklerce üretilir (C yanlış).',
      r`Elektrik ve manyetik alanlar birbirine ve yayılma doğrultusuna diktir (D yanlış) $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '12-11',
    sinif: 12,
    tema: T3,
    ogrenmeCiktisi: 'FİZ.12.3.1',
    surecBileseni: 'Doppler olayını ses ve ışık dalgaları için günlük yaşam ve astronomi bağlamında yorumlar.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Ambulans ve Galaksiler:** Sireni çalan bir ambulans, kaldırımda duran Zeynep'e doğru yaklaşıp yanından geçerek uzaklaşıyor. Şekilde ambulansın yaydığı dalga tepeleri gösterilmiştir.

a) Zeynep ambulans yaklaşırken ve uzaklaşırken sireni nasıl duyar? Dalga tepeleri üzerinden açıklayınız.
b) Ambulanstaki sağlık görevlisi sirenin frekansında bir değişiklik algılar mı? Neden?
c) Gökbilimciler uzak galaksilerden gelen ışıkta "kırmızıya kayma" gözlemliyor. Bu gözlem evren hakkında ne söyler?`,
    svgDiyagram: svg(
      380, 220, 'Hareket eden kaynağın dalga tepeleri',
      '<circle cx="150" cy="110" r="100" stroke-width="2" class="c-i"/>',
      '<circle cx="170" cy="110" r="75" stroke-width="2" class="c-i"/>',
      '<circle cx="190" cy="110" r="50" stroke-width="2" class="c-i"/>',
      '<circle cx="210" cy="110" r="25" stroke-width="2" class="c-i"/>',
      '<rect x="212" y="100" width="30" height="20" rx="4" class="f-kv" stroke-width="2"/>',
      ok(246, 110, 290, 110, 'v'),
      '<circle cx="330" cy="110" r="8" class="f-t" stroke="none"/>',
      yazi(330, 140, 'Zeynep', { boy: 13, hiza: 'middle' }),
    ),
    dogruCevap: 'a) Yaklaşırken daha tiz (yüksek frekans), uzaklaşırken daha pes · b) Hayır, göreli hareket yok · c) Galaksiler bizden uzaklaşıyor; evren genişliyor',
    adimAdimCozum: [
      'a) Kaynak gözlemciye yaklaşırken dalga tepeleri sıkışır; dalga boyu kısalır, algılanan frekans artar (tiz ses). Uzaklaşırken tepeler seyrekleşir, frekans azalır (pes ses).',
      'b) Görevli kaynakla birlikte hareket ettiği için aralarında göreli hareket yoktur; sireni gerçek frekansında duyar.',
      'c) Kırmızıya kayma, ışığın dalga boyunun uzadığını gösterir; galaksiler bizden uzaklaşmaktadır. Bu, evrenin genişlediğinin (Büyük Patlama modelinin) kanıtlarındandır.',
    ],
    rubrik: [
      { olcut: 'Yaklaşma/uzaklaşmada frekans değişimini dalga tepeleriyle açıklama', puan: 4 },
      { olcut: 'Göreli hareketin önemini açıklama', puan: 2 },
      { olcut: 'Kırmızıya kaymayı evrenin genişlemesiyle ilişkilendirme', puan: 4 },
    ],
  },

  // ───────────── ÜNİTE 4 · ATOM FİZİĞİNE GİRİŞ VE RADYOAKTİVİTE ─────────────
  {
    id: '12-12',
    sinif: 12,
    tema: T4,
    ogrenmeCiktisi: 'FİZ.12.4.1',
    surecBileseni: 'Bohr atom modelinde enerji düzeyleri arasındaki geçişlerde yayımlanan foton enerjisini hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Hidrojen atomunun enerji düzeyleri şekilde verilmiştir. Atomdaki elektron $n = 3$ düzeyinden $n = 2$ düzeyine geçtiğinde yayımlanan fotonun enerjisi yaklaşık kaç elektronvolttur?`,
    svgDiyagram: svg(
      360, 230, 'Hidrojen atomunun enerji düzeyleri',
      cizgi(90, 30, 270, 30, { k: 2 }),
      cizgi(90, 60, 270, 60, { k: 2 }),
      cizgi(90, 80, 270, 80, { k: 2 }),
      cizgi(90, 118, 270, 118, { k: 2 }),
      cizgi(90, 205, 270, 205, { k: 3 }),
      yazi(82, 35, 'n = ∞', { boy: 12, hiza: 'end' }),
      yazi(82, 65, 'n = 4', { boy: 12, hiza: 'end' }),
      yazi(82, 85, 'n = 3', { boy: 12, hiza: 'end' }),
      yazi(82, 123, 'n = 2', { boy: 12, hiza: 'end' }),
      yazi(82, 210, 'n = 1', { boy: 12, hiza: 'end' }),
      yazi(278, 35, '0 eV', { boy: 12 }),
      yazi(278, 65, '−0,85 eV', { boy: 12 }),
      yazi(278, 85, '−1,51 eV', { boy: 12 }),
      yazi(278, 123, '−3,4 eV', { boy: 12 }),
      yazi(278, 210, '−13,6 eV', { boy: 12 }),
      ok(180, 80, 180, 118, 'v'),
    ),
    secenekler: { A: r`$1{,}51$`, B: r`$1{,}89$`, C: r`$3{,}4$`, D: r`$10{,}2$`, E: r`$12{,}09$` },
    dogruCevap: 'B',
    hesap: '13.6/4 - 13.6/9',
    adimAdimCozum: [
      r`Yayımlanan fotonun enerjisi, düzeyler arasındaki farka eşittir: $E_{foton} = E_3 - E_2$`,
      r`$E_{foton} = (-1{,}51) - (-3{,}4) = 1{,}89\ \text{eV}$`,
      r`Bu geçiş Balmer serisindeki kırmızı $H_\alpha$ çizgisidir $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-13',
    sinif: 12,
    tema: T4,
    ogrenmeCiktisi: 'FİZ.12.4.3',
    surecBileseni: 'Yarı ömür kavramını kullanarak bozunan madde miktarını hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Yarı ömrü $5$ gün olan radyoaktif bir maddeden başlangıçta $800\ \text{g}$ bulunuyor. $20$ gün sonunda maddenin kaç gramı bozunmuş olur?`,
    secenekler: { A: '$50$', B: '$100$', C: '$200$', D: '$400$', E: '$750$' },
    dogruCevap: 'E',
    hesap: '800 - 800 / 2**(20/5)',
    adimAdimCozum: [
      r`Geçen yarı ömür sayısı: $n = \dfrac{20}{5} = 4$`,
      r`Kalan madde: $m = \dfrac{800}{2^4} = \dfrac{800}{16} = 50\ \text{g}$`,
      r`Bozunan madde: $800 - 50 = 750\ \text{g}$ $\Rightarrow$ Cevap **E**`,
      r`Dikkat: $50\ \text{g}$ kalan miktardır (A çeldiricisi).`,
    ],
  },
  {
    id: '12-14',
    sinif: 12,
    tema: T4,
    ogrenmeCiktisi: 'FİZ.12.4.3',
    surecBileseni: 'Radyoaktif bozunma türlerini ve yarı ömrü bilimsel bir yaş tayini bağlamında kullanır.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Arkeoloji Kazısı:** Bir kazıda bulunan ahşap eserde karbon-14 miktarının, canlı bir ağaçtakinin $\tfrac{1}{8}$'i olduğu ölçülüyor. Karbon-14'ün yarı ömrü $5730$ yıldır. Şekilde radyoaktif madde miktarının zamanla değişimi verilmiştir.

a) Ahşap eserin yaşını hesaplayınız.
b) Karbon-14, beta ($\beta^-$) bozunmasıyla azot-14'e dönüşür. Bu bozunmada çekirdeğin kütle ve atom numarası nasıl değişir?
c) Alfa, beta ve gama ışınlarını giricilik (delme) güçlerine göre sıralayınız ve gama ışınının tıptaki bir kullanımını yazınız.`,
    svgDiyagram: svg(
      340, 230, 'Radyoaktif madde miktarının zamanla azalması',
      eksen(60, 200, 270, 180, 't', 'N'),
      '<path d="M60 40 C 100 110, 150 150, 310 186" class="c-v" stroke-width="4"/>',
      cizgi(60, 120, 112, 120, { sinif: 'k', k: 1.5 }),
      cizgi(112, 120, 112, 200, { sinif: 'k', k: 1.5 }),
      cizgi(60, 160, 168, 160, { sinif: 'k', k: 1.5 }),
      cizgi(168, 160, 168, 200, { sinif: 'k', k: 1.5 }),
      yazi(52, 45, 'N₀', { boy: 13, hiza: 'end' }),
      yazi(52, 125, 'N₀/2', { boy: 12, hiza: 'end' }),
      yazi(52, 165, 'N₀/4', { boy: 12, hiza: 'end' }),
      yazi(112, 218, 'T', { boy: 13, hiza: 'middle' }),
      yazi(168, 218, '2T', { boy: 13, hiza: 'middle' }),
    ),
    dogruCevap: r`a) $3$ yarı ömür $= 17\,190$ yıl · b) Kütle numarası değişmez, atom numarası $1$ artar · c) Alfa < beta < gama; kanser tedavisi/sterilizasyon`,
    adimAdimCozum: [
      r`a) $\left(\tfrac{1}{2}\right)^n = \tfrac{1}{8} \Rightarrow n = 3$ yarı ömür; yaş $= 3 \cdot 5730 = 17\,190$ yıl`,
      r`b) $\beta^-$ bozunmasında bir nötron protona dönüşür ve elektron yayımlanır: $^{14}_{6}\text{C} \rightarrow\ ^{14}_{7}\text{N} + e^- + \bar{\nu}$`,
      'Kütle numarası (14) değişmez, atom numarası 6’dan 7’ye çıkar.',
      'c) Giricilik: alfa (kâğıtla durur) < beta (alüminyum levha) < gama (kalın kurşun). Gama ışınları radyoterapide ve tıbbi malzemelerin sterilizasyonunda kullanılır.',
    ],
    rubrik: [
      { olcut: 'Yarı ömür sayısını ve yaşı doğru bulma', puan: 4 },
      { olcut: 'Beta bozunmasında sayıların değişimini açıklama', puan: 3 },
      { olcut: 'Giricilik sıralaması ve tıbbi kullanım', puan: 3 },
    ],
  },

  // ───────────── ÜNİTE 5 · MODERN FİZİK ─────────────
  {
    id: '12-15',
    sinif: 12,
    tema: T5,
    ogrenmeCiktisi: 'FİZ.12.5.3',
    surecBileseni: 'Fotoelektrik olayda enerji korunumunu kullanarak elektronların maksimum kinetik enerjisini hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bağlanma enerjisi (eşik enerjisi) $2{,}3\ \text{eV}$ olan bir metal yüzeye, enerjisi $4{,}5\ \text{eV}$ olan fotonlar düşürülüyor. Yüzeyden sökülen fotoelektronların maksimum kinetik enerjisi kaç elektronvolttur? Şekilde metal için maksimum kinetik enerjinin foton frekansına bağlı grafiği gösterilmiştir.`,
    svgDiyagram: svg(
      340, 230, 'Fotoelektronların maksimum kinetik enerjisinin frekansa bağlı grafiği',
      eksen(60, 170, 270, 150, 'f', 'Eₖ'),
      '<path d="M120 170 L300 50" class="c-v" stroke-width="4"/>',
      '<path d="M60 210 L120 170" class="c-v k" stroke-width="2"/>',
      cizgi(60, 170, 60, 214, { k: 2 }),
      yazi(120, 190, 'f₀', { boy: 13, hiza: 'middle' }),
      yazi(56, 214, '−2,3 eV', { boy: 12, hiza: 'end' }),
    ),
    secenekler: { A: r`$1{,}1$`, B: r`$2{,}2$`, C: r`$2{,}3$`, D: r`$4{,}5$`, E: r`$6{,}8$` },
    dogruCevap: 'B',
    hesap: '4.5 - 2.3',
    adimAdimCozum: [
      r`Einstein’ın fotoelektrik denklemi: $E_{foton} = E_{bağlanma} + E_{k,maks}$`,
      r`$E_{k,maks} = 4{,}5 - 2{,}3 = 2{,}2\ \text{eV}$ $\Rightarrow$ Cevap **B**`,
      'Grafikte doğrunun eğimi Planck sabitini, kesişim f₀ eşik frekansını, düşey eksendeki uzantısı da bağlanma enerjisini verir.',
    ],
  },
  {
    id: '12-16',
    sinif: 12,
    tema: T5,
    ogrenmeCiktisi: 'FİZ.12.5.3',
    surecBileseni: 'Işık şiddeti ve frekansın fotoelektrik olaya etkisini ayırt eder.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Fotoelektrik olayın gözlendiği bir deneyde, frekansı değiştirilmeden yüzeye düşen ışığın şiddeti artırılıyor.

I. Birim zamanda sökülen fotoelektron sayısı artar.
II. Fotoelektronların maksimum kinetik enerjisi artar.
III. Devreden geçen fotoelektrik akım artar.

yargılarından hangileri doğrudur?`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'II ve III' },
    dogruCevap: 'D',
    adimAdimCozum: [
      'Işık şiddeti, birim zamanda gelen foton sayısıdır; frekans ise her fotonun enerjisini belirler.',
      'I. Daha çok foton → daha çok elektron sökülür. **Doğru** III. Elektron sayısı artınca akım artar. **Doğru**',
      r`II. Maksimum kinetik enerji yalnızca frekansa bağlıdır; şiddet değiştirmez. **Yanlış** $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '12-17',
    sinif: 12,
    tema: T5,
    ogrenmeCiktisi: 'FİZ.12.5.4',
    surecBileseni: 'Işığın dalga ve tanecik modelleriyle açıklanan olayları sınıflandırır.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Aşağıdaki olaylardan hangisi ışığın **tanecik (foton) modeli** ile açıklanır?`,
    secenekler: {
      A: 'İnce sabun köpüğü üzerinde renkli desenlerin oluşması',
      B: 'Işığın çift yarıkta aydınlık ve karanlık saçaklar oluşturması',
      C: 'Compton saçılmasında fotonun dalga boyunun artması',
      D: 'Işığın dar bir aralıktan geçerken kenarlara doğru bükülmesi',
      E: 'Polarize gözlük camının yansıyan ışığın bir kısmını engellemesi',
    },
    dogruCevap: 'C',
    adimAdimCozum: [
      'Girişim (A, B), kırınım (D) ve kutuplanma (E) ışığın dalga modeliyle açıklanır.',
      'Compton saçılmasında foton, elektronla bilardo topları gibi çarpışır; momentum ve enerji aktarır.',
      r`Saçılan fotonun enerjisi azalır, dalga boyu artar — tanecik modeli $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-18',
    sinif: 12,
    tema: T5,
    ogrenmeCiktisi: 'FİZ.12.5.1',
    surecBileseni: 'Özel göreliliğin zaman genişlemesi sonucunu nicel olarak yorumlar.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Yıldızlararası Yolculuk:** Bir uzay aracı Dünya'ya göre $0{,}6c$ süratle hareket ediyor. Araçtaki astronotun saatine göre yolculuk $8$ yıl sürüyor.

a) Göreli faktör $\gamma = \dfrac{1}{\sqrt{1 - v^2/c^2}}$ değerini hesaplayınız.
b) Yolculuk Dünya'daki gözlemcilere göre kaç yıl sürer?
c) Atmosferin üst katmanlarında oluşan müonların, ömürleri çok kısa olduğu hâlde yeryüzüne ulaşabilmesini zaman genişlemesiyle açıklayınız.`,
    dogruCevap: r`a) $\gamma = 1{,}25$ · b) $10$ yıl · c) Yeryüzüne göre müonların ömrü uzar`,
    adimAdimCozum: [
      r`a) $\gamma = \dfrac{1}{\sqrt{1 - 0{,}36}} = \dfrac{1}{0{,}8} = 1{,}25$`,
      r`b) Hareketli saat yavaş işler: $\Delta t = \gamma\,\Delta t_0 = 1{,}25 \cdot 8 = 10$ yıl`,
      'c) Işık hızına yakın hareket eden müonların öz ömrü kısa olsa da yeryüzündeki gözlemciye göre ömürleri γ katı uzar; bu sürede atmosferi geçebilirler.',
    ],
    rubrik: [
      { olcut: 'Göreli faktörü doğru hesaplama', puan: 3 },
      { olcut: 'Dünya’ya göre süreyi bulma', puan: 4 },
      { olcut: 'Müon örneğini zaman genişlemesiyle açıklama', puan: 3 },
    ],
  },

  // ───────────── ÜNİTE 6 · MODERN FİZİĞİN TEKNOLOJİDEKİ UYGULAMALARI ─────────────
  {
    id: '12-19',
    sinif: 12,
    tema: T6,
    ogrenmeCiktisi: 'FİZ.12.6.2',
    surecBileseni: 'Modern teknolojik araçları dayandıkları fizik ilkeleriyle eşleştirir.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Aşağıdaki teknoloji – fizik ilkesi eşleştirmelerinden hangisi **doğrudur**?`,
    secenekler: {
      A: 'Güneş paneli – yarı iletken eklemlerde fotovoltaik etki',
      B: 'MR cihazı – radyoaktif bozunmayla vücut görüntüleme',
      C: 'Lazer – çekirdek bölünmesiyle ışık üretilmesi',
      D: 'Röntgen cihazı – Doppler olayıyla görüntü oluşumu',
      E: 'LED lamba – süper iletkenlerde dirençsiz akım',
    },
    dogruCevap: 'A',
    adimAdimCozum: [
      'Güneş panelleri, p-n eklemli yarı iletkenlerde fotonların elektron-boşluk çifti oluşturmasıyla (fotovoltaik etki) elektrik üretir.',
      'MR manyetik rezonans, lazer uyarılmış ışıma, röntgen X-ışınlarının dokularda farklı soğurulması, LED ise yarı iletkende elektron-boşluk birleşmesiyle çalışır.',
      r`Doğru eşleştirme güneş paneli – fotovoltaik etki $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '12-20',
    sinif: 12,
    tema: T6,
    ogrenmeCiktisi: 'FİZ.12.6.5',
    surecBileseni: 'Lazer ışığının özelliklerini ve teknolojik kullanım alanlarını değerlendirir.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Lazer Göz Ameliyatı:** Bir göz hastanesinde miyop tedavisi için lazer kullanılıyor. Hekim, lazer ışığının sıradan bir lambanın ışığından çok farklı olduğunu anlatıyor.

a) Lazer ışığını sıradan ışıktan ayıran üç temel özelliği yazınız.
b) "LASER" kısaltmasındaki uyarılmış ışıma sürecini kısaca açıklayınız.
c) Lazerin tıp dışında kullanıldığı iki alan yazınız ve lazer kullanırken alınması gereken bir güvenlik önlemini belirtiniz.`,
    dogruCevap: 'a) Tek renkli, eş fazlı (koherent), paralel/odaklanabilir · b) Uyarılmış atom, gelen fotonla aynı özellikte ikinci foton yayımlar · c) Fiber iletişim, barkod okuyucu, kesme/kaynak; koruyucu gözlük',
    adimAdimCozum: [
      'a) Lazer ışığı tek renklidir (tek dalga boyu), eş fazlıdır (koherent) ve çok az dağılan paralel bir demet oluşturur; bu yüzden küçük bir noktaya odaklanabilir.',
      'b) Uyarılmış durumdaki bir atoma uygun enerjili foton çarptığında atom, gelen fotonla aynı frekans, faz ve yönde ikinci bir foton yayımlar; aynalarla bu süreç çığ gibi büyütülür.',
      'c) Fiber optik iletişim, barkod okuyucular, metal kesme ve kaynak, mesafe ölçümü. Güvenlik: Lazer ışınına doğrudan bakmamak, uygun koruyucu gözlük kullanmak.',
    ],
    rubrik: [
      { olcut: 'Üç temel özelliği doğru yazma', puan: 3 },
      { olcut: 'Uyarılmış ışımayı doğru açıklama', puan: 4 },
      { olcut: 'Kullanım alanları ve güvenlik önlemi', puan: 3 },
    ],
  },
]
