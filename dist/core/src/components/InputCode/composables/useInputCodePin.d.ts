import { InputCodeRootContext } from '../types';
import { MaybeNull } from '../../../types';
export interface UseInputCodePinOptions {
    inputCodeRootContext: MaybeNull<InputCodeRootContext>;
}
export declare function useInputCodePin(options: UseInputCodePinOptions): {
    isDisabled: import('vue').ComputedRef<boolean>;
};
