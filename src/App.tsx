import {
  AArrowDown,
  AArrowUp,
  ChevronLeft,
  ChevronRight,
  Download,
  Eraser,
  Highlighter,
  Lightbulb,
  ListChecks,
  ListPlus,
  Lock,
  LockOpen,
  Maximize,
  Minimize,
  Palette,
  Pen,
  QrCode,
  RotateCcw,
  Trash,
  Undo2,
} from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { ARAC_RENK, CizimKatmani, type Arac, type CizimKontrol } from './components/CizimKatmani'
import { KalpDugmesi } from './components/KalpDugmesi'
import { KarsilamaKarti } from './components/KarsilamaKarti'
import { QrPenceresi } from './components/QrPenceresi'
import { SoruKarti } from './components/SoruKarti'
import { TestPaneli } from './components/TestPaneli'
import { YazdirmaGorunumu } from './components/YazdirmaGorunumu'
import { ozelAyarlar } from './config/ozelAyarlar'
import { mufredat } from './data/mufredat'
import { siniflar, soruBul, tumSorular } from './data/sorular'
import type { SecenekHarfi, Sinif } from './data/tipler'
import { depoOku, useKalici } from './lib/depo'

type Tema = 'koyu' | 'yesil' | 'beyaz'
const TEMALAR: { id: Tema; ad: string; renk: string }[] = [
  { id: 'koyu', ad: 'Koyu Tahta', renk: '#0b1220' },
  { id: 'yesil', ad: 'Klasik Yeşil Tahta', renk: '#163428' },
  { id: 'beyaz', ad: 'Beyaz Kağıt', renk: '#f4f2ec' },
]

interface KurulumOlayi extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: string }>
}

