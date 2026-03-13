export declare const InputCode: {
    Root: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue: import('./types').InputCodeModelValue;
        } & import('..').InputBaseProps & Partial<import('../../..').ThemeProp> & Partial<import('../../..').SizeProp>> & Readonly<{
            "onUpdate:modelValue"?: ((value: import('./types').InputCodeModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: import('./types').InputCodeModelValue) => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            modelValue: import('./types').InputCodeModelValue;
        } & import('..').InputBaseProps & Partial<import('../../..').ThemeProp> & Partial<import('../../..').SizeProp>> & Readonly<{
            "onUpdate:modelValue"?: ((value: import('./types').InputCodeModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        modelValue: import('./types').InputCodeModelValue;
    } & import('..').InputBaseProps & Partial<import('../../..').ThemeProp> & Partial<import('../../..').SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: import('./types').InputCodeModelValue) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: import('./types').InputCodeModelValue) => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Pin: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLInputElement>;
};
export * from './types';
