import type { IVInputModelValue, IVInputProps } from '../types';
import { InputTypes } from '../../../../constants';
import { useFormProvider } from '../../../../composables';
import { computed, type ModelRef } from 'vue';
import { useToggle } from '@vau/core';

export function useInput (props: IVInputProps, modelValue: ModelRef<IVInputModelValue>) {
  const { isFormDisabled } = useFormProvider();
  const [isFocus, setFocus] = useToggle();

  const isTextarea = computed<boolean>(() => props.type === InputTypes.TEXTAREA);
  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);
  const hasValue = computed<boolean>(() => Boolean(modelValue.value?.trim()));

  return {
    isTextarea,
    isDisabled,
    isFocus,
    setFocus,
    hasValue
  };
}
