import type { ISizeProp, IThemeProp } from '../../../types';

export type IVSwitchProps = {
  disabled?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;
