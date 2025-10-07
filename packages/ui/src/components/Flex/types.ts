import type { IFlexAlignProp, IFlexJustifyProp, IDirectionProp } from '../../types';

export type IVFlexProps = {
  wrap?: boolean;
  gap?: number | [number, number];
} & Partial<IFlexAlignProp> & Partial<IFlexJustifyProp> & Partial<IDirectionProp>;
