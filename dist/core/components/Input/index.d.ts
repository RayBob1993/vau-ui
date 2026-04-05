import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps, DefineComponent } from 'vue';
import { InputModelValue, InputType, InputBaseProps, InputNativeProps, InputTextareaProps, InputNativeType, InputMode, InputSlots } from './types';
import { ThemeProp, SizeProp } from '../..';
export declare const Input: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue: InputModelValue;
        } & {
            type?: InputType;
            clearable?: boolean;
            loading?: boolean;
        } & InputBaseProps & Partial< InputNativeProps> & Partial< InputTextareaProps> & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
            setFocus: (payload: boolean) => void;
        }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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
        }, PublicProps, {
            type: InputType;
            nativeType: InputNativeType;
            inputMode: InputMode;
        }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            modelValue: InputModelValue;
        } & {
            type?: InputType;
            clearable?: boolean;
            loading?: boolean;
        } & InputBaseProps & Partial< InputNativeProps> & Partial< InputTextareaProps> & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
            setFocus: (payload: boolean) => void;
        }, {}, {}, {}, {
            type: InputType;
            nativeType: InputNativeType;
            inputMode: InputMode;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
        modelValue: InputModelValue;
    } & {
        type?: InputType;
        clearable?: boolean;
        loading?: boolean;
    } & InputBaseProps & Partial< InputNativeProps> & Partial< InputTextareaProps> & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
        setFocus: (payload: boolean) => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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
    }, string, {
        type: InputType;
        nativeType: InputNativeType;
        inputMode: InputMode;
    }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: Readonly< InputSlots> & InputSlots;
    });
    Before: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    After: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Native: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLInputElement>;
    Textarea: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLTextAreaElement>;
    Control: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Group: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    GroupAddon: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};
export * from './types';
