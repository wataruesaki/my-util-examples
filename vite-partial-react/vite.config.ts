import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ビルド後のアセットパスは相対パスにする
  plugins: [react()],
})
