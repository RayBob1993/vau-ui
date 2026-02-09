import type { Ref, VNode } from 'vue';
import type { UnscopedSlot } from '@vau/core';

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
  opened: [payload: Element];
  closed: [payload: Element];
  open: [];
  close: [];
}

/**
 * Интерфейс слотов компонента VDropdown
 * @interface IVDropdownSlots
 */
export interface IVDropdownSlots {
  default?: UnscopedSlot;
  trigger?: (props: {
    isVisible: boolean;
    toggle: VoidFunction;
    setVisible: (payload: boolean) => void;
  }) => Array<VNode>;
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
