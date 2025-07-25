import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/website/", // 🧠 MUST MATCH your repo name *exactly*
  plugins: [react()],
})
