import { InputCodeRootContextKey } from './key';
import { inject } from 'vue';

export function useInputCodeRootContext () {
  return inject(InputCodeRootContextKey, null);
}
