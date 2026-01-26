import type { IVInputCodeProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed } from 'vue';

export interface IUseInputCode {
  props: IVInputCodeProps;
}

export function useInputCode (options: IUseInputCode) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => Boolean(options.props.disabled) || isFormDisabled.value);

  return {
    isDisabled
  };
}
