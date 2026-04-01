import type { TextProps } from '../types';
import type { Maybe, MaybeNull } from '../../../types';
import type { ConfigProviderRootContext, ConfigProviderProps } from '../../ConfigProvider';
import { computed, type MaybeRefOrGetter, toValue } from 'vue';

export interface UseTextRootOptions {
  configProviderRootContext: MaybeNull<ConfigProviderRootContext>;
  props: MaybeRefOrGetter<TextProps>;
}

export function useTextRoot (options: UseTextRootOptions) {
  const props = computed<TextProps>(() => toValue(options.props));
  const configProviderRootContextProps = computed<Maybe<ConfigProviderProps>>(() => toValue(options.configProviderRootContext?.props));

  const fontFamilies = computed<ConfigProviderProps['fontFamilies']>(() => configProviderRootContextProps.value?.fontFamilies);

  const fontFamily = computed<Maybe<TextProps['fontFamily']>>(() => {
    if (!fontFamilies.value?.length) {
      return;
    }

    if (!props.value?.fontFamily) {
      return;
    }

    return fontFamilies.value?.includes(props.value.fontFamily)
      ? props.value.fontFamily.toLowerCase()
      : undefined;
  });

  return {
    fontFamily
  };
}
