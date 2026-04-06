import type { IVBadgeProps } from '../types';
export interface IUseBadgeOptions {
    props: IVBadgeProps;
}
export declare function useBadge(options: IUseBadgeOptions): {
    content: import("vue").ComputedRef<string>;
};
