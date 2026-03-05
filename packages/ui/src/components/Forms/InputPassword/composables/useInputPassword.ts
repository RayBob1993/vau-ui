import type { IVInputPasswordNativeType } from '../types';
import { InputNativeTypes } from '@vau/core';
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
