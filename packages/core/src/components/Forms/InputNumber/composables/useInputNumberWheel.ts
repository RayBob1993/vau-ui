import type { InputNumberMousewheel } from '../types';
import type { Maybe } from '../../../../types';
import { INPUT_NUMBER_WHEEL_DELAY } from '../constants';
import { isNumber, throttle } from '../../../../utils';
import { computed, type MaybeRefOrGetter, toValue } from 'vue';

export interface IUseInputNumberWheel {
  mousewheel: MaybeRefOrGetter<Maybe<InputNumberMousewheel>>;
  onIncrement: VoidFunction;
  onDecrement: VoidFunction;
}

export function useInputNumberWheel (options: IUseInputNumberWheel) {
  const mousewheel = computed<Maybe<InputNumberMousewheel>>(() => toValue(options.mousewheel));

  const mousewheelDelay = computed<number>(() => {
    return isNumber(mousewheel.value) && mousewheel.value > 0
      ? mousewheel.value
      : INPUT_NUMBER_WHEEL_DELAY;
  });

  const handleWheel = throttle((event: WheelEvent) => {
    if (!mousewheel.value) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    if (event.deltaY < 0) {
      options.onIncrement();
    } else {
      options.onDecrement();
    }
  }, mousewheelDelay.value);

  return {
    handleWheel
  };
}
