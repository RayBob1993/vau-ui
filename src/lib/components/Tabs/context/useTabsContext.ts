import { VTabsContextKey } from './key';
import { inject } from 'vue';

export const useTabsContext = () => inject(VTabsContextKey);
