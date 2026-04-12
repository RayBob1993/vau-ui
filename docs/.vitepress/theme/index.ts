import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import '@vau/styles';

function redirectRootToRu (): void {
  if (typeof window === 'undefined') {
    return;
  }
  const normalized = window.location.pathname.replace(/\/$/, '') || '/';

  if (normalized === '/' || normalized === '/index.html') {
    window.location.replace('/ru');
  }
}

/**
 * Тема по умолчанию VitePress + глобальные стили библиотеки для будущих живых примеров.
 */
const theme = {
  extends: DefaultTheme,
  enhanceApp () {
    redirectRootToRu();
  }
} satisfies Theme;

export default theme;
