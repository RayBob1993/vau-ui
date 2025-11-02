import type { ComputedRef, Ref } from 'vue';
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

export interface IVFormItemSlots {
  default?: (props: {
    validationStatus: IVFormItemValidationStatus;
    isRequired: boolean;
  }) => never;
  label?: (props: {
    validationStatus: IVFormItemValidationStatus;
    isRequired: boolean;
  }) => never;
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
  unregisterField: () => void;
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
