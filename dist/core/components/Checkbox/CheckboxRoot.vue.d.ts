import { CheckboxProps, CheckboxModelValue, CheckboxValue } from './types';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = CheckboxProps;
type __VLS_PublicProps = {
    modelValue?: CheckboxModelValue;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        inputRef: HTMLInputElement;
    };
    rootEl: HTMLLabelElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (payload: CheckboxValue) => any;
    "update:modelValue": (value: CheckboxModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onChange?: ((payload: CheckboxValue) => any) | undefined;
    "onUpdate:modelValue"?: ((value: CheckboxModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLLabelElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
