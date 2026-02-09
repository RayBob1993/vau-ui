import type { ISizeProp, IThemeProp } from '../../types';
import type { UnscopedSlot } from '@vau/core';

/**
 * Интерфейс свойств компонента VBadge
 * @interface IVBadgeProps
 */
export type IVBadgeProps = {
  dot?: boolean;
  hidden?: boolean;
  max?: number;
  value?: string | number;
} & Partial<IThemeProp> & Partial<ISizeProp>;

/**
 * Интерфейс слотов компонента VBadge
 * @interface IVBadgeSlots
 */
export interface IVBadgeSlots {
  default?: UnscopedSlot;
  content?: (props: {
    value: string;
  }) => void;
}
