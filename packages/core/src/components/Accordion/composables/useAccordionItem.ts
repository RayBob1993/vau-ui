import type { AccordionItemProps, AccordionModelValue, AccordionContext } from '../types';
import type { MaybeNull } from '@vau/core';
import { computed } from 'vue';

export interface IUseAccordionItem {
  context: MaybeNull<AccordionContext>;
  props: AccordionItemProps;
}

export function useAccordionItem (options: IUseAccordionItem) {
  const modelValue = computed<AccordionModelValue>(() => options.context?.modelValue.value);

  const isActive = computed<boolean>(() => {
    return Boolean(options.context?.props.multiple) && Array.isArray(modelValue.value)
      ? modelValue.value.includes(options.props.value)
      : modelValue.value === options.props.value;
  });

  return {
    isActive,
  };
}
