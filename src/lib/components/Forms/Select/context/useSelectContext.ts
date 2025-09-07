import { VSelectContextKey } from './key';
import { inject } from 'vue';

export const useSelectContext = () => inject(VSelectContextKey);
