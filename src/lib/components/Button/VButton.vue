<script setup lang="ts">
  import type { IVButtonProps } from './types';
  import { computed } from 'vue';

  const props = withDefaults(defineProps<IVButtonProps>(), {
    type: 'button'
  });

  const isDisabled = computed<boolean>(() => props.loading || props.disabled);
</script>

<template>
  <button
    class="v-button"
    :class="[
      {
        'v-button--disabled': isDisabled,
        'v-button--loading': loading,
        'v-button--plain': plain,
        'v-button--wide': wide,
        [`v-button--theme-${theme}`]: theme,
        [`v-button--size-${size}`]: size
      }
    ]"
    :disabled="isDisabled"
    :type="type"
  >
    <slot/>
  </button>
</template>
