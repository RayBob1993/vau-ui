import type { ValueOf } from '../value-of';
import { FlexAlign } from '../../constants';

export type IFlexAlign = ValueOf<typeof FlexAlign>;

export interface IFlexAlignProp {
  align: IFlexAlign;
}
