import { AccordionItemProps } from '../core';
import { AccordionItemSlots } from '../core';
import { AccordionModelValue } from '../core';
import { AccordionProps } from '../core';
import { AccordionValue } from '../core';
import { AllowedComponentProps } from 'vue';
import { AppContext } from 'vue';
import { ButtonProps } from '../core';
import { CheckboxModelValue } from '../core';
import { CheckboxProps } from '../core';
import { ColProps } from '../core';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ConfigProviderProps } from '../core';
import { DefineComponent } from 'vue';
import { DirectionProp } from '../core';
import { FlexAlignProp } from '../core';
import { FlexJustifyProp } from '../core';
import { FormItemProps } from '../core';
import { FormItemSlots } from '../core';
import { FormModel } from '../core';
import { FormProps } from '../core';
import { FormSlots } from '../core';
import { FormSubmitEvent } from '../core';
import { InputCodeModelValue } from '../core';
import { InputCodeProps } from '../core';
import { InputModelValue } from '../core';
import { InputNumberModelValue } from '../core';
import { InputNumberProps } from '../core';
import { InputPasswordProps } from '../core';
import { InputProps } from '../core';
import { InputSlots } from '../core';
import { LayoutSlots } from '../core';
import { Maybe } from '../core';
import { MaybeNull } from '../core';
import { ModelRef } from 'vue';
import { ObjectDirective } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PublicProps } from 'vue';
import { RadioModelValue } from '../core';
import { RadioProps } from '../core';
import { Ref } from 'vue';
import { RowProps } from '../core';
import { ScrollbarProps } from '../core';
import { ShallowUnwrapRef } from 'vue';
import { SizeProp } from '../core';
import { SwitchModelValue } from '../core';
import { SwitchProps } from '../core';
import { TagProps } from '../core';
import { TagValue } from '../core';
import { TextProps } from '../core';
import { ThemeProp } from '../core';
import { UnscopedSlot } from '../core';
import { ValueOf } from '../core';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<ButtonProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ButtonProps> & Readonly<{}>, {
type: HTMLButtonElement["type"];
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLButtonElement>;

declare const __VLS_component_10: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
close: () => any;
open: () => any;
}, string, PublicProps, Readonly<{}> & Readonly<{
onClose?: (() => any) | undefined;
onOpen?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

declare const __VLS_component_11: DefineComponent<__VLS_PublicProps_2, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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

declare const __VLS_component_12: DefineComponent<__VLS_PublicProps_3, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: boolean) => any;
close: () => any;
open: () => any;
opened: (payload: Element) => any;
closed: (payload: Element) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_3> & Readonly<{
"onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
onClose?: (() => any) | undefined;
onOpen?: (() => any) | undefined;
onOpened?: ((payload: Element) => any) | undefined;
onClosed?: ((payload: Element) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_13: DefineComponent<IVDropdownProps, {
setVisible: (payload: boolean) => void;
isVisible: Ref<boolean>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
close: () => any;
open: () => any;
opened: (payload: Element) => any;
closed: (payload: Element) => any;
}, string, PublicProps, Readonly<IVDropdownProps> & Readonly<{
onClose?: (() => any) | undefined;
onOpen?: (() => any) | undefined;
onOpened?: ((payload: Element) => any) | undefined;
onClosed?: ((payload: Element) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_14: DefineComponent<SizeProp, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<SizeProp> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_15: DefineComponent<ColProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ColProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_16: DefineComponent<RowProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<RowProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_17: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

declare const __VLS_component_18: DefineComponent<IVPlaceholderProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IVPlaceholderProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_19: DefineComponent<ScrollbarProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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

declare const __VLS_component_2: DefineComponent<Partial<DirectionProp>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_20: DefineComponent<__VLS_PublicProps_4, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (payload: IVTabsModelValue) => any;
"update:modelValue": (value: IVTabsModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_4> & Readonly<{
onChange?: ((payload: IVTabsModelValue) => any) | undefined;
"onUpdate:modelValue"?: ((value: IVTabsModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_21: DefineComponent<IVTabProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IVTabProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_22: DefineComponent<TagProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
delete: (payload: Maybe<TagValue>) => any;
}, string, PublicProps, Readonly<TagProps> & Readonly<{
onDelete?: ((payload: Maybe<TagValue>) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_23: DefineComponent<Partial<DirectionProp>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_24: DefineComponent<TextProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<TextProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_25: DefineComponent<IVFormItemProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
invalid: () => any;
valid: () => any;
}, string, PublicProps, Readonly<IVFormItemProps> & Readonly<{
onInvalid?: (() => any) | undefined;
onValid?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_26: DefineComponent<__VLS_PublicProps_5, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: CheckboxModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_5> & Readonly<{
"onUpdate:modelValue"?: ((value: CheckboxModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;

declare const __VLS_component_27: DefineComponent<Partial<DirectionProp>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_28: DefineComponent<__VLS_PublicProps_6, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: InputModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_6> & Readonly<{
"onUpdate:modelValue"?: ((value: InputModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_29: DefineComponent<__VLS_PublicProps_10, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: RadioModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_10> & Readonly<{
"onUpdate:modelValue"?: ((value: RadioModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;

declare const __VLS_component_3: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (payload: Maybe<AccordionValue>) => any;
"update:modelValue": (value: AccordionModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
onChange?: ((payload: Maybe<AccordionValue>) => any) | undefined;
"onUpdate:modelValue"?: ((value: AccordionModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_30: DefineComponent<Partial<DirectionProp>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Partial<DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_31: DefineComponent<__VLS_PublicProps_11, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: boolean) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_11> & Readonly<{
"onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;

declare const __VLS_component_32: DefineComponent<ConfigProviderProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ConfigProviderProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_33: DefineComponent<IVOverlayProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IVOverlayProps> & Readonly<{}>, {
mask: boolean;
blur: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_34: DefineComponent<IVProgressProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IVProgressProps> & Readonly<{}>, {
showValue: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_35: DefineComponent<IVDividerProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IVDividerProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_36: DefineComponent<IVFlexProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IVFlexProps> & Readonly<{}>, {
wrap: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_37: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

declare const __VLS_component_38: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

declare const __VLS_component_39: DefineComponent<IVCountdownProps, {
start: VoidFunction;
abort: VoidFunction;
end: VoidFunction;
restart: VoidFunction;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
progress: (payload: IVCountdownProgress) => any;
abort: () => any;
start: () => any;
end: () => any;
}, string, PublicProps, Readonly<IVCountdownProps> & Readonly<{
onProgress?: ((payload: IVCountdownProgress) => any) | undefined;
onAbort?: (() => any) | undefined;
onStart?: (() => any) | undefined;
onEnd?: (() => any) | undefined;
}>, {
interval: number;
now: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_4: DefineComponent<VAccordionItemProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<VAccordionItemProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_5: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

declare const __VLS_component_6: DefineComponent<IVAlertProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IVAlertProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_7: DefineComponent<IVAffixProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IVAffixProps> & Readonly<{}>, {
disabled: boolean;
offsetTop: number;
offsetBottom: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
root: HTMLDivElement;
content: HTMLDivElement;
}, HTMLDivElement>;

declare const __VLS_component_8: DefineComponent<IVBadgeProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IVBadgeProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_9: DefineComponent<IVCollapseProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (payload: boolean) => any;
}, string, PublicProps, Readonly<IVCollapseProps> & Readonly<{
onChange?: ((payload: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_2<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Props = AccordionProps;

declare type __VLS_Props_10 = RadioProps;

declare type __VLS_Props_11 = SwitchProps;

declare type __VLS_Props_2 = IVModalProps;

declare type __VLS_Props_3 = IVDrawerProps;

declare type __VLS_Props_4 = IVTabsProps;

declare type __VLS_Props_5 = CheckboxProps;

declare type __VLS_Props_6 = InputProps;

declare type __VLS_Props_7 = IVInputCodeProps;

declare type __VLS_Props_8 = InputNumberProps;

declare type __VLS_Props_9 = InputPasswordProps;

declare type __VLS_PublicProps = {
    modelValue: AccordionModelValue;
} & __VLS_Props;

declare type __VLS_PublicProps_10 = {
    modelValue: RadioModelValue;
} & __VLS_Props_10;

declare type __VLS_PublicProps_11 = {
    modelValue: SwitchModelValue;
} & __VLS_Props_11;

declare type __VLS_PublicProps_2 = {
    modelValue: boolean;
} & __VLS_Props_2;

declare type __VLS_PublicProps_3 = {
    modelValue: boolean;
} & __VLS_Props_3;

declare type __VLS_PublicProps_4 = {
    modelValue: IVTabsModelValue;
} & __VLS_Props_4;

declare type __VLS_PublicProps_5 = {
    modelValue: CheckboxModelValue;
} & __VLS_Props_5;

declare type __VLS_PublicProps_6 = {
    modelValue: InputModelValue;
} & __VLS_Props_6;

declare type __VLS_PublicProps_7 = {
    modelValue: InputCodeModelValue;
} & __VLS_Props_7;

declare type __VLS_PublicProps_8 = {
    modelValue?: InputNumberModelValue;
} & __VLS_Props_8;

declare type __VLS_PublicProps_9 = {
    modelValue: InputModelValue;
} & __VLS_Props_9;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};

declare function __VLS_template_10(): {
    attrs: Partial<{}>;
    slots: Readonly<IVInplaceSlots> & IVInplaceSlots;
    refs: {};
    rootEl: any;
};

declare function __VLS_template_11(): {
    attrs: Partial<{}>;
    slots: Readonly<IVModalSlots> & IVModalSlots;
    refs: {};
    rootEl: any;
};

declare function __VLS_template_12(): {
    attrs: Partial<{}>;
    slots: Readonly<IVDrawerSlots> & IVDrawerSlots;
    refs: {};
    rootEl: any;
};

declare function __VLS_template_13(): {
    attrs: Partial<{}>;
    slots: Readonly<IVDropdownSlots> & IVDropdownSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_14(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_15(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_16(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_17(): {
    attrs: Partial<{}>;
    slots: Readonly<LayoutSlots> & LayoutSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_18(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_19(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
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
    slots: Readonly<IVTabSlots> & IVTabSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_22(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_23(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
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
    slots: Readonly<FormItemSlots> & FormItemSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_26(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
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
    slots: Readonly<InputSlots> & InputSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_29(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
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
    rootEl: HTMLDivElement;
};

declare function __VLS_template_31(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
};

declare function __VLS_template_32(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};

declare function __VLS_template_33(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_34(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_35(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_36(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_37(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_38(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_39(): {
    attrs: Partial<{}>;
    slots: Readonly<IVCountdownSlots> & IVCountdownSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_4(): {
    attrs: Partial<{}>;
    slots: Readonly<VAccordionItemSlots> & VAccordionItemSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_5(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_6(): {
    attrs: Partial<{}>;
    slots: Readonly<IVAlertSlots> & IVAlertSlots;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_7(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        root: HTMLDivElement;
        content: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};

declare function __VLS_template_8(): {
    attrs: Partial<{}>;
    slots: Readonly<IVBadgeSlots> & IVBadgeSlots;
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

declare type __VLS_TemplateResult_32 = ReturnType<typeof __VLS_template_32>;

declare type __VLS_TemplateResult_33 = ReturnType<typeof __VLS_template_33>;

declare type __VLS_TemplateResult_34 = ReturnType<typeof __VLS_template_34>;

declare type __VLS_TemplateResult_35 = ReturnType<typeof __VLS_template_35>;

declare type __VLS_TemplateResult_36 = ReturnType<typeof __VLS_template_36>;

declare type __VLS_TemplateResult_37 = ReturnType<typeof __VLS_template_37>;

declare type __VLS_TemplateResult_38 = ReturnType<typeof __VLS_template_38>;

declare type __VLS_TemplateResult_39 = ReturnType<typeof __VLS_template_39>;

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

declare type __VLS_WithTemplateSlots_32<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_33<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_34<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_35<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_36<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_37<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_38<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_39<T, S> = T & {
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

export declare const AccordionPlugin: Plugin_2;

export declare const AffixPlugin: Plugin_2;

export declare const AlertPlugin: Plugin_2;

export declare const AvatarGroupPlugin: Plugin_2;

export declare const AvatarPlugin: Plugin_2;

export declare const BadgePlugin: Plugin_2;

export declare const BreadcrumbsPlugin: Plugin_2;

export declare const ButtonGroupPlugin: Plugin_2;

export declare const ButtonPlugin: Plugin_2;

export declare const CalendarPlugin: Plugin_2;

export declare const CheckboxGroupPlugin: Plugin_2;

export declare const CheckboxPlugin: Plugin_2;

export declare const ClickOutsidePlugin: Plugin_2;

export declare const CollapsePlugin: Plugin_2;

export declare const ColPlugin: Plugin_2;

export declare const ConfigProviderPlugin: Plugin_2;

export declare const ConfirmPlugin: Plugin_2;

export declare class ConfirmService {
    #private;
    static open(options: IConfirmServiceOpenOptions, appContext?: AppContext): Promise<boolean>;
    private static close;
}

export declare const ContainerPlugin: Plugin_2;

export declare const CountdownPlugin: Plugin_2;

export declare const DividerPlugin: Plugin_2;

export declare const DrawerPlugin: Plugin_2;

export declare class DrawerService {
    static open(options: IDrawerServiceOpenOptions, appContext?: AppContext): void;
}

export declare const DropdownPlugin: Plugin_2;

export declare const en: IVLocale;

export declare const FlexPlugin: Plugin_2;

export declare const FormItemPlugin: Plugin_2;

export declare const FormPlugin: Plugin_2;

declare interface IConfirmServiceEmits {
    onSuccess?: VoidFunction;
    onCancel?: VoidFunction;
    onClose?: VoidFunction;
}

declare type IConfirmServiceOpenOptions = IVConfirmProps & IConfirmServiceEmits;

declare interface IDrawerServiceEmits {
    onOpened?: (payload: Element) => void;
    onClosed?: (payload: Element) => void;
    onOpen?: VoidFunction;
    onClose?: VoidFunction;
}

declare type IDrawerServiceOpenOptions = IVDrawerProps & IDrawerServiceEmits;

export declare const ImagePlugin: Plugin_2;

declare interface IModalServiceEmits {
    onOpened?: (payload: Element) => void;
    onClosed?: (payload: Element) => void;
    onOpen?: VoidFunction;
    onClose?: VoidFunction;
}

declare type IModalServiceOpenOptions = IVModalProps & IModalServiceEmits;

export declare const InplacePlugin: Plugin_2;

export declare const InputCodePlugin: Plugin_2;

export declare const InputGroupPlugin: Plugin_2;

export declare const InputNumberPlugin: Plugin_2;

export declare const InputPasswordPlugin: Plugin_2;

export declare const InputPlugin: Plugin_2;

declare interface IToastServiceEmits {
    onSuccess?: VoidFunction;
    onCancel?: VoidFunction;
    onClose?: VoidFunction;
}

declare type IToastServiceOpenOptions = IVToastProps & IToastServiceEmits;

/**
 * Интерфейс свойств компонента VAffix
 * @interface IVAffixProps
 */
export declare interface IVAffixProps {
    offsetTop?: number;
    offsetBottom?: number;
    disabled?: boolean;
    container?: string;
}

/**
 * Интерфейс свойств компонента VAlert
 * @interface IVAlertProps
 */
export declare type IVAlertProps = {
    title?: string;
    description?: string;
    showIcon?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;

/**
 * Интерфейс слотов компонента VAlert
 * @interface IVAlertSlots
 */
export declare interface IVAlertSlots {
    default?: UnscopedSlot;
    title?: UnscopedSlot;
    description?: UnscopedSlot;
}

/**
 * Интерфейс свойств компонента VAvatar
 * @interface IVAvatarProps
 */
export declare type IVAvatarProps = {
    src?: string;
    fallback?: string;
    circle?: boolean;
    label?: string;
} & Partial<SizeProp> & Partial<ThemeProp>;

/**
 * Интерфейс свойств компонента VBadge
 * @interface IVBadgeProps
 */
export declare type IVBadgeProps = {
    dot?: boolean;
    hidden?: boolean;
    max?: number;
    value?: string | number;
} & Partial<ThemeProp> & Partial<SizeProp>;

/**
 * Интерфейс слотов компонента VBadge
 * @interface IVBadgeSlots
 */
export declare interface IVBadgeSlots {
    default?: UnscopedSlot;
    content?: (props: {
        value: string;
    }) => void;
}

/**
 * Интерфейс свойств компонента VBreadcrumbs
 * @interface IVBreadcrumbsProps
 */
export declare interface IVBreadcrumbsProps {
}

/**
 * Интерфейс свойств компонента VCalendar
 * @interface IVCalendarProps
 */
export declare type IVCalendarProps = {} & Partial<ThemeProp> & Partial<SizeProp>;

/**
 * Интерфейс событий компонента VCollapse
 * @interface IVCollapseEmits
 */
export declare interface IVCollapseEmits {
    change: [payload: boolean];
}

/**
 * Интерфейс свойств компонента VCollapse
 * @interface IVCollapseProps
 */
export declare interface IVCollapseProps {
}

/**
 * Интерфейс свойств компонента VConfirm
 * @interface IVConfirmProps
 */
declare type IVConfirmProps = {
    title?: string;
    message?: string | VNode;
    useHtml?: boolean;
    confirmText?: string;
    cancelText?: string;
} & Partial<ThemeProp> & Partial<SizeProp>;

/**
 * Интерфейс событий компонента VCountdown
 * @interface IVCountdownEmits
 */
export declare interface IVCountdownEmits {
    start: [];
    progress: [payload: IVCountdownProgress];
    abort: [];
    end: [];
}

export declare interface IVCountdownExpose {
    start: VoidFunction;
    abort: VoidFunction;
    end: VoidFunction;
    restart: VoidFunction;
}

export declare type IVCountdownInstance = IVCountdownExpose;

export declare interface IVCountdownProgress {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    totalDays: number;
    totalHours: number;
    totalMinutes: number;
    totalSeconds: number;
    totalMilliseconds: number;
}

/**
 * Интерфейс свойств компонента VCountdown
 * @interface IVCountdownProps
 */
export declare interface IVCountdownProps {
    autoStart?: boolean;
    interval?: number;
    start: number;
    now?: number;
}

/**
 * Интерфейс слотов компонента VCountdown
 * @interface IVCountdownSlots
 */
export declare interface IVCountdownSlots {
    default?: (props: {
        years: number;
        months: number;
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
        milliseconds: number;
    }) => Array<VNode>;
}

/**
 * Интерфейс слотов компонента VDivider
 * @interface IVDividerProps
 */
export declare interface IVDividerProps {
}

/**
 * Интерфейс событий компонента VDrawer
 * @interface IVDrawerEmits
 */
export declare interface IVDrawerEmits {
    opened: [payload: Element];
    closed: [payload: Element];
    open: [];
    close: [];
}

/**
 * Интерфейс слотов компонента VDrawer
 * @interface IVDrawerProps
 */
export declare type IVDrawerProps = {
    appendToBody?: boolean;
    title?: string;
    destroyOnClose?: boolean;
} & Partial<SizeProp>;

export declare interface IVDrawerScopedSlot {
    close: VoidFunction;
}

/**
 * Интерфейс слотов компонента VDrawer
 * @interface IVDrawerSlots
 */
export declare interface IVDrawerSlots {
    default?: (props: IVDrawerScopedSlot) => Array<VNode>;
    header?: (props: IVDrawerScopedSlot) => Array<VNode>;
    footer?: (props: IVDrawerScopedSlot) => Array<VNode>;
}

/**
 * Интерфейс контекста компонента VDropdown
 * @interface IVDropdownContext
 */
export declare interface IVDropdownContext {
    props: IVDropdownProps;
}

/**
 * Интерфейс событий компонента VDropdown
 * @interface IVDropdownEmits
 */
export declare interface IVDropdownEmits {
    opened: [payload: Element];
    closed: [payload: Element];
    open: [];
    close: [];
}

export declare interface IVDropdownExpose {
    setVisible: (payload: boolean) => void;
    isVisible: Ref<boolean>;
}

export declare interface IVDropdownInstance {
    setVisible: (payload: boolean) => void;
    isVisible: boolean;
}

/**
 * Интерфейс свойств компонента VDropdown
 * @interface IVDropdownProps
 */
export declare interface IVDropdownProps {
}

/**
 * Интерфейс слотов компонента VDropdown
 * @interface IVDropdownSlots
 */
export declare interface IVDropdownSlots {
    default?: UnscopedSlot;
    trigger?: (props: {
        isVisible: boolean;
        toggle: VoidFunction;
        setVisible: (payload: boolean) => void;
    }) => Array<VNode>;
}

/**
 * Интерфейс свойств компонента VFlex
 * @interface IVFlexProps
 */
export declare type IVFlexProps = {
    wrap?: boolean;
    gap?: number | [number, number];
} & Partial<FlexAlignProp> & Partial<FlexJustifyProp> & Partial<DirectionProp>;

export declare interface IVFormItemProps extends FormItemProps {
    title?: string;
}

export declare interface IVImageEmits {
    error: [payload: Event];
    load: [payload: Event];
}

/**
 * Интерфейс свойств компонента VImage
 * @interface IVImageProps
 */
export declare interface IVImageProps {
    src: string;
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

declare interface IVLocale {
    name: string;
    vau: IVLocaleTranslate;
}

declare type IVLocaleTranslate = {
    [key: string]: string | Array<string> | IVLocaleTranslate;
};

/**
 * Интерфейс событий компонента VModal
 * @interface IVModalEmits
 */
export declare interface IVModalEmits {
    opened: [payload: Element];
    closed: [payload: Element];
    open: [];
    close: [];
}

/**
 * Интерфейс свойств компонента VModal
 * @interface IVModalProps
 */
export declare type IVModalProps = {
    appendToBody?: boolean;
    title?: string;
    destroyOnClose?: boolean;
} & Partial<SizeProp>;

export declare interface IVModalScopedSlot {
    close: VoidFunction;
}

/**
 * Интерфейс слотов компонента VModal
 * @interface IVModalSlots
 */
export declare interface IVModalSlots {
    default?: (props: IVModalScopedSlot) => Array<VNode>;
    header?: (props: IVModalScopedSlot) => Array<VNode>;
    footer?: (props: IVModalScopedSlot) => Array<VNode>;
}

/**
 * Интерфейс свойств компонента VOverlay
 * @interface IVOverlayProps
 */
export declare interface IVOverlayProps {
    mask?: boolean;
    blur?: boolean;
}

/**
 * Интерфейс событий компонента VPagination
 * @interface IVPaginationEmits
 */
export declare interface IVPaginationEmits {
    change: [payload: number];
    load: [payload: number];
}

export declare interface IVPaginationExpose {
    goToFirstPage: VoidFunction;
    goToPrevPage: VoidFunction;
    setPage: (page: number) => void;
    goToNextPage: VoidFunction;
    goToLastPage: VoidFunction;
}

export declare type IVPaginationInstance = IVPaginationExpose;

/**
 * Интерфейс свойств компонента VPagination
 * @interface IVPaginationProps
 */
export declare interface IVPaginationProps {
    total: number;
    current: number;
    perPage: number;
    range?: number;
    visibleMenu?: boolean;
    moreButton?: boolean;
}

/**
 * Интерфейс свойств компонента VPlaceholder
 * @interface IVPlaceholderProps
 */
export declare interface IVPlaceholderProps {
    animated?: boolean;
}

/**
 * Интерфейс свойств компонента VProgress
 * @interface IVProgressProps
 */
export declare type IVProgressProps = {
    indeterminate?: boolean;
    showValue?: boolean;
    value: number;
} & Partial<ThemeProp> & Partial<SizeProp>;

/**
 * Интерфейс свойств компонента VSpinner
 * @interface IVSpinnerProps
 */
export declare type IVSpinnerProps = {} & Partial<SizeProp> & Partial<ThemeProp>;

/**
 * Интерфейс контекста компонента VTab
 * @interface IVTabContext
 */
export declare interface IVTabContext {
    id: string;
    props: IVTabProps;
    slots: IVTabSlots;
}

/**
 * Базовый тип данных компонента VTable
 * @interface IVTableBaseData
 */
export declare type IVTableBaseData = Record<string, unknown>;

/**
 * Интерфейс свойств колонки VTable
 * @interface IVTableColumn
 */
export declare interface IVTableColumn<KEYS extends IVTableBaseData> {
    /**
     * @description Заголовок колонки
     */
    title?: string;
    /**
     * @description Имя свойства объекта, значение которого нужно отобразить в колонке
     */
    prop: keyof KEYS;
    /**
     * @description Указывает, можно ли сортировать столбец
     */
    sortable?: boolean;
}

/**
 * Интерфейс контекста компонента VTable
 * @interface IVTableContext
 */
export declare interface IVTableContext<T extends IVTableBaseData = IVTableBaseData> {
    props: IVTableProps<T>;
}

/**
 * Интерфейс событий компонента VTable
 * @interface IVTableEmits
 */
export declare interface IVTableEmits<DATA extends IVTableBaseData = IVTableBaseData> {
    select: [payload: DATA];
    'select:all': [payload: Array<DATA>];
    sort: [];
}

/**
 * @interface IVTableExpose
 */
export declare interface IVTableExpose {
    /**
     * @description Очистить выделение строк
     */
    clearSelection: VoidFunction;
    /**
     * @description Получить выбранные строки в таблице
     */
    getSelectionRows: VoidFunction;
    /**
     * @description Очистить сортировкуь
     */
    clearSort: VoidFunction;
    /**
     * @description Указать сортировку по полю
     */
    sort: (prop: string, order: IVTableSortDirection) => void;
    /**
     * @description Выделить или снять выделение с всех строк
     */
    toggleAllSelection: VoidFunction;
}

/**
 * @interface IVTableInstance
 */
export declare type IVTableInstance = IVTableExpose;

/**
 * Интерфейс свойств компонента VTable
 * @interface IVTableProps
 * @template DATA - Тип данных строк таблицы
 */
export declare interface IVTableProps<DATA extends IVTableBaseData = IVTableBaseData> {
    /**
     * @description Описание колонок
     */
    columns: Array<IVTableColumn<DATA>>;
    /**
     * @description Данные таблицы
     */
    data: Array<DATA>;
    /**
     * @description Формат заполнения колонок таблицы
     */
    tableLayout?: ValueOf<typeof TableLayout>;
    /**
     * @description Добавить скролл таблицы
     */
    scrollable?: boolean;
    /**
     * @description Сделать таблицу полосатой
     */
    stripe?: boolean;
}

/**
 * Интерфейс слотов компонента VTable
 * @interface IVTableSlots
 */
export declare type IVTableSlots<DATA extends IVTableBaseData = IVTableBaseData> = {
    default?: UnscopedSlot;
    empty?: UnscopedSlot;
} & {
    [K in keyof DATA]?: (props: {
        row: DATA;
    }) => Array<VNode>;
};

export declare type IVTableSortDirection = ValueOf<typeof TableSort>;

/**
 * @interface IVTableSortState
 */
export declare interface IVTableSortState<T extends IVTableBaseData = IVTableBaseData> {
    prop: MaybeNull<keyof T>;
    order: MaybeNull<IVTableSortDirection>;
}

/**
 * Интерфейс свойств компонента VTab
 * @interface IVTabProps
 */
export declare interface IVTabProps {
    title?: string;
    value: IVTabValue;
    disabled?: boolean;
}

/**
 * Интерфейс контекста компонента VTabs
 * @interface IVTabsContext
 */
export declare interface IVTabsContext {
    props: IVTabsProps;
    modelValue: ModelRef<IVTabsModelValue>;
    tabs: Ref<Array<IVTabContext>>;
    handleChange: (value: IVTabValue) => void;
    registerTab: (tab: IVTabContext) => void;
    unregisterTab: (tab: IVTabContext) => void;
}

export declare interface IVTabScopedSlot {
    isActive: boolean;
}

/**
 * Интерфейс событий компонента VTabs
 * @interface IVTabsProps
 */
export declare interface IVTabsEmits {
    change: [payload: IVTabsModelValue];
}

/**
 * Интерфейс слотов компонента VTab
 * @interface IVTabSlots
 */
export declare interface IVTabSlots {
    default?: (props: IVTabScopedSlot) => Array<VNode>;
    title?: (props: IVTabScopedSlot) => Array<VNode>;
}

export declare type IVTabsModelValue = Maybe<IVTabValue>;

/**
 * Интерфейс свойств компонента VTabs
 * @interface IVTabsProps
 */
export declare interface IVTabsProps {
    scrollable?: boolean;
}

export declare type IVTabValue = number | string;

/**
 * Интерфейс свойств компонента VToast
 * @interface IVToastProps
 */
declare type IVToastProps = {
    title?: string;
    message?: string | VNode;
    useHtml?: boolean;
    duration?: number;
    clearable?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;

export declare const LayoutPlugin: Plugin_2;

export declare const LoadingPlugin: Plugin_2;

export declare const ModalPlugin: Plugin_2;

export declare class ModalService {
    static open(options: IModalServiceOpenOptions, appContext?: AppContext): void;
}

export declare const OverlayPlugin: Plugin_2;

export declare const PaginationPlugin: Plugin_2;

export declare const PlaceholderPlugin: Plugin_2;

export declare const ProgressPlugin: Plugin_2;

export declare const RadioGroupPlugin: Plugin_2;

export declare const RadioPlugin: Plugin_2;

export declare const RowPlugin: Plugin_2;

export declare const ru: IVLocale;

export declare const ScrollbarPlugin: Plugin_2;

export declare const SpinnerPlugin: Plugin_2;

export declare const SwitchPlugin: Plugin_2;

declare const TableLayout: Readonly<{
    readonly FIXED: "fixed";
    readonly AUTO: "auto";
}>;

export declare const TablePlugin: Plugin_2;

declare const TableSort: Readonly<{
    readonly ASCENDING: "asc";
    readonly DESCENDING: "desc";
}>;

export declare const TabsPlugin: Plugin_2;

export declare const TagGroupPlugin: Plugin_2;

export declare const TagPlugin: Plugin_2;

export declare const TextPlugin: Plugin_2;

export declare class ToastService {
    #private;
    static open(options: IToastServiceOpenOptions, appContext?: AppContext): void;
}

export declare const TooltipPlugin: Plugin_2;

export declare function useDrawer(): {};

export declare const VAccordion: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, __VLS_TemplateResult_3["slots"]>;

export declare const VAccordionItem: __VLS_WithTemplateSlots_4<typeof __VLS_component_4, __VLS_TemplateResult_4["slots"]>;

export declare interface VAccordionItemProps extends AccordionItemProps {
    title?: string;
}

export declare interface VAccordionItemSlots extends AccordionItemSlots {
    title?: UnscopedSlot;
}

export declare const VAffix: __VLS_WithTemplateSlots_7<typeof __VLS_component_7, __VLS_TemplateResult_7["slots"]>;

export declare const VAlert: __VLS_WithTemplateSlots_6<typeof __VLS_component_6, __VLS_TemplateResult_6["slots"]>;

export declare const VauUI: Plugin_2;

export declare const VAvatar: DefineComponent<IVAvatarProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IVAvatarProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

export declare const VAvatarGroup: __VLS_WithTemplateSlots_5<typeof __VLS_component_5, __VLS_TemplateResult_5["slots"]>;

export declare const VBadge: __VLS_WithTemplateSlots_8<typeof __VLS_component_8, __VLS_TemplateResult_8["slots"]>;

export declare const VBreadcrumbs: DefineComponent<IVBreadcrumbsProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IVBreadcrumbsProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLElement>;

export declare const VButton: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare const VButtonGroup: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, __VLS_TemplateResult_2["slots"]>;

export declare const VCalendar: DefineComponent<IVCalendarProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IVCalendarProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

export declare const VCheckbox: __VLS_WithTemplateSlots_26<typeof __VLS_component_26, __VLS_TemplateResult_26["slots"]>;

export declare const VCheckboxGroup: __VLS_WithTemplateSlots_27<typeof __VLS_component_27, __VLS_TemplateResult_27["slots"]>;

export declare const vClickOutside: ObjectDirective;

export declare const VCol: __VLS_WithTemplateSlots_15<typeof __VLS_component_15, __VLS_TemplateResult_15["slots"]>;

export declare const VCollapse: __VLS_WithTemplateSlots_9<typeof __VLS_component_9, __VLS_TemplateResult_9["slots"]>;

export declare const VConfigProvider: __VLS_WithTemplateSlots_32<typeof __VLS_component_32, __VLS_TemplateResult_32["slots"]>;

export declare const VContainer: __VLS_WithTemplateSlots_14<typeof __VLS_component_14, __VLS_TemplateResult_14["slots"]>;

export declare const VCountdown: __VLS_WithTemplateSlots_39<typeof __VLS_component_39, __VLS_TemplateResult_39["slots"]>;

export declare const VDivider: __VLS_WithTemplateSlots_35<typeof __VLS_component_35, __VLS_TemplateResult_35["slots"]>;

export declare const VDrawer: __VLS_WithTemplateSlots_12<typeof __VLS_component_12, __VLS_TemplateResult_12["slots"]>;

export declare const VDropdown: __VLS_WithTemplateSlots_13<typeof __VLS_component_13, __VLS_TemplateResult_13["slots"]>;

export declare const VFlex: __VLS_WithTemplateSlots_36<typeof __VLS_component_36, __VLS_TemplateResult_36["slots"]>;

export declare const VForm: <MODEL extends FormModel>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly onSubmit?: ((payload: FormSubmitEvent) => any) | undefined;
        readonly "onUpdate:modelValue"?: ((value: MODEL) => any) | undefined;
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

export declare const VFormItem: __VLS_WithTemplateSlots_25<typeof __VLS_component_25, __VLS_TemplateResult_25["slots"]>;

export declare const VImage: DefineComponent<IVImageProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
error: (payload: Event) => any;
load: (payload: Event) => any;
}, string, PublicProps, Readonly<IVImageProps> & Readonly<{
onError?: ((payload: Event) => any) | undefined;
onLoad?: ((payload: Event) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {
root: HTMLElement;
image: HTMLImageElement;
}, HTMLElement>;

export declare const VInplace: __VLS_WithTemplateSlots_10<typeof __VLS_component_10, __VLS_TemplateResult_10["slots"]>;

export declare const VInput: __VLS_WithTemplateSlots_28<typeof __VLS_component_28, __VLS_TemplateResult_28["slots"]>;

export declare const VInputCode: DefineComponent<__VLS_PublicProps_7, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: InputCodeModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_7> & Readonly<{
"onUpdate:modelValue"?: ((value: InputCodeModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

export declare const VInputGroup: __VLS_WithTemplateSlots_37<typeof __VLS_component_37, __VLS_TemplateResult_37["slots"]>;

export declare const VInputGroupAddon: __VLS_WithTemplateSlots_38<typeof __VLS_component_38, __VLS_TemplateResult_38["slots"]>;

export declare const VInputNumber: DefineComponent<__VLS_PublicProps_8, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: number) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_8> & Readonly<{
"onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

export declare const VInputPassword: DefineComponent<__VLS_PublicProps_9, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: InputModelValue) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_9> & Readonly<{
"onUpdate:modelValue"?: ((value: InputModelValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

export declare const VisiblePlugin: Plugin_2;

export declare const VLayout: __VLS_WithTemplateSlots_17<typeof __VLS_component_17, __VLS_TemplateResult_17["slots"]>;

export declare const vLoading: ObjectDirective;

export declare const VModal: __VLS_WithTemplateSlots_11<typeof __VLS_component_11, __VLS_TemplateResult_11["slots"]>;

export declare const VOverlay: __VLS_WithTemplateSlots_33<typeof __VLS_component_33, __VLS_TemplateResult_33["slots"]>;

export declare const VPagination: DefineComponent<IVPaginationProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (payload: number) => any;
load: (payload: number) => any;
}, string, PublicProps, Readonly<IVPaginationProps> & Readonly<{
onChange?: ((payload: number) => any) | undefined;
onLoad?: ((payload: number) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

export declare const VPlaceholder: __VLS_WithTemplateSlots_18<typeof __VLS_component_18, __VLS_TemplateResult_18["slots"]>;

export declare const VProgress: __VLS_WithTemplateSlots_34<typeof __VLS_component_34, __VLS_TemplateResult_34["slots"]>;

export declare const VRadio: __VLS_WithTemplateSlots_29<typeof __VLS_component_29, __VLS_TemplateResult_29["slots"]>;

export declare const VRadioGroup: __VLS_WithTemplateSlots_30<typeof __VLS_component_30, __VLS_TemplateResult_30["slots"]>;

export declare const VRow: __VLS_WithTemplateSlots_16<typeof __VLS_component_16, __VLS_TemplateResult_16["slots"]>;

export declare const VScrollbar: __VLS_WithTemplateSlots_19<typeof __VLS_component_19, __VLS_TemplateResult_19["slots"]>;

export declare const VSpinner: DefineComponent<IVSpinnerProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IVSpinnerProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

export declare const VSwitch: __VLS_WithTemplateSlots_31<typeof __VLS_component_31, __VLS_TemplateResult_31["slots"]>;

export declare const VTab: __VLS_WithTemplateSlots_21<typeof __VLS_component_21, __VLS_TemplateResult_21["slots"]>;

export declare const VTable: <T extends IVTableBaseData = IVTableBaseData>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal_2<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal_2<Pick<Partial<{}> & Omit<{
        readonly onSort?: (() => any) | undefined;
        readonly onSelect?: ((payload: T) => any) | undefined;
        readonly "onSelect:all"?: ((payload: T[]) => any) | undefined;
    } & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>, "onSelect" | "onSort" | "onSelect:all"> & IVTableProps<T> & Partial<{}>> & PublicProps;
    expose(exposed: ShallowUnwrapRef<IVTableExpose>): void;
    attrs: any;
    slots: Readonly<{
        default?: UnscopedSlot;
        empty?: UnscopedSlot;
    } & { [K in keyof T]?: ((props: {
            row: T;
        }) => Array<VNode>) | undefined; }> & {
        default?: UnscopedSlot;
        empty?: UnscopedSlot;
    } & { [K in keyof T]?: ((props: {
            row: T;
        }) => Array<VNode>) | undefined; };
    emit: ((evt: "sort") => void) & ((evt: "select", payload: T) => void) & ((evt: "select:all", payload: T[]) => void);
}>) => VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};

export declare const VTabs: __VLS_WithTemplateSlots_20<typeof __VLS_component_20, __VLS_TemplateResult_20["slots"]>;

export declare const VTag: __VLS_WithTemplateSlots_22<typeof __VLS_component_22, __VLS_TemplateResult_22["slots"]>;

export declare const VTagGroup: __VLS_WithTemplateSlots_23<typeof __VLS_component_23, __VLS_TemplateResult_23["slots"]>;

export declare const VText: __VLS_WithTemplateSlots_24<typeof __VLS_component_24, __VLS_TemplateResult_24["slots"]>;

export declare const vTooltip: ObjectDirective;

export declare const vVisible: ObjectDirective;

export { }
