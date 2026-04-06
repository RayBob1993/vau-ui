export declare const Checkbox: {
    Root: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
            disabled?: boolean;
            indeterminate?: boolean;
            value?: import("./types").CheckboxValue;
            checked?: boolean;
        } & Partial<import("../../index.js").ThemeProp> & Partial<import("../../index.js").SizeProp> & {
            modelValue?: import("./types").CheckboxModelValue;
        }> & Readonly<{
            onChange?: ((payload: import("./types").CheckboxValue) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import("./types").CheckboxModelValue | undefined) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            change: (payload: import("./types").CheckboxValue) => any;
            "update:modelValue": (value: import("./types").CheckboxModelValue | undefined) => any;
        }, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            disabled?: boolean;
            indeterminate?: boolean;
            value?: import("./types").CheckboxValue;
            checked?: boolean;
        } & Partial<import("../../index.js").ThemeProp> & Partial<import("../../index.js").SizeProp> & {
            modelValue?: import("./types").CheckboxModelValue;
        }> & Readonly<{
            onChange?: ((payload: import("./types").CheckboxValue) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import("./types").CheckboxModelValue | undefined) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{
        disabled?: boolean;
        indeterminate?: boolean;
        value?: import("./types").CheckboxValue;
        checked?: boolean;
    } & Partial<import("../../index.js").ThemeProp> & Partial<import("../../index.js").SizeProp> & {
        modelValue?: import("./types").CheckboxModelValue;
    }> & Readonly<{
        onChange?: ((payload: import("./types").CheckboxValue) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./types").CheckboxModelValue | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (payload: import("./types").CheckboxValue) => any;
        "update:modelValue": (value: import("./types").CheckboxModelValue | undefined) => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    Indicator: {
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
        $slots: import("./types").CheckboxIndicatorSlots;
    });
    Title: {
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
    Group: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<Partial<import("../../index.js").DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<Partial<import("../../index.js").DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<Partial<import("../../index.js").DirectionProp>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
};
export * from './types';
