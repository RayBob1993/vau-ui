import type { ValueOf } from '../utils';
import { Direction } from '../../constants';

export type IDirection = ValueOf<typeof Direction>;

export interface IDirectionProp {
  direction: IDirection;
}
