import { ConfigProviderProps } from '../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseConfigProviderRootOptions {
    props: MaybeRefOrGetter<ConfigProviderProps>;
}
export declare function useConfigProviderRoot(options: UseConfigProviderRootOptions): {
    t: (path: string) => string;
};
