import type { Maybe, MaybeNull } from '../../../types';
import type { AccordionRootContext, AccordionItemContext, AccordionItemProps } from '../types';
import { computed, toValue } from 'vue';

export interface IUseAccordionTriggerOptions {
  accordionRootContext: MaybeNull<AccordionRootContext>;
  accordionItemContext: MaybeNull<AccordionItemContext>;
}

export function useAccordionTrigger (options: IUseAccordionTriggerOptions) {
  const accordionItemProps = computed<Maybe<AccordionItemProps>>(() => toValue(options.accordionItemContext?.props));

  const isDisabled = computed<boolean>(() => Boolean(accordionItemProps.value?.disabled));

  function handleToggle () {
    options.accordionRootContext?.setModelValue(accordionItemProps.value?.value);
  }

  return {
    isDisabled,
    handleToggle
  };
}
