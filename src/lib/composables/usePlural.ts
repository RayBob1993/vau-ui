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
export function usePlural (words: IPluralWords) {
  const rules = new Intl.PluralRules('ru-RU');

  const suffixes = new Map<Intl.LDMLPluralRule, string>([
    ['one', words[0]],
    ['few', words[1]],
    ['many', words[2]]
  ]);

  function plural (count: number) {
    if (Number.isNaN(count)) {
      return undefined;
    }

    if (count < 0) {
      return undefined;
    }

    const rule = rules.select(count);

    return suffixes.get(rule);
  }

  return {
    plural
  };
}
