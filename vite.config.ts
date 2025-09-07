import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      staticImport: true,
      outDir: 'dist',
      rollupTypes: true,
      entryRoot: 'src/lib',
      exclude: [
        'src/lib/**/*.test.ts',
        'src/lib/**/__tests__/**/*'
      ]
    })
  ],
  build: {
    target: 'esnext',
    assetsInlineLimit: 0,
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'VauUI',
      fileName: 'index.js',
      cssFileName: 'style'
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src/lib',
          exports: 'named',
          entryFileNames: '[name].js'
        }
      ]
    }
  }
});
