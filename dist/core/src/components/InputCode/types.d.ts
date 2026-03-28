import { MaybeRefOrGetter } from 'vue';
import { InputBaseProps } from '../Input';
import { SizeProp, ThemeProp } from '../../types';
export type InputCodeModelValue = string | number;
export type InputCodeProps = InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>;
export interface InputCodeRootContext {
    props: MaybeRefOrGetter<InputCodeProps>;
    isDisabled: MaybeRefOrGetter<boolean>;
}
