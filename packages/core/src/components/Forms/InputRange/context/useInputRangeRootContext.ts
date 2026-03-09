import { InputRangeRootContextKey } from './key';
import { inject } from 'vue';

export const useInputRangeRootContext = () => inject(InputRangeRootContextKey, null);
