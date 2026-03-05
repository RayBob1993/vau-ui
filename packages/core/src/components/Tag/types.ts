import type { ThemeProp, SizeProp, DirectionProp } from '../../types';

export type TagProps = {
  canDelete?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;

export interface TagEmits {
  delete: [];
}

export type TagGroupProps = Partial<DirectionProp>;
