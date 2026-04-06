import { type AccordionProps, type AccordionModelValue } from '../../../core/index.js';
type __VLS_Props = AccordionProps;
type __VLS_ModelProps = {
    modelValue: AccordionModelValue;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (payload: import('../../../core/index.js').Maybe<import('../../../core/index.js').AccordionValue>) => any;
    "update:modelValue": (value: AccordionModelValue) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onChange?: ((payload: import('../../../core/index.js').Maybe<import('../../../core/index.js').AccordionValue>) => any) | undefined;
    "onUpdate:modelValue"?: ((value: AccordionModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
