import type { Maybe } from '@vau/core';
import type { ModelRef, Ref } from 'vue';

export type IVTabValue = number | string;
export type IVTabsModelValue = Maybe<IVTabValue>;

/**
 * Интерфейс свойств компонента VTabs
 * @interface IVTabsProps
 */
export interface IVTabsProps {
  scrollable?: boolean;
}

/**
 * Интерфейс событий компонента VTabs
 * @interface IVTabsProps
 */
export interface IVTabsEmits {
  (event: 'change', payload: IVTabsModelValue): void;
}

/**
 * Интерфейс свойств компонента VTab
 * @interface IVTabProps
 */
export interface IVTabProps {
  title?: string;
  value: IVTabValue;
  disabled?: boolean;
}

/**
 * Интерфейс слотов компонента VTab
 * @interface IVTabSlots
 */
export interface IVTabSlots {
  default?: (props: {
    isActive: boolean;
  }) => never;
  title?: (props: {
    isActive: boolean;
  }) => never;
}

/**
 * Интерфейс контекста компонента VTab
 * @interface IVTabContext
 */
export interface IVTabContext {
  id: string;
  props: IVTabProps;
  slots: IVTabSlots;
}

/**
 * Интерфейс контекста компонента VTabs
 * @interface IVTabsContext
 */
export interface IVTabsContext {
  props: IVTabsProps;
  modelValue: ModelRef<IVTabsModelValue>;
  tabs: Ref<Array<IVTabContext>>;
  handleChange: (value: IVTabValue) => void;
  registerTab: (tab: IVTabContext) => void;
  unregisterTab: (tab: IVTabContext) => void;
}
