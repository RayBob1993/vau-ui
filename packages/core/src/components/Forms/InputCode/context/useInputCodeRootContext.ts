import { InputCodeRootContextKey } from './key';
import { inject } from 'vue';

export const useInputCodeRootContext = () => inject(InputCodeRootContextKey, null);
