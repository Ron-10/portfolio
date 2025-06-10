// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/', // Important for custom domain like www.roneykarki.com.np
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
