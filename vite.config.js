import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' //-> error 1, lupa import bag. ini, sama 
// file index.css codingan nya blum ada codingan @import "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), //-> error 1, lupa tambahin
  ],
})
