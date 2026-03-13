import { TemplateRef } from 'vue';
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
export declare function useIntersectionObserver(element: TemplateRef<Element>, callback: IntersectionObserverCallback, options?: IntersectionObserverInit): {
    stop: () => void;
};
