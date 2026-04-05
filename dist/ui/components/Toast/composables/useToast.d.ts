import { IVToastProps } from '../types';
import { Ref } from 'vue';
export interface IUseToastOptions {
    props: IVToastProps;
}
export declare function useToast(options: IUseToastOptions): {
    isVisible: Ref<boolean, boolean>;
    setVisible: (payload: boolean) => void;
    clearTimer: () => void;
    startTimer: () => void;
};
