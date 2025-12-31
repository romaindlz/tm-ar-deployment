import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: { dedupe: ['three'] },
  server: {
    open: true,
    host: '0.0.0.0',
    allowedHosts: [
      '.ngrok-free.app',
      '.ngrok-free.dev'
    ],
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true
      }
    }
  }
});