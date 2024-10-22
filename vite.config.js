import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // This should match your GitHub Pages base path
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
