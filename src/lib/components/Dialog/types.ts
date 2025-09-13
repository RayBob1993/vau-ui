export interface IVDialogProps {
  appendToBody?: boolean;
  title?: string;
  destroyOnClose?: boolean;
}

export interface IVDialogEmits {
  (event: 'opened', payload: Element): void;
  (event: 'closed', payload: Element): void;
  (event: 'open'): void;
  (event: 'close'): void;
}

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
