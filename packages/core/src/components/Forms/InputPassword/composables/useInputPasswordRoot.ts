import type { InputPasswordNativeType } from '../types';
import { InputNativeTypes } from '../../../../constants';
import { ref } from 'vue';

export function useInputPasswordRoot () {
  const currentType = ref<InputPasswordNativeType>(InputNativeTypes.PASSWORD);

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
