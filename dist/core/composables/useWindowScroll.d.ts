import { Ref } from 'vue';
/**
 * @description `useAnimatedNumber` — это пользовательский хук, который предназначен для отслеживания текущей позиции прокрутки окна браузера.
 * @description Этот хук возвращает реактивные ссылки на координаты прокрутки по оси X и Y,
 * @description а также функцию для установки прокрутки на заданные координаты.
 *
 * @returns {Object} Объект с тремя свойствами:
 * @returns {import('vue').Ref<number>} x - Текущая позиция прокрутки по оси X.
 * @returns {import('vue').Ref<number>} y - Текущая позиция прокрутки по оси Y.
 * @returns {function(ScrollToOptions): void} setScroll - Функция для установки прокрутки на заданные координаты.
 *
 * @example
 * <template>
 *   <div>
 *     <p>Позиция прокрутки по оси X: {{ x }}</p>
 *     <p>Позиция прокрутки по оси Y: {{ y }}</p>
 *     <button @click="scrollToTop">Прокрутить вверх</button>
 *   </div>
 * </template>
 *
 * <script lang="ts" setup>
 *   const { x, y, setScroll } = useWindowScroll();
 *
 *   function scrollToTop() {
 *     setScroll({
 *       top: 0,
 *       left: 0,
 *       behavior: 'smooth'
 *     });
 *   }
 * </script>
 */
export declare function useWindowScroll(): {
    x: Ref<number, number>;
    y: Ref<number, number>;
    setScroll?: undefined;
} | {
    x: Ref<number, number>;
    y: Ref<number, number>;
    setScroll: (options: ScrollToOptions) => void;
};
