import type { ComponentTypeEmits, EmitFn } from 'vue';
export type EmitReturn<T> = T extends (...args: Array<unknown>) => infer R ? R : never;
export type Listeners<T> = {
    [K in keyof T]: T[K] extends (...args: infer P) => void ? (...args: P) => EmitReturn<T[K]> : never;
};
/**
 * Создаёт объект обработчиков событий, проксирующих вызовы в переданный emit.
 * Удобно передавать подмножество эмитов в дочерний компонент через v-on="listeners".
 *
 * @template T - тип эмитов компонента (объект: имя события -> аргументы)
 * @param emit - функция emit из defineEmits
 * @param events - массив имён событий, которые нужно проксировать
 * @returns объект с полем listeners — объект обработчиков для v-on
 */
export declare function useEmitProxy<T extends ComponentTypeEmits>(emit: EmitFn<T>, events: Array<keyof T>): {
    listeners: Listeners<T>;
};
