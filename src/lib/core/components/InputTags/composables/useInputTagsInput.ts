import type { InputTagsRootContext } from '../types';
import type { MaybeNull } from '../../../types';

export interface UseInputTagsInputOptions {
  inputTagsRootContext: MaybeNull<InputTagsRootContext>;
}

export function useInputTagsInput (options: UseInputTagsInputOptions) {
  function handleEnter (event: Event) {

  }

  function handleTab (event: Event) {

  }

  return {
    handleEnter,
    handleTab
  };
}
