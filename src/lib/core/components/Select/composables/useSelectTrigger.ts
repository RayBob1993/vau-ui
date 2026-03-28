import type { SelectRootContext } from '../types';
import type { MaybeNull } from '../../../types';

export interface UseSelectTriggerOptions {
  selectRootContext: MaybeNull<SelectRootContext>;
}

export function useSelectTrigger (options: UseSelectTriggerOptions) {
  function open () {
    options.selectRootContext?.open();
  }

  function close () {
    options.selectRootContext?.close();
  }

  function toggle () {
    options.selectRootContext?.toggle();
  }

  return {
    open,
    close,
    toggle
  };
}
