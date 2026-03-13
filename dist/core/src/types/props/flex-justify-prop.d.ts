import { ValueOf } from '../value-of';
import { FlexJustify } from '../../constants';
export type _FlexJustify = ValueOf<typeof FlexJustify>;
export interface FlexJustifyProp {
    justify: _FlexJustify;
}
