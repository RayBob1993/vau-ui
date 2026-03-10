import { InputNumberRootContextKey } from './key';
import { inject } from 'vue';

export function useInputNumberRootContext () {
  return inject(InputNumberRootContextKey, null);
}
