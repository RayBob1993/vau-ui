import type { ModalProps } from '../types';
import type { ConfigProviderRootContext } from '../../ConfigProvider';
import type { MaybeNull } from '../../../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseModalRootOptions {
    configProviderRootContext: MaybeNull<ConfigProviderRootContext>;
    props: MaybeRefOrGetter<ModalProps>;
    modelValue: MaybeRefOrGetter<boolean>;
    onClose?: VoidFunction;
    onOpen?: VoidFunction;
}
export declare function useModalRoot(options: UseModalRootOptions): {
    close: () => void;
    teleportTarget: import("vue").ComputedRef<string | HTMLElement | undefined>;
};
