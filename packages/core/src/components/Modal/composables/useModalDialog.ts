import type { ModalRootContext, ModalProps } from '../types';
import type { Maybe, MaybeNull } from '../../../types';
import { computed, toValue } from 'vue';

export interface UseModalDialogOptions {
  modalRootContext?: MaybeNull<ModalRootContext>;
}

export function useModalDialog (options: UseModalDialogOptions) {
  const modalRootContextProps = computed<Maybe<ModalProps>>(() => toValue(options.modalRootContext?.props));

  const position = computed<Maybe<ModalProps['position']>>(() => modalRootContextProps.value?.position);

  return {
    position
  };
}
