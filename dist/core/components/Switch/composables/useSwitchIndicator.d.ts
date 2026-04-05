import { SwitchRootContext } from '../types';
import { MaybeNull } from '../../../types';
import { ComputedRef } from 'vue';
export interface UseSwitchIndicatorOptions {
    switchRootContext: MaybeNull<SwitchRootContext>;
}
export declare function useSwitchIndicator(options: UseSwitchIndicatorOptions): {
    isDisabled: ComputedRef<boolean>;
    isActive: ComputedRef<boolean>;
    isValid: ComputedRef<boolean>;
    isInvalid: ComputedRef<boolean>;
};
