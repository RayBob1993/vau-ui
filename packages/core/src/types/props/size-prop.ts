import type { ValueOf } from '../value-of';
import { Sizes } from '../../constants';

export type Size = ValueOf<typeof Sizes>;

export interface SizeProp {
  size: Size;
}
