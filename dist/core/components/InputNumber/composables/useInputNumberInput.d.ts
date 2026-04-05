import { InputNumberRootContext, InputNumberBaseProps } from '../types';
import { MaybeNull } from '../../../types';
import { ComputedRef, WritableComputedRef } from 'vue';
export interface UseInputNumberInputOptions {
    inputNumberRootContext: MaybeNull<InputNumberRootContext>;
}
export declare function useInputNumberInput(options: UseInputNumberInputOptions): {
    props: ComputedRef<InputNumberBaseProps>;
    modelValue: WritableComputedRef<number, number>;
};
