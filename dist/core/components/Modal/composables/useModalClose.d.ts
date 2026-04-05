import { ConfigProviderRootContext, IconRenderFn } from '../../ConfigProvider/types';
import { ModalRootContext } from '../types';
import { Maybe, MaybeNull } from '../../../types';
import { ComputedRef } from 'vue';
export interface UseModalCloseOptions {
    modalRootContext?: MaybeNull<ModalRootContext>;
    configProviderRootContext?: MaybeNull<ConfigProviderRootContext>;
}
export declare function useModalClose(options: UseModalCloseOptions): {
    close: () => void;
    icon: ComputedRef<Maybe<IconRenderFn>>;
};
