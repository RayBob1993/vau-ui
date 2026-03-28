import type { InputCodeRootContext } from '../types';
import type { MaybeNull } from '../../../types';
import { computed, toValue } from 'vue';

export interface UseInputCodePinOptions {
  inputCodeRootContext: MaybeNull<InputCodeRootContext>;
}

export function useInputCodePin (options: UseInputCodePinOptions) {
  const isDisabled = computed<boolean>(() => Boolean(toValue(options.inputCodeRootContext?.isDisabled)));

  return {
    isDisabled
  };
}
