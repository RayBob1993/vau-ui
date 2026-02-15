<script lang="ts" setup>
  import type { IVSwitchProps } from './types';
  import { useSwitch } from './composables';

  const props = defineProps<IVSwitchProps>();

  const modelValue = defineModel<boolean>({
    required: true,
  });

  const { isDisabled, validationStatus } = useSwitch({
    props
  });
</script>

<template>
  <div
    class="v-switch"
    :class="{
      'v-switch--disabled': isDisabled,
      'v-switch--invalid': validationStatus?.isError,
      'v-switch--valid': validationStatus?.isSuccess
    }"
  >
    <input
      v-model="modelValue"
      type="checkbox"
      :disabled="isDisabled"
      class="v-switch__native"
    >
  </div>
</template>
