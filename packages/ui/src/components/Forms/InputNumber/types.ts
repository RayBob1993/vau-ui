import type { IVInputBaseProps } from '../Input/types';

export type IVInputNumberModelValue = number;

export interface IVInputNumberProps extends IVInputBaseProps {
  min?: number;
  max?: number;
  step?: number;
}
