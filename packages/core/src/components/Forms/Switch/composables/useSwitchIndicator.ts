import type { SwitchRootContext } from '../types';
import type { MaybeNull } from '../../../../types';
import { computed, toValue } from 'vue';

export interface UseCheckboxIndicatorOptions {
  switchRootContext: MaybeNull<SwitchRootContext>;
}

export function useSwitchIndicator (options: UseCheckboxIndicatorOptions) {
  const isDisabled = computed<boolean>(() => Boolean(toValue(options.switchRootContext?.isDisabled)));
  const isActive = computed<boolean>(() => Boolean(toValue(options.switchRootContext?.isActive)));
  const isValid = computed<boolean>(() => Boolean(toValue(options.switchRootContext?.isValid)));
  const isInvalid = computed<boolean>(() => Boolean(toValue(options.switchRootContext?.isInvalid)));

  return {
    isDisabled,
    isActive,
    isValid,
    isInvalid
  };
}
