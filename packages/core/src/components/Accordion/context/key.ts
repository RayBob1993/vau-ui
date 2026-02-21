import type { InjectionKey } from 'vue';
import type { AccordionContext, AccordionItemContext } from '../types';

export const AccordionContextKey: InjectionKey<AccordionContext> = Symbol('AccordionContextKey');
export const AccordionItemContextKey: InjectionKey<AccordionItemContext> = Symbol('AccordionItemContextKey');
