import type { IVInputNumberModelValue, IVInputNumberProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { INPUT_NUMBER_STEP } from '../constants';
import { computed, type MaybeRefOrGetter, toValue } from 'vue';
import { isNumber } from '@vau/core';

export interface IUseInputNumber {
  props: IVInputNumberProps;
  modelValue: MaybeRefOrGetter<IVInputNumberModelValue>;
  onDecrement?: (value: IVInputNumberModelValue) => void;
  onIncrement?: (value: IVInputNumberModelValue) => void;
}

export function useInputNumber (options: IUseInputNumber) {
  const { isFormDisabled } = useFormProvider();

  const modelValue = computed<IVInputNumberModelValue>(() => toValue(options.modelValue));
  const step = computed<number>(() => options.props?.step || INPUT_NUMBER_STEP);

  const isDisabled = computed<boolean>(() => Boolean(options.props.disabled) || isFormDisabled.value);
  const isDecrementDisabled = computed<boolean>(() => {
    return isDisabled.value || (isNumber(options.props.min) && modelValue.value === options.props.min);
  });
  const isIncrementDisabled = computed<boolean>(() => {
    return isDisabled.value || (isNumber(options.props.max) && !(modelValue.value < options.props.max));
  });

  function handleDecrement () {
    if (options.props.readonly) {
      return;
    }

    const newValue = modelValue.value - step.value;

    // Если min не указан или значение больше минимального
    if (!isNumber(options.props.min) || newValue >= options.props.min) {
      options.onDecrement?.(newValue);
    }
  }

  function handleIncrement () {
    if (options.props.readonly) {
      return;
    }

    const newValue = modelValue.value + step.value;

    // Если max не указан или значение меньше максимального
    if (!isNumber(options.props.max) || newValue <= options.props.max) {
      options.onIncrement?.(newValue);
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
