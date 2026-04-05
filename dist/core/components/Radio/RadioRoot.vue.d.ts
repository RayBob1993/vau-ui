import { RadioProps, RadioModelValue, RadioValue } from './types';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = RadioProps;
type __VLS_PublicProps = {
    modelValue: RadioModelValue;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (value: RadioValue) => any;
    "update:modelValue": (value: RadioModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onChange?: ((value: RadioValue) => any) | undefined;
    "onUpdate:modelValue"?: ((value: RadioModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
