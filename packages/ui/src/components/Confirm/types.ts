import type { ISizeProp, IThemeProp } from '../../types';

/**
 * Интерфейс свойств компонента VConfirm
 * @interface IVConfirmProps
 */
export type IVConfirmProps = {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
} & Partial<IThemeProp> & Partial<ISizeProp>;

/**
 * Интерфейс событий компонента VConfirm
 * @interface IVConfirmEmits
 */
export interface IVConfirmEmits {
  success: [];
  cancel: [];
  close: [];
}
