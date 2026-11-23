#!/usr/bin/env python3
"""
KRG Fizik · MEB ders kitabı özet çıkarıcı
=========================================

raw_books/9, raw_books/10, raw_books/11, raw_books/12 klasörlerindeki PDF'leri
SAYFA SAYFA (belleği şişirmeden) okur ve şunları raw_books/_ozet/ altına
düz metin olarak yazar:

  • İçindekiler sayfaları
  • Maarif temaları (örn. "1. TEMA: KUVVET VE HAREKET")
  • Öğrenme çıktıları (örn. "FİZ.9.1.2. ...") ve süreç bileşenleri (a), b) ...)
  • (isteğe bağlı) tüm sayfaların ham metni  →  --tam-metin

Kurulum :  pip install pypdf
Kullanım :  python scripts/kitap_ozet_cikar.py
            python scripts/kitap_ozet_cikar.py --sinif 9 --tam-metin
            python scripts/kitap_ozet_cikar.py --kok "D:/kitaplar"

Not: Taranmış (resim) PDF'lerde metin katmanı yoksa pypdf metin bulamaz;
     bu durumda betik uyarı verir (OCR gerekir).
"""

from __future__ import annotations

import argparse
import gc
import re
import sys
from pathlib import Path

try:
    from pypdf import PdfReader
except ImportError:  # pragma: no cover
    sys.exit("pypdf bulunamadı. Kurmak için:  pip install pypdf")

# Windows konsolunda Türkçe karakter / ok işaretleri hata vermesin
for _akis in (sys.stdout, sys.stderr):
    try:
        _akis.reconfigure(encoding="utf-8", errors="replace")  # type: ignore[attr-defined]
    except Exception:
        pass

# pypdf'in "fontTools is required..." gibi zararsız uyarılarını sustur
import logging

logging.getLogger("pypdf").setLevel(logging.ERROR)

KOK = Path(__file__).resolve().parent.parent / "raw_books"
SINIFLAR = ("9", "10", "11", "12")

# FİZ.9.1.2 · FIZ.10.2.3 · FİZ. 11.1.4 gibi yazımları yakalar
CIKTI_RE = re.compile(r"F[İI]Z\s*\.\s*(9|10|11|12)\s*\.\s*(\d+)\s*\.\s*(\d+)\s*\.?\s*(.*)", re.IGNORECASE)
TEMA_RE = re.compile(r"^\s*(\d+)\s*\.\s*TEMA\s*[:\-–]?\s*(.*)$|^\s*TEMA\s*(\d+)\s*[:\-–.]?\s*(.*)$", re.IGNORECASE)
SUREC_RE = re.compile(r"^\s*([a-ğ])\)\s+(.{6,})$")
ICINDEKILER_RE = re.compile(r"İ?I?ÇİNDEKİLER|ICINDEKILER", re.IGNORECASE)


def temizle(metin: str) -> str:
    metin = metin.replace("\u00ad", "").replace("\ufb01", "fi").replace("\ufb02", "fl")
    metin = re.sub(r"[ \t]+", " ", metin)
    return re.sub(r"\n{3,}", "\n\n", metin).strip()


