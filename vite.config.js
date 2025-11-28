import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Evite toute copie multiple de 'three' si un sous-module en tire aussi
  plugins: [vue()],
  resolve: { dedupe: ['three'] },
  server: {
    open: true,
    host: '0.0.0.0',        // ← permet d’écouter sur toutes les IP (LAN, ngrok, etc.)
    allowedHosts: [         // ← NEW: autorise les URLs de tunnel
      '.ngrok-free.app',
      '.ngrok-free.dev'
    ]
  }
});