import { InputNumberButtonProps, InputNumberRootContext } from '../types';
import { MaybeNull } from '../../../types';
import { MaybeRefOrGetter, ComputedRef } from 'vue';
export interface UseInputNumberButtonOptions {
    inputNumberRootContext: MaybeNull<InputNumberRootContext>;
    props: MaybeRefOrGetter<InputNumberButtonProps>;
}
export declare function useInputNumberButton(options: UseInputNumberButtonOptions): {
    handleAction: () => void;
    isDisabled: ComputedRef<boolean>;
    isDecrement: ComputedRef<boolean>;
    isIncrement: ComputedRef<boolean>;
};
