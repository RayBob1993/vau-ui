import { InputNumberRootContextKey } from './key';
import { inject } from 'vue';

export const useInputNumberRootContext = () => inject(InputNumberRootContextKey, null);
