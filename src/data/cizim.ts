/**
 * SVG fizik çizimleri için küçük yardımcılar.
 * Renkler sabit hex yerine CSS sınıflarıyla verilir; böylece Koyu / Yeşil / Beyaz tahta
 * temalarının üçünde ve yazdırmada otomatik olarak okunur kalır.
 */

const y1 = (n: number) => Math.round(n * 10) / 10

export type Renk = 'v' | 'i' | 't'

/** viewBox'lı, sabit genişliksiz SVG kabı */
export function svg(gen: number, yuk: number, etiket: string, ...govde: string[]) {
  return `<svg viewBox="0 0 ${gen} ${yuk}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${etiket}">${govde.join('')}</svg>`
}

/** Uçlu ok (kuvvet, hız vektörü vb.) */
export function ok(xa: number, ya: number, xb: number, yb: number, renk: Renk = 't', kalinlik = 3) {
  const a = Math.atan2(yb - ya, xb - xa)
  const L = 13
  const W = 6.5
  const bx = xb - L * Math.cos(a)
  const by = yb - L * Math.sin(a)
  const p1 = `${y1(bx + W * Math.sin(a))},${y1(by - W * Math.cos(a))}`
  const p2 = `${y1(bx - W * Math.sin(a))},${y1(by + W * Math.cos(a))}`
  const cizgiSinif = renk === 't' ? '' : ` class="c-${renk}"`
  const dolgu = renk === 't' ? 'f-t' : `f-${renk}`
  return (
    `<line x1="${y1(xa)}" y1="${y1(ya)}" x2="${y1(bx)}" y2="${y1(by)}"${cizgiSinif} stroke-width="${kalinlik}"/>` +
    `<polygon points="${y1(xb)},${y1(yb)} ${p1} ${p2}" class="${dolgu}" stroke="none"/>`
  )
}

/** Yazı etiketi */
export function yazi(x: number, y: number, metin: string, ek: { boy?: number; hiza?: 'start' | 'middle' | 'end'; sinif?: string } = {}) {
  const hiza = ek.hiza && ek.hiza !== 'start' ? ` text-anchor="${ek.hiza}"` : ''
  const boy = ek.boy ? ` style="font-size:${ek.boy}px"` : ''
  return `<text x="${x}" y="${y}" class="t${ek.sinif ? ' ' + ek.sinif : ''}"${hiza}${boy}>${metin}</text>`
}

/** Düz çizgi */
export function cizgi(xa: number, ya: number, xb: number, yb: number, ek: { sinif?: string; k?: number } = {}) {
  const s = ek.sinif ? ` class="${ek.sinif}"` : ''
  return `<line x1="${xa}" y1="${ya}" x2="${xb}" y2="${yb}"${s} stroke-width="${ek.k ?? 2}"/>`
}

/** Ölçü çizgisi: iki ucu çentikli, ortasında etiket */
export function olcu(xa: number, ya: number, xb: number, yb: number, etiket: string, ek: { dx?: number; dy?: number } = {}) {
  const dikey = Math.abs(xb - xa) < Math.abs(yb - ya)
  const c = dikey
    ? `<path d="M${xa - 6} ${ya} h12 M${xb - 6} ${yb} h12" stroke-width="1.5"/>`
    : `<path d="M${xa} ${ya - 6} v12 M${xb} ${yb - 6} v12" stroke-width="1.5"/>`
  const mx = (xa + xb) / 2 + (ek.dx ?? (dikey ? 8 : 0))
  const my = (ya + yb) / 2 + (ek.dy ?? (dikey ? 5 : -7))
  return (
    `<line x1="${xa}" y1="${ya}" x2="${xb}" y2="${yb}" stroke-width="1.5"/>` +
    c +
    yazi(mx, my, etiket, { boy: 13, hiza: dikey ? 'start' : 'middle' })
  )
}

/** Eksen takımı (grafikler için): orijin (ox,oy), uzunluklar, eksen adları */
export function eksen(ox: number, oy: number, gen: number, yuk: number, xAd: string, yAd: string) {
  return (
    ok(ox, oy, ox + gen, oy, 't', 2) +
    ok(ox, oy, ox, oy - yuk, 't', 2) +
    yazi(ox + gen - 4, oy + 20, xAd, { boy: 13, hiza: 'end' }) +
    yazi(ox + 8, oy - yuk + 4, yAd, { boy: 13 })
  )
}

/** Yatay direnç (zikzak) — x'ten başlar, 80 birim uzunluk */
export function direncYatay(x: number, y: number, sinif = 'c-v') {
  return `<path d="M${x} ${y} l5 -10 l10 20 l10 -20 l10 20 l10 -20 l10 20 l10 -20 l10 20 l5 -10" class="${sinif}" stroke-width="3"/>`
}

/** Dikey direnç (zikzak) — y'den başlar, 60 birim uzunluk */
export function direncDikey(x: number, y: number, sinif = 'c-i') {
  return `<path d="M${x} ${y} l-10 5 l20 10 l-20 10 l20 10 l-20 10 l20 10 l-10 5" class="${sinif}" stroke-width="3"/>`
}

/** Üreteç sembolü (dikey telde, uzun plaka üstte = + kutup) */
export function uretecDikey(x: number, y: number) {
  return `<line x1="${x - 20}" y1="${y}" x2="${x + 20}" y2="${y}" stroke-width="3"/><line x1="${x - 10}" y1="${y + 14}" x2="${x + 10}" y2="${y + 14}" stroke-width="6"/>`
}

/** Sinüs biçimli dalga yolu: x0'dan başlayıp `boy` uzunluğunda, `n` tam dalga, genlik A */
export function dalga(x0: number, y0: number, boy: number, n: number, A: number) {
  const adim = boy / (n * 2)
  let d = `M${x0} ${y0}`
  for (let i = 0; i < n * 2; i++) {
    const yon = i % 2 === 0 ? -1 : 1
    d += ` q${y1(adim / 2)} ${y1(yon * A * 2)} ${y1(adim)} 0`
  }
  return d
}

/** Basit eğik çizgili zemin / duvar taraması */
export function tarama(xa: number, ya: number, uzunluk: number, yatay = true) {
  let d = ''
  for (let i = 0; i <= uzunluk; i += 16) {
    d += yatay ? `M${xa + i} ${ya} l-10 10 ` : `M${xa} ${ya + i} l-10 10 `
  }
  return `<path d="${d.trim()}" stroke-width="1.5"/>`
}
