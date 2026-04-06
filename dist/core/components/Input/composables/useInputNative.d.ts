import type { InputRootContext, InputNativeProps } from '../types';
import type { MaybeNull } from '../../../types';
export interface UseInputNativeOptions {
    inputRootContext: MaybeNull<InputRootContext>;
}
export declare function useInputNative(options: UseInputNativeOptions): {
    props: import("vue").ComputedRef<InputNativeProps>;
};
