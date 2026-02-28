import type { AccordionItemProps, AccordionModelValue, AccordionContext } from '../types';
import type { MaybeNull } from '../../../types';
import { computed, toValue, type MaybeRefOrGetter } from 'vue';

export interface IUseAccordionItem {
  context: MaybeNull<AccordionContext>;
  props: MaybeRefOrGetter<AccordionItemProps>;
}

export function useAccordionItem (options: IUseAccordionItem) {
  const props = computed(() => toValue(options.props));

  const modelValue = computed<AccordionModelValue>(() => options.context?.modelValue.value);

  const isActive = computed<boolean>(() => {
    return Boolean(options.context?.props.multiple) && Array.isArray(modelValue.value)
      ? modelValue.value.includes(props.value.value)
      : modelValue.value === props.value.value;
  });

  return {
    isActive,
  };
}
