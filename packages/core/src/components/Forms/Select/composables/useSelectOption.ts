import type { OptionInstance, OptionProps, OptionValue, SelectRootContext, SelectModelValue } from '../types';
import type { MaybeNull } from '../../../../types';
import { isSelectMultiple } from '../utils';
import { computed, type MaybeRefOrGetter, onMounted, onUnmounted, toValue, useId } from 'vue';

export interface IUseSelectOptionOptions {
  selectRootContext: MaybeNull<SelectRootContext>;
  props: MaybeRefOrGetter<OptionProps>;
}

export function useSelectOption (options: IUseSelectOptionOptions) {
  const id = useId();

  const modelValue = computed<SelectModelValue>(() => options.selectRootContext?.modelValue.value);
  const props = computed<OptionProps>(() => toValue(options.props));

  const isActive = computed<boolean>(() => {
    if (isSelectMultiple(modelValue.value, options.selectRootContext?.props.multiple)) {
      return modelValue.value.includes(props.value.value);
    }

    return modelValue.value === props.value.value;
  });

  const isDisabled = computed<boolean>(() => Boolean(options.selectRootContext?.isDisabled.value || props.value?.disabled));

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
