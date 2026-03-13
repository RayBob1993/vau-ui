import { RadioRootContext } from '../types';
import { MaybeNull } from '../../../../types';
export interface UseRadioIndicatorOptions {
    radioRootContext: MaybeNull<RadioRootContext>;
}
export declare function useRadioIndicator(options: UseRadioIndicatorOptions): {
    isDisabled: import('vue').ComputedRef<boolean>;
    isActive: import('vue').ComputedRef<boolean>;
    isValid: import('vue').ComputedRef<boolean>;
    isInvalid: import('vue').ComputedRef<boolean>;
};
