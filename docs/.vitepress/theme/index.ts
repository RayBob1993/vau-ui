import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import '@vau/styles';
import './custom.css';

/**
 * Тема по умолчанию VitePress + глобальные стили библиотеки для будущих живых примеров.
 */
const theme = {
  extends: DefaultTheme
} satisfies Theme;

export default theme;
