import type { IVRadioModelValue, IVRadioProps } from '../types';
import { useFormProvider } from '../../../../composables';
import { computed, type ModelRef } from 'vue';

export interface IUseRadioOptions {
  props: IVRadioProps;
  modelValue: ModelRef<IVRadioModelValue>;
}

export function useRadio (options: IUseRadioOptions) {
  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => options.props.disabled || isFormDisabled.value);
  const isChecked = computed<boolean>(() => options.modelValue.value === options.props.value);

  return {
    isDisabled,
    isChecked
  };
}
