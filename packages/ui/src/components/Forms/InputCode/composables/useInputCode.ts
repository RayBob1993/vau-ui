import type { IVInputCodeProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed } from 'vue';

export function useInputCode (props: IVInputCodeProps) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);

  return {
    isDisabled
  };
}
