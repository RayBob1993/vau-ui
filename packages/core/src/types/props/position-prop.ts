import type { ValueOf } from '../value-of';
import { Position } from '../../constants';

export type IPosition = ValueOf<typeof Position>;

export interface IPositionProp {
  position: IPosition;
}
