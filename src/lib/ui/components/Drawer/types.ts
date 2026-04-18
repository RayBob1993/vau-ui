import type { UnscopedSlot, DrawerProps } from '@vau/core';

export interface IVDrawerProps extends DrawerProps {
  title?: string;
}

export interface IVDrawerSlots {
  default?: UnscopedSlot;
  header?: UnscopedSlot;
  footer?: UnscopedSlot;
}
