import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { InputModelValue, InputSlots } from '..';
import { InputPasswordProps } from './types';
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
        $slots: Readonly< InputSlots> & InputSlots;
    });
};
export * from './types';
