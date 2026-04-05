import { SelectProps, SelectModelValue, UnscopedSlot } from '../../../../core/index.ts';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = SelectProps;
type __VLS_PublicProps = {
    modelValue: SelectModelValue;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        default?: UnscopedSlot;
        value?: UnscopedSlot;
    }> & {
        default?: UnscopedSlot;
        value?: UnscopedSlot;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (payload: string) => any;
    "update:modelValue": (value: SelectModelValue) => any;
    clear: () => any;
    close: () => any;
    open: () => any;
    opened: (payload: Element) => any;
    closed: (payload: Element) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onChange?: ((payload: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: SelectModelValue) => any) | undefined;
    onClear?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    onOpened?: ((payload: Element) => any) | undefined;
    onClosed?: ((payload: Element) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
