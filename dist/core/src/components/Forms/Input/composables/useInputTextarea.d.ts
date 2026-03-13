import { InputRootContext, InputTextareaProps } from '../types';
import { MaybeNull } from '../../../../types';
export interface UseInputTextareaOptions {
    inputRootContext: MaybeNull<InputRootContext>;
}
export declare function useInputTextarea(options: UseInputTextareaOptions): {
    props: import('vue').ComputedRef<InputTextareaProps>;
};
