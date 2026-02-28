import type { ValueOf } from '../value-of';
import { Sizes } from '../../constants';

export type ISize = ValueOf<typeof Sizes>;

export interface ISizeProp {
  size: ISize;
}
