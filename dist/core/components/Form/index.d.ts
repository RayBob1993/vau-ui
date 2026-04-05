import { FormModel, FormSlots, FormSubmitEvent, FormRules, FormInstance, FormItemProps, FormItemSlots } from './types';
import { PublicProps, ShallowUnwrapRef, VNode, CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps, DefineComponent } from 'vue';
export declare const Form: {
    Root: <MODEL extends FormModel>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
        slots: Readonly< FormSlots> & FormSlots;
        attrs: any;
        emit: (((evt: "submit", payload: FormSubmitEvent) => void) & ((evt: "invalid") => void) & ((evt: "valid") => void)) & ((evt: "update:modelValue", value: MODEL) => void);
    }, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
        props: {
            readonly "onUpdate:modelValue"?: ((value: MODEL) => any) | undefined;
            readonly onSubmit?: ((payload: FormSubmitEvent) => any) | undefined;
            readonly onInvalid?: (() => any) | undefined;
            readonly onValid?: (() => any) | undefined;
            modelValue: MODEL;
            rules?: FormRules<MODEL> | undefined;
            disabled?: boolean | undefined;
            scrollToError?: (boolean | ScrollIntoViewOptions) | undefined;
        } & PublicProps;
        expose(exposed: ShallowUnwrapRef<FormInstance>): void;
        attrs: any;
        slots: Readonly< FormSlots> & FormSlots;
        emit: (((evt: "submit", payload: FormSubmitEvent) => void) & ((evt: "invalid") => void) & ((evt: "valid") => void)) & ((evt: "update:modelValue", value: MODEL) => void);
    }>) => VNode & {
        __ctx?: Awaited<typeof __VLS_setup>;
    };
    Item: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< FormItemProps> & Readonly<{
            onInvalid?: (() => any) | undefined;
            onValid?: (() => any) | undefined;
        }>, {
            reset: VoidFunction;
            validate: (silent?: boolean) => Promise<boolean>;
            clearValidateErrors: VoidFunction;
        }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
            invalid: () => any;
            valid: () => any;
        }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly< FormItemProps> & Readonly<{
            onInvalid?: (() => any) | undefined;
            onValid?: (() => any) | undefined;
        }>, {
            reset: VoidFunction;
            validate: (silent?: boolean) => Promise<boolean>;
            clearValidateErrors: VoidFunction;
        }, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly< FormItemProps> & Readonly<{
        onInvalid?: (() => any) | undefined;
        onValid?: (() => any) | undefined;
    }>, {
        reset: VoidFunction;
        validate: (silent?: boolean) => Promise<boolean>;
        clearValidateErrors: VoidFunction;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        invalid: () => any;
        valid: () => any;
    }, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: Readonly< FormItemSlots> & FormItemSlots;
    });
    ItemTitle: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    ItemRequired: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLSpanElement, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    ItemErrors: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;
};
export * from './types';
export * from './composables';
