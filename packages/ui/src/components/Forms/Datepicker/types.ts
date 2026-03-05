import type { SizeProp, ThemeProp } from '@vau/core';

/**
 * Интерфейс свойств компонента VDatepicker
 * @interface IVDatepickerProps
 */
export type IVDatepickerProps = {
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  showWeekNumber?: boolean;
  valueFormat?: string;
  format?: string;
} & Partial<ThemeProp> & Partial<SizeProp>;
