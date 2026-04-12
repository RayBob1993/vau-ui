import type { ConfigProviderRootContext, IconRenderFn } from '../../ConfigProvider';
import type { Maybe, MaybeNull } from '../../../types';
import { computed, toValue } from 'vue';

export interface UseAlertCloseOptions {
  configProviderRootContext?: MaybeNull<ConfigProviderRootContext>;
}

export function useAlertClose (options: UseAlertCloseOptions) {
  const icon = computed<Maybe<IconRenderFn>>(() => {
    const ctx = options.configProviderRootContext;

    if (!ctx) {
      return undefined;
    }

    return toValue(ctx.props).icons?.alertClose;
  });

  return {
    icon
  };
}
