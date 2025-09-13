<script lang="ts" setup>
  import type { IVConfigProviderProps } from './types';
  import { VConfigProviderContextKey } from './context';
  import { provide } from 'vue';

  const props = withDefaults(defineProps<IVConfigProviderProps>(), {
    direction: 'ltr',
    teleportTarget: 'body'
  });

  provide(VConfigProviderContextKey, props);
</script>

<template>
  <slot/>
</template>
