/**
 * @description `clone` - Клонирует переданное значение, создавая его глубокую копию.
 *
 * Функция поддерживает клонирование объектов, массивов и примитивных типов.
 * При клонировании объектов и массивов происходит рекурсивное копирование их свойств и элементов.
 * Методы также клонируются с привязкой к новому объекту.
 *
 * @template T - Тип значения, которое будет клонироваться.
 * @param value - Значение, которое нужно клонировать.
 * @param hash - Кеширование
 * @returns Глубокая копия переданного значения того же типа T.
 *
 * @example
 * const original = {
 *   name: 'Дима',
 *   age: 31,
 *   greet() {
 *     console.log(`Привет, меня зовут ${this.name}`);
 *   },
 *   nested: {
 *     array: [1, 2, 3],
 *     method() {
 *       console.log('вложенный метод');
 *     }
 *   }
 * };
 *
 * const cloned = clone(original);
 * cloned.greet(); // Привет, меня зовут Дима
 * cloned.nested.method(); // вложенный метод
 *
 * original.name = 'Вася';
 * console.log(cloned.name); // Вася
 */
export declare function clone<T>(value: T, hash?: WeakMap<object, unknown>): T;
