import type { InjectionKey } from 'vue';
import type { SelectContext } from '../types';

export const SelectRootContextKey: InjectionKey<SelectContext> = Symbol('SelectRootContextKey');
