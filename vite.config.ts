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
      '@vau/core': resolve(process.cwd(), 'packages/core/index.ts'),
      '@vau/ui': resolve(process.cwd(), 'packages/ui/index.ts')
    }
  }
});
