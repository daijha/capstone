import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/', // I was getting wsod when refreshing the deployed read page. google suggested this fix. 
  plugins: [react()],
})
