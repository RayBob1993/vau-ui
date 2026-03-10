import { SelectRootContextKey } from './key';
import { inject } from 'vue';

export function useSelectRootContext () {
  return inject(SelectRootContextKey, null);
}
