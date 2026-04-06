import type { IVToastProps } from '../types';
export interface IUseToastOptions {
    props: IVToastProps;
}
export declare function useToast(options: IUseToastOptions): {
    isVisible: import("vue").Ref<boolean, boolean>;
    setVisible: (payload: boolean) => void;
    clearTimer: () => void;
    startTimer: () => void;
};
