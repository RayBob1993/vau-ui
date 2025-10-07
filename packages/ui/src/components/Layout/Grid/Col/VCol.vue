<script lang="ts" setup>
  import type { IVColProps } from './types';

  defineProps<IVColProps>();
</script>

<template>
  <div class="v-col">
    <slot/>
  </div>
</template>
