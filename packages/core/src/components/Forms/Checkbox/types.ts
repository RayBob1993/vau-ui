import type { MaybeRefOrGetter, VNode } from 'vue';
import type { DirectionProp, SizeProp, ThemeProp } from '../../../types';

export type CheckboxValue = number | string;
export type CheckboxModelValue = boolean | Array<CheckboxValue>;

export type CheckboxProps = {
  disabled?: boolean;
  indeterminate?: boolean;
  value?: CheckboxValue;
} & Partial<ThemeProp> & Partial<SizeProp>;

export interface CheckboxEmits {
  change: [payload: CheckboxValue];
}

export interface CheckboxRootContext {
  props: MaybeRefOrGetter<CheckboxProps>;
  modelValue: MaybeRefOrGetter<CheckboxModelValue>;
  isActive: MaybeRefOrGetter<boolean>;
  isDisabled: MaybeRefOrGetter<boolean>;
  isIndeterminate: MaybeRefOrGetter<boolean>;
  isValid: MaybeRefOrGetter<boolean>;
  isInvalid: MaybeRefOrGetter<boolean>;
}

export interface CheckboxIndicatorScopedSlots {
  isDisabled: boolean;
  isActive: boolean;
  isIndeterminate: boolean;
  isValid: boolean;
  isInvalid: boolean;
}

export interface CheckboxIndicatorSlots {
  default?: (props: CheckboxIndicatorScopedSlots) => Array<VNode>;
}

export type CheckboxGroupProps = Partial<DirectionProp>;
