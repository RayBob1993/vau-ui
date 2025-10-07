import type { ValueOf } from '@vau/core';
import { Position } from '../../constants';

export type IPosition = ValueOf<typeof Position>;

export interface IPositionProp {
  position: IPosition;
}
