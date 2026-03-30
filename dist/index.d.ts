import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComponentTypeEmits } from 'vue';
import { ComputedRef } from 'vue';
import { CreateComponentPublicInstanceWithMixins } from 'vue';
import { DefineComponent } from 'vue';
import { EmitFn } from 'vue';
import { ExtractPropTypes } from 'vue';
import { GlobalComponents } from 'vue';
import { GlobalDirectives } from 'vue';
import { InjectionKey } from 'vue';
import { MaybeRefOrGetter } from 'vue';
import { ModelRef } from 'vue';
import { ObjectDirective } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { ShallowRef } from 'vue';
import { ShallowUnwrapRef } from 'vue';
import { TemplateRef } from 'vue';
import { VNode } from 'vue';
import { VNodeChild } from 'vue';
import { VNodeProps } from 'vue';
import { z } from 'zod';
import { ZodError } from 'zod';
import { ZodType } from 'zod';

declare const __VLS_component: DefineComponent<ButtonProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ButtonProps> & Readonly<{}>, {
type: HTMLButtonElement["type"];
as: keyof HTMLElementTagNameMap | Component;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_10: DefineComponent<ColProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ColProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_11: DefineComponent<ScrollbarProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
mousedown: (payload: MouseEvent) => any;
mouseleave: (payload: MouseEvent) => any;
mousemove: (payload: MouseEvent) => any;
mouseup: (payload: MouseEvent) => any;
scroll: (payload: Event) => any;
scrollEndY: () => any;
scrollEndX: () => any;
}, string, PublicProps, Readonly<ScrollbarProps> & Readonly<{
onMousedown?: ((payload: MouseEvent) => any) | undefined;
onMouseleave?: ((payload: MouseEvent) => any) | undefined;
onMousemove?: ((payload: MouseEvent) => any) | undefined;
onMouseup?: ((payload: MouseEvent) => any) | undefined;
onScroll?: ((payload: Event) => any) | undefined;
onScrollEndY?: (() => any) | undefined;
onScrollEndX?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_12: DefineComponent<TagProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
delete: (payload: Maybe<TagValue>) => any;
}, string, PublicProps, Readonly<TagProps> & Readonly<{
onDelete?: ((payload: Maybe<TagValue>) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_13: DefineComponent<Partial<DirectionProp>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_14: DefineComponent<TextProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<TextProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_15: DefineComponent<IVFormItemProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
invalid: () => any;
valid: () => any;
}, string, PublicProps, Readonly<IVFormItemProps> & Readonly<{
onInvalid?: (() => any) | undefined;
onValid?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_16: DefineComponent<__VLS_PublicProps_3, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: CheckboxModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_3> & Readonly<{
"onUpdate:modelValue"?: ((value: CheckboxModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;

declare const __VLS_component_17: DefineComponent<Partial<DirectionProp>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_18: DefineComponent<__VLS_PublicProps_4, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: InputModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_4> & Readonly<{
"onUpdate:modelValue"?: ((value: InputModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_19: DefineComponent<__VLS_PublicProps_8, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: RadioModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_8> & Readonly<{
"onUpdate:modelValue"?: ((value: RadioModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;

declare const __VLS_component_2: DefineComponent<Partial<DirectionProp>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_20: DefineComponent<Partial<DirectionProp>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_21: DefineComponent<__VLS_PublicProps_9, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (payload: string) => any;
"update:modelValue": (value: SelectModelValue) => any;
clear: () => any;
close: () => any;
open: () => any;
opened: (payload: Element) => any;
closed: (payload: Element) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_9> & Readonly<{
onChange?: ((payload: string) => any) | undefined;
"onUpdate:modelValue"?: ((value: SelectModelValue) => any) | undefined;
onClear?: (() => any) | undefined;
onClose?: (() => any) | undefined;
onOpen?: (() => any) | undefined;
onOpened?: ((payload: Element) => any) | undefined;
onClosed?: ((payload: Element) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_22: DefineComponent<OptionProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<OptionProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_23: DefineComponent<__VLS_PublicProps_10, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: boolean) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_10> & Readonly<{
"onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;

declare const __VLS_component_24: DefineComponent<ConfigProviderProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ConfigProviderProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_25: DefineComponent<Partial<DirectionProp>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_26: DefineComponent<FlexProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<FlexProps> & Readonly<{}>, {
wrap: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_27: DefineComponent<FlexItemProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<FlexItemProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_28: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

declare const __VLS_component_29: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

declare const __VLS_component_3: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (payload: Maybe<AccordionValue>) => any;
"update:modelValue": (value: AccordionModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
onChange?: ((payload: Maybe<AccordionValue>) => any) | undefined;
"onUpdate:modelValue"?: ((value: AccordionModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_30: DefineComponent<Partial<PrimitiveProps>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Partial<PrimitiveProps>> & Readonly<{}>, {
as: keyof HTMLElementTagNameMap | Component;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_31: DefineComponent<MenuProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<MenuProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLElement>;

declare const __VLS_component_4: DefineComponent<VAccordionItemProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<VAccordionItemProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_5: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
close: () => any;
open: () => any;
}, string, PublicProps, Readonly<{}> & Readonly<{
onClose?: (() => any) | undefined;
onOpen?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

declare const __VLS_component_6: DefineComponent<__VLS_PublicProps_2, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: boolean) => any;
close: () => any;
open: () => any;
opened: (payload: Element) => any;
closed: (payload: Element) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_2> & Readonly<{
"onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
onClose?: (() => any) | undefined;
onOpen?: (() => any) | undefined;
onOpened?: ((payload: Element) => any) | undefined;
onClosed?: ((payload: Element) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_7: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

declare const __VLS_component_8: DefineComponent<Partial<SizeProp>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Partial<SizeProp>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_9: DefineComponent<RowProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<RowProps> & Readonly<{}>, {
wrap: boolean;
guttersX: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Props = AccordionProps;

declare type __VLS_Props_10 = SwitchProps;

declare type __VLS_Props_2 = IVModalProps;

declare type __VLS_Props_3 = CheckboxProps;

declare type __VLS_Props_4 = InputProps;

declare type __VLS_Props_5 = IVInputCodeProps;

declare type __VLS_Props_6 = InputNumberProps;

declare type __VLS_Props_7 = InputPasswordProps;

declare type __VLS_Props_8 = RadioProps;

declare type __VLS_Props_9 = SelectProps;

declare type __VLS_PublicProps = {
    modelValue: AccordionModelValue;
} & __VLS_Props;

declare type __VLS_PublicProps_10 = {
    modelValue: SwitchModelValue;
} & __VLS_Props_10;

declare type __VLS_PublicProps_2 = {
    modelValue: boolean;
} & __VLS_Props_2;

declare type __VLS_PublicProps_3 = {
    modelValue: CheckboxModelValue;
} & __VLS_Props_3;

declare type __VLS_PublicProps_4 = {
    modelValue: InputModelValue;
} & __VLS_Props_4;

declare type __VLS_PublicProps_5 = {
    modelValue: InputCodeModelValue;
} & __VLS_Props_5;

declare type __VLS_PublicProps_6 = {
    modelValue?: InputNumberModelValue;
} & __VLS_Props_6;

declare type __VLS_PublicProps_7 = {
    modelValue: InputModelValue;
} & __VLS_Props_7;

declare type __VLS_PublicProps_8 = {
    modelValue: RadioModelValue;
} & __VLS_Props_8;

declare type __VLS_PublicProps_9 = {
    modelValue: SelectModelValue;
} & __VLS_Props_9;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};

declare function __VLS_template_10(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_11(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_12(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_13(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_14(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};

declare function __VLS_template_15(): {
    attrs: Partial<{}>;
    slots: Readonly<FormItemSlots> & FormItemSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_16(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
};

declare function __VLS_template_17(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_18(): {
    attrs: Partial<{}>;
    slots: Readonly<InputSlots> & InputSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_19(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
};

declare function __VLS_template_2(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_20(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_21(): {
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

declare function __VLS_template_22(): {
    attrs: Partial<{}>;
    slots: Readonly<OptionSlots> & OptionSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_23(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
};

declare function __VLS_template_24(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};

declare function __VLS_template_25(): {
    attrs: Partial<{}>;
    slots: Readonly<IVDividerSlots> & IVDividerSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_26(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_27(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_28(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_29(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_3(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_30(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};

declare function __VLS_template_31(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};

declare function __VLS_template_4(): {
    attrs: Partial<{}>;
    slots: Readonly<VAccordionItemSlots> & VAccordionItemSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_5(): {
    attrs: Partial<{}>;
    slots: Readonly<IVInplaceSlots> & IVInplaceSlots;
    refs: {};
    rootEl: any;
};

declare function __VLS_template_6(): {
    attrs: Partial<{}>;
    slots: Readonly<IVModalSlots> & IVModalSlots;
    refs: {};
    rootEl: any;
};

declare function __VLS_template_7(): {
    attrs: Partial<{}>;
    slots: Readonly<LayoutSlots> & LayoutSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_8(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_9(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_TemplateResult_10 = ReturnType<typeof __VLS_template_10>;

declare type __VLS_TemplateResult_11 = ReturnType<typeof __VLS_template_11>;

declare type __VLS_TemplateResult_12 = ReturnType<typeof __VLS_template_12>;

declare type __VLS_TemplateResult_13 = ReturnType<typeof __VLS_template_13>;

declare type __VLS_TemplateResult_14 = ReturnType<typeof __VLS_template_14>;

declare type __VLS_TemplateResult_15 = ReturnType<typeof __VLS_template_15>;

declare type __VLS_TemplateResult_16 = ReturnType<typeof __VLS_template_16>;

declare type __VLS_TemplateResult_17 = ReturnType<typeof __VLS_template_17>;

declare type __VLS_TemplateResult_18 = ReturnType<typeof __VLS_template_18>;

declare type __VLS_TemplateResult_19 = ReturnType<typeof __VLS_template_19>;

declare type __VLS_TemplateResult_2 = ReturnType<typeof __VLS_template_2>;

declare type __VLS_TemplateResult_20 = ReturnType<typeof __VLS_template_20>;

declare type __VLS_TemplateResult_21 = ReturnType<typeof __VLS_template_21>;

declare type __VLS_TemplateResult_22 = ReturnType<typeof __VLS_template_22>;

declare type __VLS_TemplateResult_23 = ReturnType<typeof __VLS_template_23>;

declare type __VLS_TemplateResult_24 = ReturnType<typeof __VLS_template_24>;

declare type __VLS_TemplateResult_25 = ReturnType<typeof __VLS_template_25>;

declare type __VLS_TemplateResult_26 = ReturnType<typeof __VLS_template_26>;

declare type __VLS_TemplateResult_27 = ReturnType<typeof __VLS_template_27>;

declare type __VLS_TemplateResult_28 = ReturnType<typeof __VLS_template_28>;

declare type __VLS_TemplateResult_29 = ReturnType<typeof __VLS_template_29>;

declare type __VLS_TemplateResult_3 = ReturnType<typeof __VLS_template_3>;

declare type __VLS_TemplateResult_30 = ReturnType<typeof __VLS_template_30>;

declare type __VLS_TemplateResult_31 = ReturnType<typeof __VLS_template_31>;

declare type __VLS_TemplateResult_4 = ReturnType<typeof __VLS_template_4>;

declare type __VLS_TemplateResult_5 = ReturnType<typeof __VLS_template_5>;

declare type __VLS_TemplateResult_6 = ReturnType<typeof __VLS_template_6>;

declare type __VLS_TemplateResult_7 = ReturnType<typeof __VLS_template_7>;

declare type __VLS_TemplateResult_8 = ReturnType<typeof __VLS_template_8>;

declare type __VLS_TemplateResult_9 = ReturnType<typeof __VLS_template_9>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_10<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_11<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_12<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_13<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_14<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_15<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_16<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_17<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_18<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_19<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_20<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_21<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_22<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_23<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_24<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_25<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_26<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_27<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_28<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_29<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_30<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_31<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_5<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_6<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_7<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_8<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_9<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const Accordion: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue: AccordionModelValue;
        } & {
        multiple?: boolean;
        } & Partial<SizeProp> & Partial<ThemeProp>> & Readonly<{
        onChange?: ((payload: Maybe<AccordionValue>) => any) | undefined;
        "onUpdate:modelValue"?: ((value: AccordionModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        change: (payload: Maybe<AccordionValue>) => any;
        "update:modelValue": (value: AccordionModelValue) => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        modelValue: AccordionModelValue;
        } & {
        multiple?: boolean;
        } & Partial<SizeProp> & Partial<ThemeProp>> & Readonly<{
        onChange?: ((payload: Maybe<AccordionValue>) => any) | undefined;
        "onUpdate:modelValue"?: ((value: AccordionModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    modelValue: AccordionModelValue;
    } & {
    multiple?: boolean;
    } & Partial<SizeProp> & Partial<ThemeProp>> & Readonly<{
    onChange?: ((payload: Maybe<AccordionValue>) => any) | undefined;
    "onUpdate:modelValue"?: ((value: AccordionModelValue) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (payload: Maybe<AccordionValue>) => any;
    "update:modelValue": (value: AccordionModelValue) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Item: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<AccordionItemProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<AccordionItemProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<AccordionItemProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: Readonly<AccordionItemSlots> & AccordionItemSlots;
    });
    Header: {
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
    Body: {
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
    Title: {
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
    Trigger: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLButtonElement, ComponentProvideOptions, {
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

export declare interface AccordionEmits {
    change: [payload: Maybe<AccordionValue>];
}

export declare interface AccordionItemContext {
    props: MaybeRefOrGetter<AccordionItemProps>;
    isActive: MaybeRefOrGetter<boolean>;
}

export declare interface AccordionItemProps {
    value: AccordionValue;
    disabled?: boolean;
}

export declare interface AccordionItemSlots {
    default?: (scope: {
        isActive: boolean;
    }) => Array<VNode>;
}

export declare type AccordionModelValue = Maybe<MaybeNull<MaybeArray<AccordionValue>>>;

export declare const AccordionPlugin: Plugin_2;

export declare type AccordionProps = {
    multiple?: boolean;
} & Partial<SizeProp> & Partial<ThemeProp>;

export declare interface AccordionRootContext {
    props: MaybeRefOrGetter<AccordionProps>;
    modelValue: MaybeRefOrGetter<AccordionModelValue>;
    setModelValue: (value: Maybe<AccordionValue>) => void;
}

export declare type AccordionValue = string | number;

export declare type Booleanish = 'true' | 'false';

/**
 * Преобразует boolean в Booleanish тип
 * @param value - булево значение
 * @returns Booleanish значение
 */
export declare function booleanToBooleanish(value: boolean): Booleanish;

export declare const Button: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<ButtonProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        type: HTMLButtonElement["type"];
        as: keyof HTMLElementTagNameMap | Component;
        }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<ButtonProps> & Readonly<{}>, {}, {}, {}, {}, {
        type: HTMLButtonElement["type"];
        as: keyof HTMLElementTagNameMap | Component;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<ButtonProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    type: HTMLButtonElement["type"];
    as: keyof HTMLElementTagNameMap | Component;
    }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Group: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};

export declare const ButtonGroupPlugin: Plugin_2;

export declare type ButtonGroupProps = Partial<DirectionProp>;

export declare const ButtonPlugin: Plugin_2;

export declare type ButtonProps = {
    loading?: boolean;
    disabled?: boolean;
    plain?: boolean;
    wide?: boolean;
    type?: HTMLButtonElement['type'];
} & Partial<ThemeProp> & Partial<SizeProp> & Partial<PrimitiveProps>;

export declare interface CancelOptions {
    /**
     * Если установлено в true, то только запланированный вызов будет отменен, а текущий выполнится.
     * @default false
     */
    upcomingOnly?: boolean;
}

export declare const Checkbox: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: CheckboxModelValue;
        } & {
        disabled?: boolean;
        indeterminate?: boolean;
        value?: CheckboxValue;
        checked?: boolean;
        } & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        onChange?: ((payload: CheckboxValue) => any) | undefined;
        "onUpdate:modelValue"?: ((value: CheckboxModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        change: (payload: CheckboxValue) => any;
        "update:modelValue": (value: CheckboxModelValue) => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {
        inputRef: HTMLInputElement;
        }, HTMLLabelElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        modelValue?: CheckboxModelValue;
        } & {
        disabled?: boolean;
        indeterminate?: boolean;
        value?: CheckboxValue;
        checked?: boolean;
        } & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        onChange?: ((payload: CheckboxValue) => any) | undefined;
        "onUpdate:modelValue"?: ((value: CheckboxModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    modelValue?: CheckboxModelValue;
    } & {
    disabled?: boolean;
    indeterminate?: boolean;
    value?: CheckboxValue;
    checked?: boolean;
    } & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
    onChange?: ((payload: CheckboxValue) => any) | undefined;
    "onUpdate:modelValue"?: ((value: CheckboxModelValue) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (payload: CheckboxValue) => any;
    "update:modelValue": (value: CheckboxModelValue) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Indicator: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLSpanElement, ComponentProvideOptions, {
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
        $slots: Readonly<CheckboxIndicatorSlots> & CheckboxIndicatorSlots;
    });
    Title: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLSpanElement, ComponentProvideOptions, {
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
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};

export declare interface CheckboxEmits {
    change: [payload: CheckboxValue];
}

export declare const CheckboxGroupPlugin: Plugin_2;

export declare type CheckboxGroupProps = Partial<DirectionProp>;

export declare interface CheckboxIndicatorScopedSlot {
    isDisabled: boolean;
    isActive: boolean;
    isIndeterminate: boolean;
    isValid: boolean;
    isInvalid: boolean;
}

export declare interface CheckboxIndicatorSlots {
    default?: (props: CheckboxIndicatorScopedSlot) => Array<VNode>;
}

export declare type CheckboxModelValue = boolean | Array<CheckboxValue>;

export declare const CheckboxPlugin: Plugin_2;

export declare type CheckboxProps = {
    disabled?: boolean;
    indeterminate?: boolean;
    value?: CheckboxValue;
    checked?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;

export declare interface CheckboxRootContext {
    props: MaybeRefOrGetter<CheckboxProps>;
    modelValue: MaybeRefOrGetter<Maybe<CheckboxModelValue>>;
    isActive: MaybeRefOrGetter<boolean>;
    isDisabled: MaybeRefOrGetter<boolean>;
    isIndeterminate: MaybeRefOrGetter<boolean>;
    isValid: MaybeRefOrGetter<boolean>;
    isInvalid: MaybeRefOrGetter<boolean>;
}

export declare type CheckboxValue = number | string;

export declare const ClickOutsidePlugin: Plugin_2;

/**
 * @description `clone` - Клонирует переданное значение, создавая его глубокую копию.
 *
 * Функция поддерживает клонирование объектов, массивов и примитивных типов.
 * При клонировании объектов и массивов происходит рекурсивное копирование их свойств и элементов.
 * Методы также клонируются с привязкой к новому объекту.
 *
 * @template T - Тип значения, которое будет клонироваться.
 * @param value - Значение, которое нужно клонировать.
 * @param hash - Кеширование
 * @returns Глубокая копия переданного значения того же типа T.
 *
 * @example
 * const original = {
 *   name: 'Дима',
 *   age: 31,
 *   greet() {
 *     console.log(`Привет, меня зовут ${this.name}`);
 *   },
 *   nested: {
 *     array: [1, 2, 3],
 *     method() {
 *       console.log('вложенный метод');
 *     }
 *   }
 * };
 *
 * const cloned = clone(original);
 * cloned.greet(); // Привет, меня зовут Дима
 * cloned.nested.method(); // вложенный метод
 *
 * original.name = 'Вася';
 * console.log(cloned.name); // Вася
 */
export declare function clone<T>(value: T, hash?: WeakMap<object, unknown>): T;

export declare type ColOffset = ColSizeValue;

export declare const ColPlugin: Plugin_2;

export declare interface ColProps {
    size?: ColSize;
    sizeXs?: ColSize;
    sizeSm?: ColSize;
    sizeMd?: ColSize;
    sizeLg?: ColSize;
    sizeXl?: ColSize;
    sizeXxl?: ColSize;
    order?: number;
    orderXs?: number;
    orderSm?: number;
    orderMd?: number;
    orderLg?: number;
    orderXl?: number;
    orderXxl?: number;
    offset?: ColOffset;
    offsetXs?: ColOffset;
    offsetSm?: ColOffset;
    offsetMd?: ColOffset;
    offsetLg?: ColOffset;
    offsetXl?: ColOffset;
    offsetXxl?: ColOffset;
}

export declare type ColSize = ColSizeValue | 'auto' | 'content';

export declare type ColSizeValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export declare const ConfigProvider: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<ConfigProviderProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        teleportTarget: string | HTMLElement;
        }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<ConfigProviderProps> & Readonly<{}>, {}, {}, {}, {}, {
        teleportTarget: string | HTMLElement;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<ConfigProviderProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    teleportTarget: string | HTMLElement;
    }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};

export declare const ConfigProviderPlugin: Plugin_2;

export declare type ConfigProviderProps = {
    locale?: LocaleTranslation;
    teleportTarget?: string | HTMLElement;
    direction?: 'ltr' | 'rtl';
    icons?: VauIconRegistry;
};

export declare interface ConfigProviderRootContext {
    props: MaybeRefOrGetter<ConfigProviderProps>;
    t: (path: string) => string;
}

export declare const ConfigProviderRootContextKey: InjectionKey<ConfigProviderRootContext>;

export declare const ContainerPlugin: Plugin_2;

export declare type ContainerProps = Partial<SizeProp>;

/**
 * @description `debounce` - Ограничивает вызов функции так, чтобы она выполнялась только один раз после завершения серии быстрых вызовов.
 *
 * https://github.com/niksy/throttle-debounce/blob/master/debounce.js
 *
 * @template T - Тип функции, которую нужно ограничить.
 * @param {number} delay - Период времени в миллисекундах, в течение которого функция не будет вызвана снова.
 * @param {T} callback - Функция, вызов которой нужно ограничить.
 * @param {DebounceOptions} [options={}] - Опции для настройки поведения функции debounce.
 * @returns {(...args: Parameters<T>) => void} - Обертка вокруг оригинальной функции, которая ограничивает её вызовы.
 *
 * @example
 * const debouncedFn = debounce(() => console.log('Debounced'), 300);
 * window.addEventListener('resize', debouncedFn);
 */
export declare function debounce<T extends Array<unknown>>(callback: (...args: T) => unknown, delay: number, options?: DebounceOptions): ThrottledFunction<T>;

export declare interface DebounceOptions {
    /**
     * Если установлено в true, то функция будет вызвана сразу же при первом вызове.
     * @default false
     */
    atBegin?: boolean;
}

export declare function defineFormRules<MODEL>(rules: FormRules<MODEL>): FormRules<MODEL>;

/**
 * @description `delay` - Задержка выполнения
 * @param {number} delay Время задержки
 * @returns {Promise}
 * @example
 *
 * await delay(1000);
 *
 * console.log('Вывести в консоль текст через 1000 мс')
 */
export declare function delay(delay: number): Promise<void>;

export declare const Direction: Readonly<{
    readonly HORIZONTAL: "horizontal";
    readonly VERTICAL: "vertical";
}>;

export declare type _Direction = ValueOf<typeof Direction>;

export declare interface DirectionProp {
    direction: _Direction;
}

export declare const Divider: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Content: {
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

export declare const DividerPlugin: Plugin_2;

export declare type DividerProps = Partial<DirectionProp>;

export declare type EmitReturn<T> = T extends (...args: Array<unknown>) => infer R ? R : never;

export declare const Flex: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<FlexProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        wrap: boolean;
        }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<FlexProps> & Readonly<{}>, {}, {}, {}, {}, {
        wrap: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<FlexProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    wrap: boolean;
    }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Item: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<FlexItemProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<FlexItemProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<FlexItemProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};

export declare const FlexAlign: Readonly<{
    readonly START: "start";
    readonly CENTER: "center";
    readonly END: "end";
    readonly BASELINE: "baseline";
    readonly STRETCH: "stretch";
}>;

export declare type _FlexAlign = ValueOf<typeof FlexAlign>;

export declare interface FlexAlignProp {
    align: _FlexAlign;
    alignXs: _FlexAlign;
    alignSm: _FlexAlign;
    alignMd: _FlexAlign;
    alignLg: _FlexAlign;
    alignXl: _FlexAlign;
    alignXxl: _FlexAlign;
}

export declare const FlexItemPlugin: Plugin_2;

export declare interface FlexItemProps {
    flex?: 'auto' | 'content' | 'grow' | 'shrink';
}

export declare const FlexJustify: Readonly<{
    readonly START: "start";
    readonly CENTER: "center";
    readonly END: "end";
    readonly BASELINE: "baseline";
    readonly STRETCH: "stretch";
    readonly BETWEEN: "between";
    readonly AROUND: "around";
}>;

export declare type _FlexJustify = ValueOf<typeof FlexJustify>;

export declare interface FlexJustifyProp {
    justify: _FlexJustify;
    justifyXs: _FlexJustify;
    justifySm: _FlexJustify;
    justifyMd: _FlexJustify;
    justifyLg: _FlexJustify;
    justifyXl: _FlexJustify;
    justifyXxl: _FlexJustify;
}

export declare const FlexPlugin: Plugin_2;

export declare type FlexProps = {
    wrap?: boolean;
} & Partial<FlexAlignProp> & Partial<FlexJustifyProp> & Partial<DirectionProp>;

export declare const Form: {
    Root: <MODEL extends FormModel>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
        slots: Readonly<FormSlots> & FormSlots;
        attrs: any;
        emit: (((evt: "submit", payload: FormSubmitEvent) => void) & ((evt: "invalid") => void) & ((evt: "valid") => void)) & ((evt: "update:modelValue", value: MODEL) => void);
    }, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
        props: {
            readonly "onUpdate:modelValue"?: ((value: MODEL) => any) | undefined;
            readonly onSubmit?: ((payload: FormSubmitEvent) => any) | undefined;
            readonly onInvalid?: (() => any) | undefined;
            readonly onValid?: (() => any) | undefined;
            modelValue: MODEL;
            rules?: FormRules<MODEL> | undefined;
            disabled?: boolean | undefined;
            scrollToError?: (boolean | ScrollIntoViewOptions) | undefined;
        } & PublicProps;
        expose(exposed: ShallowUnwrapRef<FormInstance>): void;
        attrs: any;
        slots: Readonly<FormSlots> & FormSlots;
        emit: (((evt: "submit", payload: FormSubmitEvent) => void) & ((evt: "invalid") => void) & ((evt: "valid") => void)) & ((evt: "update:modelValue", value: MODEL) => void);
    }>) => VNode & {
        __ctx?: Awaited<typeof __VLS_setup>;
    };
    Item: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<FormItemProps> & Readonly<{
        onInvalid?: (() => any) | undefined;
        onValid?: (() => any) | undefined;
        }>, {
        reset: VoidFunction;
        validate: (silent?: boolean) => Promise<boolean>;
        clearValidateErrors: VoidFunction;
        }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        invalid: () => any;
        valid: () => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {
        root: HTMLDivElement;
        }, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<FormItemProps> & Readonly<{
        onInvalid?: (() => any) | undefined;
        onValid?: (() => any) | undefined;
        }>, {
        reset: VoidFunction;
        validate: (silent?: boolean) => Promise<boolean>;
        clearValidateErrors: VoidFunction;
        }, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<FormItemProps> & Readonly<{
    onInvalid?: (() => any) | undefined;
    onValid?: (() => any) | undefined;
    }>, {
    reset: VoidFunction;
    validate: (silent?: boolean) => Promise<boolean>;
    clearValidateErrors: VoidFunction;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    invalid: () => any;
    valid: () => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: Readonly<FormItemSlots> & FormItemSlots;
    });
    ItemTitle: {
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
    ItemRequired: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLSpanElement, ComponentProvideOptions, {
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
    ItemErrors: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;
};

export declare interface FormEmits extends FormItemEmits {
    submit: [payload: FormSubmitEvent];
}

export declare type FormExpose = FormInstance;

export declare interface FormInstance {
    validate: (silent?: boolean) => FormValidationResult;
    clearValidate: VoidFunction;
    reset: VoidFunction;
}

export declare interface FormItemContext {
    props: FormItemProps;
    validationStatus: Ref<FormItemValidationStatus>;
    validationErrors: Ref<Array<FormItemError>>;
    registerField: (field: FormItemField) => void;
    unregisterField: VoidFunction;
    isRequired: ComputedRef<boolean>;
    isDisabled: ComputedRef<boolean>;
    validate: (silent?: boolean) => Promise<boolean>;
    clearValidateErrors: VoidFunction;
    reset: VoidFunction;
}

export declare interface FormItemEmits {
    valid: [];
    invalid: [];
}

export declare type FormItemError = ZodError['issues'][number];

export declare type FormItemExpose = Pick<FormItemInstance, 'validate' | 'clearValidateErrors' | 'reset'>;

export declare interface FormItemField {
    reset: VoidFunction;
}

export declare interface FormItemInstance {
    id: string;
    isValidatable: boolean;
    isRequired: boolean;
    props: FormItemProps;
    validate: (silent?: boolean) => Promise<boolean>;
    validationStatus: FormItemValidationStatus;
    clearValidateErrors: VoidFunction;
    reset: VoidFunction;
}

export declare const FormItemPlugin: Plugin_2;

export declare interface FormItemProps {
    disabled?: boolean;
    name?: string;
}

export declare interface FormItemScopedSlot {
    validationStatus: FormItemValidationStatus;
    isRequired: boolean;
    errors: Array<FormItemError>;
}

export declare interface FormItemSlots {
    default?: (props: FormItemScopedSlot) => Array<VNode>;
    header?: (props: FormItemScopedSlot) => Array<VNode>;
    footer?: (props: FormItemScopedSlot) => Array<VNode>;
}

export declare interface FormItemValidationStatus {
    isError: boolean;
    isValidating: boolean;
    isSuccess: boolean;
}

export declare type FormModel = Record<string, FormModelValues>;

export declare type FormModelValues = unknown;

export declare const FormPlugin: Plugin_2;

export declare interface FormProps<MODEL> {
    rules?: FormRules<MODEL>;
    disabled?: boolean;
    scrollToError?: boolean | ScrollIntoViewOptions;
}

export declare interface FormRootContext {
    props: FormProps<FormModel>;
    modelValue: ModelRef<FormModel>;
    registerFormItem: (formItem: FormItemInstance) => void;
    unregisterFormItem: (id: string) => void;
}

export declare type FormRules<MODEL> = {
    [K in keyof MODEL]: ZodType<MODEL[K], MODEL[K]>;
};

export declare interface FormSlots {
    default?: (props: {
        isValid: boolean;
    }) => Array<VNode>;
}

export declare interface FormSubmitEvent {
    isValid: boolean;
    reset: VoidFunction;
}

export declare type FormValidationResult = Promise<boolean>;

/**
 * @description `getProp` - Получить значение свойства по указанному пути
 * @param {object} object Изначальный объект.
 * @param {string} path путь до нужного свойства.
 * @returns {*} Возвращает значение свойства по указанному пути
 * @example
 * getProp({
 *   prop1: 'value1',
 *   prop2: 'value2',
 *   prop3: {
 *     prop1: 'value1',
 *     prop2: 'value2',
 *     prop3: {
 *       prop1: 'value1',
 *       prop2: 'value2',
 *     },
 *   },
 * }, 'prop3.prop3.prop2');
 * // => 'value2'
 *
 */
export declare function getProp<T extends Record<string, unknown>, R = unknown>(object: T | null | undefined, path: string): R | null;

export declare const Grid: {
    Container: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<Partial<SizeProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<Partial<SizeProp>> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<Partial<SizeProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Row: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<RowProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<RowProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<RowProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Col: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<ColProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<ColProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<ColProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};

export declare type IconRenderFn = () => VNodeChild;

export declare const InplacePlugin: Plugin_2;

export declare const Input: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue: InputModelValue;
        } & {
        type?: InputType;
        clearable?: boolean;
        loading?: boolean;
        } & InputBaseProps & Partial<InputNativeProps> & Partial<InputTextareaProps> & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
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
        } & InputBaseProps & Partial<InputNativeProps> & Partial<InputTextareaProps> & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
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
    } & InputBaseProps & Partial<InputNativeProps> & Partial<InputTextareaProps> & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
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
        $slots: Readonly<InputSlots> & InputSlots;
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
    Native: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLInputElement>;
    Textarea: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLTextAreaElement>;
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

export declare const INPUT_NUMBER_ACTIONS: Readonly<{
    readonly DECREMENT: "decrement";
    readonly INCREMENT: "increment";
}>;

export declare const INPUT_NUMBER_MAX: number;

export declare const INPUT_NUMBER_MIN: number;

export declare const INPUT_NUMBER_STEP = 1;

export declare const INPUT_NUMBER_VALUE_DEFAULT = 0;

export declare const INPUT_NUMBER_WHEEL_DELAY = 100;

export declare type InputBaseProps = {
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    autocomplete?: AutoFill;
};

export declare const InputCode: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue: InputCodeModelValue;
        } & InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: InputCodeModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: InputCodeModelValue) => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        modelValue: InputCodeModelValue;
        } & InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: InputCodeModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    modelValue: InputCodeModelValue;
    } & InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
    "onUpdate:modelValue"?: ((value: InputCodeModelValue) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: InputCodeModelValue) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Pin: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLInputElement>;
};

export declare type InputCodeModelValue = string | number;

export declare const InputCodePlugin: Plugin_2;

export declare type InputCodeProps = InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>;

export declare interface InputCodeRootContext {
    props: MaybeRefOrGetter<InputCodeProps>;
    isDisabled: MaybeRefOrGetter<boolean>;
}

export declare interface InputEmits {
    click: [event: PointerEvent];
    dblclick: [event: MouseEvent];
    mousedown: [event: MouseEvent];
    mouseup: [event: MouseEvent];
    mouseenter: [event: MouseEvent];
    mouseleave: [event: MouseEvent];
    mousemove: [event: MouseEvent];
    mouseover: [event: MouseEvent];
    mouseout: [event: MouseEvent];
    contextmenu: [event: Event];
    focusin: [event: Event];
    focusout: [event: Event];
    change: [event: Event];
    blur: [event: Event];
    focus: [event: Event];
    keyup: [event: KeyboardEvent];
    keydown: [event: KeyboardEvent];
    keypress: [event: KeyboardEvent];
    paste: [event: ClipboardEvent];
    copy: [event: ClipboardEvent];
    cut: [event: ClipboardEvent];
}

export declare interface InputExpose {
    setFocus: (payload: boolean) => void;
}

export declare const InputGroupPlugin: Plugin_2;

export declare type InputInstance = InputExpose;

export declare type InputMode = ValueOf<typeof InputModes>;

export declare type InputModelValue = MaybeNull<Maybe<string>>;

export declare const InputModes: Readonly<{
    readonly NUMERIC: "numeric";
    readonly TEL: "tel";
    readonly TEXT: "text";
    readonly DECIMAL: "decimal";
    readonly SEARCH: "search";
    readonly EMAIL: "email";
    readonly NONE: "none";
    readonly URL: "url";
}>;

export declare interface InputNativeProps extends InputBaseProps {
    nativeType?: InputNativeType;
    inputMode?: InputMode;
}

export declare type InputNativeType = ValueOf<typeof InputNativeTypes>;

export declare const InputNativeTypes: Readonly<{
    readonly TEXT: "text";
    readonly EMAIL: "email";
    readonly NUMBER: "number";
    readonly TEL: "tel";
    readonly URL: "url";
    readonly SEARCH: "search";
    readonly PASSWORD: "password";
}>;

export declare const InputNumber: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: InputNumberModelValue;
        } & {
        mousewheel?: InputNumberMousewheel;
        } & {
        min?: number;
        max?: number;
        step?: number;
        } & InputBaseProps & Partial<DirectionProp> & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: number) => any;
        }, PublicProps, {
        step: number;
        min: number;
        max: number;
        }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        modelValue?: InputNumberModelValue;
        } & {
        mousewheel?: InputNumberMousewheel;
        } & {
        min?: number;
        max?: number;
        step?: number;
        } & InputBaseProps & Partial<DirectionProp> & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        }>, {}, {}, {}, {}, {
        step: number;
        min: number;
        max: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    modelValue?: InputNumberModelValue;
    } & {
    mousewheel?: InputNumberMousewheel;
    } & {
    min?: number;
    max?: number;
    step?: number;
    } & InputBaseProps & Partial<DirectionProp> & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
    }, string, {
    step: number;
    min: number;
    max: number;
    }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Input: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;
    Button: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<InputNumberButtonProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLButtonElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<InputNumberButtonProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<InputNumberButtonProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};

export declare type InputNumberBaseProps = {
    min?: number;
    max?: number;
    step?: number;
} & InputBaseProps;

export declare type InputNumberButtonAction = 'decrement' | 'increment';

export declare interface InputNumberButtonProps {
    action: InputNumberButtonAction;
}

export declare type InputNumberModelValue = number;

export declare type InputNumberMousewheel = boolean | number;

export declare const InputNumberPlugin: Plugin_2;

export declare type InputNumberProps = {
    mousewheel?: InputNumberMousewheel;
} & InputNumberBaseProps & Partial<DirectionProp> & Partial<ThemeProp> & Partial<SizeProp>;

export declare interface InputNumberRootContext {
    props: MaybeRefOrGetter<InputNumberProps>;
    step: MaybeRefOrGetter<number>;
    modelValue: MaybeRefOrGetter<InputNumberModelValue>;
    isDisabled: MaybeRefOrGetter<boolean>;
    isDecrementDisabled: MaybeRefOrGetter<boolean>;
    isIncrementDisabled: MaybeRefOrGetter<boolean>;
    handleDecrement: VoidFunction;
    handleIncrement: VoidFunction;
    setModelValue: (value: InputNumberModelValue) => void;
}

export declare const InputPassword: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue: InputModelValue;
        } & InputPasswordProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: InputModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: InputModelValue) => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        modelValue: InputModelValue;
        } & InputPasswordProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: InputModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    modelValue: InputModelValue;
    } & InputPasswordProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: InputModelValue) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: InputModelValue) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: Readonly<InputSlots> & InputSlots;
    });
};

export declare type InputPasswordNativeType = Extract<InputNativeType, 'text' | 'password'>;

export declare const InputPasswordPlugin: Plugin_2;

export declare type InputPasswordProps = Omit<InputProps, 'type' | 'nativeType' | 'inputMode' | 'cols' | 'rows'>;

export declare const InputPlugin: Plugin_2;

export declare type InputProps = {
    type?: InputType;
    clearable?: boolean;
    loading?: boolean;
} & InputBaseProps & Partial<InputNativeProps> & Partial<InputTextareaProps> & Partial<ThemeProp> & Partial<SizeProp>;

export declare const InputRange: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue: InputRangeModelValue;
        } & {
        min?: number;
        max?: number;
        step?: number;
        } & InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: InputRangeModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: InputRangeModelValue) => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        modelValue: InputRangeModelValue;
        } & {
        min?: number;
        max?: number;
        step?: number;
        } & InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: InputRangeModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    modelValue: InputRangeModelValue;
    } & {
    min?: number;
    max?: number;
    step?: number;
    } & InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
    "onUpdate:modelValue"?: ((value: InputRangeModelValue) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: InputRangeModelValue) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Slider: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;
};

export declare type InputRangeModelValue = InputRangeValue | [InputRangeValue, InputRangeValue];

export declare type InputRangeProps = {
    min?: number;
    max?: number;
    step?: number;
} & InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>;

export declare interface InputRangeRootContext {
    props: MaybeRefOrGetter<InputRangeProps>;
    isDisabled: MaybeRefOrGetter<boolean>;
}

export declare type InputRangeValue = number;

export declare interface InputRootContext {
    props: MaybeRefOrGetter<InputProps>;
    modelValue: MaybeRefOrGetter<InputModelValue>;
    isDisabled: MaybeRefOrGetter<boolean>;
    setFocus: (payload: boolean) => void;
    setModelValue: (value: InputModelValue) => void;
    reset: VoidFunction;
    emit: EmitFn<InputEmits>;
}

export declare interface InputScopedSlot {
    isTextarea: boolean;
    isFocus: boolean;
    hasValue: boolean;
    loading: boolean;
    isValid: boolean;
    isInvalid: boolean;
}

export declare interface InputSlots {
    default?: (props: InputScopedSlot) => Array<VNode>;
    before?: (props: InputScopedSlot) => Array<VNode>;
    after?: (props: InputScopedSlot) => Array<VNode>;
}

export declare const InputTags: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue: InputTagsModelValue;
        } & InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: InputTagsModelValue) => any) | undefined;
        onAddTag?: ((payload: InputTagsValue) => any) | undefined;
        onRemoveTag?: ((payload: InputTagsValue) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: InputTagsModelValue) => any;
        addTag: (payload: InputTagsValue) => any;
        removeTag: (payload: InputTagsValue) => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        modelValue: InputTagsModelValue;
        } & InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: InputTagsModelValue) => any) | undefined;
        onAddTag?: ((payload: InputTagsValue) => any) | undefined;
        onRemoveTag?: ((payload: InputTagsValue) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    modelValue: InputTagsModelValue;
    } & InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
    "onUpdate:modelValue"?: ((value: InputTagsModelValue) => any) | undefined;
    onAddTag?: ((payload: InputTagsValue) => any) | undefined;
    onRemoveTag?: ((payload: InputTagsValue) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: InputTagsModelValue) => any;
    addTag: (payload: InputTagsValue) => any;
    removeTag: (payload: InputTagsValue) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Input: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;
    Tags: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;
};

export declare interface InputTagsEmits {
    addTag: [payload: InputTagsValue];
    removeTag: [payload: InputTagsValue];
}

export declare type InputTagsModelValue = Array<InputTagsValue>;

export declare type InputTagsProps = InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>;

export declare interface InputTagsRootContext {
    props: MaybeRefOrGetter<InputTagsProps>;
    modelValue: MaybeRefOrGetter<InputTagsModelValue>;
    isDisabled: MaybeRefOrGetter<boolean>;
}

export declare type InputTagsValue = string | number;

export declare interface InputTextareaProps extends InputBaseProps {
    rows?: HTMLTextAreaElement['rows'];
    cols?: HTMLTextAreaElement['cols'];
}

export declare type InputType = ValueOf<typeof InputTypes>;

export declare const InputTypes: Readonly<{
    readonly INPUT: "input";
    readonly TEXTAREA: "textarea";
}>;

export declare const IntersectionPresets: Readonly<{
    LAZY_IMAGE: {
        threshold: number;
        rootMargin: string;
    };
    /** Для бесконечного скролла */
    INFINITE_SCROLL: {
        threshold: number;
        rootMargin: string;
    };
    /** Для отслеживания видимости 50% элемента */
    HALF_VISIBLE: {
        threshold: number;
    };
    /** Для точного определения полной видимости */
    FULL_VISIBLE: {
        threshold: number;
    };
    /** Для пошагового отслеживания видимости */
    STEPPED: {
        threshold: number[];
    };
}>;

export declare type IPluralWords = [string, string, string];

/**
 * @description `isBoolean` - Проверка переданного значения на boolean тип
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — boolean значение, иначе — false.
 * @example
 *
 * isBoolean(3); // => false
 * isBoolean(0); // => false
 * isBoolean(true); // => true
 * isBoolean(false); // => true
 */
export declare function isBoolean(value: unknown): value is boolean;

/**
 * @description `isEmpty` - Проверка переданного значения на пустоту
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — пустое, иначе — false.
 * @example
 * isEmpty(undefined); // => true
 * isEmpty(null); // => true
 * isEmpty(''); // => true
 * isEmpty([]); // => true
 * isEmpty({}); // => true
 * isEmpty(0); // => false
 * isEmpty(false); // => false
 * isEmpty(new Date()); // => false
 * isEmpty(new Map()); // => true
 * isEmpty(new Set()); // => true
 */
export declare function isEmpty(value: unknown): boolean;

/**
 * @description `isFunction` - Проверка переданного значения на функцию
 * @param {unknown} value - Значение для проверки.
 * @returns {boolean} - Возвращает true, если значение является функцией; иначе false.
 * @example
 * isFunction(3); // => false
 * isFunction({}); // => false
 * isFunction('3'); // => false
 * isFunction(function () {}); // => true
 * isFunction(() => {}); // => true
 * isFunction(class {}); // => true
 * isFunction(null); // => false
 * isFunction(undefined); // => false
 */
export declare function isFunction(value: unknown): value is (...args: unknown[]) => unknown;

/**
 * @description `isNull` - Проверка переданного значения на null
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — null, иначе — false.
 * @example
 * isNull(null); // => true
 * isNull(undefined); // => false
 * isNull(''); // => false
 * isNull([]); // => false
 * isNull({}); // => false
 */
export declare function isNull(value: unknown): value is null;

/**
 * @description `isNumber` - Проверка переданного значения на число
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — число, иначе — false.
 * @example
 *
 * isNumber(3); // => true
 * isNumber(Number.MIN_VALUE); // => true
 * isNumber(Infinity); // => true
 * isNumber(NaN); // => false
 * isNumber('3'); // => false
 * isNumber(new Number(5)); // => true
 */
export declare function isNumber(value: unknown): value is number;

/**
 * @description `isObject` - Проверка переданного значения на объект
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — объект, иначе — false.
 * @example
 *
 * isObject({});
 * // => true
 *
 * isObject(1);
 * // => false
 *
 * isObject([]);
 * // => false
 */
export declare function isObject(value: unknown): value is Record<string, unknown>;

/**
 * @description `isString` - Проверка переданного значения на строку
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — строка, иначе — false.
 * @example
 *
 * isString(3);
 * // => false
 *
 * isString('3');
 * // => true
 */
export declare function isString(value: unknown): value is string;

/**
 * @description `isUndefined` - Проверка переданного значения на undefined
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — undefined, иначе — false.
 * @example
 *
 * isUndefined(undefined); // => true
 * isUndefined('undefined'); // => false
 */
export declare function isUndefined(value: unknown): value is undefined;

export declare type IUseToggle = [Ref<boolean>, (payload: boolean) => void, VoidFunction];

declare type IVDividerSlots = {
    default?: UnscopedSlot;
};

export declare interface IVFormItemProps extends FormItemProps {
    title?: string;
}

export declare interface IVInplaceEmits {
    open: [];
    close: [];
}

export declare interface IVInplaceSlots {
    display?: (props: {
        open: VoidFunction;
    }) => Array<VNode>;
    content?: (props: {
        close: VoidFunction;
    }) => Array<VNode>;
}

export declare interface IVInputCodeProps extends InputCodeProps {
    length?: number;
}

export declare interface IVModalProps extends ModalProps {
    title?: string;
}

export declare interface IVModalSlots {
    default?: UnscopedSlot;
    header?: UnscopedSlot;
    footer?: UnscopedSlot;
}

export declare const Layout: {
    Root: {
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
        $slots: Readonly<LayoutSlots> & LayoutSlots;
    });
    Body: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLElement, ComponentProvideOptions, {
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

export declare const LayoutPlugin: Plugin_2;

export declare interface LayoutSlots {
    default?: UnscopedSlot;
    header?: UnscopedSlot;
    footer?: UnscopedSlot;
}

export declare type Listeners<T> = {
    [K in keyof T]: T[K] extends (...args: infer P) => void ? (...args: P) => EmitReturn<T[K]> : never;
};

export declare const LoadingPlugin: Plugin_2;

export declare interface LocaleTranslation {
    [key: string]: string | LocaleTranslation;
}

export declare type Maybe<T> = T | undefined;

export declare type MaybeArray<T> = T | Array<T>;

export declare type MaybeNull<T> = T | null;

export declare const Menu: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<MenuProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<MenuProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<MenuProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Link: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<Partial<PrimitiveProps>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        as: keyof HTMLElementTagNameMap | Component;
        }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<Partial<PrimitiveProps>> & Readonly<{}>, {}, {}, {}, {}, {
        as: keyof HTMLElementTagNameMap | Component;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<Partial<PrimitiveProps>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    as: keyof HTMLElementTagNameMap | Component;
    }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};

export declare type MenuLinkProps = Partial<PrimitiveProps>;

export declare type MenuProps = Partial<DirectionProp> & Partial<ThemeProp> & Partial<SizeProp>;

export declare const Modal: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue: boolean;
        } & {
        position?: ModalPosition;
        appendToBody?: boolean;
        } & Partial<SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        onOpened?: ((payload: Element) => any) | undefined;
        onClosed?: ((payload: Element) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => any;
        close: () => any;
        open: () => any;
        opened: (payload: Element) => any;
        closed: (payload: Element) => any;
        }, PublicProps, {
        position: ModalPosition;
        appendToBody: boolean;
        }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        modelValue: boolean;
        } & {
        position?: ModalPosition;
        appendToBody?: boolean;
        } & Partial<SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        onOpened?: ((payload: Element) => any) | undefined;
        onClosed?: ((payload: Element) => any) | undefined;
        }>, {}, {}, {}, {}, {
        position: ModalPosition;
        appendToBody: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    modelValue: boolean;
    } & {
    position?: ModalPosition;
    appendToBody?: boolean;
    } & Partial<SizeProp>> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    onOpened?: ((payload: Element) => any) | undefined;
    onClosed?: ((payload: Element) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
    close: () => any;
    open: () => any;
    opened: (payload: Element) => any;
    closed: (payload: Element) => any;
    }, string, {
    position: ModalPosition;
    appendToBody: boolean;
    }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Body: {
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
    Close: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLButtonElement, ComponentProvideOptions, {
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
    Header: {
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
    Footer: {
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
    Title: {
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
    Content: {
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
    Dialog: {
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

export declare interface ModalEmits {
    opened: [payload: Element];
    closed: [payload: Element];
    open: [];
    close: [];
}

export declare const ModalPlugin: Plugin_2;

export declare type ModalPosition = 'top' | 'center' | 'bottom';

export declare type ModalProps = {
    position?: ModalPosition;
    appendToBody?: boolean;
} & Partial<SizeProp>;

export declare interface ModalRootContext {
    props: MaybeRefOrGetter<ModalProps>;
    close: VoidFunction;
}

/**
 * @description `omit` - Функция создает новый объект, который содержит все свойства исходного объекта, за исключением указанных ключей. Это полезно для исключения ненужных свойств из объекта.
 * @param {object} object Исходный объект, из которого будут исключаться свойства.
 * @param {array} keys Массив ключей, которые нужно исключить из исходного объекта.
 * @returns {object} Новый объект, содержащий все свойства исходного объекта, кроме тех, ключи которых указаны в массиве keys
 * @example
 *
 * omit({
 *   prop1: 'value1',
 *   prop2: 'value2',
 *   prop3: 'value3',
 *   prop4: 'value4',
 * }, ['prop1', 'prop4']);
 * // => { prop2: 'value2', prop3: 'value3' }
 *
 */
export declare function omit<O extends Record<string, unknown>, K extends keyof O>(object: O, keys: Array<K>): Omit<O, K>;

export declare interface OptionInstance {
    id: string;
    props: OptionProps;
}

export declare interface OptionProps {
    value: OptionValue;
    title?: string;
    disabled?: boolean;
}

export declare interface OptionScopedSlots {
    isActive: boolean;
    isDisabled: boolean;
}

export declare interface OptionSlots {
    default?: (props: OptionScopedSlots) => Array<VNode>;
}

export declare type OptionValue = string;

/**
 * @description `pick` - Функция создает новый объект, который содержит только указанные ключи из исходного объекта. Это полезно для извлечения подмножества свойств объекта.
 * @param {object} object Исходный объект, из которого будут извлекаться свойства.
 * @param {array} keys Массив ключей, которые нужно извлечь из исходного объекта.
 * @returns {object} Новый объект, содержащий только те свойства исходного объекта, ключи которых указаны в массиве keys
 * @example
 *
 * pick({
 *   prop1: 'value1',
 *   prop2: 'value2',
 *   prop3: 'value3',
 *   prop4: 'value4',
 * }, ['prop1', 'prop4']);
 * // => { prop1: 'value1', prop4: 'value4' }
 *
 */
export declare function pick<O extends Record<string, unknown>, K extends keyof O>(object: O, keys: K[]): Pick<O, K>;

export declare const Position: Readonly<{
    readonly top: "top";
    readonly left: "left";
    readonly right: "right";
    readonly center: "center";
    readonly bottom: "bottom";
}>;

export declare type _Position = ValueOf<typeof Position>;

export declare interface PositionProp {
    position: _Position;
}

export declare const Primitive: {
    Root: DefineComponent<ExtractPropTypes<    {
    asChild: {
    type: BooleanConstructor;
    default: boolean;
    };
    as: {
    type: PropType<PrimitiveProps["as"]>;
    default: string;
    };
    }>, () => VNode<RendererNode, RendererElement, {
    [key: string]: any;
    }>, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
    asChild: {
    type: BooleanConstructor;
    default: boolean;
    };
    as: {
    type: PropType<PrimitiveProps["as"]>;
    default: string;
    };
    }>> & Readonly<{}>, {
    asChild: boolean;
    as: keyof HTMLElementTagNameMap | Component;
    }, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
};

export declare type PrimitiveProps = {
    asChild: boolean;
    as: keyof HTMLElementTagNameMap | Component;
};

export declare const Radio: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue: RadioModelValue;
        } & {
        disabled?: boolean;
        value: RadioValue;
        } & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        onChange?: ((value: RadioValue) => any) | undefined;
        "onUpdate:modelValue"?: ((value: RadioModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        change: (value: RadioValue) => any;
        "update:modelValue": (value: RadioModelValue) => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLLabelElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        modelValue: RadioModelValue;
        } & {
        disabled?: boolean;
        value: RadioValue;
        } & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        onChange?: ((value: RadioValue) => any) | undefined;
        "onUpdate:modelValue"?: ((value: RadioModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    modelValue: RadioModelValue;
    } & {
    disabled?: boolean;
    value: RadioValue;
    } & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
    onChange?: ((value: RadioValue) => any) | undefined;
    "onUpdate:modelValue"?: ((value: RadioModelValue) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (value: RadioValue) => any;
    "update:modelValue": (value: RadioModelValue) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Indicator: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLSpanElement, ComponentProvideOptions, {
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
        $slots: Readonly<RadioIndicatorSlots> & RadioIndicatorSlots;
    });
    Title: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLSpanElement, ComponentProvideOptions, {
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
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};

export declare interface RadioEmits {
    change: [value: RadioValue];
}

export declare const RadioGroupPlugin: Plugin_2;

export declare type RadioGroupProps = Partial<DirectionProp>;

export declare interface RadioIndicatorScopedSlot {
    isDisabled: boolean;
    isActive: boolean;
    isValid: boolean;
    isInvalid: boolean;
}

export declare interface RadioIndicatorSlots {
    default?: (props: RadioIndicatorScopedSlot) => Array<VNode>;
}

export declare type RadioModelValue = Maybe<RadioValue>;

export declare const RadioPlugin: Plugin_2;

export declare type RadioProps = {
    disabled?: boolean;
    value: RadioValue;
} & Partial<ThemeProp> & Partial<SizeProp>;

export declare interface RadioRootContext {
    props: MaybeRefOrGetter<RadioProps>;
    modelValue: MaybeRefOrGetter<RadioModelValue>;
    isActive: MaybeRefOrGetter<boolean>;
    isDisabled: MaybeRefOrGetter<boolean>;
    isValid: MaybeRefOrGetter<boolean>;
    isInvalid: MaybeRefOrGetter<boolean>;
}

export declare type RadioValue = number | string;

export declare function renderSlotFragments(children?: Array<VNode>): Array<VNode>;

export declare const RowPlugin: Plugin_2;

export declare type RowProps = {
    guttersX?: boolean;
    guttersY?: boolean;
} & FlexProps;

export declare const ruRU: LocaleTranslation;

export declare const Scrollbar: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<ScrollbarProps> & Readonly<{
        onMousedown?: ((payload: MouseEvent) => any) | undefined;
        onMouseleave?: ((payload: MouseEvent) => any) | undefined;
        onMousemove?: ((payload: MouseEvent) => any) | undefined;
        onMouseup?: ((payload: MouseEvent) => any) | undefined;
        onScroll?: ((payload: Event) => any) | undefined;
        onScrollEndY?: (() => any) | undefined;
        onScrollEndX?: (() => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        mousedown: (payload: MouseEvent) => any;
        mouseleave: (payload: MouseEvent) => any;
        mousemove: (payload: MouseEvent) => any;
        mouseup: (payload: MouseEvent) => any;
        scroll: (payload: Event) => any;
        scrollEndY: () => any;
        scrollEndX: () => any;
        }, PublicProps, {
        vertical: boolean;
        draggableMultiplier: number;
        infiniteScrollOffset: number;
        debounceDelay: number;
        }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {
        scrollbar: HTMLDivElement;
        content: HTMLDivElement;
        }, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<ScrollbarProps> & Readonly<{
        onMousedown?: ((payload: MouseEvent) => any) | undefined;
        onMouseleave?: ((payload: MouseEvent) => any) | undefined;
        onMousemove?: ((payload: MouseEvent) => any) | undefined;
        onMouseup?: ((payload: MouseEvent) => any) | undefined;
        onScroll?: ((payload: Event) => any) | undefined;
        onScrollEndY?: (() => any) | undefined;
        onScrollEndX?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
        vertical: boolean;
        draggableMultiplier: number;
        infiniteScrollOffset: number;
        debounceDelay: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<ScrollbarProps> & Readonly<{
    onMousedown?: ((payload: MouseEvent) => any) | undefined;
    onMouseleave?: ((payload: MouseEvent) => any) | undefined;
    onMousemove?: ((payload: MouseEvent) => any) | undefined;
    onMouseup?: ((payload: MouseEvent) => any) | undefined;
    onScroll?: ((payload: Event) => any) | undefined;
    onScrollEndY?: (() => any) | undefined;
    onScrollEndX?: (() => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    mousedown: (payload: MouseEvent) => any;
    mouseleave: (payload: MouseEvent) => any;
    mousemove: (payload: MouseEvent) => any;
    mouseup: (payload: MouseEvent) => any;
    scroll: (payload: Event) => any;
    scrollEndY: () => any;
    scrollEndX: () => any;
    }, string, {
    vertical: boolean;
    draggableMultiplier: number;
    infiniteScrollOffset: number;
    debounceDelay: number;
    }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};

export declare interface ScrollbarEmits {
    scrollEndY: [];
    scrollEndX: [];
    scroll: [payload: Event];
    mousedown: [payload: MouseEvent];
    mouseleave: [payload: MouseEvent];
    mouseup: [payload: MouseEvent];
    mousemove: [payload: MouseEvent];
}

export declare const ScrollbarPlugin: Plugin_2;

export declare type ScrollbarProps = {
    vertical?: boolean;
    horizontal?: boolean;
    draggableMultiplier?: number;
    infiniteScrollOffset?: number;
    debounceDelay?: number;
    draggable?: boolean;
    hidden?: boolean;
} & Partial<SizeProp> & Partial<ThemeProp>;

export declare const Section: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<SectionProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<SectionProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<SectionProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Header: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLElement, ComponentProvideOptions, {
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
    Title: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLHeadingElement, ComponentProvideOptions, {
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
    Footer: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLElement, ComponentProvideOptions, {
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
    Body: {
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

export declare interface SectionProps {
}

export declare const Select: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue: SelectModelValue;
        } & {
        disabled?: boolean;
        multiple?: boolean;
        clearable?: boolean;
        searchable?: boolean;
        loading?: boolean;
        placeholder?: string;
        } & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        onChange?: ((payload: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: SelectModelValue) => any) | undefined;
        onClear?: (() => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        onOpened?: ((payload: Element) => any) | undefined;
        onClosed?: ((payload: Element) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        change: (payload: string) => any;
        "update:modelValue": (value: SelectModelValue) => any;
        clear: () => any;
        close: () => any;
        open: () => any;
        opened: (payload: Element) => any;
        closed: (payload: Element) => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        modelValue: SelectModelValue;
        } & {
        disabled?: boolean;
        multiple?: boolean;
        clearable?: boolean;
        searchable?: boolean;
        loading?: boolean;
        placeholder?: string;
        } & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        onChange?: ((payload: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: SelectModelValue) => any) | undefined;
        onClear?: (() => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        onOpened?: ((payload: Element) => any) | undefined;
        onClosed?: ((payload: Element) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    modelValue: SelectModelValue;
    } & {
    disabled?: boolean;
    multiple?: boolean;
    clearable?: boolean;
    searchable?: boolean;
    loading?: boolean;
    placeholder?: string;
    } & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
    onChange?: ((payload: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: SelectModelValue) => any) | undefined;
    onClear?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    onOpened?: ((payload: Element) => any) | undefined;
    onClosed?: ((payload: Element) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (payload: string) => any;
    "update:modelValue": (value: SelectModelValue) => any;
    clear: () => any;
    close: () => any;
    open: () => any;
    opened: (payload: Element) => any;
    closed: (payload: Element) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Option: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<OptionProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<OptionProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<OptionProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: Readonly<OptionSlots> & OptionSlots;
    });
    Trigger: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
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
        $slots: Readonly<SelectTriggerSlots> & SelectTriggerSlots;
    });
    Dropdown: {
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
    Value: {
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
    Scrollbar: {
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

export declare interface SelectEmits {
    change: [payload: OptionValue];
    opened: [payload: Element];
    closed: [payload: Element];
    open: [];
    close: [];
    clear: [];
}

export declare type SelectModelValue = MaybeArray<OptionValue>;

export declare const SelectPlugin: Plugin_2;

export declare type SelectProps = {
    disabled?: boolean;
    multiple?: boolean;
    clearable?: boolean;
    searchable?: boolean;
    loading?: boolean;
    placeholder?: string;
} & Partial<ThemeProp> & Partial<SizeProp>;

export declare interface SelectRootContext {
    activeOption: MaybeRefOrGetter<Maybe<OptionInstance>>;
    activeOptions: MaybeRefOrGetter<Array<OptionInstance>>;
    isOpen: MaybeRefOrGetter<boolean>;
    hasValue: MaybeRefOrGetter<boolean>;
    props: MaybeRefOrGetter<SelectProps>;
    modelValue: MaybeRefOrGetter<SelectModelValue>;
    isDisabled: MaybeRefOrGetter<boolean>;
    open: () => void;
    close: () => void;
    toggle: () => void;
    setModelValue: (value: OptionValue) => void;
    registerOption: (option: OptionInstance) => void;
    unregisterOption: (id: string) => void;
}

export declare interface SelectTriggerScopedSlot {
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export declare interface SelectTriggerSlots {
    default: (props: SelectTriggerScopedSlot) => Array<VNode>;
}

export declare type Size = ValueOf<typeof Sizes>;

export declare interface SizeProp {
    size: Size;
}

export declare const Sizes: Readonly<{
    readonly MINI: "mini";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
    readonly BIG: "big";
    readonly HUGE: "huge";
    readonly MASSIVE: "massive";
}>;

export declare const Switch: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue: SwitchModelValue;
        } & {
        disabled?: boolean;
        } & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLLabelElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<{
        modelValue: SwitchModelValue;
        } & {
        disabled?: boolean;
        } & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
    modelValue: SwitchModelValue;
    } & {
    disabled?: boolean;
    } & Partial<ThemeProp> & Partial<SizeProp>> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Indicator: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLSpanElement>;
    Title: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLSpanElement, ComponentProvideOptions, {
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

export declare type SwitchModelValue = boolean;

export declare const SwitchPlugin: Plugin_2;

export declare type SwitchProps = {
    disabled?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;

export declare interface SwitchRootContext {
    props: MaybeRefOrGetter<SwitchProps>;
    isActive: MaybeRefOrGetter<SwitchModelValue>;
    isDisabled: MaybeRefOrGetter<boolean>;
    isValid: MaybeRefOrGetter<boolean>;
    isInvalid: MaybeRefOrGetter<boolean>;
}

export declare const Tag: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<TagProps> & Readonly<{
        onDelete?: ((payload: Maybe<TagValue>) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        delete: (payload: Maybe<TagValue>) => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<TagProps> & Readonly<{
        onDelete?: ((payload: Maybe<TagValue>) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<TagProps> & Readonly<{
    onDelete?: ((payload: Maybe<TagValue>) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    delete: (payload: Maybe<TagValue>) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Group: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};

export declare interface TagEmits {
    delete: [payload: Maybe<TagValue>];
}

export declare const TagGroupPlugin: Plugin_2;

export declare type TagGroupProps = Partial<DirectionProp>;

export declare const TagPlugin: Plugin_2;

export declare type TagProps = {
    value?: TagValue;
    canDelete?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;

export declare type TagValue = string | number;

declare const Text_2: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<TextProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        as: keyof HTMLElementTagNameMap | Component;
        }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
        }, Readonly<TextProps> & Readonly<{}>, {}, {}, {}, {}, {
        as: keyof HTMLElementTagNameMap | Component;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<TextProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    as: keyof HTMLElementTagNameMap | Component;
    }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};
export { Text_2 as Text }

export declare const TextPlugin: Plugin_2;

export declare type TextProps = {
    tag?: keyof HTMLElementTagNameMap;
    uppercase?: boolean;
    underline?: boolean;
    weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
} & Partial<ThemeProp> & Partial<SizeProp> & Partial<PrimitiveProps>;

export declare type Theme = ValueOf<typeof Themes>;

export declare interface ThemeProp {
    theme: Theme;
}

export declare const Themes: Readonly<{
    readonly BASE: "base";
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly TERTIARY: "tertiary";
    readonly DANGER: "danger";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
}>;

/**
 * @description `throttle` - Ограничивает частоту вызова функции, позволяя ей выполняться не чаще, чем один раз в указанный период времени.
 *
 * https://github.com/niksy/throttle-debounce/blob/master/throttle.js
 *
 * @template T - Тип функции, которую нужно ограничить.
 * @param {T} callback - Функция, вызов которой нужно ограничить.
 * @param {number} delay - Период времени в миллисекундах, в течение которого функция может быть вызвана только один раз.
 * @param {ThrottleOptions} [options={}] - Опции для настройки поведения функции throttle.
 * @returns {(...args: Parameters<T>) => void} - Обертка вокруг оригинальной функции, которая ограничивает её вызовы.
 *
 * @example
 * const throttledFn = throttle(() => console.log('Throttled'), 1000);
 * window.addEventListener('resize', throttledFn);
 */
export declare function throttle<T extends Array<unknown>>(callback: (...args: T) => unknown, delay: number, options?: ThrottleOptions): ThrottledFunction<T>;

export declare interface ThrottledFunction<T extends Array<unknown>> {
    (...args: T): void;
    cancel: (options?: CancelOptions) => void;
}

export declare interface ThrottleOptions {
    /**
     * Если установлено в true, то вызов функции после окончания периода ожидания не будет выполнен.
     * @default false
     */
    noTrailing?: boolean;
    /**
     * Если установлено в true, то первый вызов функции внутри периода ожидания не будет выполнен.
     * @default false
     */
    noLeading?: boolean;
    /**
     * Если установлено в true, то функция будет работать в режиме debounce.
     * @default undefined
     */
    debounceMode?: boolean;
}

export declare const TooltipPlugin: Plugin_2;

export declare type UnscopedSlot = () => Array<VNode>;

export declare function useAccordionItem(options: UseAccordionItemOptions): {
    isActive: ComputedRef<boolean>;
};

export declare interface UseAccordionItemOptions {
    accordionRootContext: MaybeNull<AccordionRootContext>;
    props: MaybeRefOrGetter<AccordionItemProps>;
}

export declare function useAccordionRoot(options: UseAccordionRootOptions): {
    setModelValue: (value: Maybe<AccordionValue>) => void;
};

export declare interface UseAccordionRootOptions {
    props: MaybeRefOrGetter<AccordionProps>;
    modelValue: MaybeRefOrGetter<AccordionModelValue>;
    onChange?: (payload: Maybe<AccordionValue>) => void;
    onChangeModel?: (payload: AccordionModelValue) => void;
}

export declare function useAccordionTrigger(options: UseAccordionTriggerOptions): {
    isDisabled: ComputedRef<boolean>;
    handleToggle: () => void;
};

export declare interface UseAccordionTriggerOptions {
    accordionRootContext: MaybeNull<AccordionRootContext>;
    accordionItemContext: MaybeNull<AccordionItemContext>;
}

/**
 * @description `useAnimatedNumber` — это пользовательский хук, который предназначен для анимации числа от начального до конечного значения.
 * @description Этот хук возвращает реактивное число и функцию для запуска анимации.
 * @description Анимация выполняется плавно в течение указанного времени.
 *
 * @returns {Object} Объект с двумя свойствами:
 * @returns {import('vue').Ref<number>} number - Текущее значение анимируемого числа.
 * @returns {function(start: number, end: number, duration: number)} animate - Функция для запуска анимации.
     *
     * @example
     * <template>
     *   <div>
     *     <p>Анимированное число: {{ number }}</p>
     *     <button @click="startAnimation">Запустить анимацию</button>
     *   </div>
     * </template>
     *
     * <script lang="ts" setup>
     *   const { number, animate } = useAnimatedNumber();
     *
     *   function startAnimation() {
     *     animate(0, 100, 2000); // Анимировать от 0 до 100 за 2 секунды
     *   }
     * </script>
     */
 export declare function useAnimatedNumber(): {
     number: Ref<number, number>;
     animate: (start: number, end: number, duration: number) => void;
 };

 export declare function useClipboard(): {};

 export declare function useConfigProviderRootContext(): ConfigProviderRootContext;

 /**
  * Создаёт объект обработчиков событий, проксирующих вызовы в переданный emit.
  * Удобно передавать подмножество эмитов в дочерний компонент через v-on="listeners".
  *
  * @template T - тип эмитов компонента (объект: имя события -> аргументы)
  * @param emit - функция emit из defineEmits
  * @param events - массив имён событий, которые нужно проксировать
  * @returns объект с полем listeners — объект обработчиков для v-on
  */
 export declare function useEmitProxy<T extends ComponentTypeEmits>(emit: EmitFn<T>, events: Array<keyof T>): {
     listeners: Listeners<T>;
 };

 export declare function useFormItem(options: UseFormItemOptions): {
     id: string;
     validationErrors: Ref<({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_key";
     readonly origin: "map" | "record";
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_element";
     readonly origin: "map" | "set";
     readonly key: unknown;
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_element";
     readonly origin: "map" | "set";
     readonly key: unknown;
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_key";
     readonly origin: "map" | "record";
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[][];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive?: true | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_key";
     readonly origin: "map" | "record";
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_element";
     readonly origin: "map" | "set";
     readonly key: unknown;
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[][];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive?: true | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_element";
     readonly origin: "map" | "set";
     readonly key: unknown;
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[][];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive?: true | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_element";
     readonly origin: "map" | "set";
     readonly key: unknown;
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_key";
     readonly origin: "map" | "record";
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[][];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive?: true | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_key";
     readonly origin: "map" | "record";
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[][];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive?: true | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[], z.core.$ZodIssue[] | ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_key";
     readonly origin: "map" | "record";
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_element";
     readonly origin: "map" | "set";
     readonly key: unknown;
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_element";
     readonly origin: "map" | "set";
     readonly key: unknown;
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_key";
     readonly origin: "map" | "record";
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[][];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive?: true | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_key";
     readonly origin: "map" | "record";
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_element";
     readonly origin: "map" | "set";
     readonly key: unknown;
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[][];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive?: true | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_element";
     readonly origin: "map" | "set";
     readonly key: unknown;
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[][];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive?: true | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_element";
     readonly origin: "map" | "set";
     readonly key: unknown;
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_key";
     readonly origin: "map" | "record";
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[][];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive?: true | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_key";
     readonly origin: "map" | "record";
     readonly issues: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: ({
     readonly code: "invalid_type";
     readonly expected: z.core.$ZodInvalidTypeExpected;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_big";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly maximum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "too_small";
     readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
     readonly minimum: number | bigint;
     readonly inclusive?: boolean | undefined;
     readonly exact?: boolean | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_format";
     readonly format: z.core.$ZodStringFormats | (string & {});
     readonly pattern?: string | undefined;
     readonly input?: string | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "not_multiple_of";
     readonly divisor: number;
     readonly input?: number | bigint | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "unrecognized_keys";
     readonly keys: string[];
     readonly input?: Record<string, unknown> | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[][];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive?: true | undefined;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_union";
     readonly errors: [];
     readonly input?: unknown;
     readonly discriminator?: string | undefined | undefined;
     readonly inclusive: false;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | /*elided*/ any | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "invalid_value";
     readonly values: z.core.util.Primitive[];
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     } | {
     readonly code: "custom";
     readonly params?: Record<string, any> | undefined;
     readonly input?: unknown;
     readonly path: PropertyKey[];
     readonly message: string;
     })[]>;
     validationStatus: Ref<    {
     isError: boolean;
     isValidating: boolean;
     isSuccess: boolean;
     }, FormItemValidationStatus | {
     isError: boolean;
     isValidating: boolean;
     isSuccess: boolean;
     }>;
     isDisabled: ComputedRef<boolean>;
     isRequired: ComputedRef<boolean>;
     reset: () => void;
     validate: (silent?: boolean) => Promise<boolean>;
     clearValidateErrors: () => void;
     registerField: (newField: FormItemField) => void;
     unregisterField: () => void;
 };

 export declare interface UseFormItemOptions {
     formRootContext: MaybeNull<FormRootContext>;
     props: MaybeRefOrGetter<FormItemProps>;
     onValid?: VoidFunction;
     onInvalid?: VoidFunction;
 }

 export declare function useFormRoot<MODEL extends FormModel>(options: UseFormRootOptions<MODEL>): {
     isValid: Ref<boolean, boolean>;
     validate: (silent?: boolean) => Promise<boolean>;
     clearValidate: () => void;
     registerFormItem: (newFormItem: FormItemInstance) => void;
     unregisterFormItem: (id: string) => void;
     reset: () => void;
 };

 export declare interface UseFormRootOptions<MODEL extends FormModel> {
     modelValue: MaybeRefOrGetter<MODEL>;
     onValid?: VoidFunction;
     onInvalid?: VoidFunction;
 }

 /**
  * @description `useIntersectionObserver` — это пользовательский хук, который предназначен для отслеживания изменений видимости элемента в пределах области видимости (viewport) с помощью IntersectionObserver.
  * @param {TemplateRef<Element>} element - Ссылка на элемент, размеры которого нужно отслеживать.
  * @param {IntersectionObserverCallback} callback - Функция обратного вызова, которая будет вызвана при изменении видимости элемента.
  * @param {IntersectionObserverInit} [options] - Опциональные настройки для IntersectionObserver.
  * @returns {Function} stop - Метод для остановки наблюдения за элементом.
  *
  * @example
  * <template>
  *   <div ref="myElement">Элемент наблюдения</div>
  * </template>
  *
  * <script lang="ts" setup>
  *   const myElement = useTemplateRef<HTMLDivElement>('myElement');
  *
  *   const { stop } = useIntersectionObserver(myElement, handleIntersection);
  *
  *   function handleIntersection (entries: Array<IntersectionObserverEntry>) {
  *     if (isIntersecting) {
  *       alert('Я в поле видимости');
  *     }
  *   }
  *
  *   onBeforeUnmount(() => {
  *     stop();
  *   });
  * </script>
  */
 export declare function useIntersectionObserver(element: TemplateRef<Element>, callback: IntersectionObserverCallback, options?: IntersectionObserverInit): {
     stop: () => void;
 };

 export declare function useLoadImage(element: TemplateRef<Element>, source: UseLoadImageSource, options?: UseLoadImageOptions): {
     isLoaded: Ref<boolean, boolean>;
     hasError: Ref<boolean, boolean>;
     imageSrc: Ref<string, string>;
     imageSrcset: Ref<string, string>;
     imageSizes: Ref<string, string>;
     loadImage: () => void;
     stop: () => void;
 };

 export declare interface UseLoadImageOptions extends Pick<IntersectionObserverInit, 'rootMargin' | 'threshold'> {
     enableNativeLazyLoading?: boolean;
     immediate?: boolean;
 }

 export declare type UseLoadImageSource = string | {
     src: string;
     srcset?: string;
     sizes?: string;
 };

 /**
  * Функция предназначена для работы с множественными формами слов в зависимости от числового значения.
  * Она возвращает правильную форму слова на русском языке, основываясь на количестве.
  * Функция использует стандарт Intl.PluralRules для определения правила склонения.
  *
  * @example
  * const { plural } = usePlural(['яблоко', 'яблока', 'яблок']);
  *
  * console.log(plural(1));  // "яблоко"
  * console.log(plural(2));  // "яблока"
  * console.log(plural(5));  // "яблок"
  * console.log(plural(0));  // "яблок"
  * console.log(plural(-1));  // "undefined"
  * console.log(plural(NaN));  // "undefined"
  */
 export declare function usePlural(words: IPluralWords): {
     plural: (count: number) => string | undefined;
 };

 /**
  * @description `useScrollTo` — это функция, которая позволяет плавно прокручивать страницу к указанному элементу.
  * @description Она принимает в качестве аргумента элемент, к которому нужно прокрутить, и дополнительные параметры для настройки поведения прокрутки.
  *
  * @example
  * <template>
  *   <div ref="myElement">Hello, world!</button>
  * </template>
  *
  * <script lang="ts" setup>
  *   import { useTemplateRef } from 'vue';
  *
  *   const myElement = useTemplateRef<HTMLDivElement>();
  *
  *   function scrollToMyElement() {
  *     useScrollTo(myElement, { behavior: 'smooth' });
  *   }
  * </script>
  */
 export declare function useScrollTo(el: Element | Ref<Element> | Readonly<ShallowRef<Element | null>> | string, options?: ScrollIntoViewOptions): void;

 /**
  * @description `useToggle` — это пользовательский хук, который предназначен для управления состоянием булевой переменной с возможностью её переключения.
  *
  * @param {boolean} [initial=false] - Начальное значение состояния. По умолчанию false.
  *
  * @returns {IUseToggle} Массив, содержащий:
  * @returns {Ref<boolean>} state - Ссылка на текущее состояние (булевое значение).
  * @returns {Function} setState - Функция для установки значения состояния.
  * @returns {Function} toggleState - Функция для переключения значения состояния.
  *
  * @example
  * <template>
  *   <v-button @click="setState(false)">Скрыть</v-button>
  *   <v-button @click="setState(true)">Показать</v-button>
  *   <v-button @click="toggleState">Переключить</v-button>
  *
  *   <p v-if="state">Текст</p>
  * </template>
  *
  * <script lang="ts" setup>
  *   const [state, setState, toggleState] = useToggle();
  * </script>
  */
 export declare function useToggle(initial?: boolean): IUseToggle;

 /**
  * @description `useAnimatedNumber` — это пользовательский хук, который предназначен для отслеживания текущей позиции прокрутки окна браузера.
  * @description Этот хук возвращает реактивные ссылки на координаты прокрутки по оси X и Y,
  * @description а также функцию для установки прокрутки на заданные координаты.
  *
  * @returns {Object} Объект с тремя свойствами:
  * @returns {import('vue').Ref<number>} x - Текущая позиция прокрутки по оси X.
  * @returns {import('vue').Ref<number>} y - Текущая позиция прокрутки по оси Y.
  * @returns {function(ScrollToOptions): void} setScroll - Функция для установки прокрутки на заданные координаты.
  *
  * @example
  * <template>
  *   <div>
  *     <p>Позиция прокрутки по оси X: {{ x }}</p>
  *     <p>Позиция прокрутки по оси Y: {{ y }}</p>
  *     <button @click="scrollToTop">Прокрутить вверх</button>
  *   </div>
  * </template>
  *
  * <script lang="ts" setup>
  *   const { x, y, setScroll } = useWindowScroll();
  *
  *   function scrollToTop() {
  *     setScroll({
  *       top: 0,
  *       left: 0,
  *       behavior: 'smooth'
  *     });
  *   }
  * </script>
  */
 export declare function useWindowScroll(): {
     x: Ref<number, number>;
     y: Ref<number, number>;
     setScroll?: undefined;
 } | {
     x: Ref<number, number>;
     y: Ref<number, number>;
     setScroll: (options: ScrollToOptions) => void;
 };

 export declare const VAccordion: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, __VLS_TemplateResult_3["slots"]>;

 export declare const VAccordionItem: __VLS_WithTemplateSlots_4<typeof __VLS_component_4, __VLS_TemplateResult_4["slots"]>;

 export declare interface VAccordionItemProps extends AccordionItemProps {
     title?: string;
 }

 export declare interface VAccordionItemSlots extends AccordionItemSlots {
     title?: UnscopedSlot;
 }

 export declare type ValueOf<T> = T[keyof T];

 /**
  * Реестр иконок приложения: ключи — семантика (modalClose и т.д.), значения — render-функции.
  */
 export declare type VauIconRegistry = {
     modalClose?: IconRenderFn;
 };

 export declare const VauUI: Plugin_2;

 export declare const VButton: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

 export declare const VButtonGroup: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, __VLS_TemplateResult_2["slots"]>;

 export declare const VCheckbox: __VLS_WithTemplateSlots_16<typeof __VLS_component_16, __VLS_TemplateResult_16["slots"]>;

 export declare const VCheckboxGroup: __VLS_WithTemplateSlots_17<typeof __VLS_component_17, __VLS_TemplateResult_17["slots"]>;

 export declare const vClickOutside: ObjectDirective;

 export declare const VCol: __VLS_WithTemplateSlots_10<typeof __VLS_component_10, __VLS_TemplateResult_10["slots"]>;

 export declare const VConfigProvider: __VLS_WithTemplateSlots_24<typeof __VLS_component_24, __VLS_TemplateResult_24["slots"]>;

 export declare const VContainer: __VLS_WithTemplateSlots_8<typeof __VLS_component_8, __VLS_TemplateResult_8["slots"]>;

 export declare const VDivider: __VLS_WithTemplateSlots_25<typeof __VLS_component_25, __VLS_TemplateResult_25["slots"]>;

 export declare const VFlex: __VLS_WithTemplateSlots_26<typeof __VLS_component_26, __VLS_TemplateResult_26["slots"]>;

 export declare const VFlexItem: __VLS_WithTemplateSlots_27<typeof __VLS_component_27, __VLS_TemplateResult_27["slots"]>;

 export declare const VForm: <MODEL extends FormModel>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
     props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
         readonly "onUpdate:modelValue"?: ((value: MODEL) => any) | undefined;
         readonly onSubmit?: ((payload: FormSubmitEvent) => any) | undefined;
         readonly onInvalid?: (() => any) | undefined;
         readonly onValid?: (() => any) | undefined;
     } & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>, "onUpdate:modelValue" | "onSubmit" | "onInvalid" | "onValid"> & ({
         modelValue: MODEL;
     } & FormProps<MODEL>) & Partial<{}>> & PublicProps;
     expose(exposed: ShallowUnwrapRef<    {}>): void;
     attrs: any;
     slots: Readonly<FormSlots> & FormSlots;
     emit: (((evt: "submit", payload: FormSubmitEvent) => void) & ((evt: "invalid") => void) & ((evt: "valid") => void)) & ((evt: "update:modelValue", value: MODEL) => void);
 }>) => VNode & {
     __ctx?: Awaited<typeof __VLS_setup>;
 };

 export declare const VFormItem: __VLS_WithTemplateSlots_15<typeof __VLS_component_15, __VLS_TemplateResult_15["slots"]>;

 export declare const VInplace: __VLS_WithTemplateSlots_5<typeof __VLS_component_5, __VLS_TemplateResult_5["slots"]>;

 export declare const VInput: __VLS_WithTemplateSlots_18<typeof __VLS_component_18, __VLS_TemplateResult_18["slots"]>;

 export declare const VInputCode: DefineComponent<__VLS_PublicProps_5, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
 "update:modelValue": (value: InputCodeModelValue) => any;
 }, string, PublicProps, Readonly<__VLS_PublicProps_5> & Readonly<{
 "onUpdate:modelValue"?: ((value: InputCodeModelValue) => any) | undefined;
 }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

 export declare const VInputGroup: __VLS_WithTemplateSlots_28<typeof __VLS_component_28, __VLS_TemplateResult_28["slots"]>;

 export declare const VInputGroupAddon: __VLS_WithTemplateSlots_29<typeof __VLS_component_29, __VLS_TemplateResult_29["slots"]>;

 export declare const VInputNumber: DefineComponent<__VLS_PublicProps_6, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
 "update:modelValue": (value: number) => any;
 }, string, PublicProps, Readonly<__VLS_PublicProps_6> & Readonly<{
 "onUpdate:modelValue"?: ((value: number) => any) | undefined;
 }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

 export declare const VInputPassword: DefineComponent<__VLS_PublicProps_7, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
 "update:modelValue": (value: InputModelValue) => any;
 }, string, PublicProps, Readonly<__VLS_PublicProps_7> & Readonly<{
 "onUpdate:modelValue"?: ((value: InputModelValue) => any) | undefined;
 }>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

 export declare const VisiblePlugin: Plugin_2;

 export declare const VLayout: __VLS_WithTemplateSlots_7<typeof __VLS_component_7, __VLS_TemplateResult_7["slots"]>;

 export declare const vLoading: ObjectDirective;

 export declare const VMenu: __VLS_WithTemplateSlots_31<typeof __VLS_component_31, __VLS_TemplateResult_31["slots"]>;

 export declare const VMenuLink: __VLS_WithTemplateSlots_30<typeof __VLS_component_30, __VLS_TemplateResult_30["slots"]>;

 export declare const VModal: __VLS_WithTemplateSlots_6<typeof __VLS_component_6, __VLS_TemplateResult_6["slots"]>;

 export declare const VOption: __VLS_WithTemplateSlots_22<typeof __VLS_component_22, __VLS_TemplateResult_22["slots"]>;

 export declare const VRadio: __VLS_WithTemplateSlots_19<typeof __VLS_component_19, __VLS_TemplateResult_19["slots"]>;

 export declare const VRadioGroup: __VLS_WithTemplateSlots_20<typeof __VLS_component_20, __VLS_TemplateResult_20["slots"]>;

 export declare const VRow: __VLS_WithTemplateSlots_9<typeof __VLS_component_9, __VLS_TemplateResult_9["slots"]>;

 export declare const VScrollbar: __VLS_WithTemplateSlots_11<typeof __VLS_component_11, __VLS_TemplateResult_11["slots"]>;

 export declare const VSelect: __VLS_WithTemplateSlots_21<typeof __VLS_component_21, __VLS_TemplateResult_21["slots"]>;

 export declare const VSwitch: __VLS_WithTemplateSlots_23<typeof __VLS_component_23, __VLS_TemplateResult_23["slots"]>;

 export declare const VTag: __VLS_WithTemplateSlots_12<typeof __VLS_component_12, __VLS_TemplateResult_12["slots"]>;

 export declare const VTagGroup: __VLS_WithTemplateSlots_13<typeof __VLS_component_13, __VLS_TemplateResult_13["slots"]>;

 export declare const VText: __VLS_WithTemplateSlots_14<typeof __VLS_component_14, __VLS_TemplateResult_14["slots"]>;

 export declare const vTooltip: ObjectDirective;

 export declare const vVisible: ObjectDirective;

 export { }
