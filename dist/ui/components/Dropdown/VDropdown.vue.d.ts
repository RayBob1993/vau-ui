import type { IVDropdownProps, IVDropdownSlots, IVDropdownExpose } from './types';
type __VLS_Slots = IVDropdownSlots;
declare const __VLS_base: import("vue").DefineComponent<IVDropdownProps, IVDropdownExpose, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => any;
    open: () => any;
    opened: (payload: Element) => any;
    closed: (payload: Element) => any;
}, string, import("vue").PublicProps, Readonly<IVDropdownProps> & Readonly<{
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    onOpened?: ((payload: Element) => any) | undefined;
    onClosed?: ((payload: Element) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
