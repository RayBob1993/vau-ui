import type { MaybeRefOrGetter, VNodeChild } from 'vue';
import type { LocaleTranslation } from '../../types';

export type IconRenderFn = () => VNodeChild;

/**
 * Реестр иконок приложения: ключи — семантика (modalClose и т.д.), значения — render-функции.
 */
export type VauIconRegistry = {
  modalClose?: IconRenderFn;
};

export type ConfigProviderProps = {
  locale?: LocaleTranslation;
  teleportTarget?: string | HTMLElement;
  direction?: 'ltr' | 'rtl';
  icons?: VauIconRegistry;
};

export interface ConfigProviderRootContext {
  props: MaybeRefOrGetter<ConfigProviderProps>;
  t: (path: string) => string;
}
