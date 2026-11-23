import { Heart, Presentation, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ozelAyarlar } from '../config/ozelAyarlar'

interface Props {
  onKapat: () => void
  onSinifModu: () => void
}

const KALPLER = [
  { l: '6%', s: 14, d: 9, g: 0 },
  { l: '18%', s: 10, d: 12, g: 3 },
  { l: '33%', s: 18, d: 10, g: 6 },
  { l: '52%', s: 12, d: 13, g: 1.5 },
  { l: '68%', s: 16, d: 11, g: 4.5 },
  { l: '82%', s: 11, d: 9.5, g: 7 },
  { l: '93%', s: 15, d: 12.5, g: 2.5 },
]

/** 24 Kasım karşılama kartı / kişisel mektup */
export function KarsilamaKarti({ onKapat, onSinifModu }: Props) {
  const birincilRef = useRef<HTMLButtonElement>(null)
  useEffect(() => birincilRef.current?.focus(), [])

  const paragraflar = ozelAyarlar.kutlamaMektubu.trim().split(/\n\s*\n/)

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="kutlama-baslik"
      onKeyDown={(e) => e.stopPropagation()}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {KALPLER.map((k, i) => (
          <Heart
            key={i}
            className="ucan-kalp fill-current text-kalp/70"
            style={{ left: k.l, width: k.s, height: k.s, animationDuration: `${k.d}s`, animationDelay: `${k.g}s` }}
          />
        ))}
      </div>

      <div className="belir relative w-full max-w-2xl rounded-[1.75rem] bg-gradient-to-br from-[#f3cc74] via-[#e2b455] to-[#38d9e8] p-[2px] shadow-2xl">
        <div className="relative rounded-[calc(1.75rem-2px)] bg-yuzey px-6 py-7 sm:px-10 sm:py-9">
          <button
            type="button"
            onClick={onKapat}
            className="absolute top-3 right-3 rounded-full p-2 text-soluk hover:bg-yuzey2 hover:text-metin"
            aria-label="Kapat"
          >
            <X className="size-5" />
          </button>

          <div className="mb-5 flex flex-col items-center text-center">
            <div className="relative mb-3">
              <div className="absolute inset-0 -m-3 rounded-full bg-[radial-gradient(circle,rgba(226,180,85,0.45)_0%,rgba(226,180,85,0.12)_45%,transparent_70%)] blur-md" aria-hidden />
              <img
                src="./logo-full.png"
                alt="KRG Fizik logosu"
                className="relative size-28 rounded-3xl shadow-[0_0_0_1px_rgba(226,180,85,0.5),0_0_28px_rgba(226,180,85,0.35)] sm:size-32"
              />
            </div>
            <p className="text-xs font-semibold tracking-[0.25em] text-vurgu uppercase">{ozelAyarlar.kutlamaBasligi}</p>
          </div>

          <h2 id="kutlama-baslik" className="font-serif text-2xl leading-tight font-bold sm:text-3xl">
            {ozelAyarlar.hitap}
          </h2>

          <div className="mt-5 max-h-[48vh] space-y-3 overflow-y-auto pr-1 font-serif text-base leading-relaxed sm:text-lg">
            {paragraflar.map((p, i) => (
              <p key={i} className="whitespace-pre-line indent-6">
                {p}
              </p>
            ))}
            <p className="pt-2 font-semibold text-vurgu">{ozelAyarlar.kapanis}</p>
          </div>
          <p className="mt-4 text-right font-serif text-xl text-kalp italic">{ozelAyarlar.imza}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onKapat}
              className="rounded-xl border border-cizgi px-5 py-3 font-medium hover:bg-yuzey2"
            >
              Uygulamaya Geç
            </button>
            <button
              ref={birincilRef}
              type="button"
              onClick={onSinifModu}
              className="flex items-center justify-center gap-2 rounded-xl bg-vurgu px-5 py-3 font-bold text-vurgu-yazi shadow-lg hover:bg-vurgu-hover"
            >
              <Presentation className="size-5" /> Tahta / Sınıf Moduna Geç
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-soluk sm:text-right">
            Sınıf modunda bu mektup gizlenir; sağ üst köşedeki hediye ikonuna basılı tutarak yeniden açabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  )
}
