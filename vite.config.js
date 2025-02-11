import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
const __dirname = path.resolve(path.dirname(""))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/cong",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
