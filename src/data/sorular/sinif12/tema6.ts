import type { Soru } from '../../tipler.ts'
import { cizgi, direncDikey, direncYatay, eksen, ok, svg, uretecDikey, yazi } from '../../cizim.ts'

const r = String.raw
const TEMA = 'Modern Fiziğin Teknolojideki Uygulamaları'

/** Dikey telde diyot sembolü: y'den başlar, 20 birim; asagi = true ise üçgen aşağıyı gösterir (iletim yönü aşağı) */
const diyot = (x: number, y: number, asagi: boolean) =>
  asagi
    ? `<polygon points="${x - 11},${y} ${x + 11},${y} ${x},${y + 20}" class="f-v" stroke="none"/><line x1="${x - 12}" y1="${y + 20}" x2="${x + 12}" y2="${y + 20}" stroke-width="3"/>`
    : `<polygon points="${x - 11},${y + 20} ${x + 11},${y + 20} ${x},${y}" class="f-v" stroke="none"/><line x1="${x - 12}" y1="${y}" x2="${x + 12}" y2="${y}" stroke-width="3"/>`

/** Lamba sembolü (çarpılı daire) */
const lamba = (x: number, y: number) =>
  `<circle cx="${x}" cy="${y}" r="14" fill="none" stroke-width="2.5"/><path d="M${x - 10} ${y - 10} L${x + 10} ${y + 10} M${x + 10} ${y - 10} L${x - 10} ${y + 10}" stroke-width="2"/>`

