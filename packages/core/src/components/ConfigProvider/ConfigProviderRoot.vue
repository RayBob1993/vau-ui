<script setup lang="ts">
  import type { ConfigProviderProps } from './types';
  import { ConfigProviderRootContextKey } from './context';
  import { useConfigProviderRoot } from './composables';
  import { CONFIG_PROVIDER_TELEPORT_TARGET_DEFAULT } from './constants';
  import { provide } from 'vue';

  const props = withDefaults(defineProps<ConfigProviderProps>(), {
    teleportTarget: () => CONFIG_PROVIDER_TELEPORT_TARGET_DEFAULT
  });

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
