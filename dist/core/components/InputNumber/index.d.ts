export declare const InputNumber: {
    Root: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
            mousewheel?: import("./types").InputNumberMousewheel;
        } & import("./types").InputNumberBaseProps & Partial<import("../../index.js").DirectionProp> & Partial<import("../../index.js").ThemeProp> & Partial<import("../../index.js").SizeProp> & {
            modelValue?: import("./types").InputNumberModelValue;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: number) => any;
        }, import("vue").PublicProps, {
            min: number;
            max: number;
            step: number;
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            mousewheel?: import("./types").InputNumberMousewheel;
        } & import("./types").InputNumberBaseProps & Partial<import("../../index.js").DirectionProp> & Partial<import("../../index.js").ThemeProp> & Partial<import("../../index.js").SizeProp> & {
            modelValue?: import("./types").InputNumberModelValue;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        }>, {}, {}, {}, {}, {
            min: number;
            max: number;
            step: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{
        mousewheel?: import("./types").InputNumberMousewheel;
    } & import("./types").InputNumberBaseProps & Partial<import("../../index.js").DirectionProp> & Partial<import("../../index.js").ThemeProp> & Partial<import("../../index.js").SizeProp> & {
        modelValue?: import("./types").InputNumberModelValue;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: number) => any;
    }, string, {
        min: number;
        max: number;
        step: number;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    Input: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Button: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./types").InputNumberButtonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("./types").InputNumberButtonProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("./types").InputNumberButtonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
};
export * from './constants';
export * from './types';
