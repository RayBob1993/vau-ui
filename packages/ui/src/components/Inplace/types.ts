export interface IVInplaceSlots {
  display?: (props: {
    open: VoidFunction;
  }) => never;
  content?: (props: {
    close: VoidFunction;
  }) => never;
}

export interface IVInplaceEmits {
  open: [];
  close: [];
}
