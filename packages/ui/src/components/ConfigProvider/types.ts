export interface IVConfigProviderProps {
  locale?: unknown;
  teleportTarget?: string | HTMLElement;
  direction?: 'ltr' | 'rtl';
}

export interface IVConfigProviderContext extends IVConfigProviderProps {}
