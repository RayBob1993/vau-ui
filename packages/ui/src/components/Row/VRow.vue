<script lang="ts" setup>
  import { Grid, type RowProps } from '@vau/core';

  const props = defineProps<RowProps>();
</script>

<template>
  <Grid.Row v-bind="props">
    <slot/>
  </Grid.Row>
</template>
