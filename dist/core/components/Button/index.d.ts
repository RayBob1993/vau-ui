import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, Component, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { ButtonProps } from './types';
import { DirectionProp } from '../..';
export declare const Button: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ButtonProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
            type: HTMLButtonElement["type"];
            as: keyof HTMLElementTagNameMap | Component;
        }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly< ButtonProps> & Readonly<{}>, {}, {}, {}, {}, {
            type: HTMLButtonElement["type"];
            as: keyof HTMLElementTagNameMap | Component;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly< ButtonProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        type: HTMLButtonElement["type"];
        as: keyof HTMLElementTagNameMap | Component;
    }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
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
