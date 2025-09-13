<script lang="ts" setup>
  import type { IVFormProps } from './types';
  import { useToggle } from '../../../composables';

  withDefaults(defineProps<IVFormProps>(), {
    scrollIntoViewOptions: () => ({
      block: 'center'
    })
  });

  const [isValid] = useToggle();
</script>

<template>
  <form
    class="v-form"
    :class="{
      'v-form--disabled': disabled
    }"
  >
    <slot :is-valid="isValid"/>
  </form>
</template>
