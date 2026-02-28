import type { MaybeNull } from '../../../../types';
import type { FormContext, FormItemContext } from '../../Form';
import type { InputModelValue, InputProps } from '../types';
import { InputTypes } from '../../../../constants';
import { useToggle } from '../../../../composables';
import { computed, type MaybeRefOrGetter, toValue } from 'vue';

export interface IUseInputRootOptions {
  formContext: MaybeNull<FormContext>;
  formItemContext: MaybeNull<FormItemContext>;
  modelValue: MaybeRefOrGetter<InputModelValue>;
  props: MaybeRefOrGetter<InputProps>;
}

export function useInputRoot (options: IUseInputRootOptions) {
  const [isFocus, setFocus] = useToggle();

  const props = computed<InputProps>(() => toValue(options.props));

  const isDisabled = computed<boolean>(() => {
    return Boolean(
      options.formContext?.props.disabled ||
      options.formItemContext?.props.disabled ||
      props.value?.disabled
    );
  });

  const isTextarea = computed<boolean>(() => props.value.type === InputTypes.TEXTAREA);

  const hasValue = computed<boolean>(() => Boolean(toValue(options.modelValue)?.trim()));

  return {
    isFocus,
    isDisabled,
    isTextarea,
    hasValue,
    setFocus
  };
}
