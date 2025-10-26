<script setup lang="ts">
  import type { IVDatepickerProps } from './types';
  import { useDatepicker } from './composables';

  const props = defineProps<IVDatepickerProps>();

  const { isDisabled } = useDatepicker(props);
</script>

<template>
  <div
    class="v-datepicker"
    :class="{
      'v-datepicker-disabled': isDisabled
    }"
  />
</template>
