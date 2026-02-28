import type { FormItemInstance } from '../types';
import { ref } from 'vue';

export function useFormItems () {
  const formItems = ref<Array<FormItemInstance>>([]);

  function registerFormItem (newFormItem: FormItemInstance) {
    const formItem = formItems.value.find(formItem => formItem.id === newFormItem.id);

    if (!formItem) {
      formItems.value.push(newFormItem);
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
