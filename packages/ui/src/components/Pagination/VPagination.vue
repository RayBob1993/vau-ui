<script lang="ts" setup>
  import type { IVPaginationProps, IVPaginationEmits } from './types';

  defineProps<IVPaginationProps>();
  defineEmits<IVPaginationEmits>();
</script>

<template>
  <div class="v-pagination"/>
</template>
