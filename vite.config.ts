import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  plugins: [react()],
  base: "/portfolio", // This should be correct from our last fix
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})