import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: '@', replacement: '/src/*'},
      {find: '@service', replacement: '/src/service'},
      {find: "@components", replacement: "/src/components"}
    ]
  }
})
