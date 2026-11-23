import type { Soru } from '../../tipler.ts'
import { cizgi, dalga, eksen, ok, olcu, svg, tarama, yazi } from '../../cizim.ts'

const r = String.raw
const TEMA = 'Dalgalar'

export const sorular: Soru[] = [
  {
    id: '10-16',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.2',
    surecBileseni: 'Dalga boyu, frekans ve yayılma sürati arasındaki ilişkiyi kullanır.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Gergin bir ipte oluşturulan periyodik dalganın belirli bir andaki görünümü şekildeki gibidir. Dalga kaynağının frekansı $5\ \text{Hz}$ olduğuna göre dalganın yayılma sürati kaç $\text{m/s}$'dir?`,
    svgDiyagram: svg(
      360, 200, 'Gergin ipte üç tam dalga',
      cizgi(30, 100, 330, 100, { sinif: 'k', k: 1 }),
      `<path d="${dalga(30, 100, 300, 3, 30)}" class="c-i" stroke-width="3.5"/>`,
      olcu(30, 170, 330, 170, '6 m', { dy: -8 }),
    ),
    secenekler: { A: '$10$', B: '$15$', C: '$20$', D: '$30$', E: '$60$' },
    dogruCevap: 'A',
    hesap: '(6/3) * 5',
    adimAdimCozum: [
      r`Şekilde $3$ tam dalga $6\ \text{m}$'lik uzunluğa sığmıştır: $\lambda = \dfrac{6}{3} = 2\ \text{m}$`,
      r`Dalga denklemi: $v = \lambda \cdot f = 2 \cdot 5$`,
      r`$v = 10\ \text{m/s}$ $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '10-17',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.1',
    surecBileseni: 'Periyodik hareketlerde periyot ve frekansı hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Parktaki bir salıncak $20\ \text{s}$'de $8$ tam salınım yapıyor. Salıncağın periyodu kaç saniyedir?`,
    secenekler: { A: r`$0{,}4$`, B: r`$1{,}25$`, C: '$2$', D: r`$2{,}5$`, E: '$4$' },
    dogruCevap: 'D',
    hesap: '20 / 8',
    adimAdimCozum: [
      r`Periyot, bir tam salınım için geçen süredir: $T = \dfrac{t}{n}$`,
      r`$T = \dfrac{20}{8} = 2{,}5\ \text{s}$ $\Rightarrow$ Cevap **D**`,
      r`Dikkat: $0{,}4$ değeri frekanstır ($f = \tfrac{1}{T} = 0{,}4\ \text{Hz}$).`,
    ],
  },
  {
    id: '10-18',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.5',
    surecBileseni: 'Su dalgalarının derin ortamdan sığ ortama geçişini dalga leğeni modeli ile yorumlar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir dalga leğeninde doğrusal su dalgaları şekildeki gibi derin bölgeden sığ bölgeye geçiyor.

I. Dalgaların frekansı değişmez.
II. Dalga boyu küçülür.
III. Dalgaların yayılma sürati artar.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      340, 200, 'Derin bölgeden sığ bölgeye geçen doğrusal su dalgaları',
      '<rect x="20" y="30" width="150" height="140" class="f-s" stroke="none"/>',
      '<rect x="170" y="30" width="150" height="140" class="f-k" stroke="none"/>',
      '<rect x="20" y="30" width="300" height="140" stroke-width="2"/>',
      cizgi(170, 30, 170, 170, { sinif: 'k', k: 1.5 }),
      '<path d="M40 40 V160 M76 40 V160 M112 40 V160 M148 40 V160" class="c-i" stroke-width="3"/>',
      '<path d="M190 40 V160 M212 40 V160 M234 40 V160 M256 40 V160 M278 40 V160 M300 40 V160" class="c-i" stroke-width="3"/>',
      ok(60, 186, 140, 186, 'v', 2.5),
      yazi(95, 24, 'derin', { boy: 13, hiza: 'middle' }),
      yazi(245, 24, 'sığ', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'I, II ve III' },
    dogruCevap: 'C',
    adimAdimCozum: [
      'I. Frekansı kaynak belirler; ortam değişince frekans değişmez. **Doğru**',
      'II. Şekilde sığ bölgede dalga tepeleri sıklaşmıştır; dalga boyu küçülür. **Doğru**',
      r`III. $v = \lambda f$; $f$ sabitken $\lambda$ küçüldüğüne göre sürat azalır. **Yanlış** $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '10-19',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.4',
    surecBileseni: 'Yay ve ip dalgalarında yayılma süratini etkileyen değişkenleri deneysel bağlamda belirler.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Müzik Kulübü:** Kulüp üyeleri bir gitar telindeki dalganın süratini araştırıyor. Teldeki dalga sürati $v = \sqrt{\dfrac{F}{\mu}}$ bağıntısıyla verilir ($F$: gerilme kuvveti, $\mu$: birim uzunluğun kütlesi).

a) Gerilme kuvveti $40\ \text{N}$, birim uzunluğun kütlesi $0{,}1\ \text{kg/m}$ olan teldeki dalga süratini hesaplayınız.
b) Gerilme kuvveti 4 katına çıkarılırsa dalga sürati nasıl değişir?
c) Kalın (birim uzunluk kütlesi büyük) tellerden daha pes (düşük frekanslı) ses çıkmasının nedenini açıklayınız.`,
    svgDiyagram: svg(
      360, 210, 'Makaradan geçen ve ağırlıkla gerilen ip',
      '<rect x="14" y="40" width="16" height="120" class="f-k" stroke-width="2"/>',
      `<path d="M30 100 L110 100 ${'q10 -24 20 0 q10 24 20 0'} L300 100" class="c-i" stroke-width="3"/>`,
      '<circle cx="306" cy="112" r="12" stroke-width="3"/>',
      cizgi(318, 112, 318, 160),
      '<rect x="302" y="160" width="32" height="32" rx="3" class="f-kv" stroke-width="2.5"/>',
      ok(200, 70, 260, 70, 'v', 2.5),
      yazi(200, 58, 'v', { boy: 14 }),
      yazi(250, 186, 'F', { boy: 14, hiza: 'end' }),
    ),
    dogruCevap: r`a) $20\ \text{m/s}$ · b) $2$ katına çıkar · c) $\mu$ büyükse $v$ ve dolayısıyla $f$ küçülür`,
    adimAdimCozum: [
      r`a) $v = \sqrt{\dfrac{40}{0{,}1}} = \sqrt{400} = 20\ \text{m/s}$`,
      r`b) $v \propto \sqrt{F}$: $F' = 4F \Rightarrow v' = \sqrt{4}\,v = 2v = 40\ \text{m/s}$`,
      r`c) Kalın telde $\mu$ büyüktür, sürat küçülür. Aynı uzunluktaki telde dalga boyu sabit kaldığından $f = \dfrac{v}{\lambda}$ azalır; ses pesleşir.`,
    ],
    rubrik: [
      { olcut: 'Dalga süratini doğru hesaplama', puan: 3 },
      { olcut: 'Gerilme kuvveti–sürat ilişkisini doğru kurma', puan: 3 },
      { olcut: 'Kütle–frekans ilişkisini gerekçeli açıklama', puan: 4 },
    ],
  },
  {
    id: '10-20',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.6',
    surecBileseni: 'Rezonans ve deprem dalgaları ile ilgili bilimsel bir model oluşturur.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Deprem İstasyonu:** Bir deprem istasyonu, merkez üssü $120\ \text{km}$ uzaklıktaki depremin P ve S dalgalarını kaydediyor. P dalgalarının sürati $6\ \text{km/s}$, S dalgalarının sürati $4\ \text{km/s}$'dir.

a) P ve S dalgalarının istasyona ulaşma sürelerini ve aralarındaki zaman farkını bulunuz.
b) Bu zaman farkının erken uyarı sistemlerinde nasıl kullanılabileceğini açıklayınız.
c) Doğal frekansı deprem dalgasının frekansına yakın olan binaların neden daha çok hasar gördüğünü rezonans kavramıyla açıklayınız.`,
    dogruCevap: r`a) $t_P = 20\ \text{s}$, $t_S = 30\ \text{s}$, fark $10\ \text{s}$ · c) Rezonansta genlik en büyük değerine ulaşır`,
    adimAdimCozum: [
      r`a) $t_P = \dfrac{120}{6} = 20\ \text{s}$; $t_S = \dfrac{120}{4} = 30\ \text{s}$; $\Delta t = 10\ \text{s}$`,
      'b) Önce gelen ve daha az yıkıcı olan P dalgası algılanınca, yıkıcı S dalgası gelmeden saniyeler önce alarm verilebilir; trenler durdurulur, gaz vanaları kapatılır.',
      'c) Dış etkinin frekansı sistemin doğal frekansına eşit/yakın olduğunda enerji aktarımı en verimli hâle gelir; titreşim genliği çok büyür ve yapı hasar görür.',
      'Mühendisler bu nedenle sönümleyici ve taban yalıtımı kullanarak binanın doğal frekansını deprem frekanslarından uzaklaştırır.',
    ],
    rubrik: [
      { olcut: 'Varış sürelerini ve farkı doğru hesaplama', puan: 4 },
      { olcut: 'Erken uyarı mantığını açıklama', puan: 2 },
      { olcut: 'Rezonansı doğal frekansla ilişkilendirerek açıklama', puan: 4 },
    ],
  },
  {
    id: '10-T4-01',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.1',
    surecBileseni: 'Yay–kütle sisteminin salınımında yarım periyotluk süreden frekansı hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Sürtünmesiz yatay düzlemde yaya bağlı bir cisim, O denge noktası çevresinde K ve L noktaları arasında salınım yapmaktadır. Serbest bırakıldığı K noktasından L noktasına ilk kez $0{,}4\ \text{s}$'de ulaşan cismin salınım frekansı kaç $\text{Hz}$'dir?`,
    svgDiyagram: svg(
      360, 175, 'Duvara bağlı yay ve K, O, L konumları arasında salınan cisim',
      cizgi(20, 50, 20, 130, { k: 3 }),
      tarama(20, 50, 80, false),
      '<path d="M20 100 h12 l9 -12 l18 24 l18 -24 l18 24 l18 -24 l18 24 l18 -24 l18 24 l9 -12 h6" class="c-i" stroke-width="2.5"/>',
      '<rect x="200" y="80" width="50" height="40" rx="3" class="f-kv" stroke-width="2.5"/>',
      cizgi(20, 120, 340, 120),
      cizgi(160, 60, 160, 140, { sinif: 'k', k: 1.5 }),
      cizgi(225, 60, 225, 140, { sinif: 'k', k: 1.5 }),
      cizgi(290, 60, 290, 140, { sinif: 'k', k: 1.5 }),
      yazi(160, 160, 'K', { boy: 14, hiza: 'middle' }),
      yazi(225, 160, 'O', { boy: 14, hiza: 'middle' }),
      yazi(290, 160, 'L', { boy: 14, hiza: 'middle' }),
    ),
    secenekler: { A: r`$0{,}625$`, B: r`$1{,}25$`, C: r`$2{,}5$`, D: r`$3{,}2$`, E: '$5$' },
    dogruCevap: 'B',
    hesap: '1/(2*0.4)',
    adimAdimCozum: [
      r`K'den L'ye gidiş, tam salınımın yarısıdır (K → L → K bir tam salınım).`,
      r`$\dfrac{T}{2} = 0{,}4\ \text{s} \Rightarrow T = 0{,}8\ \text{s}$`,
      r`$f = \dfrac{1}{T} = \dfrac{1}{0{,}8} = 1{,}25\ \text{Hz}$ $\Rightarrow$ Cevap **B**`,
      r`Not: $0{,}4\ \text{s}$ periyot sanılırsa $2{,}5\ \text{Hz}$ bulunur.`,
    ],
  },
  {
    id: '10-T4-02',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.2',
    surecBileseni: 'Dalga profili üzerinden genlik ve dalga boyunu belirler.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir ipte ilerleyen periyodik dalganın bir anlık görüntüsü şekilde verilmiştir. Şekildeki $12\ \text{cm}$'lik bölümde bir buçuk dalga bulunmakta, en yüksek tepe ile en alçak çukur arasındaki düşey uzaklık $6\ \text{cm}$ olarak ölçülmektedir.

I. Dalganın dalga boyu $8\ \text{cm}$'dir.
II. Dalganın genliği $3\ \text{cm}$'dir.
III. Bir tepe ile ona en yakın çukur arasındaki yatay uzaklık $4\ \text{cm}$'dir.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      400, 205, 'Bir buçuk dalgalık ip profili, yatay ve düşey ölçüler',
      cizgi(40, 100, 340, 100, { sinif: 'k', k: 1 }),
      `<path d="${dalga(40, 100, 300, 1.5, 30)}" class="c-i" stroke-width="3.5"/>`,
      cizgi(290, 70, 352, 70, { sinif: 'k', k: 1 }),
      cizgi(190, 130, 352, 130, { sinif: 'k', k: 1 }),
      olcu(345, 70, 345, 130, '6 cm'),
      olcu(40, 180, 340, 180, '12 cm', { dy: -8 }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'E',
    adimAdimCozum: [
      r`I. $1{,}5\lambda = 12\ \text{cm} \Rightarrow \lambda = 8\ \text{cm}$. **Doğru**`,
      r`II. Genlik, denge konumundan tepeye olan uzaklıktır: $A = \dfrac{6}{2} = 3\ \text{cm}$. **Doğru**`,
      r`III. Tepe ile en yakın çukur arası yarım dalga boyudur: $\dfrac{\lambda}{2} = 4\ \text{cm}$. **Doğru** $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '10-T4-03',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.2',
    surecBileseni: 'Kaynağın çalışma süresi ve dalga önünün aldığı yoldan yayılma süratini hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Başlangıçta durgun olan gergin bir ipin sol ucuna bağlı titreşim kaynağı çalıştırılıyor. Kaynak çalışmaya başladıktan $0{,}6\ \text{s}$ sonra ipte şekildeki gibi 3 tam dalga oluştuğu ve dalga önünün kaynaktan $90\ \text{cm}$ uzaklaştığı görülüyor.

Buna göre dalgaların ipteki yayılma sürati kaç $\text{m/s}$'dir?`,
    svgDiyagram: svg(
      380, 200, 'Kaynaktan çıkan üç tam dalga, dalga önü 90 cm ileride',
      '<rect x="18" y="82" width="18" height="36" rx="3" class="f-kv" stroke-width="2"/>',
      `<path d="${dalga(36, 100, 270, 3, 22)}" class="c-i" stroke-width="3"/>`,
      cizgi(306, 100, 360, 100, { k: 2 }),
      ok(250, 45, 310, 45, 'v', 2.5),
      yazi(240, 50, 'v', { boy: 14, hiza: 'end' }),
      yazi(27, 145, 'kaynak', { boy: 12, hiza: 'middle' }),
      olcu(36, 175, 306, 175, '90 cm', { dy: -8 }),
    ),
    secenekler: { A: r`$1{,}5$`, B: '$3$', C: r`$4{,}5$`, D: '$5$', E: '$15$' },
    dogruCevap: 'A',
    hesap: '0.9/0.6',
    adimAdimCozum: [
      r`Dalga önü $0{,}6\ \text{s}$'de $90\ \text{cm} = 0{,}9\ \text{m}$ yol almıştır.`,
      r`$v = \dfrac{x}{t} = \dfrac{0{,}9}{0{,}6} = 1{,}5\ \text{m/s}$`,
      r`Sağlama: $\lambda = \dfrac{90}{3} = 30\ \text{cm}$, $f = \dfrac{3}{0{,}6} = 5\ \text{Hz}$, $v = 0{,}3 \cdot 5 = 1{,}5\ \text{m/s}$ $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '10-T4-04',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.3',
    surecBileseni: 'Dalgaları titreşim doğrultusu ile yayılma doğrultusu arasındaki ilişkiye göre sınıflandırır.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Ortam taneciklerinin, dalganın yayılma doğrultusuna paralel olarak ileri geri titreştiği dalgalara boyuna dalga denir.

Buna göre aşağıdakilerden hangisi boyuna dalgaya örnektir?`,
    secenekler: {
      A: 'Gergin bir ipte elle oluşturulan dalga',
      B: 'Havada yayılan ses dalgası',
      C: 'Güneşten gelen ışık',
      D: 'Cep telefonunun yaydığı radyo dalgası',
      E: 'Depremde yer kabuğunda ilerleyen S dalgası',
    },
    dogruCevap: 'B',
    adimAdimCozum: [
      'Ses, havadaki moleküllerin yayılma doğrultusunda sıkışıp seyrelmesiyle ilerler; boyuna dalgadır.',
      'İpteki dalga ve S dalgası enine mekanik dalgadır; ışık ve radyo dalgası enine elektromanyetik dalgadır.',
      r`Boyuna olan yalnızca ses dalgasıdır $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '10-T4-05',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.4',
    surecBileseni: 'Sabit uçtan yansıyan atmanın biçimini ve süratini yorumlar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir ucu duvara sıkıca bağlı gergin ipte oluşturulan atma, şekildeki gibi duvara doğru ilerlemektedir. Enerji kayıplarının önemsiz olduğu kabul ediliyor.

I. Yansıyan atma ters dönmüş olarak geri gelir.
II. Yansıyan atmanın sürati, gelen atmanın süratine eşittir.
III. Yansıyan atmanın genliği, gelen atmanın genliğinden büyüktür.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      380, 175, 'Duvara bağlı ipte duvara doğru ilerleyen atma',
      `<path d="M30 110 H120 q25 -70 50 0 H340" class="c-i" stroke-width="3"/>`,
      '<rect x="340" y="50" width="14" height="100" class="f-k" stroke-width="2"/>',
      ok(160, 45, 220, 45, 'v', 2.5),
      yazi(150, 50, 'v', { boy: 14, hiza: 'end' }),
      yazi(345, 170, 'sabit uç', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'I, II ve III' },
    dogruCevap: 'C',
    adimAdimCozum: [
      'I. Sabit uç ipi tutar ve ipe ters yönde tepki kuvveti uygular; yansıyan atma ters döner. **Doğru**',
      'II. Atmanın sürati ortamın (ipin gerginliği ve cinsi) özelliğine bağlıdır; ortam aynı olduğundan sürat değişmez. **Doğru**',
      r`III. Kayıp yokken genlik korunur, büyümez. **Yanlış** $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '10-T4-06',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.1',
    surecBileseni: 'Basit sarkaç gözlem verilerinden periyot ve frekansı hesaplayarak değişkenlerin etkisini yorumlar.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Sarkaç Atölyesi:** Fen kulübündeki öğrenciler iplere bağladıkları küçük demir bilyelerle iki sarkaç hazırlıyor. K sarkacının ip uzunluğu $25\ \text{cm}$, L sarkacınınki $100\ \text{cm}$'dir. Her sarkacı küçük açıyla serbest bırakıp 10 tam salınımın süresini kronometreyle ölçüyorlar: K için $10\ \text{s}$, L için $20\ \text{s}$. Ardından L sarkacındaki bilyeyi kütlesi iki katı olan bir bilyeyle değiştirip ölçümü tekrarlıyorlar ve yine $20\ \text{s}$ buluyorlar.

a) K ve L sarkaçlarının periyotlarını ve frekanslarını bulunuz.
b) İp uzunluğu 4 katına çıkarıldığında periyodun nasıl değiştiğini verilerle açıklayınız.
c) Bilye kütlesinin periyoda etkisi hakkında hangi sonuca ulaşılır? Bu sonuca ulaşmak için deneyde hangi değişkenlerin sabit tutulduğunu belirtiniz.`,
    svgDiyagram: svg(
      360, 205, 'Tavana asılı kısa K ve uzun L sarkaçları',
      tarama(40, 18, 280, true),
      cizgi(30, 30, 330, 30, { k: 3 }),
      cizgi(110, 30, 110, 100),
      '<circle cx="110" cy="110" r="10" class="f-v" stroke-width="2"/>',
      cizgi(250, 30, 250, 170),
      '<circle cx="250" cy="180" r="10" class="f-v" stroke-width="2"/>',
      olcu(70, 30, 70, 110, '25 cm', { dx: -55 }),
      olcu(210, 30, 210, 180, '100 cm', { dx: -55 }),
      yazi(128, 115, 'K', { boy: 14 }),
      yazi(268, 185, 'L', { boy: 14 }),
    ),
    dogruCevap: r`a) $T_K = 1\ \text{s}$, $f_K = 1\ \text{Hz}$; $T_L = 2\ \text{s}$, $f_L = 0{,}5\ \text{Hz}$ · b) Periyot 2 katına çıkar · c) Kütle periyodu etkilemez`,
    adimAdimCozum: [
      r`a) $T = \dfrac{t}{n}$: $T_K = \dfrac{10}{10} = 1\ \text{s}$, $f_K = 1\ \text{Hz}$; $T_L = \dfrac{20}{10} = 2\ \text{s}$, $f_L = 0{,}5\ \text{Hz}$`,
      r`b) Uzunluk $25\ \text{cm}$'den $100\ \text{cm}$'ye (4 kat) çıkınca periyot $1\ \text{s}$'den $2\ \text{s}$'ye (2 kat) çıkmıştır; uzun sarkaç daha yavaş salınır.`,
      'c) Aynı ip uzunluğunda kütle iki katına çıktığı hâlde süre değişmemiştir; basit sarkacın periyodu bilye kütlesine bağlı değildir.',
      'Bu karşılaştırmada ip uzunluğu, salınım açısı (küçük açı) ve sayılan salınım sayısı sabit tutulmuştur; değiştirilen tek değişken kütledir.',
    ],
    rubrik: [
      { olcut: 'İki sarkacın periyot ve frekansını doğru hesaplama', puan: 4 },
      { olcut: 'Uzunluk–periyot ilişkisini verilerle açıklama', puan: 3 },
      { olcut: 'Kütlenin etkisizliğini ve sabit tutulan değişkenleri belirtme', puan: 3 },
    ],
  },
  {
    id: '10-T4-07',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.4',
    surecBileseni: 'İnce yaydan kalın yaya geçen atmanın yansıyan ve iletilen kısımlarını karşılaştırır.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Uç uca eklenmiş ince ve kalın iki sarmal yay yatay düzlemde gerilmiştir. İnce yayda oluşturulan baş yukarı bir atma, şekildeki gibi O birleşme noktasına doğru ilerliyor. Kalın yayda dalgalar ince yaydakinden daha yavaş yayılmaktadır.

Atma O noktasına ulaştıktan sonra;

I. Kalın yaya geçen atma baş yukarı ilerler.
II. İnce yayda geri dönen atma ters dönmüştür.
III. Kalın yaya geçen atmanın sürati, gelen atmanın süratinden küçüktür.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      400, 170, 'İnce yay ile kalın yayın birleştiği O noktasına ilerleyen baş yukarı atma',
      `<path d="M20 110 H70 q25 -60 50 0 H200" stroke-width="1.5"/>`,
      cizgi(200, 110, 380, 110, { sinif: 'c-i', k: 6 }),
      '<circle cx="200" cy="110" r="4" class="f-t" stroke="none"/>',
      ok(110, 45, 165, 45, 'v', 2.5),
      yazi(100, 50, 'v', { boy: 14, hiza: 'end' }),
      yazi(200, 95, 'O', { boy: 14, hiza: 'middle' }),
      yazi(110, 150, 'ince yay', { boy: 13, hiza: 'middle' }),
      yazi(290, 150, 'kalın yay', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'E',
    adimAdimCozum: [
      'I. Bir ortamdan diğerine iletilen atma her durumda gelen atmayla aynı yönde (baş yukarı) çıkar. **Doğru**',
      'II. Atma süratin küçük olduğu (kalın) ortama geçerken birleşme noktası sabit uç gibi davranır; yansıyan atma ters döner. **Doğru**',
      r`III. Kalın yayda yayılma sürati daha küçüktür; iletilen atma yavaşlar. **Doğru** $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '10-T4-08',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.2',
    surecBileseni: 'Gözlenen salınım sayısından frekansı bulup dalga denklemiyle yayılma süratini hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Limanda demirli bir şamandıra, gelen dalgalarla birlikte 1 dakikada 15 kez aşağı yukarı inip çıkıyor. Kıyıdan bakan bir gözlemci, ardışık iki dalga tepesi arasındaki uzaklığı yaklaşık $8\ \text{m}$ olarak tahmin ediyor.

