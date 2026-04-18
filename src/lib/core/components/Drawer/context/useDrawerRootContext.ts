import { DrawerRootContextKey } from './key';
import { inject } from 'vue';

export function useDrawerRootContext () {
  return inject(DrawerRootContextKey, null);
}
