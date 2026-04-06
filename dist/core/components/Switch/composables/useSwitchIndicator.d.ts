import type { SwitchRootContext } from '../types';
import type { MaybeNull } from '../../../types';
export interface UseSwitchIndicatorOptions {
    switchRootContext: MaybeNull<SwitchRootContext>;
}
export declare function useSwitchIndicator(options: UseSwitchIndicatorOptions): {
    isDisabled: import("vue").ComputedRef<boolean>;
    isActive: import("vue").ComputedRef<boolean>;
    isValid: import("vue").ComputedRef<boolean>;
    isInvalid: import("vue").ComputedRef<boolean>;
};
