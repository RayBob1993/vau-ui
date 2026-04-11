import type { MaybeRefOrGetter, VNodeChild } from 'vue';
import type { LocaleTranslation } from '../../types';

export type IconRenderFn = () => VNodeChild;

export type Icons = 'modalClose'
  | 'accordionActive'
  | 'accordionInactive';

export type IconRegistry = Record<Icons, IconRenderFn>;

export interface ConfigProviderProps {
  locale?: LocaleTranslation;
  teleportTarget?: string | HTMLElement;
  direction?: 'ltr' | 'rtl';
  icons?: Partial<IconRegistry>;
}

export interface ConfigProviderRootContext {
  props: MaybeRefOrGetter<ConfigProviderProps>;
  t: (path: string) => string;
}
