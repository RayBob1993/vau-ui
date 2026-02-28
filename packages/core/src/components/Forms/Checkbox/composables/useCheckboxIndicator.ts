import type { CheckboxRootContext } from '../types';
import type { MaybeNull } from '../../../../types';
import { computed, toValue } from 'vue';

export interface UseCheckboxIndicatorOptions {
  checkboxRootContext: MaybeNull<CheckboxRootContext>;
}

export function useCheckboxIndicator (options: UseCheckboxIndicatorOptions) {
  const isDisabled = computed<boolean>(() => Boolean(toValue(options.checkboxRootContext?.isDisabled)));
  const isActive = computed<boolean>(() => Boolean(toValue(options.checkboxRootContext?.isActive)));
  const isValid = computed<boolean>(() => Boolean(toValue(options.checkboxRootContext?.isValid)));
  const isInvalid = computed<boolean>(() => Boolean(toValue(options.checkboxRootContext?.isInvalid)));

  return {
    isDisabled,
    isActive,
    isValid,
    isInvalid
  };
}
