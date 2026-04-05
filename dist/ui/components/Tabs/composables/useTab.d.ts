import { MaybeNull } from '../../../../core/index.ts';
import { IVTabsContext, IVTabProps } from '../types';
import { ComputedRef } from 'vue';
export interface IUseTabOptions {
    context: MaybeNull<IVTabsContext>;
    props: IVTabProps;
}
export declare function useTab(options: IUseTabOptions): {
    id: string;
    isActive: ComputedRef<boolean>;
};
