import type { AlertProps, UnscopedSlot } from '@vau/core';

export interface IVAlertProps extends AlertProps {
  title?: string;
  description?: string;
  closable?: boolean;
}

/**
 * Интерфейс слотов компонента VAlert
 * @interface IVAlertSlots
 */
export interface IVAlertSlots {
  default?: UnscopedSlot;
  title?: UnscopedSlot;
  description?: UnscopedSlot;
  icon?: UnscopedSlot;
}
