import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps, DefineComponent } from 'vue';
import { InputCodeModelValue } from './types';
import { InputBaseProps } from '..';
import { ThemeProp, SizeProp } from '../..';
export declare const InputCode: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue: InputCodeModelValue;
        } & InputBaseProps & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
        } & InputBaseProps & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
            "onUpdate:modelValue"?: ((value: InputCodeModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
        modelValue: InputCodeModelValue;
    } & InputBaseProps & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: InputCodeModelValue) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: InputCodeModelValue) => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Pin: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLInputElement>;
};
export * from './types';
