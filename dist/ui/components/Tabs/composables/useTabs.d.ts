import { IVTabContext } from '../types';
import { Ref, VNode } from 'vue';
import { IVTabValue, IVTabScopedSlot } from '..';
export declare function useTabs(): {
    tabs: Ref<{
        id: string;
        props: {
            title?: string | undefined;
            value: IVTabValue;
            disabled?: boolean | undefined;
        };
        slots: {
            default?: ((props: IVTabScopedSlot) => Array< VNode>) | undefined;
            title?: ((props: IVTabScopedSlot) => Array< VNode>) | undefined;
        };
    }[], IVTabContext[] | {
        id: string;
        props: {
            title?: string | undefined;
            value: IVTabValue;
            disabled?: boolean | undefined;
        };
        slots: {
            default?: ((props: IVTabScopedSlot) => Array< VNode>) | undefined;
            title?: ((props: IVTabScopedSlot) => Array< VNode>) | undefined;
        };
    }[]>;
    registerTab: (newTab: IVTabContext) => void;
    unregisterTab: (oldTab: IVTabContext) => void;
};
