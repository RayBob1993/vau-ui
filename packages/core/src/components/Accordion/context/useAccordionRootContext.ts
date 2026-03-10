import { AccordionRootContextKey } from './key';
import { inject } from 'vue';

export function useAccordionRootContext () {
  return inject(AccordionRootContextKey, null);
}
