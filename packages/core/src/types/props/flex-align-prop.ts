import type { ValueOf } from '@vau/core';
import { FlexAlign } from '../../constants';

export type IFlexAlign = ValueOf<typeof FlexAlign>;

export interface IFlexAlignProp {
  align: IFlexAlign;
}
