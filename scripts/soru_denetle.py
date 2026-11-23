#!/usr/bin/env python3
"""
KRG Fizik · Soru bankası kalite ve fizik denetimi
=================================================

Tüm banka : python scripts/soru_denetle.py
Tek dosya : python scripts/soru_denetle.py --dosya src/data/sorular/sinif9/tema2.ts
            (scripts/soru_plani.json'daki kota, cevap harfi sırası ve id önekine göre denetler;
             aynı sınıfın diğer dosyalarıyla klon karşılaştırması da yapar)
Çıkış kodu: 0 → hiç hata yok (EXIT 0), 1 → düzeltilmesi gereken hata var.

Denetimler
  1. Adet: toplam ≥ 600, her sınıf ≥ 150 (120 ÇS + 30 açık uçlu), benzersiz id, boş alan
  2. Klon/şablon: sayı ve LaTeX temizlenmiş metinlerde kelime 3-gram Jaccard benzerliği > %60 → hata
  3. A–E dağılımı her sınıfta %17–%23 · ardışık en fazla 2 aynı cevap · zorluk ≈ %30/%40/%30
  4. Sayısal şıklar: 5'i farklı, monoton; `hesap` ifadesi doğru şıkla ve çözümle tutarlı
  5. Öncüllü (I-II-III) şıklar ÖSYM sırasında · sözel sorularda "doğru = en uzun şık" ≤ %25
  6. KaTeX (gerçek ayrıştırıcı), { } dengesi · SVG: iyi biçimli, viewBox, tema sınıfları, kadraj
  7. Tema / öğrenme çıktısı kodları mufredat.ts ile uyumlu · açık uçlu rubrik toplamı 10
"""

from __future__ import annotations

import argparse
import ast
import json
import math
import operator
import re
import subprocess
import sys
import xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from pathlib import Path

for _akis in (sys.stdout, sys.stderr):
    try:
        _akis.reconfigure(encoding="utf-8", errors="replace")  # type: ignore[attr-defined]
    except Exception:
        pass

KOK = Path(__file__).resolve().parent.parent
SORU_KOK = KOK / "src" / "data" / "sorular"
HARFLER = ["A", "B", "C", "D", "E"]
ROMA = {"I": 1, "II": 2, "III": 3, "IV": 4}
KLON_ESIGI = 0.60

hatalar: list[str] = []


def hata(sid: str, mesaj: str) -> None:
    hatalar.append(f"[{sid}] {mesaj}")


# ───────────────────────── Güvenli aritmetik ─────────────────────────
_OPS = {
    ast.Add: operator.add, ast.Sub: operator.sub, ast.Mult: operator.mul,
    ast.Div: operator.truediv, ast.Pow: operator.pow, ast.USub: operator.neg, ast.UAdd: operator.pos,
}
_FONK = {"sqrt": math.sqrt, "sin": lambda d: math.sin(math.radians(d)), "cos": lambda d: math.cos(math.radians(d)),
         "log10": math.log10, "log2": math.log2}
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
        raise ValueError(f"İzin verilmeyen ifade: {ast.dump(n)[:60]}")

    return d(ast.parse(ifade, mode="eval"))


def latex_sayi(s: str) -> float | None:
    """'$1{,}5$', '$\\dfrac{20}{3}$', '$5\\sqrt{3}$', '$2 \\cdot 10^{4}$', '$-3$' → float; değilse None."""
    t = s.strip()
    if not (t.startswith("$") and t.endswith("$")) or t.count("$") != 2:
        return None
    t = t.strip("$").strip()
    t = t.replace("{,}", ".").replace("\\,", "").replace("\\ ", "").replace("\\times", "*")
    t = re.sub(r"\\[dt]?frac\{([^{}]+)\}\{([^{}]+)\}", r"((\1)/(\2))", t)
    t = re.sub(r"(\d)\\sqrt\{([^{}]+)\}", r"\1*sqrt(\2)", t)
    t = re.sub(r"\\sqrt\{([^{}]+)\}", r"sqrt(\1)", t)
    t = re.sub(r"(\d)\\pi", r"\1*pi", t).replace("\\pi", "pi")
    t = t.replace("\\cdot", "*").replace("^{", "**(").replace("}", ")").replace("−", "-")
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


