<script setup lang="ts">
  import type { RadioIndicatorSlots } from './types';
  import { useRadioIndicator } from './composables';
  import { useRadioRootContext } from './context';

  defineSlots<RadioIndicatorSlots>();

  const RadioRootContext = useRadioRootContext();

  const { isDisabled, isActive, isValid, isInvalid } = useRadioIndicator({
    radioRootContext: RadioRootContext,
  });
</script>

<template>
  <span
    class="radio-indicator"
    :class="{
      'radio-indicator--disabled': isDisabled,
      'radio-indicator--active': isActive,
      'radio-indicator--valid': isValid,
      'radio-indicator--invalid': isInvalid
    }"
  >
    <slot
      :is-disabled="isDisabled"
      :is-active="isActive"
      :is-valid="isValid"
      :is-invalid="isInvalid"
    />
  </span>
</template>
