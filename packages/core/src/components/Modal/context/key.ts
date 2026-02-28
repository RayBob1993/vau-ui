import type { InjectionKey } from 'vue';
import type { ModalContext } from '../types';

export const ModalRootContextKey: InjectionKey<ModalContext> = Symbol('ModalRootContextKey');
