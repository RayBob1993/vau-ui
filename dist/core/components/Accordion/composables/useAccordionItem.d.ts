import type { AccordionItemProps, AccordionRootContext } from '../types';
import type { MaybeNull } from '../../../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseAccordionItemOptions {
    accordionRootContext: MaybeNull<AccordionRootContext>;
    props: MaybeRefOrGetter<AccordionItemProps>;
}
export declare function useAccordionItem(options: UseAccordionItemOptions): {
    isActive: import("vue").ComputedRef<boolean>;
    handleToggle: () => void;
};
