<script setup lang="ts">
  import type { ConfigProviderProps } from './types';
  import { ConfigProviderRootContextKey } from './context';
  import { provide } from 'vue';

  const props = defineProps<ConfigProviderProps>();

  provide(ConfigProviderRootContextKey, {
    props: () => props
  });
</script>

<template>
  <slot/>
</template>
