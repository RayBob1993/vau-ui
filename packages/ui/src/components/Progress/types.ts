import type { ISizeProp, IThemeProp } from '../../types';

/**
 * Интерфейс свойств компонента VProgress
 * @interface IVProgressProps
 */
export type IVProgressProps = {
  indeterminate?: boolean;
  showValue?: boolean;
  value: number;
} & Partial<IThemeProp> & Partial<ISizeProp>;
