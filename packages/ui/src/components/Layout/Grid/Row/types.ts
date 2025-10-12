import type { IFlexAlignProp, IFlexJustifyProp } from '../../../../types';

/**
 * Интерфейс свойств компонента VRow
 * @interface IVRowProps
 */
export type IVRowProps = {
  wrap?: boolean;
  guttersX?: boolean;
  guttersY?: boolean;
} & Partial<IFlexAlignProp> & Partial<IFlexJustifyProp>;
