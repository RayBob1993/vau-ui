import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@vau/core': resolve(__dirname, 'src/lib/core/index.ts'),
      '@vau/ui': resolve(__dirname, 'src/lib/ui/index.ts')
    }
  },
  plugins: [
    vue(),
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.json'),
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'VauUi',
      formats: ['es'],
      fileName: 'index'
    },
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
