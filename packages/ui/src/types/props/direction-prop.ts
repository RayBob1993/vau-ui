import type { ValueOf } from '@vau/core';
import { Direction } from '../../constants';

export type IDirection = ValueOf<typeof Direction>;

export interface IDirectionProp {
  direction: IDirection;
}
