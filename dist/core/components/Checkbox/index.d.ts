import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { CheckboxModelValue, CheckboxValue, CheckboxIndicatorSlots } from './types';
import { ThemeProp, SizeProp, DirectionProp } from '../..';
export declare const Checkbox: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue?: CheckboxModelValue;
        } & {
            disabled?: boolean;
            indeterminate?: boolean;
            value?: CheckboxValue;
            checked?: boolean;
        } & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
        } & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
    } & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
        $slots: Readonly< CheckboxIndicatorSlots> & CheckboxIndicatorSlots;
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
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<Partial< DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<Partial< DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<Partial< DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};
export * from './types';
