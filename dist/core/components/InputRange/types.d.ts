import type { InputBaseProps } from '../Input';
import type { MaybeRefOrGetter } from 'vue';
import type { SizeProp, ThemeProp } from '../../types';
export type InputRangeValue = number;
export type InputRangeModelValue = InputRangeValue | [InputRangeValue, InputRangeValue];
export type InputRangeProps = {
    min?: number;
    max?: number;
    step?: number;
} & InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>;
export interface InputRangeRootContext {
    props: MaybeRefOrGetter<InputRangeProps>;
    isDisabled: MaybeRefOrGetter<boolean>;
}
