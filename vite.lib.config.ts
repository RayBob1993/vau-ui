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
        entryFileNames: ({ name }) => {
          if (name?.endsWith('.vue_vue_type_style_index_0_lang')) {
            return `${name.slice(0, -32)}.js`;
          } else if (name?.endsWith('.vue_vue_type_script_setup_true_lang')) {
            return `${name.slice(0, -36)}.js`;
          } else {
            return `${name}.js`;
          }
        },
        sanitizeFileName: true,
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
