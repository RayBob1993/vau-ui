import { type TagProps } from '../../../core/index.js';
declare var __VLS_10: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_10) => any;
};
declare const __VLS_base: import("vue").DefineComponent<TagProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    delete: (payload: import('../../../core/index.js').Maybe<import('../../../core/index.js').TagValue>) => any;
}, string, import("vue").PublicProps, Readonly<TagProps> & Readonly<{
    onDelete?: ((payload: import('../../../core/index.js').Maybe<import('../../../core/index.js').TagValue>) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
