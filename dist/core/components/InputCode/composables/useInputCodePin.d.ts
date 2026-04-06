import type { InputCodeRootContext } from '../types';
import type { MaybeNull } from '../../../types';
export interface UseInputCodePinOptions {
    inputCodeRootContext: MaybeNull<InputCodeRootContext>;
}
export declare function useInputCodePin(options: UseInputCodePinOptions): {
    isDisabled: import("vue").ComputedRef<boolean>;
};
