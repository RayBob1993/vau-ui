import { ModalRootContextKey } from './key';
import { inject } from 'vue';

export const useModalRootContext = () => inject(ModalRootContextKey, null);
