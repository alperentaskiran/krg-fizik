import {
  AArrowDown,
  AArrowUp,
  BookOpen,
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
import { SoruBankasi } from './components/SoruBankasi'
import { SoruKarti } from './components/SoruKarti'
import { TestPaneli } from './components/TestPaneli'
import { YazdirmaGorunumu } from './components/YazdirmaGorunumu'
import { mufredat } from './data/mufredat'
import { idSinif, siniflar, sinifYukle } from './data/sorular'
import type { SecenekHarfi, Sinif, Soru } from './data/tipler'
import { depoOku, depoYaz, useKalici } from './lib/depo'

type Tema = 'koyu' | 'yesil' | 'beyaz'
type Filtre = Sinif | 'hepsi'
const TEMALAR: { id: Tema; ad: string; renk: string }[] = [
  { id: 'koyu', ad: 'KRG Gece Tahtası', renk: '#071426' },
  { id: 'yesil', ad: 'Klasik Yeşil Tahta', renk: '#123326' },
  { id: 'beyaz', ad: 'Beyaz Kağıt', renk: '#f5f3ee' },
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
const ilkFiltre: Filtre = idSinif(ilkHash.id) ?? depoOku<Filtre>('filtre', 9)

export default function App() {
  // ── Kalıcı tercihler ──
  const [tema, setTema] = useKalici<Tema>('tema', 'koyu')
  const [olcek, setOlcek] = useKalici('olcek', 1)
  const [sinifModu, setSinifModu] = useKalici('sinifModu', false)
  const [testListesi, setTestListesi] = useKalici<string[]>('test', [])
  const [cevapAnahtari, setCevapAnahtari] = useKalici('cevapAnahtari', true)
  const ogrenci = useRef(ilkHash.ogrenci).current
  const gizli = sinifModu || ogrenci

  // ── Sınıf bazlı dinamik yükleme ──
  const [yuklu, setYuklu] = useState<Partial<Record<Sinif, Soru[]>>>({})
  const [filtre, setFiltre] = useState<Filtre>(ilkFiltre)
  const [temaFiltre, setTemaFiltre] = useState<string | null>(null)
  const [aktifId, setAktifId] = useState<string | null>(ilkHash.id ?? null)

  const gerekliSiniflar = useMemo(() => {
    const k = new Set<Sinif>(filtre === 'hepsi' ? siniflar : [filtre])
    for (const id of [aktifId, ...testListesi]) {
      const s = idSinif(id)
      if (s) k.add(s)
    }
    return [...k]
  }, [filtre, aktifId, testListesi])

  useEffect(() => {
    for (const s of gerekliSiniflar) {
      if (yuklu[s]) continue
      sinifYukle(s).then((l) => setYuklu((y) => (y[s] ? y : { ...y, [s]: l })))
    }
  }, [gerekliSiniflar, yuklu])

  useEffect(() => depoYaz('filtre', filtre), [filtre])

  const soruBul = useCallback(
    (id: string) => {
      const s = idSinif(id)
      return s ? yuklu[s]?.find((q) => q.id === id) : undefined
    },
    [yuklu],
  )

  const liste = useMemo(() => {
    const kaynak = filtre === 'hepsi' ? siniflar.flatMap((s) => yuklu[s] ?? []) : (yuklu[filtre] ?? [])
    return filtre === 'hepsi' || !temaFiltre ? kaynak : kaynak.filter((s) => s.tema === temaFiltre)
  }, [yuklu, filtre, temaFiltre])
  const yukleniyor = filtre === 'hepsi' ? siniflar.some((s) => !yuklu[s]) : !yuklu[filtre]

  // Etkin soru listede yoksa (filtre değişti / ilk açılış) listenin ilk sorusuna geç
  useEffect(() => {
    if (!liste.length) return
    if (!aktifId || !liste.some((s) => s.id === aktifId)) {
      const hedefSinif = idSinif(aktifId)
      const bekleniyor = aktifId && hedefSinif && !yuklu[hedefSinif]
      if (!bekleniyor) setAktifId(liste[0].id)
    }
  }, [liste, aktifId, yuklu])

  const sira = Math.max(0, liste.findIndex((s) => s.id === aktifId))
  const soru: Soru | undefined = liste.find((s) => s.id === aktifId)

  const [acikAdim, setAcikAdim] = useState(0)
  const [secilen, setSecilen] = useState<SecenekHarfi | null>(null)

  // ── Pencereler ──
  const [mektupAcik, setMektupAcik] = useState(() => !ilkSinifModu && !ilkHash.ogrenci)
  const [qrAcik, setQrAcik] = useState(false)
  const [testAcik, setTestAcik] = useState(false)
  const [bankaAcik, setBankaAcik] = useState(false)

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

  /** Herhangi bir sınıftaki soruya git: gerekirse filtreyi o sınıfa çevirir */
  const soruyaGit = useCallback(
    (id: string) => {
      const s = idSinif(id)
      if (s && filtre !== 'hepsi' && filtre !== s) {
        setFiltre(s)
        setTemaFiltre(null)
      }
      git(id)
    },
    [filtre, git],
  )

  const ileri = useCallback(() => {
    if (liste.length) git(liste[(sira + 1) % liste.length].id)
  }, [git, liste, sira])
  const geri = useCallback(() => {
    if (liste.length) git(liste[(sira - 1 + liste.length) % liste.length].id)
  }, [git, liste, sira])

  const adimToplam = soru?.adimAdimCozum.length ?? 0
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

  const testDegistir = useCallback(
    (id: string) => setTestListesi((l) => (l.includes(id) ? l.filter((x) => x !== id) : [...l, id])),
    [setTestListesi],
  )
  const testteMi = !!soru && testListesi.includes(soru.id)
  const testSorulari = useMemo(
    () => testListesi.map(soruBul).filter((s): s is Soru => s !== undefined),
    [testListesi, soruBul],
  )
  const yazdirilacak = testSorulari.length ? testSorulari : soru ? [soru] : []

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
    if (!soru) return
    const hedef = `#/soru/${soru.id}${ogrenci ? '?o=1' : ''}`
    if (location.hash !== hedef) history.replaceState(null, '', hedef)
  }, [soru, ogrenci])
  useEffect(() => {
    const dinle = () => {
      const { id } = hashOku()
      if (id && id !== aktifId && idSinif(id)) soruyaGit(id)
    }
    window.addEventListener('hashchange', dinle)
    return () => window.removeEventListener('hashchange', dinle)
  }, [aktifId, soruyaGit])
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
  const pencereAcik = mektupAcik || qrAcik || testAcik || bankaAcik
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
        setBankaAcik(false)
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
    else if ((k === 'q' || k === 'Q') && soru) setQrAcik(true)
    else if (k === 'b' || k === 'B') setBankaAcik(true)
    else if (k === 'Escape') setKalem(false)
    else if (soru?.secenekler && /^[a-eA-E]$/.test(k)) setSecilen(k.toUpperCase() as SecenekHarfi)
    else islendi = false
    if (islendi) e.preventDefault()
  }
  useEffect(() => {
    const f = (e: KeyboardEvent) => tusRef.current(e)
    window.addEventListener('keydown', f)
    return () => window.removeEventListener('keydown', f)
  }, [])

  const temaAdi = TEMALAR.find((t) => t.id === tema)!.ad
  const ilerleme = liste.length ? ((sira + 1) / liste.length) * 100 : 0

  return (
    <>
      <div className="ekran flex h-full flex-col">
        {/* ─────────── Üst bar ─────────── */}
        <header className="z-20 flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-cizgi bg-yuzey/90 px-3 py-2 backdrop-blur sm:px-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <img
              src="./logo-badge.png"
              alt="KRG Fizik amblemi"
              className="size-11 shrink-0 rounded-full shadow-[0_0_14px_rgba(226,180,85,0.35)]"
            />
            <div className="min-w-0 leading-tight">
              <h1 className="truncate font-serif text-xl font-extrabold tracking-wide">
                <span className="text-vurgu">KRG</span> <span className="text-ikincil">FİZİK</span>
              </h1>
              <p className="hidden truncate text-[0.7rem] tracking-wide text-soluk md:block">Akıllı Tahta &amp; Soru Bankası</p>
            </div>
          </div>

          <nav
            className="order-last flex w-full gap-1.5 overflow-x-auto [scrollbar-width:none] xl:order-none xl:w-auto xl:flex-1 xl:justify-center"
            aria-label="Sınıf filtresi"
          >
            {(['hepsi', ...siniflar] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setFiltre(s)
                  setTemaFiltre(null)
                }}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  filtre === s ? 'bg-vurgu text-vurgu-yazi' : 'bg-yuzey2 text-soluk hover:text-metin'
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
            <BarDugme etiket="Soru bankası (B)" onClick={() => setBankaAcik(true)}>
              <BookOpen />
            </BarDugme>
            <BarDugme etiket="Soruyu telefonda aç — QR (Q)" onClick={() => soru && setQrAcik(true)}>
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

        {/* İlerleme çubuğu */}
        <div className="h-1 w-full bg-yuzey2" aria-hidden>
          <div className="h-full bg-ikincil transition-[width] duration-300" style={{ width: `${ilerleme}%` }} />
        </div>

        {/* ─────────── Tema / ünite filtresi ─────────── */}
        {filtre !== 'hepsi' && (
          <nav
            className="z-10 flex gap-1.5 overflow-x-auto border-b border-cizgi2 bg-yuzey/70 px-3 py-1.5 [scrollbar-width:none] sm:px-5"
            aria-label="Tema filtresi"
          >
            {[null, ...mufredat[filtre].temalar.map((t) => t.ad)].map((ad) => (
              <button
                key={ad ?? 'tum'}
                type="button"
                onClick={() => setTemaFiltre(ad)}
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
            {soru ? (
              <div className="relative">
                <SoruKarti
                  soru={soru}
                  acikAdim={acikAdim}
                  secilen={secilen}
                  onSec={(h) => setSecilen((s) => (s === h ? null : h))}
                />
                <CizimKatmani ref={cizim} aktif={kalem} arac={arac} sayfa={soru.id} />
              </div>
            ) : (
              <div className="grid min-h-[50vh] place-items-center text-soluk">
                <div className="flex items-center gap-3">
                  <img src="./logo-badge.png" alt="" className="size-10 animate-pulse rounded-full" />
                  {yukleniyor ? 'Sorular yükleniyor…' : 'Bu filtrede soru bulunamadı.'}
                </div>
              </div>
            )}
          </div>
        </main>

        {/* ─────────── Alt yüzer bar (75" tahtada uzanmadan erişim) ─────────── */}
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:p-3">
          <div className="pointer-events-auto flex max-w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-cizgi bg-yuzey/95 p-1.5 shadow-2xl backdrop-blur sm:gap-1.5 sm:p-2">
            <DockDugme etiket="Önceki soru (←)" onClick={geri}>
              <ChevronLeft />
            </DockDugme>
            <button
              type="button"
              onClick={() => setBankaAcik(true)}
              title="Soru bankasını aç (B)"
              className="min-w-14 rounded-lg px-1 text-center text-sm font-bold tabular-nums hover:bg-yuzey2"
            >
              {liste.length ? sira + 1 : 0}
              <span className="text-soluk"> / {liste.length}</span>
            </button>
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
                  <DockDugme
                    key={a}
                    etiket={`${a === 'kirmizi' ? 'Kırmızı' : a === 'mavi' ? 'Mavi' : 'Yeşil'} kalem`}
                    onClick={() => setArac(a)}
                    aktif={arac === a}
                  >
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
              disabled={!soru}
              title="Çözümü adım adım aç / kapat (Enter · Boşluk)"
              className={`flex h-11 items-center gap-2 rounded-xl px-3 font-semibold transition lg:h-14 lg:px-4 lg:text-lg ${
                acikAdim ? 'bg-vurgu text-vurgu-yazi hover:bg-vurgu-hover' : 'bg-yuzey2 hover:bg-cizgi'
              }`}
            >
              {acikAdim >= adimToplam && adimToplam ? <RotateCcw className="size-5" /> : <Lightbulb className="size-5" />}
              <span className="hidden sm:inline">
                {acikAdim === 0 ? 'Çözüm' : acikAdim >= adimToplam ? 'Gizle' : 'Sonraki adım'}
              </span>
              <span className="text-xs tabular-nums opacity-80">
                {acikAdim}/{adimToplam}
              </span>
            </button>
            <button
              type="button"
              onClick={() => soru && testDegistir(soru.id)}
              disabled={!soru}
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
        {qrAcik && soru && <QrPenceresi soru={soru} onKapat={() => setQrAcik(false)} />}
        {bankaAcik && (
          <SoruBankasi
            baslik={`Soru Bankası · ${filtre === 'hepsi' ? 'Tüm sınıflar' : `${filtre}. Sınıf`}${temaFiltre ? ` · ${temaFiltre}` : ''}`}
            sorular={liste}
            aktifId={aktifId}
            testListesi={testListesi}
            onGit={(id) => {
              git(id)
              setBankaAcik(false)
            }}
            onTestDegistir={testDegistir}
            onKapat={() => setBankaAcik(false)}
          />
        )}
        {testAcik && (
          <TestPaneli
            sorular={testSorulari}
            cevapAnahtari={cevapAnahtari}
            setCevapAnahtari={setCevapAnahtari}
            onCikar={(id) => setTestListesi((l) => l.filter((x) => x !== id))}
            onTemizle={() => setTestListesi([])}
            onGit={(id) => {
              soruyaGit(id)
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
      className={`relative size-10 place-items-center rounded-full text-soluk transition hover:bg-yuzey2 hover:text-vurgu [&_svg]:size-5 ${
        p.gizliMobil ? 'hidden sm:grid' : 'grid'
      }`}
    >
      {p.children}
      {p.rozet !== undefined && (
        <span className="absolute -top-0.5 -right-0.5 grid min-w-5 place-items-center rounded-full bg-vurgu px-1 text-[0.65rem] font-bold text-vurgu-yazi">
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
