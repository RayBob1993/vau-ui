import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom'
  },
  resolve: {
    alias: {
      '@vau/core': resolve(process.cwd(), 'src/lib/core/index.ts'),
      '@vau/ui': resolve(process.cwd(), 'src/lib/ui/index.ts')
    }
  },
  plugins: [
    vue(),
    vueJsx({
      optimize: false,
      enableObjectSlots: false
    })
  ]
});