import type { ISizeProp } from '../../types';
import type { VNode } from 'vue';

/**
 * Интерфейс слотов компонента VDrawer
 * @interface IVDrawerProps
 */
export type IVDrawerProps = {
  appendToBody?: boolean;
  title?: string;
  destroyOnClose?: boolean;
} & Partial<ISizeProp>;

/**
 * Интерфейс событий компонента VDrawer
 * @interface IVDrawerEmits
 */
export interface IVDrawerEmits {
  opened: [payload: Element];
  closed: [payload: Element];
  open: [];
  close: [];
}

export interface IVDrawerScopedSlot {
  close: VoidFunction;
}

/**
 * Интерфейс слотов компонента VDrawer
 * @interface IVDrawerSlots
 */
export interface IVDrawerSlots {
  default?: (props: IVDrawerScopedSlot) => Array<VNode>;
  header?: (props: IVDrawerScopedSlot) => Array<VNode>;
  footer?: (props: IVDrawerScopedSlot) => Array<VNode>;
}
