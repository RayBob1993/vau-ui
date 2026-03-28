import type { InjectionKey } from 'vue';
import type { ConfigProviderRootContext } from '../types';

export const ConfigProviderRootContextKey: InjectionKey<ConfigProviderRootContext> = Symbol('ConfigProviderRootContextKey');
