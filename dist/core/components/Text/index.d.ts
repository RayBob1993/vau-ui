import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, Component, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { TextProps } from './types';
export declare const Text: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< TextProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
            as: keyof HTMLElementTagNameMap | Component;
        }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly< TextProps> & Readonly<{}>, {}, {}, {}, {}, {
            as: keyof HTMLElementTagNameMap | Component;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly< TextProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        as: keyof HTMLElementTagNameMap | Component;
    }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};
export * from './types';
