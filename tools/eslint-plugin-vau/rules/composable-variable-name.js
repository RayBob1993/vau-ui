/**
 * @fileoverview Проверяет связку имени переменной с именем composable.
 *
 * Пример:
 * - Верно:   const myNameComposable = useMyNameComposable();
 * - Неверно: const MyNameComposable = useMyNameComposable();
 *
 * Правило требует, чтобы имя переменной было равно имени вызываемого composable
 * без префикса `use` и с маленькой первой буквой (lowerFirst).
 *
 * Ограничения:
 * - Проверяются только присваивания с идентификатором слева: `const x = ...`
 * - Инициализатор должен быть `use*()` или `await use*()`
 * - Запрещаются производные выражения от composable: `useX().something`, `toValue(useX())`
 */

/**
 * @param {string} value
 * @returns {string}
 */
function lowerFirst (value) {
  if (!value) {
    return value;
  }
  return value[0].toLowerCase() + value.slice(1);
}

/**
 * @param {import('estree').Expression | null | undefined} expression
 * @returns {import('estree').CallExpression | null}
 */
function unwrapUseCall (expression) {
  if (!expression) {
    return null;
  }

  if (expression.type === 'CallExpression') {
    return expression;
  }

  if (expression.type === 'AwaitExpression') {
    const arg = expression.argument;

    if (arg && arg.type === 'CallExpression') {
      return arg;
    }
    return null;
  }

  return null;
}

/**
 * @param {import('estree').Expression | null | undefined} expression
 * @returns {import('estree').CallExpression | null}
 */
function unwrapToValueCall (expression) {
  if (!expression) {
    return null;
  }

  if (expression.type !== 'CallExpression') {
    return null;
  }

  const callee = expression.callee;

  if (callee.type !== 'Identifier' || callee.name !== 'toValue') {
    return null;
  }

  return expression;
}

/**
 * @param {import('estree').Expression | null | undefined} expression
 * @returns {import('estree').MemberExpression | null}
 */
function unwrapMemberExpression (expression) {
  if (!expression) {
    return null;
  }

  if (expression.type === 'MemberExpression') {
    return expression;
  }

  // Опциональная цепочка в estree часто оборачивается в ChainExpression
  if (expression.type === 'ChainExpression') {
    const inner = expression.expression;

    if (inner && inner.type === 'MemberExpression') {
      return inner;
    }
  }

  return null;
}

/**
 * @param {import('estree').CallExpression} callExpression
 * @returns {string | null}
 */
function getComposableName (callExpression) {
  const callee = callExpression.callee;

  if (callee.type !== 'Identifier') {
    return null;
  }

  const name = callee.name;

  if (!name.startsWith('use')) {
    return null;
  }

  const withoutUse = name.slice(3);

  if (!withoutUse) {
    return null;
  }

  // ожидаем use + PascalCase, но правило можно применять и к usefoo,
  // тогда expected получится foo.
  return lowerFirst(withoutUse);
}

export const composableVariableName = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Требует имя переменной по имени composable без префикса use',
    },
    schema: [],
    messages: {
      invalidName: 'Переменная должна называться "{{expected}}", т.к. инициализируется из "{{composable}}()".',
      noDerivedExpression: 'Нельзя присваивать производные от composable выражения (например, "{{composable}}().something" или "toValue({{composable}}())").',
    },
  },
  /**
   * @param {import('eslint').Rule.RuleContext} context
   */
  create (context) {
    return {
      /**
       * @param {import('estree').VariableDeclarator} node
       */
      VariableDeclarator (node) {
        if (!node.init) {
          return;
        }

        if (!node.id || node.id.type !== 'Identifier') {
          return;
        }

        const memberExpression = unwrapMemberExpression(node.init);

        if (memberExpression) {
          const callExpression = unwrapUseCall(/** @type {import('estree').Expression} */ (memberExpression.object));
          const expected = callExpression ? getComposableName(callExpression) : null;

          if (expected) {
            context.report({
              node,
              messageId: 'noDerivedExpression',
              data: {
                composable: /** @type {import('estree').Identifier} */ (callExpression.callee).name,
              },
            });
          }
          return;
        }

        const toValueCall = unwrapToValueCall(node.init);

        if (toValueCall) {
          const firstArg = toValueCall.arguments[0];
          const callExpression = unwrapUseCall(/** @type {import('estree').Expression | null | undefined} */ (firstArg));
          const expected = callExpression ? getComposableName(callExpression) : null;

          if (expected) {
            context.report({
              node,
              messageId: 'noDerivedExpression',
              data: {
                composable: /** @type {import('estree').Identifier} */ (callExpression.callee).name,
              },
            });
          }
          return;
        }

        const callExpression = unwrapUseCall(node.init);

        if (!callExpression) {
          return;
        }

        const expected = getComposableName(callExpression);

        if (!expected) {
          return;
        }

        const actual = node.id.name;

        if (actual === expected) {
          return;
        }

        context.report({
          node: node.id,
          messageId: 'invalidName',
          data: {
            expected,
            composable: /** @type {import('estree').Identifier} */ (callExpression.callee).name,
          },
        });
      },
    };
  },
};

