import type { UnscopedSlot, ModalProps } from '@vau/core';

export interface IVModalProps extends ModalProps {
  title?: string;
};

export interface IVModalSlots {
  default?: UnscopedSlot;
  header?: UnscopedSlot;
  footer?: UnscopedSlot;
}
