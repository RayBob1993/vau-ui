import { MaybeNull } from '../../../types';
import { FormRootContext, FormItemContext } from '../../Form';
import { InputModelValue, InputProps } from '../types';
import { MaybeRefOrGetter, Ref, ComputedRef } from 'vue';
export interface UseInputRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    modelValue: MaybeRefOrGetter<InputModelValue>;
    props: MaybeRefOrGetter<InputProps>;
    onUpdateModelValue?: (value: InputModelValue) => void;
}
export declare function useInputRoot(options: UseInputRootOptions): {
    isFocus: Ref<boolean, boolean>;
    isDisabled: ComputedRef<boolean>;
    isTextarea: ComputedRef<boolean>;
    hasValue: ComputedRef<boolean>;
    setFocus: (payload: boolean) => void;
    setModelValue: (value: InputModelValue) => void;
    reset: () => void;
};
