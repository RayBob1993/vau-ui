import type { IVButtonProps } from '../types';
import { useFormProvider } from '../../../composables';
import { computed } from 'vue';

export function useButton (props: IVButtonProps) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => {
    return isFormDisabled.value ||
      Boolean(props.loading) ||
      Boolean(props.disabled);
  });

  return {
    isDisabled
  };
}
