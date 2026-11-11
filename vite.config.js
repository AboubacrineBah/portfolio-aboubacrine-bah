import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/portfolio-aboubacrine-bah/' : '/',
  server: {
    host: '127.0.0.1',
  },
}))
