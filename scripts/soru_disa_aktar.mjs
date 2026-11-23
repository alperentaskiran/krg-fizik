// Soru bankasını JSON olarak stdout'a yazar (scripts/soru_denetle.py tarafından çağrılır).
// Node 22.18+ / 23.6+ TypeScript tip silmeyi yerleşik desteklediği için .ts dosyaları doğrudan içe aktarılır.
// Her metindeki KaTeX ifadeleri gerçek KaTeX ayrıştırıcısıyla derlenir; hatalar JSON'a eklenir.
//
//   node scripts/soru_disa_aktar.mjs                      → tüm sınıflar
//   node scripts/soru_disa_aktar.mjs --dosyalar a.ts b.ts → dosyalar tek tek (hatalı olan raporlanır)
import katex from 'katex'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const DESEN = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g

function katexHatalari(metin) {
  const hatalar = []
  const dolarSayisi = (metin.replace(/\\\$/g, '').match(/\$/g) || []).length
  if (dolarSayisi % 2 !== 0) hatalar.push(`Tek sayıda $ işareti (${dolarSayisi})`)
  for (const m of metin.matchAll(DESEN)) {
    const ifade = m[1] ?? m[2]
    try {
      katex.renderToString(ifade, { throwOnError: true, strict: 'ignore', displayMode: !!m[1] })
    } catch (e) {
      hatalar.push(`${ifade} → ${String(e.message).split('\n')[0]}`)
    }
  }
  return hatalar
}

function zenginlestir(s, dosya) {
  const metinler = [
    ['metin', s.metin],
    ['dogruCevap', s.dogruCevap],
    ...(s.adimAdimCozum ?? []).map((a, i) => [`adim${i + 1}`, a]),
    ...Object.entries(s.secenekler ?? {}).map(([h, v]) => [`secenek${h}`, v]),
  ]
  const katex_hatalari = metinler.flatMap(([alan, m]) => katexHatalari(String(m ?? '')).map((h) => `${alan}: ${h}`))
  return { ...s, katex_hatalari, _dosya: dosya }
}

const arg = process.argv.slice(2)
const sonuc = { sorular: [], hatali_dosyalar: {} }

if (arg[0] === '--dosyalar') {
  for (const d of arg.slice(1)) {
    try {
      const mod = await import(pathToFileURL(resolve(d)).href)
      for (const v of Object.values(mod)) if (Array.isArray(v)) for (const s of v) sonuc.sorular.push(zenginlestir(s, d))
    } catch (e) {
      sonuc.hatali_dosyalar[d] = String(e.message).split('\n').slice(0, 3).join(' ')
    }
  }
} else {
  for (const n of [9, 10, 11, 12]) {
    const mod = await import(`../src/data/sorular/sinif${n}/index.ts`)
    for (const s of mod[`sinif${n}Sorulari`]) sonuc.sorular.push(zenginlestir(s, `sinif${n}`))
  }
}
const { mufredat } = await import('../src/data/mufredat.ts')
sonuc.mufredat = mufredat
process.stdout.write(JSON.stringify(sonuc))
