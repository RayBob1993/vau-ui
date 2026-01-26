<script setup lang="ts">
  import type { IVButtonProps } from './types';
  import { useButton } from './composables';

  const props = withDefaults(defineProps<IVButtonProps>(), {
    type: 'button'
  });

  const { isDisabled } = useButton({
    props
  });
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
    <span class="v-button__label">
      <slot/>
    </span>
  </button>
</template>
