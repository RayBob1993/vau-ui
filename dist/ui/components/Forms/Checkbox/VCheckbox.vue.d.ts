import { type CheckboxProps, type CheckboxModelValue } from '../../../../core/index.js';
type __VLS_Props = CheckboxProps;
type __VLS_ModelProps = {
    modelValue: CheckboxModelValue;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare var __VLS_19: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_19) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: CheckboxModelValue) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: CheckboxModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
