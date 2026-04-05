import { MaybeNull } from '../../../types';
import { FormRootContext, FormItemContext } from '../../Form';
import { InputCodeModelValue, InputCodeProps } from '../types';
import { MaybeRefOrGetter, ComputedRef } from 'vue';
export interface UseInputCodeRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    modelValue: MaybeRefOrGetter<InputCodeModelValue>;
    props: MaybeRefOrGetter<InputCodeProps>;
}
export declare function useInputCodeRoot(options: UseInputCodeRootOptions): {
    isDisabled: ComputedRef<boolean>;
};
