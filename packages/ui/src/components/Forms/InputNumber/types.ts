import type { IVInputBaseProps } from '../Input/types';

export type IVInputNumberModelValue = number;

/**
 * Интерфейс свойств компонента VInputNumber
 * @interface IVInputNumberProps
 */
export interface IVInputNumberProps extends IVInputBaseProps {
  min?: number;
  max?: number;
  step?: number;
}
