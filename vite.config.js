import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    setupFiles: "./src/__tests__/setup.js",
  }
})
