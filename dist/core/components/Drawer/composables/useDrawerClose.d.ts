import type { ConfigProviderRootContext, IconRenderFn } from '../../ConfigProvider';
import type { DrawerRootContext } from '../types';
import type { Maybe, MaybeNull } from '../../../types';
export interface UseDrawerCloseOptions {
    drawerRootContext?: MaybeNull<DrawerRootContext>;
    configProviderRootContext?: MaybeNull<ConfigProviderRootContext>;
}
export declare function useDrawerClose(options: UseDrawerCloseOptions): {
    close: () => void;
    icon: import("vue").ComputedRef<Maybe<IconRenderFn>>;
};
