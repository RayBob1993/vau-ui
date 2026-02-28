import type { ValueOf } from '../value-of';
import { FlexJustify } from '../../constants';

export type IFlexJustify = ValueOf<typeof FlexJustify>;

export interface IFlexJustifyProp {
  justify: IFlexJustify;
}
