/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  KRG FİZİK · KİŞİSELLEŞTİRME DOSYASI                             ║
 * ║  Uygulamadaki tüm kişisel metinler yalnızca buradan okunur.      ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

export const ozelAyarlar = {
  /** Hocanın ekranda görünecek adı */
  hocaAdi: 'Tuba Hocam',

  /** Marka / uygulama adı (sekme başlığı, üst bar, yaprak test başlığı) */
  markaAdi: 'KRG Fizik',

  /** Ürün alt adı (üst barda markanın yanında küçük yazı) */
  uygulamaAdi: 'FizikTahta',

  /** Üst bardaki küçük alt başlık */
  altBaslik: 'Maarif Modeli uyumlu fizik soru tahtası',

  /** Karşılama kartının başlığı */
  kutlamaBasligi: '24 Kasım Öğretmenler Günü',

  // ┌────────────────────────────────────────────────────────────────┐
  // │ ✍️  KUTLAMA MEKTUBU                                              │
  // │    • hitap: mektubun ilk satırı                                │
  // │    • kutlamaMektubu: ` ` arasına yapıştır; boş satır = paragraf │
  // │    • kapanis / imza: mektubun son satırları                    │
  // │    • Metnin içinde ` (ters tırnak) karakteri kullanma.         │
  // └────────────────────────────────────────────────────────────────┘
  hitap: 'Çok Değerli Tuba Hocam,',

  kutlamaMektubu: `
Sizinle ilk tanıştığım zamanki hâllerimi hatırlıyorum da; o tembel, uslanmaz çocukta bir umut ışığı gördünüz ve o umut ışığını hiçbir zaman kaybetmediniz. Öyle şeyler yaşandı ve öyle eşiklerden geçtim ki siz olmasaydınız belki de birçoğunu aşamayacaktım. O koşulsuz şartsız verdiğiniz desteğiniz benim için çok değerli.

Ben de öğretmenlik hayatınızda bir desteği dokunsun diye bu uygulamayı sizin için yazdım; ayrıca öğrencilerinize de başarılar dileğimi buradan iletin lütfen.

Sizi çok seviyorum hocam, iyi ki hayatımdasınız. Dilerim ki sizinle nice birçok Öğretmenler Günü kutlamaya devam ederiz.
`,

  kapanis: 'Öğretmenler Gününüz Kutlu Olsun.',

  /** Mektubun altındaki imza */
  imza: 'Alperen',
  // ─────────────────────── MEKTUP SONU ───────────────────────────────
} as const

export type OzelAyarlar = typeof ozelAyarlar
