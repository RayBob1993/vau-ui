<script setup lang="ts">
  import type { IVDatepickerProps } from './types';
  import { useDatepicker } from './composables';

  const props = defineProps<IVDatepickerProps>();

  const { isDisabled, validationStatus } = useDatepicker({
    props
  });
</script>

<template>
  <div
    class="v-datepicker"
    :class="{
      'v-datepicker--disabled': isDisabled,
      'v-datepicker--invalid': validationStatus?.isError,
      'v-datepicker--valid': validationStatus?.isSuccess
    }"
  />
</template>
