# KRG Fizik · Soru Yazım Rehberi (alt ajanlar ve yeni soru ekleyenler için)

Bu proje bir fizik öğretmenine (Tuba Hocam) hediye edilen, akıllı tahtada kullanılan bir soru bankasıdır.
Sorular **deneyimli bir fizik öğretmeninin** gözünden geçecek: şablon/klon soru, fizik hatası veya özensiz Türkçe kabul edilmez.

## 1. Sana verilen dosya
- Yalnızca görevde adı verilen tema dosyasını düzenle (`src/data/sorular/sinifX/temaY.ts`). Başka dosyaya, git'e, package.json'a dokunma.
- **Asla** `npm run build`, `vite`, `npm install`, dev server veya tarayıcı çalıştırma. Tek izinli kontrol komutu:
  ```
  python -X utf8 scripts/soru_denetle.py --dosya src/data/sorular/sinifX/temaY.ts
  ```
  Bu komut EXIT 0 verene kadar düzelt. (Diğer ajanların dosyaları yazılırken içe aktarılamazsa denetçi onları atlar; sorun değil.)
- Dosyadaki mevcut sorular (id'si `9-3` gibi olanlar) **aynen kalır ve dosyanın başında durur**; yenilerini arkasına ekle.
- Dosya büyük olacağı için soruları 4–6'lık partiler hâlinde `Edit` ile dizinin sonuna ekle (tek dev Write yapma).

## 2. Şema (`src/data/tipler.ts`)
```ts
{
  id: '9-T2-07',                 // dosya öneki + iki haneli sıra (01, 02, ...). Önek görevde/plan dosyasında yazar.
  sinif: 9,
  tema: TEMA,                    // dosyanın başındaki const TEMA
  ogrenmeCiktisi: 'FİZ.9.2.3',   // yalnızca bu dosyaya izin verilen kodlar (src/data/mufredat.ts)
  surecBileseni: 'Maarif tarzı, ölçülebilir fiil ile biten tek cümle (… hesaplar / yorumlar / karşılaştırır).',
  zorluk: 'Temel' | 'Orta' | 'İleri',
  soruTipi: 'coktan_secmeli' | 'acik_uclu_senaryo',
  metin: r`...`,                 // String.raw; $...$ KaTeX, **kalın**, \n satır, boş satır = paragraf
  svgDiyagram?: svg(...),        // src/data/cizim.ts yardımcıları
  secenekler?: { A, B, C, D, E },// yalnızca çoktan seçmeli
  dogruCevap: 'C',               // ÇS: harf · açık uçlu: kısa cevap özeti (KaTeX olabilir)
  adimAdimCozum: [r`...`, ...],  // 3–5 adım; ÇS'de son adım "... $\Rightarrow$ Cevap **C**" ile biter
  hesap?: '2*10*0.5/2',          // sayısal ÇS'de ZORUNLU: doğru sonucu veren aritmetik (sqrt, sin(derece), cos, pi, log10)
  rubrik?: [{ olcut, puan }],    // açık uçluda ZORUNLU, puanların toplamı tam 10
}
```
Dosyanın başındaki import satırını kullandığın yardımcılara göre güncelle (kullanılmayan import TypeScript hatasıdır).

## 3. Cevap harfi planı (ÇOK KRİTİK)
- `scripts/soru_plani.json` içinde dosyanın `yeni_harfler` dizisi var. Yeni çoktan seçmeli soruların doğru cevapları **dosyadaki sırasıyla tam olarak bu harfler** olmalı. Açık uçlu sorular araya serbestçe girebilir (sıralamayı etkilemez).
- Doğru harfi elde etmek için sayısal şıkların sırasını ASLA bozma. Cevap 20 ve harf A ise şıklar `20, 25, 30, 40, 50`; harf E ise `4, 8, 12, 16, 20` gibi kur.
- Sayısal şıklar: hepsi `$...$` içinde yalnızca sayı (birim soru kökünde), kesin artan veya azalan, 5'i farklı. Ondalık: `$2{,}5$`, kesir `$\dfrac{20}{3}$`, kök `$5\sqrt{3}$`, üslü `$2 \cdot 10^{4}$`.
  Doğru şıkkın metni (ör. `2{,}5`) çözüm adımlarında aynen geçmeli. Çeldiriciler tipik öğrenci hatalarından gelsin (birim çevirmeme, karesini almama, yönü unutma, sürtünmeyi ihmal etme...).
- Öncüllü sorular: metinde satır başında `I. ...`, `II. ...`, `III. ...` olsun; şıklar yalnızca `Yalnız I`, `I ve II`, `I, II ve III` biçiminde ve **ÖSYM sırasında**: önce tekliler, sonra ikililer, en son üçlü; her grup kendi içinde sıralı
  (örn. `Yalnız I · Yalnız II · I ve II · I ve III · I, II ve III`). Hangi harfin doğru olacağını öncüllerin doğruluğunu kurgulayarak ayarla.
- Sözel (metin) şıklar: beşi benzer uzunlukta ve ciddiyette; yanlışlar gerçek kavram yanılgılarına dayansın. Dosyadaki sözel soruların en fazla %25'inde doğru şık en uzun şık olabilir. Doğruyu parantezli açıklamalarla uzatma.

## 4. Kalite kuralları
- **Klon yasağı:** Aynı cümle kalıbında sayı değiştirerek soru üretme. Her soru farklı bir fiziksel kurgu ve bağlam taşısın. Denetçi, sayılar ve LaTeX silindikten sonra kelime 3-gram Jaccard benzerliği %60'ı aşan çiftleri reddeder; ortak uzun giriş cümleleri de bu eşiği aşar.
- Bağlam çeşitliliği (dosya içinde dengeli): sayısal işlem · grafik okuma/yorum (hız–zaman, kuvvet–uzanım, V–I, Ek–f ...) · I–II–III öncüllü kavramsal analiz · deney düzeneği yorumlama · günlük hayat/teknoloji · karşılaştırma (K, L, M cisimleri) · bilim tarihi (yalnızca emin olduğun bilgiler).
- Sabitleri soru kökünde ÖSYM biçiminde ver: `($g = 10\ \text{m/s}^2$, $\sin 37^\circ = 0{,}6$, $\cos 37^\circ = 0{,}8$, $\pi = 3$; sürtünmeler önemsiz)`.
- Fizik doğruluğu: her hesabı iki kez yap; birim ve işaretleri kontrol et. Kitap düzeyini aşma (sınıfın konusu dışına taşma).
- Zorluk: Temel = tek adımlı/tanım; Orta = 2–3 adım veya grafik yorumu; İleri = çok adımlı, bağlamlı, ters düşünme.
- Açık uçlu: `**Senaryo – Kısa Başlık:** ...` ile başlayan gerçekçi bağlam, ardından a) b) c) alt soruları; kademeli rubrik (toplam 10), `dogruCevap` kısa özet.
- Türkçe: MEB ders kitabı dili, doğru noktalama, "hangisidir?", "kaç ... olur?" kalıpları.

