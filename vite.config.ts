import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  root: 'src',
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@vau/core': resolve(process.cwd(), 'src/lib/core/index.ts'),
      '@vau/ui': resolve(process.cwd(), 'src/lib/ui/index.ts'),
      '@vau/styles': resolve(process.cwd(), 'src/lib/styles/core/index.scss')
    }
  }
});
