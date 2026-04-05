import { IconRenderFn } from './types';
import { PropType, DefineComponent, ExtractPropTypes, VNodeChild, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
/**
 * Внутренний хелпер: вызывает render-функцию из реестра иконок ConfigProvider.
 */
export declare const IconRender: DefineComponent<ExtractPropTypes<{
    render: {
        type: PropType<IconRenderFn>;
        required: true;
    };
}>, () => VNodeChild, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    render: {
        type: PropType<IconRenderFn>;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
