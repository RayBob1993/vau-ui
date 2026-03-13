import { InputModelValue, InputProps, InputSlots } from './types';
type __VLS_Props = InputProps;
type __VLS_PublicProps = {
    modelValue: InputModelValue;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<InputSlots> & InputSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {
    setFocus: (payload: boolean) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (event: Event) => any;
    "update:modelValue": (value: InputModelValue) => any;
    blur: (event: Event) => any;
    click: (event: PointerEvent) => any;
    contextmenu: (event: Event) => any;
    copy: (event: ClipboardEvent) => any;
    cut: (event: ClipboardEvent) => any;
    dblclick: (event: MouseEvent) => any;
    focus: (event: Event) => any;
    focusin: (event: Event) => any;
    focusout: (event: Event) => any;
    keydown: (event: KeyboardEvent) => any;
    keypress: (event: KeyboardEvent) => any;
    keyup: (event: KeyboardEvent) => any;
    mousedown: (event: MouseEvent) => any;
    mouseenter: (event: MouseEvent) => any;
    mouseleave: (event: MouseEvent) => any;
    mousemove: (event: MouseEvent) => any;
    mouseout: (event: MouseEvent) => any;
    mouseover: (event: MouseEvent) => any;
    mouseup: (event: MouseEvent) => any;
    paste: (event: ClipboardEvent) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onChange?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: InputModelValue) => any) | undefined;
    onBlur?: ((event: Event) => any) | undefined;
    onClick?: ((event: PointerEvent) => any) | undefined;
    onContextmenu?: ((event: Event) => any) | undefined;
    onCopy?: ((event: ClipboardEvent) => any) | undefined;
    onCut?: ((event: ClipboardEvent) => any) | undefined;
    onDblclick?: ((event: MouseEvent) => any) | undefined;
    onFocus?: ((event: Event) => any) | undefined;
    onFocusin?: ((event: Event) => any) | undefined;
    onFocusout?: ((event: Event) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    onKeypress?: ((event: KeyboardEvent) => any) | undefined;
    onKeyup?: ((event: KeyboardEvent) => any) | undefined;
    onMousedown?: ((event: MouseEvent) => any) | undefined;
    onMouseenter?: ((event: MouseEvent) => any) | undefined;
    onMouseleave?: ((event: MouseEvent) => any) | undefined;
    onMousemove?: ((event: MouseEvent) => any) | undefined;
    onMouseout?: ((event: MouseEvent) => any) | undefined;
    onMouseover?: ((event: MouseEvent) => any) | undefined;
    onMouseup?: ((event: MouseEvent) => any) | undefined;
    onPaste?: ((event: ClipboardEvent) => any) | undefined;
}>, {
    type: import('./types').InputType;
    nativeType: import('./types').InputNativeType;
    inputMode: import('./types').InputMode;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
