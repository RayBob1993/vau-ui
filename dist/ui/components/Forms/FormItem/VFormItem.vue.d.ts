import type { IVFormItemProps } from './types';
import { type FormItemSlots } from '../../../../core/index.js';
type __VLS_Slots = FormItemSlots;
declare const __VLS_base: import("vue").DefineComponent<IVFormItemProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    invalid: () => any;
    valid: () => any;
}, string, import("vue").PublicProps, Readonly<IVFormItemProps> & Readonly<{
    onInvalid?: (() => any) | undefined;
    onValid?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
