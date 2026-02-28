import type { InjectionKey } from 'vue';
import type { AccordionContext, AccordionItemContext } from '../types';

export const AccordionRootContextKey: InjectionKey<AccordionContext> = Symbol('AccordionRootContextKey');
export const AccordionItemContextKey: InjectionKey<AccordionItemContext> = Symbol('AccordionItemContextKey');
