import { type MaybeRefOrGetter } from 'vue';
export interface UseEscapeKeyOptions {
    /**
     * Когда истинно — вешается слушатель `keydown` на `window` (фаза capture).
     */
    when: MaybeRefOrGetter<boolean>;
    /**
     * Дополнительное условие вызова `onEscape`; по умолчанию считается включённым.
     */
    enabled?: MaybeRefOrGetter<boolean>;
    /**
     * Обработчик нажатия Escape (после проверок `when` и `enabled`).
     */
    onEscape: (event: KeyboardEvent) => void;
    /**
     * Вызывать `preventDefault` для события; по умолчанию `true`.
     */
    preventDefault?: MaybeRefOrGetter<boolean>;
}
/**
 * Подписка на клавишу Escape на `window` в фазе capture, пока `when` истинно.
 * При нескольких одновременно активных подписках порядок обработки не нормируется.
 */
export declare function useEscapeKey(options: UseEscapeKeyOptions): void;
