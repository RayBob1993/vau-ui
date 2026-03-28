import { InputNumberButtonProps, InputNumberRootContext } from '../types';
import { MaybeNull } from '../../../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseInputNumberButtonOptions {
    inputNumberRootContext: MaybeNull<InputNumberRootContext>;
    props: MaybeRefOrGetter<InputNumberButtonProps>;
}
export declare function useInputNumberButton(options: UseInputNumberButtonOptions): {
    handleAction: () => void;
    isDisabled: import('vue').ComputedRef<boolean>;
    isDecrement: import('vue').ComputedRef<boolean>;
    isIncrement: import('vue').ComputedRef<boolean>;
};
