import type { IVInputNumberModelValue, IVInputNumberProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed, type ModelRef } from 'vue';
import { isNumber } from '@vau/core';

export function useInputNumber (props: IVInputNumberProps, modelValue: ModelRef<IVInputNumberModelValue>) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);
  const isDecrementDisabled = computed<boolean>(() => {
    return isDisabled.value || (isNumber(props.min) && modelValue.value === props.min);
  });
  const isIncrementDisabled = computed<boolean>(() => {
    return isDisabled.value || (isNumber(props.max) && !(modelValue.value < props.max));
  });

  function handleDecrement () {
    if (!props.min) {
      modelValue.value--;
    }

    if (isNumber(props.min) && isNumber(props.step)) {
      if (modelValue.value > props.min) {
        modelValue.value -= props.step;
      }
    }
  }

  function handleIncrement () {
    if (!props.max) {
      modelValue.value++;
    }

    if (isNumber(props.max) && isNumber(props.step)) {
      if (modelValue.value < props.max) {
        modelValue.value += props.step;
      }
    }
  }

  return {
    isDisabled,
    isDecrementDisabled,
    isIncrementDisabled,
    handleDecrement,
    handleIncrement
  };
}
