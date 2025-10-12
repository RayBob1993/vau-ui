import type { ModelRef } from 'vue';
import type { IVFormItemInstance } from '../FormItem/types';
import type { ISizeProp, IThemeProp } from '../../../types';

export type IVFormModelValues = unknown;

export type IVFormModel = Record<string, IVFormModelValues>;

export type IVFormProps = {
  disabled?: boolean;
  scrollToError?: boolean;
  scrollIntoViewOptions?: ScrollIntoViewOptions;
} & Partial<IThemeProp> & Partial<ISizeProp>;

export interface IVFormSlots {
  default?: (props: {
    isValid: boolean;
  }) => void;
}

export type IVFormValidationResult = Promise<boolean>;

export interface IVFormContext {
  props: IVFormProps;
  modelValue: ModelRef<IVFormModel>;
  registerFormItem: (newFormItem: IVFormItemInstance) => void;
  unregisterFormItem: (oldFormItem: IVFormItemInstance) => void;
}

export interface IVFormInstance {
  validate: (silent?: boolean) => IVFormValidationResult;
  clearValidate: () => Promise<void>;
  reset: () => Promise<void>;
}

export type IVFormExpose = IVFormInstance;
