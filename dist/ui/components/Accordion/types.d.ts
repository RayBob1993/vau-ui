import { AccordionItemProps, AccordionItemSlots, UnscopedSlot } from '../../../core/index.ts';
export interface VAccordionItemProps extends AccordionItemProps {
    title?: string;
}
export interface VAccordionItemSlots extends AccordionItemSlots {
    title?: UnscopedSlot;
}
