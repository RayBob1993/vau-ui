import { InputCodeRootContext } from '../types';
import { MaybeNull } from '../../../types';
import { ComputedRef } from 'vue';
export interface UseInputCodePinOptions {
    inputCodeRootContext: MaybeNull<InputCodeRootContext>;
}
export declare function useInputCodePin(options: UseInputCodePinOptions): {
    isDisabled: ComputedRef<boolean>;
};
