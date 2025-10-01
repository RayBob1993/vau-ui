import type { ValueOf } from '../utils';
import { Sizes } from '../../constants';

export type ISize = ValueOf<typeof Sizes>;

export interface ISizeProp {
  size: ISize;
}
