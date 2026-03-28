import { RadioProps, RadioModelValue } from '../types';
import { FormRootContext, FormItemContext } from '../../Form';
import { MaybeNull } from '../../../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseRadioRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    props: MaybeRefOrGetter<RadioProps>;
    modelValue: MaybeRefOrGetter<RadioModelValue>;
}
export declare function useRadioRoot(options: UseRadioRootOptions): {
    isActive: import('vue').ComputedRef<boolean>;
    isDisabled: import('vue').ComputedRef<boolean>;
};
