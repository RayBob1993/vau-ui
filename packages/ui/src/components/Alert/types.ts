import type { ISizeProp, IThemeProp } from '../../types';
import type { UnscopedSlot } from '@vau/core';

/**
 * Интерфейс свойств компонента VAlert
 * @interface IVAlertProps
 */
export type IVAlertProps = {
  title?: string;
  description?: string;
  showIcon?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;

/**
 * Интерфейс слотов компонента VAlert
 * @interface IVAlertSlots
 */
export interface IVAlertSlots {
  default?: UnscopedSlot;
  title?: UnscopedSlot;
  description?: UnscopedSlot;
}
