import type { ThemeProp, SizeProp, DirectionProp, Maybe } from '../../types';

export type TagValue = string | number;

export type TagProps = {
  value?: TagValue;
  canDelete?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;

export interface TagEmits {
  delete: [payload: Maybe<TagValue>];
}

export type TagGroupProps = Partial<DirectionProp>;
