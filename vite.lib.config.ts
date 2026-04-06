import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';

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
      formats: ['es']
    },
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
    rolldownOptions: {
      external: ['vue', 'zod'],
      output: {
        entryFileNames: ({ name }) => `${name}.js`,
        preserveModules: true,
        preserveModulesRoot: resolve(__dirname, 'src/lib'),
        globals: {
          vue: 'Vue',
          zod: 'zod'
        }
      }
    }
  }
});
