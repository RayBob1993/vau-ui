import { IVTabsProps, IVTabsModelValue } from './types';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = IVTabsProps;
type __VLS_PublicProps = {
    modelValue: IVTabsModelValue;
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
declare const __VLS_component: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (payload: IVTabsModelValue) => any;
    "update:modelValue": (value: IVTabsModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onChange?: ((payload: IVTabsModelValue) => any) | undefined;
    "onUpdate:modelValue"?: ((value: IVTabsModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
