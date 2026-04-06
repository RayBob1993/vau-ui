import type { ValueOf } from '../value-of';
import { Position } from '../../constants';
export type _Position = ValueOf<typeof Position>;
export interface PositionProp {
    position: _Position;
}
