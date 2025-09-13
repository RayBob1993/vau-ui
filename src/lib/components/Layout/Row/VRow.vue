<script lang="ts" setup>
  import type { IVRowProps } from './types';

  defineProps<IVRowProps>();
</script>

<template>
  <div class="v-row">
    <slot/>
  </div>
</template>
