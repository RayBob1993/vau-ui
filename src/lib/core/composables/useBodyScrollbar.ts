import { getScrollbarWidth } from '../utils';
import { onUnmounted } from 'vue';

/**
 * @description `useBodyScrollbar` — это пользовательский хук для управления отображением полосы прокрутки на странице.
 * Он предоставляет функции для скрытия и показа полосы прокрутки, а также автоматически восстанавливает состояние при размонтировании компонента.
 *
 * Устанавливает переменную `--scrollbar-width` для сохранения ширины полосы прокрутки, чтобы избежать изменения ширины контента при скрытии.
 * Убедитесь, что у вас корректно настроены стили для использования CSS-переменной `--scrollbar-width`, если это необходимо.
 *
 * @returns {() => void} hide - Функция для скрытия полосы прокрутки.
 * @returns {() => void} show - Функция для восстановления отображения полосы прокрутки.
 *
 * @example
 * <template>
 *   <div>
 *     <button @click="hide">Скрыть полосу прокрутки</button>
 *     <button @click="show">Показать полосу прокрутки</button>
 *   </div>
 * </template>
 *
 * <script lang="ts" setup>
 *   const { hide, show } = useBodyScrollbar();
 * </script>
 */
export function useBodyScrollbar () {
  const CSS_VARIABLE_NAME: string = '--scrollbar-width';
  const scrollbarWidth = getScrollbarWidth();

  function hide () {
    if (document.body) {
      document.body.style.overflow = 'hidden';
    }

    if (document.documentElement) {
      document.documentElement.style.setProperty(CSS_VARIABLE_NAME, `${scrollbarWidth}px`);
    }
  }

  function show () {
    if (document.body) {
      document.body.style.overflow = '';
    }

    if (document.documentElement) {
      document.documentElement.style.setProperty(CSS_VARIABLE_NAME, '0');
    }
  }

  onUnmounted(() => {
    show();
  });

  return {
    hide,
    show
  };
}
