import { ThemeProp, SizeProp, DirectionProp } from '../../types';
import { PrimitiveProps } from '../../components';
export type ButtonProps = {
    loading?: boolean;
    disabled?: boolean;
    plain?: boolean;
    wide?: boolean;
    type?: HTMLButtonElement['type'];
} & Partial<ThemeProp> & Partial<SizeProp> & Partial<PrimitiveProps>;
export type ButtonGroupProps = Partial<DirectionProp>;
