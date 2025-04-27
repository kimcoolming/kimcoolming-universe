import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/kimcoolming-universe/', // 꼭 추가!
  plugins: [vue()],
})
