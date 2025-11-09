import type { IVCountdownProps } from '../types';
import { computed, ref } from 'vue';
import { useToggle } from '@vau/core';

export function useCountdown (props: IVCountdownProps) {
  const [isCounting, setIsCounting] = useToggle();

  const totalMilliseconds = ref<number>(0);
  const endTime = ref<number>(0);

  const years = computed<number>(() => 0);
  const months = computed<number>(() => 0);
  const days = computed<number>(() => 0);
  const hours = computed<number>(() => 0);
  const minutes = computed<number>(() => 0);
  const seconds = computed<number>(() => 0);
  const milliseconds = computed<number>(() => 0);

  function start () {
    if (isCounting.value) {
      return;
    }

    setIsCounting(true);
  }

  function pause () {

  }

  function progress () {

  }

  function abort () {
    if (!isCounting.value) {
      return;
    }
  }

  function end () {
    if (!isCounting.value) {
      return;
    }
  }

  function restart () {
    pause();
    setIsCounting(false);
    start();
  }

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
