import type { IVCountdownProps, IVCountdownProgress } from '../types';
export interface IUseCountdownOptions {
    props: IVCountdownProps;
    onAbort?: VoidFunction;
    onEnd?: VoidFunction;
    onProgress?: (payload: IVCountdownProgress) => void;
    onStart?: VoidFunction;
}
export declare function useCountdown(options: IUseCountdownOptions): {
    years: import("vue").ComputedRef<number>;
    months: import("vue").ComputedRef<number>;
    days: import("vue").ComputedRef<number>;
    hours: import("vue").ComputedRef<number>;
    minutes: import("vue").ComputedRef<number>;
    seconds: import("vue").ComputedRef<number>;
    milliseconds: import("vue").ComputedRef<number>;
    start: () => void;
    abort: () => void;
    end: () => void;
    restart: () => void;
};