def pdf_isle(pdf: Path, hedef: Path, tam_metin: bool) -> dict[str, int]:
    """PDF'i sayfa sayfa işler; her sayfa sonrası belleği serbest bırakır."""
    okuyucu = PdfReader(str(pdf))
    sayfa_sayisi = len(okuyucu.pages)
    temalar: list[str] = []
    ciktilar: dict[str, str] = {}
    surecler: list[str] = []
    icindekiler: list[str] = []
    bos_sayfa = 0
    son_cikti: str | None = None

    tam_dosya = (hedef / f"{pdf.stem}__tam_metin.txt").open("w", encoding="utf-8") if tam_metin else None
    try:
        for i in range(sayfa_sayisi):
            try:
                ham = okuyucu.pages[i].extract_text() or ""
            except Exception as hata:  # bozuk sayfa — devam et
                print(f"   ! sayfa {i + 1} okunamadı: {hata}")
                continue
            metin = temizle(ham)
            if not metin:
                bos_sayfa += 1
                continue

            if tam_dosya:
                tam_dosya.write(f"\n\n===== SAYFA {i + 1} =====\n{metin}")

            if ICINDEKILER_RE.search(metin) and len(icindekiler) < 6:
                icindekiler.append(f"--- s.{i + 1} ---\n{metin}")

            for satir in metin.splitlines():
                t = TEMA_RE.match(satir)
                if t:
                    no = t.group(1) or t.group(3)
                    ad = (t.group(2) or t.group(4) or "").strip(" .:")
                    kayit = f"{no}. TEMA: {ad}".strip() + f"   (s.{i + 1})"
                    if ad and not any(k.startswith(f"{no}. TEMA: {ad}") for k in temalar):
                        temalar.append(kayit)
                    continue
                c = CIKTI_RE.search(satir)
                if c:
                    kod = f"FİZ.{c.group(1)}.{c.group(2)}.{c.group(3)}"
                    aciklama = c.group(4).strip()
                    if kod not in ciktilar or len(aciklama) > len(ciktilar[kod]):
                        ciktilar[kod] = f"{aciklama}   (s.{i + 1})"
                    son_cikti = kod
                    continue
                s = SUREC_RE.match(satir)
                if s and son_cikti:
                    surecler.append(f"{son_cikti}  {s.group(1)}) {s.group(2).strip()}")

            # Bellek dostu: sayfa nesnesini ve metni hemen bırak
            del ham, metin
            if i % 25 == 24:
                gc.collect()
                print(f"   … {i + 1}/{sayfa_sayisi} sayfa", flush=True)
    finally:
        if tam_dosya:
            tam_dosya.close()

    def sirala(k: str) -> tuple[int, ...]:
        return tuple(int(x) for x in re.findall(r"\d+", k))

    with (hedef / f"{pdf.stem}__ozet.txt").open("w", encoding="utf-8") as f:
        f.write(f"KAYNAK: {pdf.name}\nSAYFA: {sayfa_sayisi}  (metinsiz sayfa: {bos_sayfa})\n")
        f.write("\n## MAARİF TEMALARI\n")
        f.write("\n".join(temalar) or "(bulunamadı)")
        f.write("\n\n## ÖĞRENME ÇIKTILARI\n")
        f.write("\n".join(f"{k}  {ciktilar[k]}" for k in sorted(ciktilar, key=sirala)) or "(bulunamadı)")
        f.write("\n\n## SÜREÇ BİLEŞENLERİ\n")
        f.write("\n".join(dict.fromkeys(surecler)) or "(bulunamadı)")
        f.write("\n\n## İÇİNDEKİLER\n")
        f.write("\n\n".join(icindekiler) or "(bulunamadı)")
        f.write("\n")

    if bos_sayfa > sayfa_sayisi * 0.6:
        print("   ! Sayfaların çoğunda metin yok — PDF taranmış olabilir (OCR gerekir).")

    del okuyucu
    gc.collect()
    return {"sayfa": sayfa_sayisi, "tema": len(temalar), "cikti": len(ciktilar), "surec": len(surecler)}


def main() -> None:
    ap = argparse.ArgumentParser(description="MEB fizik kitabı PDF'lerinden Maarif özeti çıkarır.")
    ap.add_argument("--kok", type=Path, default=KOK, help="raw_books klasörü (varsayılan: proje/raw_books)")
    ap.add_argument("--sinif", choices=SINIFLAR, help="Yalnızca bu sınıfı işle")
    ap.add_argument("--tam-metin", action="store_true", help="Tüm sayfa metinlerini de ayrı dosyaya yaz")
    a = ap.parse_args()

    hedef = a.kok / "_ozet"
    hedef.mkdir(parents=True, exist_ok=True)
    bulunan = 0
    for sinif in (a.sinif,) if a.sinif else SINIFLAR:
        klasor = a.kok / sinif
        pdfler = sorted(klasor.glob("*.pdf")) if klasor.is_dir() else []
        for pdf in pdfler:
            bulunan += 1
            print(f"→ {sinif}. sınıf · {pdf.name}")
            alt = hedef / sinif
            alt.mkdir(exist_ok=True)
            sonuc = pdf_isle(pdf, alt, a.tam_metin)
            print(
                f"   ✓ {sonuc['sayfa']} sayfa · {sonuc['tema']} tema · "
                f"{sonuc['cikti']} öğrenme çıktısı · {sonuc['surec']} süreç bileşeni"
            )
    if not bulunan:
        print(f"PDF bulunamadı. Kitapları şu klasörlere koyun: {a.kok}/9 … {a.kok}/12")
    else:
        print(f"\nÖzetler: {hedef}")


if __name__ == "__main__":
    main()
