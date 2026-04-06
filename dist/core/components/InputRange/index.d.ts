export declare const InputRange: {
    Root: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
            min?: number;
            max?: number;
            step?: number;
        } & import("../index.js").InputBaseProps & Partial<import("../../index.js").ThemeProp> & Partial<import("../../index.js").SizeProp> & {
            modelValue: import("./types").InputRangeModelValue;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: import("./types").InputRangeModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: import("./types").InputRangeModelValue) => any;
        }, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            min?: number;
            max?: number;
            step?: number;
        } & import("../index.js").InputBaseProps & Partial<import("../../index.js").ThemeProp> & Partial<import("../../index.js").SizeProp> & {
            modelValue: import("./types").InputRangeModelValue;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: import("./types").InputRangeModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{
        min?: number;
        max?: number;
        step?: number;
    } & import("../index.js").InputBaseProps & Partial<import("../../index.js").ThemeProp> & Partial<import("../../index.js").SizeProp> & {
        modelValue: import("./types").InputRangeModelValue;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("./types").InputRangeModelValue) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: import("./types").InputRangeModelValue) => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    Slider: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
};
export * from './types';