# ───────────────────────── Klon tespiti ─────────────────────────
def trigramlar(metin: str) -> set[tuple[str, ...]]:
    t = re.sub(r"\$\$[\s\S]+?\$\$|\$[^$]+?\$", " ", metin)  # LaTeX
    t = re.sub(r"\d+([.,]\d+)?", " ", t)  # sayılar
    t = re.sub(r"[^\wçğıöşüÇĞİÖŞÜâîû]+", " ", t.lower())
    k = [w for w in t.split() if w]
    return {tuple(k[i:i + 3]) for i in range(len(k) - 2)}


def jaccard(a: set, b: set) -> float:
    if not a or not b:
        return 0.0
    return len(a & b) / len(a | b)


def klon_ciftleri(sorular: list[dict], hedef_idler: set[str] | None = None) -> list[tuple[float, str, str]]:
    grams = [(s["id"], trigramlar(s["metin"] + " " + " ".join((s.get("secenekler") or {}).values()))) for s in sorular]
    out = []
    for i in range(len(grams)):
        for j in range(i + 1, len(grams)):
            if hedef_idler and grams[i][0] not in hedef_idler and grams[j][0] not in hedef_idler:
                continue
            j_ = jaccard(grams[i][1], grams[j][1])
            if j_ > KLON_ESIGI:
                out.append((j_, grams[i][0], grams[j][0]))
    return out


def en_yuksek_benzerlik(sorular: list[dict]) -> tuple[float, str, str]:
    grams = [(s["id"], trigramlar(s["metin"] + " " + " ".join((s.get("secenekler") or {}).values()))) for s in sorular]
    en = (0.0, "-", "-")
    for i in range(len(grams)):
        for j in range(i + 1, len(grams)):
            j_ = jaccard(grams[i][1], grams[j][1])
            if j_ > en[0]:
                en = (j_, grams[i][0], grams[j][0])
    return en


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


