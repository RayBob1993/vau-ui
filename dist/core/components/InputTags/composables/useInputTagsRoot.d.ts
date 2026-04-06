import type { InputTagsProps, InputTagsModelValue } from '../types';
import type { FormRootContext, FormItemContext } from '../../Form';
import type { MaybeNull } from '../../../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseInputTagsRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    props: MaybeRefOrGetter<InputTagsProps>;
    modelValue: MaybeRefOrGetter<InputTagsModelValue>;
}
export declare function useInputTagsRoot(options: UseInputTagsRootOptions): {
    isDisabled: import("vue").ComputedRef<boolean>;
};
