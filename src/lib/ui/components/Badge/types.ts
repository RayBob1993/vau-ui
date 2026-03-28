import type { SizeProp, ThemeProp, UnscopedSlot } from '@vau/core';

/**
 * Интерфейс свойств компонента VBadge
 * @interface IVBadgeProps
 */
export type IVBadgeProps = {
  dot?: boolean;
  hidden?: boolean;
  max?: number;
  value?: string | number;
} & Partial<ThemeProp> & Partial<SizeProp>;

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
