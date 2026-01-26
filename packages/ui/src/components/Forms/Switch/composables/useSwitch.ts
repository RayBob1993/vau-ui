import type { IVSwitchProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed } from 'vue';

export interface IUseSwitch {
  props: IVSwitchProps;
}

export function useSwitch (options: IUseSwitch) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => Boolean(options.props.disabled) || isFormDisabled.value);

  return {
    isDisabled
  };
}
