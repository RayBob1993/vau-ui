import { VAccordionContextKey } from './key';
import { inject } from 'vue';

export const useAccordionContext = () => inject(VAccordionContextKey, null);
