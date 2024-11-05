import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  assetsInclude: ["**/*.hdr"],  // Adiciona o suporte para arquivos .hdr
});
