import katex from 'katex'
import { memo, useMemo, type ReactNode } from 'react'

const onbellek = new Map<string, string>()

function tex(ifade: string, blok: boolean) {
  const anahtar = (blok ? 'B' : 'S') + ifade
  let html = onbellek.get(anahtar)
  if (html === undefined) {
    html = katex.renderToString(ifade, {
      displayMode: blok,
      throwOnError: false,
      strict: 'ignore',
    })
    onbellek.set(anahtar, html)
  }
  return html
}

const DESEN = /(\$\$[\s\S]+?\$\$|\$[^$]+?\$|\*\*[^*]+?\*\*)/g

function satirIsle(satir: string, onek: string): ReactNode[] {
  return satir.split(DESEN).map((parca, i) => {
    const k = `${onek}-${i}`
    if (!parca) return null
    if (parca.startsWith('$$') && parca.endsWith('$$') && parca.length > 4) {
      return <span key={k} dangerouslySetInnerHTML={{ __html: tex(parca.slice(2, -2), true) }} />
    }
    if (parca.startsWith('$') && parca.endsWith('$') && parca.length > 2) {
      return <span key={k} dangerouslySetInnerHTML={{ __html: tex(parca.slice(1, -1), false) }} />
    }
    if (parca.startsWith('**') && parca.endsWith('**') && parca.length > 4) {
      return (
        <strong key={k} className="font-semibold text-vurgu">
          {satirIsle(parca.slice(2, -2), k)}
        </strong>
      )
    }
    return <span key={k}>{parca}</span>
  })
}

interface Props {
  metin: string
  className?: string
  /** true ise paragraf/satır sonları korunur */
  cokSatir?: boolean
}

/** $...$ satır içi, $$...$$ blok KaTeX, **kalın** ve satır sonlarını işler */
export const Matematik = memo(function Matematik({ metin, className, cokSatir = true }: Props) {
  const icerik = useMemo(() => {
    if (!cokSatir) return satirIsle(metin, 's')
    return metin
      .trim()
      .split(/\n\s*\n/)
      .map((paragraf, pi) => (
        <p key={pi} className="mb-[0.55em] last:mb-0">
          {paragraf.split('\n').map((satir, si, dizi) => (
            <span key={si}>
              {satirIsle(satir, `${pi}-${si}`)}
              {si < dizi.length - 1 && <br />}
            </span>
          ))}
        </p>
      ))
  }, [metin, cokSatir])

  return <div className={className}>{icerik}</div>
})
