import type { Ref } from 'vue';

/**
 * Интерфейс свойств компонента VDropdown
 * @interface IVDropdownProps
 */
export interface IVDropdownProps {}

/**
 * Интерфейс событий компонента VDropdown
 * @interface IVDropdownEmits
 */
export interface IVDropdownEmits {
  (event: 'opened', payload: Element): void;
  (event: 'closed', payload: Element): void;
  (event: 'open'): void;
  (event: 'close'): void;
}

/**
 * Интерфейс слотов компонента VDropdown
 * @interface IVDropdownSlots
 */
export interface IVDropdownSlots {
  default?: () => never;
  trigger?: (props: {
    isVisible: boolean;
    toggle: VoidFunction;
    setVisible: (payload: boolean) => void;
  }) => never;
}

export interface IVDropdownInstance {
  setVisible: (payload: boolean) => void;
  isVisible: boolean;
}

export interface IVDropdownExpose {
  setVisible: (payload: boolean) => void;
  isVisible: Ref<boolean>;
}

/**
 * Интерфейс контекста компонента VDropdown
 * @interface IVDropdownContext
 */
export interface IVDropdownContext {
  props: IVDropdownProps;
}
