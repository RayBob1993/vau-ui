<script setup lang="ts">
  import type { IVCountdownProps, IVCountdownEmits, IVCountdownExpose, IVCountdownSlots } from './types';
  import { useCountdown } from './composables';

  const props = withDefaults(defineProps<IVCountdownProps>(), {
    interval: () => 1000
  });

  defineEmits<IVCountdownEmits>();
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
  } = useCountdown(props);

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
