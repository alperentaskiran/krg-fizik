import type { Sinif, Soru } from '../tipler.ts'
import { sinif9Sorulari } from './sinif9.ts'
import { sinif10Sorulari } from './sinif10.ts'
import { sinif11Sorulari } from './sinif11.ts'
import { sinif12Sorulari } from './sinif12.ts'

/** Tüm sorular sınıf sırasıyla. Yeni sınıf dosyası eklemek için buraya import et. */
export const tumSorular: Soru[] = [
  ...sinif9Sorulari,
  ...sinif10Sorulari,
  ...sinif11Sorulari,
  ...sinif12Sorulari,
]

export const siniflar: Sinif[] = [9, 10, 11, 12]

export const soruBul = (id: string) => tumSorular.find((s) => s.id === id)
