import type { ISizeProp, IThemeProp } from '../../../types';

/**
 * Интерфейс свойств компонента VDatepicker
 * @interface IVDatepickerProps
 */
export type IVDatepickerProps = {
  disabled?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;
