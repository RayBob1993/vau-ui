<script setup lang="ts">
  import type { IVCollapseProps, IVCollapseEmits } from './types';

  defineProps<IVCollapseProps>();
  defineEmits<IVCollapseEmits>();
</script>

<template>
  <div class="v-collapse">
    <slot/>
  </div>
</template>
