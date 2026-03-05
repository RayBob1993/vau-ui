import type { ThemeProp, SizeProp, DirectionProp } from '../../types';

export type ButtonProps = {
  loading?: boolean;
  disabled?: boolean;
  plain?: boolean;
  wide?: boolean;
  type?: HTMLButtonElement['type'];
} & Partial<ThemeProp> & Partial<SizeProp>;

export type ButtonGroupProps = Partial<DirectionProp>;
