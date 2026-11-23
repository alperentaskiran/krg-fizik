import type { Soru } from '../../tipler.ts'
import { sorular as tema1 } from './tema1.ts'
import { sorular as tema2 } from './tema2.ts'
import { sorular as tema3 } from './tema3.ts'
import { sorular as tema4 } from './tema4.ts'
import { sorular as tema5 } from './tema5.ts'
import { sorular as tema6 } from './tema6.ts'

/** 12. sınıf soruları — tema dosyalarının sırası korunur */
export const sinif12Sorulari: Soru[] = [...tema1, ...tema2, ...tema3, ...tema4, ...tema5, ...tema6]
