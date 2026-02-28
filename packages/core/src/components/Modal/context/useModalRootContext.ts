import { AccordionRootContextKey } from './key';
import { inject } from 'vue';

export const useModalRootContext = () => inject(AccordionRootContextKey, null);
