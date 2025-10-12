import type { ISizeProp } from '../../types';

export type IVAvatarProps = {
  src: string;
  fallback?: string;
} & Partial<ISizeProp>;
