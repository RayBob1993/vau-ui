import type { InjectionKey } from 'vue';
import type { AccordionRootContext, AccordionItemContext } from '../types';

export const AccordionRootContextKey: InjectionKey<AccordionRootContext> = Symbol('AccordionRootContextKey');
export const AccordionItemContextKey: InjectionKey<AccordionItemContext> = Symbol('AccordionItemContextKey');
