import { IVPaginationProps } from './types';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<IVPaginationProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (payload: number) => any;
    load: (payload: number) => any;
}, string, PublicProps, Readonly<IVPaginationProps> & Readonly<{
    onChange?: ((payload: number) => any) | undefined;
    onLoad?: ((payload: number) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
