import type { AccordionItemProps, AccordionItemSlots, AccordionItemScopedSlot, UnscopedSlot } from '../../../core/index.js';
import type { VNode } from 'vue';
export interface VAccordionItemProps extends AccordionItemProps {
    title?: string;
}
export interface VAccordionItemSlots extends AccordionItemSlots {
    title?: UnscopedSlot;
    indicator?: (scope: AccordionItemScopedSlot) => Array<VNode>;
}
