import { X } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
  baslik: string
  ikon?: ReactNode
  onKapat: () => void
  children: ReactNode
  genis?: boolean
}

export function Pencere({ baslik, ikon, onKapat, children, genis }: Props) {
  return (
    <div
      className="fixed inset-0 z-40 grid place-items-center overflow-y-auto bg-black/55 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={baslik}
      onClick={onKapat}
      onKeyDown={(e) => {
        e.stopPropagation()
        if (e.key === 'Escape') onKapat()
      }}
    >
      <div
        className={`belir w-full ${genis ? 'max-w-2xl' : 'max-w-md'} rounded-3xl border border-cizgi bg-yuzey p-5 shadow-2xl sm:p-6`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center gap-3">
          {ikon && <span className="text-vurgu">{ikon}</span>}
          <h2 className="flex-1 text-lg font-bold">{baslik}</h2>
          <button
            type="button"
            onClick={onKapat}
            autoFocus
            className="rounded-full p-2 text-soluk hover:bg-yuzey2 hover:text-metin"
            aria-label="Kapat"
          >
            <X className="size-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
