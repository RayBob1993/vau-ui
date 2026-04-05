import { UnscopedSlot, SectionProps, SectionTitleProps } from '../../../core/index.ts';
export type VSectionProps = {
    title?: string;
} & SectionProps & SectionTitleProps;
export interface VSectionSlots {
    header?: UnscopedSlot;
    default?: UnscopedSlot;
    footer?: UnscopedSlot;
}
