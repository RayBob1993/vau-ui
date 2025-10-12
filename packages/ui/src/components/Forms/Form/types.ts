import type { ModelRef } from 'vue';
import type { IVFormItemInstance } from '../FormItem/types';
import type { ISizeProp, IThemeProp } from '../../../types';

export type IVFormModelValues = unknown;

export type IVFormModel = Record<string, IVFormModelValues>;

/**
 * Интерфейс свойств компонента VForm
 * @interface IVFormProps
 */
export type IVFormProps = {
  disabled?: boolean;
  scrollToError?: boolean;
  scrollIntoViewOptions?: ScrollIntoViewOptions;
} & Partial<IThemeProp> & Partial<ISizeProp>;

/**
 * Интерфейс слотов компонента VForm
 * @interface IVFormSlots
 */
export interface IVFormSlots {
  default?: (props: {
    isValid: boolean;
  }) => void;
}

export type IVFormValidationResult = Promise<boolean>;

/**
 * Интерфейс контекста компонента VForm
 * @interface IVFormContext
 */
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
