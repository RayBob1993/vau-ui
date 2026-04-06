import type { InputRangeRootContext } from '../types';
import type { MaybeNull } from '../../../types';
export interface UseInputRangeSliderOptions {
    inputRangeRootContext: MaybeNull<InputRangeRootContext>;
}
export declare function useInputRangeSlider(options: UseInputRangeSliderOptions): {
    isDisabled: import("vue").ComputedRef<boolean>;
};
