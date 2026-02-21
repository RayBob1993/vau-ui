import { AccordionContextKey } from './key';
import { inject } from 'vue';

export const useAccordionContext = () => inject(AccordionContextKey, null);
