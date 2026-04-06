import type { IVInplaceSlots } from './types';
type __VLS_Slots = IVInplaceSlots;
declare const __VLS_base: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => any;
    open: () => any;
}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
