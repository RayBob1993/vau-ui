import { FlexAlignProp, FlexJustifyProp, SizeProp } from '../../../types';
export type ColSizeValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface ColProps {
    size?: ColSizeValue;
    sizeXs?: ColSizeValue;
    sizeSm?: ColSizeValue;
    sizeMd?: ColSizeValue;
    sizeLg?: ColSizeValue;
    sizeXl?: ColSizeValue;
    sizeXxl?: ColSizeValue;
    order?: number;
    orderXs?: number;
    orderSm?: number;
    orderMd?: number;
    orderLg?: number;
    orderXl?: number;
    orderXxl?: number;
    offset?: ColSizeValue;
    offsetXs?: ColSizeValue;
    offsetSm?: ColSizeValue;
    offsetMd?: ColSizeValue;
    offsetLg?: ColSizeValue;
    offsetXl?: ColSizeValue;
    offsetXxl?: ColSizeValue;
}
export type ContainerProps = SizeProp;
export type RowProps = {
    guttersX?: boolean;
    guttersY?: boolean;
} & Partial<FlexAlignProp> & Partial<FlexJustifyProp>;
