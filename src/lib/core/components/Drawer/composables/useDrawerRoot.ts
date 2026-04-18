import type { DrawerProps } from '../types';
import type { ConfigProviderRootContext, ConfigProviderProps } from '../../ConfigProvider';
import type { Maybe, MaybeNull } from '../../../types';
import { computed, type MaybeRefOrGetter, toValue, watch } from 'vue';

export interface UseModalRootOptions {
  configProviderRootContext: MaybeNull<ConfigProviderRootContext>;
  props: MaybeRefOrGetter<DrawerProps>;
  modelValue: MaybeRefOrGetter<boolean>;
  onClose?: VoidFunction;
  onOpen?: VoidFunction;
}

export function useDrawerRoot (options: UseModalRootOptions) {
  const configProviderRootContextProps = computed<Maybe<ConfigProviderProps>>(() => toValue(options.configProviderRootContext?.props));

  const modelValue = computed<boolean>(() => toValue(options.modelValue));

  const teleportTarget = computed<ConfigProviderProps['teleportTarget']>(() => configProviderRootContextProps.value?.teleportTarget);

  function close () {
    options.onClose?.();
  }

  watch(modelValue, value => {
    if (value) {
      options.onOpen?.();
    }
  });

  return {
    close,
    teleportTarget
  };
}
