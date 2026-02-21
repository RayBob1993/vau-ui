import type { AccordionItemProps, AccordionItemSlots, UnscopedSlot } from '@vau/core';

export interface VAccordionItemProps extends AccordionItemProps {
  title?: string;
}

export interface VAccordionItemSlots extends AccordionItemSlots {
  title?: UnscopedSlot;
}
