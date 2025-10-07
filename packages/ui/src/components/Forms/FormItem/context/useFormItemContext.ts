import { VFormItemContextKey } from './key';
import { inject } from 'vue';

export const useFormItemContext = () => inject(VFormItemContextKey, null);
