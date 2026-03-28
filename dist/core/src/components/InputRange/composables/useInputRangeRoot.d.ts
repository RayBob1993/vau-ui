import { MaybeNull } from '../../../types';
import { FormRootContext, FormItemContext } from '../../Form';
import { InputRangeModelValue, InputRangeProps } from '../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseInputRangeRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    modelValue: MaybeRefOrGetter<InputRangeModelValue>;
    props: MaybeRefOrGetter<InputRangeProps>;
}
export declare function useInputRangeRoot(options: UseInputRangeRootOptions): {
    isDisabled: import('vue').ComputedRef<boolean>;
};
