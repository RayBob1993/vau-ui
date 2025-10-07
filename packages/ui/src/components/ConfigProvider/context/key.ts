import type { InjectionKey } from 'vue';
import type { IVConfigProviderContext } from '../types';

export const VConfigProviderContextKey: InjectionKey<IVConfigProviderContext> = Symbol('VConfigProviderContextKey');
