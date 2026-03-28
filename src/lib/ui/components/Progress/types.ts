import type { SizeProp, ThemeProp } from '@vau/core';

/**
 * Интерфейс свойств компонента VProgress
 * @interface IVProgressProps
 */
export type IVProgressProps = {
  indeterminate?: boolean;
  showValue?: boolean;
  value: number;
} & Partial<ThemeProp> & Partial<SizeProp>;
