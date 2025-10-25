import type { ISizeProp, IThemeProp } from '../../types';

/**
 * Интерфейс свойств компонента VAvatar
 * @interface IVAvatarProps
 */
export type IVAvatarProps = {
  src?: string;
  fallback?: string;
  circle?: boolean;
  label?: string;
} & Partial<ISizeProp> & Partial<IThemeProp>;
