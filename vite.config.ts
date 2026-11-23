import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// base: './' → GitHub Pages'te repo adı ne olursa olsun asset yolları göreli kalır.
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.png', 'logo-badge.png', 'logo-full.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'KRG Fizik',
        short_name: 'KRG Fizik',
        description: 'Türkiye Yüzyılı Maarif Modeli uyumlu fizik soru tahtası',
        lang: 'tr',
        theme_color: '#071426',
        background_color: '#071426',
        display: 'standalone',
        orientation: 'any',
        start_url: './',
        scope: './',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,woff2,webmanifest}', 'favicon.png', 'logo-badge.png', 'logo-full.png', 'pwa-192x192.png', 'apple-touch-icon.png'],
        navigateFallback: 'index.html',
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1200,
  },
})
