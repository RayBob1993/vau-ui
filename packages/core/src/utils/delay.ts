/**
 * @description `delay` - Задержка выполнения
 * @param {number} delay Время задержки
 * @returns {Promise}
 * @example
 *
 * await delay(1000);
 *
 * console.log('Вывести в консоль текст через 1000 мс')
 */
export function delay (delay: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, delay));
}
