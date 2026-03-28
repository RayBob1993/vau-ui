<script setup lang="ts">
  import type { IVCountdownProps, IVCountdownEmits, IVCountdownExpose, IVCountdownSlots } from './types';
  import { useCountdown } from './composables';
  import { COUNTDOWN_INTERVAL, COUNTDOWN_NOW } from './constants';

  const props = withDefaults(defineProps<IVCountdownProps>(), {
    interval: () => COUNTDOWN_INTERVAL,
    now: () => COUNTDOWN_NOW
  });

  const emit = defineEmits<IVCountdownEmits>();

  defineSlots<IVCountdownSlots>();

  const {
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
  } = useCountdown({
    props,
    onAbort: () => emit('abort'),
    onEnd: () => emit('end'),
    onProgress: payload => emit('progress', payload),
    onStart: () => emit('start'),
  });

  defineExpose<IVCountdownExpose>({
    start,
    abort,
    end,
    restart
  });
</script>

<template>
  <div class="v-countdown">
    <slot
      :years="years"
      :months="months"
      :days="days"
      :hours="hours"
      :minutes="minutes"
      :seconds="seconds"
      :milliseconds="milliseconds"
    />
  </div>
</template>
