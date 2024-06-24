import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// const url = `https://ledisbucket.onrender.com`
// const url = `http://localhost:4000`
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        // changeOrigin: true,
      },
    },
  },
})
