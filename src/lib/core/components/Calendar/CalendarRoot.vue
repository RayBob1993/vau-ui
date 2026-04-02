<script setup lang="ts">
  import type { CalendarProps } from './types';
  import { useCalendarRoot } from './composables';
  import { CalendarRootContextKey } from './context';
  import { provide } from 'vue';

  const props = defineProps<CalendarProps>();

  const {} = useCalendarRoot({
    props: () => props
  });

  provide(CalendarRootContextKey, {
    props: () => props
  });
</script>

<template>
  <div class="calendar">
    <slot/>
  </div>
</template>
