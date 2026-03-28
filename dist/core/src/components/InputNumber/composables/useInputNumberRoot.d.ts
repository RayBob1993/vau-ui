import { InputNumberModelValue, InputNumberProps } from '../types';
import { FormRootContext, FormItemContext } from '../../Form';
import { MaybeNull } from '../../../types';
import { MaybeRefOrGetter } from 'vue';
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
    step: import('vue').ComputedRef<number>;
    isDisabled: import('vue').ComputedRef<boolean>;
    isDecrementDisabled: import('vue').ComputedRef<boolean>;
    isIncrementDisabled: import('vue').ComputedRef<boolean>;
    handleDecrement: () => void;
    handleIncrement: () => void;
    setModelValue: (value: InputNumberModelValue) => void;
};
