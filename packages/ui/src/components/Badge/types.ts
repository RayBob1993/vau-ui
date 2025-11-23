import type { ISizeProp, IThemeProp } from '../../types';

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
  default?: VoidFunction;
  content?: (props: {
    value: string;
  }) => void;
}
