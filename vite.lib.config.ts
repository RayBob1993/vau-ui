import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';

/**
 * Декларации для библиотеки генерируются отдельно через `vue-tsc -p tsconfig.build.json`
 * после сборки JS, чтобы не портить типы SFC (vite-plugin-dts при rollup мог ломать __VLS_*).
 */
export default defineConfig({
  resolve: {
    alias: {
      '@vau/core': resolve(__dirname, 'src/lib/core/index.ts'),
      '@vau/ui': resolve(__dirname, 'src/lib/ui/index.ts')
    }
  },
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'VauUi',
      formats: ['es'],
      fileName: 'index'
    },
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue', 'zod'],
      output: {
        inlineDynamicImports: true,
        globals: {
          vue: 'Vue',
          zod: 'zod'
        }
      }
    }
  }
});
