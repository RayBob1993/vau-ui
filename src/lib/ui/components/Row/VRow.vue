<script lang="ts" setup>
  import { Grid, type RowProps } from '@vau/core';

  const props = withDefaults(defineProps<RowProps>(), {
    wrap: true,
    guttersX: true
  });
</script>

<template>
  <Grid.Row v-bind="props">
    <slot/>
  </Grid.Row>
</template>
