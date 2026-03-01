import type { RadioProps, RadioModelValue } from '../types';
import type { FormRootContext, FormItemContext } from '../../Form';
import type { MaybeNull } from '../../../../types';
import { computed, type MaybeRefOrGetter, toValue } from 'vue';

export interface UseRadioRootOptions {
  formRootContext: MaybeNull<FormRootContext>;
  formItemContext: MaybeNull<FormItemContext>;
  props: MaybeRefOrGetter<RadioProps>;
  modelValue: MaybeRefOrGetter<RadioModelValue>;
}

export function useRadioRoot (options: UseRadioRootOptions) {
  const props = computed<RadioProps>(() => toValue(options.props));

  const modelValue = computed<RadioModelValue>(() => toValue(options.modelValue));

  const isDisabled = computed<boolean>(() => {
    return Boolean(
      options.formRootContext?.props.disabled ||
      options.formItemContext?.props.disabled ||
      props.value?.disabled
    );
  });

  const isActive = computed<boolean>(() => modelValue.value === props.value.value);

  return {
    isActive,
    isDisabled
  };
}
