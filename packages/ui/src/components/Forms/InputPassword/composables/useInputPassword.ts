import type { IVInputPasswordNativeType } from '../types';
import { InputNativeTypes } from '../../../../constants';
import { ref } from 'vue';

export function useInputPassword () {
  const currentType = ref<IVInputPasswordNativeType>(InputNativeTypes.PASSWORD);

  function handleToggleType () {
    if (currentType.value === InputNativeTypes.PASSWORD) {
      currentType.value = InputNativeTypes.TEXT;
    } else {
      currentType.value = InputNativeTypes.PASSWORD;
    }
  }

  return {
    currentType,
    handleToggleType
  };
}
