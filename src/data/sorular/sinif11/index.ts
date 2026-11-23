import type { Soru } from '../../tipler.ts'
import { sorular as tema1a } from './tema1a.ts'
import { sorular as tema1b } from './tema1b.ts'
import { sorular as tema2a } from './tema2a.ts'
import { sorular as tema2b } from './tema2b.ts'
import { sorular as tema3a } from './tema3a.ts'
import { sorular as tema3b } from './tema3b.ts'

/** 11. sınıf soruları — tema dosyalarının sırası korunur */
export const sinif11Sorulari: Soru[] = [...tema1a, ...tema1b, ...tema2a, ...tema2b, ...tema3a, ...tema3b]
