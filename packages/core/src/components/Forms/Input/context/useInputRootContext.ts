import { InputRootContextKey } from './key';
import { inject } from 'vue';

export const useInputRootContext = () => inject(InputRootContextKey, null);
