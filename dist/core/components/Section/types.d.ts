import type { SizeProp, ThemeProp } from '../../types';
export type SectionProps = Partial<SizeProp> & Partial<ThemeProp>;
export interface SectionTitleProps {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
