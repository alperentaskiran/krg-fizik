import type { Sinif } from './tipler.ts'

export interface Tema {
  no: number
  ad: string
  /** Öğrenme çıktısı kodu → başlık */
  ciktilar: Record<string, string>
}

export interface SinifMufredati {
  kaynak: string
  temalar: Tema[]
}

/**
 * Tema / ünite yapısı raw_books/ altındaki ders kitaplarının İçindekiler sayfalarından alınmıştır.
 * 9–11: Türkiye Yüzyılı Maarif Modeli ders kitapları (4 / 4 / 3 tema).
 * 12: OGM ders kitabı (AYT kapsamındaki 6 ünite).
 * Kitaplar FİZ kodlarını metin olarak içermediğinden kodlar, kitaptaki bölüm sırasına göre
 * FİZ.<sınıf>.<tema>.<bölüm> biçiminde eşlenmiştir.
 */
export const mufredat: Record<Sinif, SinifMufredati> = {
  9: {
    kaynak: 'MEB 9. Sınıf Fizik Ders Kitabı (Maarif Modeli)',
    temalar: [
      {
        no: 1,
        ad: 'Fizik Bilimi ve Kariyer Keşfi',
        ciktilar: {
          'FİZ.9.1.1': 'Fizik bilimi',
          'FİZ.9.1.2': 'Fizik biliminin alt dalları',
          'FİZ.9.1.3': 'Fizik bilimine yön verenler',
          'FİZ.9.1.4': 'Fizik bilimi ile ilgili kariyer keşfi',
        },
      },
      {
        no: 2,
        ad: 'Kuvvet ve Hareket',
        ciktilar: {
          'FİZ.9.2.1': 'Temel ve türetilmiş nicelikler',
          'FİZ.9.2.2': 'Skaler ve vektörel nicelikler',
          'FİZ.9.2.3': 'Vektörler',
          'FİZ.9.2.4': 'Doğadaki temel kuvvetler',
          'FİZ.9.2.5': 'Hareket ve hareket türleri',
        },
      },
      {
        no: 3,
        ad: 'Akışkanlar',
        ciktilar: {
          'FİZ.9.3.1': 'Basınç',
          'FİZ.9.3.2': 'Sıvılarda basınç',
          'FİZ.9.3.3': 'Açık hava basıncı',
          'FİZ.9.3.4': 'Kaldırma kuvveti',
          'FİZ.9.3.5': 'Bernoulli ilkesi',
        },
      },
      {
        no: 4,
        ad: 'Enerji',
        ciktilar: {
          'FİZ.9.4.1': 'İç enerji, ısı ve sıcaklık arasındaki ilişki',
          'FİZ.9.4.2': 'Isı, öz ısı, ısı sığası ve sıcaklık farkı',
          'FİZ.9.4.3': 'Hâl değişimi',
          'FİZ.9.4.4': 'Isıl denge',
          'FİZ.9.4.5': 'Isı aktarım yolları',
          'FİZ.9.4.6': 'Isı iletim hızı',
        },
      },
    ],
  },
  10: {
    kaynak: 'MEB 10. Sınıf Fizik Ders Kitabı (Maarif Modeli)',
    temalar: [
      {
        no: 1,
        ad: 'Kuvvet ve Hareket',
        ciktilar: {
          'FİZ.10.1.1': 'Sabit hızlı hareket',
          'FİZ.10.1.2': 'İvme ve hız değişimi arasındaki ilişki',
          'FİZ.10.1.3': 'Yatay doğrultuda sabit ivmeli hareket ve grafikleri',
        },
      },
      {
        no: 2,
        ad: 'Enerji',
        ciktilar: {
          'FİZ.10.2.1': 'İş, enerji ve güç',
          'FİZ.10.2.2': 'Enerji biçimleri',
          'FİZ.10.2.3': 'Mekanik enerji',
          'FİZ.10.2.4': 'Enerji kaynakları',
        },
      },
      {
        no: 3,
        ad: 'Elektrik',
        ciktilar: {
          'FİZ.10.3.1': 'Basit elektrik devreleri',
          'FİZ.10.3.2': 'Elektrik akımı',
          'FİZ.10.3.3': 'Ohm yasası',
          'FİZ.10.3.4': 'Dirençlerin bağlanması',
          'FİZ.10.3.5': 'Üreteçlerin bağlanması',
          'FİZ.10.3.6': 'Elektrik akımının tehlikelerine karşı önlemler',
          'FİZ.10.3.7': 'Topraklamanın önemi',
        },
      },
      {
        no: 4,
        ad: 'Dalgalar',
        ciktilar: {
          'FİZ.10.4.1': 'Periyodik hareketler',
          'FİZ.10.4.2': 'Dalgaların temel kavramları',
          'FİZ.10.4.3': 'Dalgaların sınıflandırılması',
          'FİZ.10.4.4': 'Dalgaların yayılma süratini etkileyen etmenler',
          'FİZ.10.4.5': 'Su dalgalarında yansıma ve kırılma',
          'FİZ.10.4.6': 'Rezonans ve deprem',
        },
      },
    ],
  },
  11: {
    kaynak: 'MEB 11. Sınıf Fizik Ders Kitabı (Maarif Modeli)',
    temalar: [
      {
        no: 1,
        ad: 'Kuvvet ve Hareket',
        ciktilar: {
          'FİZ.11.1.1': 'Serbest düşme',
          'FİZ.11.1.2': 'İki boyutta sabit ivmeli hareket',
          'FİZ.11.1.3': "Newton'ın hareket yasaları",
          'FİZ.11.1.4': 'Sürtünme kuvveti',
          'FİZ.11.1.5': 'Limit hız',
          'FİZ.11.1.6': 'Düzgün çembersel hareket',
        },
      },
      {
        no: 2,
        ad: 'Elektrik ve Manyetizma',
        ciktilar: {
          'FİZ.11.2.1': 'Elektriksel kuvvet ve elektriksel alan',
          'FİZ.11.2.2': 'Manyetik alan ve manyetik kuvvet',
          'FİZ.11.2.3': 'İndüksiyon akımı',
          'FİZ.11.2.4': 'Transformatörler',
        },
      },
      {
        no: 3,
        ad: 'Optik',
        ciktilar: {
          'FİZ.11.3.1': 'Işık şiddeti, ışık akısı ve aydınlanma',
          'FİZ.11.3.2': 'Düzlem aynalar',
          'FİZ.11.3.3': 'Küresel aynalar',
          'FİZ.11.3.4': 'Kırılma',
          'FİZ.11.3.5': 'Görünür derinlik',
          'FİZ.11.3.6': 'Fiber optik',
          'FİZ.11.3.7': 'Prizmalar',
          'FİZ.11.3.8': 'Mercekler',
        },
      },
    ],
  },
  12: {
    kaynak: 'MEB/OGM 12. Sınıf Fizik Ders Kitabı (AYT kapsamı)',
    temalar: [
      {
        no: 1,
        ad: 'Çembersel Hareket',
        ciktilar: {
          'FİZ.12.1.1': 'Düzgün çembersel hareket',
          'FİZ.12.1.2': 'Dönerek öteleme hareketi',
          'FİZ.12.1.3': 'Açısal momentum',
          'FİZ.12.1.4': 'Kütle çekim ve Kepler yasaları',
        },
      },
      {
        no: 2,
        ad: 'Basit Harmonik Hareket',
        ciktilar: {
          'FİZ.12.2.1': 'Basit harmonik hareket',
        },
      },
      {
        no: 3,
        ad: 'Dalga Mekaniği',
        ciktilar: {
          'FİZ.12.3.1': 'Dalgalarda kırınım, girişim ve Doppler olayı',
          'FİZ.12.3.2': 'Elektromanyetik dalgalar',
        },
      },
      {
        no: 4,
        ad: 'Atom Fiziğine Giriş ve Radyoaktivite',
        ciktilar: {
          'FİZ.12.4.1': 'Atom kavramının tarihsel gelişimi',
          'FİZ.12.4.2': 'Büyük patlama ve evrenin oluşumu',
          'FİZ.12.4.3': 'Radyoaktivite',
        },
      },
      {
        no: 5,
        ad: 'Modern Fizik',
        ciktilar: {
          'FİZ.12.5.1': 'Özel görelilik',
          'FİZ.12.5.2': 'Kuantum fiziğine giriş',
          'FİZ.12.5.3': 'Fotoelektrik olay',
          'FİZ.12.5.4': 'Compton saçılması ve de Broglie dalga boyu',
        },
      },
      {
        no: 6,
        ad: 'Modern Fiziğin Teknolojideki Uygulamaları',
        ciktilar: {
          'FİZ.12.6.1': 'Görüntüleme teknolojileri',
          'FİZ.12.6.2': 'Yarı iletken teknolojisi',
          'FİZ.12.6.3': 'Süper iletkenler',
          'FİZ.12.6.4': 'Nanoteknoloji',
          'FİZ.12.6.5': 'Lazer ışınları',
        },
      },
    ],
  },
}
