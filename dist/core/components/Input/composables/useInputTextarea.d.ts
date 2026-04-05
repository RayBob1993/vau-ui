import { InputRootContext, InputTextareaProps } from '../types';
import { MaybeNull } from '../../../types';
import { ComputedRef } from 'vue';
export interface UseInputTextareaOptions {
    inputRootContext: MaybeNull<InputRootContext>;
}
export declare function useInputTextarea(options: UseInputTextareaOptions): {
    props: ComputedRef<InputTextareaProps>;
};
