import type { IconRenderFn } from './types';
import { type PropType } from 'vue';
/**
 * Внутренний хелпер: вызывает render-функцию из реестра иконок ConfigProvider.
 */
export declare const IconRender: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    render: {
        type: PropType<IconRenderFn>;
        required: true;
    };
}>, () => import("vue").VNodeChild, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    render: {
        type: PropType<IconRenderFn>;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
