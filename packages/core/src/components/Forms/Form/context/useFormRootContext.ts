import { FormRootContextKey } from './key';
import { inject } from 'vue';

export function useFormRootContext () {
  return inject(FormRootContextKey, null);
}