/** Hash tabanlı yönlendirme: #/soru/<id>  (öğrenci bağlantısı: #/soru/<id>?o=1) */
function hashOku() {
  const h = location.hash.replace(/^#\/?/, '')
  const [yol, sorgu = ''] = h.split('?')
  const m = yol.match(/^soru\/([\w-]+)/)
  return { id: m?.[1], ogrenci: new URLSearchParams(sorgu).get('o') === '1' }
}

const ilkHash = hashOku()
const ilkSinifModu = depoOku('sinifModu', false)

export default function App() {
  // ── Kalıcı tercihler ──
  const [tema, setTema] = useKalici<Tema>('tema', 'koyu')
  const [olcek, setOlcek] = useKalici('olcek', 1)
  const [sinifModu, setSinifModu] = useKalici('sinifModu', false)
  const [testListesi, setTestListesi] = useKalici<string[]>('test', [])
  const [cevapAnahtari, setCevapAnahtari] = useKalici('cevapAnahtari', true)
  const ogrenci = useRef(ilkHash.ogrenci).current
  const gizli = sinifModu || ogrenci

  // ── Gezinme ──
  const [filtre, setFiltre] = useState<Sinif | 'hepsi'>('hepsi')
  const [temaFiltre, setTemaFiltre] = useState<string | null>(null)
  const [aktifId, setAktifId] = useState(() => (ilkHash.id && soruBul(ilkHash.id) ? ilkHash.id : tumSorular[0].id))
  const liste = useMemo(
    () =>
      tumSorular.filter(
        (s) => (filtre === 'hepsi' || s.sinif === filtre) && (filtre === 'hepsi' || !temaFiltre || s.tema === temaFiltre),
      ),
    [filtre, temaFiltre],
  )
  const sira = Math.max(0, liste.findIndex((s) => s.id === aktifId))
  const soru = liste[sira] ?? tumSorular[0]

  const [acikAdim, setAcikAdim] = useState(0)
  const [secilen, setSecilen] = useState<SecenekHarfi | null>(null)

  // ── Pencereler ──
  const [mektupAcik, setMektupAcik] = useState(() => !ilkSinifModu && !ilkHash.ogrenci)
  const [qrAcik, setQrAcik] = useState(false)
  const [testAcik, setTestAcik] = useState(false)

  // ── Çizim ──
  const [kalem, setKalem] = useState(false)
  const [arac, setArac] = useState<Arac>('kirmizi')
  const cizim = useRef<CizimKontrol>(null)

  // ── Ekran ──
  const [tamEkran, setTamEkran] = useState(false)
  const [kurulum, setKurulum] = useState<KurulumOlayi | null>(null)
  const kaydirma = useRef<HTMLElement>(null)

  const git = useCallback((id: string) => {
    setAktifId(id)
    setAcikAdim(0)
    setSecilen(null)
    kaydirma.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const ileri = useCallback(() => git(liste[(sira + 1) % liste.length].id), [git, liste, sira])
  const geri = useCallback(() => git(liste[(sira - 1 + liste.length) % liste.length].id), [git, liste, sira])

  const adimToplam = soru.adimAdimCozum.length
  const adimIleri = useCallback(() => setAcikAdim((a) => (a >= adimToplam ? 0 : a + 1)), [adimToplam])
  const adimGeri = useCallback(() => setAcikAdim((a) => Math.max(0, a - 1)), [])

  const tamEkranDegistir = useCallback(() => {
    const d = document as Document & { webkitExitFullscreen?: () => void; webkitFullscreenElement?: Element }
    const el = document.documentElement as HTMLElement & { webkitRequestFullscreen?: () => void }
    if (document.fullscreenElement || d.webkitFullscreenElement) {
      ;(document.exitFullscreen?.() ?? d.webkitExitFullscreen?.())?.catch?.(() => {})
    } else {
      ;(el.requestFullscreen?.() ?? el.webkitRequestFullscreen?.())?.catch?.(() => {})
    }
  }, [])

  const puntoDegistir = useCallback(
    (fark: number) => setOlcek((o) => Math.round(Math.min(2.2, Math.max(0.7, o + fark)) * 10) / 10),
    [setOlcek],
  )
  const temaDegistir = useCallback(
    () => setTema((t) => TEMALAR[(TEMALAR.findIndex((x) => x.id === t) + 1) % TEMALAR.length].id),
    [setTema],
  )

  const testteMi = testListesi.includes(soru.id)
  const testDegistir = () =>
    setTestListesi((l) => (l.includes(soru.id) ? l.filter((x) => x !== soru.id) : [...l, soru.id]))

  const yazdirilacak = useMemo(() => {
    const l = testListesi.map(soruBul).filter((s) => s !== undefined)
    return l.length ? l : [soru]
  }, [testListesi, soru])

  const yazdir = () => {
    setTestAcik(false)
    setTimeout(() => window.print(), 80)
  }

  // ── Tema / punto / hash yan etkileri ──
  useEffect(() => {
    document.documentElement.dataset.tema = tema
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', TEMALAR.find((t) => t.id === tema)!.renk)
  }, [tema])
  useEffect(() => document.documentElement.style.setProperty('--olcek', String(olcek)), [olcek])
  useEffect(() => {
    const hedef = `#/soru/${soru.id}${ogrenci ? '?o=1' : ''}`
    if (location.hash !== hedef) history.replaceState(null, '', hedef)
  }, [soru.id, ogrenci])
  useEffect(() => {
    const dinle = () => {
      const { id } = hashOku()
      if (id && id !== aktifId && soruBul(id)) {
        setFiltre('hepsi')
        setTemaFiltre(null)
        git(id)
      }
    }
    window.addEventListener('hashchange', dinle)
    return () => window.removeEventListener('hashchange', dinle)
  }, [aktifId, git])
  useEffect(() => {
    if (sinifModu) setMektupAcik(false)
  }, [sinifModu])

  // ── Tam ekran & PWA kurulum olayları ──
  useEffect(() => {
    const fs = () => setTamEkran(!!document.fullscreenElement)
    const kur = (e: Event) => {
      e.preventDefault()
      setKurulum(e as KurulumOlayi)
    }
    const kuruldu = () => setKurulum(null)
    document.addEventListener('fullscreenchange', fs)
    window.addEventListener('beforeinstallprompt', kur)
    window.addEventListener('appinstalled', kuruldu)
    return () => {
      document.removeEventListener('fullscreenchange', fs)
      window.removeEventListener('beforeinstallprompt', kur)
      window.removeEventListener('appinstalled', kuruldu)
    }
  }, [])

  // ── TV kumandası / klavye ──
  const pencereAcik = mektupAcik || qrAcik || testAcik
  const tusRef = useRef<(e: KeyboardEvent) => void>(() => {})
  tusRef.current = (e: KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return
    const hedef = e.target as HTMLElement
    if (hedef.closest('input, textarea, select, [contenteditable="true"]')) return
    if (pencereAcik) {
      if (e.key === 'Escape') {
        setMektupAcik(false)
        setQrAcik(false)
        setTestAcik(false)
      }
      return
    }
    const k = e.key
    let islendi = true
    if (k === 'ArrowRight' || k === 'PageDown' || k === 'MediaTrackNext') ileri()
    else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'MediaTrackPrevious') geri()
    else if (k === 'Enter' || k === ' ' || k === 'MediaPlayPause') adimIleri()
    else if (k === 'Backspace' || k === 'ArrowUp') adimGeri()
    else if (k === 'f' || k === 'F') tamEkranDegistir()
    else if (k === '+' || k === '=') puntoDegistir(0.1)
    else if (k === '-' || k === '_') puntoDegistir(-0.1)
    else if (k === 't' || k === 'T') temaDegistir()
    else if (k === 'k' || k === 'K') setKalem((x) => !x)
    else if (k === 'q' || k === 'Q') setQrAcik(true)
    else if (k === 'Escape') setKalem(false)
    else if (soru.secenekler && /^[a-eA-E]$/.test(k)) setSecilen(k.toUpperCase() as SecenekHarfi)
    else islendi = false
    if (islendi) e.preventDefault()
  }
  useEffect(() => {
    const f = (e: KeyboardEvent) => tusRef.current(e)
    window.addEventListener('keydown', f)
    return () => window.removeEventListener('keydown', f)
  }, [])

  const temaAdi = TEMALAR.find((t) => t.id === tema)!.ad

  return (
    <>
      <div className="ekran flex h-full flex-col">
        {/* ─────────── Üst bar ─────────── */}
        <header className="z-20 flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-cizgi bg-yuzey/95 px-3 py-2 backdrop-blur sm:px-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <img src="./logo.webp" alt="KRG Fizik logosu" className="size-10 rounded-xl" />
            <div className="min-w-0 leading-tight">
              <h1 className="truncate text-lg font-extrabold tracking-tight">
                {ozelAyarlar.markaAdi}
                <span className="ml-1.5 text-xs font-semibold text-vurgu">{ozelAyarlar.uygulamaAdi}</span>
              </h1>
              <p className="hidden truncate text-xs text-soluk md:block">{ozelAyarlar.altBaslik}</p>
            </div>
          </div>

          <nav className="order-last flex w-full gap-1.5 overflow-x-auto [scrollbar-width:none] xl:order-none xl:w-auto xl:flex-1 xl:justify-center" aria-label="Sınıf filtresi">
            {(['hepsi', ...siniflar] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setFiltre(s)
                  setTemaFiltre(null)
                  const ilk = s === 'hepsi' ? tumSorular[0] : tumSorular.find((q) => q.sinif === s)
                  if (ilk && !(s === 'hepsi' || soru.sinif === s)) git(ilk.id)
                }}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  filtre === s ? 'bg-vurgu text-zemin' : 'bg-yuzey2 text-soluk hover:text-metin'
                }`}
              >
                {s === 'hepsi' ? 'Tümü' : `${s}. Sınıf`}
              </button>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <BarDugme etiket="Yazıyı küçült (−)" onClick={() => puntoDegistir(-0.1)} gizliMobil>
              <AArrowDown />
            </BarDugme>
            <span className="hidden w-10 text-center text-xs text-soluk tabular-nums sm:block">{Math.round(olcek * 100)}%</span>
            <BarDugme etiket="Yazıyı büyüt (+)" onClick={() => puntoDegistir(0.1)} gizliMobil>
              <AArrowUp />
            </BarDugme>
            <BarDugme etiket={`Tahta teması: ${temaAdi} (T)`} onClick={temaDegistir}>
              <Palette />
            </BarDugme>
            <BarDugme etiket="Soruyu telefonda aç — QR (Q)" onClick={() => setQrAcik(true)}>
              <QrCode />
            </BarDugme>
            <BarDugme etiket="Yaprak test / yazdır" onClick={() => setTestAcik(true)} rozet={testListesi.length || undefined}>
              <ListChecks />
            </BarDugme>
            {kurulum && (
              <BarDugme
                etiket="Uygulamayı kur (çevrimdışı)"
                onClick={async () => {
                  await kurulum.prompt()
                  setKurulum(null)
                }}
              >
                <Download />
              </BarDugme>
            )}
            <BarDugme etiket="Tam ekran (F)" onClick={tamEkranDegistir} gizliMobil>
              {tamEkran ? <Minimize /> : <Maximize />}
            </BarDugme>
            {!ogrenci && (
              <button
                type="button"
                onClick={() => setSinifModu((m) => !m)}
                aria-pressed={sinifModu}
                title={sinifModu ? 'Sınıf modu açık — kişisel mektup gizli' : 'Sınıf modunu aç'}
                className={`flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-semibold transition ${
                  sinifModu ? 'bg-ikincil/20 text-ikincil' : 'bg-yuzey2 text-soluk hover:text-metin'
                }`}
              >
                {sinifModu ? <Lock className="size-4" /> : <LockOpen className="size-4" />}
                <span className="hidden md:inline">Sınıf Modu</span>
              </button>
            )}
            {!ogrenci && <KalpDugmesi kilitli={gizli} onAc={() => setMektupAcik(true)} />}
          </div>
        </header>

        {/* ─────────── Tema / ünite filtresi ─────────── */}
        {filtre !== 'hepsi' && (
          <nav
            className="z-10 flex gap-1.5 overflow-x-auto border-b border-cizgi bg-yuzey/80 px-3 py-1.5 [scrollbar-width:none] sm:px-5"
            aria-label="Tema filtresi"
          >
            {[null, ...mufredat[filtre].temalar.map((t) => t.ad)].map((ad) => (
              <button
                key={ad ?? 'tum'}
                type="button"
                onClick={() => {
                  setTemaFiltre(ad)
                  const ilk = tumSorular.find((q) => q.sinif === filtre && (!ad || q.tema === ad))
                  if (ilk && ad && soru.tema !== ad) git(ilk.id)
                }}
                className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold transition ${
                  temaFiltre === ad ? 'border-ikincil bg-ikincil/15 text-ikincil' : 'border-cizgi text-soluk hover:text-metin'
                }`}
              >
                {ad ?? 'Tüm temalar'}
              </button>
            ))}
          </nav>
        )}

        {/* ─────────── Soru + çizim katmanı ─────────── */}
        <main ref={kaydirma} className="relative flex-1 overflow-y-auto">
          <div className="mx-auto max-w-[120rem] pb-40">
            <div className="relative">
              <SoruKarti
                soru={soru}
                acikAdim={acikAdim}
                secilen={secilen}
                onSec={(h) => setSecilen((s) => (s === h ? null : h))}
              />
              <CizimKatmani ref={cizim} aktif={kalem} arac={arac} sayfa={soru.id} />
            </div>
          </div>
        </main>

        {/* ─────────── Alt yüzer bar (75" tahtada uzanmadan erişim) ─────────── */}
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:p-3">
          <div className="pointer-events-auto flex max-w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-cizgi bg-yuzey/95 p-1.5 shadow-2xl backdrop-blur sm:gap-1.5 sm:p-2">
            <DockDugme etiket="Önceki soru (←)" onClick={geri}>
              <ChevronLeft />
            </DockDugme>
            <span className="min-w-14 text-center text-sm font-bold tabular-nums">
              {sira + 1}
              <span className="text-soluk"> / {liste.length}</span>
            </span>
            <DockDugme etiket="Sonraki soru (→)" onClick={ileri}>
              <ChevronRight />
            </DockDugme>

            <Ayrac />

            <DockDugme etiket="Kalem / çizim katmanı (K)" onClick={() => setKalem((k) => !k)} aktif={kalem}>
              <Pen />
            </DockDugme>
            {kalem && (
              <>
                {(['kirmizi', 'mavi', 'yesil'] as const).map((a) => (
                  <DockDugme key={a} etiket={`${a === 'kirmizi' ? 'Kırmızı' : a === 'mavi' ? 'Mavi' : 'Yeşil'} kalem`} onClick={() => setArac(a)} aktif={arac === a}>
                    <span className="size-6 rounded-full border-2 border-white/70 lg:size-7" style={{ background: ARAC_RENK[a] }} />
                  </DockDugme>
                ))}
                <DockDugme etiket="Fosforlu kalem" onClick={() => setArac('fosforlu')} aktif={arac === 'fosforlu'}>
                  <Highlighter style={{ color: ARAC_RENK.fosforlu }} />
                </DockDugme>
                <DockDugme etiket="Silgi" onClick={() => setArac('silgi')} aktif={arac === 'silgi'}>
                  <Eraser />
                </DockDugme>
                <DockDugme etiket="Geri al" onClick={() => cizim.current?.geriAl()}>
                  <Undo2 />
                </DockDugme>
                <DockDugme etiket="Çizimleri temizle" onClick={() => cizim.current?.temizle()}>
                  <Trash />
                </DockDugme>
              </>
            )}

            <Ayrac />

            <button
              type="button"
              onClick={adimIleri}
              title="Çözümü adım adım aç / kapat (Enter · Boşluk)"
              className={`flex h-11 items-center gap-2 rounded-xl px-3 font-semibold transition lg:h-14 lg:px-4 lg:text-lg ${
                acikAdim ? 'bg-vurgu text-zemin' : 'bg-yuzey2 hover:bg-cizgi'
              }`}
            >
              {acikAdim >= adimToplam ? <RotateCcw className="size-5" /> : <Lightbulb className="size-5" />}
              <span className="hidden sm:inline">
                {acikAdim === 0 ? 'Çözüm' : acikAdim >= adimToplam ? 'Gizle' : 'Sonraki adım'}
              </span>
              <span className="text-xs tabular-nums opacity-80">
                {acikAdim}/{adimToplam}
              </span>
            </button>
            <button
              type="button"
              onClick={testDegistir}
              title={testteMi ? 'Testten çıkar' : 'Bu soruyu yaprak teste ekle'}
              className={`flex h-11 items-center gap-2 rounded-xl px-3 font-semibold transition lg:h-14 lg:px-4 lg:text-lg ${
                testteMi ? 'bg-dogru/20 text-dogru' : 'bg-yuzey2 hover:bg-cizgi'
              }`}
            >
              {testteMi ? <ListChecks className="size-5" /> : <ListPlus className="size-5" />}
              <span className="hidden sm:inline">{testteMi ? 'Testte' : 'Teste Ekle'}</span>
            </button>
          </div>
        </div>

        {/* ─────────── Pencereler ─────────── */}
        {mektupAcik && (
          <KarsilamaKarti
            onKapat={() => setMektupAcik(false)}
            onSinifModu={() => {
              setSinifModu(true)
              setMektupAcik(false)
              if (!document.fullscreenElement) tamEkranDegistir()
            }}
          />
        )}
        {qrAcik && <QrPenceresi soru={soru} onKapat={() => setQrAcik(false)} />}
        {testAcik && (
          <TestPaneli
            sorular={testListesi.map(soruBul).filter((s) => s !== undefined)}
            cevapAnahtari={cevapAnahtari}
            setCevapAnahtari={setCevapAnahtari}
            onCikar={(id) => setTestListesi((l) => l.filter((x) => x !== id))}
            onTemizle={() => setTestListesi([])}
            onGit={(id) => {
              setFiltre('hepsi')
              setTemaFiltre(null)
              git(id)
              setTestAcik(false)
            }}
            onYazdir={yazdir}
            onKapat={() => setTestAcik(false)}
          />
        )}
      </div>

      <YazdirmaGorunumu sorular={yazdirilacak} cevapAnahtari={cevapAnahtari} />
    </>
  )
}

