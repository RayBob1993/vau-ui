import { ref } from 'vue';

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
export function useAnimatedNumber () {
  if (!window) {
    return {
      number: ref<number>(0),
      animate: () => {}
    };
  }

  const number = ref<number>(0);

  function animate (start: number, end: number, duration: number) {
    let startTimestamp: number;

    function step (timestamp: number) {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      number.value = Math.floor(progress * (end - start) + start);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  return {
    number,
    animate
  };
}
