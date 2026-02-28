import type { InjectionKey } from 'vue';
import type { FormRootContext, FormItemContext } from '../types';

export const FormRootContextKey: InjectionKey<FormRootContext> = Symbol('FormRootContextKey');
export const FormItemContextKey: InjectionKey<FormItemContext> = Symbol('FormItemContextKey');
