import type { ISizeProp, IThemeProp, Maybe, MaybeArray, MaybeNull } from '../../../types';
import type { VNode, MaybeRefOrGetter } from 'vue';

export type OptionValue = string | number;
export type SelectModelValue = Maybe<MaybeNull<MaybeArray<OptionValue>>>;

export interface OptionProps {
  value: OptionValue;
  disabled?: boolean;
}

export interface OptionScopedSlots {
  isActive: boolean;
  isDisabled: boolean;
}

export interface OptionSlots {
  default?: (props: OptionScopedSlots) => Array<VNode>;
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

export interface SelectRootContext {
  activeOption: MaybeRefOrGetter<Maybe<OptionInstance>>;
  activeOptions: MaybeRefOrGetter<Array<OptionInstance>>;
  isOpen: MaybeRefOrGetter<boolean>;
  hasValue: MaybeRefOrGetter<boolean>;
  props: MaybeRefOrGetter<SelectProps>;
  modelValue: MaybeRefOrGetter<SelectModelValue>;
  isDisabled: MaybeRefOrGetter<boolean>;
  toggle: () => void;
  handleChange: (value: OptionValue) => void;
  registerOption: (option: OptionInstance) => void;
  unregisterOption: (id: string) => void;
}
