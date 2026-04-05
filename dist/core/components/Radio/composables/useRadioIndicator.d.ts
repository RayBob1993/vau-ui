import { RadioRootContext } from '../types';
import { MaybeNull } from '../../../types';
import { ComputedRef } from 'vue';
export interface UseRadioIndicatorOptions {
    radioRootContext: MaybeNull<RadioRootContext>;
}
export declare function useRadioIndicator(options: UseRadioIndicatorOptions): {
    isDisabled: ComputedRef<boolean>;
    isActive: ComputedRef<boolean>;
    isValid: ComputedRef<boolean>;
    isInvalid: ComputedRef<boolean>;
};
