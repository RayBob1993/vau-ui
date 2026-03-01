import type { CheckboxProps, CheckboxModelValue } from '../types';
import type { FormRootContext, FormItemContext } from '../../Form';
import type { MaybeNull } from '../../../../types';
import { isBoolean } from '../../../../utils';
import { computed, MaybeRefOrGetter, toValue } from 'vue';

export interface UseCheckboxRootOptions {
  formRootContext: MaybeNull<FormRootContext>;
  formItemContext: MaybeNull<FormItemContext>;
  props: MaybeRefOrGetter<CheckboxProps>;
  modelValue: MaybeRefOrGetter<CheckboxModelValue>;
}

export function useCheckboxRoot (options: UseCheckboxRootOptions) {
  const props = computed<CheckboxProps>(() => toValue(options.props));

  const modelValue = computed<CheckboxModelValue>(() => toValue(options.modelValue));

  const isDisabled = computed<boolean>(() => {
    return Boolean(
      options.formRootContext?.props.disabled ||
      options.formItemContext?.props.disabled ||
      props.value?.disabled
    );
  });

  const isActive = computed<boolean>(() => {
    if (isBoolean(modelValue.value)) {
      return modelValue.value;
    }

    if (props.value.value && Array.isArray(modelValue.value)) {
      return modelValue.value.includes(props.value.value);
    }

    return false;
  });

  const isIndeterminate = computed<boolean>(() => Boolean(props.value?.indeterminate));

  return {
    isActive,
    isDisabled,
    isIndeterminate
  };
}
