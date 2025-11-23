import type { ISizeProp, IThemeProp } from '../../types';

/**
 * Интерфейс свойств компонента VToast
 * @interface IVToastProps
 */
export type IVToastProps = {
  title?: string;
  message: string;
  useHtml?: boolean;
  duration?: number;
  clearable?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;

/**
 * Интерфейс свойств компонента VToast
 * @interface IVToastEmits
 */
export interface IVToastEmits {
  close: [];
}
