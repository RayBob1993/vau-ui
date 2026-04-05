import { InputPasswordNativeType } from '../types';
import { Ref } from 'vue';
export declare function useInputPasswordRoot(): {
    currentType: Ref<InputPasswordNativeType, InputPasswordNativeType>;
    handleToggleType: () => void;
};
