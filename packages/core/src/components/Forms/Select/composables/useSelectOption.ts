import type { OptionInstance, OptionProps, OptionValue, SelectContext, SelectModelValue } from '../types';
import type { MaybeNull } from '../../../../types';
import { isSelectMultiple } from '../utils';
import { computed, type MaybeRefOrGetter, onUnmounted, toValue, useId } from 'vue';

export interface IUseSelectOptionOptions {
  context: MaybeNull<SelectContext>;
  props: MaybeRefOrGetter<OptionProps>;
}

export function useSelectOption (options: IUseSelectOptionOptions) {
  const id = useId();

  const modelValue = computed<SelectModelValue>(() => options.context?.modelValue.value);
  const props = computed<OptionProps>(() => toValue(options.props));

  const isActive = computed<boolean>(() => {
    if (isSelectMultiple(modelValue.value, options.context?.props.multiple)) {
      return modelValue.value.includes(props.value.value);
    }

    return modelValue.value === props.value.value;
  });

  const isDisabled = computed<boolean>(() => Boolean(options.context?.isDisabled.value || props.value?.disabled));

  const instance = computed<OptionInstance>(() => ({
    id,
    props: props.value
  }));

  function handleChange (value: OptionValue) {
    if (props.value?.disabled) {
      return;
    }

    options.context?.handleChange(value);
  }

  options.context?.registerOption(instance.value);

  onUnmounted(() => {
    options.context?.unregisterOption(instance.value.id);
  });

  return {
    isActive,
    isDisabled,
    handleChange
  };
}
