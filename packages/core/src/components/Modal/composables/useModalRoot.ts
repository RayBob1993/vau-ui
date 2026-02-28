import type { ModalProps } from '../types';
import type { MaybeRefOrGetter } from 'vue';

export interface UseModalRootOptions {
  props: MaybeRefOrGetter<ModalProps>;
  modelValue: MaybeRefOrGetter<boolean>;
  onClose?: VoidFunction;
}

export function useModalRoot (options: UseModalRootOptions) {
  function close () {
    options.onClose?.();
  }

  return {
    close
  };
}
