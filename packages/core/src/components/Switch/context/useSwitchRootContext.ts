import { SwitchRootContextKey } from './key';
import { inject } from 'vue';

export function useSwitchRootContext () {
  return inject(SwitchRootContextKey, null);
}
