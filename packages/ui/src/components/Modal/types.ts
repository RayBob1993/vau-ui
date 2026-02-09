import type { ISizeProp } from '../../types';
import type { VNode } from 'vue';

/**
 * Интерфейс свойств компонента VModal
 * @interface IVModalProps
 */
export type IVModalProps = {
  appendToBody?: boolean;
  title?: string;
  destroyOnClose?: boolean;
} & Partial<ISizeProp>;

/**
 * Интерфейс событий компонента VModal
 * @interface IVModalEmits
 */
export interface IVModalEmits {
  opened: [payload: Element];
  closed: [payload: Element];
  open: [];
  close: [];
}

export interface IVModalScopedSlot {
  close: VoidFunction;
}

/**
 * Интерфейс слотов компонента VModal
 * @interface IVModalSlots
 */
export interface IVModalSlots {
  default?: (props: IVModalScopedSlot) => Array<VNode>;
  header?: (props: IVModalScopedSlot) => Array<VNode>;
  footer?: (props: IVModalScopedSlot) => Array<VNode>;
}
