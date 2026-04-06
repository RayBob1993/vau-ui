export declare const Form: {
    Root: <MODEL extends import("./types").FormModel>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
        attrs: any;
        emit: (((evt: "submit", payload: import("./types").FormSubmitEvent) => void) & ((evt: "invalid") => void) & ((evt: "valid") => void)) & ((event: "update:modelValue", value: MODEL) => void);
        slots: import("./types").FormSlots;
    }, __VLS_exposed?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
        props: import("vue").PublicProps & {
            rules?: import("./types").FormRules<MODEL> | undefined;
            disabled?: boolean | undefined;
            scrollToError?: (boolean | ScrollIntoViewOptions) | undefined;
            modelValue: MODEL;
            "onUpdate:modelValue"?: ((value: MODEL) => any) | undefined;
            onSubmit?: ((payload: import("./types").FormSubmitEvent) => any) | undefined;
            onInvalid?: (() => any) | undefined;
            onValid?: (() => any) | undefined;
        } & (typeof globalThis extends {
            __VLS_PROPS_FALLBACK: infer P;
        } ? P : {});
        expose: (exposed: import("vue").ShallowUnwrapRef<import("./types").FormInstance>) => void;
        attrs: any;
        slots: import("./types").FormSlots;
        emit: (((evt: "submit", payload: import("./types").FormSubmitEvent) => void) & ((evt: "invalid") => void) & ((evt: "valid") => void)) & ((event: "update:modelValue", value: MODEL) => void);
    }>) => import("vue").VNode & {
        __ctx?: Awaited<typeof __VLS_setup>;
    };
    Item: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./types").FormItemProps> & Readonly<{
            onInvalid?: (() => any) | undefined;
            onValid?: (() => any) | undefined;
        }>, import("./types").FormItemExpose, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            invalid: () => any;
            valid: () => any;
        }, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("./types").FormItemProps> & Readonly<{
            onInvalid?: (() => any) | undefined;
            onValid?: (() => any) | undefined;
        }>, import("./types").FormItemExpose, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("./types").FormItemProps> & Readonly<{
        onInvalid?: (() => any) | undefined;
        onValid?: (() => any) | undefined;
    }>, import("./types").FormItemExpose, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        invalid: () => any;
        valid: () => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: import("./types").FormItemSlots;
    });
    ItemTitle: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
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
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    ItemRequired: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
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
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    ItemErrors: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
};
export * from './types';
export * from './composables';
