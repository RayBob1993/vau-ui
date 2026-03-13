import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { cpSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@vau/core': resolve(__dirname, 'packages/core/index.ts'),
      '@vau/ui': resolve(__dirname, 'packages/ui/index.ts')
    }
  },
  plugins: [
    vue(),
    {
      name: 'emit-root-dts',
      closeBundle () {
        const dist = resolve(__dirname, 'dist');
        const coreDist = resolve(__dirname, 'packages/core/dist');
        const uiDist = resolve(__dirname, 'packages/ui/dist');

        if (existsSync(coreDist)) {
          const out = resolve(dist, 'core');

          mkdirSync(out, { recursive: true });
          cpSync(coreDist, out, { recursive: true });
        }
        if (existsSync(uiDist)) {
          const out = resolve(dist, 'ui');

          mkdirSync(out, { recursive: true });
          cpSync(uiDist, out, { recursive: true });
        }
        const indexDts = '/** Реэкспорт публичного API vau-ui */\nexport * from \'./core\';\nexport * from \'./ui\';\n';

        writeFileSync(resolve(dist, 'index.d.ts'), indexDts);
      }
    }
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'entry-lib.ts'),
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

