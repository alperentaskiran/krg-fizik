import { Check, Copy, Info, QrCode } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import type { Soru } from '../data/tipler'
import { Pencere } from './Pencere'

interface Props {
  soru: Soru
  onKapat: () => void
}

/** Tahtadaki soruyu öğrencilerin telefonda açması için anlık yerel SVG QR kodu */
export function QrPenceresi({ soru, onKapat }: Props) {
  const [kopyalandi, setKopyalandi] = useState(false)
  // ?o=1 → öğrenci bağlantısı: karşılama mektubu öğrenci telefonunda hiç açılmaz
  const adres = `${location.origin}${location.pathname}#/soru/${soru.id}?o=1`
  const yerel = /^(localhost|127\.|\[::1\]|0\.0\.0\.0)/.test(location.hostname) || location.protocol === 'file:'

  const kopyala = async () => {
    try {
      await navigator.clipboard.writeText(adres)
      setKopyalandi(true)
      setTimeout(() => setKopyalandi(false), 1800)
    } catch {
      /* pano izni yoksa sessiz geç */
    }
  }

  return (
    <Pencere baslik={`Soruyu telefonda aç · ${soru.sinif}. Sınıf`} ikon={<QrCode className="size-6" />} onKapat={onKapat}>
      <div className="mx-auto w-full max-w-[22rem] rounded-2xl bg-white p-4">
        <QRCodeSVG value={adres} size={512} level="M" marginSize={1} className="h-auto w-full" title="Soru bağlantısı" />
      </div>
      <p className="mt-4 text-center text-sm text-soluk">Telefon kamerasını QR koda tutun.</p>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-yuzey2 px-3 py-2">
        <code className="min-w-0 flex-1 truncate text-xs">{adres}</code>
        <button
          type="button"
          onClick={kopyala}
          className="shrink-0 rounded-lg p-1.5 hover:bg-cizgi"
          aria-label="Bağlantıyı kopyala"
        >
          {kopyalandi ? <Check className="size-4 text-dogru" /> : <Copy className="size-4" />}
        </button>
      </div>
      {yerel && (
        <p className="mt-3 flex gap-2 rounded-xl border border-vurgu/40 bg-vurgu/10 p-3 text-xs leading-relaxed">
          <Info className="size-4 shrink-0 text-vurgu" />
          Uygulama şu an bu bilgisayarda (localhost) çalışıyor; öğrenci telefonları bu adrese ulaşamaz. GitHub Pages
          adresinden açtığınızda QR kod herkes için çalışır.
        </p>
      )}
    </Pencere>
  )
}
