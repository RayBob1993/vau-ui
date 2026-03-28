import type { IVRatingModelValue, IVRatingProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed, type MaybeRefOrGetter } from 'vue';

export interface IUseRangeOptions {
  modelValue: MaybeRefOrGetter<IVRatingModelValue>;
  props: IVRatingProps;
}

export function useRange (options: IUseRangeOptions) {
  const { isFormDisabled, validationStatus } = useFormProvider();

  const isDisabled = computed<boolean>(() => Boolean(options.props.disabled) || isFormDisabled.value);

  return {
    isDisabled,
    validationStatus
  };
}
