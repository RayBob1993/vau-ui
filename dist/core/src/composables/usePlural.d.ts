export type IPluralWords = [string, string, string];
/**
 * Функция предназначена для работы с множественными формами слов в зависимости от числового значения.
 * Она возвращает правильную форму слова на русском языке, основываясь на количестве.
 * Функция использует стандарт Intl.PluralRules для определения правила склонения.
 *
 * @example
 * const { plural } = usePlural(['яблоко', 'яблока', 'яблок']);
 *
 * console.log(plural(1));  // "яблоко"
 * console.log(plural(2));  // "яблока"
 * console.log(plural(5));  // "яблок"
 * console.log(plural(0));  // "яблок"
 * console.log(plural(-1));  // "undefined"
 * console.log(plural(NaN));  // "undefined"
 */
export declare function usePlural(words: IPluralWords): {
    plural: (count: number) => string | undefined;
};
