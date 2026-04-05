import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps, DefineComponent } from 'vue';
import { InputTagsModelValue, InputTagsValue } from './types';
import { InputBaseProps } from '..';
import { ThemeProp, SizeProp } from '../..';
export declare const InputTags: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue: InputTagsModelValue;
        } & InputBaseProps & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
        } & InputBaseProps & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
            "onUpdate:modelValue"?: ((value: InputTagsModelValue) => any) | undefined;
            onAddTag?: ((payload: InputTagsValue) => any) | undefined;
            onRemoveTag?: ((payload: InputTagsValue) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{
        modelValue: InputTagsModelValue;
    } & InputBaseProps & Partial< ThemeProp> & Partial< SizeProp>> & Readonly<{
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
    Input: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;
    Tags: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;
};
export * from './types';
