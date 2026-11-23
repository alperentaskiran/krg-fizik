import type { Soru } from '../../tipler.ts'
import { cizgi, eksen, ok, olcu, svg, tarama, yazi } from '../../cizim.ts'

const r = String.raw
const TEMA = 'Elektrik ve Manyetizma'

/** Noktasal yük: yarı saydam daire + ortasında kısa etiket */
const yuk = (x: number, y: number, etiket: string, rr = 18) =>
  `<circle cx="${x}" cy="${y}" r="${rr}" class="f-kv" stroke-width="2.5"/>` + yazi(x, y + 5, etiket, { hiza: 'middle', boy: 13 })

/** Dikey levha (paralel levhalı düzenekler için) */
const levha = (x: number, y: number, boy: number, sinif = 'f-i') =>
  `<rect x="${x - 4}" y="${y}" width="8" height="${boy}" class="${sinif}" stroke-width="1.5"/>`

export const sorular: Soru[] = [
  {
    id: '11-8',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Coulomb yasasını kullanarak noktasal yükler arasındaki elektriksel kuvveti hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Aralarında $0{,}3\ \text{m}$ uzaklık bulunan $q_1 = +2\ \mu\text{C}$ ve $q_2 = +2\ \mu\text{C}$ büyüklüğündeki iki noktasal yük arasındaki elektriksel kuvvetin büyüklüğü kaç newtondur? ($k = 9 \cdot 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$)`,
    secenekler: { A: r`$0{,}04$`, B: r`$0{,}08$`, C: r`$0{,}12$`, D: r`$0{,}2$`, E: r`$0{,}4$` },
    dogruCevap: 'E',
    hesap: '9e9 * 2e-6 * 2e-6 / 0.3**2',
    adimAdimCozum: [
      r`Coulomb yasası: $F = k\,\dfrac{q_1 q_2}{d^2}$`,
      r`$F = 9 \cdot 10^9 \cdot \dfrac{(2 \cdot 10^{-6})(2 \cdot 10^{-6})}{0{,}09} = \dfrac{36 \cdot 10^{-3}}{0{,}09}$`,
      r`$F = 0{,}4\ \text{N}$ (aynı işaretli yükler birbirini iter) $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '11-9',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'İki noktasal yükün oluşturduğu bileşke elektrik alanın sıfır olduğu noktayı belirler.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Aralarındaki uzaklık $3\ \text{m}$ olan A ve B noktalarına sırasıyla $+q$ ve $+4q$ yükleri sabitleniyor. İki yükün oluşturduğu bileşke elektrik alanın sıfır olduğu nokta A'dan kaç metre uzaktadır?`,
    svgDiyagram: svg(
      360, 180, 'Doğru üzerindeki iki pozitif yük',
      cizgi(30, 90, 330, 90, { sinif: 'k', k: 1.5 }),
      '<circle cx="60" cy="90" r="16" class="f-kv" stroke-width="2.5"/>',
      '<circle cx="300" cy="90" r="22" class="f-kv" stroke-width="2.5"/>',
      yazi(60, 95, '+q', { hiza: 'middle', boy: 14 }),
      yazi(300, 96, '+4q', { hiza: 'middle', boy: 14 }),
      yazi(60, 56, 'A', { hiza: 'middle' }),
      yazi(300, 56, 'B', { hiza: 'middle' }),
      olcu(60, 140, 300, 140, '3 m', { dy: -8 }),
    ),
    secenekler: { A: r`$0{,}5$`, B: '$1$', C: r`$1{,}5$`, D: '$2$', E: r`$2{,}5$` },
    dogruCevap: 'B',
    hesap: '3 * 1 / (1 + 2)',
    adimAdimCozum: [
      'Aynı işaretli iki yük için alanın sıfır olduğu nokta yüklerin arasında ve küçük yüke daha yakındır.',
      r`A'dan $x$ uzakta: $k\dfrac{q}{x^2} = k\dfrac{4q}{(3 - x)^2} \Rightarrow \dfrac{3 - x}{x} = 2$`,
      r`$3 - x = 2x \Rightarrow x = 1\ \text{m}$ $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '11-T2A-01',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Yük büyüklüğü ve uzaklık değiştiğinde Coulomb kuvvetinin nasıl değiştiğini orantı kurarak hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Yalıtkan saplara tutturulmuş K ve L küreciklerinin yükleri şekildeki gibi $+2q$ ve $-3q$ iken, aralarındaki uzaklık $d$ olduğunda birbirlerine $36\ \text{N}$ büyüklüğünde çekme kuvveti uyguluyorlar.

K küreciğinin yükü $+6q$ yapılıp küreler arasındaki uzaklık $2d$ olacak biçimde ayrılırsa kürecikler arasındaki elektriksel kuvvetin büyüklüğü kaç N olur?`,
    svgDiyagram: svg(
      360, 170, 'Aralarında d uzaklık bulunan K ve L yükleri',
      cizgi(30, 80, 330, 80, { sinif: 'k', k: 1.5 }),
      yuk(80, 80, '+2q', 22),
      yuk(280, 80, '−3q', 22),
      yazi(80, 40, 'K', { hiza: 'middle' }),
      yazi(280, 40, 'L', { hiza: 'middle' }),
      olcu(80, 135, 280, 135, 'd', { dy: -8 }),
    ),
    secenekler: { A: '$9$', B: '$12$', C: '$18$', D: '$27$', E: '$54$' },
    dogruCevap: 'D',
    hesap: '36 * 3 / 2**2',
    adimAdimCozum: [
      r`Coulomb yasası: $F = k\,\dfrac{q_K\, q_L}{d^2}$; kuvvet yüklerin çarpımıyla doğru, uzaklığın karesiyle ters orantılıdır.`,
      r`K'nin yükü $2q$'dan $6q$'ya çıktığı için çarpım 3 katına çıkar; uzaklık 2 katına çıktığı için payda $2^2 = 4$ katına çıkar.`,
      r`$F' = 36 \cdot \dfrac{3}{4} = 27\ \text{N}$ (yükler zıt işaretli kaldığı için kuvvet yine çekmedir) $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '11-T2A-02',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Noktasal bir yükün belirli bir uzaklıkta oluşturduğu elektriksel alanın büyüklüğünü hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Bir okul laboratuvarında yalıtkan bir ayak üzerindeki küçük metal küreye $+4\ \mu\text{C}$ yük yükleniyor. Kürenin merkezinden $20\ \text{cm}$ uzaklıktaki P noktasında bu yükün oluşturduğu elektriksel alanın büyüklüğü kaç N/C olur? (Küre noktasal yük gibi davranmaktadır; $k = 9 \cdot 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$)`,
    secenekler: {
      A: r`$9 \cdot 10^{3}$`,
      B: r`$9 \cdot 10^{4}$`,
      C: r`$1{,}8 \cdot 10^{5}$`,
      D: r`$4{,}5 \cdot 10^{5}$`,
      E: r`$9 \cdot 10^{5}$`,
    },
    dogruCevap: 'E',
    hesap: '9e9 * 4e-6 / 0.2**2',
    adimAdimCozum: [
      r`Noktasal yükün alanı: $E = k\,\dfrac{q}{d^2}$; uzaklık metreye çevrilir: $d = 0{,}2\ \text{m}$.`,
      r`$E = 9 \cdot 10^9 \cdot \dfrac{4 \cdot 10^{-6}}{0{,}04} = \dfrac{36 \cdot 10^{3}}{4 \cdot 10^{-2}}$`,
      r`$E = 9 \cdot 10^{5}\ \text{N/C}$; yük pozitif olduğundan alan P'de küreden dışarı doğrudur. (Uzaklığın karesini almayan öğrenci $1{,}8 \cdot 10^{5}$ bulur.) $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '11-T2A-03',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Alan çizgisi çiziminden alanın yönü ve şiddeti hakkında çıkarım yapar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekilde eşit büyüklükte yüklü K ve L cisimlerinin çevresindeki elektriksel alan çizgilerinin bir kısmı gösterilmiştir. Oklar alan çizgilerinin yönünü belirtmektedir.

Buna göre aşağıdaki yargılardan hangisi doğrudur?`,
    svgDiyagram: svg(
      400, 220, 'K ve L yüklerinin alan çizgileri',
      '<path d="M128 110 H272" stroke-width="2" fill="none"/>',
      '<path d="M124 98 Q200 40 276 98" stroke-width="2" fill="none"/>',
      '<path d="M120 92 Q200 0 280 92" stroke-width="2" fill="none"/>',
      '<path d="M124 122 Q200 180 276 122" stroke-width="2" fill="none"/>',
      '<path d="M120 128 Q200 220 280 128" stroke-width="2" fill="none"/>',
      ok(192, 110, 210, 110, 't', 2),
      ok(192, 69, 210, 69, 't', 2),
      ok(192, 46, 210, 46, 't', 2),
      ok(192, 151, 210, 151, 't', 2),
      ok(192, 174, 210, 174, 't', 2),
      ok(92, 110, 30, 110, 't', 2),
      ok(370, 110, 308, 110, 't', 2),
      yuk(110, 110, 'K'),
      yuk(290, 110, 'L'),
    ),
    secenekler: {
      A: 'K ve L arasındaki bölgede alan çizgileri birbirini keser.',
      B: 'Çizgilerin sıklaştığı yerde alan şiddeti daha büyüktür.',
      C: 'K cismindeki yük negatif, L cismindeki yük pozitiftir.',
      D: 'Alan çizgileri pozitif yüke girer, negatif yükten çıkar.',
      E: 'Bir alan çizgisinin her noktasında alan şiddeti aynıdır.',
    },
    dogruCevap: 'B',
    adimAdimCozum: [
      r`Alan çizgileri pozitif yükten çıkar, negatif yüke girer; çizgiler K'den çıkıp L'ye girdiğinden K pozitif, L negatiftir (C ve D yanlış).`,
      r`İki alan çizgisi hiçbir zaman kesişmez; kesişseydi o noktada alanın iki farklı yönü olurdu (A yanlış).`,
      r`Alan şiddeti çizgilerin sıklığıyla orantılıdır; yüklere yakın bölgelerde çizgiler sık, uzakta seyrektir. Bu yüzden bir çizgi boyunca şiddet değişir (E yanlış), B doğrudur. $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '11-T2A-04',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Dik doğrultularda etki eden iki Coulomb kuvvetinin bileşkesini vektörel toplama ile hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Yatay düzlemde O noktasında $+2\ \mu\text{C}$ yüklü bir cisim bulunuyor. O'nun $30\ \text{cm}$ doğusunda $+3\ \mu\text{C}$ yüklü X cismi, $30\ \text{cm}$ kuzeyinde ise $-4\ \mu\text{C}$ yüklü Y cismi şekildeki gibi sabitlenmiştir.

O'daki yüke X ve Y'nin uyguladığı bileşke elektriksel kuvvetin büyüklüğü kaç N'dir? ($k = 9 \cdot 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$)`,
    svgDiyagram: svg(
      380, 232, 'O, X ve Y yüklerinin dik konumu',
      cizgi(90, 180, 290, 180, { sinif: 'k', k: 1.5 }),
      cizgi(90, 180, 90, 50, { sinif: 'k', k: 1.5 }),
      yuk(90, 180, 'O'),
      yuk(290, 180, 'X'),
      yuk(90, 50, 'Y'),
      yazi(64, 185, '+2 μC', { hiza: 'end', boy: 13 }),
      yazi(316, 185, '+3 μC', { boy: 13 }),
      yazi(116, 55, '−4 μC', { boy: 13 }),
      olcu(90, 216, 290, 216, '30 cm', { dy: -8 }),
      olcu(160, 50, 160, 180, '30 cm'),
      yazi(260, 60, 'Kuzey ↑', { boy: 13 }),
    ),
    secenekler: { A: r`$0{,}2$`, B: r`$0{,}5$`, C: r`$0{,}6$`, D: r`$0{,}8$`, E: '$1$' },
    dogruCevap: 'E',
    hesap: 'sqrt(0.6**2 + 0.8**2)',
    adimAdimCozum: [
      r`X'in kuvveti (itme, batıya): $F_X = 9 \cdot 10^9 \cdot \dfrac{(2 \cdot 10^{-6})(3 \cdot 10^{-6})}{0{,}09} = 0{,}6\ \text{N}$`,
      r`Y'nin kuvveti (çekme, kuzeye): $F_Y = 9 \cdot 10^9 \cdot \dfrac{(2 \cdot 10^{-6})(4 \cdot 10^{-6})}{0{,}09} = 0{,}8\ \text{N}$`,
      r`Kuvvetler birbirine dik olduğundan $F_{net} = \sqrt{0{,}6^2 + 0{,}8^2} = 1\ \text{N}$ (büyüklükleri doğrudan toplayan $1{,}4$ bulur) $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '11-T2A-05',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Zıt işaretli iki yükün doğrultusunda üçüncü bir yükün dengede kalacağı konumu belirler.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Aralarında $30\ \text{cm}$ uzaklık bulunan A ve B noktalarına $+4q$ ve $-q$ yükleri sabitlenmiştir. Bu iki yükü birleştiren doğru üzerine konulacak serbest bir $+Q$ yükünün, A ve B'deki yüklerden dolayı üzerine etki eden bileşke kuvvetin sıfır olması isteniyor.

Buna göre $+Q$ yükü B noktasından kaç cm uzağa konulmalıdır?`,
    svgDiyagram: svg(
      420, 150, 'A noktasında +4q, B noktasında −q yükü',
      cizgi(20, 70, 400, 70, { sinif: 'k', k: 1.5 }),
      yuk(80, 70, '+4q', 22),
      yuk(220, 70, '−q', 18),
      yazi(80, 32, 'A', { hiza: 'middle' }),
      yazi(220, 34, 'B', { hiza: 'middle' }),
      olcu(80, 120, 220, 120, '30 cm', { dy: -8 }),
    ),
    secenekler: { A: '$10$', B: '$20$', C: '$30$', D: '$45$', E: '$60$' },
    dogruCevap: 'C',
    hesap: '30 / (2 - 1)',
    adimAdimCozum: [
      r`Yükler zıt işaretli olduğundan aralarındaki bir noktada iki kuvvet aynı yöne olur; denge noktası dışarıda ve büyüklüğü küçük olan yüke (B) yakın tarafta, yani B'nin sağındadır.`,
      r`B'den $x$ uzakta: $k\,\dfrac{4q\,Q}{(30 + x)^2} = k\,\dfrac{q\,Q}{x^2} \Rightarrow \dfrac{30 + x}{x} = 2$`,
      r`$30 + x = 2x \Rightarrow x = 30\ \text{cm}$ (dengeyi iki yükün arasında arayan öğrenci 10 cm bulur) $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '11-T2A-06',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Düzgün elektriksel alandaki yüklü cisme etki eden kuvveti ve cismin ivmesini hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Düşey konumdaki iki paralel levha arasında büyüklüğü $5000\ \text{N/C}$ olan yatay ve düzgün bir elektriksel alan oluşturulmuştur. Levhalar arasındaki sürtünmesiz, yalıtkan yatay zemine kütlesi $4\ \text{g}$, yükü $+2\ \mu\text{C}$ olan küçük bir cisim durgun hâlde bırakılıyor.

Cismin kazandığı ivmenin büyüklüğü kaç $\text{m/s}^2$ olur?`,
    svgDiyagram: svg(
      360, 200, 'Paralel levhalar arasında yatay zemindeki yüklü cisim',
      levha(60, 30, 145, 'f-v'),
      levha(300, 30, 145, 'f-i'),
      yazi(60, 22, '+', { hiza: 'middle', boy: 18 }),
      yazi(300, 22, '−', { hiza: 'middle', boy: 18 }),
      ok(80, 60, 280, 60, 'i', 2),
      ok(80, 105, 280, 105, 'i', 2),
      yazi(180, 48, 'E', { hiza: 'middle' }),
      cizgi(64, 175, 296, 175),
      tarama(80, 175, 210),
      yuk(180, 160, 'q', 14),
    ),
    secenekler: { A: r`$0{,}5$`, B: '$1$', C: r`$1{,}25$`, D: r`$2{,}5$`, E: '$5$' },
    dogruCevap: 'D',
    hesap: '2e-6 * 5000 / 4e-3',
    adimAdimCozum: [
      r`Elektriksel kuvvet: $F = qE = (2 \cdot 10^{-6})(5000) = 10^{-2}\ \text{N}$; yük pozitif olduğundan kuvvet alan yönündedir (negatif levhaya doğru).`,
      r`Kütle SI birimine çevrilir: $m = 4\ \text{g} = 4 \cdot 10^{-3}\ \text{kg}$. Zemin sürtünmesiz ve yatay olduğundan net kuvvet $F$'dir.`,
      r`$a = \dfrac{F}{m} = \dfrac{10^{-2}}{4 \cdot 10^{-3}} = 2{,}5\ \text{m/s}^2$ $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '11-T2A-07',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Faraday kafesinin çalışma ilkesine ilişkin yargıların doğruluğunu değerlendirir.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekilde dışarıdan uygulanan bir elektriksel alanın içine konmuş kapalı metal bir kutu ve kutunun içindeki P noktası gösterilmiştir. Bu düzenekle ilgili olarak öğrenciler aşağıdaki yargıları ileri sürüyor:

I. Yüklenmiş içi boş iletken bir cisme verilen fazla yük, cismin iç yüzeyinde toplanır.
II. Dış alana konan kapalı metal kutunun içindeki P noktasında elektriksel alan sıfırdır.
III. Kutu metal yerine plastikten yapılırsa içindeki bölge dış alandan daha iyi korunur.

Bu yargılardan hangileri doğrudur?`,
    svgDiyagram: svg(
      400, 200, 'Dış elektriksel alana konmuş kapalı metal kutu',
      '<rect x="140" y="45" width="120" height="110" class="f-k" stroke-width="5"/>',
      ok(20, 70, 136, 70, 't', 2),
      ok(20, 100, 136, 100, 't', 2),
      ok(20, 130, 136, 130, 't', 2),
      ok(264, 70, 380, 70, 't', 2),
      ok(264, 100, 380, 100, 't', 2),
      ok(264, 130, 380, 130, 't', 2),
      '<circle cx="200" cy="100" r="4" class="f-t" stroke="none"/>',
      yazi(210, 95, 'P', { boy: 14 }),
      yazi(200, 184, 'kapalı metal kutu', { hiza: 'middle', boy: 13 }),
      yazi(30, 58, 'dış alan', { boy: 13 }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız II', C: 'Yalnız III', D: 'I ve II', E: 'II ve III' },
    dogruCevap: 'B',
    adimAdimCozum: [
      'I. İletkendeki fazla yükler birbirini iterek birbirinden olabildiğince uzaklaşır ve dış yüzeye dağılır; iç yüzeyde toplanmaz. Yanlış.',
      'II. Dış alan, metal kutudaki serbest elektronları yeniden dağıtır; bu yüklerin oluşturduğu alan iç bölgede dış alanı tam olarak yok eder. Doğru.',
      'III. Plastik yalıtkandır, serbest yükü olmadığı için dış alanı perdeleyemez; koruma için iletken gerekir. Yanlış.',
      r`Yalnız II doğrudur. $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '11-T2A-08',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'İki eşit yükün orta dikme üzerindeki bir noktada oluşturduğu bileşke alanı bileşenlerine ayırarak hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Aralarında $60\ \text{cm}$ uzaklık bulunan A ve B noktalarına her biri $+5\ \mu\text{C}$ olan noktasal yükler sabitlenmiştir. P noktası, AB doğru parçasının orta dikmesi üzerinde ve AB'ye $40\ \text{cm}$ uzaklıktadır.

Buna göre P noktasındaki bileşke elektriksel alanın büyüklüğü kaç $10^{5}\ \text{N/C}$'dir? ($k = 9 \cdot 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$)`,
    svgDiyagram: svg(
      400, 240, 'A ve B yüklerinin orta dikmesindeki P noktası',
      cizgi(80, 190, 200, 30, { sinif: 'k', k: 1.5 }),
      cizgi(320, 190, 200, 30, { sinif: 'k', k: 1.5 }),
      cizgi(98, 190, 302, 190, { k: 1.5 }),
      olcu(200, 30, 200, 190, '40 cm'),
      yuk(80, 190, '+q'),
      yuk(320, 190, '+q'),
      yazi(46, 160, 'A', { hiza: 'middle' }),
      yazi(354, 160, 'B', { hiza: 'middle' }),
      '<circle cx="200" cy="30" r="4" class="f-t" stroke="none"/>',
      yazi(214, 26, 'P'),
      olcu(80, 226, 200, 226, '30 cm', { dy: -8 }),
      olcu(200, 226, 320, 226, '30 cm', { dy: -8 }),
    ),
    secenekler: { A: r`$1{,}08$`, B: r`$1{,}44$`, C: r`$1{,}8$`, D: r`$2{,}16$`, E: r`$2{,}88$` },
    dogruCevap: 'E',
    hesap: '2 * 9e9 * 5e-6 / 0.5**2 * 0.8 / 1e5',
    adimAdimCozum: [
      r`Pisagor: $AP = BP = \sqrt{0{,}3^2 + 0{,}4^2} = 0{,}5\ \text{m}$. Her yükün P'deki alanı: $E_1 = 9 \cdot 10^9 \cdot \dfrac{5 \cdot 10^{-6}}{0{,}25} = 1{,}8 \cdot 10^{5}\ \text{N/C}$`,
      r`Alanlar yüklerden dışarı doğrudur; AB'ye paralel bileşenler eşit ve zıt olduğundan birbirini yok eder.`,
      r`Dik bileşenler toplanır: $E_P = 2 E_1 \cdot \dfrac{0{,}4}{0{,}5} = 2 \cdot 1{,}8 \cdot 0{,}8 = 2{,}88$, yani $2{,}88 \cdot 10^{5}\ \text{N/C}$ $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '11-T2A-09',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Elektriksel alan–uzaklık grafiğinden alanı oluşturan yükün büyüklüğünü hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Noktasal bir yükün oluşturduğu elektriksel alanın büyüklüğünün yüke olan uzaklığa ($r$) bağlı grafiği şekildeki gibidir.

Buna göre alanı oluşturan yükün büyüklüğü kaç nC'dir? ($1\ \text{nC} = 10^{-9}\ \text{C}$; $k = 9 \cdot 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$)`,
    svgDiyagram: svg(
      380, 232, 'Elektriksel alanın uzaklığa bağlı grafiği',
      eksen(60, 200, 300, 180, 'r (m)', 'E (N/C)'),
      '<polyline points="140,56 160,107.8 180,136 200,153 220,164 260,177 300,184 340,188.2" class="c-v" stroke-width="3" fill="none"/>',
      cizgi(140, 56, 140, 200, { sinif: 'k', k: 1 }),
      cizgi(60, 56, 140, 56, { sinif: 'k', k: 1 }),
      cizgi(220, 164, 220, 200, { sinif: 'k', k: 1 }),
      cizgi(60, 164, 220, 164, { sinif: 'k', k: 1 }),
      cizgi(300, 184, 300, 200, { sinif: 'k', k: 1 }),
      cizgi(60, 184, 300, 184, { sinif: 'k', k: 1 }),
      yazi(140, 216, '1', { hiza: 'middle', boy: 12 }),
      yazi(220, 216, '2', { hiza: 'middle', boy: 12 }),
      yazi(300, 216, '3', { hiza: 'middle', boy: 12 }),
      yazi(54, 60, '72', { hiza: 'end', boy: 12 }),
      yazi(54, 168, '18', { hiza: 'end', boy: 12 }),
      yazi(54, 188, '8', { hiza: 'end', boy: 12 }),
    ),
    secenekler: { A: '$2$', B: '$4$', C: '$6$', D: '$8$', E: '$16$' },
    dogruCevap: 'D',
    hesap: '72 * 1**2 / 9e9 / 1e-9',
    adimAdimCozum: [
      r`Grafikten $r = 1\ \text{m}$ iken $E = 72\ \text{N/C}$ okunur. $E = k\,\dfrac{q}{r^2} \Rightarrow q = \dfrac{E\, r^2}{k}$`,
      r`$q = \dfrac{72 \cdot 1^2}{9 \cdot 10^9} = 8 \cdot 10^{-9}\ \text{C} = 8\ \text{nC}$`,
      r`Kontrol: $r = 2\ \text{m}$ için $q = \dfrac{18 \cdot 4}{9 \cdot 10^9} = 8 \cdot 10^{-9}\ \text{C}$; aynı sonuç (karesini almayan öğrenci 4 bulur). $\Rightarrow$ Cevap **D**`,
    ],
  },
  {
    id: '11-T2A-10',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Aynı düzgün alandaki proton ve elektrona etkiyen kuvvetleri ve ivmeleri karşılaştırır.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Düzgün bir elektriksel alanın içinde, birbirinden uzak iki noktada durgun hâldeki bir proton ve bir elektron aynı anda serbest bırakılıyor. Protonun kütlesi elektronunkinden yaklaşık 1840 kat büyüktür; iki parçacığın yük büyüklükleri ise eşittir.

Yalnızca elektriksel kuvvetin etkisinde kalan bu parçacıklar için aşağıdakilerden hangisi doğrudur?`,
    secenekler: {
      A: 'Kuvvetlerin büyüklüğü eşit, elektronun ivmesi daha büyüktür.',
      B: 'Kuvvetlerin büyüklüğü eşit, protonun ivmesi daha büyüktür.',
      C: 'Protona etkiyen kuvvet daha büyük, ivmeleri ise eşittir.',
      D: 'İkisi de alanla aynı yönde hızlanır ve ivmeleri birbirine eşit olur.',
      E: 'Elektrona etkiyen kuvvet daha büyüktür, ivmesi de büyüktür.',
    },
    dogruCevap: 'A',
    adimAdimCozum: [
      r`Kuvvet $F = qE$'dir; yük büyüklükleri eşit, alan aynı olduğundan iki parçacığa etkiyen kuvvetlerin büyüklükleri eşittir (C ve E yanlış).`,
      r`Proton alan yönünde, elektron alana zıt yönde kuvvet alır; ikisi aynı yönde hızlanmaz (D yanlış).`,
      r`$a = \dfrac{F}{m}$; kuvvetler eşitken kütlesi yaklaşık 1840 kat küçük olan elektronun ivmesi o kadar büyüktür. $\Rightarrow$ Cevap **A**`,
    ],
  },
  {
    id: '11-T2A-11',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Elektrostatik filtrede yüklü parçacığa etkiyen elektriksel kuvveti hesaplayıp ağırlıkla karşılaştırarak yorumlar.',
    zorluk: 'Orta',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Baca Filtresi:** Bir termik santralin bacasına yerleştirilen elektrostatik filtrede, duman içindeki kül parçacıkları önce negatif yükle yüklenir; ardından düşey iki metal levha arasındaki, büyüklüğü $5 \cdot 10^{5}\ \text{N/C}$ olan yatay ve düzgün elektriksel alandan geçer. Parçacıklardan birinin yükü $-4 \cdot 10^{-15}\ \text{C}$, kütlesi $1 \cdot 10^{-12}\ \text{kg}$'dır. ($g = 10\ \text{m/s}^2$)

a) Parçacığa etkiyen elektriksel kuvvetin büyüklüğünü hesaplayınız.
b) Alan pozitif levhadan negatif levhaya doğru olduğuna göre parçacık hangi levhaya sürüklenir? Nedenini açıklayınız.
c) Elektriksel kuvveti parçacığın ağırlığıyla karşılaştırınız ve filtrenin kül tutmada neden etkili olduğunu yorumlayınız.`,
    dogruCevap: r`a) $F = 2 \cdot 10^{-9}\ \text{N}$ · b) Pozitif levhaya; negatif yüke alana zıt yönde kuvvet etkir. · c) $F/G = 200$; elektriksel kuvvet ağırlığın 200 katıdır.`,
    adimAdimCozum: [
      r`a) $F = |q|\,E = (4 \cdot 10^{-15})(5 \cdot 10^{5}) = 2 \cdot 10^{-9}\ \text{N}$`,
      r`b) Pozitif yüke alan yönünde, negatif yüke alana zıt yönde kuvvet etkir; negatif yüklü kül parçacığı pozitif levhaya doğru çekilir ve orada birikir.`,
      r`c) Ağırlık: $G = mg = (1 \cdot 10^{-12})(10) = 1 \cdot 10^{-11}\ \text{N}$; oran $\dfrac{F}{G} = \dfrac{2 \cdot 10^{-9}}{10^{-11}} = 200$.`,
      'Elektriksel kuvvet ağırlıktan çok büyük olduğundan parçacıklar baca gazıyla yukarı kaçmadan kısa sürede levhaya ulaşır; filtre bu yüzden etkilidir.',
    ],
    rubrik: [
      { olcut: 'a) F = qE bağıntısını kullanıp 2·10⁻⁹ N sonucunu birimiyle bulur', puan: 3 },
      { olcut: 'b) Negatif yüke alana zıt yönde kuvvet etkidiğini belirterek pozitif levhayı seçer', puan: 3 },
      { olcut: 'c) Ağırlığı hesaplar (10⁻¹¹ N) ve oranı 200 olarak bulur', puan: 2 },
      { olcut: 'c) Kuvvetin ağırlığa göre çok büyük olmasını filtrenin etkinliğiyle ilişkilendirir', puan: 2 },
    ],
  },
  {
    id: '11-T2A-12',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Yüklü paralel levhalar arasındaki düzgün elektriksel alanın özelliklerini yorumlar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekildeki yatay paralel metal levhalardan üstteki pozitif, alttaki negatif yüklüdür. K noktası üst levhaya, L noktası alt levhaya yakındır ve her iki nokta da levhaların kenarlarından uzaktadır.

I. Levhalar arasındaki bölgede alanın büyüklüğü ve yönü her noktada aynıdır.
II. Alan çizgileri negatif yüklü levhadan çıkıp pozitif yüklü levhada sonlanır.
III. K ve L noktalarına konan özdeş yüklere etkiyen elektriksel kuvvetler eşittir.

Bu yargılardan hangileri doğrudur?`,
    svgDiyagram: svg(
      380, 200, 'Yatay paralel levhalar ve aralarındaki K, L noktaları',
      '<rect x="60" y="30" width="260" height="8" class="f-v" stroke-width="1.5"/>',
      '<rect x="60" y="162" width="260" height="8" class="f-i" stroke-width="1.5"/>',
      yazi(190, 22, '+  +  +  +  +  +  +', { hiza: 'middle', boy: 14 }),
      yazi(190, 190, '−  −  −  −  −  −  −', { hiza: 'middle', boy: 14 }),
      ok(100, 42, 100, 158, 't', 2),
      ok(160, 42, 160, 158, 't', 2),
      ok(220, 42, 220, 158, 't', 2),
      ok(280, 42, 280, 158, 't', 2),
      '<circle cx="130" cy="70" r="4" class="f-t" stroke="none"/>',
      yazi(137, 66, 'K', { boy: 14 }),
      '<circle cx="250" cy="134" r="4" class="f-t" stroke="none"/>',
      yazi(257, 130, 'L', { boy: 14 }),
    ),
    secenekler: { A: 'Yalnız I', B: 'Yalnız III', C: 'I ve III', D: 'II ve III', E: 'I, II ve III' },
    dogruCevap: 'C',
    adimAdimCozum: [
      'I. Zıt yüklü geniş paralel levhalar arasında (kenarlardan uzakta) alan düzgündür: çizgiler paralel ve eşit aralıklıdır. Doğru.',
      'II. Alan çizgileri pozitif levhadan çıkıp negatif levhada sonlanır; burada yukarıdan aşağıya doğrudur. Yanlış.',
      r`III. Alan düzgün olduğundan $F = qE$ kuvveti, yükün levhalardan hangisine yakın olduğundan bağımsızdır. Doğru.`,
      r`I ve III doğrudur. $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '11-T2A-13',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Aynı doğru üzerindeki üç yükten ortadakine etki eden bileşke Coulomb kuvvetini yön dikkate alarak hesaplar.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Yalıtkan yatay bir ray üzerinde K, L ve M küreciklerinin yükleri ve aralarındaki uzaklıklar şekilde verilmiştir. K ve M kürecikleri sabitlenmiş, L ise serbesttir.

L küreciğine K ve M'nin uyguladığı bileşke elektriksel kuvvetin büyüklüğü kaç N'dir? ($k = 9 \cdot 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$)`,
    svgDiyagram: svg(
      420, 160, 'Ray üzerindeki K, L ve M yükleri',
      cizgi(20, 80, 400, 80, { k: 3 }),
      yuk(60, 80, 'K'),
      yuk(160, 80, 'L'),
      yuk(360, 80, 'M'),
      yazi(60, 44, '+3 μC', { hiza: 'middle', boy: 13 }),
      yazi(160, 44, '−2 μC', { hiza: 'middle', boy: 13 }),
      yazi(360, 44, '+6 μC', { hiza: 'middle', boy: 13 }),
      olcu(60, 130, 160, 130, '30 cm', { dy: -8 }),
      olcu(160, 130, 360, 130, '60 cm', { dy: -8 }),
    ),
    secenekler: { A: r`$0{,}1$`, B: r`$0{,}2$`, C: r`$0{,}3$`, D: r`$0{,}6$`, E: r`$0{,}9$` },
    dogruCevap: 'C',
    hesap: '9e9 * 3e-6 * 2e-6 / 0.3**2 - 9e9 * 6e-6 * 2e-6 / 0.6**2',
    adimAdimCozum: [
      r`K ile L zıt işaretlidir, K L'yi kendine (sola) çeker: $F_K = 9 \cdot 10^9 \cdot \dfrac{(3 \cdot 10^{-6})(2 \cdot 10^{-6})}{0{,}09} = 0{,}6\ \text{N}$`,
      r`M ile L de zıt işaretlidir, M L'yi sağa çeker: $F_M = 9 \cdot 10^9 \cdot \dfrac{(6 \cdot 10^{-6})(2 \cdot 10^{-6})}{0{,}36} = 0{,}3\ \text{N}$`,
      r`Kuvvetler zıt yönlü: $F_{net} = 0{,}6 - 0{,}3 = 0{,}3\ \text{N}$ (sola). Kuvvetleri toplayan öğrenci $0{,}9$ bulur. $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '11-T2A-14',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Günlük hayattaki durumlar arasından Faraday kafesi etkisiyle açıklanabilecek olanı ayırt eder.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Aşağıdaki durumlardan hangisi, iletken bir kabuğun içindeki bölgenin dış elektriksel alanlardan korunması (Faraday kafesi etkisi) ile açıklanır?`,
    secenekler: {
      A: 'Plastik saplı tornavidanın elektrik çarpmasını önlemesi',
      B: 'Metal kabinli asansörde cep telefonunun çekmemesi',
      C: 'Paratonerin yıldırımı toprağa güvenle iletmesi',
      D: 'Kuru havada taranan saçların tarağa doğru kabarması',
      E: 'Yünlü kumaşa sürtülen balonun duvara yapışıp kalması',
    },
    dogruCevap: 'B',
    adimAdimCozum: [
      'Faraday kafesi: kapalı iletken bir kabuk, dışarıdaki elektriksel alanı (ve elektromanyetik dalgaları) iç bölgeye geçirmez.',
      'Metal asansör kabini bir Faraday kafesi gibi davranır; baz istasyonundan gelen sinyaller içeriye zayıflayarak ulaşır, telefon çekmez.',
      r`Tornavida sapı yalıtkanlıkla, paratoner topraklamayla, saç ve balon örnekleri ise sürtünmeyle elektriklenme ve etkiyle kutuplanmayla açıklanır. $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '11-T2A-15',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Düzgün alanda ipe asılı yüklü kürenin dengesinden elektriksel alanın büyüklüğünü hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Yalıtkan bir ipe bağlı, kütlesi $40\ \text{g}$ ve yükü $+6\ \mu\text{C}$ olan küçük bir küre, yatay ve düzgün bir elektriksel alanın içinde şekildeki gibi ip düşeyle $37^\circ$ açı yapacak biçimde dengede kalıyor.

Buna göre elektriksel alanın büyüklüğü kaç $10^{4}\ \text{N/C}$'dir? ($g = 10\ \text{m/s}^2$, $\sin 37^\circ = 0{,}6$, $\cos 37^\circ = 0{,}8$)`,
    svgDiyagram: svg(
      340, 240, 'Düzgün yatay alanda ipe asılı yüklü küre',
      cizgi(100, 30, 240, 30, { k: 3 }),
      '<path d="M110 30 l10 -10 M130 30 l10 -10 M150 30 l10 -10 M170 30 l10 -10 M190 30 l10 -10 M210 30 l10 -10 M230 30 l10 -10" stroke-width="1.5"/>',
      cizgi(170, 30, 170, 180, { sinif: 'k', k: 1.5 }),
      cizgi(170, 30, 260, 150, { k: 2 }),
      '<path d="M170 70 A40 40 0 0 0 194 62" stroke-width="1.5" fill="none"/>',
      yazi(178, 92, '37°', { boy: 13 }),
      yuk(260, 150, '+q', 16),
      ok(40, 205, 300, 205, 'i', 2),
      ok(40, 228, 300, 228, 'i', 2),
      yazi(312, 222, 'E'),
    ),
    secenekler: { A: '$4$', B: '$5$', C: '$6$', D: '$8$', E: '$10$' },
    dogruCevap: 'B',
    hesap: '0.04 * 10 * (0.6 / 0.8) / 6e-6 / 1e4',
    adimAdimCozum: [
      r`Küreye ağırlık ($mg$, aşağı), elektriksel kuvvet ($qE$, alan yönünde) ve ip gerilmesi ($T$) etki eder; denge için $T\cos 37^\circ = mg$ ve $T\sin 37^\circ = qE$.`,
      r`Taraf tarafa bölünürse $qE = mg\,\tan 37^\circ = (0{,}04)(10)\dfrac{0{,}6}{0{,}8} = 0{,}3\ \text{N}$`,
      r`$E = \dfrac{0{,}3}{6 \cdot 10^{-6}} = 5 \cdot 10^{4}\ \text{N/C}$ (tan yerine sin kullanan öğrenci 4 bulur) $\Rightarrow$ Cevap **B**`,
    ],
  },
  {
    id: '11-T2A-16',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Alan çizgilerinin yönü ve sayısından yüklerin işaretini ve büyüklüklerini karşılaştırır.',
    zorluk: 'Orta',
    soruTipi: 'coktan_secmeli',
    metin: r`Şekilde K ve L noktasal yüklerinin çevresindeki elektriksel alan çizgileri gösterilmiştir. Çizim, her yükten çıkan ya da yüke giren çizgi sayısı yük büyüklüğüyle orantılı olacak biçimde yapılmıştır.

Buna göre K ve L yükleri için aşağıdakilerden hangisi doğrudur?`,
    svgDiyagram: svg(
      410, 220, 'K ve L yüklerinin alan çizgileri',
      [0, 1, 2, 3, 4, 5, 6, 7]
        .map((i) => {
          const a = (i * Math.PI) / 4
          return ok(110 + 22 * Math.cos(a), 110 + 22 * Math.sin(a), 110 + 72 * Math.cos(a), 110 + 72 * Math.sin(a), 'v', 2)
        })
        .join(''),
      [0, 1, 2, 3]
        .map((i) => {
          const a = (i * Math.PI) / 2
          return ok(300 + 72 * Math.cos(a), 110 + 72 * Math.sin(a), 300 + 22 * Math.cos(a), 110 + 22 * Math.sin(a), 'i', 2)
        })
        .join(''),
      yuk(110, 110, 'K'),
      yuk(300, 110, 'L'),
    ),
    secenekler: {
      A: 'K pozitif, L negatif; K\'nin yükü L\'ninkinin yarısıdır.',
      B: 'K negatif, L pozitif; K\'nin yükü L\'ninkinin 2 katıdır.',
      C: 'K pozitif, L negatif; K\'nin yükü L\'ninkinin 2 katıdır.',
      D: 'K ve L pozitif; K\'nin yükü L\'ninkinin 2 katıdır.',
      E: 'K negatif, L pozitif; K\'nin yükü L\'ninkinin yarısıdır.',
    },
    dogruCevap: 'C',
    adimAdimCozum: [
      'Alan çizgileri pozitif yükten dışarı çıkar, negatif yüke girer. K\'de oklar dışa, L\'de içe doğrudur; K pozitif, L negatiftir.',
      'K\'den 8, L\'ye 4 çizgi bağlanmıştır. Çizgi sayısı yük büyüklüğüyle orantılı olduğundan |q_K| = 2|q_L| olur.',
      r`İşaretler ve oran birlikte değerlendirildiğinde doğru yargı C'dir. $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '11-T2A-17',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Karenin köşelerindeki yüklerin merkezde oluşturduğu bileşke alanı ve bu alanda yüke etkiyen kuvveti hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Kare Düzenek:** Bir fizik kulübü, kenar uzunluğu $30\ \text{cm}$ olan kare biçimli yalıtkan bir çerçevenin köşelerine şekildeki gibi A ve B'ye $+1\ \mu\text{C}$, C ve D'ye $-1\ \mu\text{C}$ yükler yerleştiriyor. O noktası karenin merkezidir. ($k = 9 \cdot 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$, $\sqrt{2} \approx 1{,}41$)

a) Her bir yükün O noktasında oluşturduğu alanın büyüklüğünü hesaplayınız.
b) O noktasındaki bileşke elektriksel alanın büyüklüğünü ve yönünü bulunuz.
c) O noktasına $-2\ \text{nC}$ yüklü bir toz tanesi konursa ona etkiyen elektriksel kuvvetin büyüklüğü ve yönü ne olur?
d) C ve D'deki yükler de $+1\ \mu\text{C}$ yapılsaydı O'daki bileşke alan ne olurdu? Gerekçelendiriniz.`,
    svgDiyagram: svg(
      340, 262, 'Kare çerçevenin köşelerindeki yükler ve merkez O',
      '<rect x="90" y="50" width="160" height="160" fill="none" stroke-width="1.5"/>',
      cizgi(90, 50, 250, 210, { sinif: 'k', k: 1 }),
      cizgi(250, 50, 90, 210, { sinif: 'k', k: 1 }),
      yuk(90, 50, '+q'),
      yuk(250, 50, '+q'),
      yuk(250, 210, '−q'),
      yuk(90, 210, '−q'),
      yazi(62, 40, 'A', { hiza: 'end' }),
      yazi(278, 40, 'B'),
      yazi(278, 222, 'C'),
      yazi(62, 222, 'D', { hiza: 'end' }),
      '<circle cx="170" cy="130" r="4" class="f-t" stroke="none"/>',
      yazi(188, 135, 'O', { boy: 14 }),
      olcu(90, 246, 250, 246, '30 cm', { dy: -8 }),
    ),
    dogruCevap: r`a) $2 \cdot 10^{5}\ \text{N/C}$ · b) $4\sqrt{2} \cdot 10^{5} \approx 5{,}64 \cdot 10^{5}\ \text{N/C}$, AB kenarından DC kenarına dik · c) $\approx 1{,}13 \cdot 10^{-3}\ \text{N}$, AB kenarına doğru · d) Sıfır`,
    adimAdimCozum: [
      r`a) Köşenin merkeze uzaklığı $r = \dfrac{0{,}3\sqrt{2}}{2}$, $r^2 = 0{,}045\ \text{m}^2$. $E_1 = 9 \cdot 10^9 \cdot \dfrac{10^{-6}}{0{,}045} = 2 \cdot 10^{5}\ \text{N/C}$`,
      r`b) A ve B'nin alanları O'dan dışarı (aşağı çapraz), C ve D'nin alanları yüklere doğru (yine aşağı çapraz) yönelir. Yatay bileşenler birbirini yok eder; düşey bileşenler toplanır: $E = 4 E_1 \cos 45^\circ = 4 \cdot 2 \cdot 10^{5} \cdot \dfrac{\sqrt{2}}{2} = 4\sqrt{2} \cdot 10^{5} \approx 5{,}64 \cdot 10^{5}\ \text{N/C}$, AB'den DC'ye doğru.`,
      r`c) $F = |q|E = (2 \cdot 10^{-9})(4\sqrt{2} \cdot 10^{5}) = 8\sqrt{2} \cdot 10^{-4} \approx 1{,}13 \cdot 10^{-3}\ \text{N}$; yük negatif olduğundan kuvvet alana zıt, yani AB kenarına doğrudur.`,
      r`d) Dört eşit pozitif yükün merkezdeki alanları karşılıklı köşeler için eşit büyüklükte ve zıt yönlüdür; simetri nedeniyle bileşke alan sıfır olur.`,
    ],
    rubrik: [
      { olcut: 'a) Köşe–merkez uzaklığını bulup tek yükün alanını 2·10⁵ N/C olarak hesaplar', puan: 2 },
      { olcut: 'b) Dört alanın yönlerini doğru çizer, yatay bileşenlerin sadeleştiğini gösterir', puan: 2 },
      { olcut: 'b) Bileşke alanı 4√2·10⁵ N/C olarak bulur ve yönünü belirtir', puan: 2 },
      { olcut: 'c) F = qE ile kuvveti hesaplar ve negatif yük için yönü alana zıt verir', puan: 2 },
      { olcut: 'd) Simetriden bileşke alanın sıfır olduğunu gerekçelendirir', puan: 2 },
    ],
  },
  {
    id: '11-T2A-18',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Düzgün elektriksel alanda asılı kalan yağ damlasının yükünü kuvvet dengesinden hesaplar.',
    zorluk: 'Temel',
    soruTipi: 'coktan_secmeli',
    metin: r`Millikan'ın yağ damlası deneyini canlandıran bir düzenekte, yatay iki metal levha arasında büyüklüğü $2 \cdot 10^{4}\ \text{N/C}$ olan düşey ve düzgün bir elektriksel alan oluşturuluyor. Kütlesi $3{,}2 \cdot 10^{-15}\ \text{kg}$ olan bir yağ damlası levhalar arasında hareketsiz asılı kalıyor.

Damlanın yükü fazla elektronlardan kaynaklandığına göre damlada kaç fazla elektron vardır? ($g = 10\ \text{m/s}^2$, $e = 1{,}6 \cdot 10^{-19}\ \text{C}$; havanın kaldırma kuvveti ve direnci önemsiz)`,
    secenekler: { A: '$1$', B: '$2$', C: '$5$', D: '$8$', E: '$10$' },
    dogruCevap: 'E',
    hesap: '3.2e-15 * 10 / 2e4 / 1.6e-19',
    adimAdimCozum: [
      r`Damla hareketsiz olduğundan yukarı yönlü elektriksel kuvvet ağırlığı dengeler: $qE = mg$. Damla negatif yüklü olduğundan alan aşağı yönlüdür.`,
      r`$q = \dfrac{mg}{E} = \dfrac{(3{,}2 \cdot 10^{-15})(10)}{2 \cdot 10^{4}} = 1{,}6 \cdot 10^{-18}\ \text{C}$`,
      r`Fazla elektron sayısı: $n = \dfrac{q}{e} = \dfrac{1{,}6 \cdot 10^{-18}}{1{,}6 \cdot 10^{-19}} = 10$ ($g$ çarpanını unutan öğrenci 1 bulur) $\Rightarrow$ Cevap **E**`,
    ],
  },
  {
    id: '11-T2A-19',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Aynı noktadan asılı iki yüklü kürenin dengesinde geometri ve Coulomb yasasını birlikte kullanarak yük büyüklüğünü hesaplar.',
    zorluk: 'İleri',
    soruTipi: 'coktan_secmeli',
    metin: r`Kütlelerinin her biri $30\ \text{g}$ olan özdeş iki küçük küre, tavandaki aynı O noktasına bağlı $50\ \text{cm}$ uzunluğundaki yalıtkan iplerle asılmıştır. Kürelere eşit miktarda yük verildiğinde küreler birbirini iterek her ip düşeyle $37^\circ$ açı yapacak biçimde şekildeki gibi dengeye geliyor.

Buna göre kürelerden her birinin yükü kaç $\mu\text{C}$'dir? ($g = 10\ \text{m/s}^2$, $\sin 37^\circ = 0{,}6$, $\cos 37^\circ = 0{,}8$, $k = 9 \cdot 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$)`,
    svgDiyagram: svg(
      340, 200, 'Aynı noktadan iplerle asılı, birbirini iten iki yüklü küre',
      cizgi(100, 30, 240, 30, { k: 3 }),
      '<path d="M110 30 l10 -10 M130 30 l10 -10 M150 30 l10 -10 M170 30 l10 -10 M190 30 l10 -10 M210 30 l10 -10 M230 30 l10 -10" stroke-width="1.5"/>',
      cizgi(170, 30, 170, 175, { sinif: 'k', k: 1.5 }),
      cizgi(170, 30, 80, 150, { k: 2 }),
      cizgi(170, 30, 260, 150, { k: 2 }),
      '<path d="M146 62 A40 40 0 0 0 170 70" stroke-width="1.5" fill="none"/>',
      '<path d="M170 70 A40 40 0 0 0 194 62" stroke-width="1.5" fill="none"/>',
      yazi(164, 96, '37°', { boy: 13, hiza: 'end' }),
      yazi(176, 96, '37°', { boy: 13 }),
      yazi(228, 86, '50 cm', { boy: 13 }),
      yazi(170, 15, 'O', { boy: 14, hiza: 'middle' }),
      yuk(80, 150, 'q', 15),
      yuk(260, 150, 'q', 15),
    ),
    secenekler: { A: r`$1{,}5$`, B: r`$2{,}5$`, C: '$3$', D: r`$4{,}5$`, E: '$6$' },
    dogruCevap: 'C',
    hesap: 'sqrt(0.03 * 10 * 0.75 * 0.6**2 / 9e9) / 1e-6',
    adimAdimCozum: [
      r`Küreler arasındaki uzaklık: $d = 2L\sin 37^\circ = 2 \cdot 0{,}5 \cdot 0{,}6 = 0{,}6\ \text{m}$`,
      r`Bir küre için denge: $T\cos 37^\circ = mg$, $T\sin 37^\circ = F$ $\Rightarrow$ $F = mg\tan 37^\circ = (0{,}03)(10)\dfrac{0{,}6}{0{,}8} = 0{,}225\ \text{N}$`,
      r`Coulomb yasası: $F = k\dfrac{q^2}{d^2} \Rightarrow q^2 = \dfrac{0{,}225 \cdot 0{,}36}{9 \cdot 10^9} = 9 \cdot 10^{-12}\ \text{C}^2$`,
      r`$q = 3 \cdot 10^{-6}\ \text{C} = 3\ \mu\text{C}$ (uzaklığı $L\sin 37^\circ$ alan öğrenci $1{,}5$ bulur) $\Rightarrow$ Cevap **C**`,
    ],
  },
  {
    id: '11-T2A-20',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Deneme yüküne etkiyen kuvvetten elektriksel alanı ve alanı oluşturan yükü hesaplar; alanın deneme yükünden bağımsız olduğunu açıklar.',
    zorluk: 'Temel',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Deneme Yüküyle Ölçüm:** Elif, yalıtkan bir ayağa sabitlenmiş Q yüklü küçük bir kürenin çevresindeki elektriksel alanı incelemek istiyor. Kürenin merkezinden $10\ \text{cm}$ uzaktaki P noktasına $+2\ \text{nC}$ yüklü küçük bir deneme yükü getiriyor ve bu yükün küreden uzaklaşma yönünde $3{,}6 \cdot 10^{-3}\ \text{N}$ büyüklüğünde kuvvetle itildiğini ölçüyor. ($1\ \text{nC} = 10^{-9}\ \text{C}$, $k = 9 \cdot 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$)

a) P noktasındaki elektriksel alanın büyüklüğünü ve yönünü bulunuz.
b) Kürenin yükünün büyüklüğünü hesaplayınız ve işaretini gerekçesiyle belirtiniz.
c) Elif deneme yükünü kaldırıp P noktasına $-4\ \text{nC}$ yüklü bir cisim koysaydı P'deki alan ve bu cisme etkiyen kuvvet (büyüklük ve yön) ne olurdu?`,
    dogruCevap: r`a) $1{,}8 \cdot 10^{6}\ \text{N/C}$, küreden dışarı · b) $Q = +2\ \mu\text{C}$ · c) Alan değişmez; $F = 7{,}2 \cdot 10^{-3}\ \text{N}$, küreye doğru`,
    adimAdimCozum: [
      r`a) $E = \dfrac{F}{q_0} = \dfrac{3{,}6 \cdot 10^{-3}}{2 \cdot 10^{-9}} = 1{,}8 \cdot 10^{6}\ \text{N/C}$; pozitif deneme yükü alan yönünde kuvvet aldığından alan küreden dışarı doğrudur.`,
      r`b) $E = k\dfrac{Q}{r^2} \Rightarrow Q = \dfrac{E\,r^2}{k} = \dfrac{(1{,}8 \cdot 10^{6})(0{,}1)^2}{9 \cdot 10^9} = 2 \cdot 10^{-6}\ \text{C} = 2\ \mu\text{C}$. Pozitif deneme yükü itildiği için Q pozitiftir.`,
      r`c) Alan, kaynağı olan Q yüküne ve uzaklığa bağlıdır; deneme yükü değişince değişmez: yine $1{,}8 \cdot 10^{6}\ \text{N/C}$, dışarı doğru.`,
      r`Yeni kuvvet: $F = |q|E = (4 \cdot 10^{-9})(1{,}8 \cdot 10^{6}) = 7{,}2 \cdot 10^{-3}\ \text{N}$; yük negatif olduğundan kuvvet alana zıt, yani küreye doğrudur (çekme).`,
    ],
    rubrik: [
      { olcut: 'a) E = F/q bağıntısıyla alanı 1,8·10⁶ N/C bulur ve yönünü küreden dışarı olarak belirtir', puan: 3 },
      { olcut: 'b) E = kQ/r² bağıntısından Q = 2 μC bulur ve itme kuvvetinden işaretin pozitif olduğunu gerekçelendirir', puan: 3 },
      { olcut: 'c) Alanın deneme yükünden bağımsız olduğunu, değişmediğini açıklar', puan: 2 },
      { olcut: 'c) Yeni kuvveti 7,2·10⁻³ N bulur ve yönünü küreye doğru verir', puan: 2 },
    ],
  },
  {
    id: '11-T2A-21',
    sinif: 11,
    tema: TEMA,
    ogrenmeCiktisi: 'FİZ.11.2.1',
    surecBileseni: 'Eşkenar üçgenin köşelerindeki yüklerden birine etkiyen bileşke kuvveti ve o noktadaki alanı vektörel olarak analiz eder.',
    zorluk: 'İleri',
    soruTipi: 'acik_uclu_senaryo',
    metin: r`**Senaryo – Üçgen Çerçeve:** Kenar uzunluğu $30\ \text{cm}$ olan eşkenar üçgen biçimli yalıtkan bir çerçevenin K köşesine $+2\ \mu\text{C}$, L köşesine $-2\ \mu\text{C}$ yükler sabitlenmiştir. Üçüncü köşe olan M'ye ise $+2\ \mu\text{C}$ yüklü küçük bir boncuk yerleştirilmiştir. ($k = 9 \cdot 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$, $\sqrt{3} \approx 1{,}7$)

a) K ve L'deki yüklerin M'deki boncuğa uyguladığı kuvvetlerin büyüklüklerini hesaplayınız ve yönlerini belirtiniz.
b) Boncuğa etkiyen bileşke elektriksel kuvvetin büyüklüğünü ve yönünü bulunuz.
c) L'deki yük $+2\ \mu\text{C}$ yapılırsa boncuğa etkiyen bileşke kuvvetin büyüklüğü ve yönü ne olur?
d) İlk düzenekte K ve L yüklerinin M noktasında oluşturduğu bileşke elektriksel alanın büyüklüğünü bulunuz.`,
    svgDiyagram: svg(
      380, 262, 'Eşkenar üçgenin köşelerindeki K, L ve M yükleri',
      '<polygon points="90,213 290,213 190,40" fill="none" stroke-width="1.5"/>',
      yuk(90, 213, 'K'),
      yuk(290, 213, 'L'),
      yuk(190, 40, 'M'),
      yazi(64, 218, '+2 μC', { hiza: 'end', boy: 13 }),
      yazi(316, 218, '−2 μC', { boy: 13 }),
      yazi(216, 45, '+2 μC', { boy: 13 }),
      olcu(90, 246, 290, 246, '30 cm', { dy: -8 }),
    ),
    dogruCevap: r`a) Her biri $0{,}4\ \text{N}$; K iter, L çeker · b) $0{,}4\ \text{N}$, KL'ye paralel, K'den L'ye doğru · c) $0{,}4\sqrt{3} \approx 0{,}68\ \text{N}$, KL'ye dik ve ondan uzaklaşan yönde · d) $2 \cdot 10^{5}\ \text{N/C}$`,
    adimAdimCozum: [
      r`a) Uzaklıklar eşit ($0{,}3\ \text{m}$) ve yük büyüklükleri eşit olduğundan $F_K = F_L = 9 \cdot 10^9 \cdot \dfrac{(2 \cdot 10^{-6})(2 \cdot 10^{-6})}{0{,}09} = 0{,}4\ \text{N}$. K boncuğu iter (K'den M'ye doğru), L boncuğu çeker (M'den L'ye doğru).`,
      r`b) İki kuvvet arasındaki açı $120^\circ$'dir. Düşey bileşenler $0{,}4\sin 60^\circ$ olup zıt yönlüdür ve birbirini yok eder; yatay bileşenler toplanır: $F_{net} = 2 \cdot 0{,}4 \cos 60^\circ = 0{,}4\ \text{N}$, KL'ye paralel ve K'den L'ye doğru.`,
      r`c) İki kuvvet de itme olur, aralarındaki açı $60^\circ$'dir. Yatay bileşenler birbirini yok eder: $F_{net} = 2 \cdot 0{,}4 \cos 30^\circ = 0{,}4\sqrt{3} \approx 0{,}68\ \text{N}$; KL kenarına dik ve ondan uzaklaşan yönde.`,
      r`d) $E_M = \dfrac{F_{net}}{q} = \dfrac{0{,}4}{2 \cdot 10^{-6}} = 2 \cdot 10^{5}\ \text{N/C}$; boncuk pozitif olduğundan alan kuvvetle aynı yönde, K'den L'ye doğrudur.`,
    ],
    rubrik: [
      { olcut: 'a) Coulomb yasasıyla her iki kuvveti 0,4 N bulur, itme/çekme yönlerini doğru belirtir', puan: 2 },
      { olcut: 'b) Kuvvetler arası açıyı 120° belirler, bileşenleri ayırarak bileşkeyi 0,4 N ve yönünü KL boyunca bulur', puan: 3 },
      { olcut: 'c) Yeni durumda açıyı 60° alıp bileşkeyi 0,4√3 ≈ 0,68 N bulur ve yönünü KL\'ye dik verir', puan: 3 },
      { olcut: 'd) E = F/q ile M\'deki alanı 2·10⁵ N/C bulur', puan: 2 },
    ],
  },
]
