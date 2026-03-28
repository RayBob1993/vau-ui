import type { VNode } from 'vue';

export interface IVInplaceSlots {
  display?: (props: {
    open: VoidFunction;
  }) => Array<VNode>;
  content?: (props: {
    close: VoidFunction;
  }) => Array<VNode>;
}

export interface IVInplaceEmits {
  open: [];
  close: [];
}
