import { ConfigProviderRootContextKey } from './key';
import { CONFIG_PROVIDER_TELEPORT_TARGET_DEFAULT } from '../constants';
import { inject } from 'vue';

export function useConfigProviderRootContext () {
  return inject(ConfigProviderRootContextKey, {
    props: () => ({
      teleportTarget: CONFIG_PROVIDER_TELEPORT_TARGET_DEFAULT
    }),
    t: () => ''
  });
}
