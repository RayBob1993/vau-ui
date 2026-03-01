import type { ButtonProps } from '../types';
import type { FormRootContext, FormItemContext } from '../../Forms';
import type { MaybeNull } from '../../../types';
import { computed, MaybeRefOrGetter, toValue } from 'vue';

export interface UseButtonRootOptions {
  formRootContext: MaybeNull<FormRootContext>;
  formItemContext: MaybeNull<FormItemContext>;
  props: MaybeRefOrGetter<ButtonProps>;
}

export function useButtonRoot (options: UseButtonRootOptions) {
  const props = computed<ButtonProps>(() => toValue(options.props));

  const isDisabled = computed<boolean>(() => {
    return Boolean(
      options.formRootContext?.props.disabled ||
      options.formItemContext?.props.disabled ||
      props.value?.disabled ||
      props.value?.loading
    );
  });

  return {
    isDisabled
  };
}
