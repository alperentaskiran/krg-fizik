// Soru bankasını JSON olarak stdout'a yazar (scripts/soru_denetle.py tarafından çağrılır).
// Node 22.18+ / 23.6+ TypeScript tip silmeyi yerleşik desteklediği için .ts dosyaları doğrudan içe aktarılır.
// Her metindeki KaTeX ifadeleri gerçek KaTeX ayrıştırıcısıyla derlenir; hatalar JSON'a eklenir.
import katex from 'katex'

const { tumSorular } = await import('../src/data/sorular/index.ts')
const { mufredat } = await import('../src/data/mufredat.ts')

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

const sorular = tumSorular.map((s) => {
  const metinler = [
    ['metin', s.metin],
    ['dogruCevap', s.dogruCevap],
    ...s.adimAdimCozum.map((a, i) => [`adim${i + 1}`, a]),
    ...Object.entries(s.secenekler ?? {}).map(([h, v]) => [`secenek${h}`, v]),
  ]
  const katex_hatalari = metinler.flatMap(([alan, m]) => katexHatalari(m).map((h) => `${alan}: ${h}`))
  return { ...s, katex_hatalari }
})

process.stdout.write(JSON.stringify({ sorular, mufredat }))
