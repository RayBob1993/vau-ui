<script setup lang="ts">
  import { useAccordionItemContext } from './context';
  import { useAccordionIndicator } from './composables';
  import { IconRender } from '../ConfigProvider/icon-render';
  import { useConfigProviderRootContext } from '../ConfigProvider/context';

  const accordionItemContext = useAccordionItemContext();
  const configProviderRootContext = useConfigProviderRootContext();

  const { isActive, icon } = useAccordionIndicator({
    accordionItemContext,
    configProviderRootContext
  });
</script>

<template>
  <div class="accordion-indicator">
    <slot>
      <icon-render
        v-if="icon"
        :render="icon"
      />

      <template v-else>
        {{ isActive ? '-' : '+' }}
      </template>
    </slot>
  </div>
</template>
