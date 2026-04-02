import type { UnscopedSlot, SectionProps, SectionTitleProps } from '@vau/core';

export type VSectionProps = {
  title?: string;
} & SectionProps & SectionTitleProps;

export interface VSectionSlots {
  header?: UnscopedSlot;
  default?: UnscopedSlot;
  footer?: UnscopedSlot;
}
