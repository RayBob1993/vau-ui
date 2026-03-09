import { InputTagsRootContextKey } from './key';
import { inject } from 'vue';

export const useInputTagsRootContext = () => inject(InputTagsRootContextKey, null);
