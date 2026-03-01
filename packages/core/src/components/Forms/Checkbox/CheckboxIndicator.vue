<script setup lang="ts">
  import type { CheckboxIndicatorSlots } from './types';
  import { useCheckboxIndicator } from './composables';
  import { useCheckboxRootContext } from './context';

  defineSlots<CheckboxIndicatorSlots>();

  const CheckboxRootContext = useCheckboxRootContext();

  const { isDisabled, isActive, isIndeterminate, isValid, isInvalid } = useCheckboxIndicator({
    checkboxRootContext: CheckboxRootContext,
  });
</script>

<template>
  <span
    class="checkbox-indicator"
    :class="{
      'checkbox-indicator--disabled': isDisabled,
      'checkbox-indicator--active': isActive,
      'checkbox-indicator--indeterminate': isIndeterminate,
      'checkbox-indicator--valid': isValid,
      'checkbox-indicator--invalid': isInvalid
    }"
  >
    <slot
      :is-disabled="isDisabled"
      :is-active="isActive"
      :is-indeterminate="isIndeterminate"
      :is-valid="isValid"
      :is-invalid="isInvalid"
    />
  </span>
</template>
