import { FormItemProps, FormItemSlots } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<FormItemSlots> & FormItemSlots;
    refs: {
        root: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<FormItemProps, {
    reset: VoidFunction;
    validate: (silent?: boolean) => Promise<boolean>;
    clearValidateErrors: VoidFunction;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    invalid: () => any;
    valid: () => any;
}, string, import('vue').PublicProps, Readonly<FormItemProps> & Readonly<{
    onInvalid?: (() => any) | undefined;
    onValid?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    root: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
