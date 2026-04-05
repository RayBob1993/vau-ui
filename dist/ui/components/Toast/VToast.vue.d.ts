import { IVToastProps } from './types';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<IVToastProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    close: () => any;
}, string, PublicProps, Readonly<IVToastProps> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    duration: number;
    clearable: boolean;
    useHtml: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
