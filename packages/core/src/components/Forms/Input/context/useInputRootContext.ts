import { InputRootContextKey } from './key';
import { inject } from 'vue';

export function useInputRootContext () {
  return inject(InputRootContextKey, null);
}
