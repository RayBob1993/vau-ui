import type { IVDatepickerProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed } from 'vue';

export interface IUseDatepickerOptions {
  props: IVDatepickerProps;
}

export function useDatepicker (options: IUseDatepickerOptions) {
  const { isFormDisabled, validationStatus } = useFormProvider();

  const isDisabled = computed<boolean>(() => Boolean(options.props.disabled) || isFormDisabled.value);

  return {
    isDisabled,
    validationStatus
  };
}
