import { InputRangeRootContext } from '../types';
import { MaybeNull } from '../../../types';
import { ComputedRef } from 'vue';
export interface UseInputRangeSliderOptions {
    inputRangeRootContext: MaybeNull<InputRangeRootContext>;
}
export declare function useInputRangeSlider(options: UseInputRangeSliderOptions): {
    isDisabled: ComputedRef<boolean>;
};
