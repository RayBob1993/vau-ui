import { FormModel, FormProps, FormSlots, FormSubmitEvent } from '../../../../core/index.ts';
import { VNodeProps, AllowedComponentProps, ComponentCustomProps, PublicProps, ShallowUnwrapRef, VNode } from 'vue';
declare const _default: <MODEL extends FormModel>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:modelValue"?: ((value: MODEL) => any) | undefined;
        readonly onSubmit?: ((payload: FormSubmitEvent) => any) | undefined;
        readonly onInvalid?: (() => any) | undefined;
        readonly onValid?: (() => any) | undefined;
    } & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>, "onUpdate:modelValue" | "onSubmit" | "onInvalid" | "onValid"> & ({
        modelValue: MODEL;
    } & FormProps<MODEL>) & Partial<{}>> & PublicProps;
    expose(exposed: ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Readonly<FormSlots> & FormSlots;
    emit: (((evt: "submit", payload: FormSubmitEvent) => void) & ((evt: "invalid") => void) & ((evt: "valid") => void)) & ((evt: "update:modelValue", value: MODEL) => void);
}>) => VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
