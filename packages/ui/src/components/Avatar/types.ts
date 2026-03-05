import type { SizeProp, ThemeProp } from '@vau/core';

/**
 * Интерфейс свойств компонента VAvatar
 * @interface IVAvatarProps
 */
export type IVAvatarProps = {
  src?: string;
  fallback?: string;
  circle?: boolean;
  label?: string;
} & Partial<SizeProp> & Partial<ThemeProp>;
