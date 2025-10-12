import type { ISizeProp } from '../../types';

/**
 * Интерфейс свойств компонента VAvatar
 * @interface IVAvatarProps
 */
export type IVAvatarProps = {
  src: string;
  fallback?: string;
} & Partial<ISizeProp>;
