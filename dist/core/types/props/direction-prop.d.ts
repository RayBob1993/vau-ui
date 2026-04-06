import type { ValueOf } from '../value-of';
import { Direction } from '../../constants';
export type _Direction = ValueOf<typeof Direction>;
export interface DirectionProp {
    direction: _Direction;
}
