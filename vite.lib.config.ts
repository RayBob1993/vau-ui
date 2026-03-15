import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { cpSync, mkdirSync, readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

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
          // Чтобы в проекте потребителя TypeScript разрешал типы, заменяем @vau/core на относительный путь к dist/core
          function rewriteDts (dir: string) {
            for (const name of readdirSync(dir)) {
              const full = resolve(dir, name);

              if (statSync(full).isDirectory()) {
                rewriteDts(full);
              } else if (name.endsWith('.d.ts')) {
                let content = readFileSync(full, 'utf-8');
                const fileDir = resolve(full, '..');
                const corePath = join(relative(fileDir, dist), 'core').replace(/\\/g, '/');

                content = content.replace(/(from\s+['"])@vau\/core(['"])/g, `$1${corePath}$2`);
                writeFileSync(full, content);
              }
            }
          }
          rewriteDts(out);
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

