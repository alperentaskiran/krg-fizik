import { CircleCheck, Lightbulb, CircleX } from 'lucide-react'
import { mufredat } from '../data/mufredat'
import type { SecenekHarfi, Soru } from '../data/tipler'
import { Matematik } from './Matematik'

const HARFLER: SecenekHarfi[] = ['A', 'B', 'C', 'D', 'E']

const ZORLUK_RENK: Record<Soru['zorluk'], string> = {
  Temel: 'text-dogru border-dogru/50',
  Orta: 'text-vurgu border-vurgu/50',
  İleri: 'text-kalp border-kalp/50',
}

interface Props {
  soru: Soru
  acikAdim: number
  secilen: SecenekHarfi | null
  onSec: (h: SecenekHarfi) => void
}

export function SoruKarti({ soru, acikAdim, secilen, onSec }: Props) {
  const toplam = soru.adimAdimCozum.length
  const cevapAcik = acikAdim >= toplam
  const cs = soru.soruTipi === 'coktan_secmeli'
  const ciktiAdi = mufredat[soru.sinif].temalar.find((t) => t.ad === soru.tema)?.ciktilar[soru.ogrenmeCiktisi]

  return (
    <article className="soru-punto px-4 py-5 sm:px-8 sm:py-7 lg:px-12">
      {/* Künye */}
      <div className="mb-4 flex flex-wrap items-center gap-2 text-[0.62em] font-medium">
        <span className="rounded-full bg-vurgu px-3 py-0.5 font-bold text-vurgu-yazi">{soru.sinif}. Sınıf</span>
        <span className="rounded-full border border-cizgi px-3 py-0.5">{soru.tema}</span>
        <span className="rounded-full border border-cizgi2 bg-ikincil/10 px-3 py-0.5 font-mono tracking-tight text-ikincil" title={ciktiAdi}>
          {soru.ogrenmeCiktisi}
          {ciktiAdi && <span className="ml-1.5 font-sans text-soluk">· {ciktiAdi}</span>}
        </span>
        <span className={`rounded-full border px-3 py-0.5 ${ZORLUK_RENK[soru.zorluk]}`}>{soru.zorluk}</span>
        <span className="rounded-full border border-cizgi px-3 py-0.5 text-soluk">
          {cs ? 'Çoktan seçmeli' : 'Açık uçlu · Senaryo'}
        </span>
      </div>
      <p className="mb-5 text-[0.6em] leading-snug text-soluk">
        <span className="font-semibold">Süreç bileşeni:</span> {soru.surecBileseni}
      </p>

      <div className={`grid gap-6 ${soru.svgDiyagram ? 'lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start' : ''}`}>
        <div>
          <Matematik metin={soru.metin} />

          {cs && soru.secenekler && (
            <ul className="mt-5 grid gap-2.5">
              {HARFLER.filter((h) => soru.secenekler?.[h]).map((h) => {
                const dogru = h === soru.dogruCevap
                const bu = secilen === h
                let durum = 'border-cizgi bg-yuzey2/40 hover:border-ikincil'
                if (cevapAcik && dogru) durum = 'border-dogru bg-dogru/15'
                else if (cevapAcik && bu && !dogru) durum = 'border-yanlis bg-yanlis/10'
                else if (bu) durum = 'border-ikincil bg-ikincil/15'
                return (
                  <li key={h}>
                    <button
                      type="button"
                      onClick={() => onSec(h)}
                      className={`flex w-full items-center gap-3 rounded-xl border-2 px-3 py-2 text-left transition-colors ${durum}`}
                    >
                      <span
                        className={`grid size-[1.7em] shrink-0 place-items-center rounded-full text-[0.85em] font-bold ${
                          cevapAcik && dogru ? 'bg-dogru text-zemin' : 'bg-yuzey2 text-metin'
                        }`}
                      >
                        {h}
                      </span>
                      <Matematik metin={soru.secenekler![h]!} cokSatir={false} className="min-w-0 flex-1" />
                      {cevapAcik && dogru && <CircleCheck className="size-[1.1em] shrink-0 text-dogru" />}
                      {cevapAcik && bu && !dogru && <CircleX className="size-[1.1em] shrink-0 text-yanlis" />}
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {soru.svgDiyagram && (
          <figure
            className="sekil mx-auto w-full max-w-2xl rounded-2xl border border-cizgi bg-yuzey2/30 p-3 sm:p-4"
            dangerouslySetInnerHTML={{ __html: soru.svgDiyagram }}
          />
        )}
      </div>

      {/* Adım adım çözüm */}
      {acikAdim > 0 && (
        <section className="mt-6 rounded-2xl border border-cizgi2 bg-yuzey2/40 p-4 sm:p-5">
          <h3 className="mb-3 flex items-center gap-2 text-[0.7em] font-bold uppercase tracking-wider text-ikincil">
            <Lightbulb className="size-[1.2em]" /> Çözüm · {Math.min(acikAdim, toplam)}/{toplam}
          </h3>
          <ol className="grid gap-3">
            {soru.adimAdimCozum.slice(0, acikAdim).map((adim, i) => (
              <li key={i} className="adim-gel flex gap-3">
                <span className="mt-[0.15em] grid size-[1.5em] shrink-0 place-items-center rounded-full bg-ikincil/20 text-[0.75em] font-bold text-ikincil">
                  {i + 1}
                </span>
                <Matematik metin={adim} className="min-w-0 flex-1" />
              </li>
            ))}
          </ol>
          {cevapAcik && soru.rubrik && (
            <div className="adim-gel mt-4 rounded-xl border border-cizgi p-3 text-[0.8em]">
              <p className="mb-2 font-semibold text-ikincil">Kademeli puanlama (10 puan)</p>
              <ul className="grid gap-1">
                {soru.rubrik.map((r, i) => (
                  <li key={i} className="flex justify-between gap-3">
                    <span>{r.olcut}</span>
                    <span className="shrink-0 font-bold tabular-nums">{r.puan} p</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {cevapAcik && (
            <div className="adim-gel mt-4 flex flex-wrap items-center gap-2 rounded-xl bg-dogru/15 px-4 py-2 text-dogru">
              <CircleCheck className="size-[1.1em]" />
              <span className="font-semibold">Cevap:</span>
              <Matematik metin={soru.dogruCevap} cokSatir={false} className="text-metin" />
            </div>
          )}
        </section>
      )}
    </article>
  )
}
