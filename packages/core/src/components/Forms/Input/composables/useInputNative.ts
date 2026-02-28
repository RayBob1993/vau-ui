import type { InputContext, InputNativeProps } from '../types';
import type { MaybeNull } from '../../../../types';
import { computed } from 'vue';

export interface IUseInputOptions {
  context: MaybeNull<InputContext>;
}

export function useInputNative (options: IUseInputOptions) {
  const props = computed<InputNativeProps>(() => ({
    disabled: Boolean(options.context?.isDisabled.value),
    placeholder: options.context?.props.placeholder,
    type: options.context?.props.nativeType,
    inputMode: options.context?.props.inputMode,
    readonly: options.context?.props.readonly,
    autocomplete: options.context?.props.autocomplete,
  }));

  return {
    props
  };
}
