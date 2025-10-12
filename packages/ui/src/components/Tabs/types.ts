import type { Maybe } from '@vau/core';
import type { ModelRef, Ref } from 'vue';

export type IVTabValue = number | string;
export type IVTabsModelValue = Maybe<IVTabValue>;

export interface IVTabsProps {
  scrollable?: boolean;
}

export interface IVTabsEmits {
  (event: 'change', payload: IVTabsModelValue): void;
}

export interface IVTabProps {
  title?: string;
  value: IVTabValue;
}

export interface IVTabSlots {
  default?: (props: {
    isActive: boolean;
  }) => never;
  title?: (props: {
    isActive: boolean;
  }) => never;
}

export interface IVTabContext {
  id: string;
  props: IVTabProps;
  slots: IVTabSlots;
}

export interface IVTabsContext {
  props: IVTabsProps;
  modelValue: ModelRef<IVTabsModelValue>;
  tabs: Ref<Array<IVTabContext>>;
  handleChange: (value: IVTabValue) => void;
  registerTab: (tab: IVTabContext) => void;
  unregisterTab: (tab: IVTabContext) => void;
}
