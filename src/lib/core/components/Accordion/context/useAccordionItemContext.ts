import { AccordionItemContextKey } from './key';
import { inject } from 'vue';

export function useAccordionItemContext () {
  return inject(AccordionItemContextKey, null);
}
