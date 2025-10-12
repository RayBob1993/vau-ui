import type { IFlexAlignProp, IFlexJustifyProp, IDirectionProp } from '../../types';

/**
 * Интерфейс свойств компонента VFlex
 * @interface IVFlexProps
 */
export type IVFlexProps = {
  wrap?: boolean;
  gap?: number | [number, number];
} & Partial<IFlexAlignProp> & Partial<IFlexJustifyProp> & Partial<IDirectionProp>;
