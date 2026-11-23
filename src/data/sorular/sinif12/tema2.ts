import type { Soru } from '../../tipler.ts'
import { cizgi, ok, olcu, svg, tarama, yazi } from '../../cizim.ts'

const r = String.raw
const TEMA = 'Basit Harmonik Hareket'

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

const y1 = (n: number) => Math.round(n * 10) / 10

/** Düşey zikzak yay: x sütununda üst uçtan alt uca */
const yayDikey = (x: number, ust: number, alt: number, n = 6) => {
  const q = y1((alt - ust - 20) / (4 * n))
  let d = `M${x} ${ust} v10 l10 ${q}`
  for (let i = 0; i < 2 * n - 1; i++) d += ` l${i % 2 === 0 ? -20 : 20} ${y1(2 * q)}`
  d += ` l10 ${q} L${x} ${alt}`
  return `<path d="${d}" class="c-i" stroke-width="2.5" fill="none"/>`
}

/** Yatay zikzak yay: y satırında soldan sağa */
const yayYatay = (x0: number, x1: number, y: number, n = 6) => {
  const q = y1((x1 - x0 - 20) / (4 * n))
  let d = `M${x0} ${y} h10 l${q} -9`
  for (let i = 0; i < 2 * n - 1; i++) d += ` l${y1(2 * q)} ${i % 2 === 0 ? 18 : -18}`
  d += ` l${q} -9 L${x1} ${y}`
  return `<path d="${d}" class="c-i" stroke-width="2.5" fill="none"/>`
}

/** Grafik eğrisi: x0–x1 aralığında f(x) piksel değerlerinden kırık çizgi */
const egri = (x0: number, x1: number, f: (x: number) => number, n = 72) => {
  const p: string[] = []
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n
    p.push(`${y1(x)},${y1(f(x))}`)
  }
  return `<polyline points="${p.join(' ')}" class="c-v" stroke-width="3" fill="none"/>`
}

