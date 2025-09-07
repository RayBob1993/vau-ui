import { VFormContextKey } from './key';
import { inject } from 'vue';

export const useFormContext = () => inject(VFormContextKey, null);
