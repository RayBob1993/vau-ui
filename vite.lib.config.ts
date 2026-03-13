import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
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
        globals: {
          vue: 'Vue',
          zod: 'zod'
        }
      }
    }
  }
});

