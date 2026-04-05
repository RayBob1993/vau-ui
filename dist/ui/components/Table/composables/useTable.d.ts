import { IVTableProps, IVTableBaseData, IVTableSortDirection } from '../types';
import { ComputedRef } from 'vue';
import { UnwrapRefSimple } from '@vue/reactivity';
export declare function useTable<T extends IVTableBaseData = IVTableBaseData>(props: IVTableProps<T>): {
    isHeaderVisible: ComputedRef<boolean>;
    clearSelection: () => void;
    getSelectionRows: () => UnwrapRefSimple<T>[];
    clearSort: () => void;
    sort: (prop: keyof T, order: IVTableSortDirection) => void;
    toggleAllSelection: () => void;
};
