import type { IVDatepickerProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed } from 'vue';

export function useDatepicker (props: IVDatepickerProps) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);

  return {
    isDisabled
  };
}
