import type { IVCheckboxModelValue, IVCheckboxProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed, type ModelRef } from 'vue';
import { isBoolean } from '@vau/core';

export interface IUseCheckbox {
  props: IVCheckboxProps;
  modelValue: ModelRef<IVCheckboxModelValue>;
}

export function useCheckbox (options: IUseCheckbox) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => Boolean(options.props.disabled) || isFormDisabled.value);

  const isChecked = computed<boolean>(() => {
    if (isBoolean(options.modelValue.value)) {
      return options.modelValue.value;
    }

    if (options.props.value && Array.isArray(options.modelValue.value)) {
      return options.modelValue.value.includes(options.props.value);
    }

    return false;
  });

  return {
    isDisabled,
    isChecked
  };
}
