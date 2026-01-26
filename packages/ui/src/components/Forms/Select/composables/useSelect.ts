import type { IVOptionInstance, IVSelectProps, IVSelectModelValue, IVOptionValue } from '../types';
import { type Maybe, useToggle } from '@vau/core';
import { computed, type ModelRef, ref } from 'vue';

export interface IUseSelectOptions {
  modelValue: ModelRef<IVSelectModelValue>;
  props: IVSelectProps;
  onChange?: (value: IVSelectModelValue) => void;
  onChangeModel?: (value: IVSelectModelValue) => void;
  onClear?: VoidFunction;
}

export function useSelect (options: IUseSelectOptions) {
  const [isOpen, , toggleOpen] = useToggle();

  const optionInstances = ref<Array<IVOptionInstance>>([]);

  const hasValue = computed<boolean>(() => {
    if (options.props.multiple && Array.isArray(options.modelValue.value)) {
      return options.modelValue.value.length > 0;
    }

    return Boolean(options.modelValue.value);
  });

  const isDisabled = computed<boolean>(() => Boolean(options.props.disabled));

  const activeValue = computed<IVOptionInstance | Array<IVOptionInstance> | undefined>(() => {
    if (options.modelValue.value && options.props.multiple && Array.isArray(options.modelValue.value)) {
      const arrayValue = options.modelValue.value;

      return optionInstances.value.filter(option => arrayValue.includes(option.props.value));
    }

    return optionInstances.value.find(option => option.props.value === options.modelValue.value);
  });

  function handleClear () {
    if (options.props.multiple && Array.isArray(options.modelValue.value)) {
      options.onChangeModel?.([]);
      options.onChange?.([]);

      return;
    }

    options.onChangeModel?.(undefined);
    options.onChange?.(undefined);
    options.onClear?.();
  }

  function handleChange (value: IVOptionValue) {
    if (isDisabled.value) {
      return;
    }

    if (options.props.multiple && Array.isArray(options.modelValue.value)) {
      const values = new Set<IVOptionValue>([...options.modelValue.value]);

      if (values.has(value)) {
        values.delete(value);
      } else {
        values.add(value);
      }

      options.onChangeModel?.([...values]);
      options.onChange?.([...values]);

      return;
    }

    options.onChangeModel?.(value);
    options.onChange?.(value);
  }

  function handleRemoveTag (value: IVOptionValue) {
    if (!options.props.multiple || !Array.isArray(options.modelValue.value)) {
      return;
    }

    const newValue = options.modelValue.value.filter(val => val !== value);

    options.onChangeModel?.(newValue);
    options.onChange?.(newValue);
  }

  function registerOption (newOption: IVOptionInstance) {
    const option: Maybe<IVOptionInstance> = optionInstances.value.find(option => option.id === newOption.id);

    if (option) {
      return;
    }

    optionInstances.value.push(newOption);
  }

  function unregisterOption (oldOption: IVOptionInstance) {
    optionInstances.value = optionInstances.value.filter(option => option.id !== oldOption.id);
  }

  return {
    isOpen,
    toggleOpen,
    hasValue,
    isDisabled,
    activeValue,
    handleClear,
    handleChange,
    handleRemoveTag,
    registerOption,
    unregisterOption
  };
}
