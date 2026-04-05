import { CheckboxProps, CheckboxModelValue } from '../types';
import { FormRootContext, FormItemContext } from '../../Form';
import { MaybeNull, Maybe } from '../../../types';
import { MaybeRefOrGetter, ComputedRef } from 'vue';
export interface UseCheckboxRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    props: MaybeRefOrGetter<CheckboxProps>;
    modelValue: MaybeRefOrGetter<Maybe<CheckboxModelValue>>;
}
export declare function useCheckboxRoot(options: UseCheckboxRootOptions): {
    isActive: ComputedRef<boolean>;
    isDisabled: ComputedRef<boolean>;
    isChecked: ComputedRef<boolean>;
    isIndeterminate: ComputedRef<boolean>;
};
