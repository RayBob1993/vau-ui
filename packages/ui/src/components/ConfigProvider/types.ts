import type { IVLocale } from '../../types';

/**
 * Интерфейс свойств компонента VConfigProvider
 * @interface IVConfigProviderProps
 */
export interface IVConfigProviderProps {
  locale?: IVLocale;
  teleportTarget?: string | HTMLElement;
  direction?: 'ltr' | 'rtl';
}

/**
 * Интерфейс контекста компонента VConfigProvider
 * @interface IVConfigProviderContext
 */
export type IVConfigProviderContext = IVConfigProviderProps;
