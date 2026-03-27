import type { SizeProp, ThemeProp } from '../../types';
import type { PrimitiveProps } from '../Primitive';

export type TextProps = {
  tag?: keyof HTMLElementTagNameMap;
  uppercase?: boolean;
  underline?: boolean;
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
} & Partial<ThemeProp> & Partial<SizeProp> & Partial<PrimitiveProps>;
