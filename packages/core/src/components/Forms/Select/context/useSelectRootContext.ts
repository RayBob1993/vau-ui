import { SelectRootContextKey } from './key';
import { inject } from 'vue';

export const useSelectRootContext = () => inject(SelectRootContextKey,null);
