import type { ISizeProp } from '../../types';

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

/**
 * Интерфейс слотов компонента VModal
 * @interface IVModalSlots
 */
export interface IVModalSlots {
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
