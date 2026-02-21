import { AccordionItemContextKey } from './key';
import { inject } from 'vue';

export const useAccordionItemContext = () => inject(AccordionItemContextKey, null);
