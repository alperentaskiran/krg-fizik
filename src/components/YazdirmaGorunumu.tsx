import { ozelAyarlar } from '../config/ozelAyarlar'
import type { SecenekHarfi, Soru } from '../data/tipler'
import { Matematik } from './Matematik'

const HARFLER: SecenekHarfi[] = ['A', 'B', 'C', 'D', 'E']

interface Props {
  sorular: Soru[]
  cevapAnahtari: boolean
}

/** Yalnızca @media print'te görünen 2 sütunlu yaprak test */
export function YazdirmaGorunumu({ sorular, cevapAnahtari }: Props) {
  const siniflar = [...new Set(sorular.map((s) => s.sinif))].sort((a, b) => a - b)
  return (
    <div className="yalniz-yazdir">
      <header className="yaprak-baslik">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="antet-kutu" style={{ display: 'flex', alignItems: 'center', gap: '3mm' }}>
            <img src="./logo-full.png" alt="" style={{ width: '17mm', height: '17mm', borderRadius: '2mm' }} />
            <div style={{ lineHeight: 1.25 }}>
              <strong style={{ fontSize: '13pt', letterSpacing: '0.04em' }}>KRG FİZİK — AKILLI TAHTA &amp; SORU BANKASI</strong>
              <div style={{ fontSize: '9.5pt' }}>Yaprak Test</div>
            </div>
          </div>
          <span style={{ fontSize: '9.5pt' }}>
            {siniflar.map((s) => `${s}.`).join(' / ')} Sınıf · {sorular.length} soru
          </span>
        </div>
        <div style={{ display: 'flex', gap: '8mm', marginTop: '3mm', fontSize: '10pt' }}>
          <span style={{ flex: 2 }}>Ad Soyad: ..................................................</span>
          <span style={{ flex: 1 }}>Sınıf/No: ..................</span>
          <span style={{ flex: 1 }}>Tarih: ..... / ..... / ..........</span>
        </div>
      </header>

      <ol className="yaprak">
        {sorular.map((s, i) => (
          <li key={s.id}>
            <div style={{ display: 'flex', gap: '2mm' }}>
              <strong>{i + 1}.</strong>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '7.5pt', color: '#444', marginBottom: '1mm' }}>
                  {s.ogrenmeCiktisi} · {s.tema} · {s.zorluk}
                </div>
                <Matematik metin={s.metin} />
                {s.svgDiyagram && (
                  <figure className="sekil" style={{ margin: '2mm 0' }} dangerouslySetInnerHTML={{ __html: s.svgDiyagram }} />
                )}
                {s.secenekler ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.8mm', marginTop: '1.5mm' }}>
                    {HARFLER.filter((h) => s.secenekler?.[h]).map((h) => (
                      <div key={h} style={{ display: 'flex', gap: '1.5mm' }}>
                        <strong>{h})</strong>
                        <Matematik metin={s.secenekler![h]!} cokSatir={false} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ marginTop: '2mm' }}>
                    {Array.from({ length: 5 }, (_, k) => (
                      <div key={k} className="bos-satir" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>

      {cevapAnahtari && (
        <section className="anahtar">
          <strong>Cevap Anahtarı</strong>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2mm 6mm', marginTop: '2mm' }}>
            {sorular.map((s, i) => (
              <div key={s.id} style={{ display: 'flex', gap: '1.5mm' }}>
                <strong>{i + 1})</strong>
                <Matematik metin={s.dogruCevap} cokSatir={false} />
              </div>
            ))}
          </div>
        </section>
      )}
      <p style={{ marginTop: '4mm', fontSize: '8pt', color: '#555', textAlign: 'center' }}>
        {ozelAyarlar.markaAdi}
      </p>
    </div>
  )
}
