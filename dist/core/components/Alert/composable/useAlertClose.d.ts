import type { ConfigProviderRootContext, IconRenderFn } from '../../ConfigProvider';
import type { Maybe, MaybeNull } from '../../../types';
export interface UseAlertCloseOptions {
    configProviderRootContext?: MaybeNull<ConfigProviderRootContext>;
}
export declare function useAlertClose(options: UseAlertCloseOptions): {
    icon: import("vue").ComputedRef<Maybe<IconRenderFn>>;
};
