import { VDropdownContextKey } from './key';
import { inject } from 'vue';

export const useDropdownContext = () => inject(VDropdownContextKey);
