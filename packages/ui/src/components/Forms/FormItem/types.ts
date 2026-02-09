import type { ComputedRef, Ref, VNode } from 'vue';
import type { $ZodIssue } from 'zod/v4/core';

/**
 * Интерфейс свойств компонента VFormItem
 * @interface IVFormItemProps
 */
export interface IVFormItemProps {
  disabled?: boolean;
  prop?: string;
  title?: string;
}

export interface IVFormItemScopedSlot {
  validationStatus: IVFormItemValidationStatus;
  isRequired: boolean;
}

export interface IVFormItemSlots {
  default?: (props: IVFormItemScopedSlot) => Array<VNode>;
  label?: (props: IVFormItemScopedSlot) => Array<VNode>;
}

export interface IVFormItemField {
  reset: VoidFunction;
}

/**
 * Интерфейс контекста компонента VFormItem
 * @interface IVFormItemContext
 */
export interface IVFormItemContext {
  props: IVFormItemProps;
  validationStatus: Ref<IVFormItemValidationStatus>;
  registerField: (field: IVFormItemField) => void;
  unregisterField: VoidFunction;
  isRequired: ComputedRef<boolean>;
  validate: (silent?: boolean) => Promise<boolean>;
  clearValidate: VoidFunction;
  reset: VoidFunction;
}

export interface IVFormItemValidationStatus {
  isError: boolean;
  isValidating: boolean;
  isSuccess: boolean;
}

export interface IVFormItemInstance {
  id: string;
  el: HTMLDivElement | null;
  isValidatable: boolean;
  isRequired: boolean;
  props: IVFormItemProps;
  validate: (silent?: boolean) => Promise<boolean>;
  validationStatus: IVFormItemValidationStatus;
  clearValidate: VoidFunction;
  reset: VoidFunction;
}

export interface IVFormItemErrorsProps {
  errors: Array<$ZodIssue>;
}

export type IVFormItemExpose = Pick<IVFormItemInstance, 'validate' | 'clearValidate' | 'reset'>;
