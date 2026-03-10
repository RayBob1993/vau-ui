<script setup lang="ts">
  import type { ButtonProps } from './types';
  import { useButtonRoot } from './composables';
  import { useFormContext } from '../Forms/Form/context';

  const props = defineProps<ButtonProps>();

  const { formRootContext, formItemContext } = useFormContext();

  const { isDisabled } = useButtonRoot({
    formRootContext,
    formItemContext,
    props: () => props
  });
</script>

<template>
  <button
    class="button"
    :class="[
      {
        'button--disabled': isDisabled,
        'button--loading': loading,
        'button--plain': plain,
        'button--wide': wide,
        [`button--theme-${theme}`]: theme,
        [`button--size-${size}`]: size
      }
    ]"
    :disabled="isDisabled"
    :type="type"
  >
    <slot/>
  </button>
</template>
