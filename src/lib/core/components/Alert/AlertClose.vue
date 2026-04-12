<script setup lang="ts">
  import { useAlertClose } from './composable';
  import { IconRender } from '../ConfigProvider/icon-render';
  import { useConfigProviderRootContext } from '../ConfigProvider';

  const configProviderRootContext = useConfigProviderRootContext();

  const { icon } = useAlertClose({
    configProviderRootContext
  });
</script>

<template>
  <button
    class="alert-close"
    type="button"
    aria-label="Close"
    tabindex="0"
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
