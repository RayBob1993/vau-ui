import type { DirectionProp, SizeProp, ThemeProp } from '../../types';
import type { PrimitiveProps } from '../Primitive';

export type MenuProps = Partial<DirectionProp> & Partial<ThemeProp> & Partial<SizeProp>;

export type MenuItemProps = {
  active?: boolean;
  disabled?: boolean;
} & Partial<PrimitiveProps>;
