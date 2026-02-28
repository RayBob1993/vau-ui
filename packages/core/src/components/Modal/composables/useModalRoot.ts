import type { ModalProps } from '../types';
import type { MaybeRefOrGetter } from 'vue';

export interface IUseModalRootOptions {
  props: MaybeRefOrGetter<ModalProps>;
  modelValue: MaybeRefOrGetter<boolean>;
  onClose?: VoidFunction;
}

export function useModalRoot (options: IUseModalRootOptions) {
  function close () {
    options.onClose?.();
  }

  return {
    close
  };
}
