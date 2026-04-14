import { enLocale } from './locales/en';
import { ruLocale } from './locales/ru';

import { defineConfig } from 'vitepress';
import { resolve } from 'node:path';

/**
 * Корень репозитория (vitepress запускают из него: `pnpm docs:dev`).
 */
const projectRoot = process.cwd();

/**
 * Конфигурация сайта документации VitePress.
 * Локали: `root` (русский) — `docs/`; `en` — `docs/en/` (встроенный i18n VitePress).
 */
export default defineConfig({
  cleanUrls: true,
  locales: {
    root: ruLocale,
    en: enLocale
  },
  vite: {
    /**
     * Порт 5174 — чтобы параллельно с демо библиотеки (`pnpm serve`, обычно 5173) не было конфликта.
     */
    server: {
      port: 5174,
      strictPort: true
    },
    preview: {
      port: 4174,
      strictPort: true
    },
    resolve: {
      alias: {
        '@vau/core': resolve(projectRoot, 'src/lib/core/index.ts'),
        '@vau/ui': resolve(projectRoot, 'src/lib/ui/index.ts'),
        '@vau/styles': resolve(projectRoot, 'src/lib/styles/core/index.scss')
      }
    }
  }
});
