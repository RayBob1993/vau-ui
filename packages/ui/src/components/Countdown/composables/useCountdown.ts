import type { IVCountdownProps, IVCountdownProgress } from '../types';
import {
  MILLISECONDS_SECOND,
  MILLISECONDS_MINUTE,
  MILLISECONDS_HOUR,
  MILLISECONDS_DAY,
  COUNTDOWN_INTERVAL,
  COUNTDOWN_NOW
} from '../constants';
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useToggle } from '@vau/core';

export interface IUseCountdownOptions {
  props: IVCountdownProps;
  onAbort?: VoidFunction;
  onEnd?: VoidFunction;
  onProgress?: (payload: IVCountdownProgress) => void;
  onStart?: VoidFunction;
}

export function useCountdown (options: IUseCountdownOptions) {
  const [isCounting, setIsCounting] = useToggle();
  const [isAutoPauseOnHide , setIsAutoPauseOnHide] = useToggle();

  const totalMilliseconds = ref<number>(0);
  const endTime = ref<number>(0);
  const requestId = ref<number>(0);

  const now = computed<number>(() => options.props.now || COUNTDOWN_NOW);
  const interval = computed<number>(() => options.props.interval || COUNTDOWN_INTERVAL);

  const years = computed<number>(() => 0);
  const months = computed<number>(() => 0);
  const days = computed<number>(() => Math.floor(totalMilliseconds.value / MILLISECONDS_DAY));
  const hours = computed<number>(() => Math.floor((totalMilliseconds.value % MILLISECONDS_DAY) / MILLISECONDS_HOUR));
  const minutes = computed<number>(() => Math.floor((totalMilliseconds.value % MILLISECONDS_HOUR) / MILLISECONDS_MINUTE));
  const seconds = computed<number>(() => Math.floor((totalMilliseconds.value % MILLISECONDS_MINUTE) / MILLISECONDS_SECOND));
  const milliseconds = computed<number>(() => Math.floor(totalMilliseconds.value % MILLISECONDS_SECOND));
  const totalHours = computed<number>(() => Math.floor(totalMilliseconds.value / MILLISECONDS_HOUR));
  const totalMinutes = computed<number>(() => Math.floor(totalMilliseconds.value / MILLISECONDS_MINUTE));
  const totalSeconds = computed<number>(() => Math.floor(totalMilliseconds.value / MILLISECONDS_SECOND));

  function start () {
    if (isCounting.value) {
      return;
    }

    setIsCounting(true);

    if (!options.props?.autoStart) {
      totalMilliseconds.value = options.props.start;
      endTime.value = now.value + options.props.start;
    }

    options.onStart?.();

    if (document.visibilityState === 'visible') {
      next();
    }
  }

  function pause () {
    cancelAnimationFrame(requestId.value);

    requestId.value = 0;
  }

  function progress () {
    if (!isCounting.value) {
      return;
    }

    update();

    if (totalMilliseconds.value > 0) {
      options.onProgress?.({
        days: days.value,
        hours: hours.value,
        minutes: minutes.value,
        seconds: seconds.value,
        milliseconds: milliseconds.value,
        totalDays: days.value,
        totalHours: totalHours.value,
        totalMinutes: totalMinutes.value,
        totalSeconds: totalSeconds.value,
        totalMilliseconds: totalMilliseconds.value,
      });
    }

    next();
  }

  function next () {
    if (!isCounting.value) {
      return;
    }

    const delay = Math.min(totalMilliseconds.value, interval.value);

    if (delay > 0) {
      let init: number;
      let prev: number;

      function step (now: number) {
        if (!init) {
          init = now;
        }

        if (!prev) {
          prev = now;
        }

        const range = now - init;

        if (range >= delay || range + ((now - prev) / 2) >= delay) {
          progress();
        } else {
          requestId.value = requestAnimationFrame(step);
        }

        prev = now;
      }

      requestId.value = requestAnimationFrame(step);
    } else {
      end();
    }
  }

  function abort () {
    if (!isCounting.value) {
      return;
    }

    pause();

    setIsCounting(false);

    options.onAbort?.();
  }

  function end () {
    if (!isCounting.value) {
      return;
    }

    pause();

    totalMilliseconds.value = 0;

    setIsCounting(false);

    options.onEnd?.();
  }

  function update () {
    if (!isCounting.value) {
      return;
    }

    totalMilliseconds.value = Math.max(0, endTime.value - now.value);
  }

  function restart () {
    pause();

    totalMilliseconds.value = options.props.start;
    endTime.value = now.value + options.props.start;

    setIsCounting(false);

    start();
  }

  function handleVisibilityChange () {
    switch (document.visibilityState) {
      case 'visible':
        if (requestId.value === 0 && isAutoPauseOnHide.value) {
          update();
          next();
        }

        setIsAutoPauseOnHide(false);
        break;

      case 'hidden':
        if (requestId.value > 0) {
          setIsAutoPauseOnHide(true);

          pause();
        }
        break;

      default:
    }
  }

  onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);

    pause();
  });

  watch(() => options.props, props => {
    totalMilliseconds.value = props.start;
    endTime.value = now.value + props.start;

    if (props.autoStart) {
      start();
    }
  }, {
    deep: true,
    immediate: true,
  });

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    start,
    abort,
    end,
    restart
  };
}
