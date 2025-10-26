<script setup lang="ts">
  import type { IVButtonProps } from './types';
  import { useFormProvider } from '../../composables';
  import { computed } from 'vue';

  const props = withDefaults(defineProps<IVButtonProps>(), {
    type: 'button'
  });

  const { isFormDisabled } = useFormProvider();

  const isDisabled = computed<boolean>(() => {
    return isFormDisabled.value ||
      props.loading ||
      props.disabled;
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
    <span class="v-button__content">
      <slot/>
    </span>
  </button>
</template>
