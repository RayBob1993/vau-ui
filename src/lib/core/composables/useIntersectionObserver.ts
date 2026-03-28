import type { Maybe } from '../types';
import { onBeforeUnmount, type TemplateRef, watch } from 'vue';

/**
 * @description `useIntersectionObserver` — это пользовательский хук, который предназначен для отслеживания изменений видимости элемента в пределах области видимости (viewport) с помощью IntersectionObserver.
 * @param {TemplateRef<Element>} element - Ссылка на элемент, размеры которого нужно отслеживать.
 * @param {IntersectionObserverCallback} callback - Функция обратного вызова, которая будет вызвана при изменении видимости элемента.
 * @param {IntersectionObserverInit} [options] - Опциональные настройки для IntersectionObserver.
 * @returns {Function} stop - Метод для остановки наблюдения за элементом.
 *
 * @example
 * <template>
 *   <div ref="myElement">Элемент наблюдения</div>
 * </template>
 *
 * <script lang="ts" setup>
 *   const myElement = useTemplateRef<HTMLDivElement>('myElement');
 *
 *   const { stop } = useIntersectionObserver(myElement, handleIntersection);
 *
 *   function handleIntersection (entries: Array<IntersectionObserverEntry>) {
 *     if (isIntersecting) {
 *       alert('Я в поле видимости');
 *     }
 *   }
 *
 *   onBeforeUnmount(() => {
 *     stop();
 *   });
 * </script>
 */
export function useIntersectionObserver (
  element: TemplateRef<Element>,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) {
  let observer: Maybe<IntersectionObserver>;

  const stopWatch = watch(element, el => {
    destroy();

    if (el) {
      observer = new IntersectionObserver(callback, options);

      observer.observe(el);
    }
  },{
    immediate: true,
    flush: 'post'
  });

  /**
   * Останавливает наблюдение и очищает все ресурсы
   *
   * @function stop
   * @example
   * // Остановка наблюдения при необходимости
   * const { stop } = useIntersectionObserver(...);
   *
   * // Через 5 секунд остановить наблюдение
   * setTimeout(() => {
   *   stop();
   * }, 5000);
   */
  function stop () {
    destroy();
    stopWatch();
  }

  /**
   * Уничтожает текущий observer
   *
   * @private
   */
  function destroy () {
    if (observer) {
      observer.disconnect();
      observer = undefined;
    }
  }

  onBeforeUnmount(() => {
    stop();
  });

  return {
    stop
  };
}
