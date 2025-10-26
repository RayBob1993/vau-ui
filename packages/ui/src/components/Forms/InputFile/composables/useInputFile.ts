import type { IVInputFileProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed } from 'vue';

export function useInputFile (props: IVInputFileProps) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);

  return {
    isDisabled
  };
}
