#!/usr/bin/env python3
"""
KRG Fizik · Soru bankası kalite ve fizik denetimi
=================================================

Kullanım:  python scripts/soru_denetle.py
Çıkış kodu: 0 → hiç hata yok, 1 → düzeltilmesi gereken hata var.

Denetimler
  1. Toplam 80 soru · sınıf başına 20 (15 çoktan seçmeli + 5 açık uçlu) · boş alan · benzersiz id
  2. Tema / öğrenme çıktısı kodlarının src/data/mufredat.ts ile tutarlılığı
  3. A–E doğru cevap dağılımı her sınıfta ve genelde %18–%22 · 2'den fazla ardışık aynı cevap yok
  4. Sayısal şıklar: 5'i de farklı, monoton sıralı; `hesap` ifadesi doğru şıkla ve çözümle tutarlı
  5. Öncüllü (I-II-III) şıklar ÖSYM sırasında ve farklı
  6. Sözel sorularda "doğru şık = en uzun şık" oranı ≤ %25
  7. KaTeX: gerçek KaTeX ayrıştırıcısıyla derleme, $ ve {} dengesi
  8. SVG: her sınıfta en az yarısında çizim, iyi biçimli XML, viewBox, sabit renk yok, yazılar kadraj içinde
  9. Çözümde geçen "Cevap **X**" ifadesi ile dogruCevap aynı; açık uçlu rubrikler toplam 10 puan
"""

from __future__ import annotations

import ast
import json
import math
import operator
import re
import subprocess
import sys
import xml.etree.ElementTree as ET
from collections import Counter
from pathlib import Path

for _akis in (sys.stdout, sys.stderr):
    try:
        _akis.reconfigure(encoding="utf-8", errors="replace")  # type: ignore[attr-defined]
    except Exception:
        pass

KOK = Path(__file__).resolve().parent.parent
HARFLER = ["A", "B", "C", "D", "E"]
ROMA = {"I": 1, "II": 2, "III": 3, "IV": 4}

hatalar: list[str] = []
uyarilar: list[str] = []


def hata(sid: str, mesaj: str) -> None:
    hatalar.append(f"[{sid}] {mesaj}")


# ───────────────────────── Güvenli aritmetik ─────────────────────────
_OPS = {
    ast.Add: operator.add, ast.Sub: operator.sub, ast.Mult: operator.mul,
    ast.Div: operator.truediv, ast.Pow: operator.pow, ast.USub: operator.neg, ast.UAdd: operator.pos,
}
_FONK = {"sqrt": math.sqrt}
_SABIT = {"pi": math.pi}


def hesapla(ifade: str) -> float:
    def d(n: ast.AST) -> float:
        if isinstance(n, ast.Expression):
            return d(n.body)
        if isinstance(n, ast.Constant) and isinstance(n.value, (int, float)):
            return float(n.value)
        if isinstance(n, ast.BinOp) and type(n.op) in _OPS:
            return _OPS[type(n.op)](d(n.left), d(n.right))
        if isinstance(n, ast.UnaryOp) and type(n.op) in _OPS:
            return _OPS[type(n.op)](d(n.operand))
        if isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id in _FONK and len(n.args) == 1:
            return _FONK[n.func.id](d(n.args[0]))
        if isinstance(n, ast.Name) and n.id in _SABIT:
            return _SABIT[n.id]
        raise ValueError(f"İzin verilmeyen ifade: {ast.dump(n)}")

    return d(ast.parse(ifade, mode="eval"))


