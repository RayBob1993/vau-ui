import type { IThemeProp, ISizeProp, IDirectionProp } from '../../types';

export type ButtonProps = {
  loading?: boolean;
  disabled?: boolean;
  plain?: boolean;
  wide?: boolean;
  type?: HTMLButtonElement['type'];
} & Partial<IThemeProp> & Partial<ISizeProp>;

export type ButtonGroupProps = Partial<IDirectionProp>;
