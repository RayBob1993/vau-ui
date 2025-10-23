import type { ISizeProp } from '../../types';

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

/**
 * Интерфейс слотов компонента VDrawer
 * @interface IVDrawerSlots
 */
export interface IVDrawerSlots {
  default?: (props: {
    close: VoidFunction;
  }) => never;
  header?: (props: {
    close: VoidFunction;
  }) => never;
  footer?: (props: {
    close: VoidFunction;
  }) => never;
}
