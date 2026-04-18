import type { DrawerProps } from '../types';
import type { ConfigProviderRootContext } from '../../ConfigProvider';
import type { MaybeNull } from '../../../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseModalRootOptions {
    configProviderRootContext: MaybeNull<ConfigProviderRootContext>;
    props: MaybeRefOrGetter<DrawerProps>;
    modelValue: MaybeRefOrGetter<boolean>;
    onClose?: VoidFunction;
    onOpen?: VoidFunction;
}
export declare function useDrawerRoot(options: UseModalRootOptions): {
    close: () => void;
    teleportTarget: import("vue").ComputedRef<string | HTMLElement | undefined>;
};
