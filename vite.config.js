import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    '/api': {
      target: 'https://8bd6-35-245-66-64.ngrok-free.app',
      changeOrigin: false,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  }
})
