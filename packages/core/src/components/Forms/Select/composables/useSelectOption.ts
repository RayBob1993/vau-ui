import type { OptionInstance, OptionProps, OptionValue, SelectRootContext, SelectModelValue } from '../types';
import type { MaybeNull } from '../../../../types';
import { isSelectMultiple } from '../utils';
import { computed, type MaybeRefOrGetter, onMounted, onUnmounted, toValue, useId } from 'vue';

export interface UseSelectOptionOptions {
  selectRootContext: MaybeNull<SelectRootContext>;
  props: MaybeRefOrGetter<OptionProps>;
}

export function useSelectOption (options: UseSelectOptionOptions) {
  const id = useId();

  const modelValue = computed<SelectModelValue>(() => toValue(options.selectRootContext?.modelValue));
  const props = computed<OptionProps>(() => toValue(options.props));
  const isMultiple = computed<boolean>(() => Boolean(toValue(options.selectRootContext?.props)?.multiple));

  const isActive = computed<boolean>(() => {
    if (isSelectMultiple(modelValue.value, isMultiple.value)) {
      return modelValue.value.includes(props.value.value);
    }

    return modelValue.value === props.value.value;
  });

  const isDisabled = computed<boolean>(() => Boolean(toValue(options.selectRootContext?.isDisabled) || props.value?.disabled));

  const instance = computed<OptionInstance>(() => ({
    id,
    props: props.value
  }));

  function handleChange (value: OptionValue) {
    if (props.value?.disabled) {
      return;
    }

    options.selectRootContext?.handleChange(value);
  }

  onMounted(() => {
    options.selectRootContext?.registerOption(instance.value);
  });

  onUnmounted(() => {
    options.selectRootContext?.unregisterOption(id);
  });

  return {
    isActive,
    isDisabled,
    handleChange
  };
}
