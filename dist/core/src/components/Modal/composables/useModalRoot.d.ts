import { ModalProps } from '../types';
import { ConfigProviderRootContext } from '../../ConfigProvider';
import { MaybeNull } from '../../../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseModalRootOptions {
    configProviderRootContext: MaybeNull<ConfigProviderRootContext>;
    props: MaybeRefOrGetter<ModalProps>;
    modelValue: MaybeRefOrGetter<boolean>;
    onClose?: VoidFunction;
    onOpen?: VoidFunction;
}
export declare function useModalRoot(options: UseModalRootOptions): {
    close: () => void;
    teleportTarget: import('vue').ComputedRef<string | HTMLElement | undefined>;
};
