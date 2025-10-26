import type { IVSwitchProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed } from 'vue';

export function useSwitch (props: IVSwitchProps) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);

  return {
    isDisabled
  };
}
