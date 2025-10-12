import type { InjectionKey } from 'vue';
import type { IVTableContext } from '../types';

export const VTableContextKey: InjectionKey<IVTableContext> = Symbol('VTableContextKey');
