import { AccordionModelValue, AccordionProps } from './types';
type __VLS_Props = AccordionProps;
type __VLS_PublicProps = {
    modelValue: AccordionModelValue;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (payload: import('../..').Maybe<import('./types').AccordionValue>) => any;
    "update:modelValue": (value: AccordionModelValue) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onChange?: ((payload: import('../..').Maybe<import('./types').AccordionValue>) => any) | undefined;
    "onUpdate:modelValue"?: ((value: AccordionModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
