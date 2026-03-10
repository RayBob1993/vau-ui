import type { MaybeRefOrGetter } from 'vue';

export interface LocaleTranslation {

}

export type ConfigProviderProps = {
  locale?: LocaleTranslation;
  teleportTarget?: string | HTMLElement;
  direction?: 'ltr' | 'rtl';
};

export interface ConfigProviderRootContext {
  props: MaybeRefOrGetter<ConfigProviderProps>;
}
