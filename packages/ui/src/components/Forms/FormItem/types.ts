import type { ComputedRef, Ref, TemplateRef } from 'vue';

export interface IVFormItemProps {
  disabled?: boolean;
  prop?: string;
  title?: string;
}

export interface IVFormItemSlots {
  default?: (props: {
    validationStatus: string;
  }) => never;
}

export interface IVFormItemField {
  reset: VoidFunction;
}

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
  el: TemplateRef<HTMLDivElement>;
  isValidatable: ComputedRef<boolean>;
  isRequired: ComputedRef<boolean>;
  props: IVFormItemProps;
  validate: (silent?: boolean) => Promise<boolean>;
  validationStatus: Ref<IVFormItemValidationStatus>;
  clearValidate: VoidFunction;
  reset: VoidFunction;
}

export interface IVFormItemErrorsProps {
  errors: Array<unknown>;
}

export type IVFormItemExpose = Pick<IVFormItemInstance, 'validate' | 'clearValidate' | 'reset'>;
