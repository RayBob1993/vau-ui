import { IVCountdownProps, IVCountdownProgress } from '../types';
import { ComputedRef } from 'vue';
export interface IUseCountdownOptions {
    props: IVCountdownProps;
    onAbort?: VoidFunction;
    onEnd?: VoidFunction;
    onProgress?: (payload: IVCountdownProgress) => void;
    onStart?: VoidFunction;
}
export declare function useCountdown(options: IUseCountdownOptions): {
    years: ComputedRef<number>;
    months: ComputedRef<number>;
    days: ComputedRef<number>;
    hours: ComputedRef<number>;
    minutes: ComputedRef<number>;
    seconds: ComputedRef<number>;
    milliseconds: ComputedRef<number>;
    start: () => void;
    abort: () => void;
    end: () => void;
    restart: () => void;
};
