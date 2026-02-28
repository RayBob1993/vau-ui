import type { ValueOf } from '../value-of';
import { Direction } from '../../constants';

export type IDirection = ValueOf<typeof Direction>;

export interface IDirectionProp {
  direction: IDirection;
}