def latex_sayi(s: str) -> float | None:
    """'$1{,}5$', '$\\dfrac{20}{3}$', '$5\\sqrt{3}$', '$2 \\cdot 10^{4}$' → float; değilse None."""
    t = s.strip()
    if not (t.startswith("$") and t.endswith("$")) or t.count("$") != 2:
        return None
    t = t.strip("$").strip()
    t = t.replace("{,}", ".").replace("\\,", "").replace("\\ ", "")
    t = re.sub(r"\\[dt]?frac\{([^{}]+)\}\{([^{}]+)\}", r"((\1)/(\2))", t)
    t = re.sub(r"(\d)\\sqrt\{([^{}]+)\}", r"\1*sqrt(\2)", t)
    t = re.sub(r"\\sqrt\{([^{}]+)\}", r"sqrt(\1)", t)
    t = re.sub(r"(\d)\\pi", r"\1*pi", t).replace("\\pi", "pi")
    t = t.replace("\\cdot", "*").replace("^{", "**(").replace("}", ")")
    if re.search(r"[A-Za-z\\]", t.replace("sqrt", "").replace("pi", "")):
        return None
    try:
        return hesapla(t)
    except Exception:
        return None


def roma_kumesi(s: str) -> tuple[int, ...] | None:
    t = s.strip()
    m = re.fullmatch(r"Yalnız (I{1,3}|IV)", t)
    if m:
        return (ROMA[m.group(1)],)
    parca = re.split(r",\s*|\s+ve\s+", t)
    if parca and all(p in ROMA for p in parca):
        return tuple(ROMA[p] for p in parca)
    return None


def gorunen_uzunluk(s: str) -> int:
    t = re.sub(r"\\[a-zA-Z]+", "", s)
    t = re.sub(r"[${}^_]", "", t)
    return len(re.sub(r"\s+", " ", t).strip())


def parantez_dengesi(s: str) -> bool:
    t = s.replace("\\{", "").replace("\\}", "")
    derinlik = 0
    for ch in t:
        if ch == "{":
            derinlik += 1
        elif ch == "}":
            derinlik -= 1
            if derinlik < 0:
                return False
    return derinlik == 0


# ───────────────────────── SVG denetimi ─────────────────────────
def svg_denetle(sid: str, kod: str) -> None:
    if re.search(r'(fill|stroke)="#', kod) or re.search(r"(fill|stroke):\s*#", kod):
        hata(sid, "SVG'de sabit renk var; tema sınıfları (c-v, f-i, ...) kullanılmalı")
    try:
        kok = ET.fromstring(kod)
    except ET.ParseError as e:
        hata(sid, f"SVG iyi biçimli değil: {e}")
        return
    vb = kok.get("viewBox")
    if not vb:
        hata(sid, "SVG viewBox eksik")
        return
    _, _, W, H = (float(x) for x in vb.split())
    if kok.get("width") or kok.get("height"):
        hata(sid, "SVG sabit width/height içermemeli")
    ns = "{http://www.w3.org/2000/svg}"
    for el in kok.iter(f"{ns}text"):
        if el.get("transform"):
            continue
        yazi = "".join(el.itertext())
        x = float(el.get("x", 0))
        y = float(el.get("y", 0))
        boy = 15.0
        m = re.search(r"font-size:\s*([\d.]+)px", el.get("style", ""))
        if m:
            boy = float(m.group(1))
        gen = len(yazi) * boy * 0.56
        hiza = el.get("text-anchor", "start")
        sol, sag = (x, x + gen) if hiza == "start" else (x - gen, x) if hiza == "end" else (x - gen / 2, x + gen / 2)
        if sol < -3 or sag > W + 3 or y - boy * 0.75 < -3 or y > H + 3:
            hata(sid, f"SVG yazısı kadraj dışına taşıyor: '{yazi}' ({sol:.0f}–{sag:.0f} / 0–{W:.0f}, y={y:.0f}/{H:.0f})")


