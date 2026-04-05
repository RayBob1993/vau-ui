import type { InputTagsRootContext } from '../types';
import type { MaybeNull } from '../../../types';

export interface UseInputTagsInputOptions {
  inputTagsRootContext: MaybeNull<InputTagsRootContext>;
}

export function useInputTagsInput (options: UseInputTagsInputOptions) {
  console.log(options);

  function handleEnter (event: Event) {
    console.log(event);
  }

  function handleTab (event: Event) {
    console.log(event);
  }

  return {
    handleEnter,
    handleTab
  };
}
