import type { ConfigProviderRootContext, IconRenderFn } from '../../ConfigProvider';
import type { DrawerRootContext } from '../types';
import type { Maybe, MaybeNull } from '../../../types';
import { computed, toValue } from 'vue';

export interface UseDrawerCloseOptions {
  drawerRootContext?: MaybeNull<DrawerRootContext>;
  configProviderRootContext?: MaybeNull<ConfigProviderRootContext>;
}

export function useDrawerClose (options: UseDrawerCloseOptions) {
  function close () {
    options.drawerRootContext?.close();
  }

  const icon = computed<Maybe<IconRenderFn>>(() => {
    const ctx = options.configProviderRootContext;

    if (!ctx) {
      return undefined;
    }

    return toValue(ctx.props).icons?.drawerClose;
  });

  return {
    close,
    icon
  };
}
