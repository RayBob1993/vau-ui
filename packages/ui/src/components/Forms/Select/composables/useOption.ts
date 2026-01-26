import type { IVOptionProps, IVOptionValue, IVSelectContext } from '../types';
import type { MaybeNull } from '@vau/core';
import { computed, useId } from 'vue';

export interface IUseOptionOptions {
  context: MaybeNull<IVSelectContext>;
  props: IVOptionProps;
}

export function useOption (options: IUseOptionOptions) {
  const id = useId();

  const isActive = computed<boolean>(() => {
    if (options.context?.props.multiple && Array.isArray(options.context?.modelValue.value)) {
      return options.context.modelValue.value.includes(options.props.value);
    }

    return options.context?.modelValue.value === options.props.value;
  });

  const isDisabled = computed<boolean>(() => Boolean(options.context?.isDisabled.value || options.props.disabled));

  function handleChange (value: IVOptionValue) {
    if (options.props.disabled) {
      return;
    }

    options.context?.handleChange(value);
  }

  return {
    id,
    isActive,
    isDisabled,
    handleChange
  };
}
