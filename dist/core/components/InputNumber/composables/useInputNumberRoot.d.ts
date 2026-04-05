import { InputNumberModelValue, InputNumberProps } from '../types';
import { FormRootContext, FormItemContext } from '../../Form';
import { MaybeNull } from '../../../types';
import { MaybeRefOrGetter, ComputedRef } from 'vue';
export interface UseInputNumberRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    props: MaybeRefOrGetter<InputNumberProps>;
    modelValue: MaybeRefOrGetter<InputNumberModelValue>;
    onDecrement?: (value: InputNumberModelValue) => void;
    onIncrement?: (value: InputNumberModelValue) => void;
    onUpdateModelValue?: (value: InputNumberModelValue) => void;
}
export declare function useInputNumberRoot(options: UseInputNumberRootOptions): {
    step: ComputedRef<number>;
    isDisabled: ComputedRef<boolean>;
    isDecrementDisabled: ComputedRef<boolean>;
    isIncrementDisabled: ComputedRef<boolean>;
    handleDecrement: () => void;
    handleIncrement: () => void;
    setModelValue: (value: InputNumberModelValue) => void;
};
