import type { MaybeRefOrGetter } from 'vue';
import type { LocaleTranslation } from '../../types';

export type ConfigProviderProps = {
  locale?: LocaleTranslation;
  teleportTarget?: string | HTMLElement;
  direction?: 'ltr' | 'rtl';
};

export interface ConfigProviderRootContext {
  props: MaybeRefOrGetter<ConfigProviderProps>;
  t: (path: string) => string;
}
