import { ConfigProviderRootContextKey } from './key';
import { inject } from 'vue';

export function useConfigProviderRootContext () {
  return inject(ConfigProviderRootContextKey, {
    props: () => ({}),
    t: () => ''
  });
}
