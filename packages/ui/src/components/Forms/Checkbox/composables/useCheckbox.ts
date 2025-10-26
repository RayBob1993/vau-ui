import type { IVCheckboxModelValue, IVCheckboxProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed, type ModelRef } from 'vue';
import { isBoolean } from '@vau/core';

export function useCheckbox (props: IVCheckboxProps, modelValue: ModelRef<IVCheckboxModelValue>) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);

  const isChecked = computed<boolean>(() => {
    if (isBoolean(modelValue.value)) {
      return modelValue.value;
    }

    if (props.value && Array.isArray(modelValue.value)) {
      return modelValue.value.includes(props.value);
    }

    return false;
  });

  return {
    isDisabled,
    isChecked
  };
}
