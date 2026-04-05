import { PrimitiveProps } from './types';
import { PropType, DefineComponent, ExtractPropTypes, VNode, RendererNode, RendererElement, ComponentOptionsMixin, PublicProps, Component, ComponentProvideOptions } from 'vue';
export declare const Root: DefineComponent<ExtractPropTypes<{
    asChild: {
        type: BooleanConstructor;
        default: boolean;
    };
    as: {
        type: PropType<PrimitiveProps["as"]>;
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
        type: PropType<PrimitiveProps["as"]>;
        default: string;
    };
}>> & Readonly<{}>, {
    asChild: boolean;
    as: keyof HTMLElementTagNameMap | Component;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
