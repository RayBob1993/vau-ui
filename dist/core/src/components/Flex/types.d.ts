import { FlexAlignProp, FlexJustifyProp, DirectionProp } from '../../types';
export type FlexProps = {
    wrap?: boolean;
} & Partial<FlexAlignProp> & Partial<FlexJustifyProp> & Partial<DirectionProp>;
