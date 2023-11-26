import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import removeConsole from "vite-plugin-remove-console";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@store': path.resolve(__dirname, './src/store'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [react(), removeConsole()], // default to removing just console.log
  build: { sourcemap: true }
})