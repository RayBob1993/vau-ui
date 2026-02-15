import type { ModelRef, VNode } from 'vue';
import type { IVFormItemInstance } from '../FormItem';
import type { z } from 'zod';

export type IVFormModelValues = any;

export type IVFormModel = Record<string, IVFormModelValues>;

/**
 * Интерфейс правил валидации компонента VForm
 * @interface IVFormRules
 * @template T - Тип модели формы (по умолчанию IVFormModel)
 * @example
 * interface LoginForm {
 *   username: string;
 *   password: string;
 * }
 *
 * const loginRules: IVFormRules<LoginForm> = {
 *   username: z.string().min(3),
 *   password: z.string().min(6)
 * };
 */
export type IVFormRules <T extends IVFormModel = IVFormModel> = Record<keyof T, z.ZodTypeAny>;

/**
 * Интерфейс свойств компонента VForm
 * @interface IVFormProps
 */
export type IVFormProps = {
  rules?: IVFormRules;
  disabled?: boolean;
  scrollToError?: boolean | ScrollIntoViewOptions;
};

export interface IVFormSubmitEvent {
  isValid: boolean;
  reset: VoidFunction;
}

/**
 * Интерфейс событий компонента VForm
 * @interface IVFormEmits
 */
export type IVFormEmits = {
  submit: [payload: IVFormSubmitEvent];
};

/**
 * Интерфейс слотов компонента VForm
 * @interface IVFormSlots
 */
export interface IVFormSlots {
  default?: (props: {
    isValid: boolean;
  }) => Array<VNode>;
}

export type IVFormValidationResult = Promise<boolean>;

/**
 * Интерфейс контекста компонента VForm
 * @interface IVFormContext
 */
export interface IVFormContext {
  props: IVFormProps;
  modelValue: ModelRef<IVFormModel>;
  registerFormItem: (formItem: IVFormItemInstance) => void;
  unregisterFormItem: (id: string) => void;
}

export interface IVFormInstance {
  validate: (silent?: boolean) => IVFormValidationResult;
  clearValidate: VoidFunction;
  reset: VoidFunction;
}

export type IVFormExpose = IVFormInstance;
