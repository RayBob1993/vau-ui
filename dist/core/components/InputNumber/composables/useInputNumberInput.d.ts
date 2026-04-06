import type { InputNumberRootContext, InputNumberBaseProps } from '../types';
import type { MaybeNull } from '../../../types';
export interface UseInputNumberInputOptions {
    inputNumberRootContext: MaybeNull<InputNumberRootContext>;
}
export declare function useInputNumberInput(options: UseInputNumberInputOptions): {
    props: import("vue").ComputedRef<InputNumberBaseProps>;
    modelValue: import("vue").WritableComputedRef<number, number>;
};
