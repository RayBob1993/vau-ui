import type { IVInputRangeProps, IVInputRangeModelValue } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed, type MaybeRefOrGetter } from 'vue';

export interface IUseInputRangeOptions {
  modelValue: MaybeRefOrGetter<IVInputRangeModelValue>;
  props: IVInputRangeProps;
}

export function useInputRange (options: IUseInputRangeOptions) {
  const { isFormDisabled, validationStatus } = useFormProvider();

  const isDisabled = computed<boolean>(() => Boolean(options.props.disabled) || isFormDisabled.value);

  return {
    isDisabled,
    validationStatus
  };
}
