import { SwitchRootContextKey } from './key';
import { inject } from 'vue';

export const useSwitchRootContext = () => inject(SwitchRootContextKey, null);
