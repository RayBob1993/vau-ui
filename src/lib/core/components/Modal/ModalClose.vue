<script setup lang="ts">
  import { useModalClose } from './composables';
  import { useModalRootContext } from './context';
  import { IconRender } from '../ConfigProvider/icon-render';
  import { useConfigProviderRootContext } from '../ConfigProvider';

  const modalRootContext = useModalRootContext();
  const configProviderRootContext = useConfigProviderRootContext();

  const { close, icon } = useModalClose({
    modalRootContext,
    configProviderRootContext
  });
</script>

<template>
  <button
    type="button"
    class="modal-close"
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
