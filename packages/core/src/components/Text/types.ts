import type { SizeProp, ThemeProp } from '../../types';

export type TextProps = {
  tag?: keyof HTMLElementTagNameMap;
  uppercase?: boolean;
  underline?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;
