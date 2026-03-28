import type { SizeProp, ThemeProp } from '@vau/core';
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
} & Partial<ThemeProp> & Partial<SizeProp>;

/**
 * Интерфейс свойств компонента VToast
 * @interface IVToastEmits
 */
export interface IVToastEmits {
  close: [];
}
