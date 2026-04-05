import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps, DefineComponent } from 'vue';
import { InputRangeModelValue } from './types';
import { InputBaseProps } from '..';
import { ThemeProp, SizeProp } from '../..';
export declare const InputRange: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue: InputRangeModelValue;
        } & {
            min?: number;
            max?: number;
            step?: number;
        } & InputBaseProps & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
        } & InputBaseProps & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
    } & InputBaseProps & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: InputRangeModelValue) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: InputRangeModelValue) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Slider: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;
};
export * from './types';
