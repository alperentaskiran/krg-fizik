import { ListChecks, Printer, Trash, X } from 'lucide-react'
import type { Soru } from '../data/tipler'
import { Matematik } from './Matematik'
import { Pencere } from './Pencere'

interface Props {
  sorular: Soru[]
  cevapAnahtari: boolean
  setCevapAnahtari: (v: boolean) => void
  onCikar: (id: string) => void
  onTemizle: () => void
  onGit: (id: string) => void
  onYazdir: () => void
  onKapat: () => void
}

export function TestPaneli(p: Props) {
  return (
    <Pencere baslik={`Yaprak Test · ${p.sorular.length} soru`} ikon={<ListChecks className="size-6" />} onKapat={p.onKapat} genis>
      {p.sorular.length === 0 ? (
        <p className="rounded-xl bg-yuzey2 p-4 text-sm text-soluk">
          Henüz soru eklenmedi. Alt bardaki <b className="text-metin">Teste Ekle</b> düğmesiyle soruları seçin; ardından
          buradan tek tıkla 2 sütunlu yaprak test çıktısı alın. (Liste boşken yazdırırsanız ekrandaki soru basılır.)
        </p>
      ) : (
        <ol className="max-h-[50vh] space-y-2 overflow-y-auto pr-1">
          {p.sorular.map((s, i) => (
            <li key={s.id} className="flex items-center gap-3 rounded-xl bg-yuzey2 px-3 py-2">
              <span className="w-6 text-center font-bold text-vurgu">{i + 1}</span>
              <button type="button" onClick={() => p.onGit(s.id)} className="min-w-0 flex-1 text-left text-sm">
                <span className="block text-xs text-soluk">
                  {s.sinif}. Sınıf · {s.tema} · {s.ogrenmeCiktisi}
                </span>
                <span className="line-clamp-1">
                  <Matematik metin={s.metin.split('\n')[0]} cokSatir={false} />
                </span>
              </button>
              <button
                type="button"
                onClick={() => p.onCikar(s.id)}
                className="rounded-lg p-1.5 text-soluk hover:bg-cizgi hover:text-yanlis"
                aria-label="Testten çıkar"
              >
                <X className="size-4" />
              </button>
            </li>
          ))}
        </ol>
      )}

      <label className="mt-4 flex cursor-pointer items-center gap-3 rounded-xl border border-cizgi px-4 py-3">
        <input
          type="checkbox"
          checked={p.cevapAnahtari}
          onChange={(e) => p.setCevapAnahtari(e.target.checked)}
          className="size-5 accent-[var(--vurgu)]"
        />
        <span className="text-sm">Çıktının sonuna cevap anahtarı ekle</span>
      </label>

      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={p.onTemizle}
          disabled={!p.sorular.length}
          className="flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm text-soluk hover:bg-yuzey2 hover:text-yanlis disabled:opacity-40"
        >
          <Trash className="size-4" /> Listeyi temizle
        </button>
        <button
          type="button"
          onClick={p.onYazdir}
          className="flex items-center justify-center gap-2 rounded-xl bg-vurgu px-5 py-2.5 font-bold text-vurgu-yazi hover:bg-vurgu-hover"
        >
          <Printer className="size-5" /> Yazdır / PDF Kaydet
        </button>
      </div>
    </Pencere>
  )
}
