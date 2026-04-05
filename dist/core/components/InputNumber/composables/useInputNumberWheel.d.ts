import { InputNumberMousewheel } from '../types';
import { Maybe } from '../../../types';
import { MaybeRefOrGetter } from 'vue';
import { ThrottledFunction } from '../../..';
export interface IUseInputNumberWheel {
    mousewheel: MaybeRefOrGetter<Maybe<InputNumberMousewheel>>;
    onIncrement: VoidFunction;
    onDecrement: VoidFunction;
}
export declare function useInputNumberWheel(options: IUseInputNumberWheel): {
    handleWheel: ThrottledFunction<[event: WheelEvent]>;
};
