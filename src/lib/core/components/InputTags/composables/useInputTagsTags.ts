import type { InputTagsRootContext } from '../types';
import type { MaybeNull } from '../../../types';

export interface UseInputTagsTagsOptions {
  inputTagsRootContext: MaybeNull<InputTagsRootContext>;
}

export function useInputTagsTags (options: UseInputTagsTagsOptions) {
  console.log(options);

  return {

  };
}
