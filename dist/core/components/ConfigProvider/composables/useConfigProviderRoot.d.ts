import type { ConfigProviderProps } from '../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseConfigProviderRootOptions {
    props: MaybeRefOrGetter<ConfigProviderProps>;
}
export declare function useConfigProviderRoot(options: UseConfigProviderRootOptions): {
    t: (path: string) => string;
};
