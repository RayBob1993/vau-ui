import { type SelectProps, type SelectModelValue, type UnscopedSlot } from '../../../../core/index.js';
type __VLS_Props = SelectProps;
type __VLS_Slots = {
    default?: UnscopedSlot;
    value?: UnscopedSlot;
};
type __VLS_ModelProps = {
    modelValue: SelectModelValue;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_base: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: () => any;
    change: (payload: string) => any;
    "update:modelValue": (value: SelectModelValue) => any;
    close: () => any;
    open: () => any;
    opened: (payload: Element) => any;
    closed: (payload: Element) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onClear?: (() => any) | undefined;
    onChange?: ((payload: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: SelectModelValue) => any) | undefined;
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
