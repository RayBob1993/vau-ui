import type { FlexAlignProp, FlexJustifyProp, DirectionProp } from '@vau/core';

/**
 * Интерфейс свойств компонента VFlex
 * @interface IVFlexProps
 */
export type IVFlexProps = {
  wrap?: boolean;
  gap?: number | [number, number];
} & Partial<FlexAlignProp> & Partial<FlexJustifyProp> & Partial<DirectionProp>;
