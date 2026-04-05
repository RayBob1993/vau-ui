import { DefineComponent, ExtractPropTypes, PropType, VNode, RendererNode, RendererElement, ComponentOptionsMixin, PublicProps, Component, ComponentProvideOptions } from 'vue';
import { PrimitiveProps } from './types';
export declare const Primitive: {
    Root: DefineComponent<ExtractPropTypes<{
        asChild: {
            type: BooleanConstructor;
            default: boolean;
        };
        as: {
            type: PropType< PrimitiveProps["as"]>;
            default: string;
        };
    }>, () => VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
        asChild: {
            type: BooleanConstructor;
            default: boolean;
        };
        as: {
            type: PropType< PrimitiveProps["as"]>;
            default: string;
        };
    }>> & Readonly<{}>, {
        asChild: boolean;
        as: keyof HTMLElementTagNameMap | Component;
    }, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
};
export * from './types';
