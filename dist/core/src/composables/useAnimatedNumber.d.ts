/**
 * @description `useAnimatedNumber` — это пользовательский хук, который предназначен для анимации числа от начального до конечного значения.
 * @description Этот хук возвращает реактивное число и функцию для запуска анимации.
 * @description Анимация выполняется плавно в течение указанного времени.
 *
 * @returns {Object} Объект с двумя свойствами:
 * @returns {import('vue').Ref<number>} number - Текущее значение анимируемого числа.
 * @returns {function(start: number, end: number, duration: number)} animate - Функция для запуска анимации.
 *
 * @example
 * <template>
 *   <div>
 *     <p>Анимированное число: {{ number }}</p>
 *     <button @click="startAnimation">Запустить анимацию</button>
 *   </div>
 * </template>
 *
 * <script lang="ts" setup>
 *   const { number, animate } = useAnimatedNumber();
 *
 *   function startAnimation() {
 *     animate(0, 100, 2000); // Анимировать от 0 до 100 за 2 секунды
 *   }
 * </script>
 */
export declare function useAnimatedNumber(): {
    number: import('vue').Ref<number, number>;
    animate: (start: number, end: number, duration: number) => void;
};
