import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: "/", // This should be correct from our last fix
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})