# ───────────────────────── Tek soru denetimi ─────────────────────────
def soru_denetle(s: dict, mufredat: dict) -> str | None:
    """Soruyu denetler; çoktan seçmeli sözel soruysa 'sozel' / 'sozel_uzun' döndürür."""
    sid = s.get("id", "?")
    sinif = s.get("sinif")
    for alan in ("id", "tema", "ogrenmeCiktisi", "surecBileseni", "zorluk", "soruTipi", "metin", "dogruCevap"):
        if not str(s.get(alan, "")).strip():
            hata(sid, f"'{alan}' alanı boş")
    if sinif not in (9, 10, 11, 12):
        hata(sid, f"Geçersiz sınıf: {sinif}")
        return None
    if not str(sid).startswith(f"{sinif}-"):
        hata(sid, "id sınıf önekiyle başlamıyor")
    if s.get("zorluk") not in ("Temel", "Orta", "İleri"):
        hata(sid, f"Geçersiz zorluk: {s.get('zorluk')}")
    if not s.get("adimAdimCozum") or any(not str(a).strip() for a in s["adimAdimCozum"]):
        hata(sid, "adimAdimCozum boş ya da boş adım içeriyor")
        return None
    temalar = {t["ad"]: t for t in mufredat[str(sinif)]["temalar"]}
    if s["tema"] not in temalar:
        hata(sid, f"Tema müfredatta yok: {s['tema']}")
    else:
        t = temalar[s["tema"]]
        if s["ogrenmeCiktisi"] not in t["ciktilar"]:
            hata(sid, f"{s['ogrenmeCiktisi']} kodu '{s['tema']}' temasında tanımlı değil")
    for k in s.get("katex_hatalari", []):
        hata(sid, f"KaTeX: {k}")
    alanlar = [("metin", s["metin"]), ("dogruCevap", s["dogruCevap"])]
    alanlar += [(f"adım{i + 1}", a) for i, a in enumerate(s["adimAdimCozum"])]
    alanlar += [(f"şık {h}", v) for h, v in (s.get("secenekler") or {}).items()]
    for alan, metin in alanlar:
        if not parantez_dengesi(str(metin)):
            hata(sid, f"{alan}: eşleşmeyen {{ }}")
    if s.get("svgDiyagram"):
        svg_denetle(sid, s["svgDiyagram"])
    for a in s["adimAdimCozum"]:
        for m in re.finditer(r"Cevap \*\*([A-E])\*\*", a):
            if m.group(1) != s["dogruCevap"]:
                hata(sid, f"Çözümde 'Cevap {m.group(1)}' yazıyor, dogruCevap {s['dogruCevap']}")

    if s["soruTipi"] == "acik_uclu_senaryo":
        if s.get("secenekler"):
            hata(sid, "Açık uçlu soruda şık olmamalı")
        rub = s.get("rubrik") or []
        if not rub or sum(r.get("puan", 0) for r in rub) != 10:
            hata(sid, "Açık uçlu rubrik toplamı 10 puan olmalı")
        return None
    if s["soruTipi"] != "coktan_secmeli":
        hata(sid, f"Geçersiz soruTipi: {s['soruTipi']}")
        return None

    sec = s.get("secenekler") or {}
    if sorted(sec) != HARFLER:
        hata(sid, "A–E beş şık eksiksiz olmalı")
        return None
    if s["dogruCevap"] not in HARFLER:
        hata(sid, "dogruCevap A–E harfi olmalı")
        return None
    if not any(re.search(r"Cevap \*\*[A-E]\*\*", a) for a in s["adimAdimCozum"]):
        hata(sid, "Çözüm adımlarında 'Cevap **X**' ifadesi yok")
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
            hata(sid, f"Sayısal şıklar monoton sıralı değil: {[round(x, 4) for x in n]}")
        if not s.get("hesap"):
            hata(sid, "Sayısal soruda 'hesap' ifadesi yok")
        else:
            try:
                beklenen = hesapla(s["hesap"])
                dogru = n[HARFLER.index(s["dogruCevap"])]
                if not math.isclose(beklenen, dogru, rel_tol=0.015, abs_tol=1e-9):
                    hata(sid, f"hesap = {beklenen:.4g} ama doğru şık {dogru:.4g}")
                for h, v in zip(HARFLER, n):
                    if h != s["dogruCevap"] and math.isclose(beklenen, v, rel_tol=0.015, abs_tol=1e-9):
                        hata(sid, f"hesap sonucu yanlış şık {h} ile de eşleşiyor")
            except Exception as e:
                hata(sid, f"hesap ifadesi değerlendirilemedi: {e}")
            cekirdek = sec[s["dogruCevap"]].strip("$")
            if not any(cekirdek in a for a in s["adimAdimCozum"]):
                hata(sid, f"Doğru şık değeri ({cekirdek}) çözüm adımlarında geçmiyor")
        return None
    if all(x is not None for x in romalar):
        anahtar = [(len(x), x) for x in romalar]  # type: ignore[arg-type]
        if anahtar != sorted(anahtar) or len(set(anahtar)) != 5:
            hata(sid, "Öncüllü şıklar ÖSYM sırasında değil (önce tekli, sonra ikili, en son üçlü; her grupta sıralı)")
        if not re.search(r"^III\. ", s["metin"], re.M):
            hata(sid, "Öncüllü soruda I–II–III öncülleri metinde (satır başında 'III. ') bulunamadı")
        return None
    if any(x is not None for x in sayilar) and sum(x is not None for x in sayilar) >= 3:
        hata(sid, "Şıkların bir kısmı sayı, bir kısmı metin — sayısal şıkları yalnızca $...$ sayı olarak yazın")
    uz = {h: gorunen_uzunluk(v) for h, v in sec.items()}
    en_uzun = max(uz.values())
    if uz[s["dogruCevap"]] == en_uzun and list(uz.values()).count(en_uzun) == 1:
        return "sozel_uzun"
    return "sozel"


def json_al(arg: list[str]) -> dict:
    p = subprocess.run(["node", str(KOK / "scripts" / "soru_disa_aktar.mjs"), *arg],
                       cwd=KOK, capture_output=True, text=True, encoding="utf-8")
    if p.returncode != 0:
        print("Soru bankası okunamadı (node):\n", p.stderr[-3000:])
        sys.exit(1)
    return json.loads(p.stdout)


