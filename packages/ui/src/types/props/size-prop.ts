import type { ValueOf } from '@vau/core';
import { Sizes } from '../../constants';

export type ISize = ValueOf<typeof Sizes>;

export interface ISizeProp {
  size: ISize;
}
