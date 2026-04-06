import type { FormModel, FormProps, FormSlots } from './types';
declare const __VLS_export: <MODEL extends FormModel>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_exposed?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: import("vue").PublicProps & __VLS_PrettifyLocal<(FormProps<MODEL> & {
        modelValue: MODEL;
    }) & {
        "onUpdate:modelValue"?: ((value: MODEL) => any) | undefined;
        onSubmit?: ((payload: import("./types").FormSubmitEvent) => any) | undefined;
        onInvalid?: (() => any) | undefined;
        onValid?: (() => any) | undefined;
    }> & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: import("vue").ShallowUnwrapRef<import("./types").FormInstance>) => void;
    attrs: any;
    slots: FormSlots;
    emit: (((evt: "submit", payload: import("./types").FormSubmitEvent) => void) & ((evt: "invalid") => void) & ((evt: "valid") => void)) & ((event: "update:modelValue", value: MODEL) => void);
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PrettifyLocal<T> = (T extends any ? {
    [K in keyof T]: T[K];
} : {
    [K in keyof T as K]: T[K];
}) & {};
