import { InputNumberRootContext, InputNumberBaseProps } from '../types';
import { MaybeNull } from '../../../../types';
export interface UseInputNumberInputOptions {
    inputNumberRootContext: MaybeNull<InputNumberRootContext>;
}
export declare function useInputNumberInput(options: UseInputNumberInputOptions): {
    props: import('vue').ComputedRef<InputNumberBaseProps>;
    modelValue: import('vue').WritableComputedRef<number, number>;
};
