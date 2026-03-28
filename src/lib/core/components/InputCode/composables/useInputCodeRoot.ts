import type { MaybeNull } from '../../../types';
import type { FormRootContext, FormItemContext } from '../../Form';
import type { InputCodeModelValue, InputCodeProps } from '../types';
import { computed, type MaybeRefOrGetter, toValue } from 'vue';

export interface UseInputCodeRootOptions {
  formRootContext: MaybeNull<FormRootContext>;
  formItemContext: MaybeNull<FormItemContext>;
  modelValue: MaybeRefOrGetter<InputCodeModelValue>;
  props: MaybeRefOrGetter<InputCodeProps>;
}

export function useInputCodeRoot (options: UseInputCodeRootOptions) {
  const props = computed<InputCodeProps>(() => toValue(options.props));

  const isDisabled = computed<boolean>(() => {
    return Boolean(
      options.formRootContext?.props.disabled ||
      options.formItemContext?.props.disabled ||
      props.value?.disabled
    );
  });

  return {
    isDisabled
  };
}