# ───────────────────────── Tek dosya modu ─────────────────────────
def dosya_modu(dosya: str) -> int:
    plan = json.load(open(KOK / "scripts" / "soru_plani.json", encoding="utf-8"))
    yol = Path(dosya).resolve()
    anahtar = yol.relative_to(SORU_KOK).as_posix()
    if anahtar not in plan:
        print(f"Plan bulunamadı: {anahtar}")
        return 1
    p = plan[anahtar]
    digerleri = sorted(str(x) for x in (SORU_KOK / f"sinif{p['sinif']}").glob("tema*.ts") if x.resolve() != yol)
    veri = json_al(["--dosyalar", str(yol), *digerleri])
    if str(yol) in veri["hatali_dosyalar"]:
        print("Dosya içe aktarılamadı (sözdizimi/tip hatası):\n ", veri["hatali_dosyalar"][str(yol)])
        print("EXIT 1")
        return 1
    tum = veri["sorular"]
    benim = [s for s in tum if Path(s["_dosya"]).resolve() == yol]
    mufredat = veri["mufredat"]

    idler = Counter(s["id"] for s in tum)
    for s in benim:
        if idler[s["id"]] > 1:
            hata(s["id"], "id başka bir soruda da kullanılmış")
        if s["id"] not in p["mevcut"] and not s["id"].startswith(p["id_onek"]):
            hata(s["id"], f"Yeni soru id'si '{p['id_onek']}' ile başlamalı")
        if s.get("tema") != p["tema"]:
            hata(s["id"], f"Tema '{p['tema']}' olmalı")
        if p["kodlar"] and s.get("ogrenmeCiktisi") not in p["kodlar"]:
            hata(s["id"], f"Bu dosyada yalnızca şu kodlar kullanılabilir: {', '.join(p['kodlar'])}")

    sonuc = Counter(soru_denetle(s, mufredat) for s in benim)
    cs = [s for s in benim if s["soruTipi"] == "coktan_secmeli"]
    au = [s for s in benim if s["soruTipi"] == "acik_uclu_senaryo"]
    if len(benim) != p["toplam"] or len(cs) != p["cs"] or len(au) != p["au"]:
        hata(anahtar, f"Hedef {p['toplam']} soru ({p['cs']} ÇS + {p['au']} açık uçlu); şu an {len(benim)} ({len(cs)} + {len(au)})")
    beklenen = p["mevcut_harfler"] + p["yeni_harfler"]
    gercek = "".join(s["dogruCevap"] for s in cs)
    if gercek != beklenen[: len(gercek)] or len(gercek) != len(beklenen):
        hata(anahtar, f"Cevap harfi sırası plana uymuyor.\n      beklenen: {beklenen}\n      şu an   : {gercek}")
    zor = Counter(s["zorluk"] for s in benim)
    for k, hedef in p["zorluk_hedef"].items():
        if abs(zor[k] - hedef) > 2:
            hata(anahtar, f"Zorluk '{k}': hedef {hedef} (±2), şu an {zor[k]}")
    svgli = sum(1 for s in benim if s.get("svgDiyagram"))
    if svgli < p["svg_min"]:
        hata(anahtar, f"SVG'li soru en az {p['svg_min']} olmalı, şu an {svgli}")
    sozel = sonuc["sozel"] + sonuc["sozel_uzun"]
    if sozel and sonuc["sozel_uzun"] > max(1, int(sozel * 0.25)):
        hata(anahtar, f"Sözel sorularda doğru=en uzun şık: {sonuc['sozel_uzun']}/{sozel} (> %25)")
    hedef_id = {s["id"] for s in benim}
    grup = [s for s in tum if s["sinif"] == p["sinif"]]
    for j, a, b in klon_ciftleri(grup, hedef_id):
        hata(f"{a} ~ {b}", f"Klon/şablon benzerliği %{j * 100:.0f} (> %60) — kurguyu özgünleştirin")

    print(f"{anahtar}: {len(benim)} soru ({len(cs)} ÇS + {len(au)} AÇ) · SVG {svgli} · zorluk {dict(zor)} · "
          f"sözel en uzun=doğru {sonuc['sozel_uzun']}/{sozel}")
    if veri["hatali_dosyalar"]:
        print("Not: karşılaştırmada atlanan (henüz yazılmakta olan) dosyalar:", ", ".join(Path(x).name for x in veri["hatali_dosyalar"]))
    return rapor_sonu()


