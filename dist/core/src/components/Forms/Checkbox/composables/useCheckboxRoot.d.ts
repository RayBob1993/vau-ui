import { CheckboxProps, CheckboxModelValue } from '../types';
import { FormRootContext, FormItemContext } from '../../Form';
import { MaybeNull, Maybe } from '../../../../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseCheckboxRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    props: MaybeRefOrGetter<CheckboxProps>;
    modelValue: MaybeRefOrGetter<Maybe<CheckboxModelValue>>;
}
export declare function useCheckboxRoot(options: UseCheckboxRootOptions): {
    isActive: import('vue').ComputedRef<boolean>;
    isDisabled: import('vue').ComputedRef<boolean>;
    isChecked: import('vue').ComputedRef<boolean>;
    isIndeterminate: import('vue').ComputedRef<boolean>;
};
