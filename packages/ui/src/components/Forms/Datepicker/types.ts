import type { ISizeProp, IThemeProp } from '../../../types';

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
} & Partial<IThemeProp> & Partial<ISizeProp>;
