import type { IVCountdownProps, IVCountdownExpose, IVCountdownSlots } from './types';
type __VLS_Slots = IVCountdownSlots;
declare const __VLS_base: import("vue").DefineComponent<IVCountdownProps, IVCountdownExpose, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    start: () => any;
    end: () => any;
    progress: (payload: import("./types").IVCountdownProgress) => any;
    abort: () => any;
}, string, import("vue").PublicProps, Readonly<IVCountdownProps> & Readonly<{
    onStart?: (() => any) | undefined;
    onEnd?: (() => any) | undefined;
    onProgress?: ((payload: import("./types").IVCountdownProgress) => any) | undefined;
    onAbort?: (() => any) | undefined;
}>, {
    interval: number;
    now: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
