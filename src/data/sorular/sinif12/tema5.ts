import type { Soru } from '../../tipler.ts'
import { cizgi, dalga, eksen, ok, olcu, svg, yazi } from '../../cizim.ts'

const r = String.raw
const TEMA = 'Modern Fizik'

export const sorular: Soru[] = [
  {
    id: '12-15',
    sinif: 12,
    tema: TEMA,
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
    tema: TEMA,
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
    tema: TEMA,
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
    tema: TEMA,
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
  {
    id: '12-T5-01',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.1',
    surecBileseni: 'Hareket doğrultusundaki boy kısalmasını göreli faktörle hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir uzay aracının boyu, araçtaki astronotlar tarafından $100\ \text{m}$ olarak ölçülüyor. Araç Dünya'ya göre $0{,}8c$ süratle şekildeki yönde ilerlerken Dünya'daki bir gözlemci, aracın hareket doğrultusundaki boyunu kaç metre ölçer?

($c$: ışığın boşluktaki sürati)`,
    svgDiyagram: svg(
      380, 180, 'Dünya’ya göre 0,8c süratle ilerleyen ve öz boyu 100 m olan uzay aracı',
      '<path d="M60 75 h200 l50 25 l-50 25 h-200 z" class="f-kv" stroke-width="2"/>',
      '<path d="M60 82 l-25 -12 v60 l25 -12" class="f-k" stroke-width="2"/>',
      '<circle cx="120" cy="100" r="8" class="f-i" stroke-width="1.5"/>',
      '<circle cx="165" cy="100" r="8" class="f-i" stroke-width="1.5"/>',
      '<circle cx="210" cy="100" r="8" class="f-i" stroke-width="1.5"/>',
      ok(130, 48, 250, 48, 'v', 3),
      yazi(190, 34, 'v = 0,8c', { boy: 14, hiza: 'middle' }),
      olcu(60, 160, 310, 160, 'L₀ = 100 m (araçta ölçülen)'),
    ),
    secenekler: { A: r`$\dfrac{500}{3}$`, B: r`$100$`, C: r`$80$`, D: r`$75$`, E: r`$60$` },
    dogruCevap: 'E',
    hesap: '100*sqrt(1-0.64)',
    adimAdimCozum: [
      r`Boy kısalması: $L = L_0\sqrt{1 - \dfrac{v^2}{c^2}}$; kısalma yalnızca hareket doğrultusunda olur.`,
      r`$\sqrt{1 - 0{,}8^2} = \sqrt{0{,}36} = 0{,}6$`,
      r`$L = 100 \cdot 0{,}6 = 60\ \text{m}$ $\Rightarrow$ Cevap **E**`,
      r`$\dfrac{500}{3}$ m, öz boyu $\gamma$ ile çarpma hatasıdır; boy hareketli gözlemciye göre uzamaz, kısalır.`,
    ],
  },
  {
    id: '12-T5-02',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.2',
    surecBileseni: 'Fotonun enerjisini dalga boyundan hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir sunum kalemindeki kırmızı lazer, boşluktaki dalga boyu $620\ \text{nm}$ olan ışık yayıyor. Bu ışığın bir fotonunun enerjisi kaç elektronvolttur?

($h \cdot c = 1240\ \text{eV} \cdot \text{nm}$)`,
    secenekler: { A: r`$0{,}5$`, B: r`$1$`, C: r`$2$`, D: r`$3{,}1$`, E: r`$4$` },
    dogruCevap: 'C',
    hesap: '1240/620',
    adimAdimCozum: [
      r`Foton enerjisi frekansla doğru, dalga boyuyla ters orantılıdır: $E = hf = \dfrac{hc}{\lambda}$`,
      r`$E = \dfrac{1240\ \text{eV} \cdot \text{nm}}{620\ \text{nm}}$`,
      r`$E = 2\ \text{eV}$ $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-T5-03',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.3',
    surecBileseni: 'Eₖ–f grafiğinden eşik frekansını okuyarak fotoelektronların maksimum kinetik enerjisini hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir metal yüzeyden sökülen fotoelektronların maksimum kinetik enerjisinin, yüzeye düşürülen ışığın frekansına bağlı grafiği şekildeki gibidir.

Bu yüzeye frekansı $1{,}2 \cdot 10^{15}\ \text{Hz}$ olan ışık düşürüldüğünde sökülen elektronların maksimum kinetik enerjisi kaç eV olur? ($h = 4 \cdot 10^{-15}\ \text{eV} \cdot \text{s}$)`,
    svgDiyagram: svg(
      370, 230, 'Maksimum kinetik enerji–frekans grafiği; doğru, frekans eksenini 5·10¹⁴ Hz değerinde kesiyor',
      eksen(60, 195, 290, 175, 'f (Hz)', 'Eₖ (eV)'),
      '<path d="M130 195 L320 65" class="c-v" stroke-width="3"/>',
      yazi(130, 214, '5·10¹⁴', { boy: 12, hiza: 'middle' }),
      yazi(52, 200, '0', { boy: 12, hiza: 'end' }),
    ),
    secenekler: { A: r`$2$`, B: r`$2{,}8$`, C: r`$3{,}2$`, D: r`$4{,}8$`, E: r`$6{,}8$` },
    dogruCevap: 'B',
    hesap: '4e-15*(12e14-5e14)',
    adimAdimCozum: [
      r`Grafiğin frekans eksenini kestiği nokta eşik frekansıdır: $f_0 = 5 \cdot 10^{14}\ \text{Hz}$`,
      r`Bağlanma enerjisi: $E_0 = hf_0 = 4 \cdot 10^{-15} \cdot 5 \cdot 10^{14} = 2\ \text{eV}$; gelen foton: $hf = 4 \cdot 10^{-15} \cdot 1{,}2 \cdot 10^{15} = 4{,}8\ \text{eV}$`,
      r`$E_{k,maks} = hf - hf_0 = 4{,}8 - 2 = 2{,}8\ \text{eV}$ $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-T5-04',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.3',
    surecBileseni: 'Fotosel akım–gerilim grafiklerini karşılaştırarak ışıkların frekans ve şiddetini yorumlar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Aynı fotosele ayrı ayrı düşürülen K ve L ışıkları için fotoelektrik akımın, anot–katot arasındaki gerilime bağlı grafikleri şekildeki gibidir.

I. K ve L ışıklarının frekansları eşittir.
II. Birim zamanda sökülen fotoelektron sayısı K ışığında daha fazladır.
III. İki ışıkla sökülen fotoelektronların maksimum kinetik enerjileri eşittir.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      360, 220, 'Fotosel akım–gerilim grafiği: K ve L eğrileri aynı ters gerilimde sıfırlanıyor, K eğrisinin doyma akımı daha büyük',
      cizgi(30, 190, 130, 190, { k: 2 }),
      eksen(130, 190, 215, 165, 'V', 'I'),
      '<path d="M60 190 C 90 125, 120 75, 175 68 L 320 66" class="c-v" stroke-width="3"/>',
      '<path d="M60 190 C 90 150, 120 122, 175 118 L 320 116" class="c-i" stroke-width="3"/>',
      yazi(325, 60, 'K', { boy: 14 }),
      yazi(325, 110, 'L', { boy: 14 }),
      yazi(60, 208, '−V₀', { boy: 12, hiza: 'middle' }),
      yazi(124, 208, '0', { boy: 12, hiza: 'end' }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve III', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'E',
    adimAdimCozum: [
      r`İki eğri aynı ters gerilimde ($-V_0$) sıfırlanıyor; durdurma gerilimi eşit olduğundan $E_{k,maks} = eV_0$ eşittir. III. **Doğru**`,
      'Aynı yüzeyde maksimum kinetik enerjiler eşitse fotonların enerjileri, dolayısıyla frekansları eşittir. I. **Doğru**',
      r`K'nin doyma akımı daha büyük: birim zamanda daha çok foton, daha çok elektron. II. **Doğru** $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '12-T5-05',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.4',
    surecBileseni: 'Hareketli bir parçacığın de Broglie dalga boyunu hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Nötron kırınımı deneylerinde kristal yapıyı incelemek için yavaşlatılmış nötronlar kullanılır. Kütlesi $1{,}65 \cdot 10^{-27}\ \text{kg}$ olan bir nötron $4 \cdot 10^{3}\ \text{m/s}$ süratle hareket etmektedir.

Bu nötronun de Broglie dalga boyu kaç $10^{-10}\ \text{m}$'dir? ($h = 6{,}6 \cdot 10^{-34}\ \text{J} \cdot \text{s}$)`,
    secenekler: { A: r`$6{,}6$`, B: r`$4$`, C: r`$2$`, D: r`$1{,}5$`, E: r`$1$` },
    dogruCevap: 'E',
    hesap: '6.6e-34/(1.65e-27*4e3)/1e-10',
    adimAdimCozum: [
      r`Madde dalgası: $\lambda = \dfrac{h}{p} = \dfrac{h}{mv}$`,
      r`Momentum: $p = 1{,}65 \cdot 10^{-27} \cdot 4 \cdot 10^{3} = 6{,}6 \cdot 10^{-24}\ \text{kg} \cdot \text{m/s}$`,
      r`$\lambda = \dfrac{6{,}6 \cdot 10^{-34}}{6{,}6 \cdot 10^{-24}} = 10^{-10}\ \text{m} = 1 \cdot 10^{-10}\ \text{m}$ $\Rightarrow$ Cevap **E**`,
      'Bu değer kristaldeki atomlar arası uzaklık mertebesindedir; bu yüzden nötronlar kristalde kırınıma uğrar.',
    ],
  },
  {
    id: '12-T5-06',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.1',
    surecBileseni: 'Eşzamanlılığın gözlemciye göre değiştiğini ışık sinyalleriyle açıklar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir tren, perona göre sabit $v$ süratiyle sağa doğru hareket ediyor. Trenin A ve B uçlarına düşen iki şimşek, perondaki O gözlemcisine göre aynı anda çakıyor. Şimşekler çaktığı anda trenin tam ortasındaki O′ yolcusu, O'nun hizasından geçmektedir.

Buna göre O′ yolcusu için aşağıdakilerden hangisi doğrudur?`,
    svgDiyagram: svg(
      400, 200, 'Sağa giden trenin A ve B uçlarına düşen şimşekler, trendeki O′ ve perondaki O gözlemcileri',
      '<rect x="80" y="80" width="240" height="50" rx="6" class="f-kv" stroke-width="2"/>',
      '<circle cx="110" cy="138" r="8" stroke-width="2" class="f-k"/>',
      '<circle cx="290" cy="138" r="8" stroke-width="2" class="f-k"/>',
      cizgi(30, 147, 370, 147, { k: 2 }),
      '<path d="M84 18 l-12 26 h13 l-9 32" class="c-v" stroke-width="3"/>',
      '<path d="M324 18 l-12 26 h13 l-9 32" class="c-v" stroke-width="3"/>',
      yazi(60, 34, 'A', { boy: 14, hiza: 'end' }),
      yazi(340, 34, 'B', { boy: 14 }),
      ok(150, 62, 250, 62, 'i', 3),
      yazi(200, 50, 'v', { boy: 14, hiza: 'middle' }),
      '<circle cx="200" cy="100" r="5" class="f-t" stroke="none"/>',
      yazi(200, 122, 'O′', { boy: 13, hiza: 'middle' }),
      '<circle cx="200" cy="168" r="5" class="f-t" stroke="none"/>',
      yazi(212, 173, 'O (perondaki gözlemci)', { boy: 12 }),
    ),
    secenekler: {
      A: 'O′ yolcusuna göre B ucuna düşen şimşek daha önce çakmıştır.',
      B: 'O′ yolcusuna göre iki şimşek de tam olarak aynı anda çakmıştır.',
      C: 'O′ yolcusuna göre A ucuna düşen şimşek daha önce çakmıştır.',
      D: 'O′ yolcusu B ucundan gelen ışığın süratini c değerinden büyük ölçer.',
      E: 'Eşzamanlılık mutlaktır; iki gözlemci de aynı sırayı belirler.',
    },
    dogruCevap: 'A',
    adimAdimCozum: [
      'Perona göre O′ yolcusu B ucuna doğru ilerlediği için B’den gelen ışığı A’dan gelenden önce alır.',
      'Işığın sürati her eylemsiz gözlemci için c’dir (D yanlış). O′ trenin ortasında olduğundan ve iki ışık da ona c süratiyle ulaştığından, önce gelen ışığın kaynağı olan olayın daha önce gerçekleştiği sonucuna varır.',
      r`Bir gözlemciye göre eşzamanlı olan olaylar, ona göre hareket eden gözlemciye göre eşzamanlı değildir (B, E yanlış) $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '12-T5-07',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.2',
    surecBileseni: 'Kara cisim ışıma eğrilerini kullanarak cisimlerin sıcaklıklarını karşılaştırır.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Farklı sıcaklıklardaki K ve L kara cisimlerinin yaydığı ışımanın şiddetinin dalga boyuna bağlı grafikleri şekildeki gibidir.

I. L cisminin sıcaklığı K'ninkinden büyüktür.
II. Sıcaklık arttıkça en şiddetli ışımanın dalga boyu küçüldüğünden K daha sıcaktır.
III. L cisminin birim zamanda yaydığı toplam ışıma enerjisi K'ninkinden fazladır.

yargılarından hangileri doğrudur? (Cisimlerin yüzey alanları eşittir.)`,
    svgDiyagram: svg(
      370, 225, 'Kara cisim ışıması: K eğrisinin tepesi daha yüksek ve kısa dalga boyunda, L eğrisinin tepesi daha alçak ve uzun dalga boyunda',
      eksen(60, 200, 290, 180, 'λ', 'Şiddet'),
      '<path d="M68 199 C 95 196, 105 45, 135 45 C 185 45, 250 150, 340 178" class="c-v" fill="none" stroke-width="3"/>',
      '<path d="M70 199 C 120 197, 150 115, 190 115 C 230 115, 275 172, 340 190" class="c-i" fill="none" stroke-width="3"/>',
      yazi(140, 36, 'K', { boy: 14, hiza: 'middle' }),
      yazi(192, 106, 'L', { boy: 14, hiza: 'middle' }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve III', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'B',
    adimAdimCozum: [
      'Wien yasasına göre sıcaklık arttıkça ışıma eğrisinin tepe noktası kısa dalga boylarına kayar. K’nin tepesi daha kısa dalga boyunda olduğundan K daha sıcaktır. I. **Yanlış**, II. **Doğru**',
      'Eğrinin altında kalan alan toplam ışıma şiddetiyle orantılıdır. K’nin eğrisi her yerde daha yüksek olduğundan K daha çok enerji yayar. III. **Yanlış**',
      r`Yalnız II doğrudur $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-T5-08',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.3',
    surecBileseni: 'Fotosel devresinde fotoelektronları durduran gerilimi enerji korunumuyla hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bağlanma enerjisi $2{,}5\ \text{eV}$ olan bir fotoselin katoduna, dalga boyu $310\ \text{nm}$ olan ışık düşürülüyor. Şekildeki devrede üretecin gerilimi sıfırdan başlayarak yavaşça artırılıyor ve mikroampermetrenin gösterdiği akım ilk kez sıfır olduğunda gerilim değeri okunuyor.

Okunan gerilim kaç volttur? ($h \cdot c = 1240\ \text{eV} \cdot \text{nm}$)`,
    svgDiyagram: svg(
      360, 235, 'Fotosel devresi: ışık katoda düşüyor; üretecin artı ucu katoda, eksi ucu anoda bağlı',
      '<rect x="110" y="40" width="160" height="90" rx="40" class="f-k" stroke-width="2"/>',
      '<path d="M138 55 q-14 30 0 60" class="c-v" fill="none" stroke-width="4"/>',
      cizgi(250, 60, 250, 110, { k: 4 }),
      yazi(150, 90, 'K', { boy: 13 }),
      yazi(238, 90, 'A', { boy: 13, hiza: 'end' }),
      ok(55, 30, 124, 70, 'i', 2),
      ok(45, 62, 122, 92, 'i', 2),
      yazi(20, 125, 'λ = 310 nm', { boy: 13 }),
      '<path d="M136 115 V195 H176 M186 195 H213 M237 195 H250 V110" fill="none" stroke-width="2"/>',
      cizgi(176, 180, 176, 210, { k: 3 }),
      cizgi(186, 187, 186, 203, { k: 6 }),
      yazi(170, 182, '+', { boy: 13, hiza: 'end' }),
      yazi(181, 226, 'V', { boy: 13, hiza: 'middle' }),
      '<circle cx="225" cy="195" r="12" class="f-k" stroke-width="2"/>',
      yazi(225, 199, 'μA', { boy: 10, hiza: 'middle' }),
    ),
    secenekler: { A: r`$1$`, B: r`$1{,}5$`, C: r`$2{,}5$`, D: r`$4$`, E: r`$6{,}5$` },
    dogruCevap: 'B',
    hesap: '1240/310-2.5',
    adimAdimCozum: [
      r`Foton enerjisi: $E = \dfrac{hc}{\lambda} = \dfrac{1240}{310} = 4\ \text{eV}$`,
      r`$E_{k,maks} = E - E_0 = 4 - 2{,}5 = 1{,}5\ \text{eV}$`,
      r`Üreteç anodu katoda göre eksi yaptığından elektronlar yavaşlar. Akım, $eV_d = E_{k,maks}$ olduğunda kesilir: $V_d = 1{,}5\ \text{V}$ $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '12-T5-09',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.4',
    surecBileseni: 'Compton saçılmasında saçılan fotonun dalga boyunu saçılma açısına göre hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Dalga boyu $5\ \text{pm}$ olan bir X ışını fotonu, durgun ve serbest bir elektrona çarpıyor. Foton, şekildeki gibi geliş doğrultusuyla $60^\circ$ açı yapacak biçimde saçılıyor.

Saçılan fotonun dalga boyu kaç pm'dir?

($\Delta\lambda = \dfrac{h}{m_e c}(1 - \cos\theta)$, $\dfrac{h}{m_e c} = 2{,}4\ \text{pm}$, $\cos 60^\circ = 0{,}5$)`,
    svgDiyagram: svg(
      380, 220, 'Compton saçılması: gelen X ışını fotonu durgun elektrona çarpıyor, 60 derece açıyla saçılıyor, elektron geri tepiyor',
      `<path d="${dalga(30, 130, 132, 4, 5)}" class="c-i" fill="none" stroke-width="2"/>`,
      ok(162, 130, 183, 130, 'i', 2),
      yazi(95, 110, 'λ = 5 pm', { boy: 13, hiza: 'middle' }),
      '<circle cx="190" cy="130" r="6" class="f-i" stroke-width="1.5"/>',
      yazi(178, 156, 'e⁻', { boy: 13, hiza: 'end' }),
      '<line x1="197" y1="130" x2="340" y2="130" class="k" stroke-width="1.5"/>',
      ok(193, 125, 255, 18, 'v', 2.5),
      yazi(266, 30, 'λ′', { boy: 14 }),
      '<path d="M235 130 A45 45 0 0 0 212.5 91" fill="none" stroke-width="1.5"/>',
      yazi(246, 112, '60°', { boy: 13 }),
      ok(196, 135, 280, 182, 't', 2),
      yazi(282, 202, 'geri tepen e⁻', { boy: 12 }),
    ),
    secenekler: { A: r`$2{,}4$`, B: r`$3{,}8$`, C: r`$5$`, D: r`$6{,}2$`, E: r`$7{,}4$` },
    dogruCevap: 'D',
    hesap: '5+2.4*(1-cos(60))',
    adimAdimCozum: [
      'Çarpışmada foton elektrona enerji aktarır; enerjisi azalan fotonun dalga boyu artar.',
      r`$\Delta\lambda = 2{,}4\,(1 - 0{,}5) = 1{,}2\ \text{pm}$`,
      r`$\lambda' = \lambda + \Delta\lambda = 5 + 1{,}2 = 6{,}2\ \text{pm}$ $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '12-T5-10',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.1',
    surecBileseni: 'Kütle–enerji eşdeğerliğini kullanarak günlük hayattaki enerji ihtiyacıyla karşılaştırma yapar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Günlük elektrik enerjisi tüketimi $6 \cdot 10^{12}\ \text{J}$ olan küçük bir kent düşünülüyor. Kuramsal olarak $2\ \text{g}$ maddenin tamamı enerjiye dönüştürülebilseydi, açığa çıkan enerji bu kentin ihtiyacını kaç gün karşılardı?

($c = 3 \cdot 10^{8}\ \text{m/s}$; dönüşümde kayıp yoktur.)`,
    secenekler: { A: r`$3$`, B: r`$10$`, C: r`$15$`, D: r`$30$`, E: r`$3 \cdot 10^{4}$` },
    dogruCevap: 'D',
    hesap: '2e-3*9e16/6e12',
    adimAdimCozum: [
      r`Kütle kilogram cinsinden yazılır: $m = 2\ \text{g} = 2 \cdot 10^{-3}\ \text{kg}$ (gram kullanmak $3 \cdot 10^{4}$ çeldiricisine götürür).`,
      r`$E = mc^2 = 2 \cdot 10^{-3} \cdot (3 \cdot 10^{8})^2 = 1{,}8 \cdot 10^{14}\ \text{J}$`,
      r`Gün sayısı $= \dfrac{1{,}8 \cdot 10^{14}}{6 \cdot 10^{12}} = 30$ $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '12-T5-11',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.2',
    surecBileseni: 'Planck’ın kara cisim ışımasını açıklamak için öne sürdüğü kuantum varsayımını tanımlar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Max Planck, 1900 yılında kara cisim ışımasının deneysel eğrisini açıklayabilmek için klasik fizikten ayrılan bir varsayım ortaya koymuştur.

Planck'ın bu varsayımı aşağıdakilerden hangisidir?`,
    secenekler: {
      A: 'Işınım enerjisinin kesintisiz olarak her değeri alabilmesi',
      B: 'Işığın yalnızca boşlukta yayılan bir dalga hareketi olması',
      C: 'Titreşen yüklerin enerjiyi hf katları hâlinde salması',
      D: 'Cismin yaydığı ışığın renginin sıcaklığından bağımsız olması',
      E: 'Kara cismin üzerine düşen ışığın tamamını geri yansıtması',
    },
    dogruCevap: 'C',
    adimAdimCozum: [
      'Klasik fizik, enerjinin sürekli değerler aldığını varsayarak kısa dalga boylarında sonsuza giden yanlış bir şiddet öngörüyordu (A, klasik görüştür).',
      r`Planck, enerjinin $E = nhf$ ($n = 1, 2, 3, ...$) biçiminde kuantumlu olduğunu varsaydı; en küçük enerji paketi $hf$'dir.`,
      r`Kara cisim üzerine düşen ışığı soğurur (E yanlış), rengi sıcaklığa bağlıdır (D yanlış) $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-T5-12',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.3',
    surecBileseni: 'İki metalin Eₖ–f grafiklerini kullanarak verilen enerji oranını sağlayan frekansı bulur.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`K ve L metalleri için fotoelektronların maksimum kinetik enerjisinin ışık frekansına bağlı grafikleri şekildeki gibidir.

İki metale aynı $f$ frekanslı ışık düşürüldüğünde K'den sökülen elektronların maksimum kinetik enerjisi, L'den sökülenlerinkinin $2$ katı oluyor. Buna göre $f$ kaç $10^{14}\ \text{Hz}$'dir?`,
    svgDiyagram: svg(
      370, 230, 'K ve L metalleri için paralel Eₖ–f doğruları; K eşik frekansı 4, L eşik frekansı 6 (10¹⁴ Hz)',
      eksen(60, 200, 290, 180, 'f (10¹⁴ Hz)', 'Eₖ'),
      '<path d="M160 200 L320 72" class="c-v" stroke-width="3"/>',
      '<path d="M210 200 L330 104" class="c-i" stroke-width="3"/>',
      yazi(326, 74, 'K', { boy: 14 }),
      yazi(336, 106, 'L', { boy: 14 }),
      yazi(160, 218, '4', { boy: 12, hiza: 'middle' }),
      yazi(210, 218, '6', { boy: 12, hiza: 'middle' }),
      yazi(52, 205, '0', { boy: 12, hiza: 'end' }),
    ),
    secenekler: { A: r`$8$`, B: r`$10$`, C: r`$12$`, D: r`$14$`, E: r`$16$` },
    dogruCevap: 'A',
    hesap: '2*6-4',
    adimAdimCozum: [
      r`Doğrular paraleldir; eğimleri $h$'dir. Eşik frekansları: $f_K = 4$, $f_L = 6$ ($10^{14}$ Hz).`,
      r`$E_K = h(f - 4)$, $E_L = h(f - 6)$ ve $E_K = 2E_L$`,
      r`$f - 4 = 2f - 12 \Rightarrow f = 8$`,
      r`Kontrol: $E_K = 4h$, $E_L = 2h$ ✓ $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '12-T5-13',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.4',
    surecBileseni: 'Elektron kırınımı deneyinin madde dalgaları hipotezini nasıl desteklediğini açıklar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekildeki düzenekte elektron tabancasından çıkan elektron demeti ince bir kristale gönderiliyor. Kristalin arkasındaki ekranda, X ışınlarıyla elde edilene benzer aydınlık ve karanlık halkalardan oluşan bir kırınım deseni gözleniyor.

Bu gözlem aşağıdakilerden hangisinin kanıtıdır?`,
    svgDiyagram: svg(
      380, 175, 'Elektron kırınımı düzeneği: elektron tabancası, kristal ve halkalı desen oluşan ekran',
      '<rect x="20" y="70" width="60" height="30" rx="4" class="f-kv" stroke-width="2"/>',
      yazi(20, 58, 'Elektron tabancası', { boy: 12 }),
      ok(80, 85, 172, 85, 'i', 2.5),
      '<rect x="178" y="55" width="34" height="60" class="f-k" stroke-width="2"/>',
      '<path d="M186 65 h2 M202 65 h2 M186 80 h2 M202 80 h2 M186 95 h2 M202 95 h2 M186 108 h2 M202 108 h2" stroke-width="3"/>',
      yazi(195, 135, 'Kristal', { boy: 12, hiza: 'middle' }),
      '<path d="M212 85 L320 45 M212 85 L320 125 M212 85 L320 65 M212 85 L320 105" class="k" fill="none" stroke-width="1.2"/>',
      cizgi(325, 20, 325, 150, { k: 3 }),
      '<ellipse cx="325" cy="85" rx="5" ry="20" class="c-v" fill="none" stroke-width="2"/>',
      '<ellipse cx="325" cy="85" rx="9" ry="40" class="c-v" fill="none" stroke-width="2"/>',
      yazi(325, 168, 'Ekran', { boy: 12, hiza: 'middle' }),
    ),
    secenekler: {
      A: 'Elektronların elektrik yükünün kuantumlu olduğunun',
      B: 'Işığın enerjisini foton adı verilen paketlerle taşıdığının',
      C: 'Hareketli parçacıkların dalga özelliği gösterdiğinin',
      D: 'Elektronların kristal içinde ışık süratine ulaştığının',
      E: 'Kristal atomlarının çarpışma sonrası elektron saldığının',
    },
    dogruCevap: 'C',
    adimAdimCozum: [
      'Kırınım ve girişim, dalgalara özgü olaylardır; halkalı desen ancak dalgaların üst üste binmesiyle oluşur.',
      r`De Broglie'ye göre momentumu $p$ olan her parçacığa $\lambda = \dfrac{h}{p}$ dalga boyu eşlik eder. Elektronların dalga boyu kristal düzlemleri arası uzaklık mertebesinde olduğundan kırınım gözlenir.`,
      r`Davisson–Germer ve G. P. Thomson deneyleri madde dalgalarını doğrulamıştır $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-T5-14',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.1',
    surecBileseni: 'Işık süratinin sabitliği postulatını hareketli kaynak örneğine uygular.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Dünya'dan $0{,}5c$ süratle uzaklaşan bir uzay aracı, hareket yönünde ileriye doğru bir lazer atımı gönderiyor.

Dünya'daki gözlemcinin ölçtüğü lazer atımı sürati kaç $c$'dir?`,
    svgDiyagram: svg(
      400, 150, 'Dünya’dan 0,5c süratle uzaklaşan uzay aracı önüne doğru lazer atımı gönderiyor',
      '<circle cx="40" cy="80" r="25" class="f-i" stroke-width="2"/>',
      yazi(40, 128, 'Dünya', { boy: 12, hiza: 'middle' }),
      '<path d="M120 65 h60 l25 15 l-25 15 h-60 z" class="f-kv" stroke-width="2"/>',
      ok(125, 45, 200, 45, 'i', 3),
      yazi(162, 33, 'v = 0,5c', { boy: 13, hiza: 'middle' }),
      `<path d="${dalga(212, 80, 120, 5, 4)}" class="c-v" fill="none" stroke-width="2"/>`,
      ok(332, 80, 375, 80, 'v', 2),
      yazi(292, 112, 'lazer atımı', { boy: 12, hiza: 'middle' }),
    ),
    secenekler: { A: r`$1$`, B: r`$1{,}25$`, C: r`$1{,}5$`, D: r`$1{,}75$`, E: r`$2$` },
    dogruCevap: 'A',
    hesap: '1',
    adimAdimCozum: [
      'Özel göreliliğin ikinci postulatı: Işığın boşluktaki sürati, kaynağın ve gözlemcinin hareketinden bağımsız olarak bütün eylemsiz gözlemciler için aynıdır.',
      r`Klasik hız toplaması $0{,}5c + c = 1{,}5c$ sonucunu verirdi; bu ışık için geçerli değildir.`,
      r`Dünya'daki gözlemci de atımın süratini $1\,c$ ölçer $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '12-T5-15',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.3',
    surecBileseni: 'Akım–gerilim grafiğinden durdurma gerilimini okuyarak katot metalinin bağlanma enerjisini bulur.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir fotoselin katoduna foton enerjisi $5\ \text{eV}$ olan tek renkli ışık düşürülüyor. Fotoelektrik akımın anot–katot gerilimine bağlı grafiği şekildeki gibi elde ediliyor.

Buna göre katot metalinin bağlanma enerjisi kaç eV'tur?`,
    svgDiyagram: svg(
      360, 220, 'Fotosel akım–gerilim grafiği: akım −2 V değerinde sıfır oluyor, pozitif gerilimlerde doyma akımına ulaşıyor',
      cizgi(30, 190, 140, 190, { k: 2 }),
      eksen(140, 190, 205, 160, 'V (volt)', 'I'),
      '<path d="M60 190 C 95 120, 130 85, 190 80 L 320 78" class="c-v" fill="none" stroke-width="3"/>',
      yazi(60, 208, '−2', { boy: 12, hiza: 'middle' }),
      yazi(134, 208, '0', { boy: 12, hiza: 'end' }),
      yazi(250, 66, 'doyma akımı', { boy: 12, hiza: 'middle' }),
    ),
    secenekler: { A: r`$3$`, B: r`$4$`, C: r`$5$`, D: r`$7$`, E: r`$9$` },
    dogruCevap: 'A',
    hesap: '5-2',
    adimAdimCozum: [
      r`Akımı sıfırlayan ters gerilim durdurma gerilimidir: $V_d = 2\ \text{V}$, dolayısıyla $E_{k,maks} = eV_d = 2\ \text{eV}$`,
      r`Fotoelektrik denklemi: $E_{foton} = E_0 + E_{k,maks}$`,
      r`$E_0 = 5 - 2 = 3\ \text{eV}$ $\Rightarrow$ Cevap **A**`,
      r`$7$ eV, durdurma enerjisini çıkarmak yerine eklemekten kaynaklanan yaygın bir hatadır.`,
    ],
  },
  {
    id: '12-T5-16',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.4',
    surecBileseni: 'Aynı potansiyel farkıyla hızlandırılan parçacıkların de Broglie dalga boylarını karşılaştırır.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Durgun hâlden serbest bırakılan bir proton (p) ve bir alfa parçacığı (α), şekildeki gibi aynı $V$ potansiyel farkı altında ayrı ayrı hızlandırılıyor.

Plakalar arasından çıktıklarında protonun de Broglie dalga boyunun alfa parçacığınınkine oranı $\dfrac{\lambda_p}{\lambda_\alpha}$ kaçtır?

($m_\alpha = 4m_p$, $q_\alpha = 2q_p$; göreli etkiler önemsiz)`,
    svgDiyagram: svg(
      340, 205, 'Aynı V potansiyel farkı uygulanan iki plaka arasında hızlandırılan proton ve alfa parçacığı',
      cizgi(70, 30, 70, 170, { k: 4 }),
      cizgi(270, 30, 270, 170, { k: 4 }),
      yazi(70, 22, '+', { boy: 15, hiza: 'middle' }),
      yazi(270, 22, '−', { boy: 15, hiza: 'middle' }),
      '<circle cx="92" cy="70" r="6" class="f-v" stroke-width="1.5"/>',
      '<circle cx="92" cy="130" r="9" class="f-i" stroke-width="1.5"/>',
      yazi(92, 55, 'p', { boy: 13, hiza: 'middle' }),
      yazi(92, 112, 'α', { boy: 13, hiza: 'middle' }),
      ok(102, 70, 180, 70, 'v', 2),
      ok(105, 130, 180, 130, 'i', 2),
      olcu(70, 192, 270, 192, 'V'),
    ),
    secenekler: { A: r`$1$`, B: r`$\sqrt{2}$`, C: r`$2$`, D: r`$2\sqrt{2}$`, E: r`$4$` },
    dogruCevap: 'D',
    hesap: 'sqrt(8)',
    adimAdimCozum: [
      r`Kazanılan kinetik enerji $E_k = qV$; momentum $p = \sqrt{2mE_k} = \sqrt{2mqV}$`,
      r`$\lambda = \dfrac{h}{\sqrt{2mqV}} \Rightarrow \dfrac{\lambda_p}{\lambda_\alpha} = \sqrt{\dfrac{m_\alpha q_\alpha}{m_p q_p}} = \sqrt{4 \cdot 2} = \sqrt{8}$`,
      r`$\dfrac{\lambda_p}{\lambda_\alpha} = 2\sqrt{2}$ $\Rightarrow$ Cevap **D**`,
      r`Yükteki farkı unutan öğrenci $2$, karekökü unutan öğrenci $8$ benzeri yanlış sonuçlara ulaşır.`,
    ],
  },
  {
    id: '12-T5-17',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.1',
    surecBileseni: 'Ölçülen öz zaman ve genişlemiş zamandan aracın süratini hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir uzay aracının üzerindeki işaret lambası, araçtaki saate göre $3\ \text{s}$ aralıklarla yanıp sönüyor. Dünya'daki gözlemciler ise ardışık iki yanıp sönme arasındaki süreyi $5\ \text{s}$ olarak ölçüyor.

Aracın Dünya'ya göre sürati kaç $c$'dir? (Sinyallerin Dünya'ya ulaşma süresindeki değişim hesaba katılmış, düzeltilmiştir.)`,
    svgDiyagram: svg(
      380, 195, 'Üzerinde işaret lambası bulunan uzay aracı; araçta ölçülen süre 3 s, Dünya’da ölçülen süre 5 s',
      '<path d="M70 60 h190 l50 25 l-50 25 h-190 z" class="f-kv" stroke-width="2"/>',
      '<circle cx="230" cy="52" r="7" class="f-v" stroke-width="1.5"/>',
      cizgi(230, 40, 230, 32, { sinif: 'c-v' }),
      cizgi(241, 45, 248, 39, { sinif: 'c-v' }),
      cizgi(219, 45, 212, 39, { sinif: 'c-v' }),
      yazi(140, 90, 'Δt₀ = 3 s', { boy: 13, hiza: 'middle' }),
      ok(100, 30, 190, 30, 'i', 3),
      yazi(145, 20, 'v = ?', { boy: 13, hiza: 'middle' }),
      cizgi(20, 160, 360, 160, { k: 2 }),
      yazi(190, 182, 'Dünya’daki gözlemciye göre Δt = 5 s', { boy: 12, hiza: 'middle' }),
    ),
    secenekler: { A: r`$0{,}8$`, B: r`$0{,}75$`, C: r`$0{,}6$`, D: r`$0{,}5$`, E: r`$0{,}4$` },
    dogruCevap: 'A',
    hesap: 'sqrt(1-0.36)',
    adimAdimCozum: [
      r`Araçtaki saatin ölçtüğü süre öz zamandır: $\Delta t_0 = 3\ \text{s}$; Dünya'da $\Delta t = \gamma\,\Delta t_0 = 5\ \text{s}$`,
      r`$\gamma = \dfrac{5}{3} \Rightarrow \sqrt{1 - \dfrac{v^2}{c^2}} = \dfrac{3}{5} = 0{,}6$`,
      r`$\dfrac{v^2}{c^2} = 1 - 0{,}36 = 0{,}64 \Rightarrow v = 0{,}8c$ $\Rightarrow$ Cevap **A**`,
      r`$0{,}6$ çeldiricisi, $\sqrt{1 - v^2/c^2}$ değerinin doğrudan sürat sanılmasından gelir.`,
    ],
  },
  {
    id: '12-T5-18',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.3',
    surecBileseni: 'Deneysel Eₖ–f verilerinden Planck sabitini, eşik frekansını ve eşik dalga boyunu hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Laboratuvarda Planck Sabiti:** Bir öğrenci grubu, okul laboratuvarında bir metal yüzeye farklı frekanslarda ışık düşürüyor ve her seferinde durdurma gerilimini ölçerek fotoelektronların maksimum kinetik enerjisini buluyor. İki ölçümden elde edilen noktalar ve bu noktalardan geçen doğru şekilde gösterilmiştir.

a) Doğrunun eğiminden Planck sabitini $\text{eV} \cdot \text{s}$ cinsinden bulunuz.
b) Metalin eşik frekansını ve bağlanma enerjisini hesaplayınız.
c) Bu metalden elektron sökebilecek ışığın en büyük dalga boyu kaç nm'dir? ($c = 3 \cdot 10^{8}\ \text{m/s}$)`,
    svgDiyagram: svg(
      380, 235, 'Deney verisi: frekans 6 iken 0,8 eV, frekans 10 iken 2,4 eV olan iki nokta ve onlardan geçen doğru',
      eksen(60, 200, 300, 180, 'f (10¹⁴ Hz)', 'Eₖ (eV)'),
      '<path d="M180 160 L310 30" class="c-v" stroke-width="3"/>',
      '<path d="M180 160 V200 M180 160 H60 M260 80 V200 M260 80 H60" class="k" fill="none" stroke-width="1.5"/>',
      '<circle cx="180" cy="160" r="5" class="f-i" stroke="none"/>',
      '<circle cx="260" cy="80" r="5" class="f-i" stroke="none"/>',
      yazi(180, 218, '6', { boy: 12, hiza: 'middle' }),
      yazi(260, 218, '10', { boy: 12, hiza: 'middle' }),
      yazi(54, 164, '0,8', { boy: 12, hiza: 'end' }),
      yazi(54, 84, '2,4', { boy: 12, hiza: 'end' }),
    ),
    dogruCevap: r`a) $h = 4 \cdot 10^{-15}\ \text{eV·s}$ · b) $f_0 = 4 \cdot 10^{14}\ \text{Hz}$, $E_0 = 1{,}6\ \text{eV}$ · c) $750\ \text{nm}$`,
    adimAdimCozum: [
      r`a) Eğim $= \dfrac{\Delta E_k}{\Delta f} = \dfrac{2{,}4 - 0{,}8}{(10 - 6) \cdot 10^{14}} = \dfrac{1{,}6}{4 \cdot 10^{14}} = 4 \cdot 10^{-15}\ \text{eV} \cdot \text{s}$`,
      r`b) $E_k = h(f - f_0)$: $0{,}8 = 4 \cdot 10^{-15}\,(6 \cdot 10^{14} - f_0) \Rightarrow f_0 = 4 \cdot 10^{14}\ \text{Hz}$; $E_0 = hf_0 = 1{,}6\ \text{eV}$`,
      r`c) Eşik dalga boyu: $\lambda_0 = \dfrac{c}{f_0} = \dfrac{3 \cdot 10^{8}}{4 \cdot 10^{14}} = 7{,}5 \cdot 10^{-7}\ \text{m} = 750\ \text{nm}$`,
      'Daha uzun dalga boylu ışık, şiddeti ne olursa olsun bu metalden elektron sökemez.',
    ],
    rubrik: [
      { olcut: 'Eğimi iki noktadan hesaplayıp Planck sabiti olarak yorumlama', puan: 3 },
      { olcut: 'Eşik frekansını ve bağlanma enerjisini doğru bulma', puan: 4 },
      { olcut: 'Eşik dalga boyunu birim dönüşümüyle hesaplama', puan: 3 },
    ],
  },
  {
    id: '12-T5-19',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.2',
    surecBileseni: 'Farklı dalga boylu ışıkların foton enerjisi, momentumu ve süratini karşılaştırır.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Boşlukta yayılan K, L ve M ışıklarının dalga boyları şekilde gösterilmiştir.

I. K ışığının fotonunun enerjisi en büyüktür.
II. M ışığının fotonunun momentumu en büyüktür.
III. Üç ışığın fotonlarının boşluktaki süratleri eşittir.

yargılarından hangileri doğrudur?`,
    svgDiyagram: svg(
      400, 205, 'Dalga boyları 400 nm, 480 nm ve 600 nm olan K, L ve M ışık dalgaları',
      yazi(20, 50, 'K', { boy: 14 }),
      `<path d="${dalga(45, 45, 240, 6, 8)}" class="c-v" fill="none" stroke-width="2"/>`,
      yazi(300, 50, 'λ = 400 nm', { boy: 13 }),
      yazi(20, 110, 'L', { boy: 14 }),
      `<path d="${dalga(45, 105, 240, 5, 8)}" class="c-i" fill="none" stroke-width="2"/>`,
      yazi(300, 110, 'λ = 480 nm', { boy: 13 }),
      yazi(20, 170, 'M', { boy: 14 }),
      `<path d="${dalga(45, 165, 240, 4, 8)}" fill="none" stroke-width="2"/>`,
      yazi(300, 170, 'λ = 600 nm', { boy: 13 }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'I ve III', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'C',
    adimAdimCozum: [
      r`$E = \dfrac{hc}{\lambda}$: dalga boyu en küçük olan K'nin foton enerjisi en büyüktür. I. **Doğru**`,
      r`$p = \dfrac{h}{\lambda}$: momentum da dalga boyuyla ters orantılıdır; en büyük momentum M'de değil K'dedir. II. **Yanlış**`,
      r`Tüm fotonlar boşlukta $c$ süratiyle yayılır. III. **Doğru** $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '12-T5-20',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.3',
    surecBileseni: 'Hızlandırıcı gerilim altında anoda ulaşan fotoelektronların en büyük kinetik enerjisini hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekildeki fotoselde katot metalinin bağlanma enerjisi $2\ \text{eV}$'tur. Katoda dalga boyu $248\ \text{nm}$ olan ışık düşürülürken anot, üreteç yardımıyla katoda göre $+1{,}5\ \text{V}$ potansiyelde tutuluyor.

Anoda çarpan fotoelektronların kinetik enerjisi en fazla kaç eV olur? ($h \cdot c = 1240\ \text{eV} \cdot \text{nm}$)`,
    svgDiyagram: svg(
      320, 240, 'Fotosel: ışık katoda düşüyor, üretecin artı ucu anoda bağlı, gerilim 1,5 V',
      '<ellipse cx="170" cy="105" rx="110" ry="55" class="f-k" stroke-width="2"/>',
      '<path d="M90 70 q-15 35 0 70" class="c-v" fill="none" stroke-width="4"/>',
      cizgi(250, 80, 250, 130, { k: 4 }),
      yazi(100, 110, 'K', { boy: 13 }),
      yazi(240, 110, 'A', { boy: 13, hiza: 'end' }),
      ok(20, 30, 82, 82, 'i', 2),
      ok(14, 72, 78, 106, 'i', 2),
      yazi(105, 40, 'λ = 248 nm', { boy: 13 }),
      '<path d="M90 140 V200 H160 M170 200 H250 V130" fill="none" stroke-width="2"/>',
      cizgi(170, 185, 170, 215, { k: 3 }),
      cizgi(160, 192, 160, 208, { k: 6 }),
      yazi(178, 188, '+', { boy: 13 }),
      yazi(165, 232, '1,5 V', { boy: 13, hiza: 'middle' }),
    ),
    secenekler: { A: r`$1{,}5$`, B: r`$2$`, C: r`$3$`, D: r`$3{,}5$`, E: r`$4{,}5$` },
    dogruCevap: 'E',
    hesap: '1240/248-2+1.5',
    adimAdimCozum: [
      r`Foton enerjisi: $E = \dfrac{1240}{248} = 5\ \text{eV}$; katottan çıkışta $E_{k,maks} = 5 - 2 = 3\ \text{eV}$`,
      r`Anot katoda göre pozitif olduğundan elektrik alan elektronları anoda doğru hızlandırır; her elektron $e \cdot 1{,}5\ \text{V} = 1{,}5\ \text{eV}$ enerji kazanır.`,
      r`Anoda çarpan en hızlı elektronun enerjisi: $3 + 1{,}5 = 4{,}5\ \text{eV}$ $\Rightarrow$ Cevap **E**`,
      r`Gerilimi frenleyici sanan öğrenci $3 - 1{,}5 = 1{,}5$ eV bulur.`,
    ],
  },
  {
    id: '12-T5-21',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.1',
    surecBileseni: 'Göreli kinetik enerjiyi toplam enerji ile durgun kütle enerjisinin farkı olarak hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Durgun kütle enerjisi $900\ \text{MeV}$ olan bir parçacık, bir hızlandırıcıda laboratuvara göre $0{,}6c$ süratle hareket etmektedir.

Parçacığın göreli kinetik enerjisi kaç MeV'tir?`,
    secenekler: { A: r`$162$`, B: r`$180$`, C: r`$225$`, D: r`$720$`, E: r`$1125$` },
    dogruCevap: 'C',
    hesap: '900*(1/sqrt(1-0.36)-1)',
    adimAdimCozum: [
      r`$\gamma = \dfrac{1}{\sqrt{1 - 0{,}36}} = \dfrac{1}{0{,}8} = 1{,}25$`,
      r`Toplam enerji: $E = \gamma E_0 = 1{,}25 \cdot 900 = 1125\ \text{MeV}$ (bu değer kinetik enerji değildir).`,
      r`$E_k = E - E_0 = 1125 - 900 = 225\ \text{MeV}$ $\Rightarrow$ Cevap **C**`,
      r`Klasik bağıntı $\dfrac{1}{2}mv^2 = \dfrac{1}{2} \cdot 0{,}36 \cdot 900 = 162$ MeV verir; yüksek süratlerde bu bağıntı geçersizdir.`,
    ],
  },
  {
    id: '12-T5-22',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.4',
    surecBileseni: 'Compton saçılmasında enerji korunumunu kullanarak fotonun ve elektronun enerjilerini hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Grafit Levhada Saçılma:** Bir araştırma laboratuvarında dalga boyu $10\ \text{pm}$ olan X ışını fotonları ince bir grafit levhaya gönderiliyor. Serbest kabul edilen bir elektrona çarpan foton, şekildeki gibi geliş doğrultusuna dik olarak saçılıyor.

a) Gelen fotonun enerjisini keV cinsinden hesaplayınız.
b) Saçılan fotonun dalga boyunu ve enerjisini bulunuz.
c) Elektronun kazandığı kinetik enerjiyi bulunuz; bu olayın ışığın tanecik modelini neden desteklediğini açıklayınız.

($h \cdot c = 1240\ \text{eV} \cdot \text{nm}$, $\dfrac{h}{m_e c} = 2{,}4\ \text{pm}$, $1\ \text{pm} = 10^{-3}\ \text{nm}$)`,
    svgDiyagram: svg(
      420, 200, 'Compton saçılması öncesi ve sonrası: foton 90 derece saçılıyor, elektron geri tepiyor',
      yazi(80, 30, 'Önce', { boy: 13, hiza: 'middle' }),
      `<path d="${dalga(20, 110, 90, 3, 5)}" class="c-i" fill="none" stroke-width="2"/>`,
      ok(112, 110, 130, 110, 'i', 2),
      yazi(65, 88, 'λ = 10 pm', { boy: 12, hiza: 'middle' }),
      '<circle cx="142" cy="110" r="6" class="f-i" stroke-width="1.5"/>',
      yazi(142, 134, 'e⁻', { boy: 12, hiza: 'middle' }),
      cizgi(200, 20, 200, 185, { sinif: 'k', k: 1.5 }),
      yazi(365, 30, 'Sonra', { boy: 13, hiza: 'middle' }),
      cizgi(230, 110, 284, 110, { sinif: 'k', k: 1.5 }),
      cizgi(296, 110, 410, 110, { sinif: 'k', k: 1.5 }),
      ok(290, 104, 290, 30, 'v', 2.5),
      yazi(300, 44, 'λ′', { boy: 14 }),
      '<path d="M290 98 h12 v12" fill="none" stroke-width="1.5"/>',
      yazi(312, 100, 'θ = 90°', { boy: 12 }),
      ok(295, 115, 368, 160, 't', 2),
      yazi(372, 178, 'e⁻', { boy: 12 }),
    ),
    dogruCevap: r`a) $124\ \text{keV}$ · b) $\lambda' = 12{,}4\ \text{pm}$, $E' = 100\ \text{keV}$ · c) $24\ \text{keV}$; çarpışma tanecik gibi enerji–momentum aktarımıdır`,
    adimAdimCozum: [
      r`a) $\lambda = 10\ \text{pm} = 0{,}01\ \text{nm}$; $E = \dfrac{1240}{0{,}01} = 124\,000\ \text{eV} = 124\ \text{keV}$`,
      r`b) $\Delta\lambda = 2{,}4\,(1 - \cos 90^\circ) = 2{,}4\ \text{pm} \Rightarrow \lambda' = 12{,}4\ \text{pm}$; $E' = \dfrac{1240}{0{,}0124} = 100\ \text{keV}$`,
      r`c) Enerji korunumu: $E_{k,e} = E - E' = 124 - 100 = 24\ \text{keV}$`,
      'Foton, elektronla bilardo topları gibi çarpışarak belirli miktarda enerji ve momentum aktarır; dalga modeli saçılan ışığın dalga boyunun açıya bağlı değişmesini açıklayamaz.',
    ],
    rubrik: [
      { olcut: 'Gelen foton enerjisini birim dönüşümüyle hesaplama', puan: 3 },
      { olcut: 'Saçılan fotonun dalga boyunu ve enerjisini bulma', puan: 4 },
      { olcut: 'Elektronun kinetik enerjisini bulup tanecik modeliyle ilişkilendirme', puan: 3 },
    ],
  },
  {
    id: '12-T5-23',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.1',
    surecBileseni: 'Boy kısalması ve zaman genişlemesini aynı yolculuğa uygulayarak sonuçların tutarlılığını gösterir.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – İki Fener Arasında:** Dünya'ya göre durgun P ve R uzay fenerleri arasındaki uzaklık, Dünya çerçevesinde $24$ ışık-dakikadır (ışığın 1 dakikada aldığı yol). Bir uzay aracı, Dünya'ya göre $0{,}8c$ süratle P'den R'ye gidiyor.

a) Dünya çerçevesinde yolculuk kaç dakika sürer?
b) Araçtaki astronota göre iki fener arasındaki uzaklık kaç ışık-dakikadır?
c) Astronotun saatine göre yolculuk kaç dakika sürer? b ve c şıklarındaki sonuçların birbiriyle tutarlı olduğunu gösteriniz.`,
    svgDiyagram: svg(
      400, 175, 'P ve R uzay fenerleri arası Dünya çerçevesinde 24 ışık-dakika; araç 0,8c süratle P’den R’ye gidiyor',
      '<rect x="42" y="70" width="16" height="40" class="f-i" stroke-width="2"/>',
      '<rect x="342" y="70" width="16" height="40" class="f-i" stroke-width="2"/>',
      yazi(50, 130, 'P', { boy: 14, hiza: 'middle' }),
      yazi(350, 130, 'R', { boy: 14, hiza: 'middle' }),
      '<path d="M80 80 h40 l18 10 l-18 10 h-40 z" class="f-kv" stroke-width="2"/>',
      ok(90, 60, 160, 60, 'v', 3),
      yazi(125, 48, 'v = 0,8c', { boy: 13, hiza: 'middle' }),
      olcu(50, 158, 350, 158, '24 ışık-dakika (Dünya çerçevesi)'),
    ),
    dogruCevap: r`a) $30$ dk · b) $14{,}4$ ışık-dakika · c) $18$ dk`,
    adimAdimCozum: [
      r`a) $t = \dfrac{24\ \text{ışık-dk}}{0{,}8c} = 30$ dk`,
      r`b) $\sqrt{1 - 0{,}64} = 0{,}6$; astronota göre fenerler hareketlidir: $L = 24 \cdot 0{,}6 = 14{,}4$ ışık-dakika`,
      r`c) Astronotun saati öz zamanı ölçer: $\Delta t_0 = \dfrac{30}{\gamma} = 30 \cdot 0{,}6 = 18$ dk`,
      r`Tutarlılık: astronota göre fenerler $0{,}8c$ ile geçer; $\dfrac{14{,}4}{0{,}8} = 18$ dk, c şıkkıyla aynıdır.`,
    ],
    rubrik: [
      { olcut: 'Dünya çerçevesindeki süreyi bulma', puan: 2 },
      { olcut: 'Boy kısalmasıyla astronota göre uzaklığı hesaplama', puan: 3 },
      { olcut: 'Öz zamanı hesaplama', puan: 3 },
      { olcut: 'İki yaklaşımın tutarlılığını gösterme', puan: 2 },
    ],
  },
  {
    id: '12-T5-24',
    sinif: 12,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.12.5.2',
    surecBileseni: 'Yıldızların renklerini kara cisim ışımasıyla ilişkilendirerek sıcaklıklarını karşılaştırır.',
    zorluk: 'Temel',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Yıldızların Renkleri:** Kış gecesi Avcı (Orion) takımyıldızını inceleyen bir öğrenci, Betelgeuse yıldızının kırmızımsı, Rigel yıldızının ise mavimsi beyaz göründüğünü defterine not ediyor.

a) Yıldızları kara cisim kabul ederek hangisinin yüzey sıcaklığının daha yüksek olduğunu Wien yasasına dayanarak açıklayınız.
b) Mavi ışığın dalga boyu $496\ \text{nm}$ alınırsa bir mavi fotonun enerjisi kaç eV olur? ($h \cdot c = 1240\ \text{eV} \cdot \text{nm}$)
c) Planck'ın enerji kuantumu varsayımının kara cisim ışımasını açıklamadaki rolünü kısaca belirtiniz.`,
    dogruCevap: r`a) Rigel daha sıcaktır · b) $2{,}5\ \text{eV}$ · c) Enerji $hf$ paketleri hâlinde yayılır`,
    adimAdimCozum: [
      'a) Wien yasasına göre sıcaklık arttıkça en şiddetli ışımanın dalga boyu kısalır. Mavi ışık kırmızıdan kısa dalga boylu olduğundan Rigel’in yüzey sıcaklığı daha yüksektir.',
      r`b) $E = \dfrac{hc}{\lambda} = \dfrac{1240}{496} = 2{,}5\ \text{eV}$`,
      r`c) Planck, ışımanın enerjisinin $E = nhf$ biçiminde kuantumlu olduğunu varsaydı; böylece kısa dalga boylarında şiddetin sonsuza gitmesi önlendi ve deneysel eğri açıklandı.`,
    ],
    rubrik: [
      { olcut: 'Renk ile sıcaklık arasındaki ilişkiyi Wien yasasıyla açıklama', puan: 4 },
      { olcut: 'Foton enerjisini doğru hesaplama', puan: 3 },
      { olcut: 'Planck varsayımının rolünü belirtme', puan: 3 },
    ],
  },
]
