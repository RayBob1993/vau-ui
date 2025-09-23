import type { ComputedRef, ModelRef } from 'vue';
import type { Maybe, MaybeArray, MaybeNull } from '../../../types';

export type IVOptionValue = string | number;

export interface IVOptionProps {
  label: string;
  value: IVOptionValue;
  disabled?: boolean;
}

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

export interface IVSelectProps {
  disabled?: boolean;
  multiple?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  loading?: boolean;
  placeholder?: string;
}

export interface IVSelectEmits {
  (event: 'change', payload: IVSelectModelValue): void;
  (event: 'opened', payload: Element): void;
  (event: 'closed', payload: Element): void;
  (event: 'open'): void;
  (event: 'close'): void;
}

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
