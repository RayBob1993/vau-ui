import type { InputCodeRootContext } from '../types';
import type { MaybeNull } from '../../../../types';
import { computed, toValue } from 'vue';

export interface UseInputCodePinOptions {
  inputCodeRootContext: MaybeNull<InputCodeRootContext>;
}

/**
 * Composable для части Pin компонента InputCode.
 * Возвращает isDisabled из контекста Root для привязки к полю ввода и aria-атрибутам.
 */
export function useInputCodePin (options: UseInputCodePinOptions) {
  const isDisabled = computed<boolean>(() => {
    const ctx = options.inputCodeRootContext;
    return ctx ? Boolean(toValue(ctx.isDisabled)) : false;
  });

  return {
    isDisabled
  };
}
