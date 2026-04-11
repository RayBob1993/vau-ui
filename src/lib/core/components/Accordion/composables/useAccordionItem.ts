import type { AccordionItemProps, AccordionModelValue, AccordionRootContext } from '../types';
import type { MaybeNull } from '../../../types';
import { isAccordionMultiple } from '../utils';
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
    return isAccordionMultiple(modelValue.value, isMultiple.value)
      ? modelValue.value.includes(props.value.value)
      : modelValue.value === props.value.value;
  });

  function handleToggle () {
    if (isAccordionMultiple(modelValue.value, isMultiple.value)) {
      options.accordionRootContext?.setModelValue(props.value?.value);

      return;
    }

    if (isActive.value) {
      options.accordionRootContext?.setModelValue(undefined);
    } else {
      options.accordionRootContext?.setModelValue(props.value?.value);
    }
  }

  return {
    isActive,
    handleToggle,
  };
}
