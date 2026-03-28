import type { ConfigProviderProps } from '../types';
import type { LocaleTranslation, Maybe } from '../../../types';
import { isNull, isString, isUndefined } from '../../../utils';
import { computed, type MaybeRefOrGetter, toValue } from 'vue';

export interface UseConfigProviderRootOptions {
  props: MaybeRefOrGetter<ConfigProviderProps>;
}

export function useConfigProviderRoot (options: UseConfigProviderRootOptions) {
  const props = computed<ConfigProviderProps>(() => toValue(options.props));

  function t (path: string): string {
    if (!props.value?.locale) {
      return '';
    }

    const keys = path.split('.');
    let current: Maybe<string | LocaleTranslation> = props.value.locale;

    for (const key of keys) {
      if (isUndefined(current) || isNull(current)) {
        return path;
      }

      if (isString(current)) {
        return path;
      }

      current = current[key];
    }

    return isString(current) ? current : path;
  }

  return {
    t
  };
}
