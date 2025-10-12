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
  (event: 'opened', payload: Element): void;
  (event: 'closed', payload: Element): void;
  (event: 'open'): void;
  (event: 'close', ): void;
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
