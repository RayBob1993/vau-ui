export declare const InputRange: {
    Root: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue: import('./types').InputRangeModelValue;
        } & {
            min?: number;
            max?: number;
            step?: number;
        } & import('..').InputBaseProps & Partial<import('../../..').ThemeProp> & Partial<import('../../..').SizeProp>> & Readonly<{
            "onUpdate:modelValue"?: ((value: import('./types').InputRangeModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: import('./types').InputRangeModelValue) => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            modelValue: import('./types').InputRangeModelValue;
        } & {
            min?: number;
            max?: number;
            step?: number;
        } & import('..').InputBaseProps & Partial<import('../../..').ThemeProp> & Partial<import('../../..').SizeProp>> & Readonly<{
            "onUpdate:modelValue"?: ((value: import('./types').InputRangeModelValue) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        modelValue: import('./types').InputRangeModelValue;
    } & {
        min?: number;
        max?: number;
        step?: number;
    } & import('..').InputBaseProps & Partial<import('../../..').ThemeProp> & Partial<import('../../..').SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: import('./types').InputRangeModelValue) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: import('./types').InputRangeModelValue) => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Slider: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
};
export * from './types';
