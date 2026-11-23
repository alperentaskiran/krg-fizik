export type Sinif = 9 | 10 | 11 | 12
export type Zorluk = 'Temel' | 'Orta' | 'İleri'
export type SoruTipi = 'coktan_secmeli' | 'acik_uclu_senaryo'
export type SecenekHarfi = 'A' | 'B' | 'C' | 'D' | 'E'

export interface RubrikOlcutu {
  olcut: string
  puan: number
}

export interface Soru {
  /** Benzersiz kimlik (QR bağlantısında kullanılır), örn. "9-1" */
  id: string
  sinif: Sinif
  /** Maarif teması / ünite adı — src/data/mufredat.ts ile birebir aynı olmalı */
  tema: string
  /** Öğrenme çıktısı kodu, örn. "FİZ.9.1.2" — mufredat.ts'te tanımlı olmalı */
  ogrenmeCiktisi: string
  /** Öğrenme çıktısının süreç bileşeni */
  surecBileseni: string
  zorluk: Zorluk
  soruTipi: SoruTipi
  /** Soru metni; $...$ satır içi, $$...$$ blok KaTeX, **kalın**, satır sonları korunur */
  metin: string
  /**
   * Ölçeklenebilir SVG çizimi (src/data/cizim.ts yardımcılarıyla üretilir).
   * Renk sınıfları: c-v / f-v (vurgu), c-i / f-i (ikincil), f-k / f-kv (yarı saydam kutu),
   * f-s (sıvı/alan), f-t (metin rengi dolgu), t (yazı), k (kesikli çizgi)
   */
  svgDiyagram?: string
  /** Yalnızca çoktan seçmeli sorularda A–E */
  secenekler?: Partial<Record<SecenekHarfi, string>>
  /** Çoktan seçmelide harf, açık uçluda beklenen cevap özeti (KaTeX olabilir) */
  dogruCevap: string
  /** Tahtada adım adım açılan çözüm basamakları (KaTeX destekli) */
  adimAdimCozum: string[]
  /**
   * Sayısal sorularda doğru sonucu üreten aritmetik ifade (denetim betiği hesaplar),
   * örn. "2*10*0.5/2". sqrt(), pi kullanılabilir.
   */
  hesap?: string
  /** Açık uçlu sorularda kademeli puanlama anahtarı (toplam 10 puan) */
  rubrik?: RubrikOlcutu[]
}
