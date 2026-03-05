import type { FlexAlignProp, FlexJustifyProp } from '@vau/core';

/**
 * Интерфейс свойств компонента VRow
 * @interface IVRowProps
 */
export type IVRowProps = {
  wrap?: boolean;
  guttersX?: boolean;
  guttersY?: boolean;
} & Partial<FlexAlignProp> & Partial<FlexJustifyProp>;
