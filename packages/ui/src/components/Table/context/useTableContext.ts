import { VTableContextKey } from './key';
import { inject } from 'vue';

export const useTableContext = () => inject(VTableContextKey, null);
