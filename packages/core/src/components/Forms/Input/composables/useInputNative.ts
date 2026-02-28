import type { InputRootContext, InputNativeProps, InputProps } from '../types';
import type { Maybe, MaybeNull } from '../../../../types';
import { computed, toValue } from 'vue';

export interface IUseInputOptions {
  inputRootContext: MaybeNull<InputRootContext>;
}

export function useInputNative (options: IUseInputOptions) {
  const inputRootProps = computed<Maybe<InputProps>>(() => toValue(options.inputRootContext?.props));

  const props = computed<InputNativeProps>(() => ({
    disabled: Boolean(toValue(options.inputRootContext?.isDisabled)),
    placeholder: inputRootProps.value?.placeholder,
    type: inputRootProps.value?.nativeType,
    inputMode: inputRootProps.value?.inputMode,
    readonly: inputRootProps.value?.readonly,
    autocomplete: inputRootProps.value?.autocomplete,
  }));

  return {
    props
  };
}
