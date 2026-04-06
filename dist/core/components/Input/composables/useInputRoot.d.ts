import type { MaybeNull } from '../../../types';
import type { FormRootContext, FormItemContext } from '../../Form';
import type { InputModelValue, InputProps } from '../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseInputRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    modelValue: MaybeRefOrGetter<InputModelValue>;
    props: MaybeRefOrGetter<InputProps>;
    onUpdateModelValue?: (value: InputModelValue) => void;
}
export declare function useInputRoot(options: UseInputRootOptions): {
    isFocus: import("vue").Ref<boolean, boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    isTextarea: import("vue").ComputedRef<boolean>;
    hasValue: import("vue").ComputedRef<boolean>;
    setFocus: (payload: boolean) => void;
    setModelValue: (value: InputModelValue) => void;
    reset: () => void;
};
