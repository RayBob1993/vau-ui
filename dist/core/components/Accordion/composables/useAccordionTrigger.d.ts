import { MaybeNull } from '../../../types';
import { AccordionRootContext, AccordionItemContext } from '../types';
import { ComputedRef } from 'vue';
export interface UseAccordionTriggerOptions {
    accordionRootContext: MaybeNull<AccordionRootContext>;
    accordionItemContext: MaybeNull<AccordionItemContext>;
}
export declare function useAccordionTrigger(options: UseAccordionTriggerOptions): {
    isDisabled: ComputedRef<boolean>;
    handleToggle: () => void;
};
