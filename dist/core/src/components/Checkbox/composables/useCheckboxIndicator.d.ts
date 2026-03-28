import { CheckboxRootContext } from '../types';
import { MaybeNull } from '../../../types';
export interface UseCheckboxIndicatorOptions {
    checkboxRootContext: MaybeNull<CheckboxRootContext>;
}
export declare function useCheckboxIndicator(options: UseCheckboxIndicatorOptions): {
    isDisabled: import('vue').ComputedRef<boolean>;
    isActive: import('vue').ComputedRef<boolean>;
    isIndeterminate: import('vue').ComputedRef<boolean>;
    isValid: import('vue').ComputedRef<boolean>;
    isInvalid: import('vue').ComputedRef<boolean>;
};
