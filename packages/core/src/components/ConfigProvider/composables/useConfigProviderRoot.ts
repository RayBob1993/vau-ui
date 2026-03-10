import type { ConfigProviderProps } from '../types';
import type { MaybeRefOrGetter } from 'vue';
import { computed, toValue } from 'vue';

export interface UseConfigProviderRootOptions {
  props: MaybeRefOrGetter<ConfigProviderProps>;
}

export function useConfigProviderRoot (options: UseConfigProviderRootOptions) {
  const props = computed<ConfigProviderProps>(() => toValue(options.props));

  return {};
}
