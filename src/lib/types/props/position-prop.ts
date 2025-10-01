import type { ValueOf } from '../utils';
import { Position } from '../../constants';

export type IPosition = ValueOf<typeof Position>;

export interface IPositionProp {
  position: IPosition;
}
