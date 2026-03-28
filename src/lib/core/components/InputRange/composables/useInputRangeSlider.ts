import type { InputRangeRootContext } from '../types';
import type { MaybeNull } from '../../../types';
import { computed, toValue } from 'vue';

export interface UseInputRangeSliderOptions {
  inputRangeRootContext: MaybeNull<InputRangeRootContext>;
}

export function useInputRangeSlider (options: UseInputRangeSliderOptions) {
  const isDisabled = computed<boolean>(() => Boolean(toValue(options.inputRangeRootContext?.isDisabled)));

  return {
    isDisabled
  };
}