export const sorular: Soru[] = [
  {
    id: '12-5',
    sinif: 12,
    tema: TEMA,
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
    tema: TEMA,
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
    tema: TEMA,
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
  {
    id: '12-T2-01',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Düzgün çembersel hareketin çap üzerindeki izdüşümünü basit harmonik hareketle ilişkilendirerek en büyük sürati hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Yarıçapı $20\ \text{cm}$ olan çember üzerinde sabit süratle dolanan P noktası bir turunu $1{,}2\ \text{s}$'de tamamlıyor. P'nin yatay çap üzerindeki izdüşümü olan Q noktası basit harmonik hareket yapmaktadır.

Q noktasının ulaşabildiği en büyük sürat kaç m/s'dir? ($\pi = 3$)`,
    svgDiyagram: svg(
      340, 220, 'Çember üzerinde dolanan P noktası ve yatay çap üzerindeki izdüşümü Q',
      '<circle cx="130" cy="110" r="80" fill="none" stroke-width="2.5"/>',
      cizgi(30, 110, 240, 110, { k: 1.5 }),
      '<circle cx="130" cy="110" r="3" class="f-t"/>',
      cizgi(130, 110, 170, 40.7, { k: 1.5 }),
      cizgi(170, 48, 170, 110, { sinif: 'k', k: 1.5 }),
      '<circle cx="170" cy="40.7" r="7" class="f-i"/>',
      '<circle cx="170" cy="110" r="6" class="f-v"/>',
      '<path d="M42 110 A88 88 0 0 1 64 52" fill="none" class="c-v" stroke-width="2"/>',
      ok(60, 57, 67, 49, 'v', 2),
      yazi(180, 36, 'P', { boy: 14 }),
      yazi(176, 130, 'Q', { boy: 14 }),
      yazi(92, 130, 'r = 20 cm', { boy: 12, hiza: 'middle' }),
      yazi(250, 60, 'T = 1,2 s', { boy: 13 }),
    ),
    secenekler: { A: r`$0{,}2$`, B: r`$0{,}4$`, C: r`$0{,}6$`, D: r`$0{,}8$`, E: '$1$' },
    dogruCevap: 'E',
    hesap: '2*3/1.2*0.2',
    adimAdimCozum: [
      r`İzdüşümün genliği çemberin yarıçapına eşittir: $A = r = 0{,}2\ \text{m}$`,
      r`İzdüşüm, P ile aynı periyotla salınır: $\omega = \dfrac{2\pi}{T} = \dfrac{6}{1{,}2} = 5\ \text{rad/s}$`,
      r`En büyük sürat denge noktasında (çemberin merkezinin izdüşümünde) olur: $v_{max} = \omega A = 5 \cdot 0{,}2$`,
      r`$v_{max} = 1\ \text{m/s}$ $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '12-T2-02',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Basit sarkacın uç noktasındaki sürat, kuvvet ve ivme değerlerini denge noktasındakilerle karşılaştırır.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekildeki basit sarkacın topu, küçük açılarla K ve M uç noktaları arasında gidip gelmektedir; L, hareketin en alt noktasıdır.

Top M noktasındayken aşağıdaki niceliklerden hangisi hareket boyunca alabileceği en büyük değerdedir?`,
    svgDiyagram: svg(
      340, 215, 'K ve M uç noktaları arasında salınan basit sarkaç',
      cizgi(100, 24, 240, 24, { k: 3 }),
      tarama(110, 14, 130),
      cizgi(170, 24, 170, 163, { sinif: 'k', k: 1.5 }),
      cizgi(170, 24, 101, 144, { sinif: 'k', k: 1.5 }),
      cizgi(170, 24, 239, 144, { k: 2.5 }),
      '<circle cx="95" cy="154" r="11" class="f-k" stroke-width="2"/>',
      '<circle cx="170" cy="174" r="11" class="f-k" stroke-width="2"/>',
      '<circle cx="245" cy="154" r="12" class="f-kv" stroke-width="2.5"/>',
      yazi(95, 188, 'K', { hiza: 'middle', boy: 14 }),
      yazi(170, 206, 'L', { hiza: 'middle', boy: 14 }),
      yazi(245, 190, 'M', { hiza: 'middle', boy: 14 }),
    ),
    secenekler: {
      A: 'Topun sürati',
      B: 'Geri çağırıcı kuvvetin büyüklüğü',
      C: 'Topun kinetik enerjisi',
      D: 'İpteki gerilme kuvvetinin büyüklüğü',
      E: 'Merkezcil ivmenin büyüklüğü',
    },
    dogruCevap: 'B',
    adimAdimCozum: [
      'Uç noktada top anlık olarak durur; sürat, kinetik enerji ve merkezcil ivme ($v^2/L$) sıfırdır.',
      'İpteki gerilme en alt noktada en büyüktür; uç noktada en küçük değerini alır.',
      r`Geri çağırıcı kuvvet $F = mg\sin\theta$ ifadesiyle uzaklaşma açısı en büyük olduğunda, yani uç noktada en büyüktür $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-T2-03',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Düşey yay sarkacında dengedeki uzama miktarından yararlanarak periyodu hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Tavana asılı esnek bir yayın ucuna $m$ kütleli cisim takıldığında yay $40\ \text{cm}$ uzayarak dengeye geliyor. Cisim düşey doğrultuda biraz aşağı çekilip serbest bırakılıyor.

Cismin yaptığı basit harmonik hareketin periyodu kaç saniyedir? ($g = 10\ \text{m/s}^2$, $\pi = 3$; yayın kütlesi önemsiz)`,
    svgDiyagram: svg(
      340, 230, 'Tavana asılı yayın serbest ve cisim asılmış hâli',
      cizgi(60, 30, 300, 30, { k: 3 }),
      tarama(76, 20, 220),
      yayDikey(110, 30, 120, 5),
      yazi(110, 142, 'serbest', { hiza: 'middle', boy: 12 }),
      yayDikey(230, 30, 160, 6),
      '<rect x="205" y="160" width="50" height="40" rx="3" class="f-kv" stroke-width="2.5"/>',
      yazi(230, 185, 'm', { hiza: 'middle', boy: 14 }),
      cizgi(150, 120, 300, 120, { sinif: 'k', k: 1.5 }),
      olcu(285, 120, 285, 160, '40 cm'),
    ),
    secenekler: { A: r`$0{,}2$`, B: r`$0{,}4$`, C: r`$0{,}6$`, D: r`$0{,}8$`, E: r`$1{,}2$` },
    dogruCevap: 'E',
    hesap: '2*3*sqrt(0.4/10)',
    adimAdimCozum: [
      r`Dengede yay kuvveti ağırlığı dengeler: $k\,\Delta x = mg \Rightarrow \dfrac{m}{k} = \dfrac{\Delta x}{g}$`,
      r`$T = 2\pi\sqrt{\dfrac{m}{k}} = 2\pi\sqrt{\dfrac{\Delta x}{g}} = 2 \cdot 3 \cdot \sqrt{\dfrac{0{,}4}{10}}$`,
      r`$T = 6 \cdot 0{,}2 = 1{,}2\ \text{s}$ $\Rightarrow$ Cevap **E**`,
      'Kütle ya da yay sabiti ayrı ayrı bilinmese de oranları uzamadan bulunabilir.',
    ],
  },
  {
    id: '12-T2-04',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Seri ve paralel bağlı yaylardan oluşan yay sarkaçlarının periyotlarını karşılaştırır.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Yay sabitleri $k$ olan özdeş yaylar Şekil I'de uç uca (seri), Şekil II'de yan yana (paralel) bağlanmış ve iki düzeneğe de $m$ kütleli birer cisim asılmıştır. Cisimler düşey doğrultuda küçük genlikle titreştiriliyor.

Şekil I'deki periyodun Şekil II'dekine oranı $\dfrac{T_I}{T_{II}}$ kaçtır? (Yayların ve çubuğun kütlesi önemsiz)`,
    svgDiyagram: svg(
      380, 250, 'Seri ve paralel bağlı özdeş yaylara asılı m kütleli cisimler',
      cizgi(40, 30, 340, 30, { k: 3 }),
      tarama(56, 20, 280),
      yayDikey(100, 30, 105, 4),
      yayDikey(100, 105, 180, 4),
      '<circle cx="100" cy="105" r="3" class="f-t"/>',
      '<rect x="75" y="180" width="50" height="36" rx="3" class="f-kv" stroke-width="2.5"/>',
      yazi(100, 203, 'm', { hiza: 'middle', boy: 14 }),
      yazi(118, 72, 'k', { boy: 14 }),
      yazi(118, 148, 'k', { boy: 14 }),
      yayDikey(240, 30, 150, 6),
      yayDikey(300, 30, 150, 6),
      '<rect x="225" y="150" width="90" height="8" class="f-k" stroke-width="2"/>',
      cizgi(270, 158, 270, 170, { k: 2 }),
      '<rect x="245" y="170" width="50" height="36" rx="3" class="f-kv" stroke-width="2.5"/>',
      yazi(270, 193, 'm', { hiza: 'middle', boy: 14 }),
      yazi(212, 95, 'k', { boy: 14 }),
      yazi(318, 95, 'k', { boy: 14 }),
      yazi(100, 240, 'Şekil I', { hiza: 'middle', boy: 13 }),
      yazi(270, 240, 'Şekil II', { hiza: 'middle', boy: 13 }),
    ),
    secenekler: { A: '$4$', B: '$2$', C: r`$\sqrt{2}$`, D: '$1$', E: r`$\dfrac{1}{2}$` },
    dogruCevap: 'B',
    hesap: 'sqrt(2/0.5)',
    adimAdimCozum: [
      r`Seri bağlı iki özdeş yay: $\dfrac{1}{k_I} = \dfrac{1}{k} + \dfrac{1}{k} \Rightarrow k_I = \dfrac{k}{2}$`,
      r`Paralel bağlı iki özdeş yay: $k_{II} = k + k = 2k$`,
      r`$T = 2\pi\sqrt{\dfrac{m}{k}}$ olduğundan $\dfrac{T_I}{T_{II}} = \sqrt{\dfrac{k_{II}}{k_I}} = \sqrt{\dfrac{2k}{k/2}} = \sqrt{4}$`,
      r`$\dfrac{T_I}{T_{II}} = 2$ $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-T2-05',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'İvmeli hareket eden asansördeki basit sarkacın periyodunu etkin çekim ivmesiyle hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir asansörün tavanına asılmış $30\ \text{cm}$ uzunluğundaki basit sarkaç küçük açılarla salınmaktadır. Asansör aşağı yönde hareket ederken süratini $2{,}5\ \text{m/s}^2$ büyüklüğündeki ivmeyle artırmaktadır.

Asansördeki gözlemciye göre sarkacın periyodu kaç saniyedir? ($g = 10\ \text{m/s}^2$, $\pi = 3$)`,
    secenekler: { A: r`$0{,}6$`, B: r`$0{,}8$`, C: r`$0{,}9$`, D: '$1$', E: r`$1{,}2$` },
    dogruCevap: 'E',
    hesap: '2*3*sqrt(0.3/7.5)',
    adimAdimCozum: [
      r`Aşağı yönde hızlanan asansörde ivme aşağı yöndedir; asansördeki gözlemci için etkin çekim ivmesi azalır: $g_{et} = g - a = 10 - 2{,}5 = 7{,}5\ \text{m/s}^2$`,
      r`$T = 2\pi\sqrt{\dfrac{L}{g_{et}}} = 2 \cdot 3 \cdot \sqrt{\dfrac{0{,}3}{7{,}5}} = 6\sqrt{0{,}04}$`,
      r`$T = 6 \cdot 0{,}2 = 1{,}2\ \text{s}$ $\Rightarrow$ Cevap **E**`,
      r`Not: $g + a$ alınırsa yaklaşık $0{,}9\ \text{s}$ bulunur; bu, asansörün yukarı yönde hızlandığı duruma aittir.`,
    ],
  },
  {
    id: '12-T2-06',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Ölçülen salınım süresinden başka bir gök cismindeki çekim ivmesini hesaplar ve ip uzunluğu–periyot ilişkisini yorumlar.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Ay Yüzeyinde Sarkaç Deneyi:** Ay'a inen bir astronot, ip uzunluğu $40\ \text{cm}$ olan basit sarkacı küçük bir açıyla salındırıyor ve sarkacın $10$ tam salınımı $30\ \text{s}$'de tamamladığını kronometreyle ölçüyor. (Dünya'da $g = 10\ \text{m/s}^2$, $\pi = 3$)

a) Ay yüzeyindeki çekim ivmesini hesaplayınız.
b) Aynı sarkaç Dünya'da salındırılırsa periyodu kaç saniye olur?
c) Ay'da, Dünya'daki bu periyodun aynısını veren bir sarkaç yapmak için ip uzunluğu kaç cm olmalıdır? Sonucu yorumlayınız.`,
    dogruCevap: r`a) $g_{Ay} = 1{,}6\ \text{m/s}^2$ · b) $T = 1{,}2\ \text{s}$ · c) $L = 6{,}4\ \text{cm}$ (ip $6{,}25$ kat kısa olmalı)`,
    adimAdimCozum: [
      r`Periyot: $T = \dfrac{30}{10} = 3\ \text{s}$`,
      r`a) $T = 2\pi\sqrt{\dfrac{L}{g}} \Rightarrow g_{Ay} = \dfrac{4\pi^2 L}{T^2} = \dfrac{4 \cdot 9 \cdot 0{,}4}{9} = 1{,}6\ \text{m/s}^2$`,
      r`b) $T_{D} = 2 \cdot 3 \cdot \sqrt{\dfrac{0{,}4}{10}} = 6 \cdot 0{,}2 = 1{,}2\ \text{s}$`,
      r`c) $L = \dfrac{g_{Ay} T^2}{4\pi^2} = \dfrac{1{,}6 \cdot 1{,}44}{36} = 0{,}064\ \text{m} = 6{,}4\ \text{cm}$`,
      r`Yorum: Ay'da çekim ivmesi Dünya'dakinin $\dfrac{1}{6{,}25}$'i olduğundan aynı periyot için ip de aynı oranda kısaltılmalıdır ($L \propto g$).`,
    ],
    rubrik: [
      { olcut: 'Ölçümden periyodu doğru bulma (3 s)', puan: 2 },
      { olcut: 'Periyot bağıntısından Ay yüzeyindeki çekim ivmesini hesaplama', puan: 3 },
      { olcut: 'Dünya’daki periyodu hesaplama', puan: 2 },
      { olcut: 'Gerekli ip uzunluğunu bulma ve L ile g arasındaki doğru orantıyı yorumlama', puan: 3 },
    ],
  },
  {
    id: '12-T2-07',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Basit harmonik harekette kinetik ve potansiyel enerjinin konuma bağlı paylaşımını hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Sürtünmesiz yatay rayda yaya bağlı bir oyuncak vagon, $A$ genliğiyle basit harmonik hareket yapıyor. Vagon, denge noktasından $\dfrac{A}{2}$ kadar uzaktaki bir noktadan geçerken kinetik enerjisinin yayda depolanan esneklik potansiyel enerjisine oranı $\dfrac{E_K}{E_P}$ kaçtır?`,
    secenekler: { A: r`$\dfrac{1}{3}$`, B: '$1$', C: '$3$', D: '$4$', E: '$8$' },
    dogruCevap: 'C',
    hesap: '(1-0.25)/0.25',
    adimAdimCozum: [
      r`Toplam mekanik enerji uç noktadaki esneklik potansiyel enerjisine eşittir: $E = \dfrac{1}{2}kA^2$`,
      r`$x = \dfrac{A}{2}$ iken $E_P = \dfrac{1}{2}k\left(\dfrac{A}{2}\right)^2 = \dfrac{E}{4}$`,
      r`Enerji korunur: $E_K = E - E_P = \dfrac{3E}{4}$`,
      r`$\dfrac{E_K}{E_P} = \dfrac{3E/4}{E/4} = 3$ $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-T2-08',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Konum–zaman grafiğinden hız, ivme ve en büyük sürat hakkındaki yargıları değerlendirir.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir yaya bağlı cismin denge noktasına göre konumunun zamanla değişimi grafikteki gibidir.

I. $t = 1\ \text{s}$ anında cismin hızı sıfırdır.
II. $t = 2\ \text{s}$ anında cismin ivmesinin büyüklüğü en büyük değerindedir.
III. Cismin hareketi süresince ulaşabildiği en büyük sürat $0{,}3\ \text{m/s}$'dir.

yargılarından hangileri doğrudur? ($\pi = 3$)`,
    svgDiyagram: svg(
      380, 250, 'Basit harmonik hareket yapan cismin konum–zaman grafiği',
      ok(60, 235, 60, 20, 't', 2),
      ok(60, 125, 360, 125, 't', 2),
      cizgi(60, 45, 120, 45, { sinif: 'k', k: 1.2 }),
      cizgi(60, 205, 240, 205, { sinif: 'k', k: 1.2 }),
      egri(60, 300, (x) => 125 - 80 * Math.sin((Math.PI * (x - 60)) / 120)),
      yazi(54, 50, '0,2', { boy: 12, hiza: 'end' }),
      yazi(54, 210, '−0,2', { boy: 12, hiza: 'end' }),
      yazi(52, 140, '0', { boy: 12, hiza: 'end' }),
      yazi(120, 143, '1', { boy: 12, hiza: 'middle' }),
      yazi(176, 141, '2', { boy: 12, hiza: 'end' }),
      yazi(240, 117, '3', { boy: 12, hiza: 'middle' }),
      yazi(296, 117, '4', { boy: 12, hiza: 'end' }),
      yazi(68, 26, 'x (m)', { boy: 13 }),
      yazi(360, 145, 't (s)', { boy: 13, hiza: 'end' }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız III', C: 'I ve III', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'C',
    adimAdimCozum: [
      r`Grafikten genlik $A = 0{,}2\ \text{m}$, periyot $T = 4\ \text{s}$ okunur.`,
      r`I. $t = 1\ \text{s}$'de cisim $+A$ uç noktasındadır; uç noktada hız sıfırdır. **Doğru**`,
      r`II. $t = 2\ \text{s}$'de $x = 0$'dır; $a = -\omega^2 x$ olduğundan ivme sıfırdır. **Yanlış**`,
      r`III. $\omega = \dfrac{2\pi}{T} = \dfrac{6}{4} = 1{,}5\ \text{rad/s}$, $v_{max} = \omega A = 1{,}5 \cdot 0{,}2 = 0{,}3\ \text{m/s}$ **Doğru** $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-T2-09',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Çekim ivmesi farklı bir ortamda sarkaçlı saatin gösterdiği süreyi gerçek süreyle karşılaştırarak hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Dünya'da doğru zamanı gösteren sarkaçlı bir duvar saati, yüzeyindeki çekim ivmesi Dünya'dakinin $\dfrac{1}{4}$'ü olan bir gezegene götürülüyor. Saat gezegende çalıştırıldıktan sonra gerçekte $24$ saat geçtiğinde, saatin göstergesi kaç saatlik süre geçtiğini gösterir?

(Saatin sarkacı basit sarkaç gibi davranmaktadır.)`,
    secenekler: { A: '$3$', B: '$6$', C: '$8$', D: '$12$', E: '$48$' },
    dogruCevap: 'D',
    hesap: '24*sqrt(1/4)',
    adimAdimCozum: [
      r`$T = 2\pi\sqrt{\dfrac{L}{g}}$; çekim ivmesi $\dfrac{1}{4}$'üne inince periyot $\sqrt{4} = 2$ katına çıkar: $T' = 2T$`,
      r`Saat, her salınımda göstergeyi Dünya'daki periyot $T$ kadar ilerletir; yani salınım sayısını sayar.`,
      r`Gerçek $24$ saatte sarkaç Dünya'dakinin yarısı kadar salınım yapar; gösterge $24 \cdot \dfrac{1}{2}$ saat ilerler.`,
      r`Gösterilen süre $12$ saat (saat geri kalır) $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '12-T2-10',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Hız–zaman grafiğinden en büyük sürat ve periyodu okuyarak hareketin genliğini hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Sürtünmesiz yatay düzlemde titreşen yay–cisim sisteminde cismin hızı bir sensörle ölçülerek şekildeki grafik elde edilmiştir.

Buna göre cismin salınım genliği kaç metredir? ($\pi = 3$)`,
    svgDiyagram: svg(
      360, 240, 'Yay–cisim sisteminin hız–zaman grafiği',
      ok(60, 225, 60, 20, 't', 2),
      ok(60, 125, 340, 125, 't', 2),
      cizgi(60, 200, 180, 200, { sinif: 'k', k: 1.2 }),
      egri(60, 300, (x) => 125 - 75 * Math.cos((Math.PI * (x - 60)) / 120)),
      yazi(54, 54, '0,6', { boy: 12, hiza: 'end' }),
      yazi(54, 205, '−0,6', { boy: 12, hiza: 'end' }),
      yazi(116, 142, '0,5', { boy: 12, hiza: 'end' }),
      yazi(180, 117, '1', { boy: 12, hiza: 'middle' }),
      yazi(236, 117, '1,5', { boy: 12, hiza: 'end' }),
      yazi(300, 143, '2', { boy: 12, hiza: 'middle' }),
      yazi(68, 26, 'v (m/s)', { boy: 13 }),
      yazi(340, 112, 't (s)', { boy: 13, hiza: 'end' }),
    ),
    secenekler: { A: r`$0{,}2$`, B: r`$0{,}3$`, C: r`$0{,}6$`, D: r`$1{,}2$`, E: r`$1{,}8$` },
    dogruCevap: 'A',
    hesap: '0.6/(2*3/2)',
    adimAdimCozum: [
      r`Grafikten en büyük sürat $v_{max} = 0{,}6\ \text{m/s}$ ve periyot $T = 2\ \text{s}$ okunur.`,
      r`$\omega = \dfrac{2\pi}{T} = \dfrac{6}{2} = 3\ \text{rad/s}$`,
      r`$v_{max} = \omega A \Rightarrow A = \dfrac{0{,}6}{3} = 0{,}2\ \text{m}$ $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '12-T2-11',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'İvme–konum grafiğinin eğiminden açısal frekansı bularak yay sabitini hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Kütlesi $2\ \text{kg}$ olan bir cisim, yatay düzlemde yaya bağlı olarak basit harmonik hareket yapmaktadır. Cismin ivmesinin denge noktasına göre konuma bağlı grafiği şekildeki gibidir.

Yayın yay sabiti kaç N/m'dir? (Sürtünmeler önemsiz)`,
    svgDiyagram: svg(
      340, 240, 'Basit harmonik harekette ivme–konum grafiği',
      ok(40, 125, 320, 125, 't', 2),
      ok(190, 230, 190, 20, 't', 2),
      cizgi(110, 45, 190, 45, { sinif: 'k', k: 1.2 }),
      cizgi(110, 45, 110, 125, { sinif: 'k', k: 1.2 }),
      cizgi(190, 205, 270, 205, { sinif: 'k', k: 1.2 }),
      cizgi(270, 125, 270, 205, { sinif: 'k', k: 1.2 }),
      cizgi(110, 45, 270, 205, { sinif: 'c-v', k: 3 }),
      yazi(196, 50, '5', { boy: 12 }),
      yazi(184, 210, '−5', { boy: 12, hiza: 'end' }),
      yazi(270, 117, '0,2', { boy: 12, hiza: 'middle' }),
      yazi(110, 143, '−0,2', { boy: 12, hiza: 'middle' }),
      yazi(198, 26, 'a (m/s²)', { boy: 13 }),
      yazi(320, 145, 'x (m)', { boy: 13, hiza: 'end' }),
    ),
    secenekler: { A: '$25$', B: '$50$', C: '$100$', D: '$200$', E: '$500$' },
    dogruCevap: 'B',
    hesap: '2*5/0.2',
    adimAdimCozum: [
      r`BHH'de $a = -\omega^2 x$; grafiğin eğiminin büyüklüğü $\omega^2$'yi verir: $\omega^2 = \dfrac{5}{0{,}2} = 25\ \text{s}^{-2}$`,
      r`Newton'un ikinci yasası: $-kx = ma = -m\omega^2 x \Rightarrow k = m\omega^2$`,
      r`$k = 2 \cdot 25 = 50\ \text{N/m}$ $\Rightarrow$ Cevap **B**`,
      r`Kütle hesaba katılmazsa $25$ bulunur; bu, yay sabiti değil $\omega^2$ değeridir.`,
    ],
  },
  {
    id: '12-T2-12',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Paralel bağlı yay modelinden eşdeğer yay sabitini ve salınım periyodunu hesaplayarak kütle değişiminin etkisini açıklar.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Otomobil Süspansiyonu:** Kütlesi $960\ \text{kg}$ olan bir otomobilin gövdesi, aynı yay sabitine sahip dört yay üzerine oturmaktadır; yaylar gövdeyi birlikte taşıdığı için paralel bağlı kabul edilebilir. Toplam kütlesi $240\ \text{kg}$ olan dört yolcu araca bindiğinde gövde $2\ \text{cm}$ aşağı iniyor. ($g = 10\ \text{m/s}^2$, $\pi = 3$; amortisörlerin etkisi ve tekerleklerin kütlesi önemsiz)

a) Dört yayın eşdeğer yay sabitini ve bir yayın yay sabitini bulunuz.
b) Yolcularla birlikte gövde düşey doğrultuda salınırsa periyodu kaç saniye olur?
c) Yolcular indikten sonra gövdenin salınım periyodu artar mı, azalır mı? Gerekçesiyle açıklayınız.`,
    dogruCevap: r`a) $k_{es} = 1{,}2 \cdot 10^{5}\ \text{N/m}$, tek yay $3 \cdot 10^{4}\ \text{N/m}$ · b) $T = 0{,}6\ \text{s}$ · c) Azalır ($T \propto \sqrt{m}$)`,
    adimAdimCozum: [
      r`a) Yolcuların ağırlığı ek sıkışmayı oluşturur: $k_{es} = \dfrac{m_y g}{\Delta x} = \dfrac{240 \cdot 10}{0{,}02} = 1{,}2 \cdot 10^{5}\ \text{N/m}$`,
      r`Paralel bağlı dört özdeş yay: $k_{es} = 4k \Rightarrow k = 3 \cdot 10^{4}\ \text{N/m}$`,
      r`b) Salınan toplam kütle $960 + 240 = 1200\ \text{kg}$: $T = 2\pi\sqrt{\dfrac{1200}{1{,}2 \cdot 10^{5}}} = 6\sqrt{0{,}01} = 0{,}6\ \text{s}$`,
      r`c) Yay sabiti değişmez, salınan kütle $960\ \text{kg}$'a iner. $T \propto \sqrt{m}$ olduğundan periyot azalır: $T' = 6\sqrt{0{,}008} \approx 0{,}54\ \text{s}$`,
    ],
    rubrik: [
      { olcut: 'Ek sıkışmadan eşdeğer yay sabitini bulma', puan: 2 },
      { olcut: 'Paralel bağlantıdan tek yayın sabitini bulma', puan: 2 },
      { olcut: 'Toplam kütleyle periyodu hesaplama', puan: 3 },
      { olcut: 'Kütle azalınca periyodun azaldığını T ∝ √m ilişkisiyle gerekçelendirme', puan: 3 },
    ],
  },
  {
    id: '12-T2-13',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'İp uzunluğu ve çekim ivmesinin birlikte değiştiği durumda basit sarkacın yeni periyodunu hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Dünya'da periyodu $2\ \text{s}$ olan bir basit sarkacın ip uzunluğu $4$ katına çıkarılıyor. Sarkaç daha sonra yüzeyindeki çekim ivmesi Dünya'dakinin yarısı olan bir gezegene götürülüp küçük açılarla salındırılıyor.

Sarkacın gezegendeki periyodu kaç saniyedir?`,
    secenekler: { A: r`$2\sqrt{2}$`, B: r`$4\sqrt{2}$`, C: '$8$', D: r`$8\sqrt{2}$`, E: '$16$' },
    dogruCevap: 'B',
    hesap: '2*sqrt(4*2)',
    adimAdimCozum: [
      r`$T = 2\pi\sqrt{\dfrac{L}{g}}$ olduğundan $\dfrac{T'}{T} = \sqrt{\dfrac{L'}{L} \cdot \dfrac{g}{g'}}$`,
      r`$\dfrac{T'}{T} = \sqrt{4 \cdot 2} = \sqrt{8} = 2\sqrt{2}$`,
      r`$T' = 2 \cdot 2\sqrt{2} = 4\sqrt{2}\ \text{s}$ $\Rightarrow$ Cevap **B**`,
      r`Yalnızca çekim ivmesinin etkisi düşünülürse $2\sqrt{2}$, yalnızca ipin etkisi düşünülürse $4$ bulunur; iki etki birlikte çarpılmalıdır.`,
    ],
  },
  {
    id: '12-T2-14',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Genlik değişiminin yay sarkacının periyot, sürat ve enerjisine etkisini yorumlar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir öğrenci, sürtünmesiz hava rayında yaya bağlı kızağı önce denge noktasından $5\ \text{cm}$ çekip bırakıyor; ikinci denemede aynı kızağı $10\ \text{cm}$ çekip bırakıyor. İkinci denemede birinciye göre,

I. salınım periyodu değişmez,
II. kızağın denge noktasından geçerken sahip olduğu sürat 2 katına çıkar,
III. sistemin toplam mekanik enerjisi 4 katına çıkar

yargılarından hangileri doğrudur?`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'I, II ve III' },
    dogruCevap: 'E',
    adimAdimCozum: [
      r`I. $T = 2\pi\sqrt{\dfrac{m}{k}}$; periyot genliğe bağlı değildir. **Doğru**`,
      r`II. $v_{max} = \omega A$; $\omega$ değişmediğinden genlik 2 katına çıkınca en büyük sürat de 2 katına çıkar. **Doğru**`,
      r`III. $E = \dfrac{1}{2}kA^2$; genlik 2 kat olunca enerji $2^2 = 4$ kat olur. **Doğru** $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '12-T2-15',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Kesilen yay parçalarının yay sabitini belirleyip paralel bağlanmaları durumunda periyodu hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Yay sabiti $k$ olan bir yaya bağlanan cisim, sürtünmesiz yatay düzlemde $1{,}6\ \text{s}$ periyotla salınıyor (Şekil I). Yay tam ortasından kesilerek iki eşit parçaya ayrılıyor ve bu parçalar aynı cisme Şekil II'deki gibi yan yana bağlanıyor.

Şekil II'deki düzenekte cismin salınım periyodu kaç saniyedir?`,
    svgDiyagram: svg(
      380, 240, 'Tek yaylı düzenek ve ortadan kesilen yayın iki parçasıyla kurulan düzenek',
      cizgi(40, 20, 40, 100, { k: 3 }),
      tarama(40, 20, 80, false),
      cizgi(40, 100, 330, 100, { k: 2 }),
      yayYatay(40, 200, 72, 8),
      '<rect x="200" y="45" width="50" height="55" rx="3" class="f-kv" stroke-width="2.5"/>',
      yazi(225, 78, 'm', { hiza: 'middle', boy: 14 }),
      yazi(120, 52, 'k', { hiza: 'middle', boy: 14 }),
      yazi(305, 70, 'Şekil I', { hiza: 'middle', boy: 13 }),
      cizgi(40, 130, 40, 230, { k: 3 }),
      tarama(40, 130, 100, false),
      cizgi(40, 230, 330, 230, { k: 2 }),
      yayYatay(40, 120, 162, 4),
      yayYatay(40, 120, 207, 4),
      '<rect x="120" y="145" width="55" height="85" rx="3" class="f-kv" stroke-width="2.5"/>',
      yazi(147, 193, 'm', { hiza: 'middle', boy: 14 }),
      yazi(305, 190, 'Şekil II', { hiza: 'middle', boy: 13 }),
    ),
    secenekler: { A: r`$0{,}4$`, B: r`$0{,}8$`, C: r`$1{,}6$`, D: r`$3{,}2$`, E: r`$6{,}4$` },
    dogruCevap: 'B',
    hesap: '1.6*sqrt(1/4)',
    adimAdimCozum: [
      r`Yay sabiti yay uzunluğuyla ters orantılıdır; yarı uzunluktaki her parçanın yay sabiti $2k$ olur.`,
      r`Yan yana (paralel) bağlı iki parça: $k_{es} = 2k + 2k = 4k$`,
      r`$T \propto \dfrac{1}{\sqrt{k}} \Rightarrow T' = 1{,}6 \cdot \sqrt{\dfrac{k}{4k}} = \dfrac{1{,}6}{2}$`,
      r`$T' = 0{,}8\ \text{s}$ $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-T2-16',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Konum–zaman verisinden yay sabitini, en büyük sürat ve ivmeyi ve toplam mekanik enerjiyi hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Hareket Sensörüyle Titreşim Kaydı:** Fizik laboratuvarında $200\ \text{g}$ kütleli bir araba yatay rayda bir yaya bağlanıyor, denge konumundan $5\ \text{cm}$ çekilip $t = 0$ anında serbest bırakılıyor. Hareket sensörünün kaydettiği konum–zaman grafiği şekilde verilmiştir. ($\pi = 3$; sürtünmeler önemsiz)

a) Grafikten periyodu okuyarak yayın yay sabitini hesaplayınız.
b) Arabanın en büyük sürat ve en büyük ivme değerlerini bulunuz; bu değerlere hangi konumlarda ulaşıldığını belirtiniz.
c) Sistemin toplam mekanik enerjisini hesaplayınız.`,
    svgDiyagram: svg(
      380, 240, 'Hareket sensörüyle kaydedilen konum–zaman grafiği',
      ok(60, 215, 60, 20, 't', 2),
      ok(60, 120, 362, 120, 't', 2),
      cizgi(60, 180, 120, 180, { sinif: 'k', k: 1.2 }),
      egri(60, 300, (x) => 120 - 60 * Math.cos((Math.PI * (x - 60)) / 60), 96),
      yazi(54, 64, '5', { boy: 12, hiza: 'end' }),
      yazi(54, 185, '−5', { boy: 12, hiza: 'end' }),
      yazi(120, 113, '0,3', { boy: 12, hiza: 'middle' }),
      yazi(180, 138, '0,6', { boy: 12, hiza: 'middle' }),
      yazi(240, 113, '0,9', { boy: 12, hiza: 'middle' }),
      yazi(300, 138, '1,2', { boy: 12, hiza: 'middle' }),
      yazi(68, 26, 'x (cm)', { boy: 13 }),
      yazi(362, 140, 't (s)', { boy: 13, hiza: 'end' }),
    ),
    dogruCevap: r`a) $T = 0{,}6\ \text{s}$, $k = 20\ \text{N/m}$ · b) $v_{max} = 0{,}5\ \text{m/s}$ (denge noktası), $a_{max} = 5\ \text{m/s}^2$ (uç noktalar) · c) $E = 0{,}025\ \text{J}$`,
    adimAdimCozum: [
      r`a) Grafikte bir tam salınım $0{,}6\ \text{s}$ sürer: $\omega = \dfrac{2\pi}{T} = \dfrac{6}{0{,}6} = 10\ \text{rad/s}$; $k = m\omega^2 = 0{,}2 \cdot 100 = 20\ \text{N/m}$`,
      r`b) $v_{max} = \omega A = 10 \cdot 0{,}05 = 0{,}5\ \text{m/s}$; bu değere denge noktasında ($x = 0$) ulaşılır.`,
      r`$a_{max} = \omega^2 A = 100 \cdot 0{,}05 = 5\ \text{m/s}^2$; bu değere uç noktalarda ($x = \pm 5\ \text{cm}$) ulaşılır.`,
      r`c) $E = \dfrac{1}{2}kA^2 = \dfrac{1}{2} \cdot 20 \cdot (0{,}05)^2 = 0{,}025\ \text{J}$ (kontrol: $\dfrac{1}{2}m v_{max}^2 = \dfrac{1}{2} \cdot 0{,}2 \cdot 0{,}25 = 0{,}025\ \text{J}$)`,
    ],
    rubrik: [
      { olcut: 'Grafikten periyodu okuyup açısal frekansı bulma', puan: 2 },
      { olcut: 'Yay sabitini hesaplama', puan: 2 },
      { olcut: 'En büyük sürati bulma ve denge noktasında olduğunu belirtme', puan: 2 },
      { olcut: 'En büyük ivmeyi bulma ve uç noktalarda olduğunu belirtme', puan: 2 },
      { olcut: 'Toplam mekanik enerjiyi hesaplama', puan: 2 },
    ],
  },
  {
    id: '12-T2-17',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Düzgün çembersel hareketin izdüşümü olan basit harmonik hareketin özelliklerini ayırt eder.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Düzgün çembersel hareket yapan bir noktanın, çemberin bir çapı üzerindeki gölgesi (izdüşümü) ileri geri salınır.

Bu izdüşümün hareketiyle ilgili aşağıdaki ifadelerden hangisi doğrudur?`,
    secenekler: {
      A: 'İzdüşümün sürati her konumda aynıdır.',
      B: 'İzdüşümün ivmesi çemberin merkezinde en büyüktür.',
      C: 'İzdüşüm ile nokta aynı periyotla hareket eder.',
      D: 'İzdüşümün genliği çemberin çapına eşittir.',
      E: 'İzdüşümün hızı uç noktalarda en büyük değerdedir.',
    },
    dogruCevap: 'C',
    adimAdimCozum: [
      'Nokta bir tur attığında izdüşüm de bir tam salınım yapar; periyotları eşittir.',
      'Genlik çapın yarısına (yarıçapa) eşittir; izdüşümün sürati merkezde en büyük, uçlarda sıfırdır.',
      r`İvme ise $a = -\omega^2 x$ olduğundan merkezde sıfır, uçlarda en büyüktür $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-T2-18',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Enerji korunumunu kullanarak basit harmonik hareket yapan bloğun herhangi bir konumdaki süratini hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Yay sabiti $200\ \text{N/m}$ olan yaya bağlı $0{,}5\ \text{kg}$ kütleli blok, sürtünmesiz yatay düzlemde $10\ \text{cm}$ genlikle basit harmonik hareket yapıyor.

Blok denge noktasından $6\ \text{cm}$ uzaktayken süratinin büyüklüğü kaç m/s'dir?`,
    svgDiyagram: svg(400, 250, 'Yatay düzlemde 10 cm genlikle salınan yay–blok sistemi', yayKutle('k = 200 N/m', '0,5 kg')),
    secenekler: { A: r`$1{,}2$`, B: r`$1{,}6$`, C: '$2$', D: r`$2{,}4$`, E: r`$3{,}2$` },
    dogruCevap: 'B',
    hesap: 'sqrt(200/0.5*(0.1*0.1-0.06*0.06))',
    adimAdimCozum: [
      r`Mekanik enerji korunur: $\dfrac{1}{2}kA^2 = \dfrac{1}{2}kx^2 + \dfrac{1}{2}mv^2$`,
      r`$v^2 = \dfrac{k}{m}\left(A^2 - x^2\right) = 400 \cdot (0{,}01 - 0{,}0036) = 400 \cdot 0{,}0064 = 2{,}56$`,
      r`$v = 1{,}6\ \text{m/s}$ $\Rightarrow$ Cevap **B**`,
      r`Denge noktasındaki en büyük sürat $\omega A = 20 \cdot 0{,}1 = 2\ \text{m/s}$ olup bulunan değer bundan küçüktür.`,
    ],
  },
  {
    id: '12-T2-19',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.2.1',
    surecBileseni: 'Salıncağı basit sarkaç olarak modelleyip periyodun kütle ve ip uzunluğuna bağlılığını açıklar.',
    zorluk: 'Temel',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Parktaki Salıncak:** Bir parktaki salıncağın oturağı, üst çubuğa bağlı $3{,}6\ \text{m}$ uzunluğundaki zincirlerle asılıdır. Oturağa binen çocuk ve oturak, küçük açılarla salınan bir basit sarkaç gibi düşünülebilir. ($g = 10\ \text{m/s}^2$, $\pi = 3$)

a) Salıncağın periyodunu hesaplayınız.
b) Çocuğun yerine kütlesi iki katı olan babası oturursa periyot nasıl değişir? Açıklayınız.
c) Zincirler kısaltılarak uzunluk $1{,}6\ \text{m}$ yapılırsa yeni periyot kaç saniye olur?`,
    dogruCevap: r`a) $T = 3{,}6\ \text{s}$ · b) Değişmez (periyot kütleye bağlı değil) · c) $T' = 2{,}4\ \text{s}$`,
    adimAdimCozum: [
      r`a) $T = 2\pi\sqrt{\dfrac{L}{g}} = 2 \cdot 3 \cdot \sqrt{\dfrac{3{,}6}{10}} = 6 \cdot 0{,}6 = 3{,}6\ \text{s}$`,
      r`b) Bağıntıda kütle yer almaz; geri çağırıcı kuvvet ($mg\sin\theta$) ve eylemsizlik kütleyle aynı oranda artar. Periyot değişmez.`,
      r`c) $T' = 6 \cdot \sqrt{\dfrac{1{,}6}{10}} = 6 \cdot 0{,}4 = 2{,}4\ \text{s}$; ip kısaldıkça salıncak daha sık gidip gelir.`,
    ],
    rubrik: [
      { olcut: 'Basit sarkaç bağıntısıyla periyodu doğru hesaplama', puan: 4 },
      { olcut: 'Periyodun kütleden bağımsız olduğunu gerekçesiyle açıklama', puan: 3 },
      { olcut: 'Kısaltılmış zincirle yeni periyodu hesaplama', puan: 3 },
    ],
  },
]
