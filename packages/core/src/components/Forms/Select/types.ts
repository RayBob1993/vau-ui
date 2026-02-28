import type { ISizeProp, IThemeProp, Maybe, MaybeArray, MaybeNull } from '../../../types';
import type { ComputedRef, ModelRef, Ref, VNode } from 'vue';

export type OptionValue = string | number;
export type SelectModelValue = Maybe<MaybeNull<MaybeArray<OptionValue>>>;

export interface OptionProps {
  value: OptionValue;
  disabled?: boolean;
}

export interface OptionSlots {
  default: (props: {
    isActive: boolean;
    isDisabled: boolean;
  }) => Array<VNode>;
}

export interface OptionInstance {
  id: string;
  props: OptionProps;
}

export type SelectProps = {
  disabled?: boolean;
  multiple?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  loading?: boolean;
  placeholder?: string;
} & Partial<IThemeProp> & Partial<ISizeProp>;

export interface SelectEmits {
  change: [payload: SelectModelValue];
  opened: [payload: Element];
  closed: [payload: Element];
  open: [];
  close: [];
  clear: [];
}

export interface SelectContext {
  activeOption: ComputedRef<Maybe<OptionInstance>>;
  activeOptions: ComputedRef<Array<OptionInstance>>;
  isOpen: Ref<boolean>;
  hasValue: ComputedRef<boolean>;
  props: SelectProps;
  modelValue: ModelRef<SelectModelValue>;
  isDisabled: ComputedRef<boolean>;
  toggleOpen: () => void;
  handleChange: (value: OptionValue) => void;
  registerOption: (option: OptionInstance) => void;
  unregisterOption: (id: string) => void;
}
