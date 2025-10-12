/**
 * Интерфейс свойств компонента VConfigProvider
 * @interface IVConfigProviderProps
 */
export interface IVConfigProviderProps {
  locale?: unknown;
  teleportTarget?: string | HTMLElement;
  direction?: 'ltr' | 'rtl';
}

/**
 * Интерфейс контекста компонента VConfigProvider
 * @interface IVConfigProviderContext
 */
export interface IVConfigProviderContext extends IVConfigProviderProps {}
