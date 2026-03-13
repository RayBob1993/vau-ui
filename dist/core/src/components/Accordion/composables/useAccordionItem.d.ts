import { AccordionItemProps, AccordionRootContext } from '../types';
import { MaybeNull } from '../../../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseAccordionItemOptions {
    accordionRootContext: MaybeNull<AccordionRootContext>;
    props: MaybeRefOrGetter<AccordionItemProps>;
}
export declare function useAccordionItem(options: UseAccordionItemOptions): {
    isActive: import('vue').ComputedRef<boolean>;
};
