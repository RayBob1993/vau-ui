<script setup lang="ts">
  import type { ConfigProviderProps } from './types';
  import { ConfigProviderRootContextKey } from './context';
  import { useConfigProviderRoot } from './composables';
  import { provide } from 'vue';

  const props = defineProps<ConfigProviderProps>();

  const { t } = useConfigProviderRoot({
    props: () => props
  });

  provide(ConfigProviderRootContextKey, {
    props: () => props,
    t
  });
</script>

<template>
  <slot/>
</template>
