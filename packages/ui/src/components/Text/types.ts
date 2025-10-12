import type { ISizeProp, IThemeProp } from '../../types';

export type IVTextProps = {
  uppercase?: boolean;
  underline?: boolean;
  content?: string | number;
} & Partial<IThemeProp> & Partial<ISizeProp>;
