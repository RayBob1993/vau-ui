import type { SizeProp, ThemeProp } from '../../types';
import type { PrimitiveProps } from '../Primitive';
import type { ConfigProviderProps } from '../ConfigProvider';

export type TextProps = {
  tag?: keyof HTMLElementTagNameMap;
  uppercase?: boolean;
  underline?: boolean;
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  fontFamily?: NonNullable<ConfigProviderProps['fontFamilies']>[number];
} & Partial<ThemeProp> & Partial<SizeProp> & Partial<PrimitiveProps>;
