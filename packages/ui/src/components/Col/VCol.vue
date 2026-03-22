<script lang="ts" setup>
  import { Grid, type ColProps } from '@vau/core';

  const props = defineProps<ColProps>();
</script>

<template>
  <Grid.Col v-bind="props">
    <slot/>
  </Grid.Col>
</template>
