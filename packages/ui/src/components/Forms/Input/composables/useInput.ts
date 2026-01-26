import type { IVInputModelValue, IVInputProps } from '../types';
import { InputTypes } from '../../../../constants';
import { useFormProvider } from '../../../../composables';
import { computed, type ModelRef } from 'vue';
import { useToggle } from '@vau/core';

export interface IUseInput {
  props: IVInputProps;
  modelValue: ModelRef<IVInputModelValue>;
}

export function useInput (options: IUseInput) {
  const { isFormDisabled, validationStatus } = useFormProvider();
  const [isFocus, setFocus] = useToggle();

  const isTextarea = computed<boolean>(() => options.props.type === InputTypes.TEXTAREA);
  const isDisabled = computed<boolean>(() => Boolean(options.props.disabled) || isFormDisabled.value);
  const hasValue = computed<boolean>(() => Boolean(options.modelValue.value?.trim()));

  return {
    isTextarea,
    isDisabled,
    isFocus,
    setFocus,
    hasValue,
    validationStatus
  };
}
