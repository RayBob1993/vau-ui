export type IVDrawerProps = {
  appendToBody?: boolean;
  title?: string;
  destroyOnClose?: boolean;
};

export interface IVDrawerEmits {
  (event: 'opened', payload: Element): void;
  (event: 'closed', payload: Element): void;
  (event: 'open'): void;
  (event: 'close', ): void;
}

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
