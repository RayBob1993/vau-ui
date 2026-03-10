import { composableVariableName } from './rules/composable-variable-name.js';

/**
 * Локальный ESLint-плагин проекта.
 * Используется для правил, специфичных для архитектуры vau-ui.
 */
export default {
  rules: {
    'composable-variable-name': composableVariableName,
  },
};

