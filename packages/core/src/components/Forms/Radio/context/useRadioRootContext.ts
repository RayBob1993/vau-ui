import { RadioRootContextKey } from './key';
import { inject } from 'vue';

export function useRadioRootContext () {
  return inject(RadioRootContextKey, null);
}
