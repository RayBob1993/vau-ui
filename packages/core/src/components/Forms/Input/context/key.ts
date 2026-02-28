import type { InjectionKey } from 'vue';
import type { InputContext } from '../types';

export const InputRootContextKey: InjectionKey<InputContext> = Symbol('InputRootContextKey');
