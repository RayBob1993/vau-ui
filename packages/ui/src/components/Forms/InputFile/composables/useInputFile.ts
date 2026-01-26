import type { IVInputFileProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed } from 'vue';

export interface IUseInputFile {
  props: IVInputFileProps;
}

export function useInputFile (options: IUseInputFile) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => Boolean(options.props.disabled) || isFormDisabled.value);

  return {
    isDisabled
  };
}
