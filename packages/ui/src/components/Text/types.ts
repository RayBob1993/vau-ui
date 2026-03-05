import type { SizeProp, ThemeProp } from '@vau/core';

/**
 * Интерфейс свойств компонента VText
 * @interface IVTextProps
 */
export type IVTextProps = {
  tag?: keyof HTMLElementTagNameMap;
  uppercase?: boolean;
  underline?: boolean;
  content?: string | number;
} & Partial<ThemeProp> & Partial<SizeProp>;
