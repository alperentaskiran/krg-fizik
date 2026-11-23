import { useEffect, useState } from 'react'

const ONEK = 'krg-fizik:'

export function depoOku<T>(anahtar: string, varsayilan: T): T {
  try {
    const ham = localStorage.getItem(ONEK + anahtar)
    return ham === null ? varsayilan : (JSON.parse(ham) as T)
  } catch {
    return varsayilan
  }
}

export function depoYaz<T>(anahtar: string, deger: T) {
  try {
    localStorage.setItem(ONEK + anahtar, JSON.stringify(deger))
  } catch {
    /* gizli sekme vb. — sessizce geç */
  }
}

/** localStorage'da kalıcı tutulan state (try/catch korumalı) */
export function useKalici<T>(anahtar: string, varsayilan: T) {
  const [deger, setDeger] = useState<T>(() => depoOku(anahtar, varsayilan))
  useEffect(() => depoYaz(anahtar, deger), [anahtar, deger])
  return [deger, setDeger] as const
}
