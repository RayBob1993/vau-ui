import { ModalRootContextKey } from './key';
import { inject } from 'vue';

export function useModalRootContext () {
  return inject(ModalRootContextKey, null);
}