export const sorular: Soru[] = [
  {
    id: '12-19',
    sinif: 12,
    tema: TEMA,
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
    tema: TEMA,
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
  {
    id: '12-T6-01',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.2',
    surecBileseni: 'LED tarafından yayılan ışığın dalga boyundan foton enerjisini hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir trafik lambasının kırmızı ışığı, dalga boyu $620\ \text{nm}$ olan ışık yayan LED'lerle üretiliyor.

Bu LED'lerden yayılan bir fotonun enerjisi kaç eV'tur? ($h \cdot c = 1240\ \text{eV} \cdot \text{nm}$)`,
    secenekler: { A: r`$0{,}5$`, B: r`$2{,}0$`, C: r`$2{,}5$`, D: r`$3{,}1$`, E: r`$6{,}2$` },
    dogruCevap: 'B',
    hesap: '1240/620',
    adimAdimCozum: [
      r`Foton enerjisi dalga boyuyla ters orantılıdır: $E = \dfrac{h \cdot c}{\lambda}$.`,
      r`$E = \dfrac{1240\ \text{eV} \cdot \text{nm}}{620\ \text{nm}} = 2{,}0\ \text{eV}$`,
      r`Oranı ters kuran öğrenci $\dfrac{620}{1240} = 0{,}5$ bulur; bu, birimce de anlamsızdır $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-T6-02',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.2',
    surecBileseni: 'Diyotlu bir devrede diyotların yönelimine göre hangi kolların akım ilettiğini yorumlar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekildeki devrede özdeş K, L ve M lambaları, birer ideal diyotla seri bağlanarak üretecin uçlarına paralel kollar hâlinde yerleştirilmiştir. Diyot sembolündeki üçgenin ucu, diyotun akımı ilettiği yönü göstermektedir.

Anahtar kapalıyken hangi lambalar ışık verir?`,
    svgDiyagram: svg(
      400, 240, 'Üç paralel kolda lamba ve diyot bulunan devre',
      '<path d="M50 113 V40 H360 M50 127 V210 H360 M160 40 V66 M160 94 V210 M260 40 V66 M260 94 V210 M360 40 V66 M360 94 V210" stroke-width="3"/>',
      uretecDikey(50, 113),
      yazi(64, 106, '+', { boy: 14 }),
      yazi(76, 128, 'ε', { boy: 15 }),
      lamba(160, 80),
      lamba(260, 80),
      lamba(360, 80),
      diyot(160, 135, true),
      diyot(260, 135, false),
      diyot(360, 135, true),
      yazi(180, 86, 'K'),
      yazi(280, 86, 'L'),
      yazi(380, 86, 'M'),
      '<circle cx="160" cy="40" r="4" class="f-t" stroke="none"/>',
      '<circle cx="260" cy="40" r="4" class="f-t" stroke="none"/>',
      '<circle cx="160" cy="210" r="4" class="f-t" stroke="none"/>',
      '<circle cx="260" cy="210" r="4" class="f-t" stroke="none"/>',
    ),
    secenekler: { A: 'Yalnız K', B: 'Yalnız L', C: 'K ve L', D: 'K ve M', E: 'K, L ve M' },
    dogruCevap: 'D',
    adimAdimCozum: [
      'Üretecin uzun plakası (+) üstte olduğundan akım üst telden çıkar ve kollarda yukarıdan aşağıya doğru ilerlemek ister.',
      'K ve M kollarındaki diyotların üçgeni aşağıyı gösterir; bu diyotlar doğru (ileri) yönde kutuplanmıştır ve akımı iletir.',
      'L kolundaki diyot ters kutuplanmıştır; ideal diyot ters yönde akım geçirmediği için L kolundan akım geçmez.',
      r`Işık veren lambalar K ve M $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '12-T6-03',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.3',
    surecBileseni: 'Direnç–sıcaklık grafiğini kullanarak süper iletken ve normal iletken davranışını karşılaştırır.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir araştırma laboratuvarında X ve Y tellerinin elektriksel dirençlerinin sıcaklıkla değişimi ölçülmüş ve sonuçlar grafikteki gibi elde edilmiştir.

Grafiğe göre,

I. X telinin direnci, yaklaşık 90 K'nin altındaki sıcaklıklarda sıfırdır.
II. Y telinin direncinin sıfırlandığı kritik sıcaklık 30 K civarındadır.
III. X teli 120 K sıcaklıkta süper iletken durumdadır.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      380, 240, 'X ve Y tellerinin direnç–sıcaklık grafiği',
      eksen(60, 200, 300, 175, 'T (K)', 'R (Ω)'),
      '<path d="M340 80 L177 128 V198 H62" class="c-v" stroke-width="3.5" fill="none"/>',
      '<path d="M340 56 L110 140 Q85 148 62 148" class="c-i" stroke-width="3" fill="none"/>',
      cizgi(177, 195, 177, 205),
      cizgi(294, 195, 294, 205),
      yazi(177, 220, '90', { boy: 12, hiza: 'middle' }),
      yazi(294, 220, '180', { boy: 12, hiza: 'middle' }),
      yazi(54, 214, '0', { boy: 12, hiza: 'end' }),
      yazi(346, 86, 'X'),
      yazi(346, 60, 'Y'),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'I, II ve III' },
    dogruCevap: 'A',
    adimAdimCozum: [
      'I. X telinin direnci 90 K değerinde aniden sıfıra düşer ve bu sıcaklığın altında sıfır kalır; X süper iletkendir, kritik sıcaklığı yaklaşık 90 K\'dir. Doğru.',
      'II. Y telinin direnci sıcaklık düştükçe azalır ama mutlak sıfıra yaklaşırken bile sıfır olmayan bir değere yaklaşır; Y için bir kritik sıcaklık yoktur. Yanlış.',
      'III. 120 K, X\'in kritik sıcaklığından büyüktür; bu sıcaklıkta X\'in direnci sıfır değildir, yani X normal iletken durumdadır. Yanlış.',
      r`Yalnızca I doğrudur $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '12-T6-04',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.1',
    surecBileseni: 'Tıbbi görüntüleme yöntemlerini dayandıkları fizik ilkesine göre ayırt eder.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir hastanın diz bağlarındaki yumuşak doku hasarı incelenecektir. Doktor, iyonlaştırıcı ışınım içermeyen; hastayı güçlü bir manyetik alana yerleştirip vücuttaki hidrojen çekirdeklerini radyo dalgalarıyla uyaran ve bu çekirdeklerden gelen sinyallerden kesit görüntüsü oluşturan bir yöntem seçmiştir.

Doktorun seçtiği görüntüleme yöntemi aşağıdakilerden hangisidir?`,
    secenekler: {
      A: 'Röntgen filmi',
      B: 'BT taraması',
      C: 'PET taraması',
      D: 'Mamografi',
      E: 'MR çekimi',
    },
    dogruCevap: 'E',
    adimAdimCozum: [
      'Röntgen, BT ve mamografi X-ışınlarını; PET ise pozitron yayan radyoaktif izleyicileri kullanır. Bu yöntemlerin hepsi iyonlaştırıcı ışınım içerir.',
      'Güçlü manyetik alan içinde hidrojen çekirdeklerinin radyo dalgalarıyla uyarılması ve geri verdikleri sinyallerin ölçülmesi manyetik rezonans ilkesidir.',
      r`MR yumuşak dokuları ayrıntılı gösterdiği için bağ hasarında tercih edilir $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '12-T6-05',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.1',
    surecBileseni: 'Farklı tanı durumları için uygun görüntüleme teknolojisini seçerek fizik ilkesiyle gerekçelendirir.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Acil Serviste Bir Gün:** Bir acil servise aynı gün üç hasta gelir. Birinci hasta düşmüş ve kolunun kırıldığından şüphelenilmektedir. İkinci hastada, havaalanı girişinde ateşli olduğu ilk anda temassız bir yöntemle fark edilmiştir. Üçüncü hastada ise vücudun herhangi bir bölgesinde metabolizması aşırı hızlı tümör dokusu olup olmadığı araştırılacaktır.

a) Birinci hasta için kullanılacak röntgen cihazında kemiğin filmde açık, kasın koyu görünmesinin nedenini açıklayınız.
b) İkinci hastanın ateşinin uzaktan belirlenmesini sağlayan termal kameranın hangi ışınımı algıladığını ve bu ışınımın sıcaklıkla ilişkisini yazınız.
c) Üçüncü hasta için kullanılan PET yönteminde, vücuda verilen izleyici maddeden çıkan pozitronun elektronla karşılaşınca ne oluşturduğunu ve dedektörlerin bunu nasıl algıladığını açıklayınız.`,
    dogruCevap: 'a) Kemik X-ışınlarını yumuşak dokudan çok daha fazla soğurur · b) Kızılötesi ışınım; sıcaklık arttıkça yayılan ışınım şiddeti artar · c) Yok olma (annihilasyon) ile zıt yönlerde iki gama fotonu; çevresel dedektörlerde eş zamanlı algılanır',
    adimAdimCozum: [
      'a) X-ışınlarının soğurulması dokunun yoğunluğuna ve içerdiği atomların atom numarasına bağlıdır. Kalsiyum içeren kemik X-ışınlarını çok soğurur, filme az ışın ulaşır ve bölge açık görünür; kas ışını daha kolay geçirir, film daha çok kararır.',
      'b) Her cisim sıcaklığına bağlı olarak elektromanyetik ışıma yapar; vücut sıcaklığındaki cisimlerin ışımasının büyük kısmı kızılötesi bölgededir. Termal kamera bu kızılötesi ışınımı algılar; sıcaklığı yüksek bölgeler daha şiddetli ışıdığı için görüntüde farklı renkte görünür.',
      'c) Pozitron, bir elektronla karşılaşınca ikisi yok olur ve kütleleri enerjiye dönüşerek zıt yönlerde hareket eden iki gama fotonu oluşur. Hastanın çevresindeki halka biçimli dedektörler bu iki fotonu aynı anda algılayarak çıkış noktasını belirler; izleyiciyi hızla tüketen tümör dokusu yoğun sinyal verir.',
    ],
    rubrik: [
      { olcut: 'Kemiğin X-ışınlarını daha çok soğurduğunu ve film kararmasıyla ilişkisini açıklama', puan: 3 },
      { olcut: 'Kızılötesi ışınımı ve sıcaklıkla şiddet ilişkisini doğru belirtme', puan: 3 },
      { olcut: 'Pozitron–elektron yok olmasını, iki gama fotonunu ve eş zamanlı algılamayı açıklama', puan: 4 },
    ],
  },
  {
    id: '12-T6-06',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.5',
    surecBileseni: 'Lazer düzeneğinin bölümlerini uyarılmış ışıma süreciyle ilişkilendirerek yorumlar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekilde bir lazer düzeneğinin temel bölümleri gösterilmiştir. Pompalama kaynağı etkin ortamdaki atomlara enerji aktarmakta, ortamın iki ucunda ise aynalar bulunmaktadır.

Bu düzenekle ilgili,

I. Lazer ışığı elde edilebilmesi için etkin ortamda uyarılmış durumdaki atom sayısının temel durumdakilerden fazla olması gerekir.
II. Kısmi geçirgen ayna, ortamda güçlenen ışığın bir bölümünün demet olarak dışarı çıkmasını sağlar.
III. Aynalar arasında gidip gelen fotonlar, uyarılmış atomların kendileriyle aynı faz ve yönde yeni fotonlar yayımlamasını tetikler.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      420, 210, 'Tam yansıtıcı ve kısmi geçirgen ayna arasında etkin ortam bulunan lazer düzeneği',
      '<rect x="50" y="70" width="12" height="80" class="f-t" stroke="none"/>',
      '<rect x="328" y="70" width="8" height="80" class="f-kv" stroke-width="2"/>',
      '<rect x="80" y="85" width="230" height="50" class="f-kv" stroke-width="2"/>',
      yazi(195, 115, 'etkin ortam', { boy: 13, hiza: 'middle' }),
      yazi(195, 30, 'pompalama kaynağı', { boy: 13, hiza: 'middle' }),
      ok(140, 40, 140, 80, 'i', 2.5),
      ok(195, 40, 195, 80, 'i', 2.5),
      ok(250, 40, 250, 80, 'i', 2.5),
      ok(342, 110, 410, 110, 'v', 4),
      yazi(20, 175, 'tam yansıtıcı ayna', { boy: 12 }),
      yazi(410, 175, 'kısmi geçirgen ayna', { boy: 12, hiza: 'end' }),
      yazi(380, 98, 'lazer', { boy: 12, hiza: 'middle' }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız III', C: 'I ve II', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'E',
    adimAdimCozum: [
      'I. Uyarılmış ışımanın soğurmaya baskın gelmesi için uyarılmış atomların sayıca çoğunlukta olması (nüfus terslenmesi) gerekir; pompalama kaynağının görevi budur. Doğru.',
      'II. Bir ayna ışığın neredeyse tamamını yansıtırken diğeri küçük bir bölümünü geçirir; lazer demeti bu kısmi geçirgen aynadan çıkar. Doğru.',
      'III. Uyarılmış bir atoma uygun enerjili foton geldiğinde atom, gelen fotonla aynı frekans, faz ve yönde ikinci bir foton yayımlar; aynalar bu süreci defalarca tekrarlatarak ışığı güçlendirir. Doğru.',
      r`Üç yargı da doğrudur $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '12-T6-07',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.2',
    surecBileseni: 'Enerji bant çiziminden yararlanarak bir LED\'in birim zamanda yaydığı foton sayısını hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Yeşil ışık veren bir LED'in yarı iletken malzemesine ait enerji bant çizimi şekilde verilmiştir. İletim bandındaki bir elektron değerlik bandındaki bir boşlukla birleştiğinde, enerjisi yasak enerji aralığına $(E_g)$ eşit olan bir foton yayımlanmaktadır.

LED'in yaydığı ışığın gücü $20\ \text{mW}$ olduğuna göre, LED'den bir saniyede yayılan foton sayısı kaçtır? ($1\ \text{eV} = 1{,}6 \cdot 10^{-19}\ \text{J}$)`,
    svgDiyagram: svg(
      380, 220, 'LED malzemesinin enerji bant çizimi',
      '<rect x="40" y="30" width="190" height="40" class="f-kv" stroke-width="2"/>',
      '<rect x="40" y="150" width="190" height="40" class="f-k" stroke-width="2"/>',
      yazi(160, 56, 'iletim bandı', { boy: 13, hiza: 'middle' }),
      yazi(160, 176, 'değerlik bandı', { boy: 13, hiza: 'middle' }),
      '<circle cx="80" cy="60" r="6" class="f-i" stroke="none"/>',
      '<circle cx="80" cy="160" r="6" fill="none" stroke-width="2"/>',
      ok(80, 70, 80, 150, 'i', 2.5),
      '<path d="M96 110 q6 -9 12 0 q6 9 12 0 q6 -9 12 0 q6 9 12 0 q6 -9 12 0 q6 9 12 0" class="c-v" stroke-width="2.5" fill="none"/>',
      ok(166, 110, 186, 110, 'v', 2.5),
      yazi(140, 136, 'foton', { boy: 12, hiza: 'middle' }),
      '<line x1="260" y1="70" x2="260" y2="150" stroke-width="1.5"/>',
      '<path d="M254 70 h12 M254 150 h12" stroke-width="1.5"/>',
      yazi(270, 115, 'Eg = 2,5 eV', { boy: 13 }),
    ),
    secenekler: {
      A: r`$8 \cdot 10^{-3}$`,
      B: r`$1{,}25 \cdot 10^{15}$`,
      C: r`$8 \cdot 10^{15}$`,
      D: r`$5 \cdot 10^{16}$`,
      E: r`$5 \cdot 10^{19}$`,
    },
    dogruCevap: 'D',
    hesap: '0.02/(2.5*1.6e-19)',
    adimAdimCozum: [
      r`Bir fotonun enerjisi yasak enerji aralığına eşittir: $E = 2{,}5\ \text{eV} = 2{,}5 \cdot 1{,}6 \cdot 10^{-19} = 4 \cdot 10^{-19}\ \text{J}$`,
      r`Işık gücü, saniyede yayılan foton sayısı ile bir fotonun enerjisinin çarpımıdır: $P = n \cdot E$. Burada $P = 20\ \text{mW} = 2 \cdot 10^{-2}\ \text{W}$.`,
      r`$n = \dfrac{2 \cdot 10^{-2}}{4 \cdot 10^{-19}} = 5 \cdot 10^{16}$ foton/s`,
      r`eV'u joule'e çevirmeyen $8 \cdot 10^{-3}$, mW'ı W'a çevirmeyen $5 \cdot 10^{19}$ bulur $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '12-T6-08',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.4',
    surecBileseni: 'Maddenin nano ölçekte bölünmesinin toplam yüzey alanına etkisini hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Nano altın parçacıkları, katalizör olarak kullanıldıklarında aynı kütledeki külçe altından çok daha etkindir. Kenar uzunluğu $1\ \text{cm}$ olan küp biçimindeki bir altın parçasının, kenar uzunluğu $10\ \text{nm}$ olan özdeş küplere bölündüğünü düşünelim.

Bölünme sonunda elde edilen küplerin toplam yüzey alanı, ilk küpün yüzey alanının kaç katı olur?`,
    secenekler: { A: r`$10^{2}$`, B: r`$10^{3}$`, C: r`$10^{6}$`, D: r`$10^{12}$`, E: r`$10^{18}$` },
    dogruCevap: 'C',
    hesap: '0.01/(10e-9)',
    adimAdimCozum: [
      r`Kenar oranı: $\dfrac{L}{a} = \dfrac{10^{-2}\ \text{m}}{10^{-8}\ \text{m}} = 10^{6}$. Küp sayısı $N = (10^{6})^3 = 10^{18}$ olur.`,
      r`Toplam yüzey alanlarının oranı: $\dfrac{N \cdot 6a^2}{6L^2} = 10^{18} \cdot \left(\dfrac{a}{L}\right)^2 = 10^{18} \cdot 10^{-12} = 10^{6}$`,
      r`Hacim değişmezken yüzey alanı bir milyon kat artar; yüzey/hacim oranının büyümesi tepkimeye giren yüzey atomlarının artması demektir. Küp sayısını cevap sanan $10^{18}$ bulur $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-T6-09',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.3',
    surecBileseni: 'Süper iletken üzerinde mıknatısın havada asılı kalmasını Meissner etkisiyle açıklar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir fen şenliğinde, sıvı azot içinde kritik sıcaklığının altına soğutulan seramik bir diskin üzerine küçük bir mıknatıs bırakılıyor. Mıknatıs diske değmeden şekildeki gibi havada asılı kalıyor.

Bu olayın temel nedeni aşağıdakilerden hangisidir?`,
    svgDiyagram: svg(
      400, 220, 'Sıvı azot içindeki süper iletken disk üzerinde havada duran mıknatıs',
      '<path d="M40 115 V185 H260 V115" stroke-width="3" fill="none"/>',
      '<rect x="42" y="140" width="216" height="43" class="f-s" stroke="none"/>',
      '<rect x="80" y="128" width="140" height="18" class="f-kv" stroke-width="2"/>',
      '<rect x="120" y="70" width="60" height="24" class="f-v" stroke="none"/>',
      '<line x1="150" y1="98" x2="150" y2="124" class="k" stroke-width="1.5"/>',
      yazi(272, 88, 'mıknatıs', { boy: 13 }),
      yazi(272, 142, 'seramik disk', { boy: 13 }),
      yazi(150, 208, 'sıvı azot (77 K)', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: {
      A: 'Sıvı azotun buharlaşırken mıknatısı yukarı itmesi',
      B: 'Soğuyan diskin mıknatısı elektrostatik olarak itmesi',
      C: 'Düşük sıcaklıkta mıknatısın kütlesinin azalması',
      D: 'Diskin yüzeyindeki sürtünmenin mıknatısı tutması',
      E: 'Süper iletkenin manyetik alanı içinden dışlaması',
    },
    dogruCevap: 'E',
    adimAdimCozum: [
      'Kritik sıcaklığın altına soğutulan disk süper iletken olur; süper iletkenler, içlerine giren manyetik alanı dışarı iter. Buna Meissner etkisi denir.',
      'Dışlanan manyetik alan çizgileri mıknatısla disk arasında sıkışır ve mıknatısa yukarı yönlü bir manyetik kuvvet etki eder; bu kuvvet ağırlığı dengeleyince mıknatıs havada kalır.',
      r`Kütle sıcaklıkla değişmez; elektrostatik itme ya da gaz akışı mıknatısı sürekli dengede tutamaz $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '12-T6-10',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.2',
    surecBileseni: 'LED\'li bir devrede foton enerjilerini ve koruma direncini hesaplayarak p-n ekleminin iletim koşulunu açıklar.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – RGB Gece Lambası:** Bir öğrenci, kırmızı ($620\ \text{nm}$), yeşil ($496\ \text{nm}$) ve mavi ($413\ \text{nm}$) LED'lerden oluşan bir gece lambası tasarlıyor. İlk denemede kırmızı LED'i şekildeki gibi $5\ \text{V}$'luk bir üretece ve bir R direncine seri bağlıyor. ($h \cdot c = 1240\ \text{eV} \cdot \text{nm}$)

a) Üç LED'den yayılan fotonların enerjilerini eV cinsinden hesaplayınız ve bant aralığı en büyük olan LED'i belirtiniz.
b) Kırmızı LED'in uçları arasındaki gerilim $2\ \text{V}$ iken devreden $20\ \text{mA}$ akım geçmesi isteniyor. R direnci kaç ohm olmalıdır?
c) Öğrenci LED'i ters çevirerek bağladığında LED ışık vermiyor. Bunun nedenini p-n eklemi üzerinden açıklayınız.`,
    svgDiyagram: svg(
      400, 230, 'Üreteç, direnç ve LED\'den oluşan seri devre',
      '<path d="M50 113 V40 H140 M220 40 H330 V100 M330 120 V210 H50 V127" stroke-width="3" fill="none"/>',
      uretecDikey(50, 113),
      direncYatay(140, 40),
      diyot(330, 100, true),
      ok(346, 100, 366, 82, 'v', 2),
      ok(350, 114, 370, 96, 'v', 2),
      yazi(64, 106, '+', { boy: 14 }),
      yazi(76, 130, '5 V', { boy: 14 }),
      yazi(180, 24, 'R', { hiza: 'middle' }),
      yazi(346, 146, 'LED', { boy: 13 }),
    ),
    dogruCevap: r`a) $2{,}0$; $2{,}5$; $\approx 3{,}0\ \text{eV}$ – en büyük mavide · b) $R = 150\ \Omega$ · c) Ters kutuplamada eklem bölgesi genişler, elektron–boşluk birleşmesi olmaz`,
    adimAdimCozum: [
      r`a) $E = \dfrac{1240}{\lambda}$: kırmızı $\dfrac{1240}{620} = 2{,}0\ \text{eV}$, yeşil $\dfrac{1240}{496} = 2{,}5\ \text{eV}$, mavi $\dfrac{1240}{413} \approx 3{,}0\ \text{eV}$. Foton enerjisi bant aralığına eşit olduğundan bant aralığı en büyük olan mavi LED'dir.`,
      r`b) Seri devrede direncin üzerindeki gerilim $5 - 2 = 3\ \text{V}$ olur. $R = \dfrac{3\ \text{V}}{0{,}02\ \text{A}} = 150\ \Omega$`,
      'c) LED bir p-n eklemidir. Doğru kutuplamada n bölgesindeki elektronlar ve p bölgesindeki boşluklar eklemde birleşerek foton yayar. Ters kutuplamada üreteç yük taşıyıcılarını eklemden uzaklaştırır, tükenim bölgesi genişler; akım geçmediği için birleşme ve ışık yayımı olmaz.',
    ],
    rubrik: [
      { olcut: 'Üç foton enerjisini doğru hesaplama ve mavi LED\'i belirleme', puan: 4 },
      { olcut: 'Direnç üzerindeki gerilimi bulup R = 150 Ω sonucuna ulaşma', puan: 3 },
      { olcut: 'Ters kutuplamada akım ve ışık oluşmamasını p-n eklemiyle açıklama', puan: 3 },
    ],
  },
  {
    id: '12-T6-11',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.1',
    surecBileseni: 'Ultrason cihazının çalışma ilkesine ilişkin yargıların doğruluğunu değerlendirir.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Gebelik takibinde bebeğin gelişimi ultrason cihazıyla izlenmektedir. Bu cihazla ilgili,

I. Görüntü oluşturmak için iyonlaştırıcı X-ışınlarından yararlanır.
II. Probun gönderdiği ses dalgalarının doku sınırlarından yansıyıp geri dönme süreleri ölçülerek görüntü oluşturulur.
III. Kullanılan ses dalgaları, insan kulağının duyabildiği frekans aralığındadır.

yargılarından hangileri doğrudur?`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve III', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'B',
    adimAdimCozum: [
      'I. Ultrason mekanik bir dalga olan sesi kullanır; X-ışını ya da başka bir iyonlaştırıcı ışınım içermez. Bu yüzden gebelikte güvenle kullanılır. Yanlış.',
      'II. Prob kısa ses atmaları gönderir; yoğunlukları farklı dokuların sınırlarından yansıyan yankıların dönüş süresinden sınırın derinliği hesaplanır ve görüntü oluşturulur. Doğru.',
      'III. Ultrason, frekansı 20 000 Hz\'in üzerinde olan, insan kulağının duyamadığı ses dalgasıdır. Yanlış.',
      r`Yalnızca II doğrudur $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-T6-12',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.2',
    surecBileseni: 'İdeal diyotların iletim ve kesim durumlarını belirleyerek diyotlu devrede ana kol akımını hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekildeki devrede iç direnci önemsiz üretecin gerilimi $\varepsilon = 12\ \text{V}$'tur. $D_1$, $D_2$ ve $D_3$ ideal diyotlardır; ileri yönde dirençleri sıfır, ters yönde sonsuz kabul edilmektedir. Diyot sembolündeki üçgenin ucu iletim yönünü göstermektedir.

Buna göre, $R = 4\ \Omega$'luk dirençten geçen akım kaç amperdir?`,
    svgDiyagram: svg(
      440, 240, 'Seri bir direnç ve diyotlu üç paralel koldan oluşan devre',
      '<path d="M50 113 V40 H80 M160 40 H370 M50 127 V210 H370 M210 40 V60 M210 120 V140 M210 160 V210 M290 40 V60 M290 120 V140 M290 160 V210 M370 40 V60 M370 120 V140 M370 160 V210" stroke-width="3" fill="none"/>',
      uretecDikey(50, 113),
      yazi(64, 106, '+', { boy: 14 }),
      yazi(76, 130, 'ε', { boy: 15 }),
      direncYatay(80, 40),
      yazi(120, 24, 'R = 4 Ω', { boy: 13, hiza: 'middle' }),
      direncDikey(210, 60),
      direncDikey(290, 60),
      direncDikey(370, 60),
      yazi(226, 95, 'R₁ = 6 Ω', { boy: 11 }),
      yazi(306, 95, 'R₂ = 3 Ω', { boy: 11 }),
      yazi(386, 95, 'R₃ = 6 Ω', { boy: 11 }),
      diyot(210, 140, true),
      diyot(290, 140, true),
      diyot(370, 140, false),
      yazi(228, 158, 'D₁', { boy: 12 }),
      yazi(308, 158, 'D₂', { boy: 12 }),
      yazi(388, 158, 'D₃', { boy: 12 }),
      '<circle cx="210" cy="40" r="4" class="f-t" stroke="none"/>',
      '<circle cx="290" cy="40" r="4" class="f-t" stroke="none"/>',
      '<circle cx="210" cy="210" r="4" class="f-t" stroke="none"/>',
      '<circle cx="290" cy="210" r="4" class="f-t" stroke="none"/>',
    ),
    secenekler: { A: r`$2$`, B: r`$\dfrac{12}{7}$`, C: r`$1{,}2$`, D: r`$\dfrac{12}{19}$`, E: r`$0$` },
    dogruCevap: 'A',
    hesap: '12/(4+6*3/(6+3))',
    adimAdimCozum: [
      'Akım üretecin + kutbundan üst tele çıkar ve kollarda aşağı doğru ilerler. Üçgeni aşağıyı gösteren D₁ ve D₂ iletimdedir; D₃ ters kutuplandığı için R₃ kolundan akım geçmez.',
      r`İletimdeki kollar paraleldir: $R_{12} = \dfrac{6 \cdot 3}{6 + 3} = 2\ \Omega$. Eşdeğer direnç $R_{es} = 4 + 2 = 6\ \Omega$ olur.`,
      r`$I = \dfrac{\varepsilon}{R_{es}} = \dfrac{12}{6} = 2\ \text{A}$`,
      r`Yalnız $R_2$ kolunu alan $\dfrac{12}{7}$, tüm dirençleri seri sanan $\dfrac{12}{19}$ bulur $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '12-T6-13',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.5',
    surecBileseni: 'Lazer ışığının temel özelliklerini sıradan ışıktan ayırt eder.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Lazer ışığı, fiber optik iletişimden göz ameliyatlarına kadar pek çok alanda sıradan ışık kaynaklarının yerine tercih edilmektedir.

Aşağıdakilerden hangisi lazer ışığının özelliklerinden biridir?`,
    secenekler: {
      A: 'Birçok farklı dalga boyunu bir arada içerir',
      B: 'Dalgaları birbiriyle eş fazlı olarak ilerler',
      C: 'Kaynaktan çıktıktan sonra her yöne yayılır',
      D: 'Yalnızca görünür ışık bölgesinde üretilebilir',
      E: 'Kendiliğinden ışıma ile rastgele üretilir',
    },
    dogruCevap: 'B',
    adimAdimCozum: [
      'Lazer ışığı uyarılmış ışımayla üretilir; yayımlanan fotonlar uyaran fotonla aynı frekans, faz ve yöndedir. Bu nedenle lazer ışığı eş fazlı (koherent) ve tek renklidir.',
      'Lazer demeti çok az dağılır, her yöne yayılmaz. Kızılötesi ve morötesi bölgede çalışan lazerler de vardır; rastgele kendiliğinden ışıma ise sıradan lambaların ışık üretme biçimidir.',
      r`Doğru ifade eş fazlılıktır $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-T6-14',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.1',
    surecBileseni: 'Röntgen tüpünde hızlandırıcı gerilimden yararlanarak yayılan X-ışınlarının en küçük dalga boyunu hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekildeki röntgen tüpünde katottan ihmal edilebilir hızla çıkan elektronlar $50\ \text{kV}$'luk gerilimle hızlandırılarak anottaki hedefe çarptırılıyor. Bir elektronun kinetik enerjisinin tamamı tek bir fotona dönüştüğünde en küçük dalga boylu X-ışını oluşmaktadır.

Buna göre, tüpten yayılan X-ışınlarının en küçük dalga boyu kaç pikometredir? ($h \cdot c = 1240\ \text{eV} \cdot \text{nm}$, $1\ \text{nm} = 1000\ \text{pm}$)`,
    svgDiyagram: svg(
      400, 220, 'Katot, anot ve yüksek gerilim kaynağından oluşan röntgen tüpü',
      '<rect x="40" y="50" width="300" height="100" rx="40" class="f-k" stroke-width="2"/>',
      '<rect x="70" y="85" width="14" height="30" class="f-t" stroke="none"/>',
      '<polygon points="300,80 320,80 320,120 285,120" class="f-v" stroke="none"/>',
      '<path d="M77 85 V20 H150 M230 20 H313 V80" stroke-width="2" fill="none"/>',
      yazi(190, 25, '50 kV', { boy: 14, hiza: 'middle' }),
      yazi(140, 14, '−', { boy: 14, hiza: 'middle' }),
      yazi(240, 14, '+', { boy: 14, hiza: 'middle' }),
      ok(92, 100, 278, 100, 'i', 2.5),
      yazi(185, 90, 'e⁻', { boy: 14, hiza: 'middle' }),
      ok(292, 126, 262, 196, 'v', 2),
      ok(302, 126, 302, 198, 'v', 2),
      yazi(314, 192, 'X-ışınları', { boy: 12 }),
      yazi(77, 172, 'katot', { boy: 12, hiza: 'middle' }),
      yazi(350, 104, 'anot', { boy: 12 }),
    ),
    secenekler: { A: r`$2{,}48$`, B: r`$12{,}4$`, C: r`$24{,}8$`, D: r`$49{,}6$`, E: r`$248$` },
    dogruCevap: 'C',
    hesap: '1240/50000*1000',
    adimAdimCozum: [
      r`$50\ \text{kV}$ ile hızlandırılan bir elektronun kazandığı kinetik enerji $E_k = e \cdot V = 50\,000\ \text{eV}$ olur.`,
      r`En küçük dalga boyu en büyük foton enerjisine karşılık gelir: $\lambda_{min} = \dfrac{h \cdot c}{E} = \dfrac{1240}{50\,000} = 0{,}0248\ \text{nm}$`,
      r`$0{,}0248\ \text{nm} \cdot 1000 = 24{,}8\ \text{pm}$`,
      r`Gerilimi iki katı alan $12{,}4$, yarısı alan $49{,}6$ bulur $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-T6-15',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.3',
    surecBileseni: 'MR mıknatıslarında süper iletken bobin kullanımını kritik sıcaklık ve sıfır direnç kavramlarıyla açıklar.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – MR Cihazının Kalbi:** Bir hastanedeki MR cihazının güçlü manyetik alanı, niyobyum-titanyum (NbTi) alaşımından yapılmış bir bobinle üretilmektedir. Teknisyen, bobinin sürekli olarak sıvı helyum içinde tutulduğunu, bobine bir kez akım verildikten sonra üretecin ayrıldığını ve akımın aylarca azalmadan dolaştığını anlatıyor. Şekilde ilgili sıcaklık değerleri ölçeksiz olarak verilmiştir.

a) Bobinin neden sıvı helyumla soğutulduğunu, sıvı azotun neden bu iş için yeterli olmadığını açıklayınız.
b) Üreteç ayrıldıktan sonra bobindeki akımın azalmadan dolaşmasını, bobinde ısıya dönüşen elektrik gücü açısından açıklayınız.
c) Soğutma sistemi arızalanır ve bobinin sıcaklığı 9 K'nin üzerine çıkarsa ne olacağını açıklayınız. Süper iletken mıknatısların MR dışındaki bir kullanım alanını yazınız.`,
    svgDiyagram: svg(
      360, 230, 'MR bobini için önemli sıcaklık değerlerini gösteren ölçeksiz sıcaklık ekseni',
      ok(120, 212, 120, 22, 't', 2),
      yazi(130, 28, 'T (ölçeksiz)', { boy: 12 }),
      cizgi(114, 200, 126, 200),
      cizgi(114, 175, 126, 175),
      cizgi(114, 150, 126, 150),
      cizgi(114, 65, 126, 65),
      yazi(108, 204, '0 K', { boy: 12, hiza: 'end' }),
      yazi(108, 179, '4,2 K', { boy: 12, hiza: 'end' }),
      yazi(108, 154, '9 K', { boy: 12, hiza: 'end' }),
      yazi(108, 69, '77 K', { boy: 12, hiza: 'end' }),
      yazi(134, 179, 'sıvı helyum kaynar', { boy: 12 }),
      yazi(134, 154, 'NbTi kritik sıcaklığı', { boy: 12 }),
      yazi(134, 69, 'sıvı azot kaynar', { boy: 12 }),
    ),
    dogruCevap: 'a) NbTi yalnızca yaklaşık 9 K altında süper iletken; sıvı helyum 4,2 K, sıvı azot 77 K · b) R = 0 olduğundan P = I²R = 0, enerji kaybı yok · c) Süper iletkenlik kaybolur, bobin direnç kazanır, enerji ısıya dönüşür ve helyum hızla buharlaşır; maglev trenleri, parçacık hızlandırıcıları',
    adimAdimCozum: [
      'a) Bir malzeme yalnızca kritik sıcaklığının altında süper iletkendir. NbTi\'nin kritik sıcaklığı yaklaşık 9 K\'dir. Sıvı helyum 4,2 K\'de kaynadığı için bobini bu sıcaklığın altında tutar; sıvı azot ise 77 K\'de kaynar ve bobini 9 K\'nin altına soğutamaz.',
      'b) Süper iletken durumda bobinin direnci sıfırdır. Isıya dönüşen güç P = I²R bağıntısıyla bulunur; R = 0 olduğundan P = 0 olur. Enerji kaybı olmadığı için akım üreteç olmadan da azalmadan dolaşır ve manyetik alan sabit kalır.',
      'c) Sıcaklık kritik değeri aşınca bobin normal iletkene döner ve direnç kazanır. Bobinde depolanmış büyük manyetik enerji kısa sürede ısıya dönüşür, helyum hızla buharlaşır ve manyetik alan söner (bu olaya söndürme, İngilizcede quench denir). Süper iletken mıknatıslar manyetik kaldırmalı (maglev) trenlerde ve parçacık hızlandırıcılarında da kullanılır.',
    ],
    rubrik: [
      { olcut: 'Kritik sıcaklığı sıvı helyum ve sıvı azotun kaynama sıcaklıklarıyla karşılaştırarak açıklama', puan: 4 },
      { olcut: 'Sıfır dirençte ısıya dönüşen gücün sıfır olduğunu P = I²R ile gösterme', puan: 3 },
      { olcut: 'Süper iletkenliğin kaybının sonuçlarını açıklama ve bir kullanım alanı yazma', puan: 3 },
    ],
  },
  {
    id: '12-T6-16',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.6.4',
    surecBileseni: 'Nano ölçeğin tanımını ve nanoteknoloji uygulamalarına ilişkin yargıları değerlendirir.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Nanoteknoloji; tıptan tekstile, elektronikten enerjiye kadar birçok alanda yeni ürünlerin geliştirilmesini sağlamaktadır. Nanoteknolojiyle ilgili,

I. Nanometre metrenin milyarda biridir; nanoteknoloji yaklaşık 1–100 nm boyutundaki yapılarla ilgilenir.
II. Bir madde nano boyuta indirildiğinde rengi, erime sıcaklığı gibi özellikleri külçe hâlindekiyle her zaman aynı kalır.
III. Yüzeyi nano ölçekte pürüzlendirilerek suyu ve kiri tutmaz hâle getirilen kendi kendini temizleyen kumaşlar bir nanoteknoloji uygulamasıdır.

yargılarından hangileri doğrudur?`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'II ve III' },
    dogruCevap: 'D',
    adimAdimCozum: [
      r`I. $1\ \text{nm} = 10^{-9}\ \text{m}$'dir ve nanoteknolojinin çalışma ölçeği yaklaşık 1–100 nm aralığıdır. Doğru.`,
      'II. Nano ölçekte yüzey/hacim oranı çok büyür ve kuantum etkileri belirginleşir; bu nedenle renk, erime sıcaklığı, iletkenlik gibi özellikler değişebilir. Örneğin nano altın parçacıkları sarı değil kırmızımsı görünebilir. Yanlış.',
      'III. Nilüfer (lotus) yaprağından esinlenen nano ölçekli pürüzlü yüzeyler suyun damlacık hâlinde yuvarlanıp kiri sürüklemesini sağlar; bu bir nanoteknoloji uygulamasıdır. Doğru.',
      r`I ve III doğrudur $\Rightarrow$ Cevap **D**`,
    ],
  },
]
