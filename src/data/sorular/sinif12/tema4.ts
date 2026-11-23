import type { Soru } from '../../tipler.ts'
import { cizgi, eksen, ok, svg, yazi } from '../../cizim.ts'

const r = String.raw
const TEMA = 'Atom Fiziğine Giriş ve Radyoaktivite'

export const sorular: Soru[] = [
  {
    id: '12-12',
    sinif: 12,
    tema: TEMA,
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
    tema: TEMA,
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
    tema: TEMA,
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
  {
    id: '12-T4-01',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.1',
    surecBileseni: 'Rutherford saçılma deneyinin gözlemlerinden atomun yapısına ilişkin sonuçlar çıkarır.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Rutherford, ince bir altın levhaya $\alpha$ parçacıkları göndermiş ve parçacıkların levhadan sonra izlediği yolları incelemiştir (şekil). Parçacıkların çok büyük bölümü sapmadan geçmiş, bir kısmı büyük açılarla saçılmış, çok azı ise geldiği yöne geri dönmüştür.

Bu gözlemlerden aşağıdaki sonuçlardan hangilerine ulaşılabilir?

I. Atomun pozitif yükü ve kütlesinin neredeyse tamamı çok küçük bir hacimde toplanmıştır.
II. Atomun hacminin büyük bölümü boşluktur.
III. Elektronlar çekirdek çevresinde yalnızca belirli enerji düzeylerinde bulunabilir.`,
    svgDiyagram: svg(
      400, 220, 'Rutherford alfa saçılması deneyi',
      '<rect x="20" y="95" width="50" height="30" class="f-kv"/>',
      yazi(45, 145, 'α kaynağı', { boy: 12, hiza: 'middle' }),
      '<rect x="230" y="40" width="8" height="150" class="f-kv"/>',
      yazi(234, 30, 'Altın levha', { boy: 12, hiza: 'middle' }),
      ok(70, 110, 380, 110, 'i', 2),
      ok(70, 100, 380, 100, 'i', 2),
      '<path d="M70 92 L234 92 Q 300 86 372 62" class="c-i" stroke-width="2"/>',
      '<path d="M70 126 L234 126 Q 290 150 340 205" class="c-i" stroke-width="2"/>',
      '<path d="M70 118 L226 118 Q 190 140 120 170" class="c-v" stroke-width="2"/>',
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'I ve III', E: 'I, II ve III' },
    dogruCevap: 'C',
    adimAdimCozum: [
      r`Parçacıkların çoğunun sapmadan geçmesi, atomun büyük bölümünün boşluk olduğunu gösterir; II doğrudur.`,
      r`Az sayıda parçacığın büyük açıyla saçılması ya da geri dönmesi, pozitif yükün ve kütlenin çok küçük, yoğun bir çekirdekte toplandığını gösterir; I doğrudur.`,
      r`Elektronların belirli enerji düzeylerinde bulunduğu fikri saçılma deneyinden değil, Bohr modelinden ve tayf gözlemlerinden gelir; III bu deneyle çıkarılamaz $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-T4-02',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.1',
    surecBileseni: 'Foton soğuran hidrojen atomunun uyarıldığı enerji düzeyini enerji korunumuyla belirler.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekilde hidrojen atomunun enerji düzeyleri verilmiştir ($E_n = -\dfrac{13{,}6}{n^2}\ \text{eV}$). Temel hâldeki bir hidrojen atomu, enerjisi $12{,}75\ \text{eV}$ olan bir fotonu soğuruyor.

Bu durumda atomun elektronu kaçıncı enerji düzeyine çıkar?`,
    svgDiyagram: svg(
      360, 240, 'Hidrojen atomunun beş enerji düzeyi',
      cizgi(100, 28, 260, 28, { k: 2 }),
      cizgi(100, 48, 260, 48, { k: 2 }),
      cizgi(100, 66, 260, 66, { k: 2 }),
      cizgi(100, 92, 260, 92, { k: 2 }),
      cizgi(100, 132, 260, 132, { k: 2 }),
      cizgi(100, 215, 260, 215, { k: 3 }),
      yazi(92, 32, 'n = ∞', { boy: 11, hiza: 'end' }),
      yazi(92, 52, 'n = 5', { boy: 11, hiza: 'end' }),
      yazi(92, 70, 'n = 4', { boy: 11, hiza: 'end' }),
      yazi(92, 96, 'n = 3', { boy: 11, hiza: 'end' }),
      yazi(92, 136, 'n = 2', { boy: 11, hiza: 'end' }),
      yazi(92, 219, 'n = 1', { boy: 11, hiza: 'end' }),
      yazi(268, 32, '0 eV', { boy: 11 }),
      yazi(268, 52, '−0,54 eV', { boy: 11 }),
      yazi(268, 70, '−0,85 eV', { boy: 11 }),
      yazi(268, 96, '−1,51 eV', { boy: 11 }),
      yazi(268, 136, '−3,4 eV', { boy: 11 }),
      yazi(268, 219, '−13,6 eV', { boy: 11 }),
    ),
    secenekler: { A: '$2$', B: '$3$', C: '$4$', D: '$5$', E: '$6$' },
    dogruCevap: 'C',
    hesap: 'sqrt(13.6/(13.6-12.75))',
    adimAdimCozum: [
      r`Soğurulan foton enerjisi iki düzey arasındaki farka tam olarak eşit olmalıdır: $E_n - E_1 = 12{,}75\ \text{eV}$`,
      r`$E_n = -13{,}6 + 12{,}75 = -0{,}85\ \text{eV}$`,
      r`$-\dfrac{13{,}6}{n^2} = -0{,}85 \Rightarrow n^2 = 16 \Rightarrow n = 4$ $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-T4-03',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.3',
    surecBileseni: 'Alfa, beta ve gama ışınlarını elektrik alanındaki sapma yönlerine göre ayırt eder.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Kurşun bir blok içindeki radyoaktif kaynaktan çıkan ışınlar, zıt yüklü iki paralel levha arasındaki düzgün elektrik alanına alan çizgilerine dik olarak giriyor ve şekildeki K, L, M yollarını izliyor.

K, L ve M yollarını izleyen ışınlar sırasıyla hangileridir?`,
    svgDiyagram: svg(
      380, 230, 'Elektrik alanında alfa beta gama ışınlarının sapması',
      '<rect x="90" y="30" width="240" height="8" class="f-kv"/>',
      '<rect x="90" y="192" width="240" height="8" class="f-kv"/>',
      yazi(210, 22, '+  +  +  +  +  +  +', { boy: 13, hiza: 'middle' }),
      yazi(210, 220, '−  −  −  −  −  −  −', { boy: 13, hiza: 'middle' }),
      '<rect x="20" y="100" width="50" height="30" class="f-kv"/>',
      yazi(45, 150, 'Kaynak', { boy: 11, hiza: 'middle' }),
      '<path d="M70 115 L90 115 Q 220 118 330 172" class="c-i" stroke-width="2.5"/>',
      cizgi(70, 115, 340, 115, { sinif: 'c-v', k: 2.5 }),
      '<path d="M70 115 L90 115 Q 170 112 250 46" class="c-i" stroke-width="2.5"/>',
      yazi(338, 182, 'K', { boy: 14 }),
      yazi(348, 120, 'L', { boy: 14 }),
      yazi(258, 58, 'M', { boy: 14 }),
    ),
    secenekler: {
      A: r`$\alpha$, $\beta^-$, $\gamma$`,
      B: r`$\alpha$, $\gamma$, $\beta^-$`,
      C: r`$\beta^-$, $\gamma$, $\alpha$`,
      D: r`$\gamma$, $\alpha$, $\beta^-$`,
      E: r`$\beta^-$, $\alpha$, $\gamma$`,
    },
    dogruCevap: 'B',
    adimAdimCozum: [
      r`Pozitif yüklü $\alpha$ parçacıkları negatif levhaya doğru çekilir: aşağı sapan K yolu $\alpha$ ışınıdır.`,
      r`Yüksüz $\gamma$ fotonları elektrik alanından etkilenmez: düz giden L yolu $\gamma$ ışınıdır.`,
      r`Negatif yüklü $\beta^-$ parçacıkları pozitif levhaya doğru sapar; kütleleri çok küçük olduğundan daha çok sapar: M yolu $\beta^-$ ışınıdır $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-T4-04',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.1',
    surecBileseni: 'Uyarılmış hidrojen atomunun iyonlaşması için gereken en küçük enerjiyi hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bohr modeline göre hidrojen atomunda $n$ numaralı düzeyin enerjisi $E_n = -\dfrac{13{,}6}{n^2}\ \text{eV}$ bağıntısıyla verilir.

Elektronu $n = 3$ düzeyinde bulunan uyarılmış bir hidrojen atomunu iyonlaştırmak için gereken en küçük enerji kaç eV'tur?`,
    secenekler: { A: r`$1{,}51$`, B: r`$1{,}89$`, C: r`$3{,}4$`, D: r`$12{,}09$`, E: r`$13{,}6$` },
    dogruCevap: 'A',
    hesap: '13.6/9',
    adimAdimCozum: [
      r`İyonlaşma, elektronun $n = \infty$ düzeyine ($E = 0$) çıkarılmasıdır.`,
      r`$E_3 = -\dfrac{13{,}6}{9} \approx -1{,}51\ \text{eV}$`,
      r`Gereken en küçük enerji: $0 - (-1{,}51) = 1{,}51\ \text{eV}$ $\Rightarrow$ Cevap **A**`,
      r`$13{,}6\ \text{eV}$ temel hâldeki atomun iyonlaşma enerjisidir; $12{,}09\ \text{eV}$ ise $1 \rightarrow 3$ uyarılma enerjisidir (çeldiriciler).`,
    ],
  },
  {
    id: '12-T4-05',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.3',
    surecBileseni: 'Kütle–zaman grafiğinden yarı ömrü okuyarak ileri bir andaki kalan madde miktarını hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir laboratuvarda saklanan radyoaktif bir örneğin bozunmamış kütlesinin zamana bağlı değişimi grafikteki gibidir.

Başlangıçtan $30$ gün sonra örnekte bozunmamış kaç gram madde kalır?`,
    svgDiyagram: svg(
      340, 230, 'Bozunmamış kütlenin zamanla değişim grafiği',
      eksen(60, 200, 270, 180, 't (gün)', 'm (g)'),
      '<path d="M60 40 Q 88 86 120 120 Q 150 146 180 160 Q 240 186 312 192" class="c-v" stroke-width="3.5"/>',
      cizgi(60, 120, 120, 120, { sinif: 'k', k: 1.5 }),
      cizgi(120, 120, 120, 200, { sinif: 'k', k: 1.5 }),
      cizgi(60, 160, 180, 160, { sinif: 'k', k: 1.5 }),
      cizgi(180, 160, 180, 200, { sinif: 'k', k: 1.5 }),
      yazi(52, 45, '160', { boy: 12, hiza: 'end' }),
      yazi(52, 125, '80', { boy: 12, hiza: 'end' }),
      yazi(52, 165, '40', { boy: 12, hiza: 'end' }),
      yazi(120, 216, '6', { boy: 12, hiza: 'middle' }),
      yazi(180, 216, '12', { boy: 12, hiza: 'middle' }),
    ),
    secenekler: { A: '$40$', B: '$20$', C: '$10$', D: '$5$', E: r`$2{,}5$` },
    dogruCevap: 'D',
    hesap: '160/2**(30/6)',
    adimAdimCozum: [
      r`Grafikte kütle $6$ günde $160\ \text{g}$'dan $80\ \text{g}$'a iniyor: yarı ömür $T = 6$ gündür.`,
      r`$30$ günde geçen yarı ömür sayısı: $n = \dfrac{30}{6} = 5$`,
      r`Kalan kütle: $m = \dfrac{160}{2^5} = \dfrac{160}{32} = 5\ \text{g}$ $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '12-T4-06',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.2',
    surecBileseni: 'Büyük Patlama kuramını destekleyen gözlemsel kanıtları değerlendirir.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Gökbilimciler, evrenin yaklaşık $13{,}8$ milyar yıl önce çok sıcak ve yoğun bir başlangıç durumundan genişleyerek oluştuğunu öne süren Büyük Patlama kuramını çeşitli gözlemlerle desteklemektedir.

Aşağıdakilerden hangileri bu kuramı destekleyen kanıtlardandır?

I. Gökyüzünün her yönünden hemen hemen aynı şiddette gelen kozmik mikrodalga arka plan ışıması
II. Uzak gökadalardan gelen ışığın tayf çizgilerinde gözlenen kırmızıya kayma
III. Evrendeki hidrojen ve helyum bolluğunun kuramın öngördüğü oranlarla uyumlu olması`,
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve II', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'E',
    adimAdimCozum: [
      r`I: Kozmik mikrodalga arka plan ışıması, evrenin erken dönemdeki sıcak hâlinden kalan ve genişlemeyle soğuyarak mikrodalga bölgesine kaymış ışımadır; kanıttır.`,
      r`II: Kırmızıya kayma, gökadaların bizden uzaklaştığını yani evrenin genişlediğini gösterir; kanıttır.`,
      r`III: İlk dakikalarda oluşan hafif çekirdeklerin (H, He) bolluk oranları kuramın hesaplarıyla örtüşür; kanıttır $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '12-T4-07',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.1',
    surecBileseni: 'Bir deney düzeneğinde oluşacak tayfın soğurma tayfı olduğunu gerekçelendirerek yorumlar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekildeki düzenekte akkor bir lambadan çıkan beyaz ışık, önce düşük basınçlı soğuk hidrojen gazından, ardından bir prizmadan geçirilerek ekrana düşürülüyor.

Ekranda gözlenen tayf için aşağıdakilerden hangisi doğrudur?`,
    svgDiyagram: svg(
      420, 200, 'Soğurma tayfı deney düzeneği',
      '<circle cx="40" cy="100" r="18" class="f-v"/>',
      yazi(40, 140, 'Akkor lamba', { boy: 11, hiza: 'middle' }),
      cizgi(58, 100, 100, 100, { k: 2.5 }),
      '<rect x="100" y="75" width="80" height="50" class="f-s"/>',
      yazi(140, 145, 'Soğuk H gazı', { boy: 11, hiza: 'middle' }),
      cizgi(180, 100, 252, 100, { k: 2.5 }),
      '<polygon points="240,135 270,65 300,135" class="f-kv"/>',
      yazi(270, 155, 'Prizma', { boy: 11, hiza: 'middle' }),
      cizgi(288, 100, 380, 62, { sinif: 'c-i', k: 1.5 }),
      cizgi(288, 100, 380, 82, { sinif: 'c-i', k: 1.5 }),
      cizgi(288, 100, 380, 102, { sinif: 'c-v', k: 1.5 }),
      cizgi(288, 100, 380, 122, { sinif: 'c-v', k: 1.5 }),
      '<rect x="380" y="45" width="8" height="95" class="f-kv"/>',
      yazi(384, 160, 'Ekran', { boy: 11, hiza: 'middle' }),
    ),
    secenekler: {
      A: 'Renk bandı üzerinde, hidrojenin yayınma çizgileriyle aynı yerlerde karanlık çizgiler',
      B: 'Karanlık zemin üzerinde yalnızca hidrojenin yaydığı renklere ait parlak çizgiler',
      C: 'Hiçbir çizgi içermeyen, kırmızıdan mora kesintisiz uzanan tek bir renk bandı',
      D: 'Renk bandı üzerinde, gazın türünden bağımsız olarak rastgele dağılmış karanlık çizgiler',
      E: 'Yalnızca kırmızı bölgede, gazın soğurduğu tek dalga boyuna ait karanlık bir çizgi',
    },
    dogruCevap: 'A',
    adimAdimCozum: [
      r`Akkor lamba tek başına sürekli tayf (kesintisiz renk bandı) verir.`,
      r`Soğuk hidrojen atomları, yalnızca enerji düzeyleri arasındaki farka eşit enerjili fotonları soğurur; bu dalga boyları ekrana ulaşmaz.`,
      r`Atom hangi dalga boylarında yayınım yapıyorsa aynı dalga boylarında soğurma yapar; sürekli tayf üzerinde bu yerlerde karanlık çizgiler (soğurma tayfı) oluşur $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '12-T4-08',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.1',
    surecBileseni: 'Thomson atom modelinin öngörüsünü saçılma deneyi bağlamında açıklar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Thomson atom modelinde atom, pozitif yükün düzgün dağıldığı bir küre ve bu kürenin içine gömülü elektronlardan oluşan bir yapı olarak düşünülür.

Bu model doğru olsaydı, ince bir metal levhaya gönderilen hızlı $\alpha$ parçacıkları için aşağıdaki sonuçlardan hangisi beklenirdi?`,
    secenekler: {
      A: 'Parçacıkların önemli bir kısmının geldiği yöne geri saçılması',
      B: 'Parçacıkların tamamının levhada soğurularak durması',
      C: 'Parçacıkların çoğunun büyük açılarla rastgele yönlere sapması',
      D: 'Parçacıkların hemen hepsinin çok küçük açılarla saparak geçmesi',
      E: 'Parçacıkların elektronlara çarpınca geri dönmesi, kalanının ise soğurulması',
    },
    dogruCevap: 'D',
    adimAdimCozum: [
      r`Thomson modelinde pozitif yük atomun tüm hacmine yayıldığından hiçbir noktada güçlü, yoğunlaşmış bir itme kuvveti oluşmaz.`,
      r`Elektronların kütlesi $\alpha$ parçacığına göre çok küçüktür; çarpışmalar parçacığın yönünü belirgin biçimde değiştiremez.`,
      r`Bu nedenle parçacıkların hemen hepsinin çok küçük açılarla saparak geçmesi beklenirdi; büyük açılı saçılmalar bu modelle açıklanamaz $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '12-T4-09',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.3',
    surecBileseni: 'Fisyon tepkimesinde kütle ve yük numarası korunumunu kullanarak bilinmeyen ürünü belirler.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir nükleer santralin reaktöründe gerçekleşen fisyon tepkimelerinden biri aşağıda verilmiştir:

$$^{235}_{92}\text{U} + {}^{1}_{0}\text{n} \rightarrow {}^{141}_{56}\text{Ba} + {}^{A}_{Z}\text{Kr} + 3\,{}^{1}_{0}\text{n}$$

Buna göre kripton çekirdeğinin kütle numarası $A$ kaçtır?`,
    secenekler: { A: '$88$', B: '$89$', C: '$90$', D: '$92$', E: '$95$' },
    dogruCevap: 'D',
    hesap: '235 + 1 - 141 - 3',
    adimAdimCozum: [
      r`Çekirdek tepkimelerinde toplam kütle numarası korunur.`,
      r`Sol taraf: $235 + 1 = 236$; sağ taraf: $141 + A + 3 \cdot 1$`,
      r`$236 = 144 + A \Rightarrow A = 92$ (yük korunumundan $Z = 92 - 56 = 36$) $\Rightarrow$ Cevap **D**`,
      r`Çıkan üç nötronu hesaba katmayan öğrenci $236 - 141 = 95$ bulur.`,
    ],
  },
  {
    id: '12-T4-10',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.1',
    surecBileseni: 'Atomun elektronla çarpışarak uyarılmasını enerji düzeyleri üzerinden analiz eder.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Temel hâldeki hidrojen atomlarından oluşan bir gaz, kinetik enerjisi $11\ \text{eV}$ olan elektronlarla bombardıman ediliyor. Hidrojenin enerji düzeyleri şekilde verilmiştir.

Buna göre,

I. Gazdaki bazı atomlar $n = 2$ düzeyine uyarılabilir.
II. Atomu uyaran bir elektron, çarpışmadan sonra $0{,}8\ \text{eV}$ kinetik enerjiyle uzaklaşır.
III. Uyarılan atomlar temel hâle dönerken $10{,}2\ \text{eV}$ enerjili foton yayımlar.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      380, 220, 'Elektron çarpışmasıyla hidrojenin uyarılması',
      cizgi(110, 30, 258, 30, { k: 2 }),
      cizgi(110, 70, 258, 70, { k: 2 }),
      cizgi(110, 105, 258, 105, { k: 2 }),
      cizgi(110, 195, 258, 195, { k: 3 }),
      yazi(266, 34, 'n = ∞   0 eV', { boy: 11 }),
      yazi(266, 74, 'n = 3   −1,51 eV', { boy: 11 }),
      yazi(266, 109, 'n = 2   −3,4 eV', { boy: 11 }),
      yazi(266, 199, 'n = 1   −13,6 eV', { boy: 11 }),
      ok(20, 160, 98, 160, 'i', 2.5),
      yazi(18, 148, 'e⁻ (11 eV)', { boy: 11 }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız III', C: 'I ve II', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'E',
    adimAdimCozum: [
      r`Uyarılma enerjileri: $1 \rightarrow 2$ için $10{,}2\ \text{eV}$, $1 \rightarrow 3$ için $12{,}09\ \text{eV}$. Elektronun $11\ \text{eV}$'u yalnızca $n = 2$'ye uyarmaya yeter; I doğrudur.`,
      r`Elektron, fotondan farklı olarak enerjisinin bir kısmını verebilir: $11 - 10{,}2 = 0{,}8\ \text{eV}$ ile uzaklaşır; II doğrudur.`,
      r`$n = 2$'den $n = 1$'e dönüşte $10{,}2\ \text{eV}$'luk foton yayımlanır; III doğrudur $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '12-T4-11',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.1',
    surecBileseni: 'Hidrojen gaz lambasının görünür tayf çizgilerinin enerjilerini ve dalga boylarını hesaplayarak yorumlar.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Hidrojen Gaz Lambası:** Fizik laboratuvarında yüksek gerilim uygulanan bir hidrojen tüpünün ışığı, el tayfölçeriyle incelenince görünür bölgede çizgiler gözleniyor. Şekilde, tüpteki atomların $n = 4$ düzeyine kadar uyarıldığı durum için iki geçiş ($\lambda_1$ ve $\lambda_2$) gösterilmiştir. Hidrojenin düzey enerjileri: $E_1 = -13{,}6\ \text{eV}$, $E_2 = -3{,}4\ \text{eV}$, $E_3 = -1{,}51\ \text{eV}$, $E_4 = -0{,}85\ \text{eV}$; $hc = 1240\ \text{eV} \cdot \text{nm}$.

a) $\lambda_1$ ve $\lambda_2$ geçişlerinde yayımlanan fotonların enerjilerini hesaplayınız.
b) Bu iki çizginin dalga boylarını nanometre cinsinden bulunuz.
c) $n = 4$ düzeyine uyarılmış atomlar en çok kaç farklı enerjide foton yayımlayabilir? Bunlardan bazılarının gözle görülmemesinin nedenini açıklayınız.`,
    svgDiyagram: svg(
      360, 230, 'Hidrojende n = 2 düzeyine inen iki geçiş',
      cizgi(90, 40, 250, 40, { k: 2 }),
      cizgi(90, 70, 250, 70, { k: 2 }),
      cizgi(90, 115, 250, 115, { k: 2 }),
      cizgi(90, 205, 250, 205, { k: 3 }),
      yazi(82, 44, 'n = 4', { boy: 12, hiza: 'end' }),
      yazi(82, 74, 'n = 3', { boy: 12, hiza: 'end' }),
      yazi(82, 119, 'n = 2', { boy: 12, hiza: 'end' }),
      yazi(82, 209, 'n = 1', { boy: 12, hiza: 'end' }),
      ok(140, 40, 140, 115, 'v', 2.5),
      ok(200, 70, 200, 115, 'i', 2.5),
      yazi(132, 90, 'λ₁', { boy: 13, hiza: 'end' }),
      yazi(208, 98, 'λ₂', { boy: 13 }),
    ),
    dogruCevap: r`a) $2{,}55\ \text{eV}$ ve $1{,}89\ \text{eV}$ · b) $\lambda_1 \approx 486\ \text{nm}$, $\lambda_2 \approx 656\ \text{nm}$ · c) $6$ farklı foton; $n = 1$'e inenler morötesi, $4 \rightarrow 3$ kızılötesidir`,
    adimAdimCozum: [
      r`a) $\lambda_1$ ($4 \rightarrow 2$): $E = -0{,}85 - (-3{,}4) = 2{,}55\ \text{eV}$; $\lambda_2$ ($3 \rightarrow 2$): $E = -1{,}51 - (-3{,}4) = 1{,}89\ \text{eV}$`,
      r`b) $\lambda = \dfrac{hc}{E}$: $\lambda_1 = \dfrac{1240}{2{,}55} \approx 486\ \text{nm}$ (mavi-yeşil), $\lambda_2 = \dfrac{1240}{1{,}89} \approx 656\ \text{nm}$ (kırmızı)`,
      r`c) Olası geçişler: $4\rightarrow3$, $4\rightarrow2$, $4\rightarrow1$, $3\rightarrow2$, $3\rightarrow1$, $2\rightarrow1$; toplam $6$ farklı foton.`,
      r`$n = 1$'e inen geçişlerin enerjileri $10{,}2\ \text{eV}$ ve üzeridir (morötesi); $4 \rightarrow 3$ geçişinin $0{,}66\ \text{eV}$'luk fotonu yaklaşık $1880\ \text{nm}$ ile kızılötesidir. Göz yalnızca yaklaşık $400$–$700\ \text{nm}$ aralığını algılar.`,
    ],
    rubrik: [
      { olcut: 'İki geçişin foton enerjilerini doğru hesaplama', puan: 3 },
      { olcut: 'Dalga boylarını hc/E ile doğru bulma', puan: 3 },
      { olcut: 'Altı geçişi belirleme ve görünmeyenleri morötesi/kızılötesi olarak açıklama', puan: 4 },
    ],
  },
  {
    id: '12-T4-12',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.3',
    surecBileseni: 'Yarı ömürleri farklı iki radyoaktif maddenin çekirdek sayılarının eşitlendiği anı grafik verisinden hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Grafikte K ve L radyoaktif maddelerinin bozunmamış çekirdek sayılarının zamanla değişimi, ilk $5$ saat için verilmiştir. Başlangıçta K'nin çekirdek sayısı $4N$, L'ninki $N$'dir.

Bozunma bu şekilde sürdüğüne göre, iki maddenin bozunmamış çekirdek sayıları $t = 0$ anından kaç saat sonra birbirine eşit olur?`,
    svgDiyagram: svg(
      340, 230, 'K ve L maddelerinin bozunma eğrileri',
      eksen(60, 200, 270, 180, 't (saat)', 'Çekirdek sayısı'),
      '<path d="M60 40 Q 96 88 140 120 Q 178 146 220 160 Q 240 166 262 172" class="c-v" stroke-width="3"/>',
      '<path d="M60 160 Q 140 172 220 180 Q 240 182 262 183" class="c-i" stroke-width="3"/>',
      cizgi(60, 120, 140, 120, { sinif: 'k', k: 1.5 }),
      cizgi(140, 120, 140, 200, { sinif: 'k', k: 1.5 }),
      cizgi(220, 160, 220, 200, { sinif: 'k', k: 1.5 }),
      cizgi(140, 180, 220, 180, { sinif: 'k', k: 1.5 }),
      yazi(52, 45, '4N', { boy: 12, hiza: 'end' }),
      yazi(52, 125, '2N', { boy: 12, hiza: 'end' }),
      yazi(52, 165, 'N', { boy: 12, hiza: 'end' }),
      yazi(134, 184, 'N/2', { boy: 11, hiza: 'end' }),
      yazi(140, 216, '2', { boy: 12, hiza: 'middle' }),
      yazi(220, 216, '4', { boy: 12, hiza: 'middle' }),
      yazi(80, 54, 'K', { boy: 14 }),
      yazi(84, 154, 'L', { boy: 14 }),
    ),
    secenekler: { A: '$4$', B: '$6$', C: '$8$', D: '$12$', E: '$16$' },
    dogruCevap: 'C',
    hesap: '4*log10(4)/log10(2)',
    adimAdimCozum: [
      r`Grafikten: K'nin sayısı $2$ saatte $4N$'den $2N$'ye iner, $T_K = 2$ saat; L'ninki $4$ saatte $N$'den $\tfrac{N}{2}$'ye iner, $T_L = 4$ saat.`,
      r`Eşitlik koşulu: $4N \left(\tfrac{1}{2}\right)^{t/2} = N \left(\tfrac{1}{2}\right)^{t/4} \Rightarrow 4 = 2^{\,t/2 - t/4} = 2^{\,t/4}$`,
      r`$\dfrac{t}{4} = 2 \Rightarrow t = 8$ saat; bu anda her ikisinde de $\tfrac{N}{4}$ çekirdek kalır $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-T4-13',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.1',
    surecBileseni: 'Bohr atom modelinin açıklayabildiği ve açıklayamadığı olguları ayırt eder.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bohr atom modeli hidrojen atomunun tayfını açıklamada büyük başarı sağlamış, ancak bazı gözlemleri açıklamakta yetersiz kalmıştır.

Aşağıdakilerden hangisi Bohr atom modeliyle açıklanamaz?`,
    secenekler: {
      A: 'Hidrojenin yayınma tayfındaki çizgilerin dalga boyları',
      B: 'Çok elektronlu atomların tayf çizgilerinin dalga boyları',
      C: 'Hidrojen atomunun iyonlaşma enerjisinin değeri',
      D: 'Hidrojenin yalnızca belirli dalga boylarında ışık soğurması',
      E: 'Elektronun düzeyler arası geçişte foton yayımlaması',
    },
    dogruCevap: 'B',
    adimAdimCozum: [
      r`Bohr modeli tek elektronlu hidrojen atomu için kurulmuştur; düzey enerjileri, iyonlaşma enerjisi ($13{,}6\ \text{eV}$) ve tayf çizgileri bu modelle hesaplanabilir.`,
      r`Belirli dalga boylarında soğurma ve geçişlerde foton yayımlanması da modelin temel varsayımlarıyla açıklanır.`,
      r`Birden çok elektronlu atomlarda elektronlar arası etkileşim modelde yer almadığından bu atomların tayfları Bohr modeliyle açıklanamaz $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-T4-14',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.2',
    surecBileseni: 'Madde ile antimaddenin yok olmasında açığa çıkan enerjiyi durgun kütle enerjisinden hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Her temel parçacığın, kütlesi aynı fakat yükü zıt olan bir antiparçacığı vardır; elektronun antiparçacığı pozitrondur. Durgun bir elektron ile durgun bir pozitron karşılaştığında ikisi de yok olur ve iki gama fotonu oluşur.

Elektron ve pozitronun her birinin durgun kütle enerjisi $mc^2 = 0{,}51\ \text{MeV}$ olduğuna göre, oluşan iki fotonun toplam enerjisi kaç MeV'tur?`,
    secenekler: { A: r`$0{,}255$`, B: r`$0{,}51$`, C: r`$0{,}765$`, D: r`$1{,}02$`, E: r`$2{,}04$` },
    dogruCevap: 'D',
    hesap: '2*0.51',
    adimAdimCozum: [
      r`Yok olmada iki parçacığın durgun kütle enerjilerinin tamamı fotonlara aktarılır (parçacıklar durgun olduğundan kinetik enerji yoktur).`,
      r`$E_{toplam} = m_{e}c^2 + m_{e^+}c^2 = 0{,}51 + 0{,}51 = 1{,}02\ \text{MeV}$`,
      r`Momentum korunumu gereği iki foton zıt yönlerde, her biri $0{,}51\ \text{MeV}$ ile yayılır $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '12-T4-15',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.3',
    surecBileseni: 'Manyetik alanda bırakılan izlerden radyoaktif ışınların yük türlerini çıkarır.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Radyoaktif bir kaynaktan çıkan $\alpha$, $\beta^-$ ve $\gamma$ ışınları, sayfa düzleminden içeri doğru yönelmiş düzgün bir manyetik alana alan çizgilerine dik olarak giriyor ve şekildeki 1, 2 ve 3 numaralı izleri bırakıyor.

Buna göre,

I. 1 numaralı iz $\alpha$ parçacıklarına aittir.
II. 3 numaralı izi bırakan parçacıklar pozitif yüklüdür.
III. Manyetik alanın şiddeti artırılırsa 2 numaralı iz de bükülür.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      400, 230, 'Manyetik alanda radyoaktif ışınların izleri',
      '<rect x="110" y="20" width="280" height="200" class="f-s"/>',
      ...[140, 190, 240, 290, 340].flatMap((x) => [42, 92, 158, 208].map((y) => yazi(x, y, '×', { boy: 13, hiza: 'middle' }))),
      '<rect x="20" y="105" width="50" height="30" class="f-kv"/>',
      yazi(45, 152, 'Kaynak', { boy: 11, hiza: 'middle' }),
      '<path d="M70 120 L110 120 Q 250 112 362 58" class="c-v" stroke-width="2.5"/>',
      cizgi(70, 120, 380, 120, { sinif: 'c-i', k: 2.5 }),
      '<path d="M70 120 L110 120 Q 170 128 205 188" class="c-v" stroke-width="2.5"/>',
      yazi(368, 56, '1', { boy: 14 }),
      yazi(372, 112, '2', { boy: 14 }),
      yazi(212, 190, '3', { boy: 14 }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'Yalnız III', D: 'I ve II', E: 'I ve III' },
    dogruCevap: 'A',
    adimAdimCozum: [
      r`Manyetik kuvvet $F = qvB$ yüklü parçacıkları büker; pozitif ve negatif parçacıklar zıt yönlere sapar. Sağ el kuralıyla sağa giden pozitif yük için kuvvet, alan sayfadan içeri iken yukarı doğrudur.`,
      r`Yukarı ve az bükülen 1 numaralı iz, ağır ve pozitif $\alpha$ parçacıklarınındır; I doğrudur. Aşağı ve çok bükülen 3 numaralı iz hafif ve negatif $\beta^-$ parçacıklarınındır; II yanlıştır.`,
      r`2 numaralı iz yüksüz $\gamma$ fotonlarınındır; alan ne kadar güçlü olursa olsun sapmaz, III yanlıştır $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '12-T4-16',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.2',
    surecBileseni: 'Evrenin oluşum evrelerini temel parçacıklar, kuark yapısı ve kozmik mikrodalga arka plan ışımasıyla ilişkilendirir.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Evrenin İlk Anları:** Bir bilim merkezindeki sergide, Büyük Patlama'dan günümüze uzanan evreler şekildeki zaman şeridiyle anlatılıyor. Sergi panosunda şu parçacıklar listelenmiş: elektron, u kuarkı, nötrino, d kuarkı, müon. Kuarkların yükleri: $q_u = +\tfrac{2}{3}e$, $q_d = -\tfrac{1}{3}e$.

a) Panodaki parçacıkları kuarklar ve leptonlar olarak sınıflandırınız.
b) Proton (uud) ve nötronun (udd) elektrik yüklerini kuark yüklerinden hesaplayınız.
c) Atomların oluşabilmesi için evrenin neden yeterince soğuması gerektiğini ve kozmik mikrodalga arka plan ışımasının bu evreyle ilişkisini açıklayınız.`,
    svgDiyagram: svg(
      440, 150, 'Büyük Patlamadan günümüze evreler',
      ok(20, 75, 428, 75, 't', 2.5),
      cizgi(50, 68, 50, 82, { k: 2 }),
      cizgi(130, 68, 130, 82, { k: 2 }),
      cizgi(215, 68, 215, 82, { k: 2 }),
      cizgi(300, 68, 300, 82, { k: 2 }),
      cizgi(385, 68, 385, 82, { k: 2 }),
      yazi(50, 55, 'Büyük Patlama', { boy: 11, hiza: 'middle' }),
      yazi(130, 102, 'Kuark ve leptonlar', { boy: 11, hiza: 'middle' }),
      yazi(215, 55, 'Proton ve nötron', { boy: 11, hiza: 'middle' }),
      yazi(300, 102, 'H ve He çekirdekleri', { boy: 11, hiza: 'middle' }),
      yazi(385, 55, 'Atomlar ve KMA', { boy: 11, hiza: 'middle' }),
      yazi(424, 130, 'zaman', { boy: 11, hiza: 'end' }),
    ),
    dogruCevap: r`a) Kuark: u, d · Lepton: elektron, nötrino, müon · b) Proton $+e$, nötron $0$ · c) Soğuyan evrende çekirdekler elektron yakalayarak atom oluşturdu; serbest kalan ışık genişlemeyle mikrodalgaya kaydı`,
    adimAdimCozum: [
      r`a) u ve d kuarkları kuark ailesindendir; elektron, nötrino ve müon güçlü etkileşime girmeyen leptonlardır.`,
      r`b) Proton: $\tfrac{2}{3} + \tfrac{2}{3} - \tfrac{1}{3} = +1 \Rightarrow +e$; nötron: $\tfrac{2}{3} - \tfrac{1}{3} - \tfrac{1}{3} = 0$`,
      r`c) Çok sıcak evrende fotonların enerjisi, çekirdeğe bağlanan elektronları hemen koparacak (iyonlaştıracak) kadar büyüktü. Evren genişleyip soğuyunca çekirdekler elektronları tutabildi ve nötr atomlar oluştu.`,
      r`Nötr atomlar ışığı artık sürekli saçmadığından ışık serbestçe yayılabildi; bu ışıma evrenin genişlemesiyle dalga boyu uzayarak bugün mikrodalga bölgesinde gözlenen kozmik mikrodalga arka plan ışımasıdır.`,
    ],
    rubrik: [
      { olcut: 'Beş parçacığı kuark/lepton olarak doğru sınıflandırma', puan: 3 },
      { olcut: 'Proton ve nötron yüklerini kuark yüklerinden doğru hesaplama', puan: 3 },
      { olcut: 'Soğuma–atom oluşumu ilişkisini ve KMA kökenini açıklama', puan: 4 },
    ],
  },
  {
    id: '12-T4-17',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.3',
    surecBileseni: 'Kararsız çekirdeklerin kararlılık kuşağına göre konumundan yapacakları bozunma türünü tahmin eder.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekilde, kararlı çekirdeklerin nötron sayısı ($N$) – proton sayısı ($Z$) grafiğinde oluşturduğu kararlılık kuşağı ile K, L ve M kararsız çekirdekleri gösterilmiştir. K kuşağın üstünde, L kuşağın altında yer almaktadır; M'nin atom numarası ise $83$'ten büyüktür.

K, L ve M çekirdeklerinin kararlı hâle yaklaşmak için yapması beklenen bozunmalar aşağıdakilerin hangisinde doğru verilmiştir?`,
    svgDiyagram: svg(
      360, 240, 'Kararlılık kuşağı ve kararsız çekirdekler',
      eksen(60, 210, 280, 190, 'Z', 'N'),
      cizgi(60, 210, 330, 100, { sinif: 'k', k: 1.5 }),
      yazi(326, 92, 'N = Z', { boy: 11, hiza: 'end' }),
      '<path d="M60 210 Q 150 160 290 50" class="c-i" stroke-width="12" stroke-linecap="round"/>',
      cizgi(290, 210, 290, 30, { sinif: 'k', k: 1.5 }),
      yazi(290, 228, 'Z = 83', { boy: 11, hiza: 'middle' }),
      yazi(84, 72, 'Kararlılık kuşağı', { boy: 11 }),
      '<circle cx="160" cy="105" r="6" class="f-v"/>',
      yazi(170, 101, 'K', { boy: 14 }),
      '<circle cx="236" cy="125" r="6" class="f-v"/>',
      yazi(246, 131, 'L', { boy: 14 }),
      '<circle cx="308" cy="42" r="6" class="f-v"/>',
      yazi(318, 48, 'M', { boy: 14 }),
    ),
    secenekler: {
      A: r`K: $\beta^+$, L: $\beta^-$, M: $\alpha$`,
      B: r`K: $\beta^-$, L: $\beta^+$, M: $\alpha$`,
      C: r`K: $\alpha$, L: $\beta^-$, M: $\beta^+$`,
      D: r`K: $\beta^-$, L: $\alpha$, M: $\beta^+$`,
      E: r`K: $\gamma$, L: $\beta^+$, M: $\beta^-$`,
    },
    dogruCevap: 'B',
    adimAdimCozum: [
      r`K kuşağın üstündedir: nötronu fazladır. $\beta^-$ bozunmasında bir nötron protona dönüşür ($N$ azalır, $Z$ artar) ve çekirdek kuşağa yaklaşır.`,
      r`L kuşağın altındadır: protonu fazladır. $\beta^+$ bozunmasında bir proton nötrona dönüşür ($Z$ azalır, $N$ artar).`,
      r`$Z > 83$ olan M ağır bir çekirdektir; $\alpha$ bozunmasıyla iki proton ve iki nötron kaybederek küçülür. $\gamma$ ışıması $N$ ve $Z$'yi değiştirmez $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-T4-18',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.3',
    surecBileseni: 'Radyoaktif izotopların günlük hayattaki ve tıptaki kullanım alanlarını örneklerle ayırt eder.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Radyoaktif izotoplar tıptan sanayiye, arkeolojiden güvenlik sistemlerine kadar pek çok alanda kullanılır.

Aşağıdaki uygulamalardan hangisinde radyoaktif bir kaynaktan **yararlanılmaz**?`,
    secenekler: {
      A: 'Tiroit bezinin görüntülenmesinde iyot-131 izotopunun kullanılması',
      B: 'Tıbbi aletlerin gama ışınlarıyla mikroplardan arındırılması',
      C: 'Mikrodalga fırında yiyeceklerdeki su moleküllerinin ısıtılması',
      D: 'Duman dedektörlerinde amerikyum-241 kaynağının kullanılması',
      E: 'Fosil ve kayaçların yaşlarının izotop oranlarıyla belirlenmesi',
    },
    dogruCevap: 'C',
    adimAdimCozum: [
      r`İyot-131 tiroitte birikerek görüntüleme ve tedavide; gama ışınları tıbbi malzemelerin sterilizasyonunda kullanılır.`,
      r`Duman dedektörlerindeki amerikyum-241 havayı iyonlaştırır; yaş tayininde karbon-14 ya da uranyum–kurşun gibi izotop oranlarından yararlanılır.`,
      r`Mikrodalga fırın, magnetron denen bir düzenekte üretilen elektromanyetik dalgalarla çalışır; çekirdek bozunması içermez $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-T4-19',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.3',
    surecBileseni: 'Bir bozunma zincirindeki alfa ve beta bozunması sayılarını kütle ve atom numarası değişimlerinden hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Doğada bulunan toryum-232 çekirdeği ($^{232}_{90}\text{Th}$), art arda $\alpha$ ve $\beta^-$ bozunmaları yaparak sonunda kararlı kurşun-208 ($^{208}_{82}\text{Pb}$) çekirdeğine dönüşür.

Bu bozunma zincirinde gerçekleşen $\alpha$ ve $\beta^-$ bozunmalarının toplam sayısı kaçtır?`,
    secenekler: { A: '$6$', B: '$8$', C: '$9$', D: '$10$', E: '$12$' },
    dogruCevap: 'D',
    hesap: '(232-208)/4 + (82 - (90 - 2*(232-208)/4))',
    adimAdimCozum: [
      r`Kütle numarasını yalnızca $\alpha$ bozunması değiştirir (her birinde $4$ azalır): $\alpha$ sayısı $= \dfrac{232 - 208}{4} = 6$`,
      r`$6$ alfa bozunması atom numarasını $12$ azaltır: $90 - 12 = 78$. Oysa kurşunun atom numarası $82$'dir.`,
      r`Her $\beta^-$ bozunması atom numarasını $1$ artırır: $\beta^-$ sayısı $= 82 - 78 = 4$`,
      r`Toplam bozunma sayısı: $6 + 4 = 10$ $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '12-T4-20',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.3',
    surecBileseni: 'Tıbbi görüntülemede kullanılan bir izotopun aktivitesini hesaplar ve ışın türlerini giricilik deneyinden belirleyerek korunma önlemleri önerir.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Nükleer Tıp Servisi:** Kemik taraması yapılacak bir hastaya, yarı ömrü $6$ saat olan teknesyum-99m izotopundan $800\ \text{MBq}$ aktiviteli bir doz veriliyor. Teknesyum-99m, uyarılmış bir çekirdektir ve yalnızca gama ışını yayımlayarak teknesyum-99'a dönüşür. Serviste, farklı ışın türlerini tanıtmak için şekildeki düzenek kullanılıyor: kaynaktan çıkan X, Y ve Z ışınları kâğıt, alüminyum ve kurşun engellere yöneltiliyor.

a) Hastanın vücudundaki teknesyum-99m'nin aktivitesi $24$ saat sonra kaç MBq olur? (Vücuttan atılım ihmal edilecek.)
b) Teknesyum-99m'nin gama yayımlaması sırasında çekirdeğin kütle numarası ve atom numarası nasıl değişir? Açıklayınız.
c) Şekle göre X, Y ve Z ışınlarının hangileri olduğunu belirleyiniz. Görüntülemede neden alfa yerine gama yayan bir izotop seçildiğini ve sağlık personelinin uyması gereken iki korunma önlemini yazınız.`,
    svgDiyagram: svg(
      420, 200, 'Alfa beta gama ışınlarının giricilik düzeneği',
      '<rect x="15" y="60" width="40" height="80" class="f-kv"/>',
      yazi(35, 158, 'Kaynak', { boy: 11, hiza: 'middle' }),
      '<rect x="130" y="35" width="6" height="130" class="f-kv"/>',
      '<rect x="220" y="35" width="14" height="130" class="f-kv"/>',
      '<rect x="320" y="35" width="28" height="130" class="f-kv"/>',
      yazi(133, 25, 'Kâğıt', { boy: 11, hiza: 'middle' }),
      yazi(227, 25, 'Alüminyum', { boy: 11, hiza: 'middle' }),
      yazi(334, 25, 'Kurşun', { boy: 11, hiza: 'middle' }),
      ok(55, 75, 128, 75, 'v', 2.5),
      ok(55, 100, 218, 100, 'i', 2.5),
      ok(55, 125, 318, 125, 't', 2.5),
      cizgi(348, 125, 405, 125, { sinif: 'k', k: 1.5 }),
      yazi(80, 68, 'X', { boy: 12 }),
      yazi(80, 93, 'Y', { boy: 12 }),
      yazi(80, 118, 'Z', { boy: 12 }),
    ),
    dogruCevap: r`a) $50\ \text{MBq}$ · b) Kütle ve atom numarası değişmez, yalnızca çekirdeğin enerjisi azalır · c) X: $\alpha$, Y: $\beta$, Z: $\gamma$; gama vücuttan çıkıp dedektöre ulaşır ve daha az iyonlaştırır; zamanı kısaltma, uzaklığı artırma, kurşun zırh`,
    adimAdimCozum: [
      r`a) Geçen yarı ömür sayısı $n = \dfrac{24}{6} = 4$; aktivite $A = \dfrac{800}{2^4} = 50\ \text{MBq}$`,
      r`b) Gama ışını yüksüz ve kütlesiz bir fotondur. Uyarılmış çekirdek ($^{99m}_{43}\text{Tc}$) fazla enerjisini foton olarak verir ve $^{99}_{43}\text{Tc}$ olur; $A = 99$ ve $Z = 43$ değişmez.`,
      r`c) Kâğıtta duran X alfa, alüminyumda duran Y beta, kurşunu zayıflayarak geçen Z gama ışınıdır.`,
      r`Alfa parçacıkları vücut dokusunda hemen soğurulur, dışarıdaki dedektöre ulaşamaz ve dokuyu yoğun biçimde iyonlaştırarak zarar verir; gama ışınları vücuttan çıkıp görüntü oluşturur. Personel kaynağın yanında kalma süresini kısaltmalı, kaynakla arasındaki uzaklığı artırmalı ve kurşun zırh/önlük kullanmalıdır.`,
    ],
    rubrik: [
      { olcut: 'Yarı ömür sayısını bulup aktiviteyi doğru hesaplama', puan: 3 },
      { olcut: 'Gama yayımlamasında A ve Z değişmediğini gerekçesiyle açıklama', puan: 2 },
      { olcut: 'X, Y, Z ışınlarını engellere göre doğru belirleme', puan: 2 },
      { olcut: 'Gama seçiminin nedenini ve iki korunma önlemini yazma', puan: 3 },
    ],
  },
  {
    id: '12-T4-21',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.4.3',
    surecBileseni: 'Füzyon tepkimesinde oluşan parçacığı ve açığa çıkan enerjiyi hesaplayarak fisyon ile füzyonu karşılaştırır.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Güneş ile Nükleer Santral:** Güneş'in çekirdeğinde ve deneysel füzyon reaktörlerinde hafif çekirdekler birleşerek enerji açığa çıkarır. Bu reaktörlerde hedeflenen tepkimelerden biri şöyledir:

$$^{2}_{1}\text{H} + {}^{3}_{1}\text{H} \rightarrow {}^{4}_{2}\text{He} + \text{X}$$

Bu tepkimede ürünlerin toplam kütlesi, girenlerin toplam kütlesinden $\Delta m = 0{,}0189\ \text{u}$ daha azdır ($1\ \text{u}$ kütlenin enerji eşdeğeri $931\ \text{MeV}$'tur). Günümüzdeki nükleer santraller ise uranyum-235 çekirdeklerinin bölünmesiyle elektrik üretmektedir.

a) X parçacığının kütle ve atom numarasını bularak ne olduğunu belirleyiniz.
b) Bir tepkimede açığa çıkan enerjiyi MeV cinsinden hesaplayınız.
c) Fisyon ve füzyonu çekirdeklerin büyüklüğü açısından karşılaştırınız. Füzyonun neden milyonlarca kelvin sıcaklık gerektirdiğini açıklayınız.`,
    dogruCevap: r`a) $^{1}_{0}\text{n}$ (nötron) · b) $\approx 17{,}6\ \text{MeV}$ · c) Fisyonda ağır çekirdek bölünür, füzyonda hafif çekirdekler birleşir; pozitif çekirdekler arasındaki elektriksel itmeyi yenmek için çok büyük kinetik enerji (sıcaklık) gerekir`,
    adimAdimCozum: [
      r`a) Kütle numarası: $2 + 3 = 4 + A \Rightarrow A = 1$; atom numarası: $1 + 1 = 2 + Z \Rightarrow Z = 0$. X, bir nötrondur: $^{1}_{0}\text{n}$`,
      r`b) $E = \Delta m \cdot 931 = 0{,}0189 \cdot 931 \approx 17{,}6\ \text{MeV}$`,
      r`c) Fisyonda uranyum gibi ağır bir çekirdek daha küçük iki çekirdeğe bölünür; füzyonda hidrojen izotopları gibi hafif çekirdekler birleşerek daha ağır bir çekirdek oluşturur. İkisinde de kütle kaybı enerjiye dönüşür.`,
      r`Birleşecek çekirdeklerin ikisi de pozitif yüklüdür ve birbirini elektriksel olarak iter. Çekirdek kuvvetlerinin etkili olduğu çok kısa uzaklığa yaklaşabilmeleri için çok büyük kinetik enerjiye, yani milyonlarca kelvinlik sıcaklığa gerek vardır.`,
    ],
    rubrik: [
      { olcut: 'Korunum yasalarıyla X parçacığını nötron olarak belirleme', puan: 3 },
      { olcut: 'Kütle kaybından açığa çıkan enerjiyi doğru hesaplama', puan: 3 },
      { olcut: 'Fisyon–füzyon karşılaştırması ve yüksek sıcaklık gerekçesi', puan: 4 },
    ],
  },
]
