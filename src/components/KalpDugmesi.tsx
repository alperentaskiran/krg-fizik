import { Gift, Heart } from 'lucide-react'
import { useRef, useState } from 'react'

interface Props {
  /** Sınıf modu açıkken mektup yalnızca basılı tutunca açılır (öğrenci yanlışlıkla açmasın) */
  kilitli: boolean
  onAc: () => void
}

const SURE = 900

export function KalpDugmesi({ kilitli, onAc }: Props) {
  const [doluluk, setDoluluk] = useState(0)
  const zaman = useRef<number | null>(null)
  const baslangic = useRef(0)

  const birak = () => {
    if (zaman.current) cancelAnimationFrame(zaman.current)
    zaman.current = null
    setDoluluk(0)
  }

  const bas = (e: React.PointerEvent) => {
    if (!kilitli) return
    e.preventDefault()
    baslangic.current = performance.now()
    const dongu = () => {
      const o = Math.min(1, (performance.now() - baslangic.current) / SURE)
      setDoluluk(o)
      if (o >= 1) {
        birak()
        onAc()
      } else zaman.current = requestAnimationFrame(dongu)
    }
    zaman.current = requestAnimationFrame(dongu)
  }

  const C = 2 * Math.PI * 17
  return (
    <button
      type="button"
      onClick={() => !kilitli && onAc()}
      onPointerDown={bas}
      onPointerUp={birak}
      onPointerLeave={birak}
      onPointerCancel={birak}
      onContextMenu={(e) => e.preventDefault()}
      className={`relative grid size-10 shrink-0 place-items-center rounded-full transition ${
        kilitli ? 'text-soluk/60 hover:text-kalp' : 'bg-kalp/15 text-kalp hover:bg-kalp/25'
      }`}
      title={kilitli ? 'Mektubu açmak için basılı tutun' : '24 Kasım mektubunu aç'}
      aria-label={kilitli ? 'Mektubu açmak için basılı tutun' : 'Öğretmenler Günü mektubunu aç'}
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 40 40" aria-hidden>
        <circle
          cx="20"
          cy="20"
          r="17"
          fill="none"
          stroke="var(--kalp)"
          strokeWidth="2.5"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - doluluk)}
          strokeLinecap="round"
          style={{ opacity: doluluk ? 1 : 0 }}
        />
      </svg>
      {kilitli ? <Gift className="size-5" /> : <Heart className="size-5 fill-current" />}
    </button>
  )
}
