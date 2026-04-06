import type { IVDrawerProps, IVDrawerSlots } from './types';
type __VLS_Props = IVDrawerProps;
type __VLS_Slots = IVDrawerSlots;
type __VLS_ModelProps = {
    modelValue: boolean;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_base: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
    close: () => any;
    open: () => any;
    opened: (payload: Element) => any;
    closed: (payload: Element) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
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
