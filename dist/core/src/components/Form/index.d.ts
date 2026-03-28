export declare const Form: {
    Root: <MODEL extends import('./types').FormModel>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
        slots: Readonly<import('./types').FormSlots> & import('./types').FormSlots;
        attrs: any;
        emit: (((evt: "submit", payload: import('./types').FormSubmitEvent) => void) & ((evt: "invalid") => void) & ((evt: "valid") => void)) & ((evt: "update:modelValue", value: MODEL) => void);
    }, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
        props: {
            readonly "onUpdate:modelValue"?: ((value: MODEL) => any) | undefined;
            readonly onSubmit?: ((payload: import('./types').FormSubmitEvent) => any) | undefined;
            readonly onInvalid?: (() => any) | undefined;
            readonly onValid?: (() => any) | undefined;
            modelValue: MODEL;
            rules?: import('./types').FormRules<MODEL> | undefined;
            disabled?: boolean | undefined;
            scrollToError?: (boolean | ScrollIntoViewOptions) | undefined;
        } & import('vue').PublicProps;
        expose(exposed: import('vue').ShallowUnwrapRef<import('./types').FormInstance>): void;
        attrs: any;
        slots: Readonly<import('./types').FormSlots> & import('./types').FormSlots;
        emit: (((evt: "submit", payload: import('./types').FormSubmitEvent) => void) & ((evt: "invalid") => void) & ((evt: "valid") => void)) & ((evt: "update:modelValue", value: MODEL) => void);
    }>) => import('vue').VNode & {
        __ctx?: Awaited<typeof __VLS_setup>;
    };
    Item: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./types').FormItemProps> & Readonly<{
            onInvalid?: (() => any) | undefined;
            onValid?: (() => any) | undefined;
        }>, {
            reset: VoidFunction;
            validate: (silent?: boolean) => Promise<boolean>;
            clearValidateErrors: VoidFunction;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            invalid: () => any;
            valid: () => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            root: HTMLDivElement;
        }, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./types').FormItemProps> & Readonly<{
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
    } & import('vue').ComponentOptionsBase<Readonly<import('./types').FormItemProps> & Readonly<{
        onInvalid?: (() => any) | undefined;
        onValid?: (() => any) | undefined;
    }>, {
        reset: VoidFunction;
        validate: (silent?: boolean) => Promise<boolean>;
        clearValidateErrors: VoidFunction;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        invalid: () => any;
        valid: () => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./types').FormItemSlots> & import('./types').FormItemSlots;
    });
    ItemTitle: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
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
    } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    ItemRequired: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLSpanElement, import('vue').ComponentProvideOptions, {
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
    } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    ItemErrors: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
};
export * from './types';
export * from './composables';
