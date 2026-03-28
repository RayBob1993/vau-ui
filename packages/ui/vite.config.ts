import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@vau/core': resolve(__dirname, 'packages/core/index.ts')
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
      entry: resolve(__dirname, 'index.ts'),
      name: 'VauUi',
      formats: ['es'],
      fileName: 'index'
    },
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue', 'zod', '@vau/core'],
      output: {
        globals: {
          vue: 'Vue',
          zod: 'zod',
          '@vau/core': 'VauCore'
        }
      }
    }
  }
});
