import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { RadioModelValue, RadioValue, RadioIndicatorSlots } from './types';
import { ThemeProp, SizeProp, DirectionProp } from '../..';
export declare const Radio: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue: RadioModelValue;
        } & {
            disabled?: boolean;
            value: RadioValue;
        } & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
        } & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
    } & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
        $slots: Readonly< RadioIndicatorSlots> & RadioIndicatorSlots;
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
