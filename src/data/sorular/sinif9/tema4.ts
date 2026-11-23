import type { Soru } from '../../tipler.ts'
import { cizgi, eksen, ok, olcu, svg, yazi } from '../../cizim.ts'

const r = String.raw
const TEMA = 'Enerji'

/** Dikey sıvılı termometre: x merkez, sivi = sıvı sütununun üst ucu (y) */
const termometre = (x: number, sivi: number) =>
  `<rect x="${x - 12}" y="30" width="24" height="176" rx="12" stroke-width="2.5"/>` +
  `<rect x="${x - 6}" y="${sivi}" width="12" height="${206 - sivi}" class="f-s" stroke="none"/>` +
  `<circle cx="${x}" cy="214" r="16" class="f-s" stroke-width="2.5"/>`

export const sorular: Soru[] = [
  {
    id: '9-16',
    sinif: 9,
    tema: TEMA,
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
    tema: TEMA,
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
    tema: TEMA,
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
    tema: TEMA,
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
    tema: TEMA,
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
  {
    id: '9-T4-01',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.2',
    surecBileseni: 'Celsius ölçeğinde verilen bir sıcaklığı Fahrenheit ölçeğine dönüştürür.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`ABD'de yayımlanan bir hava durumu bülteninde sıcaklıklar Fahrenheit ölçeğiyle veriliyor. Ankara'da termometrenin $25\ ^\circ\text{C}$ gösterdiği bir günde aynı hava sıcaklığı bu bültende kaç $^\circ\text{F}$ olarak yazılır?

(Suyun donma noktası $32\ ^\circ\text{F}$, kaynama noktası $212\ ^\circ\text{F}$'tır.)`,
    svgDiyagram: svg(
      340, 250, 'Celsius ve Fahrenheit termometreleri',
      termometre(110, 147),
      termometre(230, 147),
      cizgi(92, 50, 98, 50), cizgi(92, 180, 98, 180), cizgi(92, 147, 98, 147),
      cizgi(242, 50, 248, 50), cizgi(242, 180, 248, 180), cizgi(242, 147, 248, 147),
      cizgi(122, 147, 218, 147, { sinif: 'k', k: 1.5 }),
      yazi(88, 54, '100 °C', { boy: 13, hiza: 'end' }),
      yazi(88, 151, '25 °C', { boy: 13, hiza: 'end' }),
      yazi(88, 184, '0 °C', { boy: 13, hiza: 'end' }),
      yazi(252, 54, '212 °F', { boy: 13 }),
      yazi(252, 151, '?', { boy: 14 }),
      yazi(252, 184, '32 °F', { boy: 13 }),
      yazi(110, 246, 'Celsius', { boy: 13, hiza: 'middle' }),
      yazi(230, 246, 'Fahrenheit', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: '$45$', B: '$77$', C: '$86$', D: '$95$', E: '$102$' },
    dogruCevap: 'B',
    hesap: '25 * 180 / 100 + 32',
    adimAdimCozum: [
      r`Donma–kaynama arası Celsius'ta $100$, Fahrenheit'ta $212 - 32 = 180$ bölmedir.`,
      r`Orantı: $\dfrac{T_C - 0}{100} = \dfrac{T_F - 32}{180}$`,
      r`$\dfrac{25}{100} = \dfrac{T_F - 32}{180} \Rightarrow T_F - 32 = 45$`,
      r`$T_F = 77\ ^\circ\text{F}$ ($45$ yanıtı, $32$'yi eklemeyi unutan öğrencinin hatasıdır.) $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '9-T4-02',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.2',
    surecBileseni: 'Sabit noktaları verilen özel bir termometre ölçeği ile Celsius ölçeği arasında dönüşüm yapar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir öğrenci kendi tasarladığı X termometresini kalibre ediyor. Bu termometre deniz seviyesinde buzun eridiği sıcaklıkta $-20\ ^\circ\text{X}$, suyun kaynadığı sıcaklıkta $180\ ^\circ\text{X}$ değerini gösteriyor.

Celsius termometresinin $40\ ^\circ\text{C}$ gösterdiği bir sıvıya daldırılan X termometresi kaç $^\circ\text{X}$ gösterir?`,
    svgDiyagram: svg(
      340, 250, 'Celsius ve X termometreleri',
      termometre(110, 128),
      termometre(230, 128),
      cizgi(92, 50, 98, 50), cizgi(92, 180, 98, 180), cizgi(92, 128, 98, 128),
      cizgi(242, 50, 248, 50), cizgi(242, 180, 248, 180), cizgi(242, 128, 248, 128),
      cizgi(122, 128, 218, 128, { sinif: 'k', k: 1.5 }),
      yazi(88, 54, '100 °C', { boy: 13, hiza: 'end' }),
      yazi(88, 132, '40 °C', { boy: 13, hiza: 'end' }),
      yazi(88, 184, '0 °C', { boy: 13, hiza: 'end' }),
      yazi(252, 54, '180 °X', { boy: 13 }),
      yazi(252, 132, '?', { boy: 14 }),
      yazi(252, 184, '−20 °X', { boy: 13 }),
      yazi(110, 246, 'Celsius', { boy: 13, hiza: 'middle' }),
      yazi(230, 246, 'X', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: '$20$', B: '$30$', C: '$40$', D: '$50$', E: '$60$' },
    dogruCevap: 'E',
    hesap: '-20 + 40 * 200 / 100',
    adimAdimCozum: [
      r`X ölçeğinde donma ile kaynama arası $180 - (-20) = 200$ bölmedir; Celsius'ta $100$ bölmedir.`,
      r`$\dfrac{T_C - 0}{100} = \dfrac{T_X - (-20)}{200}$`,
      r`$\dfrac{40}{100} = \dfrac{T_X + 20}{200} \Rightarrow T_X + 20 = 80$`,
      r`$T_X = 60\ ^\circ\text{X}$ $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '9-T4-03',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.1',
    surecBileseni: 'Sıcaklığı tanecik hareketiyle ilişkilendirerek iç enerjiden ayırt eder.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Aynı sıcaklıktaki bir damla su ile bir yüzme havuzunu dolduran su karşılaştırılıyor.

Bu iki su örneği için aşağıdaki büyüklüklerden hangisi **kesinlikle eşittir**?`,
    secenekler: {
      A: 'Su moleküllerinin ortalama kinetik enerjisi',
      B: 'Su örneklerinin sahip olduğu toplam iç enerji',
      C: 'Sıcaklığı bir derece artırmak için verilmesi gereken ısı',
      D: 'Su örneklerindeki toplam molekül sayısı',
      E: 'Daha soğuk bir ortama verebilecekleri toplam ısı',
    },
    dogruCevap: 'A',
    adimAdimCozum: [
      'Sıcaklık, maddeyi oluşturan taneciklerin ortalama kinetik enerjisinin bir göstergesidir; madde miktarına bağlı değildir.',
      'İç enerji, tanecik sayısı ve ısı sığası kütleyle orantılıdır; havuzdaki su çok daha fazla olduğundan bu büyüklükler havuzda büyüktür.',
      'Verilebilecek ısı da kütleye bağlıdır. Yalnızca ortalama kinetik enerji iki örnekte aynıdır. $\\Rightarrow$ Cevap **A**',
    ],
  },
  {
    id: '9-T4-04',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.2',
    surecBileseni: 'Q = mcΔT bağıntısıyla bir taşıt soğutma sistemindeki suyun aldığı ısıyı hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir otomobilin soğutma sisteminde $5\ \text{kg}$ su dolaşmaktadır. Motor çalıştırıldıktan bir süre sonra bu suyun sıcaklığı $20\ ^\circ\text{C}$'den $90\ ^\circ\text{C}$'ye yükseliyor.

Su, motordan kaç kilojoule ısı almıştır? ($c_{su} = 4200\ \text{J/kg}\,^\circ\text{C}$)`,
    secenekler: { A: '$294$', B: '$420$', C: '$1050$', D: '$1260$', E: '$1470$' },
    dogruCevap: 'E',
    hesap: '5 * 4200 * 70 / 1000',
    adimAdimCozum: [
      r`$\Delta T = 90 - 20 = 70\ ^\circ\text{C}$`,
      r`$Q = m \cdot c \cdot \Delta T = 5 \cdot 4200 \cdot 70 = 1\,470\,000\ \text{J}$`,
      r`$1\,470\,000\ \text{J} = 1470\ \text{kJ}$ $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '9-T4-05',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.3',
    surecBileseni: 'Isınma ve hâl değişimi aşamalarındaki ısıları toplayarak gereken toplam enerjiyi hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir dağcı, kamp ocağında $-10\ ^\circ\text{C}$'deki $200\ \text{g}$ kütleli bir buz parçasını eritip elde ettiği suyu $20\ ^\circ\text{C}$'ye kadar ısıtmak istiyor.

Isı kayıpları önemsiz olduğuna göre ocağın buza vermesi gereken ısı en az kaç kilokaloridir?

($c_{buz} = 0{,}5\ \text{cal/g}\,^\circ\text{C}$, $c_{su} = 1\ \text{cal/g}\,^\circ\text{C}$, $L_{erime} = 80\ \text{cal/g}$)`,
    secenekler: { A: '$5$', B: '$16$', C: '$17$', D: '$20$', E: '$21$' },
    dogruCevap: 'E',
    hesap: '(200*0.5*10 + 200*80 + 200*1*20) / 1000',
    adimAdimCozum: [
      r`Buzun $-10\ ^\circ\text{C}$'den $0\ ^\circ\text{C}$'ye ısınması: $Q_1 = 200 \cdot 0{,}5 \cdot 10 = 1000\ \text{cal}$`,
      r`$0\ ^\circ\text{C}$'de erime: $Q_2 = m \cdot L = 200 \cdot 80 = 16\,000\ \text{cal}$`,
      r`Suyun $0$'dan $20\ ^\circ\text{C}$'ye ısınması: $Q_3 = 200 \cdot 1 \cdot 20 = 4000\ \text{cal}$`,
      r`$Q_{top} = 1000 + 16\,000 + 4000 = 21\,000\ \text{cal} = 21\ \text{kcal}$ $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '9-T4-06',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.4',
    surecBileseni: 'Kalorimetre deneyinin verilerinden ısıl denge eşitliğiyle bir metalin öz ısısını hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Isıca yalıtılmış bir kalorimetre kabında $20\ ^\circ\text{C}$'de $200\ \text{g}$ su bulunuyor. Bir ısıtıcıda $90\ ^\circ\text{C}$'ye kadar ısıtılan $100\ \text{g}$ kütleli metal parça kaba bırakılıyor ve bir süre sonra termometre $30\ ^\circ\text{C}$'de sabitleniyor.

Kabın ve termometrenin aldığı ısı önemsiz olduğuna göre metalin öz ısısı kaç $\text{cal/g}\,^\circ\text{C}$'dir? ($c_{su} = 1\ \text{cal/g}\,^\circ\text{C}$)`,
    svgDiyagram: svg(
      360, 240, 'Kalorimetre düzeneği',
      '<rect x="40" y="50" width="180" height="175" rx="6" class="f-k" stroke-width="2.5"/>',
      '<rect x="60" y="70" width="140" height="140" class="c-i" stroke-width="2.5"/>',
      '<rect x="62" y="100" width="136" height="108" class="f-s" stroke="none"/>',
      '<rect x="40" y="38" width="180" height="12" class="f-kv" stroke-width="2"/>',
      '<rect x="105" y="168" width="44" height="30" class="f-v" stroke-width="2"/>',
      cizgi(175, 18, 175, 150, { k: 3 }),
      '<circle cx="175" cy="156" r="6" class="f-i" stroke="none"/>',
      cizgi(85, 22, 85, 190), cizgi(72, 190, 98, 190),
      cizgi(178, 30, 228, 30, { k: 1 }),
      yazi(232, 34, 'termometre', { boy: 13 }),
      cizgi(198, 130, 228, 130, { k: 1 }),
      yazi(232, 134, 'su: 200 g', { boy: 13 }),
      cizgi(149, 183, 228, 183, { k: 1 }),
      yazi(232, 187, 'metal: 100 g', { boy: 13 }),
      cizgi(220, 215, 228, 215, { k: 1 }),
      yazi(232, 219, 'yalıtkan kap', { boy: 13 }),
    ),
    secenekler: { A: r`$\dfrac{1}{6}$`, B: r`$\dfrac{1}{4}$`, C: r`$\dfrac{1}{3}$`, D: r`$\dfrac{1}{2}$`, E: r`$\dfrac{2}{3}$` },
    dogruCevap: 'C',
    hesap: '200 * 1 * 10 / (100 * 60)',
    adimAdimCozum: [
      r`Suyun aldığı ısı: $Q_{al} = 200 \cdot 1 \cdot (30 - 20) = 2000\ \text{cal}$`,
      r`Metalin verdiği ısı: $Q_{ver} = 100 \cdot c \cdot (90 - 30) = 6000\,c$`,
      r`Isıl denge: $6000\,c = 2000 \Rightarrow c = \dfrac{1}{3}\ \text{cal/g}\,^\circ\text{C}$ $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '9-T4-07',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.5',
    surecBileseni: 'Günlük yaşamdaki ısı aktarımı örneklerini baskın aktarım yoluna göre sınıflandırır.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Aşağıdaki olaylardan hangisinde ısı aktarımı ağırlıklı olarak **konveksiyon** yoluyla gerçekleşir?`,
    secenekler: {
      A: 'Kalorifer peteği çevresinde ısınan havanın tavana doğru yükselmesi',
      B: 'Ocaktaki metal tencerenin sapının zamanla ısınması',
      C: 'Güneş altında bekletilen koyu renkli bir otomobilin kaportasının ısınması',
      D: 'Soğuk bir pencere camına dokunan elin hemen üşümesi',
      E: 'Kızgın ızgara telinin karşısındaki ekmeği uzaktan kızartması',
    },
    dogruCevap: 'A',
    adimAdimCozum: [
      'Konveksiyon, akışkanın (sıvı ya da gaz) kendisinin yer değiştirerek ısıyı taşımasıdır.',
      'Tencere sapının ısınması ve elin camda üşümesi katılar arası iletimdir; kaportanın Güneş altında ısınması ve ızgaranın ekmeği uzaktan kızartması ışımadır.',
      'Petek çevresinde ısınan havanın genleşip yükselmesi ve yerine soğuk havanın gelmesi konveksiyon akımıdır. $\\Rightarrow$ Cevap **A**',
    ],
  },
  {
    id: '9-T4-08',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.6',
    surecBileseni: 'İki çubuğun iletim hızlarını k, A, ΔT ve uzunluk değişkenleri üzerinden oranlar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Yan yüzeyleri yalıtılmış K ve L metal çubuklarının ısı iletim katsayıları, kesit alanları, boyları ve uçları arasındaki sıcaklık farkları şekilde verilmiştir.

K çubuğundan birim zamanda iletilen ısının L çubuğundan birim zamanda iletilen ısıya oranı $\dfrac{(Q/t)_K}{(Q/t)_L}$ kaçtır?`,
    svgDiyagram: svg(
      380, 190, 'K ve L çubuklarının özellikleri',
      olcu(60, 30, 200, 30, 'd'),
      '<rect x="60" y="40" width="140" height="36" class="f-kv" stroke-width="2.5"/>',
      yazi(46, 64, 'K', { boy: 15, hiza: 'end' }),
      yazi(130, 98, 'k, 2A, ΔT', { boy: 13, hiza: 'middle' }),
      olcu(60, 120, 340, 120, '2d'),
      '<rect x="60" y="130" width="280" height="18" class="f-k" stroke-width="2.5"/>',
      yazi(46, 145, 'L', { boy: 15, hiza: 'end' }),
      yazi(200, 172, '2k, A, 2ΔT', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: r`$\dfrac{1}{4}$`, B: r`$\dfrac{1}{2}$`, C: '$1$', D: '$2$', E: '$4$' },
    dogruCevap: 'C',
    hesap: '(1*2*1/1) / (2*1*2/2)',
    adimAdimCozum: [
      r`İletim hızı: $\dfrac{Q}{t} = \dfrac{k \cdot A \cdot \Delta T}{d}$`,
      r`K için: $\dfrac{k \cdot 2A \cdot \Delta T}{d} = 2\,\dfrac{kA\Delta T}{d}$`,
      r`L için: $\dfrac{2k \cdot A \cdot 2\Delta T}{2d} = 2\,\dfrac{kA\Delta T}{d}$`,
      r`Oran $= \dfrac{2}{2} = 1$; iki çubuk birim zamanda eşit ısı iletir. $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '9-T4-09',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.3',
    surecBileseni: 'Buharlaşma ve kaynama olaylarını koşulları ve enerji alışverişi bakımından karşılaştırır.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Buharlaşma ve kaynama olaylarıyla ilgili aşağıdaki yargılar veriliyor.

I. Buharlaşma, sıvının kaynama sıcaklığının altındaki her sıcaklıkta gerçekleşebilir.
II. Dış basınç azaldıkça saf suyun kaynama sıcaklığı düşer.
III. Kaynama süresince saf sıvıya verilen ısı, sıvının sıcaklığını artırır.

Bu yargılardan hangileri doğrudur?`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız III', C: 'I ve II', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'C',
    adimAdimCozum: [
      'I. Buharlaşma yalnızca sıvı yüzeyinde olur ve her sıcaklıkta gerçekleşebilir; ıslak çamaşır oda sıcaklığında da kurur. **Doğru**',
      'II. Kaynama, buhar basıncı dış basınca eşit olduğunda başlar; yüksek dağlarda basınç düşük olduğundan su 100 °C’nin altında kaynar. **Doğru**',
      'III. Saf bir sıvı kaynarken sıcaklığı sabit kalır; verilen ısı hâl değişimi için harcanır. **Yanlış** $\\Rightarrow$ Cevap **C**',
    ],
  },
  {
    id: '9-T4-10',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.2',
    surecBileseni: 'Bir cismin ısı sığasını kütlesi ve öz ısısından hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Mutfakta kullanılan bir alüminyum tencerenin kütlesi $400\ \text{g}$'dır. Alüminyumun öz ısısı $0{,}25\ \text{cal/g}\,^\circ\text{C}$ olduğuna göre bu tencerenin ısı sığası kaç $\text{cal}/^\circ\text{C}$'dir?`,
    secenekler: { A: '$25$', B: '$50$', C: '$80$', D: '$100$', E: '$1600$' },
    dogruCevap: 'D',
    hesap: '400 * 0.25',
    adimAdimCozum: [
      r`Isı sığası, cismin sıcaklığını $1\ ^\circ\text{C}$ artırmak için gereken ısıdır: $C = m \cdot c$`,
      r`$C = 400 \cdot 0{,}25 = 100\ \text{cal}/^\circ\text{C}$`,
      r`$1600$ yanıtı kütlenin öz ısıya bölünmesiyle elde edilen yanlış sonuçtur. $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '9-T4-11',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.4',
    surecBileseni: 'Buzun eridiği bir karışımda ısıl denge sıcaklığını, erime ısısını hesaba katarak bulur.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Isıca yalıtılmış bir bardakta $40\ ^\circ\text{C}$'de $200\ \text{g}$ limonata bulunuyor. Bardağa $0\ ^\circ\text{C}$'deki $50\ \text{g}$ buz atılıyor.

Limonatanın ısıl özellikleri su ile aynı kabul edildiğine göre ısıl denge sağlandığında karışımın sıcaklığı kaç $^\circ\text{C}$ olur?

($c_{su} = 1\ \text{cal/g}\,^\circ\text{C}$, $L_{erime} = 80\ \text{cal/g}$; bardağın aldığı ısı önemsiz)`,
    svgDiyagram: svg(
      320, 220, 'Limonata bardağına atılan buz',
      '<path d="M86 90 L95 198 L205 198 L214 90 Z" class="f-s" stroke="none"/>',
      '<path d="M80 40 L95 200 L205 200 L220 40" stroke-width="2.5"/>',
      '<rect x="112" y="78" width="28" height="26" class="f-kv" stroke-width="2"/>',
      '<rect x="150" y="84" width="28" height="26" class="f-kv" stroke-width="2"/>',
      cizgi(178, 82, 226, 62, { k: 1 }),
      yazi(230, 60, 'buz', { boy: 13 }),
      yazi(230, 77, '50 g, 0 °C', { boy: 12 }),
      cizgi(208, 130, 226, 130, { k: 1 }),
      yazi(230, 134, 'limonata', { boy: 13 }),
      yazi(230, 151, '200 g, 40 °C', { boy: 12 }),
    ),
    secenekler: { A: '$0$', B: '$8$', C: '$16$', D: '$24$', E: '$32$' },
    dogruCevap: 'C',
    hesap: '(200*40 - 50*80) / (200 + 50)',
    adimAdimCozum: [
      r`Limonata $0\ ^\circ\text{C}$'ye inerse en çok $200 \cdot 1 \cdot 40 = 8000\ \text{cal}$ verir; buzun tamamen erimesi için $50 \cdot 80 = 4000\ \text{cal}$ yeterlidir. Buzun tamamı erir.`,
      r`Denge: $200 \cdot 1 \cdot (40 - T) = 50 \cdot 80 + 50 \cdot 1 \cdot (T - 0)$`,
      r`$8000 - 200T = 4000 + 50T \Rightarrow 250T = 4000$`,
      r`$T = 16\ ^\circ\text{C}$ (Erime ısısı unutulursa $32$ bulunur.) $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '9-T4-12',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.5',
    surecBileseni: 'Güneş kolektörünün parçalarını ilgili ısı aktarım yollarıyla ilişkilendirerek tasarımı değerlendirir.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekilde, çatıya yerleştirilen bir güneş kolektörünün kesiti verilmiştir. Kolektörde cam örtünün altında mat siyah boyalı bir levha, levhaya kaynaklı bakır borular ve en altta yalıtım köpüğü bulunur.

I. Levhanın mat siyaha boyanması, ışıma yoluyla gelen enerjinin daha fazla soğurulmasını sağlar.
II. Yalıtım köpüğü, ısı iletimini kolaylaştırarak borulardaki suyun daha hızlı ısınmasını sağlar.
III. Isı, levhadan bakır boruların içindeki suya ağırlıklı olarak iletim yoluyla aktarılır.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      400, 210, 'Güneş kolektörünün kesiti',
      ok(70, 20, 88, 74, 'v', 2.5),
      ok(120, 20, 138, 74, 'v', 2.5),
      ok(170, 20, 188, 74, 'v', 2.5),
      yazi(220, 36, 'güneş ışınları', { boy: 13 }),
      '<rect x="40" y="80" width="260" height="90" stroke-width="2.5"/>',
      cizgi(40, 80, 300, 80, { sinif: 'c-i', k: 4 }),
      cizgi(44, 126, 296, 126, { k: 5 }),
      '<circle cx="80" cy="138" r="8" class="f-s" stroke-width="2"/>',
      '<circle cx="130" cy="138" r="8" class="f-s" stroke-width="2"/>',
      '<circle cx="180" cy="138" r="8" class="f-s" stroke-width="2"/>',
      '<circle cx="230" cy="138" r="8" class="f-s" stroke-width="2"/>',
      '<rect x="42" y="150" width="256" height="18" class="f-k" stroke="none"/>',
      yazi(308, 85, 'cam örtü', { boy: 13 }),
      yazi(308, 131, 'siyah levha', { boy: 12 }),
      yazi(308, 164, 'yalıtım', { boy: 13 }),
      yazi(170, 194, 'bakır borular içinde su', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'I, II ve III' },
    dogruCevap: 'D',
    adimAdimCozum: [
      'I. Mat siyah yüzeyler ışımayı iyi soğurur; levha Güneş’ten gelen enerjiyi daha çok yakalar. **Doğru**',
      'II. Yalıtım köpüğünün görevi iletimi kolaylaştırmak değil, levhanın arka yüzünden dışarıya iletim yoluyla ısı kaybını azaltmaktır. **Yanlış**',
      'III. Levha ile boru birbirine kaynaklı katılardır; ısı temas yoluyla, yani iletimle borudaki suya geçer. **Doğru** $\\Rightarrow$ Cevap **D**',
    ],
  },
  {
    id: '9-T4-13',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.1',
    surecBileseni: 'Temas eden iki cisim arasındaki enerji aktarımını ısı, sıcaklık ve iç enerji kavramlarıyla yorumlar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Isıca yalıtılmış bir kutunun içinde, kütleleri farklı olan K ve L metal blokları şekildeki gibi birbirine değecek biçimde bırakılıyor. Başlangıçta K bloğunun sıcaklığı $80\ ^\circ\text{C}$, L bloğunun sıcaklığı $20\ ^\circ\text{C}$'dir.

Bu olayla ilgili aşağıdaki ifadelerden hangisi doğrudur?`,
    svgDiyagram: svg(
      340, 210, 'Yalıtılmış kutuda birbirine değen K ve L blokları',
      '<rect x="30" y="30" width="280" height="150" rx="8" class="f-k" stroke-width="3"/>',
      '<rect x="80" y="98" width="90" height="80" class="f-v" stroke-width="2.5"/>',
      '<rect x="170" y="118" width="70" height="60" class="f-i" stroke-width="2.5"/>',
      yazi(125, 144, 'K', { boy: 16, hiza: 'middle' }),
      yazi(205, 154, 'L', { boy: 16, hiza: 'middle' }),
      yazi(125, 88, '80 °C', { boy: 13, hiza: 'middle' }),
      yazi(205, 108, '20 °C', { boy: 13, hiza: 'middle' }),
      yazi(170, 202, 'ısıca yalıtılmış kutu', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: {
      A: 'Soğukluk, L bloğundan K bloğuna doğru aktarılır',
      B: 'Isı alışverişi, blokların sıcaklıkları eşitlendiğinde sona erer',
      C: 'K bloğunun içerdiği ısı miktarı L bloğununkinden fazladır',
      D: 'Isıl denge kurulduğunda iki bloğun iç enerjileri birbirine eşit olur',
      E: 'K soğurken L bloğunun sıcaklığı hiç değişmeden kalır',
    },
    dogruCevap: 'B',
    adimAdimCozum: [
      'Isı, sıcaklık farkı nedeniyle sıcak cisimden soğuk cisme kendiliğinden aktarılan enerjidir. “Soğukluk” diye aktarılan bir enerji yoktur; cisimler ısı içermez, iç enerjiye sahiptir.',
      'K bloğu enerji verip soğurken L bloğu enerji alıp ısınır; aktarım, iki bloğun sıcaklıkları eşitlendiğinde (ısıl denge) durur.',
      r`Dengede sıcaklıklar eşittir; ancak iç enerji kütleye ve maddenin cinsine de bağlı olduğundan iç enerjilerin eşit olması gerekmez. $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '9-T4-14',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.6',
    surecBileseni: 'Pencere camından birim zamanda iletilen ısıyı iletim bağıntısıyla hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir evin salonundaki tek katlı pencere camının yüzey alanı $1{,}5\ \text{m}^2$, kalınlığı $5\ \text{mm}$'dir. Soğuk bir kış gecesinde camın iç yüzeyinin sıcaklığı $20\ ^\circ\text{C}$, dış yüzeyinin sıcaklığı $-5\ ^\circ\text{C}$ olarak ölçülüyor.

Camdan birim zamanda iletilen ısı kaç watt olur? ($k_{cam} = 0{,}8\ \text{W/m}\,^\circ\text{C}$, $\dfrac{Q}{t} = \dfrac{k \cdot A \cdot \Delta T}{d}$)`,
    svgDiyagram: svg(
      340, 220, 'Pencere camından ısı iletimi',
      olcu(155, 40, 175, 40, 'd = 5 mm'),
      '<rect x="155" y="52" width="20" height="130" class="f-i" stroke-width="2.5"/>',
      ok(60, 160, 147, 160, 'v'),
      ok(183, 160, 280, 160, 'v'),
      yazi(147, 120, 'iç yüzey: 20 °C', { boy: 13, hiza: 'end' }),
      yazi(184, 120, 'dış yüzey: −5 °C', { boy: 13 }),
      yazi(165, 206, 'A = 1,5 m²', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: '$6000$', B: '$3600$', C: '$600$', D: '$60$', E: '$6$' },
    dogruCevap: 'A',
    hesap: '0.8 * 1.5 * (20 - (-5)) / 0.005',
    adimAdimCozum: [
      r`Sıcaklık farkı: $\Delta T = 20 - (-5) = 25\ ^\circ\text{C}$ (eksi işareti gözden kaçırılırsa $15\ ^\circ\text{C}$ alınır ve $3600$ yanıtına gidilir).`,
      r`Kalınlık metreye çevrilir: $d = 5\ \text{mm} = 0{,}005\ \text{m}$`,
      r`$\dfrac{Q}{t} = \dfrac{0{,}8 \cdot 1{,}5 \cdot 25}{0{,}005} = \dfrac{30}{0{,}005}$`,
      r`$\dfrac{Q}{t} = 6000\ \text{W}$ $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '9-T4-15',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.2',
    surecBileseni: 'Sıcaklık–zaman grafiğinden kütleleri farklı iki sıvının öz ısılarını oranlar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Kütleleri $m_K = 200\ \text{g}$ ve $m_L = 100\ \text{g}$ olan K ve L sıvıları, özdeş ısıtıcılarla ayrı kaplarda ısıtılıyor. Sıvıların sıcaklık–zaman grafiği şekildeki gibidir.

Isıtıcıların birim zamanda verdiği ısı eşit ve ısı kayıpları önemsiz olduğuna göre L sıvısının öz ısısının K sıvısının öz ısısına oranı $\dfrac{c_L}{c_K}$ kaçtır?`,
    svgDiyagram: svg(
      340, 240, 'K ve L sıvılarının sıcaklık–zaman grafiği',
      eksen(60, 210, 270, 190, 't (min)', 'T (°C)'),
      cizgi(60, 60, 260, 60, { sinif: 'k', k: 1.5 }),
      cizgi(60, 120, 260, 120, { sinif: 'k', k: 1.5 }),
      cizgi(260, 60, 260, 210, { sinif: 'k', k: 1.5 }),
      '<path d="M60 180 L260 60" class="c-v" stroke-width="4"/>',
      '<path d="M60 180 L260 120" class="c-i" stroke-width="4"/>',
      yazi(52, 65, '50', { boy: 13, hiza: 'end' }),
      yazi(52, 125, '30', { boy: 13, hiza: 'end' }),
      yazi(52, 185, '10', { boy: 13, hiza: 'end' }),
      yazi(260, 228, '4', { boy: 13, hiza: 'middle' }),
      yazi(268, 64, 'K', { boy: 15 }),
      yazi(268, 125, 'L', { boy: 15 }),
    ),
    secenekler: { A: r`$\dfrac{1}{4}$`, B: r`$\dfrac{1}{2}$`, C: '$2$', D: '$4$', E: '$8$' },
    dogruCevap: 'D',
    hesap: '(200 * 40) / (100 * 20)',
    adimAdimCozum: [
      r`Özdeş ısıtıcılar eşit sürede eşit ısı verir; $t = 4\ \text{min}$ sonunda $Q_K = Q_L = Q$ olur.`,
      r`K sıvısı: $\Delta T_K = 50 - 10 = 40\ ^\circ\text{C}$, $c_K = \dfrac{Q}{200 \cdot 40} = \dfrac{Q}{8000}$`,
      r`L sıvısı: $\Delta T_L = 30 - 10 = 20\ ^\circ\text{C}$, $c_L = \dfrac{Q}{100 \cdot 20} = \dfrac{Q}{2000}$`,
      r`$\dfrac{c_L}{c_K} = \dfrac{8000}{2000} = 4$ (Kütleler hesaba katılmazsa $2$ bulunur.) $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '9-T4-16',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.3',
    surecBileseni: 'Soğuma grafiğini donma olayı ve iç enerji değişimi bakımından yorumlar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Erimiş hâldeki saf bir X maddesi, oda koşullarında kendi hâline bırakılarak soğutuluyor. Maddenin sıcaklığının zamana bağlı değişimi grafikteki gibidir.

I. X maddesinin donma sıcaklığı $80\ ^\circ\text{C}$'dir.
II. $2$. ve $6$. dakikalar arasında madde çevreye ısı vermez.
III. $6$. ve $9$. dakikalar arasında maddenin iç enerjisi azalır.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      360, 240, 'X maddesinin soğuma grafiği',
      eksen(60, 210, 290, 190, 't (min)', 'T (°C)'),
      cizgi(60, 110, 110, 110, { sinif: 'k', k: 1.5 }),
      cizgi(60, 160, 285, 160, { sinif: 'k', k: 1.5 }),
      cizgi(110, 110, 110, 210, { sinif: 'k', k: 1.5 }),
      cizgi(210, 110, 210, 210, { sinif: 'k', k: 1.5 }),
      cizgi(285, 160, 285, 210, { sinif: 'k', k: 1.5 }),
      '<path d="M60 60 L110 110 L210 110 L285 160" class="c-v" stroke-width="4"/>',
      yazi(52, 65, '120', { boy: 13, hiza: 'end' }),
      yazi(52, 115, '80', { boy: 13, hiza: 'end' }),
      yazi(52, 165, '40', { boy: 13, hiza: 'end' }),
      yazi(110, 228, '2', { boy: 13, hiza: 'middle' }),
      yazi(210, 228, '6', { boy: 13, hiza: 'middle' }),
      yazi(285, 228, '9', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'I, II ve III' },
    dogruCevap: 'D',
    adimAdimCozum: [
      'I. Soğuma sırasında sıcaklığın sabit kaldığı 80 °C, sıvının katılaştığı yani donduğu sıcaklıktır. **Doğru**',
      'II. Donma sırasında sıcaklık sabit kalsa da madde çevreye ısı verir; bu enerji taneciklerin potansiyel enerjisindeki azalmadan karşılanır. **Yanlış**',
      r`III. $6$–$9$. dakikalarda katı hâldeki madde soğumaktadır; sıcaklığı düştüğü için iç enerjisi azalır. **Doğru** $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '9-T4-17',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.1',
    surecBileseni: 'Aynı sıcaklıktaki farklı miktarlarda suyun iç enerjisini ve verebileceği ısıyı karşılaştırarak ısı ile sıcaklığı ayırt eder.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Semaver ve Çay Bardağı:** Bir çay ocağındaki semaverde $90\ ^\circ\text{C}$'de $3\ \text{kg}$ su bulunuyor. Ocakçı, aynı sudan ince belli bir bardağa $150\ \text{g}$ dolduruyor. Ortamın sıcaklığı $20\ ^\circ\text{C}$'dir. ($c_{su} = 1\ \text{cal/g}\,^\circ\text{C}$)

a) Semaverdeki ve bardaktaki su moleküllerinin ortalama kinetik enerjilerini karşılaştırınız.
b) Hangi örneğin iç enerjisi daha büyüktür? Gerekçesini yazınız.
c) Her iki örnek de ortam sıcaklığına inene kadar soğursa çevreye kaçar kilokalori ısı verir? Bu sonuç "ısı" ile "sıcaklık" arasındaki fark hakkında ne söyler?`,
    svgDiyagram: svg(
      340, 232, 'Semaver ve çay bardağı',
      '<rect x="40" y="60" width="110" height="130" rx="14" stroke-width="3"/>',
      '<rect x="44" y="92" width="102" height="94" rx="10" class="f-s" stroke="none"/>',
      '<rect x="70" y="42" width="50" height="18" rx="4" class="f-kv" stroke-width="2.5"/>',
      cizgi(150, 160, 174, 160, { k: 4 }),
      '<rect x="60" y="190" width="70" height="12" class="f-k" stroke-width="2"/>',
      '<path d="M234 136 L240 194 L280 194 L286 136 Z" class="f-s" stroke="none"/>',
      '<path d="M230 112 L238 196 L282 196 L290 112" stroke-width="2.5"/>',
      yazi(170, 28, 'her ikisi de 90 °C', { boy: 13, hiza: 'middle' }),
      yazi(95, 224, 'semaver: 3 kg', { boy: 13, hiza: 'middle' }),
      yazi(260, 224, 'bardak: 150 g', { boy: 13, hiza: 'middle' }),
    ),
    dogruCevap: r`a) Eşittir · b) Semaverdeki suyun · c) $210\ \text{kcal}$ ve $10{,}5\ \text{kcal}$; sıcaklık aynı olsa da aktarılan ısı kütleye bağlıdır`,
    adimAdimCozum: [
      'a) Sıcaklık, taneciklerin ortalama kinetik enerjisinin göstergesidir. İki örnek de 90 °C’de olduğundan ortalama kinetik enerjiler eşittir.',
      'b) İç enerji, taneciklerin kinetik ve potansiyel enerjilerinin toplamıdır. Aynı sıcaklıkta tanecik sayısı çok daha fazla olan semaverdeki suyun iç enerjisi daha büyüktür.',
      r`c) Semaver: $Q = 3000 \cdot 1 \cdot (90 - 20) = 210\,000\ \text{cal} = 210\ \text{kcal}$; bardak: $Q = 150 \cdot 1 \cdot 70 = 10\,500\ \text{cal} = 10{,}5\ \text{kcal}$`,
      'Sıcaklıkları aynı olduğu hâlde semaverdeki su 20 kat fazla ısı verir. Sıcaklık madde miktarına bağlı değildir; aktarılan ısı ise kütleye bağlıdır.',
    ],
    rubrik: [
      { olcut: 'Ortalama kinetik enerjilerin eşit olduğunu sıcaklıkla gerekçelendirme', puan: 2 },
      { olcut: 'İç enerjiyi tanecik sayısıyla ilişkilendirerek doğru karşılaştırma', puan: 3 },
      { olcut: 'İki örneğin verdiği ısıyı doğru hesaplama', puan: 3 },
      { olcut: 'Isı ile sıcaklık arasındaki farkı sonuçtan çıkarma', puan: 2 },
    ],
  },
  {
    id: '9-T4-18',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.1',
    surecBileseni: 'Günlük dildeki ifadeleri iç enerji, ısı ve mutlak sıcaklık kavramlarının bilimsel anlamlarıyla değerlendirir.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir fizik dersinde iç enerji, ısı ve sıcaklık kavramları tartışılırken aşağıdaki üç yargı inceleniyor:

I. Sağlıklı bir insan için söylenen "vücut ısısı $36{,}5\ ^\circ\text{C}$'dir" ifadesinde ısı sözcüğü, sıcaklık kavramının yerine hatalı biçimde kullanılmıştır.
II. Oda sıcaklığının $15\ ^\circ\text{C}$'den $30\ ^\circ\text{C}$'ye yükselmesi, havadaki taneciklerin ortalama kinetik enerjisinin iki katına çıktığını gösterir.
III. Bisiklet pompasıyla tekerleğe hızla hava basıldığında pompa gövdesinin ısınması, ısı alışverişi olmadan iş yapılarak da iç enerjinin artabileceğini gösterir.

Buna göre numaralanmış yargılardan hangileri fiziksel açıdan doğrudur? ($0\ ^\circ\text{C} = 273\ \text{K}$)`,
    secenekler: { A: 'Yalnız I', B: 'I ve II', C: 'I ve III', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'C',
    adimAdimCozum: [
      r`I. Bir maddenin sahip olduğu "ısı"dan söz edilemez; $36{,}5\ ^\circ\text{C}$ termometreyle ölçülen vücut sıcaklığıdır. **Doğru**`,
      r`II. Ortalama kinetik enerji Celsius ile değil, Kelvin cinsinden mutlak sıcaklıkla doğru orantılıdır; sıcaklık $288\ \text{K}$'den $303\ \text{K}$'ye çıktığı için iki katına çıkmamıştır. **Yanlış**`,
      r`III. Sıkıştırma ve sürtünme sırasında yapılan mekanik iş gazın ve pompanın iç enerjisini artırır. **Doğru** $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '9-T4-19',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.3',
    surecBileseni: 'Kaynama sıcaklığındaki buharın yoğuşması sırasında dışarıya verdiği ısıyı hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir buharlı ütünün taban haznesinde bulunan $100\ ^\circ\text{C}$ sıcaklıktaki su buharından $15\ \text{g}$'lık kısım, sıcaklığı değişmeden tamamen yoğuşarak $100\ ^\circ\text{C}$'de sıvı suya dönüşüyor.

Bu hâl değişimi süresince buharın ütü tabanına aktardığı ısı kaç kilokaloridir? ($L_{buhar} = 540\ \text{cal/g}$)`,
    secenekler: { A: '$1{,}2$', B: '$2{,}7$', C: '$4{,}5$', D: '$5{,}4$', E: '$8{,}1$' },
    dogruCevap: 'E',
    hesap: '15 * 540 / 1000',
    adimAdimCozum: [
      r`Sabit sıcaklıkta yoğuşan buhar çevreye $Q = m \cdot L_{buhar}$ kadar ısı verir.`,
      r`$Q = 15 \cdot 540 = 8100\ \text{cal}$`,
      r`$1\ \text{kcal} = 1000\ \text{cal}$ olduğundan $Q = 8{,}1\ \text{kcal}$ bulunur ($1{,}2$ yanıtı erime ısısı $80\ \text{cal/g}$ kullanıldığında elde edilir). $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '9-T4-20',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.4',
    surecBileseni: 'Su–buz karışımında kısmi erime durumunu analiz ederek ısıl dengedeki sıvı kütlesini hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Dış ortamdan ısıca yalıtılmış bir deney kabında bulunan $20\ ^\circ\text{C}$ sıcaklıktaki $200\ \text{g}$ saf suyun içine, derin dondurucudan çıkarılan $-16\ ^\circ\text{C}$ sıcaklıktaki $100\ \text{g}$ buz kalıbı bırakılıyor.

Isıl denge kurulduğunda kapta toplam kaç gram sıvı su bulunur?

($c_{su} = 1\ \text{cal/g}\,^\circ\text{C}$, $c_{buz} = 0{,}5\ \text{cal/g}\,^\circ\text{C}$, $L_{erime} = 80\ \text{cal/g}$; kabın ısı sığası önemsizdir.)`,
    svgDiyagram: svg(
      360, 220, 'Yalıtılmış kapta su ve eksi 16 derecedeki buz kalıbı',
      '<rect x="42" y="38" width="156" height="160" rx="8" class="f-k" stroke-width="2.5"/>',
      '<rect x="56" y="88" width="128" height="98" class="f-s" stroke="none"/>',
      '<rect x="92" y="70" width="56" height="36" class="f-kv" stroke-width="2"/>',
      cizgi(148, 84, 210, 74, { k: 1 }),
      yazi(215, 72, 'buz: 100 g', { boy: 13 }),
      yazi(215, 89, '−16 °C', { boy: 12 }),
      cizgi(184, 142, 210, 142, { k: 1 }),
      yazi(215, 140, 'su: 200 g', { boy: 13 }),
      yazi(215, 157, '20 °C', { boy: 12 }),
      yazi(120, 214, 'yalıtımlı deney kabı', { boy: 12, hiza: 'middle' }),
    ),
    secenekler: { A: '$200$', B: '$220$', C: '$230$', D: '$240$', E: '$250$' },
    dogruCevap: 'D',
    hesap: '200 + (200 * 1 * 20 - 100 * 0.5 * 16) / 80',
    adimAdimCozum: [
      r`$200\ \text{g}$ su $0\ ^\circ\text{C}$'ye inene kadar en çok $Q_{su} = 200 \cdot 1 \cdot 20 = 4000\ \text{cal}$ ısı verebilir.`,
      r`$-16\ ^\circ\text{C}$'deki buzun tamamının $0\ ^\circ\text{C}$'ye ısınması için $Q_1 = 100 \cdot 0{,}5 \cdot 16 = 800\ \text{cal}$ gerekir; erime için geriye $4000 - 800 = 3200\ \text{cal}$ kalır.`,
      r`Buzun tamamını eritmek $100 \cdot 80 = 8000\ \text{cal}$ gerektirdiğinden buzun yalnız $m_{eriyen} = \dfrac{3200}{80} = 40\ \text{g}$'lık kısmı erir ve denge $0\ ^\circ\text{C}$'de kurulur.`,
      r`Kapta bulunan toplam sıvı su kütlesi $200 + 40 = 240\ \text{g}$ olur (buzun ısınması unutulursa $250$ bulunur). $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '9-T4-21',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.6',
    surecBileseni: 'Aynı cephedeki iki farklı yapı elemanından birim zamanda iletilen ısı miktarlarını oranlar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir dağ kulübesinin dış ortama bakan ön cephesinin toplam yüzey alanı $10\ \text{m}^2$'dir. Bu cephenin $2\ \text{m}^2$'lik bölümünde $4\ \text{mm}$ kalınlığında tek katlı cam pencere, geriye kalan bölümünde ise $20\ \text{cm}$ kalınlığında masif ahşap duvar yer almaktadır.

İç ve dış yüzeyler arasındaki sıcaklık farkı camda ve ahşap duvarda eşit olduğuna göre, aynı sürede pencere camından iletilen ısının ahşap duvardan iletilen ısıya oranı $\dfrac{(Q/t)_{cam}}{(Q/t)_{ahsap}}$ kaçtır?

($k_{cam} = 0{,}8\ \text{W/m}\,^\circ\text{C}$, $k_{ahsap} = 0{,}1\ \text{W/m}\,^\circ\text{C}$, $\dfrac{Q}{t} = \dfrac{k \cdot A \cdot \Delta T}{d}$)`,
    svgDiyagram: svg(
      380, 220, 'Dağ kulübesi ön cephesinde ahşap duvar ve cam pencere',
      '<rect x="45" y="38" width="200" height="132" class="f-kv" stroke-width="2.5"/>',
      '<rect x="105" y="70" width="80" height="56" class="f-i" stroke-width="2.5"/>',
      cizgi(185, 92, 258, 72, { k: 1 }),
      yazi(264, 70, 'cam: 2 m²', { boy: 13 }),
      yazi(264, 87, 'd = 4 mm', { boy: 12 }),
      cizgi(245, 138, 258, 138, { k: 1 }),
      yazi(264, 136, 'ahşap duvar', { boy: 13 }),
      yazi(264, 153, 'd = 20 cm', { boy: 12 }),
      olcu(45, 186, 245, 186, 'toplam cephe: 10 m²', { dy: 18 }),
    ),
    secenekler: { A: '$2$', B: '$10$', C: '$50$', D: '$80$', E: '$100$' },
    dogruCevap: 'E',
    hesap: '(0.8 * 2 / 0.004) / (0.1 * (10 - 2) / 0.2)',
    adimAdimCozum: [
      r`Ahşap duvarın alanı $A_{ahsap} = 10 - 2 = 8\ \text{m}^2$; kalınlıklar $d_{cam} = 0{,}004\ \text{m}$ ve $d_{ahsap} = 0{,}2\ \text{m}$'dir.`,
      r`Cam için: $\left(\dfrac{Q}{t}\right)_{cam} = \dfrac{0{,}8 \cdot 2 \cdot \Delta T}{0{,}004} = 400\,\Delta T$`,
      r`Ahşap duvar için: $\left(\dfrac{Q}{t}\right)_{ahsap} = \dfrac{0{,}1 \cdot 8 \cdot \Delta T}{0{,}2} = 4\,\Delta T$`,
      r`Oran $= \dfrac{400\,\Delta T}{4\,\Delta T} = 100$ olur (ahşap alan $10\ \text{m}^2$ alınırsa $80$, birimler çevrilmezse $10$ bulunur). $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '9-T4-22',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.2',
    surecBileseni: 'Farklı sıvıların öz ısılarını ve ısı sığalarını bir ısınma aracı tasarımı üzerinden karşılaştırır.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Sıcak Sıvı Torbası Seçimi:** Kış aylarında el ve ayak ısıtmak için kullanılacak özdeş iki kauçuk torbadan birine $1{,}5\ \text{kg}$ saf su, diğerine $1{,}5\ \text{kg}$ bitkisel yağ dolduruluyor. Her iki sıvı da $70\ ^\circ\text{C}$'ye kadar ısıtıldıktan sonra sıcaklığı $20\ ^\circ\text{C}$ olan bir odaya bırakılıyor. ($c_{su} = 4200\ \text{J/kg}\,^\circ\text{C}$, $c_{yag} = 2000\ \text{J/kg}\,^\circ\text{C}$; torba cidarlarının ısı sığası önemsizdir.)

a) Torbalardaki suyun ve bitkisel yağın ısı sığalarını ($\text{J}/^\circ\text{C}$ cinsinden) ayrı ayrı hesaplayınız.
b) Her iki torba da oda sıcaklığına ($20\ ^\circ\text{C}$) düşene kadar çevreye kaçar kilojoule ısı aktarır?
c) Uzun süre ısı vermesi amaçlanan bir ısıtma torbasında hangi sıvının kullanılması daha avantajlıdır? Öz ısı kavramıyla gerekçelendiriniz.`,
    svgDiyagram: svg(
      360, 215, 'Su ve bitkisel yağ dolu iki özdeş ısıtma torbası',
      yazi(180, 24, 'oda sıcaklığı: 20 °C', { boy: 13, hiza: 'middle' }),
      '<rect x="82" y="42" width="36" height="20" rx="4" class="f-kv" stroke-width="2"/>',
      '<rect x="45" y="62" width="110" height="106" rx="18" class="f-s" stroke-width="2.5"/>',
      yazi(100, 108, 'Su (1,5 kg)', { boy: 13, hiza: 'middle' }),
      yazi(100, 129, '70 °C', { boy: 14, hiza: 'middle' }),
      yazi(100, 192, 'c = 4200 J/kg·°C', { boy: 12, hiza: 'middle' }),
      '<rect x="242" y="42" width="36" height="20" rx="4" class="f-k" stroke-width="2"/>',
      '<rect x="205" y="62" width="110" height="106" rx="18" class="f-kv" stroke-width="2.5"/>',
      yazi(260, 108, 'Yağ (1,5 kg)', { boy: 13, hiza: 'middle' }),
      yazi(260, 129, '70 °C', { boy: 14, hiza: 'middle' }),
      yazi(260, 192, 'c = 2000 J/kg·°C', { boy: 12, hiza: 'middle' }),
    ),
    dogruCevap: r`a) $C_{su} = 6300\ \text{J}/^\circ\text{C}$, $C_{yag} = 3000\ \text{J}/^\circ\text{C}$ · b) $Q_{su} = 315\ \text{kJ}$, $Q_{yag} = 150\ \text{kJ}$ · c) Öz ısısı büyük olduğu için su tercih edilmelidir`,
    adimAdimCozum: [
      r`a) Isı sığası $C = m \cdot c$ bağıntısıyla bulunur: $C_{su} = 1{,}5 \cdot 4200 = 6300\ \text{J}/^\circ\text{C}$ ve $C_{yag} = 1{,}5 \cdot 2000 = 3000\ \text{J}/^\circ\text{C}$.`,
      r`b) Sıcaklık değişimi her ikisi için $\Delta T = 70 - 20 = 50\ ^\circ\text{C}$'dir. $Q_{su} = 6300 \cdot 50 = 315\,000\ \text{J} = 315\ \text{kJ}$; $Q_{yag} = 3000 \cdot 50 = 150\,000\ \text{J} = 150\ \text{kJ}$.`,
      r`c) Öz ısısı büyük olan maddeler eşit kütle ve eşit sıcaklık değişiminde çevreye daha fazla ısı verir ve daha geç soğur; bu nedenle su kullanılması daha avantajlıdır.`,
    ],
    rubrik: [
      { olcut: 'Suyun ve yağın ısı sığalarını doğru hesaplama', puan: 3 },
      { olcut: 'İki sıvının çevreye verdiği ısıyı kJ cinsinden doğru bulma', puan: 4 },
      { olcut: 'Öz ısı büyüklüğü ile geç soğuma/fazla ısı verme ilişkisini kurma', puan: 3 },
    ],
  },
  {
    id: '9-T4-23',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.5',
    surecBileseni: 'Isının ışıma yoluyla aktarımının özelliklerini ve yüzey renginin soğurmaya etkisini açıklar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Isının ışıma (radyasyon) yoluyla aktarımıyla ilgili,

I. Güneş'ten Dünya'ya ulaşan enerji, maddesel ortam bulunmayan uzay boşluğunu ışıma yoluyla geçer.
II. Sıcaklığı mutlak sıfırın ($0\ \text{K}$) üzerinde olan tüm cisimler çevrelerine termal ışıma yayar.
III. Açık renkli ve parlak yüzeyler, üzerlerine düşen ışımanın büyük bölümünü yansıtarak koyu ve mat yüzeylere göre daha az enerji soğurur.

yargılarından hangileri doğrudur?`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız III', C: 'I ve II', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'E',
    adimAdimCozum: [
      'I. Elektromanyetik dalgalarla gerçekleşen ışıma için maddesel ortama ihtiyaç yoktur; Güneş enerjisi Dünya’ya bu yolla ulaşır. **Doğru**',
      r`II. Mutlak sıfırın ($0\ \text{K}$) üzerindeki her madde tanecik titreşimleri nedeniyle çevreye ışıma yayar; termal kameralar bu ilkeyle çalışır. **Doğru**`,
      r`III. Parlak ve açık renkli yüzeyler iyi yansıtıcı, zayıf soğurucudur; yazlık giysilerde açık renklerin seçilmesinin nedeni budur. **Doğru** $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '9-T4-24',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.1',
    surecBileseni: 'Farklı ölçeklerde sıcaklıkları verilen su örneklerinin ortalama kinetik enerjilerini, iç enerjilerini ve ısı akış yönünü karşılaştırır.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Isıca yalıtılmış bir tezgâh üzerindeki özdeş cam beherlerde bulunan saf su örneklerinin kütleleri ve başlangıç sıcaklıkları şekilde verilmiştir.

I. X ve Y beherlerindeki su moleküllerinin ortalama kinetik enerjileri birbirine eşittir.
II. X ve Y beherlerindeki sular yalıtılmış bir kapta karıştırılırsa X'ten Y'ye doğru net ısı akışı gerçekleşir.
III. Z beherindeki suyun iç enerjisi, X beherindeki suyun iç enerjisinden büyüktür.

Buna göre yukarıdaki yargılardan hangileri doğrudur? ($0\ ^\circ\text{C} = 273\ \text{K}$)`,
    svgDiyagram: svg(
      380, 200, 'X, Y ve Z beherlerindeki saf su örnekleri',
      cizgi(20, 165, 360, 165, { k: 2.5 }),
      '<rect x="47" y="105" width="66" height="58" class="f-s" stroke="none"/>',
      '<path d="M45 75 L45 165 L115 165 L115 75" fill="none" stroke-width="2.5"/>',
      yazi(80, 65, 'X', { boy: 15, hiza: 'middle' }),
      yazi(80, 132, '100 g', { boy: 12, hiza: 'middle' }),
      yazi(80, 185, '300 K', { boy: 13, hiza: 'middle' }),
      '<rect x="152" y="82" width="76" height="81" class="f-s" stroke="none"/>',
      '<path d="M150 65 L150 165 L230 165 L230 65" fill="none" stroke-width="2.5"/>',
      yazi(190, 55, 'Y', { boy: 15, hiza: 'middle' }),
      yazi(190, 125, '200 g', { boy: 12, hiza: 'middle' }),
      yazi(190, 185, '27 °C', { boy: 13, hiza: 'middle' }),
      '<rect x="267" y="105" width="66" height="58" class="f-s" stroke="none"/>',
      '<path d="M265 75 L265 165 L335 165 L335 75" fill="none" stroke-width="2.5"/>',
      yazi(300, 65, 'Z', { boy: 15, hiza: 'middle' }),
      yazi(300, 132, '100 g', { boy: 12, hiza: 'middle' }),
      yazi(300, 185, '47 °C', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'I, II ve III' },
    dogruCevap: 'D',
    adimAdimCozum: [
      r`I. $T_X = 300\ \text{K} = 300 - 273 = 27\ ^\circ\text{C}$ olduğundan $T_X = T_Y$'dir; sıcaklıkları eşit olan sularda moleküllerin ortalama kinetik enerjileri eşittir. **Doğru**`,
      r`II. X ve Y'nin sıcaklıkları eşit ($27\ ^\circ\text{C}$) olduğundan karıştırıldıklarında aralarında net ısı alışverişi olmaz. **Yanlış**`,
      r`III. X ve Z kaplarında eşit kütlede ($100\ \text{g}$) sıvı su vardır; $T_Z = 47\ ^\circ\text{C} > T_X = 27\ ^\circ\text{C}$ olduğu için Z'deki suyun iç enerjisi daha büyüktür. **Doğru** $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '9-T4-25',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.3',
    surecBileseni: 'Sabit güçlü ısıtıcıyla elde edilen sıcaklık–zaman grafiğinden erime ısısının katı öz ısısına oranını hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Başlangıçta katı hâlde bulunan saf bir K maddesi, birim zamanda sabit ısı veren bir kaynakla ısıtıldığında sıcaklığının zamana bağlı değişim grafiği şekildeki gibi oluyor.

Çevreyle ısı alışverişi önemsenmediğine göre K maddesinin erime ısısının katı hâldeki öz ısısına oranı $\dfrac{L_{erime}}{c_{kati}}$ kaç $^\circ\text{C}$'dir?`,
    svgDiyagram: svg(
      360, 240, 'Katı K maddesinin sıcaklık–zaman grafiği',
      eksen(60, 210, 285, 190, 't (dk)', 'T (°C)'),
      cizgi(60, 115, 99, 115, { sinif: 'k', k: 1.5 }),
      cizgi(60, 65, 270, 65, { sinif: 'k', k: 1.5 }),
      cizgi(99, 115, 99, 210, { sinif: 'k', k: 1.5 }),
      cizgi(218, 115, 218, 210, { sinif: 'k', k: 1.5 }),
      cizgi(270, 65, 270, 210, { sinif: 'k', k: 1.5 }),
      '<path d="M60 190 L99 115 L218 115 L270 65" fill="none" class="c-v" stroke-width="4"/>',
      yazi(52, 70, '110', { boy: 13, hiza: 'end' }),
      yazi(52, 120, '70', { boy: 13, hiza: 'end' }),
      yazi(52, 195, '10', { boy: 13, hiza: 'end' }),
      yazi(99, 228, '3', { boy: 13, hiza: 'middle' }),
      yazi(218, 228, '12', { boy: 13, hiza: 'middle' }),
      yazi(270, 228, '16', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: '$90$', B: '$180$', C: '$210$', D: '$240$', E: '$280$' },
    dogruCevap: 'B',
    hesap: '((12 - 3) / 3) * (70 - 10)',
    adimAdimCozum: [
      r`Isıtıcının $1\ \text{dk}$'da verdiği ısı $P$ olsun. İlk $3\ \text{dk}$'da katı madde $10\ ^\circ\text{C}$'den $70\ ^\circ\text{C}$'ye ısınır: $3P = m \cdot c_{kati} \cdot (70 - 10) = 60\,m\,c_{kati}$.`,
      r`$3$. ve $12$. dakikalar arasındaki $\Delta t = 9\ \text{dk}$ boyunca madde erir: $9P = m \cdot L_{erime}$.`,
      r`İki bağıntı taraf tarafa oranlanırsa $\dfrac{9P}{3P} = \dfrac{m \cdot L_{erime}}{60\,m\,c_{kati}} \Rightarrow 3 = \dfrac{L_{erime}}{60\,c_{kati}}$ elde edilir.`,
      r`Buradan $\dfrac{L_{erime}}{c_{kati}} = 180\ ^\circ\text{C}$ bulunur (erime süresi $12\ \text{dk}$ alınırsa $240$, $\Delta T$ yerine $70$ alınırsa $210$ çıkar). $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '9-T4-26',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.4',
    surecBileseni: 'İkili karışımların denge sıcaklıklarından sıvıların ısı sığası oranını bularak üçüncü karışımın denge sıcaklığını hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Başlangıç sıcaklıkları $T_X = 20\ ^\circ\text{C}$, $T_Y = 50\ ^\circ\text{C}$ ve $T_Z = 80\ ^\circ\text{C}$ olan X, Y ve Z sıvıları birbirleriyle kimyasal tepkimeye girmemekte ve deney süresince hâl değiştirmemektedir. Isıca yalıtılmış kaplarda yapılan ölçümlerde:

• Başlangıç sıcaklıklarındaki X ve Y sıvıları karıştırıldığında denge sıcaklığı $40\ ^\circ\text{C}$ oluyor.
• Başlangıç sıcaklıklarındaki Y ve Z sıvıları karıştırıldığında denge sıcaklığı $68\ ^\circ\text{C}$ oluyor.

Buna göre başlangıç sıcaklıklarındaki X ve Z sıvıları ısıca yalıtılmış bir kapta doğrudan karıştırılırsa denge sıcaklığı kaç $^\circ\text{C}$ olur?`,
    secenekler: { A: '$50$', B: '$60$', C: '$65$', D: '$70$', E: '$72$' },
    dogruCevap: 'C',
    hesap: '(1 * 20 + 3 * 80) / (1 + 3)',
    adimAdimCozum: [
      r`X–Y karışımında $Q_{al} = Q_{ver}$ yazılırsa: $C_X (40 - 20) = C_Y (50 - 40) \Rightarrow 20\,C_X = 10\,C_Y \Rightarrow C_Y = 2\,C_X$.`,
      r`Y–Z karışımında: $C_Y (68 - 50) = C_Z (80 - 68) \Rightarrow 18\,C_Y = 12\,C_Z \Rightarrow C_Z = 1{,}5\,C_Y = 3\,C_X$.`,
      r`X ve Z doğrudan karıştırıldığında: $C_X (T - 20) = 3\,C_X (80 - T) \Rightarrow T - 20 = 240 - 3T$.`,
      r`$4T = 260 \Rightarrow T = 65\ ^\circ\text{C}$ bulunur (üçü birlikte karıştırılsaydı $60\ ^\circ\text{C}$ olurdu). $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '9-T4-27',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.3',
    surecBileseni: 'Donma olayında çevreye verilen ısıyı tarımsal bir koruma yöntemi üzerinden açıklar ve hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Narenciye Deposunda Donmaya Karşı Önlem:** Kış gecelerinde dış hava sıcaklığının sıfırın altına düştüğü bölgelerde üreticiler, depodaki meyvelerin donmasını geciktirmek için içeriye su dolu geniş variller bırakır. Hava sıcaklığı $0\ ^\circ\text{C}$'ye kadar düşmüş kapalı bir depoya, içinde $0\ ^\circ\text{C}$'de $50\ \text{kg}$ saf su bulunan bir varil yerleştiriliyor. Gece boyunca varildeki suyun yarısı ($25\ \text{kg}$) donarak $0\ ^\circ\text{C}$'de buza dönüşüyor. ($L_{donma} = 80\ \text{kcal/kg}$)

a) Varildeki su donarken depo havasından ısı mı alır, yoksa depo havasına ısı mı verir? Taneciklerin potansiyel enerjisindeki değişimle açıklayınız.
b) Gece boyunca $25\ \text{kg}$ suyun donması sonucunda depo ortamına aktarılan toplam ısı kaç kilokaloridir?
c) Üretici depoya başlangıçta $0\ ^\circ\text{C}$'de su yerine aynı kütlede $0\ ^\circ\text{C}$'de buz kalıbı koysaydı meyveleri donmaya karşı koruyabilir miydi? Gerekçelendiriniz.`,
    svgDiyagram: svg(
      360, 215, 'Narenciye deposunda donan su varilinden ortama ısı aktarımı',
      '<rect x="24" y="24" width="312" height="174" rx="6" class="f-k" stroke-width="2.5"/>',
      yazi(180, 46, 'kapalı narenciye deposu (0 °C)', { boy: 13, hiza: 'middle' }),
      '<rect x="62" y="102" width="86" height="82" class="f-s" stroke="none"/>',
      '<rect x="62" y="88" width="86" height="14" class="f-kv" stroke-width="1.5"/>',
      '<rect x="60" y="74" width="90" height="112" rx="6" fill="none" stroke-width="2.5"/>',
      yazi(105, 142, '50 kg su', { boy: 12, hiza: 'middle' }),
      yazi(105, 160, '0 °C', { boy: 12, hiza: 'middle' }),
      ok(158, 114, 206, 98, 'v', 2.5),
      ok(158, 146, 206, 158, 'v', 2.5),
      yazi(182, 134, 'Q', { boy: 13, hiza: 'middle' }),
      '<rect x="220" y="106" width="94" height="38" class="f-kv" stroke-width="2"/>',
      '<rect x="220" y="148" width="94" height="38" class="f-kv" stroke-width="2"/>',
      yazi(267, 130, 'narenciye', { boy: 12, hiza: 'middle' }),
      yazi(267, 172, 'kasaları', { boy: 12, hiza: 'middle' }),
    ),
    dogruCevap: r`a) Depo havasına ısı verir · b) $2000\ \text{kcal}$ · c) Hayır; $0\ ^\circ\text{C}$'deki buz donma ısısı veremez`,
    adimAdimCozum: [
      'a) Donma ekzotermik (ısı veren) bir hâl değişimidir. Sıvı tanecikleri düzenli katı örgüye geçerken aralarındaki bağ potansiyel enerjisi azalır; açığa çıkan enerji depo havasına ısı olarak verilir.',
      r`b) Donan su kütlesi $m = 25\ \text{kg}$ olduğundan ortama aktarılan ısı $Q = m \cdot L_{donma} = 25 \cdot 80 = 2000\ \text{kcal}$ olur.`,
      r`c) Hayır. $0\ ^\circ\text{C}$'deki buz zaten katı hâldedir; donarak ortama gizli ısı veremez, yalnızca depo sıcaklığı $0\ ^\circ\text{C}$'nin altına düştükçe soğurken çok daha az ısı ($c_{buz} \cdot \Delta T$) verebilir.`,
    ],
    rubrik: [
      { olcut: 'Donma sırasında ortama ısı verildiğini potansiyel enerjiyle açıklama', puan: 3 },
      { olcut: 'Aktarılan toplam ısıyı 2000 kcal olarak doğru hesaplama', puan: 4 },
      { olcut: '0 °C buzun donma gizli ısısı veremeyeceğini gerekçeli açıklama', puan: 3 },
    ],
  },
  {
    id: '9-T4-28',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.6',
    surecBileseni: 'Aynı sıcaklıktaki farklı maddelerin dokunulduğunda farklı hissedilmesini ısı iletim hızıyla açıklar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Serin bir sonbahar sabahında parkta yan yana duran demir bank ile ahşap bankın sıcaklıkları termometreyle ölçüldüğünde her ikisinin de $10\ ^\circ\text{C}$ olduğu görülüyor. Buna karşın banka oturan bir kişi demir bankı ahşap banktan çok daha soğuk hissediyor.

Bu durumun temel fiziksel nedeni aşağıdakilerden hangisidir?`,
    secenekler: {
      A: 'Demir bankın iç enerjisinin aynı sıcaklıktaki ahşap bankın iç enerjisinden küçük olması',
      B: 'Demirin ısı iletim hızının yüksek olmasıyla vücuttan daha hızlı ısı çekmesi',
      C: 'Demir atomlarının ortalama kinetik enerjisinin ahşap taneciklerininkinden düşük olması',
      D: 'Ahşap bankın çevredeki havadan sürekli konveksiyon yoluyla ekstra enerji depolaması',
      E: 'Demir yüzeyin dış ortamdan gelen tüm termal ışımayı soğurmadan uzaya geri yansıtması',
    },
    dogruCevap: 'B',
    adimAdimCozum: [
      r`İki bank da $10\ ^\circ\text{C}$'de ısıl dengede olduğundan taneciklerinin ortalama kinetik enerjileri eşittir; ancak her ikisi de yaklaşık $36{,}5\ ^\circ\text{C}$ olan insan vücudundan soğuktur.`,
      'Dokunma anında vücuttan banka doğru ısı akışı başlar; soğukluk hissi termometredeki sıcaklığa değil, deriden birim zamanda çekilen ısı hızına bağlıdır.',
      r`Demirin ısı iletim katsayısı ahşabınkinden çok büyük olduğundan vücuttan birim zamanda daha fazla ısı çeker ve daha soğuk hissedilir. $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '9-T4-29',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.5',
    surecBileseni: 'Üstten ısıtılan sıvı deneyinden konveksiyon ve iletimin rolüne ilişkin çıkarım yapar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir deneyde cam tüpün dibine ince tel yardımıyla $0\ ^\circ\text{C}$'de küçük bir buz parçası sabitlenip tüp oda sıcaklığındaki suyla dolduruluyor. Tüp şekildeki gibi yalnızca üst bölgesinden ısıtıldığında, kısa süre sonra üst kısımdaki su kaynamaya başladığı hâlde dipteki buzun henüz erimediği gözleniyor.

I. Üst bölgede ısınan suyun özkütlesi azaldığından sıcak su aşağı inemez ve tüpün dibine doğru konveksiyon akımı oluşmaz.
II. Durgun suyun ısı iletim katsayısı küçük olduğundan ısı, üst bölgeden alt bölgeye iletim yoluyla çok yavaş aktarılır.
III. Isıtıcı tüpün alt ucuna tutulsaydı oluşan konveksiyon akımları sayesinde ısı hızla yayılarak buzu kısa sürede eritirdi.

Bu gözlemden hareketle yukarıdaki yargılardan hangilerine ulaşılabilir?`,
    svgDiyagram: svg(
      360, 225, 'Üst kısmından ısıtılan su dolu deney tüpü ve dipteki buz',
      '<rect x="107" y="56" width="36" height="136" rx="16" class="f-s" stroke="none"/>',
      '<path d="M105 32 L105 175 A20 20 0 0 0 145 175 L145 32" fill="none" stroke-width="2.5"/>',
      cizgi(107, 156, 143, 156, { sinif: 'k', k: 2 }),
      '<rect x="113" y="161" width="24" height="22" class="f-kv" stroke-width="2"/>',
      '<circle cx="118" cy="70" r="4" fill="none" class="c-i" stroke-width="1.5"/>',
      '<circle cx="132" cy="80" r="5" fill="none" class="c-i" stroke-width="1.5"/>',
      '<circle cx="121" cy="90" r="3.5" fill="none" class="c-i" stroke-width="1.5"/>',
      ok(44, 76, 98, 76, 'v', 2.5),
      ok(44, 94, 98, 94, 'v', 2.5),
      yazi(40, 62, 'ısıtıcı', { boy: 13 }),
      cizgi(145, 78, 195, 78, { k: 1 }),
      yazi(200, 82, 'kaynayan su', { boy: 13 }),
      cizgi(145, 124, 195, 124, { k: 1 }),
      yazi(200, 128, 'durgun su', { boy: 13 }),
      cizgi(145, 172, 195, 172, { k: 1 }),
      yazi(200, 170, 'tel ile tutulan', { boy: 12 }),
      yazi(200, 186, 'buz (0 °C)', { boy: 12 }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'I, II ve III' },
    dogruCevap: 'E',
    adimAdimCozum: [
      'I. Sıcaklığı artan üstteki su genleşir, özkütlesi küçülür ve üstte kalmaya devam eder; aşağı yönlü doğal konveksiyon döngüsü kurulamaz. **Doğru**',
      'II. Konveksiyon engellendiğinde ısı aşağıya yalnızca iletimle geçebilir; durgun su kötü bir ısı iletkeni olduğu için dipteki buz uzun süre erimez. **Doğru**',
      r`III. Tüp alttan ısıtılsaydı ısınan su yükselecek, üstteki soğuk su dibe inecek ve konveksiyonla tüm sıvı hızla ısınacaktı. **Doğru** $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '9-T4-30',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.4',
    surecBileseni: 'Kalorimetre kabının ısı sığasını hesaba katarak bilinmeyen bir alaşımın öz ısısını ve ihmal hatasını değerlendirir.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Kalorimetre Kabının Etkisi:** Bir malzeme mühendisi, yeni geliştirdiği $500\ \text{g}$ kütleli metal alaşımın öz ısısını ölçmek için dışı yalıtılmış bir kalorimetre düzeneği kuruyor. Kalorimetrenin içindeki bakır haznenin kütlesi $400\ \text{g}$ olup içinde $20\ ^\circ\text{C}$ sıcaklıkta $360\ \text{g}$ saf su bulunmaktadır. Fırında $120\ ^\circ\text{C}$'ye kadar ısıtılan alaşım numunesi suya daldırıldığında sistemin denge sıcaklığı grafikteki gibi $40\ ^\circ\text{C}$'de sabitleniyor. ($c_{su} = 1\ \text{cal/g}\,^\circ\text{C}$, $c_{bakir} = 0{,}1\ \text{cal/g}\,^\circ\text{C}$; dış ortamla ısı alışverişi önemsizdir.)

a) Bakır haznenin ve içindeki suyun $20\ ^\circ\text{C}$'den $40\ ^\circ\text{C}$'ye çıkarken aldığı toplam ısı kaç kaloridir?
b) Alaşım numunesinin gerçek öz ısısını ($\text{cal/g}\,^\circ\text{C}$ cinsinden) hesaplayınız.
c) Mühendis bakır haznenin aldığı ısıyı önemsiz kabul etseydi alaşımın öz ısısını kaç $\text{cal/g}\,^\circ\text{C}$ bulurdu? Bu ihmalin ölçüm sonucunu nasıl etkilediğini yorumlayınız.`,
    svgDiyagram: svg(
      360, 235, 'Alaşım ile su ve bakır haznenin sıcaklık–zaman grafiği',
      eksen(60, 205, 280, 185, 't', 'T (°C)'),
      cizgi(60, 145, 300, 145, { sinif: 'k', k: 1.5 }),
      '<path d="M60 55 Q140 135 280 145" fill="none" class="c-v" stroke-width="3.5"/>',
      '<path d="M60 175 Q140 150 280 145" fill="none" class="c-i" stroke-width="3.5"/>',
      yazi(52, 60, '120', { boy: 13, hiza: 'end' }),
      yazi(52, 150, '40', { boy: 13, hiza: 'end' }),
      yazi(52, 180, '20', { boy: 13, hiza: 'end' }),
      yazi(145, 88, 'alaşım (500 g)', { boy: 12 }),
      yazi(125, 186, 'su (360 g) + bakır kap (400 g)', { boy: 12 }),
    ),
    dogruCevap: r`a) $8000\ \text{cal}$ · b) $0{,}2\ \text{cal/g}\,^\circ\text{C}$ · c) $0{,}18\ \text{cal/g}\,^\circ\text{C}$; gerçek değerinden küçük bulunurdu`,
    adimAdimCozum: [
      r`a) Bakır haznenin ısı sığası $C_{kap} = 400 \cdot 0{,}1 = 40\ \text{cal}/^\circ\text{C}$, suyun ısı sığası $C_{su} = 360 \cdot 1 = 360\ \text{cal}/^\circ\text{C}$'dir. $\Delta T = 40 - 20 = 20\ ^\circ\text{C}$ için toplam alınan ısı $Q_{al} = (40 + 360) \cdot 20 = 8000\ \text{cal}$ olur.`,
      r`b) Alaşımın verdiği ısı $Q_{ver} = 500 \cdot c_{alasim} \cdot (120 - 40) = 40\,000\,c_{alasim}$'dir. $40\,000\,c_{alasim} = 8000 \Rightarrow c_{alasim} = 0{,}2\ \text{cal/g}\,^\circ\text{C}$ bulunur.`,
      r`c) Bakır kap ihmal edilseydi yalnızca suyun aldığı ısı ($360 \cdot 20 = 7200\ \text{cal}$) hesaba katılır ve $40\,000\,c' = 7200 \Rightarrow c' = 0{,}18\ \text{cal/g}\,^\circ\text{C}$ çıkardı. Kabın soğurduğu enerji göz ardı edildiği için alaşımın öz ısısı gerçek değerinden %10 küçük ölçülürdü.`,
    ],
    rubrik: [
      { olcut: 'Su ve bakır haznenin aldığı toplam ısıyı 8000 cal olarak hesaplama', puan: 3 },
      { olcut: 'Isıl denge eşitliğinden alaşımın öz ısısını 0,2 cal/g·°C bulma', puan: 4 },
      { olcut: 'İhmal durumunda 0,18 cal/g·°C bulup sonucun küçüldüğünü yorumlama', puan: 3 },
    ],
  },
  {
    id: '9-T4-31',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.1',
    surecBileseni: 'Gaz taneciklerinin ortalama kinetik enerjisi ile mutlak sıcaklık arasındaki doğru orantıyı kullanarak sıcaklık artışını hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Sabit hacimli kapalı K ve L kaplarında bulunan gazların başlangıç sıcaklıkları sırasıyla $-23\ ^\circ\text{C}$ ve $27\ ^\circ\text{C}$'dir. K kabındaki gaz bir ısıtıcıyla ısıtılarak, taneciklerinin ortalama kinetik enerjisi L kabındaki gazın başlangıçtaki taneciklerinin ortalama kinetik enerjisinin $2$ katına çıkarılıyor.

Buna göre bu işlem sonunda K gazının sıcaklığı kaç $^\circ\text{C}$ artmıştır? ($0\ ^\circ\text{C} = 273\ \text{K}$)`,
    svgDiyagram: svg(
      360, 210, 'Kapalı K ve L gaz kapları',
      '<rect x="55" y="42" width="100" height="110" rx="12" class="f-kv" stroke-width="2.5"/>',
      yazi(105, 86, 'K gazı', { boy: 14, hiza: 'middle' }),
      yazi(105, 114, '−23 °C', { boy: 13, hiza: 'middle' }),
      ok(85, 186, 85, 158, 'v', 2.5),
      ok(125, 186, 125, 158, 'v', 2.5),
      yazi(105, 204, 'ısıtıcı', { boy: 12, hiza: 'middle' }),
      '<rect x="205" y="42" width="100" height="110" rx="12" class="f-k" stroke-width="2.5"/>',
      yazi(255, 86, 'L gazı', { boy: 14, hiza: 'middle' }),
      yazi(255, 114, '27 °C', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: '$77$', B: '$250$', C: '$304$', D: '$327$', E: '$350$' },
    dogruCevap: 'E',
    hesap: '2 * (27 + 273) - (-23 + 273)',
    adimAdimCozum: [
      r`Başlangıç mutlak sıcaklıkları: $T_{K,ilk} = -23 + 273 = 250\ \text{K}$ ve $T_{L,ilk} = 27 + 273 = 300\ \text{K}$'dir.`,
      r`Ortalama kinetik enerji mutlak sıcaklıkla doğru orantılı olduğundan K'nin son sıcaklığı $T_{K,son} = 2 \cdot T_{L,ilk} = 2 \cdot 300 = 600\ \text{K}$ ($327\ ^\circ\text{C}$) olur.`,
      r`Celsius ve Kelvin ölçeklerinde sıcaklık değişimi ($\Delta T$) sayıca eşittir: $\Delta T_K = 600 - 250 = 350\ ^\circ\text{C}$ (veya $327 - (-23) = 350\ ^\circ\text{C}$).`,
      r`Son sıcaklık olan $327$ ile sıcaklık artışı olan $350$ karıştırılmamalıdır. $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '9-T4-32',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.5',
    surecBileseni: 'İç mekân ısıtma ve soğutma araçlarının konumunu konveksiyon, iletim ve ışıma ilkeleriyle değerlendirir.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – İklimlendirme ve Hava Akımları:** Yüksek tavanlı bir salonun tadilatında ev sahibi, duvar dekorasyonunu bozmamak için kalorifer peteğinin tavana yakın bir noktaya, yazın soğutma amacıyla kullanılacak klimanın ise zemine yakın bir noktaya monte edilmesini istiyor. Tesisat ustası bu yerleşimin fiziksel açıdan verimsiz olacağını belirterek peteğin arkasına ayrıca parlak alüminyum folyolu bir köpük levha yerleştirilmesini öneriyor.

a) Ev sahibinin istediği yerleşim uygulanırsa kışın ısınmada ve yazın serinlemede ne tür bir sorun yaşanacağını akışkan özkütlesi ve konveksiyon akımlarıyla açıklayınız.
b) Doğal hava dolaşımının verimli olması için kalorifer peteği ve klima düşey doğrultuda nerelere monte edilmelidir?
c) Peteğin arkasına konulan parlak folyolu köpük levhanın hangi iki ısı aktarım yoluyla gerçekleşen enerji kaybını azalttığını açıklayınız.`,
    dogruCevap: r`a) Sıcak hava üstte, soğuk hava altta hapsolur; konveksiyon döngüsü oluşmaz · b) Petek zemine yakın, klima tavana yakın · c) Parlak folyo ışımayı yansıtır, köpük dış duvara iletimi azaltır`,
    adimAdimCozum: [
      'a) Isınan hava genleşir, özkütlesi azalır ve yukarı çıkar; soğuyan havanın ise özkütlesi artar ve aşağı çöker. Petek tavana yakın olursa sıcak hava tavanda birikir; klima zemine yakın olursa soğuk hava tabanda kalır ve odanın tamamını kapsayan konveksiyon akımı oluşmaz.',
      'b) Isınan havanın yükselerek tüm odayı dolaşması için kalorifer peteği zemine (pencere altına) yakın; soğuyan havanın aşağı inerek odayı serinletmesi için klima tavana yakın monte edilmelidir.',
      'c) Levhanın parlak alüminyum yüzeyi petekten duvara doğru yayılan termal ışımayı odaya geri yansıtır (ışıma kaybını önler); köpük katman ise düşük ısı iletim katsayısı sayesinde dış duvara iletim yoluyla kaçan ısıyı azaltır.',
    ],
    rubrik: [
      { olcut: 'Özkütle değişimi nedeniyle konveksiyon döngüsünün kurulamayacağını açıklama', puan: 4 },
      { olcut: 'Petek ve klima için doğru düşey konumları gerekçesiyle belirtme', puan: 3 },
      { olcut: 'Parlak folyoyu ışıma, köpük tabakayı iletim kaybıyla doğru eşleştirme', puan: 3 },
    ],
  },
  {
    id: '9-T4-33',
    sinif: 9,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.9.4.6',
    surecBileseni: 'Yalıtımlı bir taşıma kutusuna iletilen ısı hızını ve içindeki buzun koruma süresini birlikte hesaplayarak tasarımı geliştirir.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Soğuk Zincir Aşı Kutusu:** Kırsal bir bölgeye aşı ulaştıran sağlık ekibi, toplam ısı geçiş yüzey alanı $A = 0{,}4\ \text{m}^2$ ve gövde kalınlığı $d = 3{,}5\ \text{cm}$ olan poliüretan köpükten yapılmış bir taşıma kutusu kullanıyor. Kutunun iç sıcaklığını $0\ ^\circ\text{C}$'de tutmak amacıyla içeriye $0\ ^\circ\text{C}$'de $900\ \text{g}$ kütleli buz aküsü yerleştiriliyor. Yolculuk süresince dış hava sıcaklığı sabit $35\ ^\circ\text{C}$'dir. ($k_{kopuk} = 0{,}035\ \text{W/m}\,^\circ\text{C}$, $L_{erime} = 336\ \text{J/g}$, $1\ \text{W} = 1\ \text{J/s}$, $\dfrac{Q}{t} = \dfrac{k \cdot A \cdot \Delta T}{d}$)

a) Dış ortamdan kutunun içine birim zamanda iletilen ısı hızını (watt cinsinden) hesaplayınız.
b) Buz aküsünün tamamen erimesi için soğurabileceği toplam ısıyı ($\text{kJ}$) ve buzun tamamen eriyene kadar aşıları kaç saat boyunca $0\ ^\circ\text{C}$'de koruyabileceğini hesaplayınız.
c) Yolculuğun $10\ \text{saat}$ sürmesi bekleniyorsa kutunun iç hacmini ve buz kütlesini değiştirmeden koruma süresini uzatmak için kutu tasarımında yapılabilecek iki mühendislik değişikliğini açıklayınız.`,
    svgDiyagram: svg(
      370, 220, 'Poliüretan köpük aşı kutusu kesiti',
      olcu(55, 28, 77, 28, 'd = 3,5 cm', { dx: 24, dy: -6 }),
      '<rect x="55" y="40" width="190" height="145" rx="8" class="f-k" stroke-width="2.5"/>',
      '<rect x="77" y="62" width="146" height="101" rx="4" fill="none" class="c-i" stroke-width="2"/>',
      '<rect x="92" y="72" width="116" height="24" rx="4" class="f-kv" stroke-width="2"/>',
      yazi(150, 89, 'buz aküsü: 900 g', { boy: 12, hiza: 'middle' }),
      yazi(150, 114, 'iç: 0 °C', { boy: 12, hiza: 'middle' }),
      '<rect x="108" y="122" width="20" height="32" class="f-s" stroke-width="1.5"/>',
      '<rect x="140" y="122" width="20" height="32" class="f-s" stroke-width="1.5"/>',
      '<rect x="172" y="122" width="20" height="32" class="f-s" stroke-width="1.5"/>',
      ok(312, 112, 252, 112, 'v', 2.5),
      yazi(256, 92, 'dış: 35 °C', { boy: 13 }),
      yazi(256, 142, 'A = 0,4 m²', { boy: 12 }),
      yazi(150, 206, 'köpük gövde (k = 0,035 W/m·°C)', { boy: 12, hiza: 'middle' }),
    ),
    dogruCevap: r`a) $14\ \text{W}$ · b) $302{,}4\ \text{kJ}$ ve $6\ \text{saat}$ · c) Köpük kalınlığı $d$ artırılabilir ve $k$ değeri daha küçük malzeme / yansıtıcı dış kaplama kullanılabilir`,
    adimAdimCozum: [
      r`a) Kalınlık $d = 3{,}5\ \text{cm} = 0{,}035\ \text{m}$ ve sıcaklık farkı $\Delta T = 35 - 0 = 35\ ^\circ\text{C}$'dir. İletim hızı $\dfrac{Q}{t} = \dfrac{0{,}035 \cdot 0{,}4 \cdot 35}{0{,}035} = 14\ \text{W}$ ($14\ \text{J/s}$) bulunur.`,
      r`b) Buzun tamamını eriten enerji $Q_{erime} = m \cdot L_{erime} = 900 \cdot 336 = 302\,400\ \text{J} = 302{,}4\ \text{kJ}$'dir. Geçen süre $t = \dfrac{302\,400\ \text{J}}{14\ \text{J/s}} = 21\,600\ \text{s} = \dfrac{21\,600}{3600} = 6\ \text{saat}$ olur.`,
      'c) İç hacmi küçültmeden dışa doğru duvar kalınlığı (d) artırılabilir, ısı iletim katsayısı (k) daha düşük vakumlu yalıtım paneli seçilebilir ya da kutunun dış yüzeyi ışımayı yansıtacak parlak açık renkle kaplanabilir.',
    ],
    rubrik: [
      { olcut: 'Birim dönüşümünü yaparak ısı iletim hızını 14 W olarak hesaplama', puan: 4 },
      { olcut: 'Erime enerjisini (302,4 kJ) ve koruma süresini (6 saat) doğru bulma', puan: 4 },
      { olcut: 'İç hacmi ve buz kütlesini koruyan iki geçerli mühendislik önerisi sunma', puan: 2 },
    ],
  },
]
