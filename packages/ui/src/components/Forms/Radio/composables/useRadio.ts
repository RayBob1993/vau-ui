import type { IVRadioModelValue, IVRadioProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed, type MaybeRefOrGetter, toValue } from 'vue';

export interface IUseRadioOptions {
  props: IVRadioProps;
  modelValue: MaybeRefOrGetter<IVRadioModelValue>;
}

export function useRadio (options: IUseRadioOptions) {
  const { isFormDisabled } = useFormProvider();

  const modelValue = computed<IVRadioModelValue>(() => toValue(options.modelValue));
  const isDisabled = computed<boolean>(() => options.props.disabled || isFormDisabled.value);
  const isChecked = computed<boolean>(() => modelValue.value === options.props.value);

  return {
    isDisabled,
    isChecked
  };
}
