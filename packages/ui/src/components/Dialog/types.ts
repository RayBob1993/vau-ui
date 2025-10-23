import type { ISizeProp } from '../../types';

/**
 * Интерфейс свойств компонента VDialog
 * @interface IVDialogProps
 */
export type IVDialogProps = {
  appendToBody?: boolean;
  title?: string;
  destroyOnClose?: boolean;
} & Partial<ISizeProp>;

/**
 * Интерфейс событий компонента VDialog
 * @interface IVDialogEmits
 */
export interface IVDialogEmits {
  opened: [payload: Element];
  closed: [payload: Element];
  open: [];
  close: [];
}

/**
 * Интерфейс слотов компонента VDialog
 * @interface IVDialogSlots
 */
export interface IVDialogSlots {
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
