import type { ThemeProp, SizeProp, DirectionProp } from '../../types';
import type { PrimitiveProps } from '../../components';
export type ButtonProps = {
    loading?: boolean;
    disabled?: boolean;
    plain?: boolean;
    wide?: boolean;
    rounded?: boolean;
    type?: HTMLButtonElement['type'];
} & Partial<ThemeProp> & Partial<SizeProp> & Partial<PrimitiveProps>;
export type ButtonGroupProps = Partial<DirectionProp>;
