import type { ISizeProp, IThemeProp } from '../../types';
import type { VNode } from 'vue';

/**
 * Интерфейс свойств компонента VConfirm
 * @interface IVConfirmProps
 */
export type IVConfirmProps = {
  title?: string;
  message?: string | VNode;
  useHtml?: boolean;
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
