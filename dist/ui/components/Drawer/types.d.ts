import type { DrawerScopedSlot, DrawerProps } from '../../../core/index.js';
import type { VNode } from 'vue';
export interface IVDrawerProps extends DrawerProps {
    title?: string;
}
export interface IVDrawerSlots {
    default?: (props: DrawerScopedSlot) => Array<VNode>;
    header?: (props: DrawerScopedSlot) => Array<VNode>;
    footer?: (props: DrawerScopedSlot) => Array<VNode>;
}
