import { useCallback, useEffect, useImperativeHandle, useRef, type Ref } from 'react'

export type Arac = 'kirmizi' | 'mavi' | 'yesil' | 'fosforlu' | 'silgi'

export const ARAC_RENK: Record<Exclude<Arac, 'silgi'>, string> = {
  kirmizi: '#ef4444',
  mavi: '#3b82f6',
  yesil: '#22c55e',
  fosforlu: '#facc15',
}

interface Cizgi {
  arac: Arac
  kalinlik: number
  /** x0,y0,x1,y1,... (CSS piksel, katmana göre) */
  n: number[]
}

export interface CizimKontrol {
  geriAl: () => void
  temizle: () => void
}

interface Props {
  aktif: boolean
  arac: Arac
  /** Her soru için çizimler ayrı saklanır */
  sayfa: string
  ref?: Ref<CizimKontrol>
}

/** Düşük RAM'li tahtalarda bellek patlamasın diye tuval başına ~4K piksel sınırı */
const MAKS_PIKSEL = 3840 * 2160

function ciz(ctx: CanvasRenderingContext2D, c: Cizgi) {
  const p = c.n
  if (p.length < 2) return
  ctx.save()
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.lineWidth = c.kalinlik
  if (c.arac === 'silgi') {
    ctx.globalCompositeOperation = 'destination-out'
    ctx.strokeStyle = '#000'
  } else {
    ctx.globalCompositeOperation = 'source-over'
    ctx.strokeStyle = ARAC_RENK[c.arac]
    ctx.globalAlpha = c.arac === 'fosforlu' ? 0.38 : 1
  }
  ctx.beginPath()
  ctx.moveTo(p[0], p[1])
  if (p.length === 2) {
    ctx.lineTo(p[0] + 0.01, p[1])
  } else {
    for (let i = 2; i < p.length - 2; i += 2) {
      ctx.quadraticCurveTo(p[i], p[i + 1], (p[i] + p[i + 2]) / 2, (p[i + 1] + p[i + 3]) / 2)
    }
    ctx.lineTo(p[p.length - 2], p[p.length - 1])
  }
  ctx.stroke()
  ctx.restore()
}

/**
 * Sorunun tam üstünde şeffaf çizim katmanı.
 * PointerEvent (kalem / parmak / fare), touch-action:none, devicePixelRatio ölçekleme.
 */
export function CizimKatmani({ aktif, arac, sayfa, ref }: Props) {
  const tabanRef = useRef<HTMLCanvasElement>(null)
  const canliRef = useRef<HTMLCanvasElement>(null)
  const sayfalar = useRef(new Map<string, Cizgi[]>())
  const suanki = useRef<Cizgi | null>(null)
  const isaretci = useRef<number | null>(null)
  const kare = useRef(0)
  const boyut = useRef({ w: 0, h: 0, dpr: 1 })

  const liste = useCallback(() => {
    let l = sayfalar.current.get(sayfa)
    if (!l) {
      l = []
      sayfalar.current.set(sayfa, l)
    }
    return l
  }, [sayfa])

  const tabanYenile = useCallback(() => {
    const t = tabanRef.current
    const ctx = t?.getContext('2d')
    if (!t || !ctx) return
    const { w, h, dpr } = boyut.current
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, t.width, t.height)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    if (w && h) for (const c of liste()) ciz(ctx, c)
  }, [liste])

  // Boyutlandırma (ResizeObserver + DPR)
  useEffect(() => {
    const t = tabanRef.current
    const c = canliRef.current
    const ebeveyn = t?.parentElement
    if (!t || !c || !ebeveyn) return
    const ayarla = () => {
      const w = ebeveyn.clientWidth
      const h = ebeveyn.clientHeight
      const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, Math.sqrt(MAKS_PIKSEL / Math.max(1, w * h))))
      boyut.current = { w, h, dpr }
      for (const cv of [t, c]) {
        cv.width = Math.round(w * dpr)
        cv.height = Math.round(h * dpr)
        cv.style.width = w + 'px'
        cv.style.height = h + 'px'
      }
      canliRef.current?.getContext('2d')?.setTransform(dpr, 0, 0, dpr, 0, 0)
      tabanYenile()
    }
    ayarla()
    const ro = new ResizeObserver(ayarla)
    ro.observe(ebeveyn)
    return () => ro.disconnect()
  }, [tabanYenile])

  // Soru değişince o sorunun çizimlerini getir
  useEffect(() => {
    tabanYenile()
  }, [sayfa, tabanYenile])

  useImperativeHandle(
    ref,
    () => ({
      geriAl: () => {
        liste().pop()
        tabanYenile()
      },
      temizle: () => {
        sayfalar.current.set(sayfa, [])
        tabanYenile()
      },
    }),
    [liste, sayfa, tabanYenile],
  )

  const canliCiz = () => {
    kare.current = 0
    const c = canliRef.current
    const ctx = c?.getContext('2d')
    if (!c || !ctx || !suanki.current) return
    const { dpr } = boyut.current
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ciz(ctx, suanki.current)
  }

  const konum = (e: { clientX: number; clientY: number }) => {
    const r = canliRef.current!.getBoundingClientRect()
    return [e.clientX - r.left, e.clientY - r.top]
  }

  const kalinlikHesapla = () => {
    const temel = Math.max(3, Math.min(9, boyut.current.w * 0.0028))
    if (arac === 'fosforlu') return temel * 4.5
    if (arac === 'silgi') return temel * 9
    return temel
  }

  const onDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!aktif || isaretci.current !== null || e.button > 0) return
    e.preventDefault()
    isaretci.current = e.pointerId
    e.currentTarget.setPointerCapture(e.pointerId)
    suanki.current = { arac, kalinlik: kalinlikHesapla(), n: konum(e) }
    if (arac !== 'silgi') canliCiz()
  }

  const onMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (e.pointerId !== isaretci.current || !suanki.current) return
    const s = suanki.current
    const olaylar = e.nativeEvent.getCoalescedEvents?.() ?? [e.nativeEvent]
    for (const o of olaylar) {
      const [x, y] = konum(o)
      const lx = s.n[s.n.length - 2]
      const ly = s.n[s.n.length - 1]
      if (Math.abs(x - lx) + Math.abs(y - ly) < 1.2) continue
      s.n.push(x, y)
      if (s.arac === 'silgi') {
        const ctx = tabanRef.current?.getContext('2d')
        if (ctx) ciz(ctx, { ...s, n: [lx, ly, x, y] })
      }
    }
    if (s.arac !== 'silgi' && !kare.current) kare.current = requestAnimationFrame(canliCiz)
  }

  const onUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (e.pointerId !== isaretci.current) return
    isaretci.current = null
    const s = suanki.current
    suanki.current = null
    if (kare.current) cancelAnimationFrame(kare.current)
    kare.current = 0
    const c = canliRef.current
    c?.getContext('2d')?.clearRect(0, 0, c.width, c.height)
    if (!s) return
    liste().push(s)
    const ctx = tabanRef.current?.getContext('2d')
    if (ctx && s.arac !== 'silgi') ciz(ctx, s)
  }

  const ortak = 'absolute inset-0 cizim-katmani'
  return (
    <>
      <canvas ref={tabanRef} className={ortak} style={{ pointerEvents: 'none' }} aria-hidden />
      <canvas
        ref={canliRef}
        className={ortak}
        style={{
          pointerEvents: aktif ? 'auto' : 'none',
          cursor: aktif ? (arac === 'silgi' ? 'cell' : 'crosshair') : 'default',
        }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        aria-label="Çizim katmanı"
      />
    </>
  )
}
