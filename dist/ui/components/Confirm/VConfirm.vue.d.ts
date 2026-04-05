import { IVConfirmProps } from './types';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<IVConfirmProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    success: () => any;
    cancel: () => any;
    close: () => any;
}, string, PublicProps, Readonly<IVConfirmProps> & Readonly<{
    onSuccess?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    confirmText: string;
    cancelText: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
