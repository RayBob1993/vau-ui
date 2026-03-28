import { InputRangeRootContextKey } from './key';
import { inject } from 'vue';

export function useInputRangeRootContext () {
  return inject(InputRangeRootContextKey, null);
}
