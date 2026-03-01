import type { FormItemInstance } from '../types';
import { ref } from 'vue';

export function useFormItems () {
  const formItems = ref<Array<FormItemInstance>>([]);

  function registerFormItem (newFormItem: FormItemInstance) {
    const index = formItems.value.findIndex(item => item.id === newFormItem.id);

    if (index === -1) {
      formItems.value.push(newFormItem);
    } else {
      formItems.value[index] = newFormItem;
    }
  }

  function unregisterFormItem (id: string) {
    formItems.value = formItems.value.filter(formItem => formItem.id !== id);
  }

  return {
    formItems,
    registerFormItem,
    unregisterFormItem
  };
}
