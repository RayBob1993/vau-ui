import { IVBadgeProps } from '../types';
import { ComputedRef } from 'vue';
export interface IUseBadgeOptions {
    props: IVBadgeProps;
}
export declare function useBadge(options: IUseBadgeOptions): {
    content: ComputedRef<string>;
};
