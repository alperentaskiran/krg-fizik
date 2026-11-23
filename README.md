# KRG Fizik

Türkiye Yüzyılı Maarif Modeli uyumlu, sunucusuz (statik) ve çevrimdışı çalışabilen fizik soru tahtası.
Akıllı tahta, Smart TV / projeksiyon, telefon ve bilgisayarda çalışır. 24 Kasım Öğretmenler Günü için Tuba Hocam'a hazırlandı.

## Hızlı başlangıç

```powershell
npm install
npm run dev          # geliştirme: http://localhost:5173
npm run build        # tsc + vite build → dist/
npm run preview      # derlenmiş sürümü yerelde önizle: http://localhost:4173
```

## Kişiselleştirme

Tüm kişisel metinler tek dosyada: **`src/config/ozelAyarlar.ts`**
Kutlama mektubunu `kutlamaMektubu: \`...\`` ters tırnakları arasına yapıştırman yeterli (dosyada ✍️ ile işaretli).

## Kullanım (kısayollar — TV kumandası / klavye)

| Tuş | İşlev |
| --- | --- |
| `→` / `PageDown` | Sonraki soru |
| `←` / `PageUp` | Önceki soru |
| `Enter` / `Boşluk` | Çözümü adım adım aç (son adımdan sonra kapatır) |
| `↑` / `Backspace` | Bir çözüm adımı geri |
| `F` | Tam ekran |
| `+` / `-` | Punto büyüt / küçült (A+ / A−) |
| `T` | Tahta teması: Koyu Tahta → Klasik Yeşil → Beyaz Kağıt |
| `K` | Kalem (çizim katmanı) aç/kapat · `Esc` kapatır |
| `Q` | Soruyu telefonda açmak için QR kod |
| `A`–`E` | Şık işaretle |

- **Sınıf Modu (kilit):** Açıkken karşılama mektubu otomatik açılmaz; sağ üstteki 🎁 ikonuna **basılı tutunca** mektup açılır.
- **QR bağlantısı** `#/soru/<id>?o=1` biçimindedir; öğrenci telefonunda mektup ve kilit hiç görünmez.
- **Yaprak test:** Alt bardaki *Teste Ekle* → üst bardaki liste ikonu → *Yazdır / PDF Kaydet* (2 sütun, isteğe bağlı cevap anahtarı). Liste boşsa ekrandaki soru basılır.
- **Kurulum (PWA):** Tarayıcı destekliyorsa üst barda ⬇ ikonu çıkar; kurulduktan sonra internet olmadan da açılır.

## Soru ekleme

`src/data/sorular/sinif9.ts … sinif12.ts` dosyalarına `Soru` şemasına (`src/data/tipler.ts`) uygun nesne ekle.
`metin`, `secenekler`, `adimAdimCozum` alanlarında `$...$` (satır içi) ve `$$...$$` (blok) KaTeX, `**kalın**` kullanılabilir.
SVG çizimlerinde renkler temaya uysun diye sınıflar kullan: `c-v` / `f-v` (vurgu), `c-i` / `f-i` (ikincil), `f-k` / `f-kv` (yarı saydam kutu), `f-s` (sıvı/alan), `t` (yazı), `k` (kesikli).

> ⚠️ Örnek sorulardaki **tema adları, öğrenme çıktısı kodları ve süreç bileşenleri temsilidir.** MEB kitap özetlerini çıkardıktan sonra resmî kodlarla güncelleyin.

## MEB kitaplarından özet çıkarma

1. PDF'leri `raw_books/9`, `raw_books/10`, `raw_books/11`, `raw_books/12` klasörlerine koy (`raw_books/` git'e gitmez).
2. Çalıştır:

```powershell
pip install pypdf
```

```powershell
python scripts/kitap_ozet_cikar.py
```

Özetler `raw_books/_ozet/<sınıf>/<kitap>__ozet.txt` dosyalarına yazılır (temalar, öğrenme çıktıları, süreç bileşenleri, içindekiler).
Tüm sayfa metni için `--tam-metin`, tek sınıf için `--sinif 9` ekle. Betik PDF'i sayfa sayfa okur; düşük RAM'de güvenle çalışır.

## GitHub Pages'e yayınlama

1. GitHub'da bir depo oluştur ve bu klasörü `main` dalına gönder.
2. Depo → **Settings → Pages → Source: GitHub Actions** seç.
3. Her `main` push'unda `.github/workflows/deploy.yml` otomatik derleyip yayınlar.
   `base: './'` ve hash tabanlı yönlendirme sayesinde repo adı ne olursa olsun yollar bozulmaz.
