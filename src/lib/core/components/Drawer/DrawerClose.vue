<script setup lang="ts">
  import { useDrawerClose } from './composables';
  import { useDrawerRootContext } from './context';
  import { IconRender } from '../ConfigProvider/icon-render';
  import { useConfigProviderRootContext } from '../ConfigProvider';

  const drawerRootContext = useDrawerRootContext();
  const configProviderRootContext = useConfigProviderRootContext();

  const { close, icon } = useDrawerClose({
    drawerRootContext,
    configProviderRootContext
  });
</script>

<template>
  <button
    type="button"
    class="drawer-close"
    aria-label="Close"
    tabindex="0"
    @click="close"
  >
    <slot>
      <icon-render
        v-if="icon"
        :render="icon"
      />

      <template v-else>
        ×
      </template>
    </slot>
  </button>
</template>
