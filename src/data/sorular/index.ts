import type { Sinif, Soru } from '../tipler.ts'

export const siniflar: Sinif[] = [9, 10, 11, 12]

/**
 * Her sınıfın soruları ayrı bir JS parçasında (chunk) tutulur ve yalnızca gerektiğinde yüklenir.
 * Böylece akıllı tahta / Smart TV gibi zayıf cihazlarda açılışta 600+ soru belleğe alınmaz.
 */
const yukleyiciler: Record<Sinif, () => Promise<Soru[]>> = {
  9: () => import('./sinif9/index.ts').then((m) => m.sinif9Sorulari),
  10: () => import('./sinif10/index.ts').then((m) => m.sinif10Sorulari),
  11: () => import('./sinif11/index.ts').then((m) => m.sinif11Sorulari),
  12: () => import('./sinif12/index.ts').then((m) => m.sinif12Sorulari),
}

const onbellek = new Map<Sinif, Promise<Soru[]>>()

export function sinifYukle(s: Sinif): Promise<Soru[]> {
  let p = onbellek.get(s)
  if (!p) {
    p = yukleyiciler[s]()
    onbellek.set(s, p)
    p.catch(() => onbellek.delete(s))
  }
  return p
}

/** "11-T2A-07" → 11 */
export function idSinif(id: string | null | undefined): Sinif | undefined {
  const n = Number(String(id ?? '').split('-')[0])
  return (siniflar as number[]).includes(n) ? (n as Sinif) : undefined
}
