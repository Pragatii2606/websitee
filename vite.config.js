import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 3000,           // 💥 change port from 5173
    strictPort: true,
    hmr: {
      overlay: false      // 💣 stop WebSocket overlay spam
    }
  },
  css: {
  preprocessorOptions: {
    css: {
      additionalData: '',
    },
  },
},
 
  plugins: [react()],
})

