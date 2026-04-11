import type { ConfigProviderRootContext, IconRenderFn } from '../../ConfigProvider';
import type { ModalRootContext } from '../types';
import type { Maybe, MaybeNull } from '../../../types';
import { computed, toValue } from 'vue';

export interface UseModalCloseOptions {
  modalRootContext?: MaybeNull<ModalRootContext>;
  configProviderRootContext?: MaybeNull<ConfigProviderRootContext>;
}

export function useModalClose (options: UseModalCloseOptions) {
  function close () {
    options.modalRootContext?.close();
  }

  const icon = computed<Maybe<IconRenderFn>>(() => {
    const ctx = options.configProviderRootContext;

    if (!ctx) {
      return undefined;
    }

    return toValue(ctx.props).icons?.modalClose;
  });

  return {
    close,
    icon
  };
}
