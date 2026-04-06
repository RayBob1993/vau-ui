import type { ModalProps } from './types';
type __VLS_Props = ModalProps;
type __VLS_ModelProps = {
    modelValue: boolean;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare var __VLS_16: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_16) => any;
};
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
}>, {
    position: import("./types").ModalPosition;
    appendToBody: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
