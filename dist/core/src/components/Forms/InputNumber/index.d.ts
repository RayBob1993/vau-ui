export declare const InputNumber: {
    Root: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue?: import('./types').InputNumberModelValue;
        } & {
            mousewheel?: import('./types').InputNumberMousewheel;
        } & {
            min?: number;
            max?: number;
            step?: number;
        } & import('..').InputBaseProps & Partial<import('../../..').DirectionProp> & Partial<import('../../..').ThemeProp> & Partial<import('../../..').SizeProp>> & Readonly<{
            "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: number) => any;
        }, import('vue').PublicProps, {
            step: number;
            min: number;
            max: number;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            modelValue?: import('./types').InputNumberModelValue;
        } & {
            mousewheel?: import('./types').InputNumberMousewheel;
        } & {
            min?: number;
            max?: number;
            step?: number;
        } & import('..').InputBaseProps & Partial<import('../../..').DirectionProp> & Partial<import('../../..').ThemeProp> & Partial<import('../../..').SizeProp>> & Readonly<{
            "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        }>, {}, {}, {}, {}, {
            step: number;
            min: number;
            max: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        modelValue?: import('./types').InputNumberModelValue;
    } & {
        mousewheel?: import('./types').InputNumberMousewheel;
    } & {
        min?: number;
        max?: number;
        step?: number;
    } & import('..').InputBaseProps & Partial<import('../../..').DirectionProp> & Partial<import('../../..').ThemeProp> & Partial<import('../../..').SizeProp>> & Readonly<{
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: number) => any;
    }, string, {
        step: number;
        min: number;
        max: number;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Input: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
    Button: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./types').InputNumberButtonProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLButtonElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./types').InputNumberButtonProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./types').InputNumberButtonProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};
export * from './constants';
export * from './types';
