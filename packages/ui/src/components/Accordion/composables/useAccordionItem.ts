import type { IVAccordionItemProps, IVAccordionModelValue, IVAccordionContext } from '../types';
import type { MaybeNull } from '@vau/core';
import { computed } from 'vue';

export interface IUseAccordionItem {
  context: MaybeNull<IVAccordionContext>;
  props: IVAccordionItemProps;
}

export function useAccordionItem (options: IUseAccordionItem) {
  const modelValue = computed<IVAccordionModelValue>(() => options.context?.modelValue.value);
  const isMultiple = computed<boolean>(() => Boolean(options.context?.props.multiple));

  const isActive = computed<boolean>(() => {
    return isMultiple.value && Array.isArray(modelValue.value)
      ? modelValue.value.includes(options.props.value)
      : modelValue.value === options.props.value;
  });

  const tabIndex = computed<number>(() => options.props.disabled ? -1 : 0);

  function handleToggle () {
    const changeValue = modelValue.value === options.props.value ? undefined : options.props.value;

    options.context?.handleChange(changeValue);
  }

  return {
    isActive,
    tabIndex,
    handleToggle
  };
}
