import type { Ref } from 'vue';
import type { IVFormItemInstance } from '../../FormItem/types';
import { type Maybe, useScrollTo } from '@vau/core';

interface IUseFormErrorScrollPayload {
  formItems: Ref<Array<IVFormItemInstance>>;
  scrollIntoViewOptions: ScrollIntoViewOptions;
}

export function useFormErrorScroll ({ formItems, scrollIntoViewOptions }: IUseFormErrorScrollPayload) {
  function scrollToErrorField () {
    const invalidFormItem: Maybe<IVFormItemInstance> = formItems.value.find(formItem => formItem.validationStatus.isError);

    if (!invalidFormItem) {
      return;
    }

    const el = invalidFormItem?.el;

    if (!el) {
      return;
    }

    useScrollTo(el, scrollIntoViewOptions);
  }

  return {
    scrollToErrorField
  };
}
