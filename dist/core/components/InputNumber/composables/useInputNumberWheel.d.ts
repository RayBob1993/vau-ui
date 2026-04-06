import type { InputNumberMousewheel } from '../types';
import type { Maybe } from '../../../types';
import { type MaybeRefOrGetter } from 'vue';
export interface IUseInputNumberWheel {
    mousewheel: MaybeRefOrGetter<Maybe<InputNumberMousewheel>>;
    onIncrement: VoidFunction;
    onDecrement: VoidFunction;
}
export declare function useInputNumberWheel(options: IUseInputNumberWheel): {
    handleWheel: import("../../..").ThrottledFunction<[event: WheelEvent]>;
};