# ───────────────────────── Ana denetim ─────────────────────────
def main() -> int:
    try:
        cikti = subprocess.run(
            ["node", str(KOK / "scripts" / "soru_disa_aktar.mjs")],
            cwd=KOK, capture_output=True, text=True, encoding="utf-8", check=True,
        ).stdout
    except subprocess.CalledProcessError as e:
        print("Soru bankası okunamadı (node):\n", e.stderr)
        return 1
    veri = json.loads(cikti)
    sorular: list[dict] = veri["sorular"]
    mufredat: dict = veri["mufredat"]

    # 1) Sayılar ve benzersizlik
    if len(sorular) != 80:
        hata("GENEL", f"Toplam soru sayısı 80 olmalı, {len(sorular)} bulundu")
    idler = Counter(s["id"] for s in sorular)
    for i, n in idler.items():
        if n > 1:
            hata(i, "Aynı id birden fazla kez kullanılmış")

    istatistik: dict[int, dict] = {}
    tum_cevaplar: list[str] = []
    sozel_toplam = 0
    sozel_en_uzun: list[str] = []

    for sinif in (9, 10, 11, 12):
        grup = [s for s in sorular if s["sinif"] == sinif]
        cs = [s for s in grup if s["soruTipi"] == "coktan_secmeli"]
        au = [s for s in grup if s["soruTipi"] == "acik_uclu_senaryo"]
        if len(grup) != 20 or len(cs) != 15 or len(au) != 5:
            hata(f"{sinif}. sınıf", f"20 soru (15 ÇS + 5 açık uçlu) olmalı; {len(grup)} soru, {len(cs)} ÇS, {len(au)} açık uçlu var")

        temalar = {t["ad"]: t for t in mufredat[str(sinif)]["temalar"]}
        tema_say = Counter(s["tema"] for s in grup)
        for ad in temalar:
            if tema_say[ad] == 0:
                hata(f"{sinif}. sınıf", f"'{ad}' temasında hiç soru yok")

        svgli = sum(1 for s in grup if s.get("svgDiyagram"))
        if svgli * 2 < len(grup):
            hata(f"{sinif}. sınıf", f"SVG çizimli soru oranı yarının altında ({svgli}/{len(grup)})")

        cevaplar = [s["dogruCevap"] for s in cs]
        tum_cevaplar += cevaplar
        dagilim = Counter(cevaplar)
        for h in HARFLER:
            oran = dagilim[h] / max(1, len(cs))
            if not 0.18 <= oran <= 0.22:
                hata(f"{sinif}. sınıf", f"{h} şıkkı oranı %{oran * 100:.1f} (%18–%22 bandı dışında)")
        for i in range(len(cevaplar) - 2):
            if cevaplar[i] == cevaplar[i + 1] == cevaplar[i + 2]:
                hata(f"{sinif}. sınıf", f"Ardışık 3 soru aynı cevap ({cevaplar[i]}): {cs[i]['id']}, {cs[i + 1]['id']}, {cs[i + 2]['id']}")

        sz_toplam = 0
        sz_uzun = 0
        for s in grup:
            sid = s["id"]
            # Boş alanlar
            for alan in ("id", "tema", "ogrenmeCiktisi", "surecBileseni", "zorluk", "soruTipi", "metin", "dogruCevap"):
                if not str(s.get(alan, "")).strip():
                    hata(sid, f"'{alan}' alanı boş")
            if not s.get("adimAdimCozum") or any(not a.strip() for a in s["adimAdimCozum"]):
                hata(sid, "adimAdimCozum boş ya da boş adım içeriyor")
            if not sid.startswith(f"{sinif}-"):
                hata(sid, "id sınıf önekiyle başlamıyor")
            # Müfredat
            if s["tema"] not in temalar:
                hata(sid, f"Tema müfredatta yok: {s['tema']}")
            else:
                t = temalar[s["tema"]]
                if s["ogrenmeCiktisi"] not in t["ciktilar"]:
                    hata(sid, f"{s['ogrenmeCiktisi']} kodu '{s['tema']}' temasında tanımlı değil")
                if not s["ogrenmeCiktisi"].startswith(f"FİZ.{sinif}.{t['no']}."):
                    hata(sid, f"Kod tema numarasıyla uyumsuz: {s['ogrenmeCiktisi']}")
            # KaTeX
            for k in s.get("katex_hatalari", []):
                hata(sid, f"KaTeX: {k}")
            for alan, metin in [("metin", s["metin"]), ("dogruCevap", s["dogruCevap"])] + [
                (f"adım{i + 1}", a) for i, a in enumerate(s["adimAdimCozum"])
            ] + [(f"şık {h}", v) for h, v in (s.get("secenekler") or {}).items()]:
                if not parantez_dengesi(metin):
                    hata(sid, f"{alan}: eşleşmeyen {{ }}")
            # SVG
            if s.get("svgDiyagram"):
                svg_denetle(sid, s["svgDiyagram"])
            # Çözümdeki cevap harfi
            for a in s["adimAdimCozum"]:
                for m in re.finditer(r"Cevap \*\*([A-E])\*\*", a):
                    if m.group(1) != s["dogruCevap"]:
                        hata(sid, f"Çözümde 'Cevap {m.group(1)}' yazıyor, dogruCevap {s['dogruCevap']}")

            if s["soruTipi"] == "acik_uclu_senaryo":
                if s.get("secenekler"):
                    hata(sid, "Açık uçlu soruda şık olmamalı")
                rub = s.get("rubrik") or []
                if sum(r["puan"] for r in rub) != 10:
                    hata(sid, "Açık uçlu rubrik toplamı 10 puan olmalı")
                continue

            # ── Çoktan seçmeli ──
            sec = s.get("secenekler") or {}
            if sorted(sec) != HARFLER:
                hata(sid, "A–E beş şık eksiksiz olmalı")
                continue
            if s["dogruCevap"] not in HARFLER:
                hata(sid, "dogruCevap A–E harfi olmalı")
                continue
            degerler = [sec[h] for h in HARFLER]
            if len(set(degerler)) != 5:
                hata(sid, "Şıklar birbirinden farklı değil")

            sayilar = [latex_sayi(v) for v in degerler]
            romalar = [roma_kumesi(v) for v in degerler]
            if all(x is not None for x in sayilar):
                n = [float(x) for x in sayilar]  # type: ignore[arg-type]
                artan = all(a < b for a, b in zip(n, n[1:]))
                azalan = all(a > b for a, b in zip(n, n[1:]))
                if not (artan or azalan):
                    hata(sid, f"Sayısal şıklar monoton sıralı değil: {n}")
                if not s.get("hesap"):
                    hata(sid, "Sayısal soruda 'hesap' ifadesi yok")
                else:
                    try:
                        beklenen = hesapla(s["hesap"])
                        dogru = n[HARFLER.index(s["dogruCevap"])]
                        if not math.isclose(beklenen, dogru, rel_tol=0.015, abs_tol=1e-9):
                            hata(sid, f"hesap = {beklenen:.4g} ama doğru şık {dogru:.4g}")
                        for h, v in zip(HARFLER, n):
                            if h != s["dogruCevap"] and math.isclose(beklenen, v, rel_tol=0.015):
                                hata(sid, f"hesap sonucu yanlış şık {h} ile de eşleşiyor")
                    except Exception as e:
                        hata(sid, f"hesap ifadesi değerlendirilemedi: {e}")
                    cekirdek = sec[s["dogruCevap"]].strip("$")
                    if not any(cekirdek in a for a in s["adimAdimCozum"]):
                        hata(sid, f"Doğru şık değeri ({cekirdek}) çözüm adımlarında geçmiyor")
            elif all(x is not None for x in romalar):
                anahtar = [(len(x), x) for x in romalar]  # type: ignore[arg-type]
                if anahtar != sorted(anahtar) or len(set(anahtar)) != 5:
                    hata(sid, "Öncüllü şıklar ÖSYM sırasında değil (önce tekli, sonra ikili, en son üçlü)")
                if not re.search(r"^III\. ", s["metin"], re.M):
                    hata(sid, "Öncüllü soruda I–II–III öncülleri metinde bulunamadı")
            else:
                sz_toplam += 1
                uzunluklar = {h: gorunen_uzunluk(v) for h, v in sec.items()}
                en_uzun = max(uzunluklar.values())
                if uzunluklar[s["dogruCevap"]] == en_uzun and list(uzunluklar.values()).count(en_uzun) == 1:
                    sz_uzun += 1
                    sozel_en_uzun.append(sid)

        sozel_toplam += sz_toplam
        istatistik[sinif] = {
            "toplam": len(grup), "cs": len(cs), "au": len(au), "svg": svgli,
            "dagilim": dagilim, "sozel": sz_toplam, "sozel_uzun": sz_uzun,
            "temalar": tema_say,
        }

    # Genel dağılım ve ardışıklık
    genel = Counter(tum_cevaplar)
    for h in HARFLER:
        oran = genel[h] / max(1, len(tum_cevaplar))
        if not 0.18 <= oran <= 0.22:
            hata("GENEL", f"{h} şıkkı genel oranı %{oran * 100:.1f} (%18–%22 bandı dışında)")
    for i in range(len(tum_cevaplar) - 2):
        if tum_cevaplar[i] == tum_cevaplar[i + 1] == tum_cevaplar[i + 2]:
            hata("GENEL", f"Sınıf geçişinde ardışık 3 aynı cevap ({tum_cevaplar[i]}) — {i + 1}. test sorusundan itibaren")
    uzun_oran = len(sozel_en_uzun) / max(1, sozel_toplam)
    if uzun_oran > 0.25:
        hata("GENEL", f"Sözel sorularda doğru şık = en uzun şık oranı %{uzun_oran * 100:.0f} (> %25). Düzeltilecek: {', '.join(sozel_en_uzun)}")

    # ───────────── Rapor ─────────────
    cizgi = "─" * 86
    print(cizgi)
    print("KRG Fizik · Soru Bankası Denetim Raporu")
    print(cizgi)
    print(f"{'Sınıf':<7}{'Soru':>5}{'ÇS':>5}{'AÇ':>5}{'SVG':>5}   {'A':>3}{'B':>4}{'C':>4}{'D':>4}{'E':>4}   {'Sözel':>6}{'En uzun=doğru':>15}")
    for sinif, st in istatistik.items():
        d = st["dagilim"]
        print(
            f"{str(sinif) + '.':<7}{st['toplam']:>5}{st['cs']:>5}{st['au']:>5}{st['svg']:>5}   "
            f"{d['A']:>3}{d['B']:>4}{d['C']:>4}{d['D']:>4}{d['E']:>4}   {st['sozel']:>6}{st['sozel_uzun']:>15}"
        )
    print(cizgi)
    tsvg = sum(st["svg"] for st in istatistik.values())
    print(
        f"{'Toplam':<7}{len(sorular):>5}{len(tum_cevaplar):>5}{len(sorular) - len(tum_cevaplar):>5}{tsvg:>5}   "
        f"{genel['A']:>3}{genel['B']:>4}{genel['C']:>4}{genel['D']:>4}{genel['E']:>4}   {sozel_toplam:>6}{len(sozel_en_uzun):>15}"
    )
    oranlar = "  ".join(f"{h}: %{genel[h] / max(1, len(tum_cevaplar)) * 100:.1f}" for h in HARFLER)
    print(f"Genel şık dağılımı → {oranlar}")
    print(f"Sözel sorularda 'en uzun şık = doğru cevap' oranı → %{uzun_oran * 100:.1f} ({len(sozel_en_uzun)}/{sozel_toplam}) {sozel_en_uzun or ''}")
    print("Tema dağılımı:")
    for sinif, st in istatistik.items():
        print(f"  {sinif}. sınıf: " + " · ".join(f"{k} ({v})" for k, v in st["temalar"].items()))
    print(cizgi)

    if hatalar:
        print(f"✗ {len(hatalar)} HATA:")
        for h in hatalar:
            print("  • " + h)
        print("EXIT 1")
        return 1
    print("✓ 0 hata — tüm denetimler geçti.")
    print("EXIT 0")
    return 0


if __name__ == "__main__":
    sys.exit(main())
