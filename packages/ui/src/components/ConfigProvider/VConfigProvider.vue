<script lang="ts" setup>
  import type { IVConfigProviderProps } from './types';
  import { VConfigProviderContextKey } from './context';
  import { ru } from '../../locale';
  import { provide } from 'vue';

  const props = withDefaults(defineProps<IVConfigProviderProps>(), {
    locale: () => ru,
    direction: 'ltr',
    teleportTarget: 'body'
  });

  provide(VConfigProviderContextKey, props);
</script>

<template>
  <slot/>
</template>
