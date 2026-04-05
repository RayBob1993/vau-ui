import { InputTagsProps, InputTagsModelValue } from '../types';
import { FormRootContext, FormItemContext } from '../../Form';
import { MaybeNull } from '../../../types';
import { MaybeRefOrGetter, ComputedRef } from 'vue';
export interface UseInputTagsRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    props: MaybeRefOrGetter<InputTagsProps>;
    modelValue: MaybeRefOrGetter<InputTagsModelValue>;
}
export declare function useInputTagsRoot(options: UseInputTagsRootOptions): {
    isDisabled: ComputedRef<boolean>;
};
