import type { InputNumberButtonProps, InputNumberRootContext } from '../types';
import type { MaybeNull } from '../../../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseInputNumberButtonOptions {
    inputNumberRootContext: MaybeNull<InputNumberRootContext>;
    props: MaybeRefOrGetter<InputNumberButtonProps>;
}
export declare function useInputNumberButton(options: UseInputNumberButtonOptions): {
    handleAction: () => void;
    isDisabled: import("vue").ComputedRef<boolean>;
    isDecrement: import("vue").ComputedRef<boolean>;
    isIncrement: import("vue").ComputedRef<boolean>;
};
