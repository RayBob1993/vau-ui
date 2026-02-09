import type { IVInputBaseProps } from '../Input/types';
import type { IDirectionProp } from "../../../types";

export type IVInputNumberModelValue = number;

export type IVInputNumberMousewheel = boolean | number;

/**
 * Интерфейс свойств компонента VInputNumber
 * @interface IVInputNumberProps
 */
export type IVInputNumberProps = {
  min?: number;
  max?: number;
  step?: number;
  mousewheel?: IVInputNumberMousewheel;
} & IVInputBaseProps & Partial<IDirectionProp>
