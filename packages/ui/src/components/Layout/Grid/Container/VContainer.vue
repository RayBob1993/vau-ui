<script lang="ts" setup>
  import { Grid, type ContainerProps } from '@vau/core';

  const props = defineProps<ContainerProps>();
</script>

<template>
  <Grid.Container v-bind="props">
    <slot/>
  </Grid.Container>
</template>
