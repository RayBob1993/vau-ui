import type { ISizeProp, IThemeProp } from '../../types';
import type { VNode } from 'vue';

/**
 * Интерфейс свойств компонента VToast
 * @interface IVToastProps
 */
export type IVToastProps = {
  title?: string;
  message?: string | VNode;
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
