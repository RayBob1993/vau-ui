import type { LocaleSpecificConfig, DefaultTheme } from 'vitepress';

/**
 * Расширение `LocaleSpecificConfig`: в `defineConfig.locales` VitePress ожидает объект с обязательным `label` для переключателя языков.
 */
export type DocLocaleConfig = LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string;
  link?: string;
};
