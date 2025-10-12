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
  (event: 'opened', payload: Element): void;
  (event: 'closed', payload: Element): void;
  (event: 'open'): void;
  (event: 'close'): void;
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
