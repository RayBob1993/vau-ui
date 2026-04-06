export declare const InputTags: {
    Root: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("../index.js").InputBaseProps & Partial<import("../../index.js").ThemeProp> & Partial<import("../../index.js").SizeProp> & {
            modelValue: import("./types").InputTagsModelValue;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: import("./types").InputTagsModelValue) => any) | undefined;
            onAddTag?: ((payload: import("./types").InputTagsValue) => any) | undefined;
            onRemoveTag?: ((payload: import("./types").InputTagsValue) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: import("./types").InputTagsModelValue) => any;
            addTag: (payload: import("./types").InputTagsValue) => any;
            removeTag: (payload: import("./types").InputTagsValue) => any;
        }, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("../index.js").InputBaseProps & Partial<import("../../index.js").ThemeProp> & Partial<import("../../index.js").SizeProp> & {
            modelValue: import("./types").InputTagsModelValue;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: import("./types").InputTagsModelValue) => any) | undefined;
            onAddTag?: ((payload: import("./types").InputTagsValue) => any) | undefined;
            onRemoveTag?: ((payload: import("./types").InputTagsValue) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("../index.js").InputBaseProps & Partial<import("../../index.js").ThemeProp> & Partial<import("../../index.js").SizeProp> & {
        modelValue: import("./types").InputTagsModelValue;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("./types").InputTagsModelValue) => any) | undefined;
        onAddTag?: ((payload: import("./types").InputTagsValue) => any) | undefined;
        onRemoveTag?: ((payload: import("./types").InputTagsValue) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: import("./types").InputTagsModelValue) => any;
        addTag: (payload: import("./types").InputTagsValue) => any;
        removeTag: (payload: import("./types").InputTagsValue) => any;
    }, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    Input: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Tags: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
};
export * from './types';
