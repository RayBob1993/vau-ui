import type { AccordionItemProps, AccordionModelValue, AccordionRootContext } from '../types';
import type { MaybeNull } from '../../../types';
import { computed, toValue, type MaybeRefOrGetter } from 'vue';

export interface UseAccordionItemOptions {
  accordionRootContext: MaybeNull<AccordionRootContext>;
  props: MaybeRefOrGetter<AccordionItemProps>;
}

export function useAccordionItem (options: UseAccordionItemOptions) {
  const props = computed(() => toValue(options.props));

  const modelValue = computed<AccordionModelValue>(() => toValue(options.accordionRootContext?.modelValue));
  const isMultiple = computed<boolean>(() => Boolean(toValue(options.accordionRootContext?.props)?.multiple));

  const isActive = computed<boolean>(() => {
    return isMultiple.value && Array.isArray(modelValue.value)
      ? modelValue.value.includes(props.value.value)
      : modelValue.value === props.value.value;
  });

  return {
    isActive,
  };
}
