import { CheckboxRootContext } from '../types';
import { MaybeNull } from '../../../types';
import { ComputedRef } from 'vue';
export interface UseCheckboxIndicatorOptions {
    checkboxRootContext: MaybeNull<CheckboxRootContext>;
}
export declare function useCheckboxIndicator(options: UseCheckboxIndicatorOptions): {
    isDisabled: ComputedRef<boolean>;
    isActive: ComputedRef<boolean>;
    isIndeterminate: ComputedRef<boolean>;
    isValid: ComputedRef<boolean>;
    isInvalid: ComputedRef<boolean>;
};
