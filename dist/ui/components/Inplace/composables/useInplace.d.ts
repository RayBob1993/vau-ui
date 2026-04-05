import { Ref } from 'vue';
interface IUseInplaceOptions {
    onOpen?: VoidFunction;
    onClose?: VoidFunction;
}
export declare function useInplace(options?: IUseInplaceOptions): {
    isVisible: Ref<boolean, boolean>;
    handleOpen: () => void;
    handleClose: () => void;
};
export {};
