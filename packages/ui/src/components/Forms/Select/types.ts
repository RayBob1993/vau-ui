import type { ComputedRef, ModelRef } from 'vue';
import type { ISizeProp, IThemeProp } from '../../../types';
import type { Maybe, MaybeArray, MaybeNull } from '@vau/core';

export type IVOptionValue = string | number;

/**
 * Интерфейс свойств компонента VOption
 * @interface IVOptionProps
 */
export interface IVOptionProps {
  label: string;
  value: IVOptionValue;
  disabled?: boolean;
}

/**
 * Интерфейс слотов компонента VOption
 * @interface IVOptionSlots
 */
export interface IVOptionSlots {
  default: (props: {
    isActive: boolean;
    isDisabled: boolean;
  }) => never;
}

export interface IVOptionInstance {
  id: string;
  props: IVOptionProps;
}

export type IVSelectModelValue = Maybe<MaybeNull<MaybeArray<IVOptionValue>>>;

/**
 * Интерфейс слотов компонента VSelect
 * @interface IVSelectProps
 */
export type IVSelectProps = {
  disabled?: boolean;
  multiple?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  loading?: boolean;
  placeholder?: string;
} & Partial<IThemeProp> & Partial<ISizeProp>;

/**
 * Интерфейс событий компонента VSelect
 * @interface IVSelectEmits
 */
export interface IVSelectEmits {
  (event: 'change', payload: IVSelectModelValue): void;
  (event: 'opened', payload: Element): void;
  (event: 'closed', payload: Element): void;
  (event: 'open'): void;
  (event: 'close'): void;
}

/**
 * Интерфейс контекста компонента VSelect
 * @interface IVSelectContext
 */
export interface IVSelectContext {
  props: IVSelectProps;
  modelValue: ModelRef<IVSelectModelValue>;
  hasValue: ComputedRef<boolean>;
  isDisabled: ComputedRef<boolean>;
  handleChange: (value: IVOptionValue) => void;
  registerOption: (option: IVOptionInstance) => void;
  unregisterOption: (option: IVOptionInstance) => void;
}

export interface IVSelectInstance {
  setVisible: (payload: boolean) => void;
}

export interface IVSelectExpose {
  setVisible: (payload: boolean) => void;
}
