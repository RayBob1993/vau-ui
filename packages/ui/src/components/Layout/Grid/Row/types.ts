import type { IFlexAlignProp, IFlexJustifyProp } from '../../../../types';

export type IVRowProps = {
  wrap?: boolean;
  guttersX?: boolean;
  guttersY?: boolean;
} & Partial<IFlexAlignProp> & Partial<IFlexJustifyProp>;
