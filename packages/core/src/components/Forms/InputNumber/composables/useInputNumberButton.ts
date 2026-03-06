import type { InputNumberButtonProps, InputNumberRootContext } from '../types';
import type { MaybeNull } from '../../../../types';
import { INPUT_NUMBER_ACTIONS } from '../constants';
import { computed, MaybeRefOrGetter, toValue } from 'vue';

export interface UseInputNumberButtonOptions {
  inputNumberRootContext: MaybeNull<InputNumberRootContext>;
  props: MaybeRefOrGetter<InputNumberButtonProps>;
}

export function useInputNumberButton (options: UseInputNumberButtonOptions) {
  const props = computed<InputNumberButtonProps>(() => toValue(options.props));

  const isDecrement = computed<boolean>(() => props.value.action === INPUT_NUMBER_ACTIONS.DECREMENT);
  const isIncrement = computed<boolean>(() => props.value.action === INPUT_NUMBER_ACTIONS.INCREMENT);

  const isDisabled = computed<boolean>(() => {
    return isDecrement.value
      ? Boolean(toValue(options.inputNumberRootContext?.isDecrementDisabled))
      : Boolean(toValue(options.inputNumberRootContext?.isIncrementDisabled));
  });

  function handleAction () {
    if (isDecrement.value) {
      options.inputNumberRootContext?.handleDecrement();
    } else if (isIncrement.value) {
      options.inputNumberRootContext?.handleIncrement();
    }
  }

  return {
    handleAction,
    isDisabled,
    isDecrement,
    isIncrement
  };
}
