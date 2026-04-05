import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps, DefineComponent } from 'vue';
import { InputNumberModelValue, InputNumberMousewheel, InputNumberBaseProps, InputNumberButtonProps } from './types';
import { DirectionProp, ThemeProp, SizeProp } from '../..';
export declare const InputNumber: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue?: InputNumberModelValue;
        } & {
            mousewheel?: InputNumberMousewheel;
        } & InputNumberBaseProps & Partial< DirectionProp> & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
            "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
            "update:modelValue": (value: number) => any;
        }, PublicProps, {
            min: number;
            max: number;
            step: number;
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
        } & InputNumberBaseProps & Partial< DirectionProp> & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
            "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        }>, {}, {}, {}, {}, {
            min: number;
            max: number;
            step: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
        modelValue?: InputNumberModelValue;
    } & {
        mousewheel?: InputNumberMousewheel;
    } & InputNumberBaseProps & Partial< DirectionProp> & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: number) => any;
    }, string, {
        min: number;
        max: number;
        step: number;
    }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Input: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;
    Button: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< InputNumberButtonProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLButtonElement, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly< InputNumberButtonProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly< InputNumberButtonProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};
export * from './constants';
export * from './types';
