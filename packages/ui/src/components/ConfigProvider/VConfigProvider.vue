<script lang="ts" setup>
  import  { ConfigProvider, type ConfigProviderProps } from '@vau/core';

  const props = defineProps<ConfigProviderProps>();
</script>

<template>
  <ConfigProvider.Root v-bind="props">
    <slot/>
  </ConfigProvider.Root>
</template>
