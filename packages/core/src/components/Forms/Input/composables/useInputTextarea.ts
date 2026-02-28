import type { InputContext, InputTextareaProps } from '../types';
import type { MaybeNull } from '../../../../types';
import { computed } from 'vue';

export interface IUseInputTextareaOptions {
  context: MaybeNull<InputContext>;
}

export function useInputTextarea (options: IUseInputTextareaOptions) {
  const props = computed<InputTextareaProps>(() => ({
    disabled: Boolean(options.context?.isDisabled.value),
    placeholder: options.context?.props.placeholder,
    rows: options.context?.props.rows,
    cols: options.context?.props.cols,
    readonly: options.context?.props.readonly,
    autocomplete: options.context?.props.autocomplete,
  }));

  return {
    props
  };
}