Buna göre deniz dalgalarının yayılma sürati kaç $\text{m/s}$'dir?`,
    secenekler: { A: r`$0{,}5$`, B: '$1$', C: '$2$', D: '$4$', E: '$32$' },
    dogruCevap: 'C',
    hesap: '8*15/60',
    adimAdimCozum: [
      r`Frekans: $f = \dfrac{15}{60\ \text{s}} = 0{,}25\ \text{Hz}$ (periyot $T = 4\ \text{s}$).`,
      r`Ardışık iki tepe arası dalga boyudur: $\lambda = 8\ \text{m}$`,
      r`$v = \lambda f = 8 \cdot 0{,}25 = 2\ \text{m/s}$ $\Rightarrow$ Cevap **C**`,
      r`Dalga boyunu frekansa bölmek ($\tfrac{8}{0{,}25}$) $32$ değerini veren tipik hatadır.`,
    ],
  },
  {
    id: '10-T4-09',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.5',
    surecBileseni: 'Düz engelden yansıyan doğrusal su dalgalarında dalga tepesi ile ilerleme doğrultusu arasındaki ilişkiyi kullanır.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir dalga leğeninde oluşturulan doğrusal su dalgalarının tepeleri, şekildeki gibi düz engelle $35^\circ$'lik açı yapacak biçimde engele yaklaşmaktadır.

Engelden yansıyan dalgaların ilerleme doğrultusu ile engel yüzeyi arasındaki açı kaç derecedir?`,
    svgDiyagram: svg(
      400, 210, 'Düz engele eğik gelen doğrusal su dalgaları, üstten görünüş',
      cizgi(40, 180, 360, 180, { k: 4 }),
      tarama(50, 180, 300, true),
      cizgi(51, 104, 149, 36, { sinif: 'c-i', k: 3 }),
      cizgi(74, 137, 172, 69, { sinif: 'c-i', k: 3 }),
      cizgi(97, 170, 195, 102, { sinif: 'c-i', k: 3 }),
      cizgi(97, 170, 83, 180, { sinif: 'k', k: 1.5 }),
      yazi(120, 176, '35°', { boy: 13 }),
      ok(210, 40, 250, 97, 'v', 2.5),
      yazi(340, 168, 'engel', { boy: 13, hiza: 'middle' }),
      yazi(390, 24, 'Üstten görünüş', { boy: 12, hiza: 'end' }),
    ),
    secenekler: { A: '$35$', B: '$55$', C: '$70$', D: '$110$', E: '$125$' },
    dogruCevap: 'B',
    hesap: '90-35',
    adimAdimCozum: [
      r`Dalga tepesinin engelle yaptığı açı, ilerleme doğrultusunun engelin normaliyle yaptığı açıya eşittir: gelme açısı $35^\circ$.`,
      r`Yansıma yasasına göre yansıyan dalganın ilerleme doğrultusu da normalle $35^\circ$ yapar.`,
      r`Engel yüzeyiyle açı: $90^\circ - 35^\circ = 55^\circ$ $\Rightarrow$ Cevap **B**`,
      r`$35$ yanıtı, dalga tepesi ile ilerleme doğrultusunu karıştırmaktan kaynaklanır.`,
    ],
  },
  {
    id: '10-T4-10',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.6',
    surecBileseni: 'Günlük hayattaki olaylar arasından rezonans örneğini ayırt eder.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir sisteme, kendi doğal frekansına eşit frekansta dışarıdan periyodik etki uygulandığında titreşim genliğinin giderek büyümesine rezonans denir.

Aşağıdaki olaylardan hangisi rezonansa örnektir?`,
    secenekler: {
      A: 'Salıncağı uygun anlarda iterek salınım genliğini artırmak',
      B: 'Kanyonda bağırınca sesin bir süre sonra geri duyulması',
      C: 'Kıyıya yaklaşan deniz dalgalarının giderek yavaşlaması',
      D: 'Su dolu bardaktaki kaşığın kırık görünmesi',
      E: 'Gergin ipte ilerleyen atmanın sabit duvardan ters dönerek yansıması',
    },
    dogruCevap: 'A',
    adimAdimCozum: [
      'Salıncak, doğal frekansı olan bir sarkaçtır. Her salınımda aynı noktada itilirse itme frekansı doğal frekansa eşit olur.',
      'Bu durumda her itme enerjiyi artırır ve genlik büyür; bu rezonanstır.',
      r`Yankı ve atmanın ters dönmesi yansıma, dalgaların yavaşlaması ortam değişimi, kaşığın kırık görünmesi kırılma örneğidir $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '10-T4-11',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.3',
    surecBileseni: 'Mekanik ve elektromanyetik dalgaları yayılmak için ortam gereksinimine göre ayırt eder.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Uluslararası Uzay İstasyonu'nun dışında çalışan iki astronot, aralarında yalnızca birkaç metre olmasına rağmen birbirlerinin sesini doğrudan duyamıyor; ancak telsizle haberleşebiliyor ve uzaktaki yıldızları görebiliyor.

Bu durumla ilgili;

I. Işık, yayılmak için maddesel ortama ihtiyaç duymaz.
II. Ses, enine bir dalga olduğu için boşlukta ilerleyemez.
III. Mekanik dalgalar boşlukta elektromanyetik dalgalardan daha hızlı yayılır.

yargılarından hangileri doğrudur?`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'I, II ve III' },
    dogruCevap: 'A',
    adimAdimCozum: [
      'I. Işık ve telsizin kullandığı radyo dalgaları elektromanyetik dalgadır; boşlukta yayılabilir. **Doğru**',
      'II. Ses boyuna mekanik bir dalgadır; boşlukta ilerleyememesinin nedeni enine olması değil, titreştirecek tanecik bulunmamasıdır. **Yanlış**',
      r`III. Mekanik dalgalar boşlukta hiç yayılamaz. **Yanlış** $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '10-T4-12',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.3',
    surecBileseni: 'Stadyumdaki seyirci dalgasını titreşim ve yayılma doğrultularına göre sınıflandırıp dalga büyüklüklerini hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Tribünde Dalga:** Bir futbol maçında tribün lideri, seyircilerin sırayla ayağa kalkıp oturmasıyla oluşan "Meksika dalgası"nı başlatıyor. Her seyirci yerinden ayrılmadan yalnızca kalkıp oturuyor; hareket ise tribün boyunca yan yana oturanlara aktarılıyor. Ölçümlere göre dalga tribün boyunca $12\ \text{m/s}$ süratle ilerliyor ve lider her $2\ \text{s}$'de bir yeni dalga başlatıyor.

a) Bu dalga enine mi yoksa boyuna mı bir dalgadır? Gerekçesiyle açıklayınız.
b) Dalga tribün boyunca ilerlerken seyirciler yer değiştirmediğine göre taşınan nedir?
c) Ardışık iki dalganın tepeleri (ayakta olan iki grup) arasındaki uzaklığı ve dalganın frekansını hesaplayınız.`,
    dogruCevap: r`a) Enine · b) Madde değil, hareket (enerji) taşınır · c) $\lambda = 24\ \text{m}$, $f = 0{,}5\ \text{Hz}$`,
    adimAdimCozum: [
      'a) Seyirciler düşey doğrultuda kalkıp oturur, dalga ise yatay doğrultuda tribün boyunca ilerler. Titreşim doğrultusu yayılma doğrultusuna dik olduğundan dalga enine dalga modeline uyar.',
      'b) Her seyirci yerinde kalır; aktarılan şey hareketin kendisi, yani enerjidir. Dalgalar maddeyi değil enerjiyi taşır.',
      r`c) $T = 2\ \text{s} \Rightarrow f = \dfrac{1}{2} = 0{,}5\ \text{Hz}$; $\lambda = v \cdot T = 12 \cdot 2 = 24\ \text{m}$`,
    ],
    rubrik: [
      { olcut: 'Dalgayı enine olarak gerekçeli sınıflandırma', puan: 3 },
      { olcut: 'Dalganın madde değil enerji taşıdığını açıklama', puan: 3 },
      { olcut: 'Frekans ve dalga boyunu doğru hesaplama', puan: 4 },
    ],
  },
  {
    id: '10-T4-13',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.4',
    surecBileseni: 'Zıt yönlü atmaların üst üste binmesinde bileşke yer değiştirmeyi hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Gergin bir ipte aynı genişlikte ve aynı biçimde (üçgen) iki atma birbirine doğru ilerlemektedir. K atmasının yüksekliği $3\ \text{cm}$ olup baş yukarı, L atmasının yüksekliği $2\ \text{cm}$ olup baş aşağıdır.

Atmalar tam olarak üst üste geldiği anda ipin denge konumundan en büyük yer değiştirmesi kaç $\text{cm}$ olur?`,
    svgDiyagram: svg(
      400, 190, 'Birbirine doğru ilerleyen baş yukarı K ve baş aşağı L atmaları',
      `<path d="M20 110 H70 l30 -45 l30 45 H240 l30 30 l30 -30 H380" class="c-i" stroke-width="3"/>`,
      ok(70, 35, 130, 35, 'v', 2.5),
      ok(300, 178, 240, 178, 'v', 2.5),
      yazi(100, 135, 'K', { boy: 14, hiza: 'middle' }),
      yazi(108, 72, '3 cm', { boy: 13 }),
      yazi(270, 98, 'L', { boy: 14, hiza: 'middle' }),
      yazi(282, 150, '2 cm', { boy: 13 }),
    ),
    secenekler: { A: '$6$', B: '$5$', C: '$3$', D: '$2$', E: '$1$' },
    dogruCevap: 'E',
    hesap: '3-2',
    adimAdimCozum: [
      'Üst üste binme ilkesi: Atmalar karşılaştığında her noktadaki yer değiştirmeler cebirsel olarak toplanır.',
      r`Baş yukarı $+3\ \text{cm}$, baş aşağı $-2\ \text{cm}$: $y = 3 + (-2) = 1\ \text{cm}$`,
      r`En büyük yer değiştirme $1\ \text{cm}$ $\Rightarrow$ Cevap **E**`,
      'Karşılaşmadan sonra atmalar biçimlerini koruyarak yollarına devam eder. Yönleri göz ardı edip toplamak 5 cm hatasına yol açar.',
    ],
  },
  {
    id: '10-T4-14',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.5',
    surecBileseni: 'Derinlik değişiminde frekansın korunmasını kullanarak sığ bölgedeki yayılma süratini hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Yan kesiti şekilde verilen dalga leğeninin sağ yarısına cam plaka yerleştirilerek sığ bölge oluşturulmuştur. Derin bölgede dalga boyu $3\ \text{cm}$ ve yayılma sürati $12\ \text{cm/s}$ olan periyodik su dalgaları sığ bölgeye geçtiğinde dalga boyunun $2\ \text{cm}$ olduğu ölçülüyor.

Buna göre dalgaların sığ bölgedeki yayılma sürati kaç $\text{cm/s}$'dir?`,
    svgDiyagram: svg(
      400, 195, 'Dalga leğeninin yan kesiti: derin bölge ve cam plakalı sığ bölge',
      '<rect x="20" y="60" width="360" height="115" class="f-s" stroke="none"/>',
      '<rect x="210" y="135" width="170" height="40" class="f-k" stroke-width="2"/>',
      `<path d="${dalga(20, 60, 190, 2.5, 6)}" class="c-i" stroke-width="2.5"/>`,
      `<path d="${dalga(210, 60, 170, 3.5, 4)}" class="c-i" stroke-width="2.5"/>`,
      '<path d="M20 40 V175 H380 V40" stroke-width="3"/>',
      yazi(110, 120, 'derin', { boy: 13, hiza: 'middle' }),
      yazi(295, 110, 'sığ', { boy: 13, hiza: 'middle' }),
      yazi(295, 160, 'cam plaka', { boy: 12, hiza: 'middle' }),
      yazi(200, 30, 'Yan kesit', { boy: 12, hiza: 'middle' }),
    ),
    secenekler: { A: '$6$', B: '$8$', C: '$12$', D: '$18$', E: '$24$' },
    dogruCevap: 'B',
    hesap: '(12/3)*2',
    adimAdimCozum: [
      r`Derin bölgede frekans: $f = \dfrac{v_1}{\lambda_1} = \dfrac{12}{3} = 4\ \text{Hz}$`,
      'Frekansı kaynak belirler; dalga sığ bölgeye geçince frekans değişmez.',
      r`Sığ bölgede: $v_2 = \lambda_2 f = 2 \cdot 4 = 8\ \text{cm/s}$ $\Rightarrow$ Cevap **B**`,
      r`Oranı ters kurmak ($12 \cdot \tfrac{3}{2}$) $18$ değerini verir; sığ suda dalgalar yavaşlar, hızlanmaz.`,
    ],
  },
  {
    id: '10-T4-15',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.1',
    surecBileseni: 'Konum–zaman grafiğinden sarkacın periyodunu okuyarak belirli sürede yaptığı salınım sayısını hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir sarkaç kütlesinin denge konumuna göre yatay konumunun zamana bağlı değişimi grafikteki gibidir.

Sarkaç aynı biçimde salınmaya devam ederse 1 dakikada kaç tam salınım yapar?`,
    svgDiyagram: svg(
      400, 225, 'Sarkacın konum–zaman grafiği: 3 saniyede bir buçuk salınım',
      ok(60, 110, 370, 110, 't', 2),
      ok(60, 195, 60, 20, 't', 2),
      yazi(366, 132, 't (s)', { boy: 13, hiza: 'end' }),
      yazi(68, 26, 'x (cm)', { boy: 13 }),
      `<path d="${dalga(60, 110, 240, 1.5, 50)}" class="c-i" stroke-width="3"/>`,
      cizgi(140, 110, 140, 195, { sinif: 'k', k: 1 }),
      cizgi(220, 110, 220, 195, { sinif: 'k', k: 1 }),
      cizgi(300, 110, 300, 195, { sinif: 'k', k: 1 }),
      cizgi(56, 60, 100, 60, { sinif: 'k', k: 1 }),
      cizgi(56, 160, 180, 160, { sinif: 'k', k: 1 }),
      yazi(140, 212, '1', { boy: 13, hiza: 'middle' }),
      yazi(220, 212, '2', { boy: 13, hiza: 'middle' }),
      yazi(300, 212, '3', { boy: 13, hiza: 'middle' }),
      yazi(50, 65, '+5', { boy: 13, hiza: 'end' }),
      yazi(50, 165, '−5', { boy: 13, hiza: 'end' }),
    ),
    secenekler: { A: '$120$', B: '$90$', C: '$60$', D: '$40$', E: '$30$' },
    dogruCevap: 'E',
    hesap: '60/2',
    adimAdimCozum: [
      'Grafikte 0–3 s aralığında bir buçuk tam salınım vardır; eğri 2. saniyede başlangıçtaki durumuna (denge konumundan aynı yönde geçiş) ilk kez döner.',
      r`$T = 2\ \text{s}$ ($1\ \text{s}$ yarım periyottur).`,
      r`$n = \dfrac{t}{T} = \dfrac{60}{2} = 30$ $\Rightarrow$ Cevap **E**`,
      r`Yarım periyodu periyot sanmak $60$, $3\ \text{s}$'yi periyot sanmak $20$ sonucunu verir.`,
    ],
  },
  {
    id: '10-T4-16',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.6',
    surecBileseni: 'P ve S dalgalarının varış zamanı farkından deprem merkezine olan uzaklığı hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir deprem istasyonundaki sismogram kaydında P dalgalarının ilk gelişi ile S dalgalarının ilk gelişi arasında $15\ \text{s}$ fark olduğu görülüyor. Bölgedeki kayaçlarda P dalgalarının sürati $8\ \text{km/s}$, S dalgalarının sürati $5\ \text{km/s}$'dir.

Buna göre depremin odağı istasyondan kaç $\text{km}$ uzaktadır?`,
    svgDiyagram: svg(
      420, 185, 'Sismogram: P dalgası ve 15 saniye sonra S dalgası',
      cizgi(20, 90, 100, 90),
      `<path d="${dalga(100, 90, 60, 3, 10)}" stroke-width="2"/>`,
      cizgi(160, 90, 250, 90),
      `<path d="${dalga(250, 90, 90, 3, 28)}" class="c-i" stroke-width="2.5"/>`,
      cizgi(340, 90, 400, 90),
      cizgi(100, 90, 100, 150, { sinif: 'k', k: 1 }),
      cizgi(250, 120, 250, 150, { sinif: 'k', k: 1 }),
      yazi(100, 68, 'P', { boy: 14, hiza: 'middle' }),
      yazi(250, 52, 'S', { boy: 14, hiza: 'middle' }),
      olcu(100, 150, 250, 150, '15 s', { dy: 20 }),
      yazi(400, 30, 'sismogram', { boy: 12, hiza: 'end' }),
    ),
    secenekler: { A: '$75$', B: '$120$', C: '$150$', D: '$200$', E: '$325$' },
    dogruCevap: 'D',
    hesap: '15/(1/5-1/8)',
    adimAdimCozum: [
      r`Uzaklık $d$ olsun: $t_P = \dfrac{d}{8}$, $t_S = \dfrac{d}{5}$`,
      r`$t_S - t_P = \dfrac{d}{5} - \dfrac{d}{8} = \dfrac{3d}{40} = 15$`,
      r`$d = \dfrac{15 \cdot 40}{3} = 200\ \text{km}$ $\Rightarrow$ Cevap **D**`,
      r`Sağlama: $t_P = 25\ \text{s}$, $t_S = 40\ \text{s}$, fark $15\ \text{s}$. Farkı yalnızca P süratiyle çarpmak $120$ hatasını verir.`,
    ],
  },
  {
    id: '10-T4-17',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.2',
    surecBileseni: 'Aynı ortamdaki iki dalganın profillerini karşılaştırarak frekanslar oranını bulur.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Aynı gergin ipte farklı zamanlarda oluşturulan K ve L periyodik dalgalarının eşit uzunluktaki bölümleri şekilde gösterilmiştir.

Buna göre K dalgasının frekansının L dalgasının frekansına oranı $\dfrac{f_K}{f_L}$ kaçtır?`,
    svgDiyagram: svg(
      340, 200, 'Aynı uzunlukta K dalgası iki tam, L dalgası bir tam dalga',
      cizgi(60, 60, 300, 60, { sinif: 'k', k: 1 }),
      cizgi(60, 150, 300, 150, { sinif: 'k', k: 1 }),
      `<path d="${dalga(60, 60, 240, 2, 18)}" class="c-i" stroke-width="3"/>`,
      `<path d="${dalga(60, 150, 240, 1, 30)}" class="c-v" stroke-width="3"/>`,
      yazi(38, 65, 'K', { boy: 14, hiza: 'middle' }),
      yazi(38, 155, 'L', { boy: 14, hiza: 'middle' }),
      cizgi(60, 30, 60, 192, { sinif: 'k', k: 1 }),
      cizgi(300, 30, 300, 192, { sinif: 'k', k: 1 }),
    ),
    secenekler: { A: r`$\dfrac{1}{4}$`, B: r`$\dfrac{1}{2}$`, C: '$1$', D: r`$\dfrac{3}{2}$`, E: '$2$' },
    dogruCevap: 'E',
    hesap: '(240/1)/(240/2)',
    adimAdimCozum: [
      r`Eşit uzunlukta K'de 2, L'de 1 tam dalga vardır: $\lambda_L = 2\lambda_K$`,
      'İki dalga aynı ipte yayıldığından süratleri eşittir (sürat ortama bağlıdır, genliğe bağlı değildir).',
      r`$v = \lambda f$ sabit $\Rightarrow \dfrac{f_K}{f_L} = \dfrac{\lambda_L}{\lambda_K} = 2$ $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '10-T4-18',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.4',
    surecBileseni: 'Serbest uçtan yansıyan atmanın biçimini, dönüş süresini ve uçtaki üst üste binmeyi açıklar.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Halkalı İp Deneyi:** Laboratuvarda $3\ \text{m}$ uzunluğundaki gergin bir ipin sağ ucu, düşey sürtünmesiz bir çubuk üzerinde serbestçe kayabilen hafif bir halkaya bağlanmıştır. Öğrenci ipin sol ucunda yüksekliği $4\ \text{cm}$ olan baş yukarı bir atma oluşturuyor. Atma ipte $2\ \text{m/s}$ süratle ilerliyor.

a) Halkadan yansıyan atmanın biçimini (baş yukarı/baş aşağı) gerekçesiyle belirtiniz.
b) Atmanın oluşturulduğu andan, yansıyıp öğrencinin eline geri döndüğü ana kadar geçen süreyi hesaplayınız.
c) Atma halkaya ulaştığı anda halkanın denge konumundan en fazla kaç $\text{cm}$ yükseleceğini üst üste binme ilkesiyle açıklayınız.
d) Halka çıkarılıp ip duvara sıkıca bağlansaydı (a) ve (c) maddelerinin cevapları nasıl değişirdi?`,
    svgDiyagram: svg(
      380, 185, 'Sağ ucu düşey çubuktaki halkaya bağlı ipte ilerleyen atma',
      `<path d="M30 100 H110 q25 -60 50 0 H339" class="c-i" stroke-width="3"/>`,
      cizgi(345, 30, 345, 160, { k: 4 }),
      '<circle cx="345" cy="100" r="6" stroke-width="2.5"/>',
      ok(150, 45, 210, 45, 'v', 2.5),
      yazi(140, 50, 'v', { boy: 14, hiza: 'end' }),
      yazi(320, 40, 'halka', { boy: 12, hiza: 'end' }),
      olcu(30, 145, 345, 145, '3 m', { dy: 22 }),
    ),
    dogruCevap: r`a) Baş yukarı · b) $3\ \text{s}$ · c) $8\ \text{cm}$ · d) Atma ters döner, uçta yer değiştirme sıfır olur`,
    adimAdimCozum: [
      'a) Halka çubuk üzerinde serbestçe hareket edebildiği için uç serbest uç gibi davranır; yansıyan atma gelen atmayla aynı biçimde, baş yukarı döner.',
      r`b) Atmanın gidiş-dönüş yolu $2 \cdot 3 = 6\ \text{m}$; $t = \dfrac{6}{2} = 3\ \text{s}$`,
      r`c) Serbest uçta gelen ve yansıyan atmalar aynı yönlüdür; üst üste bindiklerinde yer değiştirmeler toplanır: $4 + 4 = 8\ \text{cm}$.`,
      'd) Sabit uçta yansıyan atma ters döner; uç hareket edemediğinden orada gelen ve yansıyan atmaların yer değiştirmeleri birbirini yok eder, uçtaki yer değiştirme sıfırdır.',
    ],
    rubrik: [
      { olcut: 'Serbest uçta yansımayı doğru gerekçelendirme', puan: 2 },
      { olcut: 'Gidiş-dönüş süresini doğru hesaplama', puan: 3 },
      { olcut: 'Üst üste binme ile halkanın yer değiştirmesini bulma', puan: 3 },
      { olcut: 'Sabit uç durumunu karşılaştırmalı açıklama', puan: 2 },
    ],
  },
  {
    id: '10-T4-19',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.3',
    surecBileseni: 'Dalgaları enerjiyi taşıdıkları doğrultu sayısına göre bir, iki ve üç boyutlu olarak sınıflandırır.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Dalgalar, enerjiyi kaynaktan kaç farklı doğrultuda taşıdıklarına göre bir, iki ve üç boyutlu dalgalar olarak sınıflandırılır.

Buna göre aşağıdakilerden hangisi iki boyutlu dalgaya örnektir?`,
    secenekler: {
      A: 'Gitarın gergin telinde oluşan titreşim',
      B: 'Çalan zilden her yöne yayılan ses',
      C: 'Masa lambasından odaya yayılan ışık',
      D: 'Durgun göle atılan taşın oluşturduğu halkalar',
      E: 'Sarmal yayın ekseni boyunca ilerleyen sıkışmalar',
    },
    dogruCevap: 'D',
    adimAdimCozum: [
      'Gitar teli ve sarmal yay boyunca ilerleyen dalgalar tek bir doğrultuda yayılır; bunlar bir boyutlu dalgalardır.',
      'Zilden çıkan ses ve lambanın ışığı uzayda her yöne yayılır; bunlar üç boyutlu dalgalardır.',
      r`Göl yüzeyindeki halkalar yalnızca su yüzeyi düzleminde her yöne yayılır; iki boyutlu dalgadır $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '10-T4-20',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.5',
    surecBileseni: 'Sığ bölgedeki dalga boyu ve kaynak frekansından yayılma süratini bulup geçiş süresini hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Üstten görünüşü verilen dalga leğeninde, frekansı $5\ \text{Hz}$ olan bir üreteçle doğrusal su dalgaları oluşturuluyor. Derin bölgede ardışık iki tepe arası $3\ \text{cm}$ iken cam plakayla hazırlanan sığ bölgede bu uzaklık $2\ \text{cm}$ olarak ölçülüyor.

Bir dalga tepesi, genişliği $20\ \text{cm}$ olan sığ bölgeyi kaç saniyede geçer?`,
    svgDiyagram: svg(
      400, 210, 'Dalga leğeni üstten görünüş: seyrek tepeli derin bölge ve sık tepeli 20 cm genişlikte sığ bölge',
      '<rect x="20" y="40" width="160" height="125" class="f-s" stroke="none"/>',
      '<rect x="180" y="40" width="200" height="125" class="f-k" stroke="none"/>',
      '<rect x="20" y="40" width="360" height="125" stroke-width="2"/>',
      cizgi(180, 40, 180, 165, { sinif: 'k', k: 1.5 }),
      '<path d="M40 50 V155 M70 50 V155 M100 50 V155 M130 50 V155 M160 50 V155" class="c-i" stroke-width="3"/>',
      '<path d="M190 50 V155 M210 50 V155 M230 50 V155 M250 50 V155 M270 50 V155 M290 50 V155 M310 50 V155 M330 50 V155 M350 50 V155 M370 50 V155" class="c-i" stroke-width="3"/>',
      yazi(100, 30, 'derin', { boy: 13, hiza: 'middle' }),
      yazi(280, 30, 'sığ (cam plaka)', { boy: 13, hiza: 'middle' }),
      ok(45, 185, 145, 185, 'v', 2.5),
      olcu(180, 185, 380, 185, '20 cm', { dy: 18 }),
    ),
    secenekler: { A: '$1$', B: r`$\dfrac{4}{3}$`, C: '$2$', D: '$3$', E: '$4$' },
    dogruCevap: 'C',
    hesap: '20/(2*5)',
    adimAdimCozum: [
      r`Frekansı üreteç belirler; dalgalar sığ bölgeye geçince de $f = 5\ \text{Hz}$ kalır.`,
      r`Sığ bölgedeki yayılma sürati: $v_{sig} = \lambda_{sig} \cdot f = 2 \cdot 5 = 10\ \text{cm/s}$`,
      r`Geçiş süresi: $t = \dfrac{20}{10} = 2\ \text{s}$ $\Rightarrow$ Cevap **C**`,
      r`Derin bölgedeki sürati ($3 \cdot 5 = 15\ \text{cm/s}$) kullanmak $\dfrac{4}{3}$ hatalı sonucunu verir.`,
    ],
  },
  {
    id: '10-T4-21',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.6',
    surecBileseni: 'Deprem sırasında oluşan P dalgalarının özelliklerini S dalgalarıyla karşılaştırarak belirler.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Deprem odağından çıkan P dalgaları, sismograflara ilk ulaşan dalgalar olduğu için birincil dalgalar olarak da adlandırılır.

P dalgalarıyla ilgili;

I. Boyuna dalgadır.
II. Katı, sıvı ve gaz ortamlarda yayılabilir.
III. Aynı kayaçta S dalgalarından daha yavaş ilerler.

yargılarından hangileri doğrudur?`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'I, II ve III' },
    dogruCevap: 'C',
    adimAdimCozum: [
      'I. P dalgalarında kayaç tanecikleri yayılma doğrultusunda sıkışıp seyrelir; P dalgası boyuna dalgadır. **Doğru**',
      'II. Boyuna dalgalar maddenin her üç hâlinde de yayılabilir (enine olan S dalgaları ise sıvılarda yayılamaz). **Doğru**',
      r`III. P dalgaları S dalgalarından hızlıdır; istasyona ilk ulaşmalarının nedeni budur. **Yanlış** $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '10-T4-22',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.1',
    surecBileseni: 'EKG kaydından kalp atışının periyodunu okuyarak dakikadaki atış sayısını hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir hastanın kalp ritmini gösteren elektrokardiyografi (EKG) kaydının bir bölümü şekilde verilmiştir. Kayıttaki her sivri tepe bir kalp atışına karşılık gelmekte ve atışlar eşit zaman aralıklarıyla tekrarlanmaktadır.

Buna göre hastanın kalbi 1 dakikada kaç kez atar?`,
    svgDiyagram: svg(
      420, 210, 'EKG kaydı: 0,4; 1,2; 2,0 ve 2,8 saniyelerde sivri tepeler',
      eksen(50, 170, 350, 150, 't (s)', 'EKG'),
      '<path d="M50 130 H82 l4 6 l4 -66 l4 80 l4 -20 q12 -14 24 0 H162 l4 6 l4 -66 l4 80 l4 -20 q12 -14 24 0 H242 l4 6 l4 -66 l4 80 l4 -20 q12 -14 24 0 H322 l4 6 l4 -66 l4 80 l4 -20 q12 -14 24 0 H370" class="c-i" stroke-width="2.5"/>',
      cizgi(90, 70, 90, 170, { sinif: 'k', k: 1 }),
      cizgi(170, 70, 170, 170, { sinif: 'k', k: 1 }),
      cizgi(250, 70, 250, 170, { sinif: 'k', k: 1 }),
      cizgi(330, 70, 330, 170, { sinif: 'k', k: 1 }),
      '<path d="M90 166 v8 M130 166 v8 M170 166 v8 M210 166 v8 M250 166 v8 M290 166 v8 M330 166 v8" stroke-width="1.5"/>',
      yazi(50, 188, '0', { boy: 12, hiza: 'middle' }),
      yazi(90, 188, '0,4', { boy: 12, hiza: 'middle' }),
      yazi(130, 188, '0,8', { boy: 12, hiza: 'middle' }),
      yazi(170, 188, '1,2', { boy: 12, hiza: 'middle' }),
      yazi(210, 188, '1,6', { boy: 12, hiza: 'middle' }),
      yazi(250, 188, '2,0', { boy: 12, hiza: 'middle' }),
      yazi(290, 188, '2,4', { boy: 12, hiza: 'middle' }),
      yazi(330, 188, '2,8', { boy: 12, hiza: 'middle' }),
    ),
    secenekler: { A: '$48$', B: '$75$', C: '$80$', D: '$100$', E: '$150$' },
    dogruCevap: 'B',
    hesap: '60/0.8',
    adimAdimCozum: [
      r`Ardışık iki tepe arasındaki süre: $1{,}2 - 0{,}4 = 0{,}8\ \text{s}$; kalp atışının periyodu $T = 0{,}8\ \text{s}$'dir.`,
      r`Frekans: $f = \dfrac{1}{T} = \dfrac{1}{0{,}8} = 1{,}25\ \text{Hz}$ (saniyede $1{,}25$ atış).`,
      r`1 dakikadaki atış sayısı: $n = \dfrac{60}{0{,}8} = 75$ $\Rightarrow$ Cevap **B**`,
      r`Kayıttaki 4 tepeyi 4 tam periyot sanmak ($\tfrac{4}{2{,}4} \cdot 60$) $100$, iki tepe arasını $0{,}4\ \text{s}$ okumak $150$ hatasını verir.`,
    ],
  },
  {
    id: '10-T4-23',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.4',
    surecBileseni: 'Tel kalınlığı ve gerilme kuvvetinin dalga süratine etkisini kullanarak aynı frekanstaki dalga boylarını karşılaştırır.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Aynı maddeden yapılmış K ve L tellerinden L'nin yarıçapı K'nin yarıçapının 2 katıdır. Şekildeki düzenekte K teli $F$, L teli $9F$ büyüklüğündeki kuvvetle geriliyor ve iki tel aynı frekansla titreştiriliyor. Gergin telde dalgaların yayılma sürati $v = \sqrt{\dfrac{F}{\mu}}$ bağıntısıyla verilir ($\mu$: telin birim uzunluğunun kütlesi).

Buna göre K telinde oluşan dalgaların dalga boyunun L telindekine oranı $\dfrac{\lambda_K}{\lambda_L}$ kaçtır?`,
    svgDiyagram: svg(
      400, 215, 'Aynı frekanslı kaynaklara bağlı ince K ve kalın L telleri, makaradan sarkan F ve 9F yükleri',
      '<rect x="20" y="45" width="20" height="30" rx="3" class="f-kv" stroke-width="2"/>',
      '<rect x="20" y="125" width="20" height="30" rx="3" class="f-kv" stroke-width="2"/>',
      cizgi(40, 60, 340, 60, { k: 1.5 }),
      cizgi(40, 140, 340, 140, { sinif: 'c-i', k: 5 }),
      '<circle cx="340" cy="70" r="10" stroke-width="2.5"/>',
      '<circle cx="340" cy="150" r="10" stroke-width="2.5"/>',
      cizgi(350, 70, 350, 95),
      cizgi(350, 150, 350, 175),
      '<rect x="338" y="95" width="24" height="24" rx="3" class="f-k" stroke-width="2"/>',
      '<rect x="338" y="175" width="24" height="24" rx="3" class="f-k" stroke-width="2"/>',
      yazi(330, 113, 'F', { boy: 14, hiza: 'end' }),
      yazi(330, 193, '9F', { boy: 14, hiza: 'end' }),
      yazi(190, 48, 'K', { boy: 14, hiza: 'middle' }),
      yazi(190, 125, 'L', { boy: 14, hiza: 'middle' }),
    ),
    secenekler: { A: r`$\dfrac{4}{9}$`, B: r`$\dfrac{2}{3}$`, C: '$1$', D: r`$\dfrac{3}{2}$`, E: r`$\dfrac{9}{4}$` },
    dogruCevap: 'B',
    hesap: 'sqrt(4/9)',
    adimAdimCozum: [
      r`Aynı maddeden yapılmış tellerde birim uzunluğun kütlesi kesit alanıyla, yani yarıçapın karesiyle orantılıdır: $\mu_L = 2^2 \mu_K = 4\mu_K$`,
      r`$\dfrac{v_K}{v_L} = \sqrt{\dfrac{F / \mu_K}{9F / (4\mu_K)}} = \sqrt{\dfrac{4}{9}} = \dfrac{2}{3}$`,
      r`Frekanslar eşit olduğundan $\lambda = \dfrac{v}{f}$ ile $\dfrac{\lambda_K}{\lambda_L} = \dfrac{v_K}{v_L} = \dfrac{2}{3}$ $\Rightarrow$ Cevap **B**`,
      r`Karekökü almayı unutmak $\dfrac{4}{9}$, oranı ters kurmak $\dfrac{3}{2}$ sonucunu verir.`,
    ],
  },
  {
    id: '10-T4-24',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.3',
    surecBileseni: 'Dalgaları yayıldıkları ortama ve titreşim doğrultusuna göre birlikte sınıflandırır.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Fizik dersinde hazırlanan bir kavram panosunda "Yayılması için maddesel ortama ihtiyaç duymayan ve enine özellik gösteren dalgalar" bölümü yer almaktadır.

Buna göre;
I. Baz istasyonundan çevreye yayılan radyo dalgaları
II. Bagaj kontrol cihazlarında kullanılan X-ışınları
III. Tıbbi görüntülemede kullanılan ultrason dalgaları

örneklerinden hangileri panonun bu bölümüne yazılmalıdır?`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız III', C: 'I ve II', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'C',
    adimAdimCozum: [
      'Boşlukta (maddesel ortam olmadan) yayılabilen dalgalar elektromanyetik dalgalardır ve elektromanyetik dalgaların tamamı eninedir.',
      'I ve II. Radyo dalgaları ile X-ışınları elektromanyetik dalga olduğundan her iki koşulu da sağlar.',
      r`III. Ultrason yüksek frekanslı ses dalgasıdır; boyuna mekanik dalga olduğundan maddesel ortama ihtiyaç duyar $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '10-T4-25',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.2',
    surecBileseni: 'Ortam ve frekans sabitken dalga enerjisindeki değişimin genlik, dalga boyu ve sürate etkisini yorumlar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Sıcaklığı sabit tutulan bir odada çalışan hoparlörün ses düzeyi (enerjisi) açılırken, ürettiği notanın frekansı sabit tutuluyor.

Buna göre hoparlörden yayılan ses dalgasının genliği, dalga boyu ve yayılma sürati ilk duruma göre nasıl değişir?`,
    secenekler: {
      A: 'Azalır — Değişmez — Azalır',
      B: 'Değişmez — Değişmez — Artar',
      C: 'Artar — Artar — Değişmez',
      D: 'Artar — Değişmez — Değişmez',
      E: 'Değişmez — Azalır — Değişmez',
    },
    dogruCevap: 'D',
    adimAdimCozum: [
      'Dalganın taşıdığı enerji genlikle ilişkili olduğundan ses düzeyi artırıldığında genlik artar.',
      'Ortamın özellikleri (hava sıcaklığı ve yoğunluğu) değişmediği için sesin yayılma sürati değişmez.',
      r`$v = \lambda f$ bağıntısında hem $v$ hem $f$ sabit kaldığından dalga boyu ($\lambda$) da değişmez $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '10-T4-26',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.5',
    surecBileseni: 'Asal eksene paralel gelen doğrusal su dalgalarının çukur engelden yansımasını açıklar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Su derinliği her yerinde sabit olan bir dalga leğeninde oluşturulan doğrusal su dalgaları, odak noktası $F$ ve eğrilik merkezi $M$ olan çukur engele asal eksene paralel doğrultuda şekildeki gibi gönderiliyor.

Çukur engelden yansıyan dalgaların hareketi için aşağıdakilerden hangisi doğrudur?`,
    svgDiyagram: svg(
      380, 190, 'Çukur engele asal eksene paralel yaklaşan doğrusal su dalgaları',
      cizgi(25, 95, 340, 95, { sinif: 'k', k: 1.5 }),
      '<path d="M295 30 Q355 95 295 160" fill="none" stroke-width="4"/>',
      '<path d="M55 45 V145 M85 45 V145 M115 45 V145" class="c-i" stroke-width="3"/>',
      ok(120, 62, 175, 62, 'v', 2.5),
      ok(120, 128, 175, 128, 'v', 2.5),
      '<circle cx="255" cy="95" r="4" class="f-v" stroke="none"/>',
      '<circle cx="185" cy="95" r="4" class="f-t" stroke="none"/>',
      yazi(255, 84, 'F', { boy: 13, hiza: 'middle' }),
      yazi(185, 84, 'M', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: {
      A: 'Doğrusal kalıp geldiği yönde geri döner.',
      B: 'M merkez noktasından çıkıyormuş gibi dağılarak yayılır.',
      C: 'M merkez noktasında toplanıp tekrar doğrusal hâle gelir.',
      D: 'F odak noktasında toplanıp bu noktadan dairesel yayılır.',
      E: 'F odak noktasından çıkıyormuş gibi uzantıları kesişerek dağılır.',
    },
    dogruCevap: 'D',
    adimAdimCozum: [
      'Çukur engele asal eksene paralel gelen doğrusal dalgaların uç kısımları engele orta kısımdan önce çarpar ve merkeze doğru yönelir.',
      'Yansıma yasası gereği dairesel biçim alan dalga cepheleri çukur engelin odak noktası olan F noktasında toplanır.',
      r`F noktasında odaklanan dalgalar bu noktayı geçtikten sonra noktasal kaynaktan çıkıyormuş gibi dairesel olarak yayılır $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '10-T4-27',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.5',
    surecBileseni: 'Derinliği azalan deniz suyunda dalgaların sürat, dalga boyu ve ilerleme doğrultusu değişimini kırılmayla açıklar.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Kıyıya Yaklaşan Deniz Dalgaları:** Düz bir kumsala açık denizden eğik doğrultuda yaklaşan su dalgaları gözlenmektedir. Derinliği fazla olan açık deniz bölgesinde dalgaların yayılma sürati $6\ \text{m/s}$ ve ardışık iki dalga tepesi arası uzaklık $12\ \text{m}$'dir. Kumsala yakın sığ bölgede ise dalgaların yayılma sürati $2\ \text{m/s}$'ye düşmektedir.

a) Deniz dalgalarının frekansını ve periyodunu hesaplayınız.
b) Kumsala yakın sığ bölgede ardışık iki dalga tepesi arasındaki uzaklığı ($\lambda_{sig}$) bulunuz.
c) Açık denizde kıyı şeridiyle açı yapan dalga cephelerinin, kıyıya yaklaştıkça kıyı şeridine neredeyse paralel hâle gelmesinin nedenini kırılma olayıyla açıklayınız.`,
    dogruCevap: r`a) $f = 0{,}5\ \text{Hz}$, $T = 2\ \text{s}$ · b) $\lambda_{sig} = 4\ \text{m}$ · c) Sığa önce giren kısım yavaşladığı için ilerleme doğrultusu normale yaklaşarak kırılır`,
    adimAdimCozum: [
      r`a) Açık denizde $v_1 = \lambda_1 f \Rightarrow 6 = 12 \cdot f \Rightarrow f = 0{,}5\ \text{Hz}$ ve $T = \dfrac{1}{f} = 2\ \text{s}$ bulunur.`,
      r`b) Ortam değiştiğinde frekans değişmez ($f = 0{,}5\ \text{Hz}$). Sığ bölgede $\lambda_{sig} = \dfrac{v_2}{f} = \dfrac{2}{0{,}5} = 4\ \text{m}$ olur.`,
      'c) Eğik gelen bir dalga cephesinin kıyıya yakın ucu sığ suya daha önce girip yavaşlarken, açıkta kalan ucu daha büyük süratle ilerlemeye devam eder. Böylece dalganın ilerleme doğrultusu kıyı normaline yaklaşır ve dalga cepheleri kıyı şeridine paralel konuma döner.',
    ],
    rubrik: [
      { olcut: 'Dalga denklemiyle frekans ve periyodu doğru hesaplama', puan: 3 },
      { olcut: 'Frekansın değişmediğini kullanarak sığ bölgedeki dalga boyunu bulma', puan: 3 },
      { olcut: 'Sürat farkı nedeniyle kırılmayı ve dalga cephesinin kıyıya paralel dönmesini açıklama', puan: 4 },
    ],
  },
  {
    id: '10-T4-28',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.5',
    surecBileseni: 'Birbirine dik iki düz engelden ardışık yansıyan doğrusal su dalgasının engellerle yaptığı açıları hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Derinliği sabit bir dalga leğeninde I. ve II. düz engeller şekildeki gibi birbirine dik yerleştirilmiştir. Doğrusal $KOL$ su dalgası, dalga cephesi I. engelle $25^\circ$ açı yapacak biçimde ilerleyerek önce I. engelden, ardından II. engelden yansıyor.

Buna göre dalganın orta noktası $O$'nun II. engelden yansıdığı anda dalga cephesinin II. engelle yaptığı dar açı kaç derecedir?`,
    svgDiyagram: svg(
      360, 210, 'Birbirine dik I ve II düz engellerine yaklaşan KOL doğrusal dalgası',
      cizgi(50, 175, 310, 175, { k: 4 }),
      tarama(60, 175, 240, true),
      cizgi(310, 35, 310, 175, { k: 4 }),
      '<rect x="296" y="161" width="14" height="14" fill="none" stroke-width="1.5"/>',
      cizgi(95, 95, 185, 137, { sinif: 'c-i', k: 3.5 }),
      cizgi(185, 137, 266, 175, { sinif: 'k', k: 1.5 }),
      ok(140, 116, 166, 61, 'v', 2),
      '<path d="M140 116 L165 170" stroke-width="2" class="c-v"/>',
      '<polygon points="168,175 161,165 169,162" class="f-v" stroke="none"/>',
      yazi(86, 92, 'K', { boy: 13, hiza: 'end' }),
      yazi(143, 108, 'O', { boy: 13 }),
      yazi(192, 136, 'L', { boy: 13 }),
      yazi(216, 170, '25°', { boy: 12 }),
      yazi(150, 200, 'I. engel', { boy: 13, hiza: 'middle' }),
      yazi(322, 105, 'II.', { boy: 13 }),
    ),
    secenekler: { A: '$65$', B: '$55$', C: '$45$', D: '$35$', E: '$25$' },
    dogruCevap: 'A',
    hesap: '90 - 25',
    adimAdimCozum: [
      r`Dalga cephesinin I. engelle yaptığı açı $25^\circ$ olduğundan ilerleme doğrultusunun I. engelin normaliyle yaptığı gelme açısı $25^\circ$, I. engel yüzeyiyle yaptığı açı ise $90^\circ - 25^\circ = 65^\circ$'tir.`,
      r`I. engelden yansıyan ilerleme doğrultusu da I. engelle $65^\circ$ açı yapar. Engeller birbirine dik olduğundan bu doğrultu II. engel yüzeyine $90^\circ - 65^\circ = 25^\circ$ açıyla, yani II. engelin normaliyle $65^\circ$ gelme açısı yaparak ulaşır.`,
      r`Dalga cephesinin engelle yaptığı dar açı yansıma açısına eşit olduğundan II. engelle yapılan açı $65^\circ$'tir $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '10-T4-29',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.4',
    surecBileseni: 'Sabit ve serbest uçlardan yansıyan atmaların üst üste binmesi sonucunda oluşan bileşke genliği hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Eşit kare bölmeli düzlemde gergin türdeş bir yayın sol ucu sabit engele, sağ ucu ise düşey çubukta sürtünmesiz kayabilen halkaya (serbest uç) bağlanmıştır. Genliği $3\ \text{birim}$ olan baş yukarı K atması ile genliği $1\ \text{birim}$ olan baş aşağı L atması $t = 0$ anında şekildeki konumlarından saniyede $1\ \text{bölme}$ süratle ok yönlerinde harekete geçiyor.

Buna göre $t = 6\ \text{s}$ anında yay üzerinde oluşan bileşke atmanın genliği kaç birim olur?`,
    svgDiyagram: svg(
      380, 200, 'Sekiz bölmeli kareli düzlemde sabit ve serbest uçlar arasındaki K ve L atmaları',
      ...[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => cizgi(50 + i * 35, 30, 50 + i * 35, 170, { sinif: 'k', k: 1 })),
      ...[0, 1, 2, 3, 4].map((j) => cizgi(50, 30 + j * 35, 330, 30 + j * 35, { sinif: 'k', k: 1 })),
      cizgi(50, 25, 50, 175, { k: 4 }),
      cizgi(330, 25, 330, 175, { k: 3 }),
      '<path d="M50 135 H85 V30 H155 V135 H225 V170 H295 V135 H324" class="c-v" fill="none" stroke-width="3"/>',
      '<circle cx="330" cy="135" r="6" fill="none" stroke-width="2.5"/>',
      ok(145, 20, 95, 20, 'i', 2),
      ok(235, 185, 285, 185, 'i', 2),
      yazi(120, 72, 'K', { boy: 14, hiza: 'middle' }),
      yazi(260, 158, 'L', { boy: 14, hiza: 'middle' }),
      yazi(42, 192, 'sabit', { boy: 11, hiza: 'end' }),
      yazi(338, 192, 'serbest', { boy: 11 }),
    ),
    secenekler: { A: '$0$', B: '$1$', C: '$2$', D: '$4$', E: '$6$' },
    dogruCevap: 'D',
    hesap: '3 + 1',
    adimAdimCozum: [
      r`K atması ($1$–$3$ bölmeleri arası, baş yukarı, $3\ \text{birim}$) sola doğru ilerleyip sabit uçtan **ters dönerek** (baş aşağı) yansır; $6\ \text{s}$ sonunda ön ucu $1 + 5 = 6$ bölme yol alarak $5.$ bölmeye, arka ucu $3.$ bölmeye gelir.`,
      r`L atması ($5$–$7$ bölmeleri arası, baş aşağı, $1\ \text{birim}$) sağa doğru ilerleyip serbest uçtan **ters dönmeden** (yine baş aşağı) yansır; $6\ \text{s}$ sonunda $3$–$5$ bölmeleri arasına ulaşır.`,
      r`$t = 6\ \text{s}$ anında her iki atma da $3$–$5$ bölmeleri arasında ve baş aşağı olduğundan üst üste binme ilkesiyle genlikler toplanır: $3 + 1 = 4\ \text{birim}$ $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '10-T4-30',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.6',
    surecBileseni: 'Deprem dalgalarının frekansı ile yapıların doğal periyodu arasındaki ilişkiyi rezonans ve sismik izolasyon bağlamında değerlendirir.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Depremde Bina Yüksekliği ve Taban İzolasyonu:** Aynı zemin üzerinde bulunan 3 katlı K binasının doğal salınım periyodu $T_K = 0{,}3\ \text{s}$, geleneksel temel sistemli 12 katlı L binasının doğal salınım periyodu ise $T_L = 1{,}2\ \text{s}$'dir. Bölgede meydana gelen bir depremde zemin, baskın periyodu yaklaşık $1{,}2\ \text{s}$ olan sismik dalgalarla salınım yapmaktadır. Yan parsele yeni inşa edilen 12 katlı M binasının temeline ise esnek kauçuk-kurşun sismik izolatörler yerleştirilerek yapının etkin doğal periyodu $3{,}0\ \text{s}$'ye çıkarılmıştır.

a) K ve L binalarından hangisinde rezonans tehlikesi ortaya çıkar? Periyot ve frekans kavramlarını kullanarak gerekçelendiriniz.
b) Rezonansa giren binada salınım genliğinin hızla büyümesinin nedenini enerji aktarımı açısından açıklayınız.
c) M binasında kullanılan taban izolatörlerinin deprem hasarını önlemedeki rolünü periyot değişimi üzerinden yorumlayınız.`,
    dogruCevap: r`a) L binası ($T_L = T_{zemin} = 1{,}2\ \text{s}$) · b) Zeminden her salınımda uyumlu enerji aktarımı genliği büyütür · c) Periyot $3{,}0\ \text{s}$'ye çekilerek deprem periyodundan uzaklaştırılır, rezonans önlenir`,
    adimAdimCozum: [
      r`a) Zeminin salınım periyodu ($1{,}2\ \text{s}$, yani $f \approx 0{,}83\ \text{Hz}$) L binasının doğal periyoduna ($T_L = 1{,}2\ \text{s}$) eşittir. Zorlayıcı etki frekansı doğal frekansla çakıştığından L binasında rezonans tehlikesi oluşur.`,
      'b) Rezonans durumunda zemin, binanın salınım yönüyle her periyotta tam uyumlu biçimde binaya iş yapar; aktarılan mekanik enerji birikerek katların yatay salınım genliğini yıkıcı düzeylere çıkarır.',
      r`c) Sismik izolatörler M binasının etkin periyodunu $1{,}2\ \text{s}$'den $3{,}0\ \text{s}$'ye taşıyarak deprem dalgalarının baskın periyodundan uzaklaştırır; böylece rezonans engellenir ve üst yapıya iletilen sarsıntı büyük ölçüde sönümlenir.`,
    ],
    rubrik: [
      { olcut: 'Doğal periyot ile zemin periyodunu eşleştirerek L binasını gerekçesiyle belirleme', puan: 4 },
      { olcut: 'Her periyotta uyumlu enerji aktarımıyla genlik artışını açıklama', puan: 3 },
      { olcut: 'Taban izolatörünün periyodu kaydırarak rezonansı önlediğini yorumlama', puan: 3 },
    ],
  },
  {
    id: '10-T4-31',
    sinif: 10,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.10.4.1',
    surecBileseni: 'Periyodik salınım yapan bir sarkacın ölçülen periyodu ile hedef periyodu arasındaki farkı hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Antika bir duvar saatinin sarkacını kontrol eden saat ustası, sarkacın $1\ \text{dakika}$ içinde $40$ tam salınım yaptığını ölçüyor. Saatin zamanı doğru göstermesi için sarkacın periyodunun tam $1\ \text{s}$ olması gerekmektedir.

Buna göre ayar öncesinde sarkacın periyodu, olması gereken değerden kaç saniye fazladır?`,
    secenekler: { A: r`$0{,}25$`, B: r`$0{,}5$`, C: r`$0{,}75$`, D: '$1$', E: r`$1{,}5$` },
    dogruCevap: 'B',
    hesap: '60/40 - 1',
    adimAdimCozum: [
      r`$1\ \text{dakika} = 60\ \text{s}$'dir. Mevcut periyot: $T = \dfrac{t}{n} = \dfrac{60}{40} = 1{,}5\ \text{s}$.`,
      r`Hedeflenen periyot $T_0 = 1\ \text{s}$ olduğundan aradaki fark $\Delta T = 1{,}5 - 1 = 0{,}5\ \text{s}$ olur.`,
      r`Mevcut periyodun kendisini işaretleyen öğrenci $1{,}5$ yanılgısına düşer $\Rightarrow$ Cevap **B**`,
    ],
  },
]
