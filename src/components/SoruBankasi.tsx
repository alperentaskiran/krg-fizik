import { BookOpen, ListChecks, ListPlus, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { Soru } from '../data/tipler'
import { Pencere } from './Pencere'

const SAYFA = 20

/** KaTeX derlemeden, listede gösterilecek hafif düz metin önizleme */
function duzMetin(s: string) {
  return s
    .replace(/\$\$?([^$]+)\$\$?/g, (_, m: string) =>
      m
        .replace(/\\text\{([^}]*)\}/g, '$1')
        .replace(/\\[a-zA-Z]+/g, ' ')
        .replace(/[{}\\^_]/g, '')
        .replace(/\s+/g, ' '),
    )
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

const ZORLUK_RENK: Record<Soru['zorluk'], string> = {
  Temel: 'text-dogru',
  Orta: 'text-vurgu',
  İleri: 'text-kalp',
}

interface Props {
  baslik: string
  sorular: Soru[]
  aktifId: string | null
  testListesi: string[]
  onGit: (id: string) => void
  onTestDegistir: (id: string) => void
  onKapat: () => void
}

/**
 * Soru bankası çekmecesi: 600+ soru aynı anda DOM'a basılmaz; 20'şerli sayfalar hâlinde
 * "Daha fazla göster" ile açılır. Önizlemelerde KaTeX derlenmez (düşük işlemcili tahtalar için).
 */
export function SoruBankasi(p: Props) {
  const [arama, setArama] = useState('')
  const [adet, setAdet] = useState(SAYFA)

  const sonuc = useMemo(() => {
    const q = arama.trim().toLocaleLowerCase('tr')
    if (!q) return p.sorular
    return p.sorular.filter((s) =>
      `${s.id} ${s.ogrenmeCiktisi} ${s.tema} ${duzMetin(s.metin)}`.toLocaleLowerCase('tr').includes(q),
    )
  }, [arama, p.sorular])

  const gorunen = sonuc.slice(0, adet)

  return (
    <Pencere baslik={p.baslik} ikon={<BookOpen className="size-6" />} onKapat={p.onKapat} genis>
      <label className="mb-3 flex items-center gap-2 rounded-xl border border-cizgi2 bg-yuzey2 px-3 py-2">
        <Search className="size-4 text-ikincil" />
        <input
          value={arama}
          onChange={(e) => {
            setArama(e.target.value)
            setAdet(SAYFA)
          }}
          placeholder="Ara: kavram, kod (FİZ.10.3.4) veya soru no"
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-soluk"
        />
        <span className="shrink-0 text-xs text-soluk tabular-nums">{sonuc.length} soru</span>
      </label>

      <ol className="max-h-[58vh] space-y-1.5 overflow-y-auto pr-1">
        {gorunen.map((s) => {
          const testte = p.testListesi.includes(s.id)
          return (
            <li
              key={s.id}
              className={`flex items-start gap-2 rounded-xl border px-3 py-2 ${
                s.id === p.aktifId ? 'border-vurgu bg-vurgu/10' : 'border-transparent bg-yuzey2/70'
              }`}
            >
              <button type="button" onClick={() => p.onGit(s.id)} className="min-w-0 flex-1 text-left">
                <span className="flex flex-wrap items-center gap-x-2 text-[0.7rem] text-soluk">
                  <span className="font-mono font-semibold text-ikincil">{s.ogrenmeCiktisi}</span>
                  <span className={ZORLUK_RENK[s.zorluk]}>{s.zorluk}</span>
                  <span>{s.soruTipi === 'coktan_secmeli' ? 'Test' : 'Açık uçlu'}</span>
                  {s.svgDiyagram && <span>· şekilli</span>}
                </span>
                <span className="line-clamp-2 text-sm">{duzMetin(s.metin)}</span>
              </button>
              <button
                type="button"
                onClick={() => p.onTestDegistir(s.id)}
                className={`mt-1 shrink-0 rounded-lg p-1.5 ${testte ? 'text-dogru' : 'text-soluk hover:text-metin'}`}
                aria-label={testte ? 'Testten çıkar' : 'Teste ekle'}
                title={testte ? 'Testten çıkar' : 'Teste ekle'}
              >
                {testte ? <ListChecks className="size-4" /> : <ListPlus className="size-4" />}
              </button>
            </li>
          )
        })}
        {!gorunen.length && <li className="p-4 text-center text-sm text-soluk">Sonuç bulunamadı.</li>}
      </ol>

      {adet < sonuc.length && (
        <button
          type="button"
          onClick={() => setAdet((a) => a + SAYFA)}
          className="mt-3 w-full rounded-xl border border-cizgi2 py-2.5 text-sm font-semibold text-ikincil hover:bg-ikincil/10"
        >
          Daha fazla göster ({gorunen.length} / {sonuc.length})
        </button>
      )}
    </Pencere>
  )
}