## 5. KaTeX
- Metinler `r\`...\`` (String.raw) içinde; ters tırnak (\`) kullanma.
- Matematik kipinde Türkçe karakter kullanma; gerekiyorsa `\text{...}` içine al. Birimler `\ \text{m/s}` biçiminde.
- İndisler: `v_{ort}`, `F_{net}`, `R_{es}` (ş, ı, ğ yerine s, i, g).
- Her `$` eşli, her `{` kapalı olmalı. Denetçi her ifadeyi gerçek KaTeX ile derler.

## 6. SVG çizimleri (`src/data/cizim.ts`)
Yardımcılar: `svg(gen, yuk, etiket, ...parçalar)`, `ok(x1,y1,x2,y2,'v'|'i'|'t',kalınlık)`, `yazi(x,y,metin,{boy,hiza,sinif})`, `cizgi(x1,y1,x2,y2,{sinif,k})`,
`olcu(x1,y1,x2,y2,etiket,{dx,dy})`, `eksen(ox,oy,gen,yuk,'t (s)','v (m/s)')`, `direncYatay(x,y)`, `direncDikey(x,y)`, `uretecDikey(x,y)`, `dalga(x0,y0,boy,n,A)`, `tarama(x,y,uzunluk,yatay)`.
Ham SVG parçaları da yazabilirsin. Kurallar:
- Renk yalnızca sınıflarla: `c-v`/`f-v` (altın vurgu), `c-i`/`f-i` (turkuaz), `f-k`/`f-kv` (yarı saydam kutu), `f-s` (sıvı/alan), `f-t` (metin rengi dolgu), `k` (kesikli). **Hex renk yazma.**
- Varsayılan çizgi `currentColor`; yazılar `class="t"`. Yazılar viewBox içinde kalmalı (denetçi ölçer), çizgilerin/okların üstüne binmemeli; eksen adı ile son işaret değeri çakışmasın.
- Çizim, sorunun gerçek değerlerini ve etiketlerini göstersin (K, L, 3 kg, 30°, 12 V ...). Cevabı çizimde ele verme.
- Tipik boyut `svg(340, 230, ...)` – `svg(440, 240, ...)`. Grafiklerde `eksen(60, 200, 270, 180, ...)` kullanılabilir.
- Mevcut dosyalardaki çizimleri örnek al.
