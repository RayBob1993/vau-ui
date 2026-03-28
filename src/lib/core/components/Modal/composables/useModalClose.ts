import type { ModalRootContext } from '../types';
import type { MaybeNull } from '../../../types';

export interface UseModalCloseOptions {
  modalRootContext?: MaybeNull<ModalRootContext>;
}

export function useModalClose (options: UseModalCloseOptions) {
  function close () {
    options.modalRootContext?.close();
  }

  return {
    close
  };
}
