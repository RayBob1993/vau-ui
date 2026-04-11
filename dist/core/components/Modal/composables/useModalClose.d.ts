import type { ConfigProviderRootContext, IconRenderFn } from '../../ConfigProvider';
import type { ModalRootContext } from '../types';
import type { Maybe, MaybeNull } from '../../../types';
export interface UseModalCloseOptions {
    modalRootContext?: MaybeNull<ModalRootContext>;
    configProviderRootContext?: MaybeNull<ConfigProviderRootContext>;
}
export declare function useModalClose(options: UseModalCloseOptions): {
    close: () => void;
    icon: import("vue").ComputedRef<Maybe<IconRenderFn>>;
};
