interface IUseInplaceOptions {
    onOpen?: VoidFunction;
    onClose?: VoidFunction;
}
export declare function useInplace(options?: IUseInplaceOptions): {
    isVisible: import("vue").Ref<boolean, boolean>;
    handleOpen: () => void;
    handleClose: () => void;
};
export {};
