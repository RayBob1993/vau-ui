import type { IVInputNumberModelValue, IVInputNumberProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed, type ModelRef } from 'vue';
import { isNumber } from '@vau/core';

export interface IUseInputNumber {
  props: IVInputNumberProps;
  modelValue: ModelRef<IVInputNumberModelValue>;
  onDecrement?: (value: IVInputNumberModelValue) => void;
  onIncrement?: (value: IVInputNumberModelValue) => void;
}

export function useInputNumber (options: IUseInputNumber) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => options.props.disabled || isFormDisabled.value);
  const isDecrementDisabled = computed<boolean>(() => {
    return isDisabled.value || (isNumber(options.props.min) && options.modelValue.value === options.props.min);
  });
  const isIncrementDisabled = computed<boolean>(() => {
    return isDisabled.value || (isNumber(options.props.max) && !(options.modelValue.value < options.props.max));
  });

  function handleDecrement () {
    if (!options.props.min) {
      options.modelValue.value--;
    }

    if (isNumber(options.props.min) && isNumber(options.props.step)) {
      if (options.modelValue.value > options.props.min) {
        const value = options.modelValue.value - options.props.step;

        options.onDecrement?.(value);
      }
    }
  }

  function handleIncrement () {
    if (!options.props.max) {
      options.modelValue.value++;
    }

    if (isNumber(options.props.max) && isNumber(options.props.step)) {
      if (options.modelValue.value < options.props.max) {
        const value = options.modelValue.value + options.props.step;

        options.onIncrement?.(value);
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
