import type { UnscopedSlot, SectionProps, SectionTitleProps } from '../../../core/index.js';
export type VSectionProps = {
    title?: string;
} & SectionProps & SectionTitleProps;
export interface VSectionSlots {
    header?: UnscopedSlot;
    default?: UnscopedSlot;
    footer?: UnscopedSlot;
}
