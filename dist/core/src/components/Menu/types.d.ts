import { DirectionProp, SizeProp, ThemeProp } from '../../types';
import { PrimitiveProps } from '../Primitive';
export type MenuProps = Partial<DirectionProp> & Partial<ThemeProp> & Partial<SizeProp>;
export type MenuLinkProps = Partial<PrimitiveProps>;
