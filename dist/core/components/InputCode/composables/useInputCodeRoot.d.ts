import type { MaybeNull } from '../../../types';
import type { FormRootContext, FormItemContext } from '../../Form';
import type { InputCodeModelValue, InputCodeProps } from '../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseInputCodeRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    modelValue: MaybeRefOrGetter<InputCodeModelValue>;
    props: MaybeRefOrGetter<InputCodeProps>;
}
export declare function useInputCodeRoot(options: UseInputCodeRootOptions): {
    isDisabled: import("vue").ComputedRef<boolean>;
};
