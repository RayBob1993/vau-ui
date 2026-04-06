import type { MaybeNull } from '../../../types';
import type { AccordionRootContext, AccordionItemContext } from '../types';
export interface UseAccordionTriggerOptions {
    accordionRootContext: MaybeNull<AccordionRootContext>;
    accordionItemContext: MaybeNull<AccordionItemContext>;
}
export declare function useAccordionTrigger(options: UseAccordionTriggerOptions): {
    isDisabled: import("vue").ComputedRef<boolean>;
    handleToggle: () => void;
};