def rapor_sonu() -> int:
    if hatalar:
        print(f"✗ {len(hatalar)} HATA:")
        for h in hatalar:
            print("  • " + h)
        print("EXIT 1")
        return 1
    print("✓ 0 hata — tüm denetimler geçti.")
    print("EXIT 0")
    return 0


# ───────────────────────── Tüm banka ─────────────────────────
def tum_banka() -> int:
    veri = json_al([])
    sorular: list[dict] = veri["sorular"]
    mufredat: dict = veri["mufredat"]

    if len(sorular) < 600:
        hata("GENEL", f"Toplam soru sayısı en az 600 olmalı, {len(sorular)} bulundu")
    for i, n in Counter(s["id"] for s in sorular).items():
        if n > 1:
            hata(i, "Aynı id birden fazla kez kullanılmış")

    ist: dict[int, dict] = {}
    tum_cevap: list[str] = []
    sozel_t = sozel_u = 0
    uzun_liste: list[str] = []
    klon_ozet = {}
    for sinif in (9, 10, 11, 12):
        grup = [s for s in sorular if s["sinif"] == sinif]
        cs = [s for s in grup if s["soruTipi"] == "coktan_secmeli"]
        au = [s for s in grup if s["soruTipi"] == "acik_uclu_senaryo"]
        if len(grup) < 150 or len(cs) < 120 or len(au) < 30:
            hata(f"{sinif}. sınıf", f"En az 150 soru (120 ÇS + 30 açık uçlu) olmalı; {len(grup)} ({len(cs)} + {len(au)})")
        temalar = [t["ad"] for t in mufredat[str(sinif)]["temalar"]]
        tema_say = Counter(s["tema"] for s in grup)
        for ad in temalar:
            if tema_say[ad] == 0:
                hata(f"{sinif}. sınıf", f"'{ad}' temasında hiç soru yok")
        svgli = sum(1 for s in grup if s.get("svgDiyagram"))
        if svgli < 0.45 * len(grup):
            hata(f"{sinif}. sınıf", f"SVG'li soru oranı %45'in altında ({svgli}/{len(grup)})")
        cev = [s["dogruCevap"] for s in cs]
        tum_cevap += cev
        dag = Counter(cev)
        for h in HARFLER:
            oran = dag[h] / max(1, len(cs))
            if not 0.17 <= oran <= 0.23:
                hata(f"{sinif}. sınıf", f"{h} şıkkı oranı %{oran * 100:.1f} (%17–%23 bandı dışında)")
        for i in range(len(cev) - 2):
            if cev[i] == cev[i + 1] == cev[i + 2]:
                hata(f"{sinif}. sınıf", f"Ardışık 3 aynı cevap ({cev[i]}): {cs[i]['id']}, {cs[i + 1]['id']}, {cs[i + 2]['id']}")
        zor = Counter(s["zorluk"] for s in grup)
        for k, hedef in (("Temel", 0.30), ("Orta", 0.40), ("İleri", 0.30)):
            if abs(zor[k] / max(1, len(grup)) - hedef) > 0.05:
                hata(f"{sinif}. sınıf", f"Zorluk '{k}' oranı %{zor[k] / len(grup) * 100:.0f} (hedef %{hedef * 100:.0f} ±5)")
        sz = Counter()
        for s in grup:
            r_ = soru_denetle(s, mufredat)
            if r_:
                sz[r_] += 1
                if r_ == "sozel_uzun":
                    uzun_liste.append(s["id"])
        st = sz["sozel"] + sz["sozel_uzun"]
        if st and sz["sozel_uzun"] / st > 0.25:
            hata(f"{sinif}. sınıf", f"Sözel sorularda doğru=en uzun oranı %{sz['sozel_uzun'] / st * 100:.0f} (> %25)")
        sozel_t += st
        sozel_u += sz["sozel_uzun"]
        klonlar = klon_ciftleri(grup)
        for j, a, b in klonlar:
            hata(f"{a} ~ {b}", f"Klon/şablon benzerliği %{j * 100:.0f} (> %60)")
        klon_ozet[sinif] = (len(klonlar), en_yuksek_benzerlik(grup))
        ist[sinif] = dict(toplam=len(grup), cs=len(cs), au=len(au), svg=svgli, dag=dag, zor=zor,
                          sozel=st, uzun=sz["sozel_uzun"], tema=tema_say)

    genel = Counter(tum_cevap)
    if sozel_t and sozel_u / sozel_t > 0.25:
        hata("GENEL", f"Sözel sorularda doğru=en uzun oranı %{sozel_u / sozel_t * 100:.0f} (> %25): {', '.join(uzun_liste)}")

    c = "─" * 104
    print(c)
    print("KRG Fizik · Soru Bankası Denetim Raporu")
    print(c)
    print(f"{'Sınıf':<7}{'Soru':>5}{'ÇS':>5}{'AÇ':>5}{'SVG':>6}   {'A':>3}{'B':>4}{'C':>4}{'D':>4}{'E':>4}   "
          f"{'Temel':>6}{'Orta':>6}{'İleri':>6}   {'Sözel':>6}{'Uzun=doğru':>11}   {'Klon':>5}{'Maks.benz.':>11}")
    for sinif, s in ist.items():
        d, z = s["dag"], s["zor"]
        k, (mb, _, _) = klon_ozet[sinif]
        print(f"{str(sinif) + '.':<7}{s['toplam']:>5}{s['cs']:>5}{s['au']:>5}{s['svg']:>6}   "
              f"{d['A']:>3}{d['B']:>4}{d['C']:>4}{d['D']:>4}{d['E']:>4}   "
              f"{z['Temel']:>6}{z['Orta']:>6}{z['İleri']:>6}   {s['sozel']:>6}{s['uzun']:>11}   {k:>5}{'%' + format(mb * 100, '.0f'):>11}")
    print(c)
    toplam_svg = sum(s["svg"] for s in ist.values())
    tz = Counter()
    for s in ist.values():
        tz.update(s["zor"])
    print(f"{'Toplam':<7}{len(sorular):>5}{len(tum_cevap):>5}{len(sorular) - len(tum_cevap):>5}{toplam_svg:>6}   "
          f"{genel['A']:>3}{genel['B']:>4}{genel['C']:>4}{genel['D']:>4}{genel['E']:>4}   "
          f"{tz['Temel']:>6}{tz['Orta']:>6}{tz['İleri']:>6}   {sozel_t:>6}{sozel_u:>11}")
    print("Genel şık dağılımı → " + "  ".join(f"{h}: %{genel[h] / max(1, len(tum_cevap)) * 100:.1f}" for h in HARFLER))
    print(f"SVG oranı → %{toplam_svg / max(1, len(sorular)) * 100:.1f} · Sözel 'en uzun şık = doğru' → %{sozel_u / max(1, sozel_t) * 100:.1f} ({sozel_u}/{sozel_t})")
    print(f"Klon testi (kelime 3-gram Jaccard, eşik %{KLON_ESIGI * 100:.0f}) → "
          + " · ".join(f"{k}. sınıf: {v[0]} çift, en yüksek %{v[1][0] * 100:.0f} ({v[1][1]}~{v[1][2]})" for k, v in klon_ozet.items()))
    print("Tema dağılımı:")
    for sinif, s in ist.items():
        print(f"  {sinif}. sınıf: " + " · ".join(f"{k} ({v})" for k, v in s["tema"].items()))
    print(c)
    return rapor_sonu()


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--dosya", help="Yalnızca bu tema dosyasını plana göre denetle")
    a = ap.parse_args()
    sys.exit(dosya_modu(a.dosya) if a.dosya else tum_banka())
