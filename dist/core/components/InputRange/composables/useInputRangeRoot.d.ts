import type { MaybeNull } from '../../../types';
import type { FormRootContext, FormItemContext } from '../../Form';
import type { InputRangeModelValue, InputRangeProps } from '../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseInputRangeRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    modelValue: MaybeRefOrGetter<InputRangeModelValue>;
    props: MaybeRefOrGetter<InputRangeProps>;
}
export declare function useInputRangeRoot(options: UseInputRangeRootOptions): {
    isDisabled: import("vue").ComputedRef<boolean>;
};
