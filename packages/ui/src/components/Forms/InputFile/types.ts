import type { ISizeProp, IThemeProp } from '../../../types';

export type IVInputFileProps = {
  disabled?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;
