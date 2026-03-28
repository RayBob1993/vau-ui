import { FormItemContextKey } from './key';
import { inject } from 'vue';

export function useFormItemContext () {
  return inject(FormItemContextKey, null);
}
