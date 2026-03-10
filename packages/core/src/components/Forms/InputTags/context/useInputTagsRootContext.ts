import { InputTagsRootContextKey } from './key';
import { inject } from 'vue';

export function useInputTagsRootContext () {
  return inject(InputTagsRootContextKey, null);
}
