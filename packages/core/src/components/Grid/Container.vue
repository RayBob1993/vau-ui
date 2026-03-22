<script lang="ts" setup>
  import type { ContainerProps } from './types';

  defineProps<ContainerProps>();
</script>

<template>
  <div
    class="container"
    :class="{
      [`container--size-${size}`]: size
    }"
  >
    <slot/>
  </div>
</template>
