import { InputRootContext, InputNativeProps } from '../types';
import { MaybeNull } from '../../../types';
import { ComputedRef } from 'vue';
export interface UseInputNativeOptions {
    inputRootContext: MaybeNull<InputRootContext>;
}
export declare function useInputNative(options: UseInputNativeOptions): {
    props: ComputedRef<InputNativeProps>;
};
