import { AccordionRootContextKey } from './key';
import { inject } from 'vue';

export const useAccordionRootContext = () => inject(AccordionRootContextKey, null);
