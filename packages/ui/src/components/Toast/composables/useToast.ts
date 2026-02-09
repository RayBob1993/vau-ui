import type { IVToastProps } from '../types';
import { TOAST_DURATION } from '../constants';
import { isNumber, type MaybeNull, useToggle } from '@vau/core';
import { onMounted, computed } from 'vue';

export interface IUseToastOptions {
  props: IVToastProps;
}

export function useToast (options: IUseToastOptions) {
  const duration = computed<number>(() => isNumber(options.props.duration) ? options.props.duration : TOAST_DURATION);

  const [isVisible, setVisible] = useToggle(false);
  let timer: MaybeNull<NodeJS.Timeout> = null;

  function clearTimer () {
    if (!timer) {
      return;
    }

    clearTimeout(timer);
  }

  function startTimer () {
    clearTimer();

    if (duration.value === 0) {
      return;
    }

    timer = setTimeout(() => {
      setVisible(false);
    }, duration.value);
  }

  onMounted(() => {
    startTimer();

    setVisible(true);
  });

  return {
    isVisible,
    setVisible,
    clearTimer,
    startTimer
  };
}
