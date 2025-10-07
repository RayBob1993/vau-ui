import type { ValueOf } from '@vau/core';
import { FlexJustify } from '../../constants';

export type IFlexJustify = ValueOf<typeof FlexJustify>;

export interface IFlexJustifyProp {
  justify: IFlexJustify;
}
