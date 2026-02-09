import type { IVInputBaseProps } from '../Input/types';

export type IVInputNumberModelValue = number;

export type IVInputNumberMousewheel = boolean | number;

/**
 * Интерфейс свойств компонента VInputNumber
 * @interface IVInputNumberProps
 */
export interface IVInputNumberProps extends IVInputBaseProps {
  min?: number;
  max?: number;
  step?: number;
  mousewheel?: IVInputNumberMousewheel;
}
