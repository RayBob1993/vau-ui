import type { InjectionKey } from 'vue';
import type { FormContext, FormItemContext } from '../types';

export const FormRootContextKey: InjectionKey<FormContext> = Symbol('FormRootContextKey');
export const FormItemContextKey: InjectionKey<FormItemContext> = Symbol('FormItemContextKey');
