import type { MaybeNull } from '../../../../core/index.js';
import type { IVTabsContext, IVTabProps } from '../types';
export interface IUseTabOptions {
    context: MaybeNull<IVTabsContext>;
    props: IVTabProps;
}
export declare function useTab(options: IUseTabOptions): {
    id: string;
    isActive: import("vue").ComputedRef<boolean>;
};
