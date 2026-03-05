import type { ValueOf } from '../value-of';
import { FlexAlign } from '../../constants';

export type _FlexAlign = ValueOf<typeof FlexAlign>;

export interface FlexAlignProp {
  align: _FlexAlign;
}
