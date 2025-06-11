import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/', // important for GitHub Pages with custom domain
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // define @ as src
    },
  },
});
