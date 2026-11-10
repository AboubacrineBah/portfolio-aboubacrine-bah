import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Chemins relatifs compatibles avec GitHub Pages, y compris un dépôt de projet.
  base: './',
})
