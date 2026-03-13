export declare const Select: {
    Root: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue: import('./types').SelectModelValue;
        } & {
            disabled?: boolean;
            multiple?: boolean;
            clearable?: boolean;
            searchable?: boolean;
            loading?: boolean;
            placeholder?: string;
        } & Partial<import('../../..').ThemeProp> & Partial<import('../../..').SizeProp>> & Readonly<{
            onChange?: ((payload: import('./types').SelectModelValue) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import('./types').SelectModelValue) => any) | undefined;
            onClose?: (() => any) | undefined;
            onOpened?: ((payload: Element) => any) | undefined;
            onClosed?: ((payload: Element) => any) | undefined;
            onOpen?: (() => any) | undefined;
            onClear?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            change: (payload: import('./types').SelectModelValue) => any;
            "update:modelValue": (value: import('./types').SelectModelValue) => any;
            close: () => any;
            opened: (payload: Element) => any;
            closed: (payload: Element) => any;
            open: () => any;
            clear: () => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            modelValue: import('./types').SelectModelValue;
        } & {
            disabled?: boolean;
            multiple?: boolean;
            clearable?: boolean;
            searchable?: boolean;
            loading?: boolean;
            placeholder?: string;
        } & Partial<import('../../..').ThemeProp> & Partial<import('../../..').SizeProp>> & Readonly<{
            onChange?: ((payload: import('./types').SelectModelValue) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import('./types').SelectModelValue) => any) | undefined;
            onClose?: (() => any) | undefined;
            onOpened?: ((payload: Element) => any) | undefined;
            onClosed?: ((payload: Element) => any) | undefined;
            onOpen?: (() => any) | undefined;
            onClear?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        modelValue: import('./types').SelectModelValue;
    } & {
        disabled?: boolean;
        multiple?: boolean;
        clearable?: boolean;
        searchable?: boolean;
        loading?: boolean;
        placeholder?: string;
    } & Partial<import('../../..').ThemeProp> & Partial<import('../../..').SizeProp>> & Readonly<{
        onChange?: ((payload: import('./types').SelectModelValue) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import('./types').SelectModelValue) => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpened?: ((payload: Element) => any) | undefined;
        onClosed?: ((payload: Element) => any) | undefined;
        onOpen?: (() => any) | undefined;
        onClear?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (payload: import('./types').SelectModelValue) => any;
        "update:modelValue": (value: import('./types').SelectModelValue) => any;
        close: () => any;
        opened: (payload: Element) => any;
        closed: (payload: Element) => any;
        open: () => any;
        clear: () => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Option: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./types').OptionProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./types').OptionProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./types').OptionProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./types').OptionSlots> & import('./types').OptionSlots;
    });
    Trigger: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLButtonElement, import('vue').ComponentProvideOptions, {
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
    Dropdown: {
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
    Value: {
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
};