function BarDugme(p: { etiket: string; onClick: () => void; children: ReactNode; gizliMobil?: boolean; rozet?: number }) {
  return (
    <button
      type="button"
      onClick={p.onClick}
      title={p.etiket}
      aria-label={p.etiket}
      className={`relative size-10 place-items-center rounded-full text-soluk transition hover:bg-yuzey2 hover:text-metin [&_svg]:size-5 ${
        p.gizliMobil ? 'hidden sm:grid' : 'grid'
      }`}
    >
      {p.children}
      {p.rozet !== undefined && (
        <span className="absolute -top-0.5 -right-0.5 grid min-w-5 place-items-center rounded-full bg-vurgu px-1 text-[0.65rem] font-bold text-zemin">
          {p.rozet}
        </span>
      )}
    </button>
  )
}

function DockDugme(p: { etiket: string; onClick: () => void; children: ReactNode; aktif?: boolean }) {
  return (
    <button
      type="button"
      onClick={p.onClick}
      title={p.etiket}
      aria-label={p.etiket}
      aria-pressed={p.aktif}
      className={`grid size-11 place-items-center rounded-xl transition lg:size-14 [&_svg]:size-5 lg:[&_svg]:size-6 ${
        p.aktif ? 'bg-ikincil/25 text-ikincil ring-2 ring-ikincil' : 'hover:bg-yuzey2'
      }`}
    >
      {p.children}
    </button>
  )
}

function Ayrac() {
  return <span className="mx-0.5 hidden h-8 w-px bg-cizgi sm:block" aria-hidden />
}
