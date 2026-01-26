import type { IVButtonProps } from '../types';
import { useFormProvider } from '../../../composables';
import { computed } from 'vue';

export interface IUseButtonOptions {
  props: IVButtonProps;
}

export function useButton (options: IUseButtonOptions) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => {
    return isFormDisabled.value ||
      Boolean(options.props.loading) ||
      Boolean(options.props.disabled);
  });

  return {
    isDisabled
  };
}
