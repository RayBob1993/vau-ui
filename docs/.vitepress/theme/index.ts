import type { Theme } from 'vitepress';
import VPreview from './components/VPreview.vue';
import DefaultTheme from 'vitepress/theme';
import '@vau/styles/base';
import './custom.css';

/**
 * Тема по умолчанию VitePress + глобальные стили библиотеки для живых примеров.
 */
const theme = {
  extends: DefaultTheme,
  enhanceApp ({ app }) {
    app.component('VPreview', VPreview);
  },
} satisfies Theme;

export default theme;
