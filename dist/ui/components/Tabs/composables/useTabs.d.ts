import type { IVTabContext } from '../types';
export declare function useTabs(): {
    tabs: import("vue").Ref<{
        id: string;
        props: {
            title?: string | undefined;
            value: import("..").IVTabValue;
            disabled?: boolean | undefined;
        };
        slots: {
            default?: ((props: import("..").IVTabScopedSlot) => Array<import("vue").VNode>) | undefined;
            title?: ((props: import("..").IVTabScopedSlot) => Array<import("vue").VNode>) | undefined;
        };
    }[], IVTabContext[] | {
        id: string;
        props: {
            title?: string | undefined;
            value: import("..").IVTabValue;
            disabled?: boolean | undefined;
        };
        slots: {
            default?: ((props: import("..").IVTabScopedSlot) => Array<import("vue").VNode>) | undefined;
            title?: ((props: import("..").IVTabScopedSlot) => Array<import("vue").VNode>) | undefined;
        };
    }[]>;
    registerTab: (newTab: IVTabContext) => void;
    unregisterTab: (oldTab: IVTabContext) => void;
};
