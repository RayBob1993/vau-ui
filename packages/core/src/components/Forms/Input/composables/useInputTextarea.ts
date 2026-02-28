import type { InputRootContext, InputProps, InputTextareaProps } from '../types';
import type { Maybe, MaybeNull } from '../../../../types';
import { computed, toValue } from 'vue';

export interface IUseInputTextareaOptions {
  inputRootContext: MaybeNull<InputRootContext>;
}

export function useInputTextarea (options: IUseInputTextareaOptions) {
  const inputRootProps = computed<Maybe<InputProps>>(() => toValue(options.inputRootContext?.props));

  const props = computed<InputTextareaProps>(() => ({
    disabled: Boolean(toValue(options.inputRootContext?.isDisabled)),
    placeholder: inputRootProps.value?.placeholder,
    rows: inputRootProps.value?.rows,
    cols: inputRootProps.value?.cols,
    readonly: inputRootProps.value?.readonly,
    autocomplete: inputRootProps.value?.autocomplete,
  }));

  return {
    props
  };
}
