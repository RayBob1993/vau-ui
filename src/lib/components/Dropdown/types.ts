import type { Ref } from 'vue';

export interface IVDropdownProps {}

export interface IVDropdownEmits {
  (event: 'opened', payload: Element): void;
  (event: 'closed', payload: Element): void;
  (event: 'open'): void;
  (event: 'close'): void;
}

export interface IVDropdownInstance {
  setVisible: (payload: boolean) => void;
  isVisible: boolean;
}

export interface IVDropdownExpose {
  setVisible: (payload: boolean) => void;
  isVisible: Ref<boolean>;
}

export interface IVDropdownContext {
  props: IVDropdownProps;
}
