import type { ISizeProp, IThemeProp } from '../../types';

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
  default?: VoidFunction;
  title?: VoidFunction;
  description?: VoidFunction;
}
