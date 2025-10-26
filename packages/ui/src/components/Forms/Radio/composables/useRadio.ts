import type { IVRadioModelValue, IVRadioProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed, type ModelRef } from 'vue';

export function useRadio (props: IVRadioProps, modelValue: ModelRef<IVRadioModelValue>) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);
  const isChecked = computed<boolean>(() => modelValue.value === props.value);

  return {
    isDisabled,
    isChecked
  };
}
