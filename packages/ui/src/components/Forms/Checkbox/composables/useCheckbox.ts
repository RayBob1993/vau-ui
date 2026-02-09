import type { IVCheckboxModelValue, IVCheckboxProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed, type MaybeRefOrGetter, toValue } from 'vue';
import { isBoolean } from '@vau/core';

export interface IUseCheckbox {
  props: IVCheckboxProps;
  modelValue: MaybeRefOrGetter<IVCheckboxModelValue>;
}

export function useCheckbox (options: IUseCheckbox) {
  const { isFormDisabled } = useFormProvider();

  const modelValue = computed<IVCheckboxModelValue>(() => toValue(options.modelValue));
  const isDisabled = computed<boolean>(() => Boolean(options.props.disabled) || isFormDisabled.value);

  const isChecked = computed<boolean>(() => {
    if (isBoolean(modelValue.value)) {
      return modelValue.value;
    }

    if (options.props.value && Array.isArray(modelValue.value)) {
      return modelValue.value.includes(options.props.value);
    }

    return false;
  });

  return {
    isDisabled,
    isChecked
  };
}
